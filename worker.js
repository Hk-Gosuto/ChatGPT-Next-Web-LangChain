name = "chatgpt-nex-web-langchain"
compatibility_date = "2024-11-13"
compatibility_flags = ["nodejs_compat"]

[env.production]
vars = { 
  NODE_VERSION = "22.11.0",
  NEXT_TELEMETRY_DISABLE = "1"
}
