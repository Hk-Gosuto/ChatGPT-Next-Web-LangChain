import { NextRequest, NextResponse } from "next/server";
import { AgentApi, RequestBody, ResponseBody } from "../agentapi";
import { auth } from "@/app/api/auth";
import { EdgeTool } from "../../../../langchain-tools/edge_tools";
import { ACCESS_CODE_PREFIX } from "@/app/constant";
import { getServerSideConfig } from "@/app/config/server";
import { OpenAI } from "langchain/llms/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { NodeJSTool } from "@/app/api/langchain-tools/nodejs_tools";

async function handle(req: NextRequest) {
  if (req.method === "OPTIONS") {
    return NextResponse.json({ body: "OK" }, { status: 200 });
  }
  try {
    const authResult = auth(req);
    if (authResult.error) {
      return NextResponse.json(authResult, {
        status: 401,
      });
    }

    const serverConfig = getServerSideConfig();

    const encoder = new TextEncoder();
    const transformStream = new TransformStream();
    const writer = transformStream.writable.getWriter();

    const reqBody: RequestBody = await req.json();
    const authToken = req.headers.get("Authorization") ?? "";
    const token = authToken.trim().replaceAll("Bearer ", "").trim();
    const isOpenAiKey = !token.startsWith(ACCESS_CODE_PREFIX);

    let apiKey = serverConfig.apiKey;
    if (isOpenAiKey && token) {
      apiKey = token;
    }

    // support base url
    let baseUrl = "https://api.openai.com/v1";
    if (serverConfig.baseUrl) baseUrl = serverConfig.baseUrl;
    if (
      reqBody.baseUrl?.startsWith("http://") ||
      reqBody.baseUrl?.startsWith("https://")
    )
      baseUrl = reqBody.baseUrl;
    if (!baseUrl.endsWith("/v1"))
      baseUrl = baseUrl.endsWith("/") ? `${baseUrl}v1` : `${baseUrl}/v1`;
    console.log("[baseUrl]", baseUrl);

    const model = new OpenAI(
      {
        temperature: 0,
        modelName: reqBody.model,
        openAIApiKey: apiKey,
      },
      { basePath: baseUrl },
    );
    const embeddings = new OpenAIEmbeddings(
      {
        openAIApiKey: apiKey,
      },
      { basePath: baseUrl },
    );

    var dalleCallback = async (data: string) => {
      var response = new ResponseBody();
      response.message = data;
      await writer.ready;
      await writer.write(
        encoder.encode(`data: ${JSON.stringify(response)}\n\n`),
      );
    };

    var edgeTool = new EdgeTool(
      apiKey,
      baseUrl,
      model,
      embeddings,
      dalleCallback,
    );
    var nodejsTool = new NodeJSTool(
      apiKey,
      baseUrl,
      model,
      embeddings,
      dalleCallback,
    );
    var edgeTools = await edgeTool.getCustomTools();
    var nodejsTools = await nodejsTool.getCustomTools();
    edgeTools.push(nodejsTools);
    var agentApi = new AgentApi(encoder, transformStream, writer);
    return await agentApi.getApiHandler(req, reqBody, nodejsTools);
  } catch (e) {
    return new Response(JSON.stringify({ error: (e as any).message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const GET = handle;
export const POST = handle;

export const runtime = "nodejs";
