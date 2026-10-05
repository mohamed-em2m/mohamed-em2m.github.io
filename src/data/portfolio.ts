export const CV_PATH = "/assets/cv/Mohamed_Emam.pdf";
export const PHOTO_PATH = "/assets/images/mohamed_emam.jpg";

export const CONTACT = {
  email: "emam200232@gmail.com",
  phone: "+20 120 404 5635",
  location: "Cairo, Egypt",
  github: "https://github.com/mohamed-em2m",
  linkedin: "https://www.linkedin.com/in/mohamed-emam-599970208/",
  kaggle: "https://www.kaggle.com/elemam",
};

export type Experience = {
  period: string;
  company: string;
  meta: string;
  role: string;
  bullets: string[];
  tags: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    period: "JAN 2026 — OCT 2026",
    company: "COA Holding",
    meta: "Cairo, Egypt · Hybrid",
    role: "AI Engineer",
    bullets: [
      "Echolyzer (Call Center QA): architected AI evaluation platform ingesting Bitrix24 audio calls; fine-tuned open-source LLMs to automate compliance auditing, agent scoring, and anomaly detection with real-time BI dashboard sync.",
      "Auto-Camp (Campaign Optimization): engineered autonomous ad-management agents for continuous KPI monitoring, dynamic budget allocation, and algorithmic ad-targeting optimization.",
      "Omni-Meta (Enterprise Conversational AI): built omnichannel platform across messaging services for multi-turn tenant retrieval, appointment booking, and CRM pipeline automation.",
    ],
    tags: ["LLM FINE-TUNING", "BITRIX24", "AUTONOMOUS AGENTS", "CRM"],
  },
  {
    period: "AUG 2025 — DEC 2025",
    company: "TechTroll",
    meta: "New Cairo, Egypt · Remote",
    role: "AI Engineer",
    bullets: [
      "CairoAI (Regulatory Intelligence): architected document-intelligence platform assessing Saudi banking regulations with clause-level gap analysis and audit-ready reports.",
      "Document Ingestion Pipeline: built high-throughput FastAPI pipeline for PDF/DOCX/PPTX/scans/tables using OCR, semantic chunking, and token-aware truncation to eliminate context loss.",
      "Sovereign Inference Gateway: unified vLLM, llama.cpp, and SGLang into a local routing cluster; authored CUDA process manager with LRU model-cache eviction to prevent VRAM/disk exhaustion.",
    ],
    tags: ["RAG", "FASTAPI", "VLLM", "SGLANG", "CUDA", "OCR"],
  },
  {
    period: "NOV 2024 — JUL 2025",
    company: "VRtualize Srl",
    meta: "Milan, Italy · Remote",
    role: "AI Engineer",
    bullets: [
      "Maika (Multi-Agent Travel Platform): spearheaded LangGraph multi-agent system combining RAG, vector search, and dynamic crawlers for real-time flight, hotel, and destination discovery.",
      "Rust Retrieval Infrastructure: engineered high-concurrency Rust search tool, cutting vector query latency to sub-3s and end-to-end multi-agent execution to under 10s.",
      "Healthcare Predictive Analytics: built longitudinal time-series forecasting for diabetes and cardiovascular indicators with automated trend monitoring.",
    ],
    tags: ["LANGGRAPH", "RUST", "VECTOR SEARCH", "TIME-SERIES"],
  },
  {
    period: "APR 2024 — NOV 2024",
    company: "Deeb Realities",
    meta: "Cairo, Egypt · Hybrid",
    role: "AI Engineer",
    bullets: [
      "Ava (Generative Talking Avatar): implemented Flow Matching architecture for photorealistic portrait animation from speech with wav2vec2 alignment — 50%+ faster than diffusion with 7 controllable emotions.",
      "Enterprise Conversational Platform: sole AI engineer for WhatsApp/Instagram/Messenger platform via LangGraph + FastAPI + BigQuery Vector RAG, synced with Odoo CRM at 99.9% uptime on GCP.",
      "HIM (Real-Time Voice & Chat Backend): built WebSocket streaming chat with parallel/sequential multi-model feedback loops, persistence, and semantic discovery search.",
    ],
    tags: ["FLOW MATCHING", "WAV2VEC2", "LANGGRAPH", "GCP", "WEBSOCKET"],
  },
];

export type Project = {
  title: string;
  milestone: string;
  metric: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  highlights?: string[];
};

export const AI_PROJECTS: Project[] = [
  {
    title: "llmog — VLM Grounding & Auto-Annotation",
    milestone: "Open Source · Flagship",
    metric: "Zero-Shot Grounding",
    description:
      "Iterative Detector–Judge loop for zero-shot visual grounding with sub-patch tiling + NMS for small objects, Set-of-Mark prompting, crop-verify validation, automated YOLO relabeling, and native vLLM / llama-server lifecycle managers.",
    tech: ["Python", "vLLM", "llama.cpp", "Pydantic", "YOLO"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/mohamed-em2m",
    highlights: ["SoM Prompting", "YOLO Auto-Label", "vLLM Manager"],
  },
  {
    title: "Maika — Multi-Agent Travel Platform",
    milestone: "Production Deployment",
    metric: "< 10s E2E",
    description:
      "LangGraph multi-agent travel system with RAG, vector search, and dynamic crawlers for flights, hotels, and destinations. Custom Rust retrieval layer cut vector queries to sub-3s.",
    tech: ["LangGraph", "FastAPI", "Rust", "GCP", "Azure"],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800",
    highlights: ["Rust < 3s Queries", "RAG + Crawlers"],
  },
  {
    title: "Ava — Generative Talking Avatar",
    milestone: "Generative AI",
    metric: "50% Faster",
    description:
      "Flow Matching portrait animation from speech with wav2vec2 alignment. Photorealistic output, 7 controllable emotional states, 50%+ faster inference than diffusion baselines.",
    tech: ["Flow Matching", "wav2vec2", "PyTorch", "FastAPI"],
    image:
      "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800",
    highlights: ["7 Emotions", "Real-Time"],
  },
  {
    title: "VibeVoice Streaming + SQL Agent",
    milestone: "Low-Latency Infra",
    metric: "WebSocket TTS",
    description:
      "Multi-speaker text-to-speech engine over WebSockets paired with an autonomous SQL agent for natural-language database querying.",
    tech: ["FastAPI", "WebSockets", "LLM Agents", "SQL"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/mohamed-em2m",
  },
];

export const INFRA_PROJECTS: Project[] = [
  {
    title: "MeshForge 3D — Neural Mesh Synthesis",
    milestone: "Generative Systems",
    metric: "2D → Textured .glb",
    description:
      "End-to-end 2D-to-textured-mesh engine on Hunyuan3D-2. Compiled custom C++/CUDA rasterizers from source, built thread-safe singleton for multi-GB diffusion weights across CUDA/CPU, containerized with uv + Docker.",
    tech: ["PyTorch", "CUDA", "C++", "Hunyuan3D-2", "Docker"],
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/mohamed-em2m",
  },
  {
    title: "Real-Time AI Search Engine",
    milestone: "Performance Record",
    metric: "< 4s · 20+ Sites",
    description:
      "High-concurrency scraping engine with live Google Search for real-time AI synthesis. Extracts and synthesizes 20+ sites in under 4 seconds.",
    tech: ["C++", "Rust", "Gumbo", "cURL", "Google Search API"],
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "DynaPrompt — Prompt Orchestration",
    milestone: "Library · Production-Ready",
    metric: "Token-Budget Safe",
    description:
      "Prompt management library with lazy loading, Jinja2 dynamic templating, Pydantic v2 schema validation, and native token-budget controls.",
    tech: ["Python", "Pydantic v2", "Jinja2"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/mohamed-em2m",
  },
  {
    title: "Multimodal Grading Engine",
    milestone: "Accuracy Achievement",
    metric: "94% EN · 86% AR",
    description:
      "VLM + RAG pipeline grading complex handwritten answers. 94% accuracy (English), 86% (Arabic), cutting manual grading labor by 80%.",
    tech: ["VLM", "RAG", "FastAPI", "PyTorch"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    highlights: ["94% Correlation", "80% Time Saved"],
  },
];

export type OSS = { name: string; desc: string; tags: string[]; link: string };

export const OSS_ITEMS: OSS[] = [
  {
    name: "MuseTalk #397, #398",
    desc: "Production FastAPI serving, multi-platform Docker (Linux + Apple Silicon), checkpoint scripts, and latent-space lip-sync demos.",
    tags: ["TTS", "FASTAPI", "DOCKER"],
    link: "https://github.com/TMElyralab/MuseTalk",
  },
  {
    name: "browser-use #3499, #3512, #3513",
    desc: "Fixed execution bugs and hardened browser automation stability across dynamic multi-step agent web interactions.",
    tags: ["AGENTS", "AUTOMATION"],
    link: "https://github.com/browser-use/browser-use",
  },
  {
    name: "MemoryOS #22, #23",
    desc: "Memory architecture refinements and bug fixes for the EMNLP 2025 Oral agent memory OS for long-term personalized state.",
    tags: ["MEMORY", "MLOPS"],
    link: "https://github.com/BAI-LAB/MemoryOS",
  },
  {
    name: "mistral-common #139 · PageIndex #101",
    desc: "Standardized API responses + async streaming (httpx); added Docling parsing, Pydantic validation, and pyproject packaging for vectorless RAG.",
    tags: ["LLM", "RAG", "VALIDATION"],
    link: "https://github.com/mistralai/mistral-common",
  },
  {
    name: "OpenCode · google/adk-docs #2067",
    desc: "Added local LLM provider connectivity (llama.cpp, Ollama); clarified MCP client dependencies in Google ADK docs.",
    tags: ["MCP", "LLAMA.CPP", "OLLAMA"],
    link: "https://github.com/anomalyco/OpenCode",
  },
  {
    name: "karpathy/autoresearch #621",
    desc: "Single-GPU execution via automated VRAM lifecycle manager coordinating memory swaps between agent and training routines.",
    tags: ["CUDA", "VRAM", "AGENTS"],
    link: "https://github.com/karpathy/autoresearch",
  },
];

export const SKILL_GROUPS = [
  { title: "LLMs, VLMs & Agents", skills: ["LangGraph", "LangChain", "vLLM", "llama.cpp", "SGLang", "MCP", "RAG", "Tool Calling", "SoM", "LoRA/QLoRA"] },
  { title: "ML & Generative AI", skills: ["PyTorch", "Flow Matching", "Diffusion", "MuseTalk", "wav2vec2", "TTS/STT", "YOLO", "OpenCV", "ONNX", "TensorRT"] },
  { title: "Languages", skills: ["Python", "C++", "Rust", "SQL", "TypeScript", "Bash"] },
  { title: "Backend & Data", skills: ["FastAPI", "WebSockets", "WebRTC", "REST", "BigQuery Vector", "PostgreSQL", "Neo4j", "Redis", "Firestore"] },
  { title: "Cloud & DevOps", skills: ["GCP", "Azure", "AWS", "Docker", "CI/CD", "CUDA Mgmt", "Git", "Linux"] },
];

export const CERTS = [
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2023" },
  { name: "Natural Language Processing Specialization", issuer: "DeepLearning.AI", year: "2023" },
  { name: "React Web Developer (DEPI)", issuer: "MCIT", year: "2024" },
  { name: "Linux Administrator (70h)", issuer: "NTI", year: "2024" },
];
