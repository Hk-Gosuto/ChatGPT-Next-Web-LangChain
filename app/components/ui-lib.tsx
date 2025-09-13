/* eslint-disable @next/next/no-img-element */
import styles from "./ui-lib.module.scss";
import LoadingIcon from "../icons/three-dots.svg";
import CloseIcon from "../icons/close.svg";
import EyeIcon from "../icons/eye.svg";
import EyeOffIcon from "../icons/eye-off.svg";
import DownIcon from "../icons/down.svg";
import ConfirmIcon from "../icons/confirm.svg";
import CancelIcon from "../icons/cancel.svg";
import MaxIcon from "../icons/max.svg";
import MinIcon from "../icons/min.svg";
import SearchIcon from "../icons/search.svg";

import { ServiceProvider } from "../constant";
import Locale from "../locales";

// 预导入所有需要的图标
import * as LobeIcons from "@lobehub/icons";

const ICON_NAME_MAP: Record<string, string> = {
  adobe: "Adobe",
  adobefirefly: "AdobeFirefly",
  agui: "Agui",
  ai21: "Ai21",
  ai302: "Ai302",
  ai360: "Ai360",
  aihubmix: "AiHubMix",
  aimass: "AiMass",
  aionlabs: "AionLabs",
  aistudio: "AiStudio",
  akashchat: "AkashChat",
  alephalpha: "AlephAlpha",
  alibaba: "Alibaba",
  alibabacloud: "AlibabaCloud",
  antgroup: "AntGroup",
  anthropic: "Anthropic",
  anyscale: "Anyscale",
  assemblyai: "AssemblyAI",
  automatic: "Automatic",
  aws: "Aws",
  aya: "Aya",
  azure: "Azure",
  azureai: "AzureAI",
  baai: "BAAI",
  baichuan: "Baichuan",
  baidu: "Baidu",
  baiducloud: "BaiduCloud",
  bailian: "Bailian",
  baseten: "Baseten",
  bedrock: "Bedrock",
  bfl: "Bfl",
  bilibili: "Bilibili",
  bilibiliindex: "BilibiliIndex",
  bing: "Bing",
  burncloud: "BurnCloud",
  bytedance: "ByteDance",
  centml: "CentML",
  cerebras: "Cerebras",
  chatglm: "ChatGLM",
  civitai: "Civitai",
  claude: "Claude",
  cline: "Cline",
  clipdrop: "Clipdrop",
  cloudflare: "Cloudflare",
  codegeex: "CodeGeeX",
  cogvideo: "CogVideo",
  cogview: "CogView",
  cohere: "Cohere",
  colab: "Colab",
  cometapi: "CometAPI",
  comfyui: "ComfyUI",
  commanda: "CommandA",
  copilot: "Copilot",
  copilotkit: "CopilotKit",
  coqui: "Coqui",
  coze: "Coze",
  crewai: "CrewAI",
  crusoe: "Crusoe",
  cursor: "Cursor",
  dalle: "Dalle",
  dbrx: "Dbrx",
  deepai: "DeepAI",
  deepinfra: "DeepInfra",
  deepmind: "DeepMind",
  deepseek: "DeepSeek",
  dify: "Dify",
  doc2x: "Doc2X",
  docsearch: "DocSearch",
  dolphin: "Dolphin",
  doubao: "Doubao",
  dreammachine: "DreamMachine",
  elevenlabs: "ElevenLabs",
  elevenx: "ElevenX",
  exa: "Exa",
  fal: "Fal",
  fastgpt: "FastGPT",
  featherless: "Featherless",
  figma: "Figma",
  fireworks: "Fireworks",
  fishaudio: "FishAudio",
  flora: "Flora",
  flowith: "Flowith",
  flux: "Flux",
  friendli: "Friendli",
  gemini: "Gemini",
  gemma: "Gemma",
  giteeai: "GiteeAI",
  github: "Github",
  githubcopilot: "GithubCopilot",
  glama: "Glama",
  glif: "Glif",
  glmv: "GLMV",
  google: "Google",
  goose: "Goose",
  gradio: "Gradio",
  greptile: "Greptile",
  grok: "Grok",
  groq: "Groq",
  hailuo: "Hailuo",
  haiper: "Haiper",
  hedra: "Hedra",
  higress: "Higress",
  huggingface: "HuggingFace",
  hunyuan: "Hunyuan",
  hyperbolic: "Hyperbolic",
  ibm: "IBM",
  ideogram: "Ideogram",
  iflytekcloud: "IFlyTekCloud",
  iflytek: "IFlyTekCloud",
  inference: "Inference",
  infermatic: "Infermatic",
  infinigence: "Infinigence",
  inflection: "Inflection",
  internlm: "InternLM",
  jimeng: "Jimeng",
  jina: "Jina",
  kera: "Kera",
  kimi: "Kimi",
  kling: "Kling",
  kluster: "Kluster",
  kolors: "Kolors",
  lambda: "Lambda",
  langchain: "LangChain",
  langfuse: "Langfuse",
  langgraph: "LangGraph",
  langsmith: "LangSmith",
  leptonai: "LeptonAI",
  lg: "LG",
  lightricks: "Lightricks",
  liquid: "Liquid",
  livekit: "LiveKit",
  llamaindex: "LlamaIndex",
  llava: "LLaVA",
  lmstudio: "LmStudio",
  lobehub: "LobeHub",
  lovable: "Lovable",
  luma: "Luma",
  magic: "Magic",
  make: "Make",
  manus: "Manus",
  mastra: "Mastra",
  mcp: "MCP",
  mcpso: "McpSo",
  menlo: "Menlo",
  meta: "Meta",
  metaai: "MetaAI",
  metagpt: "MetaGPT",
  microsoft: "Microsoft",
  midjourney: "Midjourney",
  minimax: "Minimax",
  mistral: "Mistral",
  modelscope: "ModelScope",
  monica: "Monica",
  moonshot: "Moonshot",
  moonshotai: "Moonshot",
  myshell: "MyShell",
  n8n: "N8n",
  nebius: "Nebius",
  newapi: "NewAPI",
  notebooklm: "NotebookLM",
  notion: "Notion",
  nousresearch: "NousResearch",
  nova: "Nova",
  novelai: "NovelAI",
  novita: "Novita",
  nplcloud: "NPLCloud",
  nvidia: "Nvidia",
  ollama: "Ollama",
  openai: "OpenAI",
  openchat: "OpenChat",
  openrouter: "OpenRouter",
  openwebui: "OpenWebUI",
  palm: "PaLM",
  parasail: "Parasail",
  perplexity: "Perplexity",
  phidata: "Phidata",
  phind: "Phind",
  pika: "Pika",
  pixverse: "PixVerse",
  player2: "Player2",
  poe: "Poe",
  pollinations: "Pollinations",
  ppio: "PPIO",
  pydanticai: "PydanticAI",
  qingyan: "Qingyan",
  qiniu: "Qiniu",
  qwen: "Qwen",
  railway: "Railway",
  recraft: "Recraft",
  replicate: "Replicate",
  replit: "Replit",
  rsshub: "RSSHub",
  runway: "Runway",
  rwkv: "Rwkv",
  sambanova: "SambaNova",
  search1api: "Search1API",
  searchapi: "SearchApi",
  sensenova: "SenseNova",
  siliconcloud: "SiliconCloud",
  siliconflow: "SiliconCloud",
  skywork: "Skywork",
  smithery: "Smithery",
  snowflake: "Snowflake",
  sophnet: "SophNet",
  spark: "Spark",
  stability: "Stability",
  statecloud: "StateCloud",
  stepfun: "Stepfun",
  suno: "Suno",
  sync: "Sync",
  targon: "Targon",
  tavily: "Tavily",
  tencent: "Tencent",
  tencentcloud: "TencentCloud",
  tiangong: "Tiangong",
  tii: "TII",
  together: "Together",
  topazlabs: "TopazLabs",
  trae: "Trae",
  tripo: "Tripo",
  turix: "TuriX",
  udio: "Udio",
  unstructured: "Unstructured",
  upstage: "Upstage",
  v0: "V0",
  vectorizerai: "VectorizerAI",
  vercel: "Vercel",
  vertexai: "VertexAI",
  vidu: "Vidu",
  viggle: "Viggle",
  vllm: "Vllm",
  volcengine: "Volcengine",
  voyage: "Voyage",
  wenxin: "Wenxin",
  windsurf: "Windsurf",
  workersai: "WorkersAI",
  xai: "XAI",
  xinference: "Xinference",
  xuanyuan: "Xuanyuan",
  yandex: "Yandex",
  yi: "Yi",
  youmind: "YouMind",
  yuanbao: "Yuanbao",
  zai: "ZAI",
  zapier: "Zapier",
  zeabur: "Zeabur",
  zeroone: "ZeroOne",
  zhipu: "Zhipu",
  "z-ai": "Zhipu",
};

// 创建图标字典，预先导入所有图标
const PROVIDER_ICON_DICT: Record<string, any> = {};

// 初始化图标字典
Object.entries(ICON_NAME_MAP).forEach(([key, iconName]) => {
  const icon = (LobeIcons as any)[iconName];
  if (icon) {
    PROVIDER_ICON_DICT[key] = icon;
    PROVIDER_ICON_DICT[iconName] = icon; // 同时支持原始名称
  }
});

// 同步获取图标组件的函数
const getProviderIcon = (providerName: string) => {
  // 首先尝试直接匹配
  if (PROVIDER_ICON_DICT[providerName]) {
    return PROVIDER_ICON_DICT[providerName];
  }

  // 使用映射表进行大小写无关的匹配
  const lowerProviderName = providerName.toLowerCase();
  if (PROVIDER_ICON_DICT[lowerProviderName]) {
    return PROVIDER_ICON_DICT[lowerProviderName];
  }

  // 尝试映射表中的名称
  const mappedName = ICON_NAME_MAP[lowerProviderName];
  if (mappedName && PROVIDER_ICON_DICT[mappedName]) {
    return PROVIDER_ICON_DICT[mappedName];
  }

  return null;
};

// 提供商图标组件缓存
const PROVIDER_ICON_CACHE: Record<string, any> = {};

// 模型选择器相关接口
interface ModelItem {
  title: string;
  value: string;
  displayName?: string;
  provider?: {
    providerName: string;
    sorted: number;
  };
}

interface ProviderGroup {
  id: string;
  name: string;
  icon?: string;
  sorted: number;
  models: ModelItem[];
}

interface ModelSelectorModalProps {
  defaultSelectedValue?: string;
  onSelection?: (selection: string[]) => void;
  onClose?: () => void;
}

import { createRoot } from "react-dom/client";
import React, {
  CSSProperties,
  HTMLProps,
  MouseEvent,
  useEffect,
  useState,
  useCallback,
  useRef,
} from "react";
import { useAllModels } from "../utils/hooks";
import { useAccessStore } from "../store/access";
import { IconButton } from "./button";

export function Popover(props: {
  children: JSX.Element;
  content: JSX.Element;
  open?: boolean;
  onClose?: () => void;
}) {
  return (
    <div className={styles.popover}>
      {props.children}
      {props.open && (
        <div className={styles["popover-mask"]} onClick={props.onClose}></div>
      )}
      {props.open && (
        <div className={styles["popover-content"]}>{props.content}</div>
      )}
    </div>
  );
}

export function Card(props: { children: JSX.Element[]; className?: string }) {
  return (
    <div className={styles.card + " " + props.className}>{props.children}</div>
  );
}

export function ListItem(props: {
  title?: string;
  subTitle?: string | JSX.Element;
  children?: JSX.Element | JSX.Element[];
  icon?: JSX.Element;
  className?: string;
  onClick?: (e: MouseEvent) => void;
  vertical?: boolean;
}) {
  return (
    <div
      className={
        styles["list-item"] +
        ` ${props.vertical ? styles["vertical"] : ""} ` +
        ` ${props.className || ""}`
      }
      onClick={props.onClick}
    >
      <div className={styles["list-header"]}>
        {props.icon && <div className={styles["list-icon"]}>{props.icon}</div>}
        <div className={styles["list-item-title"]}>
          <div>{props.title}</div>
          {props.subTitle && (
            <div className={styles["list-item-sub-title"]}>
              {props.subTitle}
            </div>
          )}
        </div>
      </div>
      {props.children}
    </div>
  );
}

export function List(props: { children: React.ReactNode; id?: string }) {
  return (
    <div className={styles.list} id={props.id}>
      {props.children}
    </div>
  );
}

export function Loading() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <LoadingIcon />
    </div>
  );
}

interface ModalProps {
  title: string;
  children?: any;
  actions?: React.ReactNode[];
  defaultMax?: boolean;
  footer?: React.ReactNode;
  onClose?: () => void;
}
export function Modal(props: ModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        props.onClose?.();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isMax, setMax] = useState(!!props.defaultMax);

  return (
    <div
      className={
        styles["modal-container"] + ` ${isMax && styles["modal-container-max"]}`
      }
    >
      <div className={styles["modal-header"]}>
        <div className={styles["modal-title"]}>{props.title}</div>

        <div className={styles["modal-header-actions"]}>
          <div
            className={styles["modal-header-action"]}
            onClick={() => setMax(!isMax)}
          >
            {isMax ? <MinIcon /> : <MaxIcon />}
          </div>
          <div
            className={styles["modal-header-action"]}
            onClick={props.onClose}
          >
            <CloseIcon />
          </div>
        </div>
      </div>

      <div className={styles["modal-content"]}>{props.children}</div>

      <div className={styles["modal-footer"]}>
        {props.footer}
        <div className={styles["modal-actions"]}>
          {props.actions?.map((action, i) => (
            <div key={i} className={styles["modal-action"]}>
              {action}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function showModal(props: ModalProps) {
  const div = document.createElement("div");
  div.className = "modal-mask";
  document.body.appendChild(div);

  const root = createRoot(div);
  const closeModal = () => {
    props.onClose?.();
    root.unmount();
    div.remove();
  };

  div.onclick = (e) => {
    if (e.target === div) {
      closeModal();
    }
  };

  root.render(<Modal {...props} onClose={closeModal}></Modal>);
}

export type ToastProps = {
  content: string;
  action?: {
    text: string;
    onClick: () => void;
  };
  onClose?: () => void;
};

export function Toast(props: ToastProps) {
  return (
    <div className={styles["toast-container"]}>
      <div className={styles["toast-content"]}>
        <span>{props.content}</span>
        {props.action && (
          <button
            onClick={() => {
              props.action?.onClick?.();
              props.onClose?.();
            }}
            className={styles["toast-action"]}
          >
            {props.action.text}
          </button>
        )}
      </div>
    </div>
  );
}

export function showToast(
  content: string,
  action?: ToastProps["action"],
  delay = 3000,
) {
  const div = document.createElement("div");
  div.className = styles.show;
  document.body.appendChild(div);

  const root = createRoot(div);
  const close = () => {
    div.classList.add(styles.hide);

    setTimeout(() => {
      root.unmount();
      div.remove();
    }, 300);
  };

  setTimeout(() => {
    close();
  }, delay);

  root.render(<Toast content={content} action={action} onClose={close} />);
}

export type InputProps = React.HTMLProps<HTMLTextAreaElement> & {
  autoHeight?: boolean;
  rows?: number;
};

export function Input(props: InputProps) {
  return (
    <textarea
      {...props}
      className={`${styles["input"]} ${props.className}`}
    ></textarea>
  );
}

export function PasswordInput(
  props: HTMLProps<HTMLInputElement> & { ariaLabel?: string },
) {
  const [visible, setVisible] = useState(false);
  const { ariaLabel, ...inputProps } = props;

  function changeVisibility() {
    setVisible(!visible);
  }

  return (
    <div className={"password-input-container"}>
      <IconButton
        ariaLabel={ariaLabel}
        icon={visible ? <EyeIcon /> : <EyeOffIcon />}
        onClick={changeVisibility}
        className={"password-eye"}
      />
      <input
        {...inputProps}
        type={visible ? "text" : "password"}
        className={"password-input"}
      />
    </div>
  );
}

export function Select(
  props: React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement> & {
      align?: "left" | "center";
    },
    HTMLSelectElement
  >,
) {
  const { className, children, align, ...otherProps } = props;
  return (
    <div
      className={`${styles["select-with-icon"]} ${
        align === "left" ? styles["left-align-option"] : ""
      } ${className}`}
    >
      <select className={styles["select-with-icon-select"]} {...otherProps}>
        {children}
      </select>
      <DownIcon className={styles["select-with-icon-icon"]} />
    </div>
  );
}

export function showConfirm(content: any) {
  const div = document.createElement("div");
  div.className = "modal-mask";
  document.body.appendChild(div);

  const root = createRoot(div);
  const closeModal = () => {
    root.unmount();
    div.remove();
  };

  return new Promise<boolean>((resolve) => {
    root.render(
      <Modal
        title={Locale.UI.Confirm}
        actions={[
          <IconButton
            key="cancel"
            text={Locale.UI.Cancel}
            onClick={() => {
              resolve(false);
              closeModal();
            }}
            icon={<CancelIcon />}
            tabIndex={0}
            bordered
            shadow
          ></IconButton>,
          <IconButton
            key="confirm"
            text={Locale.UI.Confirm}
            type="primary"
            onClick={() => {
              resolve(true);
              closeModal();
            }}
            icon={<ConfirmIcon />}
            tabIndex={0}
            autoFocus
            bordered
            shadow
          ></IconButton>,
        ]}
        onClose={closeModal}
      >
        {content}
      </Modal>,
    );
  });
}

function PromptInput(props: {
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  const [input, setInput] = useState(props.value);
  const onInput = (value: string) => {
    props.onChange(value);
    setInput(value);
  };

  return (
    <textarea
      className={styles["modal-input"]}
      autoFocus
      value={input}
      onInput={(e) => onInput(e.currentTarget.value)}
      rows={props.rows ?? 3}
    ></textarea>
  );
}

export function showPrompt(content: any, value = "", rows = 3) {
  const div = document.createElement("div");
  div.className = "modal-mask";
  document.body.appendChild(div);

  const root = createRoot(div);
  const closeModal = () => {
    root.unmount();
    div.remove();
  };

  return new Promise<string>((resolve) => {
    let userInput = value;

    root.render(
      <Modal
        title={content}
        actions={[
          <IconButton
            key="cancel"
            text={Locale.UI.Cancel}
            onClick={() => {
              closeModal();
            }}
            icon={<CancelIcon />}
            bordered
            shadow
            tabIndex={0}
          ></IconButton>,
          <IconButton
            key="confirm"
            text={Locale.UI.Confirm}
            type="primary"
            onClick={() => {
              resolve(userInput);
              closeModal();
            }}
            icon={<ConfirmIcon />}
            bordered
            shadow
            tabIndex={0}
          ></IconButton>,
        ]}
        onClose={closeModal}
      >
        <PromptInput
          onChange={(val) => (userInput = val)}
          value={value}
          rows={rows}
        ></PromptInput>
      </Modal>,
    );
  });
}

export function showImageModal(
  img: string,
  defaultMax?: boolean,
  style?: CSSProperties,
  boxStyle?: CSSProperties,
) {
  showModal({
    title: Locale.Export.Image.Modal,
    defaultMax: defaultMax,
    children: (
      <div style={{ display: "flex", justifyContent: "center", ...boxStyle }}>
        <img
          src={img}
          alt="preview"
          style={
            style ?? {
              maxWidth: "100%",
            }
          }
        ></img>
      </div>
    ),
  });
}
export function SearchSelector<T>(props: {
  items: Array<{
    title: string;
    subTitle?: string;
    value: T;
    disable?: boolean;
  }>;
  defaultSelectedValue?: T[] | T;
  onSelection?: (selection: T[]) => void;
  onClose?: () => void;
  multiple?: boolean;
}) {
  const [selectedValues, setSelectedValues] = useState<T[]>(
    Array.isArray(props.defaultSelectedValue)
      ? props.defaultSelectedValue
      : props.defaultSelectedValue !== undefined
        ? [props.defaultSelectedValue]
        : [],
  );

  // 添加搜索状态
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelection = (e: MouseEvent, value: T) => {
    if (props.multiple) {
      e.stopPropagation();
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      props.onSelection?.(newSelectedValues);
    } else {
      setSelectedValues([value]);
      props.onSelection?.([value]);
      props.onClose?.();
    }
  };

  const { items, onClose } = props;
  // 过滤列表项
  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.subTitle &&
        item.subTitle.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={styles["selector"]} onClick={() => props.onClose?.()}>
      <div
        className={styles["selector-content"]}
        onClick={(e) => e.stopPropagation()}
      >
        <List>
          {/* 搜索框 */}
          <div className={styles["selector-search"]}>
            <input
              type="text"
              autoFocus
              className={styles["selector-search-input"]}
              placeholder="search model"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          {filteredItems.map((item, i) => {
            const selected = selectedValues.includes(item.value);
            return (
              <ListItem
                className={`${styles["selector-item"]} ${
                  item.disable && styles["selector-item-disabled"]
                }`}
                key={i}
                title={item.title}
                subTitle={item.subTitle}
                onClick={(e) => {
                  if (item.disable) {
                    e.stopPropagation();
                  } else {
                    handleSelection(e, item.value);
                  }
                }}
              >
                {selected ? (
                  <div
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "var(--primary)",
                      borderRadius: 10,
                    }}
                  ></div>
                ) : (
                  <></>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
export function Selector<T>(props: {
  items: Array<{
    title: string;
    subTitle?: string;
    value: T;
    disable?: boolean;
  }>;
  defaultSelectedValue?: T[] | T;
  onSelection?: (selection: T[]) => void;
  onClose?: () => void;
  multiple?: boolean;
}) {
  const [selectedValues, setSelectedValues] = useState<T[]>(
    Array.isArray(props.defaultSelectedValue)
      ? props.defaultSelectedValue
      : props.defaultSelectedValue !== undefined
        ? [props.defaultSelectedValue]
        : [],
  );

  const handleSelection = (e: MouseEvent, value: T) => {
    if (props.multiple) {
      e.stopPropagation();
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      props.onSelection?.(newSelectedValues);
    } else {
      setSelectedValues([value]);
      props.onSelection?.([value]);
      props.onClose?.();
    }
  };

  return (
    <div className={styles["selector"]} onClick={() => props.onClose?.()}>
      <div className={styles["selector-content"]}>
        <List>
          {props.items.map((item, i) => {
            const selected = selectedValues.includes(item.value);
            return (
              <ListItem
                className={`${styles["selector-item"]} ${
                  item.disable && styles["selector-item-disabled"]
                }`}
                key={i}
                title={item.title}
                subTitle={item.subTitle}
                onClick={(e) => {
                  if (item.disable) {
                    e.stopPropagation();
                  } else {
                    handleSelection(e, item.value);
                  }
                }}
              >
                {selected ? (
                  <div
                    style={{
                      height: 10,
                      width: 10,
                      backgroundColor: "var(--primary)",
                      borderRadius: 10,
                    }}
                  ></div>
                ) : (
                  <></>
                )}
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}
export function FullScreen(props: any) {
  const { children, right = 10, top = 10, ...rest } = props;
  const ref = useRef<HTMLDivElement>();
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      ref.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);
  useEffect(() => {
    const handleScreenChange = (e: any) => {
      if (e.target === ref.current) {
        setFullScreen(!!document.fullscreenElement);
      }
    };
    document.addEventListener("fullscreenchange", handleScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleScreenChange);
    };
  }, []);
  return (
    <div ref={ref} style={{ position: "relative" }} {...rest}>
      <div style={{ position: "absolute", right, top }}>
        <IconButton
          icon={fullScreen ? <MinIcon /> : <MaxIcon />}
          onClick={toggleFullscreen}
          bordered
        />
      </div>
      {children}
    </div>
  );
}

export function ModelSelectorModal(props: ModelSelectorModalProps) {
  const [selectedProvider, setSelectedProvider] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState<string>(
    props.defaultSelectedValue || "",
  );
  const [providerIcons, setProviderIcons] = useState<Record<string, any>>(
    () => {
      // 初始化时就加载所有图标
      const initialIcons: Record<string, any> = {};
      Object.entries(ICON_NAME_MAP).forEach(([key, iconName]) => {
        const icon = PROVIDER_ICON_DICT[key] || PROVIDER_ICON_DICT[iconName];
        if (icon) {
          initialIcons[key] = icon;
          initialIcons[iconName] = icon;
        }
      });
      return initialIcons;
    },
  );

  // 获取用户配置的模型和访问配置
  const allModels = useAllModels();
  const accessStore = useAccessStore();

  // 检查提供商是否有有效的API密钥
  const isProviderValid = (providerName: string) => {
    try {
      switch (providerName) {
        case "OpenAI":
          return accessStore.isValidOpenAI();
        case "Azure":
          return accessStore.isValidAzure();
        case "Google":
          return accessStore.isValidGoogle();
        case "Anthropic":
          return accessStore.isValidAnthropic();
        case "Baidu":
          return accessStore.isValidBaidu();
        case "ByteDance":
          return accessStore.isValidByteDance();
        case "Alibaba":
          return accessStore.isValidAlibaba();
        case "Tencent":
          return accessStore.isValidTencent();
        case "Moonshot":
          return accessStore.isValidMoonshot();
        case "Stability":
          return !!accessStore.stabilityApiKey; // 直接检查API密钥
        case "Iflytek":
          return accessStore.isValidIflytek();
        case "XAI":
          return accessStore.isValidXAI();
        case "ChatGLM":
          return accessStore.isValidChatGLM();
        case "DeepSeek":
          return accessStore.isValidDeepSeek();
        case "SiliconFlow":
          return accessStore.isValidSiliconFlow();
        default:
          // 对于未知提供商（如从模型名解析出的），默认显示
          return true;
      }
    } catch (error) {
      console.warn(
        `Error checking provider validity for ${providerName}:`,
        error,
      );
      return true; // 出错时默认显示
    }
  };

  // 过滤出可用且提供商有效API密钥的模型
  const availableModels = allModels.filter((v) => {
    if (!v.available) return false;

    const providerName = v.provider?.providerName;
    if (!providerName) return false;

    return isProviderValid(providerName);
  });

  // 将模型转换为ModelItem格式
  const modelItems: ModelItem[] = availableModels.map((model) => {
    // 处理模型名中包含@的情况，如google@gemini-2.5-pro
    let providerName = model.provider?.providerName;
    let modelName = model.name;

    console.log("model.provider", model.provider);

    if (model.name.includes("@")) {
      const parts = model.name.split("@");
      if (parts.length === 2) {
        providerName = parts[0];
        modelName = parts[1];
      }
    }

    if (model.name.includes("/")) {
      const parts = model.name.split("/");
      if (parts.length === 2) {
        providerName = parts[0];
        modelName = parts[1];
      }
    }

    console.log("providerName", providerName);
    console.log("modelName", modelName);

    return {
      title: modelName,
      value: `${model.name}@${providerName || "unknown"}`,
      displayName: model.displayName,
      provider: providerName
        ? {
            providerName,
            sorted: model.provider?.sorted || 999,
          }
        : undefined,
    };
  });

  // 同步加载图标（现在主要用于缓存）
  const loadProviderIcon = useCallback((providerName: string) => {
    // 使用原始名称作为缓存键，但尝试多种格式匹配
    if (PROVIDER_ICON_CACHE[providerName]) {
      return PROVIDER_ICON_CACHE[providerName];
    }

    const icon = getProviderIcon(providerName);
    if (icon) {
      PROVIDER_ICON_CACHE[providerName] = icon;
    }
    return icon;
    return icon;
  }, []);

  // 数据处理函数：将模型列表按提供商分组
  const processModels = useCallback(() => {
    const providerGroups: ProviderGroup[] = [];
    const knownProviders = new Set<string>();
    const otherModels: ModelItem[] = [];

    // 创建 "全部" 分组
    const allGroup: ProviderGroup = {
      id: "ALL",
      name: Locale.ModelSelector.AllModels,
      sorted: 0,
      models: [...modelItems],
    };
    providerGroups.push(allGroup);

    // 按提供商分组
    const providerMap = new Map<string, ModelItem[]>();

    modelItems.forEach((item) => {
      const providerName = item.provider?.providerName;
      if (
        providerName &&
        (Object.values(ServiceProvider).includes(
          providerName as ServiceProvider,
        ) ||
          providerName)
      ) {
        knownProviders.add(providerName);
        if (!providerMap.has(providerName)) {
          providerMap.set(providerName, []);
        }
        providerMap.get(providerName)!.push(item);
        // 预加载图标
        loadProviderIcon(providerName);
      } else {
        otherModels.push(item);
      }
    });

    // 创建已知提供商分组，只有当该提供商有模型时才显示
    Array.from(providerMap.entries())
      .filter(([, models]) => models.length > 0)
      .sort(([, modelsA], [, modelsB]) => {
        const sortedA = modelsA[0]?.provider?.sorted || 999;
        const sortedB = modelsB[0]?.provider?.sorted || 999;
        return sortedA - sortedB;
      })
      .forEach(([providerName, models]) => {
        providerGroups.push({
          id: providerName,
          name: providerName,
          icon: providerName,
          sorted: models[0]?.provider?.sorted || 999,
          models,
        });
      });

    // 创建 "其它" 分组，只有当有其它模型时才显示
    if (otherModels.length > 0) {
      providerGroups.push({
        id: "OTHER",
        name: Locale.ModelSelector.OtherModels,
        sorted: 999,
        models: otherModels,
      });
    }

    return providerGroups;
  }, [modelItems, loadProviderIcon]);

  const providerGroups = processModels();

  // 获取当前显示的模型列表
  const currentModels = searchQuery
    ? modelItems.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.displayName &&
            item.displayName.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : providerGroups.find((group) => group.id === selectedProvider)?.models ||
      [];

  // 处理选择
  const handleSelection = (value: string) => {
    setSelectedValue(value);
    props.onSelection?.([value]);
    props.onClose?.();
  };

  const handleClearInput = () => {
    setSearchQuery("");
  };

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        props.onClose?.();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [props, props.onClose]);

  return (
    <div className={`modal-mask ${styles["model-selector-modal"]}`}>
      <Modal
        title={Locale.ModelSelector.Title}
        onClose={props.onClose}
        defaultMax={false}
      >
        <div className={styles["model-selector-container"]}>
          <div className={styles["model-selector-search"]}>
            <SearchIcon className={styles["search-icon"]} />
            <input
              className={styles["search-input"]}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={Locale.ModelSelector.SearchPlaceholder}
            />
            {searchQuery.trim().length > 0 && (
              <IconButton
                className={styles["clear-icon"]}
                icon={<CloseIcon />}
                onClick={handleClearInput}
              />
            )}
          </div>

          <div className={styles["model-selector-content"]}>
            {/* 左侧提供商列表 */}
            {!searchQuery && (
              <div className={styles["model-selector-providers"]}>
                {providerGroups.map((group) => (
                  <div
                    key={group.id}
                    className={`${styles["model-selector-provider"]} ${
                      selectedProvider === group.id
                        ? styles["model-selector-provider-active"]
                        : ""
                    }`}
                    onClick={() => setSelectedProvider(group.id)}
                  >
                    {group.id === "ALL" ? (
                      // 为"全部"显示特殊的文本标识
                      <div className={styles["model-selector-provider-text"]}>
                        ALL
                      </div>
                    ) : group.icon && providerIcons[group.icon] ? (
                      React.createElement(providerIcons[group.icon], {
                        size: 24,
                        className: styles["model-selector-provider-icon"],
                      })
                    ) : (
                      <div
                        className={
                          styles["model-selector-provider-icon-placeholder"]
                        }
                      >
                        {group.name.charAt(0)}
                      </div>
                    )}
                    <span className={styles["model-selector-provider-name"]}>
                      {group.name}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* 右侧模型列表 */}
            <div className={styles["model-selector-models"]}>
              {currentModels.map((model, index) => (
                <div
                  key={index}
                  className={`${styles["model-selector-model"]} ${
                    selectedValue === model.value
                      ? styles["model-selector-model-selected"]
                      : ""
                  }`}
                  onClick={() => handleSelection(model.value)}
                >
                  {searchQuery ? (
                    // 搜索模式：显示图标 + 模型名
                    <>
                      {model.provider?.providerName &&
                      providerIcons[model.provider.providerName] ? (
                        React.createElement(
                          providerIcons[model.provider.providerName],
                          {
                            size: 20,
                            className: styles["model-selector-model-icon"],
                          },
                        )
                      ) : (
                        <div
                          className={
                            styles["model-selector-model-icon-placeholder"]
                          }
                        >
                          {model.provider?.providerName?.charAt(0) || "?"}
                        </div>
                      )}
                      <span className={styles["model-selector-model-name"]}>
                        {model.displayName || model.title}
                      </span>
                    </>
                  ) : (
                    // 普通模式：只显示模型名
                    <span className={styles["model-selector-model-name"]}>
                      {model.displayName || model.title}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
