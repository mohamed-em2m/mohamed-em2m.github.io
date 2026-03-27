import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
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

const InteractiveText = ({ text, className }: { text: string; className?: string }) => {
  return (
    <span className={className}>
      {text}
    </span>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
    <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
      <div className="text-xl font-light text-white tracking-tight font-serif">
        AI
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {["Experience", "Projects", "Skills", "OpenSource", "Education", "Certifications", "Contact"].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-label text-on-surface-variant hover:text-white transition-colors text-xs uppercase tracking-widest"
          >
            {item}
          </a>
        ))}
      <a
        href="/assets/cv/Mohamed_Emam.pdf"  // path to your PDF file
        download="Mohamed_Emam.pdf"  // name for the downloaded file
        className="bg-primary text-on-primary font-headline font-bold px-4 py-2 btn-brutal flex items-center gap-2 text-xs border border-white/10"
      >
        <Download size={16} />
        RESUME
      </a>
      </div>
      <div className="md:hidden">
        <Menu className="text-white" />
      </div>
    </div>
  </nav>
);

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-8 bg-surface overflow-hidden"
    >
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 max-w-4xl w-full relative"
      >
        <div className="flex flex-col items-center">
          <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-9xl tracking-tight text-white mb-8">
            Mohamed Emam
          </h1>

          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Engineering high-performance <span className="text-white">LLM ecosystems</span> and <span className="text-secondary/80">Computer Vision</span> systems. Transforming complex data into autonomous, scalable solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 w-full max-w-md">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-on-primary font-medium rounded-none transition-all hover:bg-primary-fixed hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              View Projects
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-outline-variant text-on-surface font-medium rounded-none transition-all hover:bg-white/5 hover:border-white/20 active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
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

const About = () => {
  return (
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
          
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-12 tracking-tight leading-[1.1]">
            Professional <span className="italic opacity-50">Summary</span>
          </h3>
          
          <div className="space-y-8 max-w-2xl">
            <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed">
              AI Engineer with strong expertise in machine learning, deep learning, NLP, and computer vision. Experienced in designing and deploying production-ready AI solutions including chatbots, recommendation engines, and real-time detection systems. Skilled in full-stack development (MERN) and proficient in Python, C++, and JavaScript. Hands-on experience with cloud deployment (GCP, Azure) and MLOps practices. Passionate about applying AI to solve real-world problems and staying at the forefront of emerging AI technologies.
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
    </div>
  </section>
);
};

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
      title: "Frontend",
      icon: <Layout className="text-primary" size={24} />,
      skills: ["React", "HTML5", "CSS3", "Bootstrap", "Responsive Design"],
      size: "sm"
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: ["PostgreSQL", "MongoDB", "Neo4j", "SQL", "BigQuery", "Firestore"],
      size: "sm"
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-primary" size={24} />,
      skills: ["GCP", "Azure", "Docker", "GitHub Actions", "Git", "MLOps"],
      size: "sm"
    },
    {
      title: "Linux & Systems",
      icon: <Terminal className="text-primary" size={24} />,
      skills: ["Linux Admin", "Bash Automation", "SSH", "Cron", "Process Management"],
      size: "sm"
    },
    {
      title: "Specializations",
      icon: <Brain className="text-primary" size={24} />,
      skills: ["Knowledge Graph RAG", "Computer Vision", "Web Scraping", "Automation", "Data Visualization"],
      size: "sm"
    }
  ];

  return (
    <section className="py-32 bg-surface relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 w-1 h-full bg-primary"></div>
            <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs font-bold block mb-4">The Toolkit</span>
            <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none">
              <InteractiveText text="Technical" className="block" />
              <InteractiveText text="Stack" className="block text-outline-variant/40 italic" />
            </h2>
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
      description: "Designed and implemented an autonomous agent to optimize Facebook Ads campaigns by dynamically selecting the best-performing configurations. Automated monitoring and decision-making (budget adjustments, performance evaluation) based on predefined KPIs.",
      tags: ["ADS OPTIMIZATION", "AUTONOMOUS AGENTS", "KPI", "FACEBOOK API"]
    },
    {
      period: "MAY 2025 — DEC 2025",
      company: "Deeb Realties",
      role: "AI Engineer",
      description: "Deployed multi-platform chatbot across WhatsApp, Instagram, and Facebook Messenger. Automated customer inquiries, appointment booking, and complaint management. Integrated with Odoo CRM for seamless administrative workflow.",
      tags: ["CHATBOTS", "ODOO", "GCP", "CRM INTEGRATION"]
    },
    {
      period: "OCT 2024 — JUL 2025",
      company: "Vrtualize",
      role: "AI Engineer",
      description: "Developed AI-powered travel recommendation system for flights, hotels, and destinations. Implemented image-based location search using computer vision techniques. Optimized system performance achieving 10-second average response time.",
      tags: ["TRAVEL AI", "COMPUTER VISION", "API INTEGRATION", "RAG"]
    },
    {
      period: "2023 — 2024",
      company: "Freelance",
      role: "AI Engineer",
      description: "Built real-time face emotion detection (CNN), automated Q&A dataset generators (LLM), and speech command recognition systems (LSTM/CNN).",
      tags: ["CNN", "LSTM", "LLM", "SPEECH RECOGNITION"]
    }
  ];

  return (
    <section className="py-32 bg-surface-container-low relative overflow-hidden" id="experience">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col items-center mb-32">
          <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6">The Journey</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight text-center leading-none">
            <InteractiveText text="Trajectory" />
          </h2>
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

const ProjectCard = ({ project, idx }: { project: any, idx: number }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="relative"
  >
    <div className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
      {!project.hideImage && (
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
      )}

      <div className={project.hideImage ? "lg:w-full" : "lg:w-5/12"}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-primary"></div>
          <span className="font-label text-primary text-[10px] uppercase tracking-[0.3em] font-bold">{project.milestone}</span>
        </div>
        <h4 className="font-headline text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight">
          {project.title}
        </h4>
        
        <div className="border-y border-outline-variant/20 py-4 mb-8 flex items-center justify-between">
          <span className="font-label text-[10px] text-outline uppercase tracking-widest">Performance Metric</span>
          <span className="font-mono text-secondary text-xl font-bold tracking-tighter">{project.metric}</span>
        </div>

        {project.percentageMetrics && (
          <div className="flex flex-wrap gap-4 mb-8">
            {project.percentageMetrics.map((m: string) => (
              <div key={m} className="flex flex-col items-center justify-center p-4 border border-primary/20 bg-primary/5 min-w-[120px]">
                <span className="font-mono text-2xl font-black text-primary">{m.split(' ')[0]}</span>
                <span className="font-label text-[8px] uppercase tracking-widest text-outline">{m.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
        )}

        <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          {project.tech.map((t: string) => (
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
);

const Projects = () => {
  const aiProjects = [
    {
      title: "Real-Time Voice Agent with Avatar",
      milestone: "Latency Milestone",
      metric: "< 2s Latency",
      description: "Built interactive voice-driven agent system with real-time avatar achieving sub-2s latency. Integrated Gemini Live API for natural conversational AI with synchronized visual feedback.",
      tech: ["Gemini Live", "WebSocket", "Float", "Audio Processing"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Real-Time AI Search & Retrieval Engine",
      milestone: "Performance Record",
      metric: "< 4s Response",
      description: "High-concurrency C++ scraping engine integrated with live Google Search for real-time AI synthesis. Extracts data from 20+ websites in under 4 seconds.",
      tech: ["C++", "Gumbo", "cURL", "Google Search API"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Maika App - AI Travel Assistant",
      milestone: "Full-Stack Deployment",
      metric: "10s Avg Response",
      description: "Intelligent travel assistant with personalized recommendations and image-based location search using RAG and Vector search. Built Rust-powered web search tool.",
      tech: ["LLM", "LangGraph", "FastAPI", "GCP", "Azure"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cooperative Multi-Agent System",
      milestone: "Architectural Achievement",
      metric: "Multi-LLM Support",
      description: "Designed system with feedback loops supporting GPT, Claude, and Gemini. Includes long history management, vision models, and live voice calling.",
      tech: ["LangChain", "vLLM", "Docker", "FastAPI"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const automationProjects = [
    {
      title: "Automatic Grading System",
      milestone: "Accuracy Achievement",
      metric: "94% Correlation",
      description: "LLM-based automated grading for English and Arabic datasets using RAG architecture. Reduced manual grading time by 80%.",
      tech: ["LLM", "Vision LLM", "PyTorch", "RAG"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      percentageMetrics: ["94% Correlation", "80% Time Saved"]
    },
    {
      title: "CSV Report Builder",
      milestone: "Data Automation",
      metric: "Automated Insights",
      description: "AI-powered agent processing CSV files to generate comprehensive analytical reports with visual charts and natural language interface.",
      tech: ["LLM", "LangChain", "FastAPI", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Teepublic Design Automation",
      milestone: "Workflow Optimization",
      metric: "Batch Processing",
      description: "Web automation platform for streamlined design uploads with team management, batch processing, and performance monitoring.",
      tech: ["React", "Node.js", "MongoDB", "Puppeteer"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Real-Time Speech Recognition",
      milestone: "Signal Processing",
      metric: "Low Latency",
      description: "Speech classification system using CNN-LSTM architecture with MFCC feature extraction for real-time audio command recognition.",
      tech: ["TensorFlow", "MFCC", "LSTM", "CNN", "Python"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-32 bg-surface overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-32">
          <span className="font-label text-secondary uppercase tracking-[0.5em] text-xs font-bold block mb-6">Case Studies</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight leading-none">
            <InteractiveText text="Deployments" />
          </h2>
        </div>

        {/* AI & LLM Systems Section */}
        <div className="mb-40">
          <div className="flex items-center gap-4 mb-20">
            <h3 className="font-serif text-3xl md:text-5xl font-light tracking-tight italic text-white/80">AI & LLM Systems</h3>
            <div className="flex-grow h-px bg-outline-variant/20"></div>
          </div>
          <div className="space-y-40">
            {aiProjects.map((project, idx) => (
              <div key={idx}>
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Data & Automation Section */}
        <div>
          <div className="flex items-center gap-4 mb-20">
            <h3 className="font-serif text-3xl md:text-5xl font-light tracking-tight italic text-white/80">Data & Automation</h3>
            <div className="flex-grow h-px bg-outline-variant/20"></div>
          </div>
          <div className="space-y-40">
            {automationProjects.map((project, idx) => (
              <div key={idx}>
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => (
  <section className="py-32 bg-surface relative overflow-hidden" id="education">
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-px bg-primary"></div>
            <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold">The Foundation</span>
          </div>
          <h3 className="font-serif text-5xl md:text-7xl font-light mb-16 tracking-tight leading-none">
            <InteractiveText text="Academic" className="block" />
            <InteractiveText text="Foundation" className="block text-outline-variant/40 italic" />
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
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="bg-primary/10 text-primary font-label text-[10px] px-4 py-1 uppercase tracking-[0.2em] font-bold border border-primary/20">
                      CGPA: 3.5/4 (Very Good)
                    </div>
                    <div className="bg-secondary/10 text-secondary font-label text-[10px] px-4 py-1 uppercase tracking-[0.2em] font-bold border border-secondary/20">
                      Grad Project: A+
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group pt-12 border-t border-outline-variant/10">
              <div className="flex items-start gap-6">
                <div className="mt-2 w-12 h-12 bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-on-primary transition-all duration-500">
                  <Layout size={24} />
                </div>
                <div>
                  <h4 className="font-headline text-2xl font-bold uppercase tracking-tight">React Web Developer (DEPI)</h4>
                  <p className="font-body text-lg text-on-surface-variant mt-2">Ministry of Communications (MCIT)</p>
                  <span className="font-label text-[10px] text-outline uppercase tracking-widest mt-2 block">May 2024 – Oct 2024</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6"
        >
          <div className="pt-12 lg:pt-32">
            <h4 className="font-headline text-xl font-bold flex items-center gap-3 uppercase tracking-tight mb-8">
              <Globe className="text-secondary" size={20} />
              Linguistic Capability
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        </motion.div>
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section className="py-32 bg-surface-container-low relative overflow-hidden" id="certifications">
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="relative">
          <div className="absolute -left-8 top-0 w-1 h-full bg-primary"></div>
          <span className="font-label text-primary uppercase tracking-[0.4em] text-xs font-bold block mb-4">Accreditations</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight leading-none">
            <InteractiveText text="Certifications" />
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Machine Learning Specialization", issuer: "DeepLearning.AI", year: "2023" },
          { name: "Natural Language Processing", issuer: "Stanford Online", year: "2023" },
          { name: "Mathematics for ML", issuer: "DeepLearning.AI", year: "2022" },
          { name: "Linux Administrator", issuer: "NTI", year: "2024" },
          { name: "React Web Developer", issuer: "DEPI (MCIT)", year: "2024" },
          { name: "NDG Linux Unhatched", issuer: "Cisco", year: "2023" },
          { name: "Supervised Machine Learning", issuer: "DeepLearning.AI", year: "2023" },
          { name: "Advanced Learning Algorithms", issuer: "DeepLearning.AI", year: "2023" }
        ].map((cert, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group bg-surface p-8 border border-outline-variant/10 hover:border-primary/30 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">{cert.year}</span>
              <Award size={16} className="text-primary/40 group-hover:text-primary transition-colors" />
            </div>
            <h5 className="font-headline text-lg font-bold group-hover:text-white transition-colors leading-tight mb-4">{cert.name}</h5>
            <span className="font-label text-[10px] text-outline uppercase tracking-widest block">{cert.issuer}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const OpenSource = () => (
  <section className="py-32 bg-surface-container-low relative overflow-hidden" id="opensource">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div className="relative">
          <div className="absolute -left-8 top-0 w-1 h-full bg-secondary"></div>
          <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs font-bold block mb-4">Community Impact</span>
          <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight leading-none">
            <InteractiveText text="Open Source" />
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            name: "Enhanced Soccer Video Analytics (Tryolabs)",
            desc: "Extended framework for YOLOv5/v8 compatibility. Implemented dynamic label mapping and configurable team color palettes.",
            tags: ["COMPUTER VISION", "YOLO", "ANALYTICS"]
          },
          {
            name: "Mistral-Common",
            desc: "Enhanced API performance and developer experience. Standardized response formats and added streaming support.",
            tags: ["LLM", "API", "STREAMING"]
          },
          {
            name: "MemoryOs Repository",
            desc: "Fixed environment variable bugs for dynamic model assignment, ensuring consistency in function-level configurations.",
            tags: ["DEBUGGING", "MLOPS"]
          },
          {
            name: "PageIndex Repository",
            desc: "Added Docling support, Pydantic JSON validation, and configurable LLM API integration.",
            tags: ["DATA PIPELINES", "VALIDATION"]
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-surface p-10 border border-outline-variant/10 hover:border-secondary/40 transition-all group">
            <Github className="text-secondary mb-6 group-hover:scale-110 transition-transform" size={32} />
            <h4 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight">{item.name}</h4>
            <p className="font-body text-on-surface-variant mb-8 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-3">
              {item.tags.map(tag => (
                <span key={tag} className="font-label text-[9px] text-outline uppercase tracking-widest border border-outline-variant/20 px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section className="py-32 bg-surface-container-highest technical-gradient" id="contact">
    <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
      <span className="font-label text-secondary uppercase tracking-[0.4em] text-sm block mb-8">Connect & Collaborate</span>
      <h2 className="font-serif text-5xl md:text-8xl font-light tracking-tight mb-12 leading-none">
        Let's build <span className="italic text-secondary">intelligent</span> systems together.
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
        <div className="text-2xl font-light text-white font-serif tracking-tight">Mohamed <span className="opacity-70">Emam</span></div>
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
        <OpenSource />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
