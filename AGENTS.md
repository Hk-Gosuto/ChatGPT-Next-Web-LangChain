# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is ChatGPT Next Web LangChain - a fork of ChatGPT-Next-Web with enhanced plugin functionality powered by LangChain. It's a Next.js-based web application that provides a ChatGPT-like interface with extensive plugin support for search, computation, web browsing, image generation, and more.

## Development Commands

### Core Development
- `yarn dev` - Start development server with mask watching
- `yarn dev:https` - Start development server with HTTPS
- `yarn build` - Build for production (standalone mode)
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn export` - Build for static export
- `yarn export:dev` - Development with export mode

### Mask System
- `yarn mask` - Build masks (prompt templates)
- `yarn mask:watch` - Watch and rebuild masks automatically

### Desktop App (Tauri)
- `yarn app:dev` - Start Tauri development
- `yarn app:build` - Build desktop application

### Testing & Quality
- `npm run lint` - Run linting
- `npm run typecheck` - Run TypeScript type checking (if available)

## Architecture Overview

### Core Structure
- **Next.js App Router**: Uses the new `app/` directory structure
- **State Management**: Zustand for client-side state management
- **Styling**: SCSS modules with component-specific styles
- **AI Providers**: Multi-provider support (OpenAI, Anthropic, Google, etc.)
- **Plugin System**: LangChain-based tools and agents

### Key Directories
- `app/components/` - React components with co-located SCSS modules
- `app/api/` - API routes for different AI providers and LangChain tools
- `app/store/` - Zustand stores for state management
- `app/locales/` - Internationalization files
- `app/masks/` - Prompt templates and conversation starters
- `app/plugins/` - Plugin definitions and configurations
- `app/utils/` - Utility functions including cloud storage and audio processing

### Plugin Architecture
The plugin system is built on LangChain and includes:
- **Search Tools**: Google Custom Search, SerpAPI, Bing, DuckDuckGo
- **Computation**: Calculator, WolframAlpha
- **Web Tools**: WebBrowser, PDFBrowser with embedding support
- **Image Generation**: DALL-E 3, Stable Diffusion
- **Content Tools**: Wikipedia, Arxiv, Bilibili integrations
- All plugins are in `app/api/langchain-tools/`

### Provider System
- Multi-provider architecture supporting OpenAI, Anthropic Claude, Google Gemini, Baidu, ByteDance, Alibaba, Tencent, Moonshot, and others
- Provider-specific API implementations in `app/api/`
- Unified model configuration in `app/constant.ts`

### Configuration System
- Environment variables for API keys and service configurations
- Build-time configuration in `next.config.mjs`
- Runtime configuration through UI settings
- Support for multiple deployment modes (standalone, export, development)

## Important Files
- `app/constant.ts` - Central configuration, model definitions, API endpoints
- `app/components/chat.tsx` - Main chat interface component
- `app/components/settings.tsx` - Settings panel with provider and plugin configuration
- `app/store/index.ts` - Main Zustand store
- `app/api/openai.ts` - OpenAI API integration (reference implementation)
- `package.json` - Dependencies and build scripts

## Development Guidelines

### Adding New AI Providers
1. Create API route in `app/api/[provider].ts`
2. Add provider constants to `app/constant.ts`
3. Update model definitions in DEFAULT_MODELS
4. Add provider configuration to settings UI

### Adding New Plugins
1. Create tool implementation in `app/api/langchain-tools/`
2. Register in `app/api/langchain-tools/langchian-tool-index.ts`
3. Add plugin metadata to `app/plugins/`
4. Update plugin configuration UI

### Working with Masks
- Masks are prompt templates in `app/masks/`
- Run `yarn mask` to build after changes
- Supports internationalization with language-specific files

### Styling Conventions
- Use SCSS modules (`.module.scss`)
- Component styles co-located with components
- Global styles in `app/styles/`
- Follow existing class naming patterns

### State Management
- Use Zustand stores in `app/store/`
- Persist important state to localStorage
- Handle cross-tab synchronization for chat data

### Environment Variables
Key environment variables for development:
- `OPENAI_API_KEY` - OpenAI API key
- `ANTHROPIC_API_KEY` - Anthropic Claude API key
- `GOOGLE_API_KEY` - Google Gemini API key
- `CODE` - Access password for the application
- `TAVILY_API_KEY` - For universal search functionality

## Build & Deployment

### Build Modes
- `standalone` (default) - Self-contained server
- `export` - Static site generation
- Development mode with hot reloading

### Deployment Targets
- Vercel (recommended, one-click deploy)
- Docker containers
- Self-hosted Node.js
- Desktop app via Tauri

The project uses Yarn as package manager and requires Node.js >=22.0.0.

## Technical Stack & Dependencies

### Core Framework & Runtime
- **Next.js** `^15.5.2` - App Router with latest features, server components support
- **React** `^19.1.1` - Latest React with concurrent features and enhanced performance
- **React DOM** `^19.1.1` - Client-side rendering with React 19 optimizations
- **TypeScript** `5.2.2` - Type safety with latest language features
- **Node.js** `>=22.0.0` - Modern runtime with native ES modules and performance improvements

### AI & LangChain Integration
- **langchain** `0.2.15` - Core LangChain framework for plugin architecture
- **@langchain/openai** `^0.4.4` - OpenAI integrations and tools
- **@langchain/anthropic** `^0.2.14` - Claude model integrations
- **@langchain/community** `0.2.25` - Community tools and integrations
- **@langchain/groq** `^0.0.16` - Groq model support
- **@langchain/ollama** `^0.0.4` - Local model support via Ollama
- **@langchain/langgraph** `^0.0.33` - Graph-based AI workflows

### State Management & Storage
- **zustand** `^4.3.8` - Lightweight state management, preferred over Redux
- **idb-keyval** `^6.2.1` - IndexedDB wrapper for client-side persistence

### UI & Styling
- **sass** `^1.59.2` - SCSS support for modular styling
- **antd** `^5.27.3` - UI component library for complex interfaces
- **@hello-pangea/dnd** `^16.5.0` - Drag-and-drop functionality (react-beautiful-dnd successor)
- **emoji-picker-react** `^4.9.2` - Emoji selection component
- **clsx** `^2.1.1` - Conditional className utility

### Content Processing & Parsing
- **react-markdown** `^8.0.7` - Markdown rendering with React components
- **rehype-highlight** `^6.0.0` - Code syntax highlighting
- **rehype-katex** `^6.0.3` - LaTeX math rendering
- **remark-gfm** `^3.0.1` - GitHub Flavored Markdown support
- **mermaid** `^10.6.1` - Diagram and flowchart rendering
- **cheerio** `^1.0.0-rc.12` - Server-side HTML parsing
- **html-to-text** `^9.0.5` - HTML content extraction
- **pdf-parse** `^1.1.1` - PDF content extraction
- **mammoth** `^1.7.1` - DOCX file processing
- **epub2** `^3.0.2` - EPUB file processing
- **officeparser** `^4.0.8` - Office document parsing

### Vector Databases & Search
- **@pinecone-database/pinecone** `^2.2.0` - Vector database for embeddings
- **@qdrant/js-client-rest** `^1.8.2` - Alternative vector database
- **@supabase/supabase-js** `^2.44.2` - Backend-as-a-service with vector support
- **fuse.js** `^7.0.0` - Client-side fuzzy search
- **@tavily/core** `^0.3.1` - Web search API integration

### File Storage & Cloud Services
- **@aws-sdk/client-s3** `^3.414.0` - AWS S3 integration for file storage
- **@aws-sdk/s3-request-presigner** `^3.414.0` - S3 presigned URL generation
- **canvas** `^3.0.1` - Server-side canvas rendering for images
- **sharp** `^0.33.3` - High-performance image processing

### Audio & Media Processing
- **rt-client** (Azure Real-time Audio SDK) - Real-time audio communication
- **srt-parser-2** `^1.2.3` - Subtitle file parsing
- **heic2any** `^0.0.4` - HEIC image format conversion

### Network & HTTP
- **axios** `^1.7.5` - HTTP client with interceptors and request/response handling
- **node-fetch** `^3.3.1` - Fetch API for Node.js server-side requests
- **@fortaine/fetch-event-source** `^3.0.6` - Server-sent events support
- **https-proxy-agent** `^7.0.2` - Proxy support for HTTPS requests

### Development & Build Tools
- **@tauri-apps/cli** `1.5.11` - Desktop app framework
- **cross-env** `^7.0.3` - Cross-platform environment variables
- **tsx** `^4.16.0` - TypeScript execution for build scripts
- **husky** `^8.0.0` - Git hooks for code quality
- **lint-staged** `^13.2.2` - Run linters on staged files
- **prettier** `^3.0.2` - Code formatting
- **eslint** `^8.49.0` - Code linting with Next.js config

### Testing Framework
- **jest** `^29.7.0` - Testing framework
- **@testing-library/react** `^16.0.1` - React component testing utilities
- **@testing-library/jest-dom** `^6.6.2` - Jest DOM matchers
- **jest-environment-jsdom** `^29.7.0` - DOM environment for testing

### Analytics & Monitoring
- **@vercel/analytics** `^0.1.11` - Vercel analytics integration
- **@vercel/speed-insights** `^1.0.2` - Performance monitoring

### Version-Specific Best Practices & Notes

#### React 19 (`^19.1.1`)
- **New Features**: Enhanced server components, automatic batching improvements
- **Breaking Changes**: Some legacy lifecycle methods deprecated
- **Best Practice**: Use concurrent features like `startTransition` for non-urgent updates

#### Next.js 15 (`^15.5.2`)
- **App Router**: Fully stable, use over Pages Router for new features
- **Server Components**: Default for better performance, mark client components explicitly
- **Turbopack**: Available for development (`--turbo` flag)

#### LangChain 0.2.x
- **Version Pinning**: Core pinned to `0.2.23` in resolutions for stability
- **Breaking Changes**: Some tool interfaces changed from 0.1.x
- **Best Practice**: Use streaming for better UX with long-running operations

#### TypeScript 5.2.2
- **Features**: Decorators, using declarations, explicit resource management
- **Configuration**: Strict mode enabled, ES2015 target for broad compatibility

#### Node.js >=22.0.0
- **Features**: Native ES modules, improved performance, built-in test runner
- **Best Practice**: Use native fetch instead of node-fetch where possible

#### Development Workflow Notes
- **Package Manager**: Yarn 1.22.19 (Classic) - consider upgrading to Yarn 3+ for better performance
- **Git Hooks**: Husky configured for pre-commit linting and formatting
- **Build Modes**: Standalone mode for production, export mode for static hosting
- **Hot Reload**: Mask watching enabled in development for prompt template changes

## Project Directory Structure

### Root Level Files & Folders
```
📦 ChatGPT-Next-Web-LangChain/
├── 📁 app/                     # Next.js App Router source code
├── 📁 docs/                    # Documentation (CN/EN/ES/JA/KO)
├── 📁 public/                  # Static assets and service workers
├── 📁 src-tauri/               # Tauri desktop app configuration
├── 📁 scripts/                 # Build and utility scripts
├── 📁 certificates/            # SSL certificates for development
├── 📁 uploads/                 # Local file storage (non-Vercel)
├── 📁 .husky/                  # Git hooks configuration
├── 📁 .vercel/                 # Vercel deployment configuration
├── 📁 .vscode/                 # VS Code settings and launch configs
├── 📁 .github/                 # GitHub Actions and templates
├── 📄 package.json             # Dependencies and scripts
├── 📄 yarn.lock                # Dependency lock file
├── 📄 next.config.mjs          # Next.js configuration
├── 📄 tsconfig.json            # TypeScript configuration
├── 📄 docker-compose.yml       # Docker development setup
└── 📄 CLAUDE.md                # This file
```

### App Directory Structure (`app/`)
**Core Architecture**: Next.js 15 App Router with co-located components and styles

```
📁 app/
├── 📁 api/                     # API Routes (Next.js 15 App Router)
│   ├── 📁 [provider]/          # Dynamic AI provider routes
│   ├── 📁 langchain-tools/     # Plugin implementations (25+ tools)
│   ├── 📁 langchain/           # LangChain agents and RAG
│   ├── 📁 file/                # File upload and management
│   ├── 📁 artifacts/           # Code artifacts handling
│   ├── 📁 config/              # Runtime configuration
│   ├── 📁 search/              # Universal search endpoint
│   ├── 📁 upstash/             # Cloud storage sync
│   ├── 📁 webdav/              # WebDAV integration
│   ├── 📄 openai.ts            # OpenAI API integration
│   ├── 📄 anthropic.ts         # Claude API integration
│   ├── 📄 google.ts            # Gemini API integration
│   ├── 📄 azure.ts             # Azure OpenAI integration
│   ├── 📄 baidu.ts             # Baidu ERNIE integration
│   ├── 📄 deepseek.ts          # DeepSeek API integration
│   └── 📄 [8+ more providers]  # Additional AI providers
│
├── 📁 components/              # React Components (46 components)
│   ├── 📄 chat.tsx             # Main chat interface (2,588 lines)
│   ├── 📄 settings.tsx         # Settings panel (1,917 lines)
│   ├── 📄 home.tsx             # Application layout (1,265 lines)
│   ├── 📄 ui-lib.tsx           # UI component library (979 lines)
│   ├── 📄 model-config.tsx     # AI model configuration
│   ├── 📄 plugin.tsx           # Plugin management interface
│   ├── 📄 mask.tsx             # Prompt template editor
│   ├── 📄 markdown.tsx         # Markdown rendering with math/diagrams
│   ├── 📁 realtime-chat/       # Real-time audio chat components
│   ├── 📁 voice-print/         # Voice visualization components
│   ├── 📁 openai-voice-visualizer/ # OpenAI voice features
│   └── 📄 [*.module.scss]      # Co-located SCSS modules
│
├── 📁 client/                  # Client-side API abstractions
│   ├── 📄 api.ts               # Main API client
│   ├── 📄 controller.ts        # Request/response handling
│   └── 📁 platforms/           # Provider-specific clients (12 platforms)
│
├── 📁 store/                   # Zustand State Management
│   ├── 📄 index.ts             # Main store combining all stores
│   ├── 📄 chat.ts              # Chat history and messages
│   ├── 📄 config.ts            # Application configuration
│   ├── 📄 access.ts            # Authentication and access control
│   ├── 📄 plugin.ts            # Plugin state management
│   ├── 📄 mask.ts              # Prompt template management
│   ├── 📄 sync.ts              # Cross-device synchronization
│   └── 📄 update.ts            # Application updates
│
├── 📁 utils/                   # Utility Functions
│   ├── 📄 utils.ts             # Core utilities (512 lines)
│   ├── 📁 cloud/               # Cloud storage integrations
│   │   ├── 📄 upstash.ts       # Redis-based sync
│   │   └── 📄 webdav.ts        # WebDAV file sync
│   ├── 📄 s3_file_storage.ts   # AWS S3 file handling
│   ├── 📄 local_file_storage.ts # Local file management
│   ├── 📄 audio.ts             # Audio processing utilities
│   ├── 📄 speech.ts            # Speech-to-text integration
│   ├── 📄 ms_edge_tts.ts       # Microsoft Edge TTS
│   ├── 📄 token.ts             # Token counting and management
│   ├── 📄 model.ts             # Model utilities and filtering
│   ├── 📄 stream.ts            # Streaming response handling
│   └── 📄 [15+ more utilities] # Format, merge, clone, etc.
│
├── 📁 locales/                 # Internationalization (i18n)
│   ├── 📄 index.ts             # Main locale configuration
│   ├── 📄 en.ts                # English translations
│   ├── 📄 cn.ts                # Simplified Chinese
│   ├── 📄 tw.ts                # Traditional Chinese
│   ├── 📄 jp.ts                # Japanese
│   ├── 📄 ko.ts                # Korean
│   └── 📄 [13+ more locales]   # Additional language support
│
├── 📁 masks/                   # Prompt Templates System
│   ├── 📄 build.ts             # Template build script
│   ├── 📄 index.ts             # Template exports
│   ├── 📄 en.ts                # English templates
│   ├── 📄 cn.ts                # Chinese templates
│   ├── 📄 tw.ts                # Traditional Chinese templates
│   └── 📄 typing.ts            # Type definitions
│
├── 📁 plugins/                 # Plugin Definitions
│   ├── 📄 index.ts             # Plugin registry
│   ├── 📄 en.ts                # English plugin descriptions
│   ├── 📄 cn.ts                # Chinese plugin descriptions
│   ├── 📄 ru.ts                # Russian plugin descriptions
│   └── 📄 typing.ts            # Plugin type definitions
│
├── 📁 config/                  # Configuration Modules
│   ├── 📄 client.ts            # Client-side configuration
│   ├── 📄 server.ts            # Server-side configuration
│   └── 📄 build.ts             # Build-time configuration
│
├── 📁 styles/                  # Global Styles
│   ├── 📄 globals.scss         # Global CSS variables and styles
│   ├── 📄 markdown.scss        # Markdown rendering styles
│   ├── 📄 highlight.scss       # Code syntax highlighting
│   ├── 📄 animation.scss       # UI animations and transitions
│   └── 📄 window.scss          # Window and layout styles
│
├── 📁 icons/                   # SVG Icon Components (84 icons)
├── 📁 shaders/                 # WebGL Shaders for visual effects
├── 📁 lib/                     # Library modules
│   └── 📄 audio.ts             # Audio processing library
│
├── 📄 constant.ts              # Application constants (713 lines)
├── 📄 layout.tsx               # Root layout component
├── 📄 page.tsx                 # Home page component
├── 📄 global.d.ts              # Global TypeScript declarations
├── 📄 typing.ts                # Shared type definitions
├── 📄 command.ts               # Command system for shortcuts
├── 📄 prompt.ts                # Prompt management utilities
├── 📄 polyfill.ts              # Browser compatibility polyfills
└── 📄 utils.ts                 # Additional utility functions
```

### Important File Relationships

#### Plugin System Files
- **Plugin Tools**: `app/api/langchain-tools/` (25+ tool implementations)
- **Plugin Registry**: `app/api/langchain-tools/langchian-tool-index.ts`
- **Plugin Metadata**: `app/plugins/` (descriptions and configurations)
- **Plugin UI**: `app/components/plugin.tsx` and `plugin-config.tsx`

#### AI Provider Integration
- **API Routes**: `app/api/[provider].ts` (12+ providers)
- **Client Adapters**: `app/client/platforms/` (provider-specific logic)
- **Model Definitions**: `app/constant.ts` (unified model configuration)
- **Provider UI**: `app/components/model-config.tsx`

#### State Management Flow
- **Main Store**: `app/store/index.ts` (combines all Zustand stores)
- **Persistence**: LocalStorage + IndexedDB via `app/utils/store.ts`
- **Sync**: Cross-device sync via `app/store/sync.ts` and `app/utils/cloud/`

#### Styling Architecture
- **Global Styles**: `app/styles/*.scss` (theming, animations, layout)
- **Component Styles**: Co-located `*.module.scss` files
- **Theme System**: CSS variables in `globals.scss`

#### Build System Files
- **Configuration**: `next.config.mjs`, `tsconfig.json`
- **Scripts**: `package.json` scripts, `app/masks/build.ts`
- **Assets**: `public/` (static files, service workers, JSON configs)

### Key File Metrics
- **Total TypeScript Files**: 200+ source files
- **Largest Components**: 
  - `chat.tsx` (2,588 lines) - Main chat interface
  - `settings.tsx` (1,917 lines) - Configuration panel
  - `home.tsx` (1,265 lines) - Application layout
- **Plugin Tools**: 25+ LangChain tool implementations
- **AI Providers**: 12+ supported platforms
- **Internationalization**: 18+ language locales
- **Icon Library**: 84+ SVG icons