import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  Terminal, 
  Brain, 
  MessageSquare, 
  Database, 
  Cloud, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail,
  Download,
  Menu,
  ChevronDown,
  ExternalLink,
  GraduationCap,
  Globe,
  Award,
  UserCheck,
  Layout
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
      <div className="text-xl font-black text-white tracking-tighter uppercase font-headline">
        Mohamed Emam
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {["Experience", "Projects", "Skills", "Contact"].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-label text-on-surface-variant hover:text-white transition-colors text-xs uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
        <button className="bg-primary text-on-primary font-headline font-bold px-4 py-2 btn-brutal flex items-center gap-2 text-xs border border-white/10">
          <Download size={16} />
          RESUME
        </button>
      </div>
      <div className="md:hidden">
        <Menu className="text-white" />
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const railY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const railY2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-8 overflow-hidden technical-gradient bg-surface">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-outline-variant/10"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-outline-variant/10"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-outline-variant/10"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-outline-variant/10"></div>
      </div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-7xl w-full relative"
      >
        <div className="flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 mb-12 border border-primary/30 bg-primary/5 backdrop-blur-sm rounded-none relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="font-label text-primary text-xs tracking-[0.4em] uppercase font-bold relative z-10">Architecting Intelligence</span>
          </motion.div>

          <div className="relative mb-8">
            <h1 className="font-headline font-black text-7xl md:text-9xl lg:text-[14rem] tracking-tighter leading-[0.8] uppercase select-none">
              <span className="block text-white animate-slam-in">Mohamed</span>
              <span className="block text-outline-variant/30 -mt-2 md:-mt-6 lg:-mt-10 stroke-text animate-slam-in delay-200">Emam</span>
            </h1>
            <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-secondary text-on-secondary font-label text-[10px] md:text-xs px-4 py-2 uppercase tracking-widest font-black rotate-12 shadow-xl">
              AI ENGINEER v2.0
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-body text-on-surface-variant text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed px-4"
          >
            Engineering high-performance <span className="text-white font-bold">LLM ecosystems</span> and <span className="text-white font-bold">Computer Vision</span> systems. Transforming complex data into autonomous, scalable solutions.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md px-6">
            <a 
              href="#projects"
              className="group relative bg-primary text-on-primary font-headline font-bold px-6 py-3 btn-brutal transition-all hover:bg-primary-fixed uppercase tracking-tighter text-base overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Projects <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a 
              href="#contact"
              className="group border-2 border-outline-variant bg-transparent text-white font-headline font-bold px-6 py-3 btn-brutal transition-all hover:bg-white hover:text-black uppercase tracking-tighter text-base"
            >
              Contact
            </a>
          </div>
        </div>
      </motion.div>

      {/* Status Indicator */}
      <div className="absolute top-32 left-8 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
        <span className="font-label text-[10px] text-secondary uppercase tracking-[0.3em] font-bold">System Online: v2.5.0</span>
      </div>

      {/* Side Rails */}
      <motion.div style={{ y: railY1 }} className="absolute left-8 bottom-20 hidden lg:block">
        <div className="writing-vertical-rl text-[10px] font-label text-outline-variant uppercase tracking-[0.5em] opacity-50">
          EST. 2019 — CAIRO, EGYPT
        </div>
      </motion.div>
      <motion.div style={{ y: railY2 }} className="absolute right-8 bottom-20 hidden lg:block">
        <div className="writing-vertical-rl text-[10px] font-label text-outline-variant uppercase tracking-[0.5em] opacity-50">
          SCALABLE • AUTONOMOUS • INTELLIGENT
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20"
      >
        <div className="w-px h-20 bg-gradient-to-b from-primary to-transparent"></div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-surface-container-low geometric-divider"></div>
    </section>
  );
};

const Marquee = () => (
  <div className="marquee-container">
    <div className="marquee-content">
      {Array(10).fill("").map((_, i) => (
        <span key={i} className="mx-8">
          LLM ARCHITECT • COMPUTER VISION • RAG PIPELINES • MULTI-AGENT SWARMS • CLOUD NATIVE • MLOPS • 
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <section className="py-40 bg-surface relative overflow-hidden" id="about">
    {/* Skewed Background Element */}
    <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -skew-x-12 translate-x-1/4 pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 sticky top-32"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 -skew-y-3 group-hover:skew-y-0 transition-transform duration-500"></div>
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden rounded-none border-2 border-white/10 relative z-10">
              <img 
                src="/assets/images/mohamed_emam.jpg" 
                alt="Mohamed Emam" 
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white text-black p-10 z-20 shadow-2xl">
              <div className="font-headline text-6xl font-black leading-none">05</div>
              <div className="font-label text-[10px] uppercase tracking-[0.3em] font-bold mt-2">Years of Core Engineering</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 pt-12 lg:pt-0"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-primary"></div>
            <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold">The Philosophy</span>
          </div>
          
          <h3 className="font-headline text-5xl md:text-7xl font-black mb-12 tracking-tighter uppercase leading-[0.9]">
            Systematic <br />
            <span className="text-outline-variant/40">Innovation.</span>
          </h3>
          
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed">
              I specialize in the <span className="text-white font-bold">full-stack deployment</span> of Artificial Intelligence. My approach bridges the gap between academic research and production reality.
            </p>
            <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed">
              From reducing RAG pipeline latency by 40% to orchestrating multi-agent systems for enterprise real estate, I build the "Architectural Core" that powers the next generation of intelligent software. Every model I build is optimized for latency, scalability, and ethical impact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20">
            {[
              { label: "Production LLMs", desc: "Enterprise-grade RAG & Agents" },
              { label: "Computer Vision", desc: "Real-time detection & analysis" },
              { label: "Vector Databases", desc: "High-dimensional data retrieval" },
              { label: "Cloud Orchestration", desc: "Kubernetes & AWS deployments" }
            ].map((skill) => (
              <div key={skill.label} className="group">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-2 h-2 bg-secondary group-hover:w-8 transition-all duration-300"></div>
                  <span className="font-headline text-lg font-bold uppercase tracking-tight">{skill.label}</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant pl-6">{skill.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-surface geometric-divider-reverse"></div>
    </div>
  </section>
);

const Skills = () => {
  const categories = [
    {
      title: "AI & ML",
      icon: <Brain className="text-primary" size={24} />,
      skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "ONNX", "TensorRT"],
      size: "lg"
    },
    {
      title: "LLM & NLP",
      icon: <MessageSquare className="text-primary" size={24} />,
      skills: ["LangChain", "LangGraph", "llama.cpp", "vLLM", "SGLang", "RAG", "Prompt Engineering"],
      size: "lg"
    },
    {
      title: "Programming",
      icon: <Terminal className="text-primary" size={24} />,
      skills: ["Python", "JavaScript", "C++", "MATLAB", "Bash"],
      size: "sm"
    },
    {
      title: "Backend",
      icon: <Server className="text-primary" size={24} />,
      skills: ["FastAPI", "Flask", "Node.js", "Express.js", "WebSocket", "REST APIs"],
      size: "sm"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-primary" size={24} />,
      skills: ["GCP", "Azure", "Docker", "GitHub Actions", "Git", "MLOps"],
      size: "sm"
    },
    {
      title: "Specializations",
      icon: <Database className="text-primary" size={24} />,
      skills: ["Knowledge Graph RAG", "Computer Vision", "Web Scraping", "Automation", "browser-use"],
      size: "sm"
    }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="skills">
      {/* Floating Code Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-code top-[10%] left-0" style={{ animationDelay: '0s' }}>import torch; model = torch.nn.Sequential(torch.nn.Linear(128, 64), torch.nn.ReLU())</div>
        <div className="floating-code top-[30%] left-0" style={{ animationDelay: '5s' }}>const response = await openai.chat.completions.create(&#123; model: "gpt-4", messages: [...] &#125;)</div>
        <div className="floating-code top-[50%] left-0" style={{ animationDelay: '2s' }}>def optimize_rag(query): vector_store.similarity_search(query, k=5)</div>
        <div className="floating-code top-[70%] left-0" style={{ animationDelay: '8s' }}>docker-compose up --build -d # deploying multi-agent swarm</div>
        <div className="floating-code top-[90%] left-0" style={{ animationDelay: '3s' }}>SELECT * FROM embeddings WHERE cosine_similarity(v1, v2) &gt; 0.85</div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-primary"></div>
            <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs font-bold block mb-4">The Toolkit</span>
            <h2 className="font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">Technical <br />Stack</h2>
          </div>
          <p className="max-w-xs text-on-surface-variant font-body text-sm leading-relaxed border-l border-outline-variant/30 pl-6">
            A curated selection of tools and frameworks prioritized for high-concurrency and data-intensive AI applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-surface p-10 hover:bg-surface-container-low transition-all duration-500 group relative overflow-hidden ${
                cat.size === 'lg' ? 'md:col-span-2 lg:col-span-3' : 'md:col-span-2 lg:col-span-2'
              }`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="font-headline text-6xl font-black">{idx + 1}</span>
              </div>
              <div className="absolute top-4 left-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
                <span className="font-label text-[8px] text-secondary uppercase tracking-widest font-bold">Active Module</span>
              </div>
              <div className="mb-8 relative z-10 mt-4">
                <div className="w-12 h-12 bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  {cat.icon}
                </div>
              </div>
              <h4 className="font-headline text-xl font-bold mb-8 uppercase tracking-tight relative z-10">{cat.title}</h4>
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map((skill) => (
                  <span key={skill} className="bg-surface-container-high text-on-surface-variant font-label text-[9px] px-3 py-1.5 uppercase tracking-widest border border-outline-variant/10 group-hover:border-primary/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      period: "JUN 2026 — PRESENT",
      company: "COA Holding",
      role: "AI Engineer",
      description: "Designing and implementing autonomous agents to optimize Facebook Ads campaigns. Automating monitoring and decision-making (budget adjustments, performance evaluation) based on predefined KPIs.",
      tags: ["ADS OPTIMIZATION", "AUTONOMOUS AGENTS", "KPI"]
    },
    {
      period: "MAY 2025 — DEC 2025",
      company: "Deeb Realties",
      role: "AI Engineer",
      description: "Deployed multi-platform chatbots (WhatsApp, Instagram, Messenger) integrated with Odoo CRM. Automated inquiries, bookings, and complaints, deployed on GCP with 99.9% uptime.",
      tags: ["CHATBOTS", "ODOO", "GCP"]
    },
    {
      period: "OCT 2024 — JUL 2025",
      company: "Vrtualize",
      role: "AI Engineer",
      description: "Developed AI travel recommendation system and image-based location search. Optimized performance to 10s response time and integrated multiple real-time travel APIs.",
      tags: ["TRAVEL AI", "COMPUTER VISION", "API INTEGRATION"]
    },
    {
      period: "2023 — 2024",
      company: "Freelance",
      role: "AI Engineer",
      description: "Built real-time face emotion detection (CNN), automated Q&A dataset generators (LLM), and speech command recognition systems (LSTM/CNN).",
      tags: ["CNN", "LSTM", "LLM"]
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low relative overflow-hidden" id="experience">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-32">
          <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6">The Journey</span>
          <h2 className="font-headline text-6xl md:text-9xl font-black tracking-tighter uppercase text-center leading-none">Trajectory</h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 w-px h-full bg-outline-variant/20 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-32">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
                  <div className={`flex flex-col ${idx % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                    <span className="font-mono text-secondary text-xs font-bold tracking-widest mb-4 border border-secondary/20 px-3 py-1">{exp.period}</span>
                    <h4 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">{exp.company}</h4>
                    <div className="bg-primary/10 text-primary font-label text-[10px] px-4 py-1 uppercase tracking-[0.2em] font-bold border border-primary/20">
                      {exp.role}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <div className="bg-surface p-8 md:p-12 border border-outline-variant/10 relative group hover:border-primary/30 transition-colors shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-outline-variant/10 group-hover:bg-primary transition-colors"></div>
                    <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed mb-8">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {exp.tags.map(tag => (
                        <span key={tag} className="font-label text-[10px] text-outline uppercase tracking-widest">#{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Real-Time Voice Agent with Avatar",
      milestone: "Latency Milestone",
      metric: "< 2s Latency",
      description: "Built interactive voice-driven agent with real-time avatar synchronization. Leveraged Gemini Live API and optimized Float framework for 25 fps rendering.",
      tech: ["Gemini Live", "WebSocket", "Float", "Audio Processing"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Real-Time AI Search Engine",
      milestone: "Performance Record",
      metric: "< 4s Response",
      description: "High-concurrency C++ scraping engine integrated with live Google Search for real-time AI synthesis. Outperforms standard Python-based RAG solutions.",
      tech: ["C++", "Gumbo", "cURL", "Google Search API"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cooperative Multi-Agent System",
      milestone: "Architectural Achievement",
      metric: "Multi-LLM Support",
      description: "Designed system with feedback loops supporting GPT, Claude, and Gemini. Includes long history management, vision models, and live voice calling.",
      tech: ["LangChain", "vLLM", "Docker", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Automatic Grading System",
      milestone: "Accuracy Achievement",
      metric: "94% Correlation",
      description: "LLM-based automated grading for English and Arabic datasets using RAG architecture. Reduced manual grading time by 80%.",
      tech: ["LLM", "Vision LLM", "PyTorch", "RAG"],
      image: "https://images.unsplash.com/photo-1454165833767-027508496b4c?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-32">
          <span className="font-label text-secondary uppercase tracking-[0.5em] text-xs font-bold block mb-6">Case Studies</span>
          <h2 className="font-headline text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">Deployments</h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background Number */}
              <div className={`absolute -top-20 ${idx % 2 === 0 ? '-right-10' : '-left-10'} opacity-5 pointer-events-none hidden lg:block`}>
                <span className="font-headline text-[20rem] font-black leading-none">0{idx + 1}</span>
              </div>

              <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-7/12 relative group">
                  <div className="absolute -inset-4 bg-primary/10 -skew-x-6 group-hover:skew-x-0 transition-transform duration-700"></div>
                  <div className="relative overflow-hidden border border-outline-variant/20 aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="lg:w-5/12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-px bg-primary"></div>
                    <span className="font-label text-primary text-[10px] uppercase tracking-[0.3em] font-bold">{project.milestone}</span>
                  </div>
                  <h4 className="font-headline text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">
                    {project.title}
                  </h4>
                  
                  {/* Data Grid Metric */}
                  <div className="border-y border-outline-variant/20 py-4 mb-8 flex items-center justify-between">
                    <span className="font-label text-[10px] text-outline uppercase tracking-widest">Performance Metric</span>
                    <span className="font-mono text-secondary text-xl font-bold tracking-tighter">{project.metric}</span>
                  </div>

                  <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-12">
                    {project.tech.map(t => (
                      <span key={t} className="bg-surface-container-high text-white font-label text-[10px] px-3 py-1.5 border border-outline-variant/10 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                  <button className="group flex items-center gap-4 font-headline text-sm uppercase tracking-widest font-black text-white hover:text-primary transition-colors btn-brutal px-4 py-2 border border-white/10">
                    Technical Deep-Dive
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section className="py-32 bg-surface relative overflow-hidden">
    {/* Background Decorative Text */}
    <div className="absolute -bottom-20 -left-20 opacity-[0.02] pointer-events-none select-none">
      <span className="font-headline text-[30rem] font-black leading-none uppercase">ACADEMIA</span>
    </div>

    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-primary"></div>
            <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold">The Foundation</span>
          </div>
          <h3 className="font-headline text-5xl md:text-7xl font-black mb-16 uppercase tracking-tighter leading-none">
            Academic <br />
            <span className="text-outline-variant/40">Foundation</span>
          </h3>
          
          <div className="space-y-12">
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="mt-2 w-12 h-12 bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold uppercase tracking-tight">B.Sc. in Computer Science & AI</h4>
                  <p className="font-body text-xl text-on-surface-variant mt-2">Banha University | Faculty of Computers and AI</p>
                  <div className="mt-4 inline-block bg-primary/10 text-primary font-label text-[10px] px-4 py-1 uppercase tracking-[0.2em] font-bold border border-primary/20">
                    CGPA: 3.5/4 (Very Good)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-outline-variant/10">
              <h4 className="font-headline text-xl font-bold flex items-center gap-3 uppercase tracking-tight mb-8">
                <Globe className="text-secondary" size={20} />
                Linguistic Capability
              </h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6 border border-outline-variant/10 group hover:border-secondary/30 transition-colors">
                  <span className="font-label text-xs uppercase text-secondary tracking-[0.3em] font-bold">Arabic</span>
                  <span className="block text-[10px] text-outline mt-2 uppercase tracking-widest font-bold">Native Proficiency</span>
                </div>
                <div className="bg-surface-container-low p-6 border border-outline-variant/10 group hover:border-secondary/30 transition-colors">
                  <span className="font-label text-xs uppercase text-secondary tracking-[0.3em] font-bold">English</span>
                  <span className="block text-[10px] text-outline mt-2 uppercase tracking-widest font-bold">Professional Working</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-surface-container-low p-10 md:p-16 border border-outline-variant/10 relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Award size={120} />
            </div>
            
            <h3 className="font-headline text-3xl font-black mb-12 uppercase tracking-tight flex items-center gap-4">
              <Award className="text-primary" />
              Technical Specializations
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2023" },
                { name: "Natural Language Processing", issuer: "Stanford Online", year: "2023" },
                { name: "Mathematics for ML", issuer: "DeepLearning.AI", year: "2022" },
                { name: "Linux Administrator", issuer: "NTI", year: "2024" },
                { name: "React Web Developer", issuer: "DEPI (MCIT)", year: "2024" },
                { name: "NDG Linux Unhatched", issuer: "Cisco", year: "2023" }
              ].map((cert, idx) => (
                <div key={idx} className="group border-b border-outline-variant/10 pb-6 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">{cert.year}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h5 className="font-headline text-lg font-bold group-hover:text-white transition-colors leading-tight">{cert.name}</h5>
                  <span className="font-label text-[10px] text-outline uppercase tracking-widest mt-2 block">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-32 bg-surface-container-highest technical-gradient" id="contact">
    <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
      <span className="font-label text-secondary uppercase tracking-[0.4em] text-sm block mb-8">Connect & Collaborate</span>
      <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-none">
        Let's build intelligent systems together.
      </h2>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-surface-container-low p-8 md:p-16 border border-outline-variant/20 inline-block w-full text-left shadow-2xl"
      >
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-b border-outline-variant focus-within:border-secondary transition-colors py-3">
            <label className="font-label text-[10px] uppercase text-outline block tracking-widest">Your Name</label>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 font-body p-0 mt-2 placeholder:text-surface-container-highest text-white" 
              placeholder="Turing Jr." 
              type="text"
            />
          </div>
          <div className="border-b border-outline-variant focus-within:border-secondary transition-colors py-3">
            <label className="font-label text-[10px] uppercase text-outline block tracking-widest">Email Address</label>
            <input 
              className="w-full bg-transparent border-none focus:ring-0 font-body p-0 mt-2 placeholder:text-surface-container-highest text-white" 
              placeholder="alan@enigma.com" 
              type="email"
            />
          </div>
          <div className="col-span-1 md:col-span-2 border-b border-outline-variant focus-within:border-secondary transition-colors py-3">
            <label className="font-label text-[10px] uppercase text-outline block tracking-widest">Project Vision</label>
            <textarea 
              className="w-full bg-transparent border-none focus:ring-0 font-body p-0 mt-2 placeholder:text-surface-container-highest resize-none text-white" 
              placeholder="Describe the intelligent system we are building..." 
              rows={4}
            ></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center pt-6">
            <button 
              className="bg-primary text-on-primary font-headline font-bold px-6 py-3 btn-brutal hover:bg-primary-fixed transition-all w-full md:w-auto uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-2 mx-auto" 
              type="submit"
            >
              Execute Transmission
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </motion.div>
      <div className="mt-20 flex justify-center flex-wrap gap-8 md:gap-16">
        {[
          { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/mohamed-em2m" },
          { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/mohamed-emam-599970208/" },
          { name: "Kaggle", icon: <Layout size={20} />, url: "https://www.kaggle.com/elemam" },
          { name: "Email", icon: <Mail size={20} />, url: "mailto:emam200232@gmail.com" }
        ].map(social => (
          <a 
            key={social.name}
            href={social.url} 
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-on-surface-variant hover:text-secondary transition-colors uppercase text-sm tracking-[0.2em] flex items-center gap-2"
          >
            {social.icon}
            {social.name}
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="w-full border-t border-outline-variant/10 bg-surface text-on-surface-variant font-body">
    <div className="max-w-7xl mx-auto py-16 px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-2xl font-black text-white font-headline tracking-tighter uppercase">Mohamed Emam</div>
        <div className="text-center text-sm uppercase tracking-widest font-label">
          © 2024 Mohamed Emam. Built with Architectural Precision.
        </div>
        <div className="flex space-x-8">
          <UserCheck className="hover:text-primary cursor-pointer transition-colors" size={24} />
          <Server className="hover:text-primary cursor-pointer transition-colors" size={24} />
          <Mail className="hover:text-primary cursor-pointer transition-colors" size={24} />
        </div>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
