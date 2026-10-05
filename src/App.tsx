import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Brain,
  MessageSquare,
  Database,
  Cloud,
  Server,
  Terminal,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Menu,
  X,
  GraduationCap,
  Globe,
  Award,
  MapPin,
  Copy,
  Check,
  Layout,
} from "lucide-react";
import {
  CV_PATH,
  PHOTO_PATH,
  CONTACT,
  EXPERIENCES,
  AI_PROJECTS,
  INFRA_PROJECTS,
  OSS_ITEMS,
  SKILL_GROUPS,
  CERTS,
  type Project,
} from "./data/portfolio";

// ---------- Navbar ----------
const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Open Source", href: "#opensource" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-16 md:h-20">
        <a href="#top" className="text-xl font-light text-white tracking-tight font-serif">
          Mohamed<span className="text-secondary">.</span>Emam
        </a>
        <div className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-label text-on-surface-variant hover:text-white transition-colors text-[11px] uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CV_PATH}
            download="Mohamed_Emam_CV.pdf"
            className="bg-primary text-on-primary font-headline font-bold px-4 py-2 btn-brutal flex items-center gap-2 text-xs border border-white/10"
          >
            <Download size={16} />
            CV
          </a>
        </div>
        <button
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-surface px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-label text-sm uppercase tracking-widest text-on-surface-variant hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CV_PATH}
            download="Mohamed_Emam_CV.pdf"
            className="bg-primary text-on-primary font-bold px-4 py-3 flex items-center justify-center gap-2 text-sm"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

// ---------- Hero ----------
const Hero = () => (
  <section id="top" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-8 bg-surface overflow-hidden pt-20">
    <div className="absolute inset-0 pointer-events-none opacity-30">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="z-10 max-w-4xl w-full relative"
    >
      <div className="inline-flex items-center gap-2 border border-secondary/30 bg-secondary/10 px-4 py-1.5 mb-8">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
        <span className="font-label text-[10px] uppercase tracking-[0.25em] text-secondary font-bold">
          Open to AI Engineer roles · {CONTACT.location}
        </span>
      </div>
      <p className="font-label text-on-surface-variant uppercase tracking-[0.35em] text-xs mb-6">
        AI Engineer — LLM / VLM Systems · Multi-Agent Architecture · Generative AI
      </p>
      <h1 className="font-serif font-medium text-6xl md:text-8xl lg:text-9xl tracking-tight text-white mb-8">
        Mohamed Emam
      </h1>
      <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
        Production-grade <span className="text-white">Agentic AI</span>, high-throughput{" "}
        <span className="text-white">LLM/VLM serving</span> (vLLM, SGLang, llama.cpp), and{" "}
        <span className="text-white">real-time multimodal</span> systems — from Rust retrieval
        to sovereign inference clusters.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-lg mx-auto mb-12">
        <a
          href="#projects"
          className="px-8 py-4 bg-primary text-on-primary font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 text-center"
        >
          View Projects
        </a>
        <a
          href={CV_PATH}
          download="Mohamed_Emam_CV.pdf"
          className="px-8 py-4 border border-white/20 text-white font-medium transition-all hover:bg-white/5 active:scale-95 flex items-center justify-center gap-2"
        >
          <Download size={18} /> Download CV
        </a>
      </div>
      <div className="flex justify-center gap-8 text-on-surface-variant">
        <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-secondary transition-colors"><Github size={22} /></a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-secondary transition-colors"><Linkedin size={22} /></a>
        <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-secondary transition-colors"><Mail size={22} /></a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 mt-14 text-left">
        {[
          ["2.5+", "Years shipping AI"],
          ["8", "Flagship systems"],
          ["7+", "OSS PRs merged"],
          ["99.9%", "Prod uptime GCP"],
        ].map(([v, l]) => (
          <div key={l} className="bg-surface p-5">
            <div className="font-mono text-2xl font-bold text-white">{v}</div>
            <div className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">{l}</div>
          </div>
        ))}
      </div>
    </motion.div>
  </section>
);

const Marquee = () => (
  <div className="marquee-container" aria-hidden>
    <div className="marquee-content">
      {Array(8).fill("").map((_, i) => (
        <span key={i} className="mx-8">
          AGENTIC AI • VLLM • SGLANG • LLAMA.CPP • RAG • RUST RETRIEVAL • FLOW MATCHING • MCP • CUDA •
        </span>
      ))}
    </div>
  </div>
);

const About = () => (
  <section className="py-28 md:py-40 bg-surface relative overflow-hidden" id="about">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -skew-x-12 translate-x-1/4 pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 -skew-y-3 group-hover:skew-y-0 transition-transform duration-500" />
            <div className="aspect-[4/5] bg-surface-container-high overflow-hidden border-2 border-white/10 relative z-10">
              <img
                src={PHOTO_PATH}
                alt="Portrait of Mohamed Emam, AI Engineer"
                loading="lazy"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-10 bg-white text-black p-8 z-20 shadow-2xl">
              <div className="font-headline text-5xl font-black leading-none">04</div>
              <div className="font-label text-[10px] uppercase tracking-[0.25em] font-bold mt-2">Employers · Prod AI</div>
            </div>
          </div>
          <div className="mt-14 flex flex-col gap-2 text-sm font-label text-on-surface-variant">
            <span className="flex items-center gap-2"><MapPin size={14} /> {CONTACT.location}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {CONTACT.email}</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 pt-4 lg:pt-0"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-primary" />
            <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold">The Philosophy</span>
          </div>
          <h3 className="font-serif text-4xl md:text-5xl font-light mb-10 tracking-tight leading-[1.1]">
            Professional <span className="italic opacity-50">Summary</span>
          </h3>
          <div className="space-y-6 max-w-2xl">
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              AI Engineer specializing in production-grade Agentic AI, high-throughput LLM/VLM
              serving, and real-time multimodal architectures. I architect end-to-end distributed
              AI platforms — from iterative multi-agent pipelines (LangChain, LangGraph, Google ADK),
              low-latency retrieval (RAG, Rust, BigQuery Vector), and speech-to-avatar generation
              (Flow Matching, wav2vec2) to sovereign inference clusters (vLLM, SGLang, llama.cpp).
            </p>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              Active open-source contributor across agentic, memory, and generative AI codebases.
              I care about measurable outcomes: sub-3s retrieval, 50%+ faster inference, 99.9% uptime.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-14">
            {[
              { label: "Agentic Pipelines", desc: "LangGraph multi-agent, MCP, tool calling" },
              { label: "Sovereign Inference", desc: "vLLM · SGLang · llama.cpp + CUDA mgmt" },
              { label: "Multimodal GenAI", desc: "Flow Matching avatars, VLM grounding" },
              { label: "Rust Retrieval", desc: "High-concurrency search, vector RAG" },
            ].map((skill) => (
              <div key={skill.label} className="group">
                <div className="flex items-center space-x-4 mb-2">
                  <div className="w-2 h-2 bg-secondary group-hover:w-8 transition-all duration-300" />
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

const SKILL_ICONS = [Brain, MessageSquare, Terminal, Database, Cloud];

const Skills = () => (
  <section className="py-28 bg-surface relative overflow-hidden" id="skills">
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="relative">
          <div className="absolute -left-8 top-0 w-1 h-full bg-primary" />
          <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs font-bold block mb-4">The Toolkit</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none">Technical Stack</h2>
        </div>
        <p className="max-w-xs text-on-surface-variant font-body text-sm leading-relaxed border-l border-white/20 pl-6">
          Prioritized for high-concurrency, data-intensive AI — synced with CV, no filler.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {SKILL_GROUPS.map((cat, idx) => {
          const Icon = SKILL_ICONS[idx % SKILL_ICONS.length];
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface p-8 md:p-10 hover:bg-surface-container-low transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary transition-all duration-500 mb-6">
                <Icon className="text-primary group-hover:text-black transition-colors" size={24} />
              </div>
              <h4 className="font-headline text-xl font-bold mb-6 uppercase tracking-tight">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="bg-surface-container-high text-on-surface-variant font-label text-[10px] px-3 py-1.5 uppercase tracking-widest border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
        <div className="bg-surface-container-low p-8 md:p-10 flex flex-col justify-center">
          <h4 className="font-headline text-xl font-bold mb-4 uppercase">Also</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Fine-tuning (Unsloth, LoRA/QLoRA) · ONNX / TensorRT · Kaggle (Falcon, Mistral, BLOOMZ benchmarks, RL agents) · BigQuery · Firestore · Neo4j · Redis
          </p>
          <a href={CONTACT.github} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-secondary font-label text-xs uppercase tracking-widest hover:underline">
            Verify on GitHub <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section className="py-28 bg-surface-container-low relative overflow-hidden" id="experience">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="flex flex-col items-center mb-20">
        <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold mb-6">The Journey</span>
        <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight text-center leading-none">Trajectory</h2>
        <p className="text-on-surface-variant mt-6 max-w-xl text-center">4 employers · Apr 2024 → Oct 2026 · All bullets verifiable against CV.</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 w-px h-full bg-white/10 hidden md:block" />
        <div className="space-y-20">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-10 md:gap-20 items-start ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right w-full">
                <div className={`flex flex-col ${idx % 2 !== 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
                  <span className="font-mono text-secondary text-xs font-bold tracking-widest mb-4 border border-secondary/20 px-3 py-1">{exp.period}</span>
                  <h4 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">{exp.company}</h4>
                  <p className="font-label text-[11px] text-on-surface-variant uppercase tracking-widest mb-3">{exp.meta}</p>
                  <div className="bg-primary/10 text-primary font-label text-[10px] px-4 py-1 uppercase tracking-[0.2em] font-bold border border-primary/20">{exp.role}</div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="bg-surface p-8 md:p-10 border border-white/10 hover:border-primary/30 transition-colors shadow-2xl">
                  <ul className="space-y-4 mb-8">
                    {exp.bullets.map((b) => (
                      <li key={b.slice(0, 24)} className="font-body text-[15px] md:text-base text-on-surface-variant leading-relaxed flex gap-3">
                        <span className="text-secondary mt-1">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">#{tag}</span>
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

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="relative">
    <div className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
      <div className="lg:w-7/12 relative group w-full">
        <div className="absolute -inset-3 bg-primary/10 -skew-x-3 group-hover:skew-x-0 transition-transform duration-700" />
        <div className="relative overflow-hidden border border-white/10 aspect-video">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
          />
        </div>
      </div>
      <div className="lg:w-5/12 w-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px bg-primary" />
          <span className="font-label text-primary text-[10px] uppercase tracking-[0.3em] font-bold">{project.milestone}</span>
        </div>
        <h4 className="font-headline text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight leading-tight">{project.title}</h4>
        <div className="border-y border-white/10 py-3 mb-6 flex items-center justify-between">
          <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">Key Result</span>
          <span className="font-mono text-secondary text-lg font-bold">{project.metric}</span>
        </div>
        {project.highlights && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights.map((m) => (
              <span key={m} className="border border-primary/30 bg-primary/5 px-3 py-1.5 font-label text-[10px] uppercase tracking-widest text-primary">{m}</span>
            ))}
          </div>
        )}
        <p className="font-body text-on-surface-variant leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="bg-surface-container-high text-white font-label text-[10px] px-3 py-1.5 border border-white/10 uppercase tracking-widest">{t}</span>
          ))}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-headline text-sm uppercase tracking-widest font-bold text-white hover:text-primary transition-colors border border-white/10 px-4 py-2">
            <Github size={16} /> View on GitHub <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section className="py-28 bg-surface overflow-hidden" id="projects">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <div className="mb-20">
        <span className="font-label text-secondary uppercase tracking-[0.5em] text-xs font-bold block mb-6">Case Studies</span>
        <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none">Deployments</h2>
        <p className="text-on-surface-variant mt-6 max-w-2xl">Merged best of both: CV flagships (llmog, MeshForge, DynaPrompt, Ava, VibeVoice) + proven Maika, Search, and Grading systems.</p>
      </div>
      <div className="mb-28">
        <div className="flex items-center gap-4 mb-14">
          <h3 className="font-serif text-2xl md:text-4xl font-light italic text-white/80">AI & LLM Systems</h3>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <div className="space-y-28">
          {AI_PROJECTS.map((p, idx) => <ProjectCard key={p.title} project={p} idx={idx} />)}
        </div>
      </div>
      <div>
        <div className="flex items-center gap-4 mb-14">
          <h3 className="font-serif text-2xl md:text-4xl font-light italic text-white/80">Infra & Automation</h3>
          <div className="flex-grow h-px bg-white/10" />
        </div>
        <div className="space-y-28">
          {INFRA_PROJECTS.map((p, idx) => <ProjectCard key={p.title} project={p} idx={idx} />)}
        </div>
      </div>
    </div>
  </section>
);

const OpenSource = () => (
  <section className="py-28 bg-surface-container-low relative overflow-hidden" id="opensource">
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <span className="font-label text-secondary uppercase tracking-[0.4em] text-xs font-bold block mb-4">Community Impact · Verifiable PRs</span>
      <h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-none mb-14">Open Source</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {OSS_ITEMS.map((item) => (
          <a key={item.name} href={item.link} target="_blank" rel="noreferrer" className="bg-surface p-8 md:p-10 border border-white/10 hover:border-secondary/40 transition-all group block">
            <div className="flex items-start justify-between mb-6">
              <Github className="text-secondary group-hover:scale-110 transition-transform" size={30} />
              <ArrowUpRight size={18} className="text-on-surface-variant group-hover:text-secondary transition-colors" />
            </div>
            <h4 className="font-headline text-xl font-bold mb-3 uppercase tracking-tight">{item.name}</h4>
            <p className="font-body text-on-surface-variant mb-6 leading-relaxed text-[15px]">{item.desc}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="font-label text-[9px] text-on-surface-variant uppercase tracking-widest border border-white/10 px-3 py-1">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const Education = () => (
  <section className="py-28 bg-surface relative overflow-hidden" id="education">
    <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="font-label text-primary uppercase tracking-[0.5em] text-xs font-bold">The Foundation</span>
          <h3 className="font-serif text-5xl md:text-6xl font-light mt-4 mb-12 tracking-tight leading-none">Academic<br /><span className="italic opacity-50">Foundation</span></h3>
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 shrink-0 bg-primary/5 flex items-center justify-center border border-primary/20">
              <GraduationCap size={24} />
            </div>
            <div>
              <h4 className="font-headline text-2xl font-bold uppercase tracking-tight">B.Sc. Computer Science & AI</h4>
              <p className="font-body text-lg text-on-surface-variant mt-2">Banha University · Faculty of Computers and AI · 2020–2024</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary font-label text-[10px] px-4 py-1 uppercase tracking-widest font-bold border border-primary/20">CGPA 3.5/4 · Very Good</span>
                <span className="bg-secondary/10 text-secondary font-label text-[10px] px-4 py-1 uppercase tracking-widest font-bold border border-secondary/20">Grad Project A+</span>
              </div>
            </div>
          </div>
          <div className="pt-10 mt-10 border-t border-white/10 space-y-6">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 bg-primary/5 flex items-center justify-center border border-primary/20"><Layout size={22} /></div>
              <div>
                <h4 className="font-headline text-lg font-bold uppercase">React Web Developer (DEPI)</h4>
                <p className="text-on-surface-variant text-sm mt-1">Ministry of Communications (MCIT) · May 2024 – Oct 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 shrink-0 bg-primary/5 flex items-center justify-center border border-primary/20"><Terminal size={22} /></div>
              <div>
                <h4 className="font-headline text-lg font-bold uppercase">Linux Administrator (70h)</h4>
                <p className="text-on-surface-variant text-sm mt-1">NTI · 2024</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:pt-24">
          <h4 className="font-headline text-xl font-bold flex items-center gap-3 uppercase tracking-tight mb-8">
            <Globe className="text-secondary" size={20} /> Linguistic Capability
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-surface-container-low p-6 border border-white/10">
              <span className="font-label text-xs uppercase text-secondary tracking-[0.3em] font-bold">Arabic</span>
              <span className="block text-[10px] text-on-surface-variant mt-2 uppercase tracking-widest font-bold">Native Proficiency</span>
            </div>
            <div className="bg-surface-container-low p-6 border border-white/10">
              <span className="font-label text-xs uppercase text-secondary tracking-[0.3em] font-bold">English</span>
              <span className="block text-[10px] text-on-surface-variant mt-2 uppercase tracking-widest font-bold">Professional Working</span>
            </div>
          </div>
          <h4 className="font-headline text-xl font-bold flex items-center gap-3 uppercase tracking-tight mb-8">
            <Award className="text-secondary" size={20} /> Certifications
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTS.map((c) => (
              <div key={c.name} className="bg-surface-container-low p-5 border border-white/10">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">{c.year}</span>
                <h5 className="font-headline text-[15px] font-bold leading-tight mt-2 mb-1">{c.name}</h5>
                <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">{c.issuer}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "recruiter"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard unavailable */ }
  };
  return (
    <section className="py-28 bg-surface-container-highest technical-gradient" id="contact">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <span className="font-label text-secondary uppercase tracking-[0.4em] text-sm block mb-6">Connect & Collaborate</span>
        <h2 className="font-serif text-4xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
          Let&apos;s build <span className="italic text-secondary">intelligent</span> systems together.
        </h2>
        <p className="text-on-surface-variant mb-10">Currently open to full-time AI Engineer roles and high-impact freelance. Avg. response &lt; 24h.</p>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-surface-container-low p-8 md:p-12 border border-white/10 text-left shadow-2xl">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b border-white/20 focus-within:border-secondary transition-colors py-3">
              <label htmlFor="cf-name" className="font-label text-[10px] uppercase text-on-surface-variant block tracking-widest">Your Name</label>
              <input id="cf-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-transparent border-none focus:ring-0 font-body p-0 mt-2 placeholder:text-white/20 text-white outline-none" placeholder="Ada Lovelace" type="text" />
            </div>
            <div className="border-b border-white/20 focus-within:border-secondary transition-colors py-3">
              <label htmlFor="cf-email" className="font-label text-[10px] uppercase text-on-surface-variant block tracking-widest">Email Address</label>
              <input id="cf-email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-transparent border-none focus:ring-0 font-body p-0 mt-2 placeholder:text-white/20 text-white outline-none" placeholder="ada@analytical.com" type="email" />
            </div>
            <div className="col-span-1 md:col-span-2 border-b border-white/20 focus-within:border-secondary transition-colors py-3">
              <label htmlFor="cf-msg" className="font-label text-[10px] uppercase text-on-surface-variant block tracking-widest">Project / Role Details</label>
              <textarea id="cf-msg" required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-transparent border-none focus:ring-0 font-body p-0 mt-2 placeholder:text-white/20 resize-none text-white outline-none" placeholder="Role, stack, timeline, and what success looks like..." rows={4} />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <button className="bg-primary text-on-primary font-headline font-bold px-8 py-3 hover:brightness-110 transition-all w-full sm:w-auto uppercase tracking-widest text-sm flex items-center justify-center gap-2" type="submit">
                Send via Email <ArrowRight size={18} />
              </button>
              <button type="button" onClick={copyEmail} className="border border-white/20 px-6 py-3 font-label text-xs uppercase tracking-widest flex items-center gap-2 hover:bg-white/5 transition-colors">
                {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? "Copied!" : CONTACT.email}
              </button>
            </div>
          </form>
        </motion.div>
        <div className="mt-14 flex justify-center flex-wrap gap-8">
          {[
            { name: "GitHub", icon: <Github size={20} />, url: CONTACT.github },
            { name: "LinkedIn", icon: <Linkedin size={20} />, url: CONTACT.linkedin },
            { name: "Kaggle", icon: <Layout size={20} />, url: CONTACT.kaggle },
            { name: "Email", icon: <Mail size={20} />, url: `mailto:${CONTACT.email}` },
          ].map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="font-label text-on-surface-variant hover:text-secondary transition-colors uppercase text-sm tracking-widest flex items-center gap-2">
              {s.icon} {s.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full border-t border-white/10 bg-surface text-on-surface-variant font-body">
    <div className="max-w-7xl mx-auto py-12 px-6 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-light text-white font-serif tracking-tight">Mohamed <span className="opacity-70">Emam</span></div>
        <div className="text-center text-xs uppercase tracking-widest font-label">
          © {new Date().getFullYear()} Mohamed Emam · Cairo, Egypt · Built with precision
        </div>
        <div className="flex items-center gap-5">
          <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} className="hover:text-primary transition-colors" /></a>
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} className="hover:text-primary transition-colors" /></a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email"><Mail size={20} className="hover:text-primary transition-colors" /></a>
          <a href={CV_PATH} download="Mohamed_Emam_CV.pdf" aria-label="Download CV"><Download size={20} className="hover:text-primary transition-colors" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-primary/30">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2">Skip to content</a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <OpenSource />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
