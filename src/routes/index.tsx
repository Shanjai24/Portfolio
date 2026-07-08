import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone,
  PawPrint, BatteryCharging, Users, FileSearch2,
  Terminal, Code2, Database, Sparkles, Sliders,
  Calendar, Play, Sun, Moon, ShieldAlert, Cpu, Check, X
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shanjai M R - Software Engineer" },
      { name: "description", content: "Portfolio of Shanjai M R, Software Engineer specializing in Full-Stack development and Applied AI. Coimbatore, India." },
      { property: "og:title", content: "Shanjai M R - Software Engineer" },
      { property: "og:description", content: "Software Engineer - Full-Stack & Applied AI. Shipped products, robust architecture." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* =========================================================
   CONTENT & DATA
   Unified projects showing SDE, AI, and Full-Stack facets
========================================================= */

const STANDARDS = [
  {
    n: "I",
    title: "Ship, then polish.",
    body: "A merged pull request beats a perfect branch. I build, gather telemetry, then optimize for speed and elegance - never in reverse.",
  },
  {
    n: "II",
    title: "Own the seams.",
    body: "The bugs live where a frontend meets an API meets a database schema. Writing the whole seam means nothing falls through it.",
  },
  {
    n: "III",
    title: "Earn every tool.",
    body: "No frameworks or libraries go on the resume unless they have survived a production deployment. The stack is short by choice.",
  },
  {
    n: "IV",
    title: "Read the code first.",
    body: "Before adding new lines, I read the existing context. Half of good engineering is avoiding duplicate implementations.",
  },
  {
    n: "V",
    title: "Boring is a feature.",
    body: "Production systems should be silent at 3 a.m. Clever code is a liability that gets dressed up as a badge of honor.",
  },
];

const NUMBERS = [
  { v: 350, suffix: "+", label: "DSA problems solved" },
  { v: 7, suffix: " mo", label: "internship in prod" },
  { v: 4, suffix: "", label: "complex apps built" },
  { v: 30, suffix: "%", label: "fewer production bugs" },
];

const PROJECTS = [
  {
    id: "wildlife",
    icon: PawPrint,
    name: "Wildlife Rescue Platform",
    year: "'26",
    period: "Jan - Mar 2026",
    tagline: "AI-assisted incident triage & rescue coordinator",
    description: "An end-to-end incident management platform built with React, Flask, and MySQL, with Gemini Vision integrated for automated species and injury identification.",
    facets: {
      sde: "Designed a modular incident-reporting pipeline with decoupled Flask microservices, ensuring core coordination logic remains functional even if the ML layers go offline.",
      ai: "Integrated Gemini Vision API for classification of injured animals from images and structured a Flask model for poaching-risk forecasting.",
      fullstack: "Implemented a responsive React dashboard, custom JWT role authentication, and normalized MySQL schemas tracking live rescue dispatchers."
    },
    stack: ["React", "Flask", "MySQL", "Gemini Vision", "scikit-learn"],
  },
  {
    id: "charge",
    icon: BatteryCharging,
    name: "ChargeIQ EV Diagnosis",
    year: "'26",
    period: "Tata Technologies InnoVent '27",
    tagline: "Agentic AI platform for EV battery health",
    description: "A dual-model EV diagnostics tool featuring a time-series model for battery anomaly forecasting and a LangChain RAG agent for service documentation.",
    facets: {
      sde: "Developed a parallel data-ingestion pipeline to handle NASA Battery dataset logs, processing and cleaning multi-variable time-series values.",
      ai: "Built a LangChain agent using retrieval-augmented generation (RAG) to cross-reference battery diagnostic codes with structural technical sheets.",
      fullstack: "Constructed an interactive web portal for diagnostics reporting, displaying battery degradation telemetry and exporting secure PDF passports."
    },
    stack: ["LangChain", "RAG", "Gemini API", "NASA Battery Dataset", "React"],
  },
  {
    id: "job",
    icon: FileSearch2,
    name: "AI Job Role Predictor",
    year: "'25",
    period: "Jan - Mar 2025",
    tagline: "Semantic resume-to-role matching engine",
    description: "A semantic candidate screening tool parsing PDF resumes and scoring them against complex job definitions with full match explanation.",
    facets: {
      sde: "Created a high-throughput parsing pipeline using FastAPI and PyPDF2, processing multi-format files synchronously with JWT access controls.",
      ai: "Implemented a dual-scoring NLP pipeline matching token weights and semantic overlap, explaining which features led to candidate ranks.",
      fullstack: "Designed a recruiter pipeline interface with React, offering drag-and-drop uploads, scoring lists, and live feedback panels."
    },
    stack: ["React", "FastAPI", "MySQL", "Python", "NLP"],
  },
  {
    id: "meets",
    icon: Users,
    name: "BIT-Meets Scheduler",
    year: "'25",
    period: "Feb - Mar 2025",
    tagline: "College scheduler & real-time attendance system",
    description: "An automated academic meeting scheduling system using Node.js, Express, and React, resolving time conflicts and logging attendance.",
    facets: {
      sde: "Engineered a rules-based constraint engine handling room allocations, preventing booking conflicts, and scheduling cron jobs for reminders.",
      ai: "Integrated automated rules scoring to rank and suggest optimal meeting slots based on attendee availability models.",
      fullstack: "Developed an MVC architecture using Express and Sequelize, complete with a clean calendar dashboard, real-time feedback, and automated emails."
    },
    stack: ["React", "Node.js", "Express", "Sequelize", "Material UI"],
  },
];

const EXPERIENCE = {
  role: "Full-Stack Development Intern",
  org: "Crayon'd",
  period: "Sep 2024 - Apr 2025",
  place: "Chennai, IN",
  notes: [
    "Shipped 10+ React.js + Tailwind components for the Verdia dashboard, backed by Node.js / Express APIs and MySQL - +30% engagement.",
    "Cut data-retrieval latency 20% via optimized REST integration and considered state management.",
    "Eliminated 30% of critical production bugs through systematic debugging and root-cause work.",
    "Ran the full Agile cycle for seven months at a 95% sprint completion rate.",
  ],
};

const EDUCATION = [
  { school: "Bannari Amman Institute of Technology", detail: "B.Tech, Information Technology - CGPA 7.85", date: "2023 - 2027" },
  { school: "K.G. Matric Hr. Sec. School", detail: "HSC, Computer Science - 90.67%", date: "2022 - 2023" },
];

const CERTS = [
  { name: "OCI AI Foundations Associate", date: "Passed - Jun 2026", status: "done" as const },
  { name: "Microsoft Azure AI-900", date: "In progress - target Oct 2026", status: "wip" as const },
  { name: "NPTEL Cloud Computing", date: "Completed", status: "done" as const },
  { name: "HackerRank JavaScript", date: "Completed", status: "done" as const },
];

// Color-coded skills categorization
const SKILLS_CATEGORIES = {
  sde: {
    label: "CS & Systems (SDE)",
    color: "#E05A47",
    skills: ["Java", "C++", "DSA", "OOP", "SQL", "MySQL", "PostgreSQL", "Git", "GitHub", "System Design", "Linux", "Docker", "Agile"]
  },
  ai: {
    label: "Applied AI & Data",
    color: "#E5A93B",
    skills: ["Python", "Gemini API", "LangChain", "RAG", "scikit-learn", "NLP", "Pandas", "NumPy"]
  },
  fullstack: {
    label: "Frontend & Product",
    color: "#8E9A68",
    skills: ["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind", "Redux", "Vite", "Node.js", "Express", "FastAPI", "Flask", "REST", "MongoDB", "Sequelize", "JWT", "OAuth 2.0", "Figma"]
  }
};

const ALL_SKILLS = [
  ...SKILLS_CATEGORIES.sde.skills,
  ...SKILLS_CATEGORIES.ai.skills,
  ...SKILLS_CATEGORIES.fullstack.skills
];

/* =========================================================
   ANIMATION PRIMITIVES
========================================================= */

function LineReveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <span ref={ref} className={className} style={{ display: "block", overflow: "hidden", paddingBottom: "0.12em" }}>
      <span style={{
        display: "inline-block",
        transform: shown ? "translateY(0)" : "translateY(105%)",
        transition: `transform 1.05s cubic-bezier(.2,.7,.15,1) ${delay}ms`,
      }}>{children}</span>
    </span>
  );
}

function Rise({ children, delay = 0, y = 18, className, style }: { children: ReactNode; delay?: number; y?: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity .9s ease ${delay}ms, transform .9s cubic-bezier(.2,.7,.15,1) ${delay}ms`,
    }}>{children}</div>
  );
}

function Rule({ delay = 0, color = "var(--rule)" }: { delay?: number; color?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ position: "relative", height: 1, background: "transparent", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, background: color,
        transformOrigin: "left center",
        transform: `scaleX(${on ? 1 : 0})`,
        transition: `transform 1.1s cubic-bezier(.7,.02,.15,1) ${delay}ms`,
      }} />
    </div>
  );
}

function CountUp({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

function Magnetic({ children, strength = 0.25, className, style }: { children: ReactNode; strength?: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * strength;
    const y = (e.clientY - (r.top + r.height / 2)) * strength;
    setT({ x, y });
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      className={className}
      style={{
        ...style,
        display: "inline-block",
        transform: `translate(${t.x}px, ${t.y}px)`,
        transition: "transform .4s cubic-bezier(.2,.7,.15,1)",
      }}
    >{children}</div>
  );
}

function CustomCursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: -100, y: -100 });
  const rpos = useRef({ x: -100, y: -100 });
  const scale = useRef(1);
  const target = useRef(1);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      const t = e.target as HTMLElement;
      target.current = t.closest("a,button,[data-hover]") ? 2.6 : 1;
    };
    window.addEventListener("mousemove", move);

    let raf = 0;
    const loop = () => {
      rpos.current.x += (pos.current.x - rpos.current.x) * 0.18;
      rpos.current.y += (pos.current.y - rpos.current.y) * 0.18;
      scale.current += (target.current - scale.current) * 0.15;
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${rpos.current.x}px, ${rpos.current.y}px) translate(-50%, -50%) scale(${scale.current})`;
        ring.current.style.opacity = scale.current > 1.5 ? "1" : "0.55";
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} style={{
        position: "fixed", top: 0, left: 0, width: 20, height: 20, borderRadius: "50%",
        border: "1px solid var(--ink)", pointerEvents: "none", zIndex: 9999,
        mixBlendMode: "difference", transition: "opacity .3s",
      }} />
      <div ref={dot} style={{
        position: "fixed", top: 0, left: 0, width: 6, height: 6, borderRadius: "50%",
        background: "var(--accent)", pointerEvents: "none", zIndex: 9999,
      }} />
    </>
  );
}

function ScrollLine() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: "transparent", zIndex: 100 }}>
      <div style={{ height: "100%", width: `${p * 100}%`, background: "var(--accent)", transition: "width .1s linear" }} />
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

// Interactive SVG Radar Chart visualizing SDE, AI, Full-Stack balances
function InteractiveRadar({ activeAxis, setActiveAxis }: { activeAxis: string; setActiveAxis: (axis: string) => void }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<SVGSVGElement | null>(null);
  const isDragging = useRef(false);

  const vertices = {
    sde: { x: 0, y: -65, label: "Systems & SDE" },
    ai: { x: 56, y: 33, label: "Applied AI" },
    fullstack: { x: -56, y: 33, label: "Full-Stack" }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    updateCoords(e);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updateCoords(e);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const updateCoords = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const rawX = ((e.clientX - rect.left) / width) * 200 - 100;
    const rawY = ((e.clientY - rect.top) / height) * 200 - 100;

    const dist = Math.sqrt(rawX * rawX + rawY * rawY);
    let targetX = rawX;
    let targetY = rawY;
    if (dist > 70) {
      targetX = (rawX / dist) * 70;
      targetY = (rawY / dist) * 70;
    }

    setCoords({ x: targetX, y: targetY });

    const distToSde = Math.hypot(targetX - vertices.sde.x, targetY - vertices.sde.y);
    const distToAi = Math.hypot(targetX - vertices.ai.x, targetY - vertices.ai.y);
    const distToFs = Math.hypot(targetX - vertices.fullstack.x, targetY - vertices.fullstack.y);

    const min = Math.min(distToSde, distToAi, distToFs);
    if (Math.hypot(targetX, targetY) < 15) {
      setActiveAxis("balanced");
    } else if (min === distToSde) {
      setActiveAxis("sde");
    } else if (min === distToAi) {
      setActiveAxis("ai");
    } else {
      setActiveAxis("fullstack");
    }
  };

  const values = useMemo(() => {
    const sdePct = Math.max(0, Math.min(100, Math.round(50 - coords.y * 0.7 + (activeAxis === 'sde' ? 10 : 0))));
    const aiPct = Math.max(0, Math.min(100, Math.round(25 + coords.y * 0.35 + coords.x * 0.6 + (activeAxis === 'ai' ? 10 : 0))));
    const fsPct = Math.max(0, Math.min(100, Math.round(25 + coords.y * 0.35 - coords.x * 0.6 + (activeAxis === 'fullstack' ? 10 : 0))));
    
    const total = sdePct + aiPct + fsPct || 1;
    return {
      sde: Math.round((sdePct / total) * 100),
      ai: Math.round((aiPct / total) * 100),
      fs: Math.round((fsPct / total) * 100),
    };
  }, [coords, activeAxis]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      <div style={{ position: "relative", width: 240, height: 240 }}>
        <svg
          ref={containerRef}
          viewBox="-100 -100 200 200"
          style={{ width: "100%", height: "100%", overflow: "visible", cursor: "crosshair" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <polygon points="0,-65 56,33 -56,33" fill="var(--rule)" fillOpacity="0.05" stroke="var(--ink)" strokeWidth="1" strokeOpacity="0.15" />
          <polygon points="0,-43 37,22 -37,22" fill="none" stroke="var(--ink)" strokeWidth="0.8" strokeOpacity="0.1" strokeDasharray="2 3" />
          <polygon points="0,-21 18,11 -18,11" fill="none" stroke="var(--ink)" strokeWidth="0.8" strokeOpacity="0.1" strokeDasharray="1 2" />

          <line x1="0" y1="0" x2="0" y2="-65" stroke="var(--ink)" strokeWidth="0.8" strokeOpacity="0.15" />
          <line x1="0" y1="0" x2="56" y2="33" stroke="var(--ink)" strokeWidth="0.8" strokeOpacity="0.15" />
          <line x1="0" y1="0" x2="-56" y2="33" stroke="var(--ink)" strokeWidth="0.8" strokeOpacity="0.15" />

          <polygon
            points={`0,${-65 * (values.sde/100)} ${56 * (values.ai/100)},${33 * (values.ai/100)} ${-56 * (values.fs/100)},${33 * (values.fs/100)}`}
            fill="var(--accent)"
            fillOpacity="0.18"
            stroke="var(--accent)"
            strokeWidth="1.5"
            style={{ transition: "all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)" }}
          />

          {Object.entries(vertices).map(([key, node]) => {
            const isSel = activeAxis === key;
            const markerColor = key === 'sde' ? SKILLS_CATEGORIES.sde.color : key === 'ai' ? SKILLS_CATEGORIES.ai.color : SKILLS_CATEGORIES.fullstack.color;
            return (
              <g key={key}>
                <circle cx={node.x} cy={node.y} r={isSel ? 7 : 4} fill={isSel ? markerColor : "var(--ink)"} style={{ transition: "all 0.25s" }} />
                <text
                  x={node.x * 1.25}
                  y={node.y * 1.25 + (key === 'sde' ? -4 : 4)}
                  textAnchor="middle"
                  className="mono"
                  style={{
                    fontSize: 8.5,
                    fontWeight: isSel ? "bold" : "normal",
                    fill: isSel ? markerColor : "var(--muted)",
                    transition: "fill 0.25s",
                    letterSpacing: 0.5
                  }}
                >
                  {node.label.toUpperCase()}
                </text>
              </g>
            );
          })}

          <g transform={`translate(${coords.x}, ${coords.y})`}>
            <circle r="14" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle r="6" fill="var(--bg)" stroke="var(--accent)" strokeWidth="2.5" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }} />
          </g>
        </svg>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, width: "100%", maxWidth: 280, textAlign: "center" }}>
        <div style={{ borderRight: "1px solid var(--rule)" }}>
          <div className="serif" style={{ fontSize: 18, fontWeight: 600, color: activeAxis === "sde" ? SKILLS_CATEGORIES.sde.color : "inherit" }}>{values.sde}%</div>
          <div className="mono" style={{ fontSize: 9, letterSpacing: 0.5, color: "var(--muted)" }}>SDE CORE</div>
        </div>
        <div style={{ borderRight: "1px solid var(--rule)" }}>
          <div className="serif" style={{ fontSize: 18, fontWeight: 600, color: activeAxis === "ai" ? SKILLS_CATEGORIES.ai.color : "inherit" }}>{values.ai}%</div>
          <div className="mono" style={{ fontSize: 9, letterSpacing: 0.5, color: "var(--muted)" }}>APPLIED AI</div>
        </div>
        <div>
          <div className="serif" style={{ fontSize: 18, fontWeight: 600, color: activeAxis === "fullstack" ? SKILLS_CATEGORIES.fullstack.color : "inherit" }}>{values.fs}%</div>
          <div className="mono" style={{ fontSize: 9, letterSpacing: 0.5, color: "var(--muted)" }}>FULL-STACK</div>
        </div>
      </div>
      <div className="mono" style={{ fontSize: 10, color: "var(--muted)", fontStyle: "italic" }}>
        Drag the target to adjust your focus
      </div>
    </div>
  );
}

// Draggable Interactive CLI Terminal widget
interface HistoryItem {
  cmd: string;
  res: ReactNode;
}
function TerminalConsole() {
  const [history, setHistory] = useState<HistoryItem[]>([
    { cmd: "help", res: "Available commands: about, skills, projects, contact, matrix, clear" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [matrixActive, setMatrixActive] = useState(false);
  const termBodyRef = useRef<HTMLDivElement | null>(null);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let response: ReactNode = "";
    if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      setMatrixActive(false);
      return;
    } else if (cleanCmd === "matrix") {
      setMatrixActive(true);
      response = "Digital rain simulated. Type 'clear' or command to reset.";
    } else if (cleanCmd === "help") {
      response = "Available commands: about, skills, projects, contact, matrix, clear";
      setMatrixActive(false);
    } else if (cleanCmd === "about") {
      response = (
        <div>
          Shanjai M R - Software Engineer specializing in Full-Stack and Applied AI.<br/>
          Location: Coimbatore, India<br/>
          Focus: Decoupled reliable architectures, practical AI models, and clean user experience.
        </div>
      );
      setMatrixActive(false);
    } else if (cleanCmd === "skills") {
      response = (
        <div style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 10 }}>
          <span style={{ color: "var(--accent)" }}>[SDE]</span>
          <span>Java, C++, DSA, OOP, Systems, MySQL, PostgreSQL, Git</span>
          <span style={{ color: "var(--olive)" }}>[AI/ML]</span>
          <span>Python, Gemini API, LangChain, RAG, scikit-learn, NLP</span>
          <span style={{ color: "var(--muted)" }}>[FullStack]</span>
          <span>React, Next.js, TypeScript, Node.js, FastAPI, Flask, REST</span>
        </div>
      );
      setMatrixActive(false);
    } else if (cleanCmd === "projects") {
      response = (
        <div>
          - Wildlife Rescue: Triage coordinator with Gemini Vision.<br/>
          - ChargeIQ EV: Diagnostics tool using LangChain and RAG.<br/>
          - AI Job Predictor: Screening engine using FastAPI.<br/>
          - BIT-Meets: MVC Express scheduler.
        </div>
      );
      setMatrixActive(false);
    } else if (cleanCmd === "contact") {
      response = "Email: shanjaimr245@gmail.com | Github: @Shanjai24";
      setMatrixActive(false);
    } else {
      response = `Command not recognized: '${cleanCmd}'. Type 'help' for options.`;
    }

    setHistory((prev) => [...prev, { cmd: input, res: response }]);
    setInput("");
  };

  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [history, matrixActive]);

  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    if ((e.target as HTMLElement).closest(".term-controls") || (e.target as HTMLElement).closest("input")) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    setPos({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  if (!isOpen) return (
    <button
      onClick={() => setIsOpen(true)}
      style={{
        position: "fixed", bottom: 30, right: 30, zIndex: 1000,
        background: "var(--ink)", color: "var(--bg)", border: "none",
        width: 50, height: 50, borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)", cursor: "pointer"
      }}
    >
      <Terminal size={22} />
    </button>
  );

  return (
    <div
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{
        position: "relative",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        width: "100%",
        maxWidth: 420,
        background: "rgba(10, 9, 8, 0.95)",
        border: "1px solid var(--rule)",
        borderRadius: 8,
        color: "#1dfb1d",
        overflow: "hidden",
        boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
        zIndex: 50,
      }}
    >
      <div
        onPointerDown={onPointerDown}
        style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "8px 12px", borderBottom: "1px solid rgba(255,255,255,0.1)",
          background: "rgba(30, 30, 30, 0.5)", cursor: "move", userSelect: "none"
        }}
      >
        <div style={{ display: "flex", gap: 6 }} className="term-controls">
          <button onClick={() => setIsOpen(false)} style={{ border: "none", background: "#ff5f56", width: 10, height: 10, borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}><X size={6} style={{ color: "transparent" }} /></button>
          <button onClick={() => setPos({ x: 0, y: 0 })} style={{ border: "none", background: "#ffbd2e", width: 10, height: 10, borderRadius: "50%", cursor: "pointer" }} />
          <button style={{ border: "none", background: "#27c93f", width: 10, height: 10, borderRadius: "50%" }} />
        </div>
        <div className="mono" style={{ fontSize: 9.5, color: "var(--muted)", letterSpacing: 0.8 }}>shanjai@terminal: ~</div>
        <Terminal size={12} style={{ color: "var(--muted)" }} />
      </div>

      <div
        ref={termBodyRef}
        className="mono"
        style={{
          padding: 16, height: 230, overflowY: "auto", fontSize: 11,
          lineHeight: 1.5, position: "relative"
        }}
      >
        {matrixActive && (
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.15, overflow: "hidden", color: "#1dfb1d" }}>
            {Array(10).fill(0).map((_, i) => (
              <div
                key={i}
                className="matrix-rain"
                style={{
                  position: "absolute", top: -200, left: `${i * 10}%`,
                  animation: `matrixFall ${2 + Math.random() * 3}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                  whiteSpace: "pre-line"
                }}
              >
                {Array(15).fill(0).map(() => String.fromCharCode(33 + Math.floor(Math.random() * 93))).join("\n")}
              </div>
            ))}
          </div>
        )}

        <div>shanjai_os v1.0.4 - Initialized successfully.</div>
        <div>Type 'help' to begin.</div>

        {history.map((h, idx) => (
          <div key={idx} style={{ marginTop: 8 }}>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ color: "var(--muted)" }}>$</span>
              <span>{h.cmd}</span>
            </div>
            <div style={{ marginTop: 2, color: "#fff", opacity: 0.9 }}>{h.res}</div>
          </div>
        ))}

        <form onSubmit={handleCommand} style={{ display: "flex", gap: 6, marginTop: 10 }}>
          <span style={{ color: "var(--accent)" }}>$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1, background: "transparent", border: "none",
              outline: "none", color: "#1dfb1d", fontSize: 11
            }}
            className="mono"
            autoFocus
            placeholder="Type command..."
          />
        </form>
      </div>
    </div>
  );
}

// Interactive Project Bento Cards & Mini Playgrounds
interface ProjectItem {
  id: string;
  name: string;
  year: string;
  period: string;
  tagline: string;
  description: string;
  facets: { sde: string; ai: string; fullstack: string };
  stack: string[];
  icon: any;
}
function BentoProjectCard({ project, index, activeAxis }: { project: ProjectItem; index: number; activeAxis: string }) {
  const [subTab, setSubTab] = useState<"sde" | "ai" | "fullstack">("sde");
  const Icon = project.icon;

  useEffect(() => {
    if (activeAxis === "sde" || activeAxis === "ai" || activeAxis === "fullstack") {
      setSubTab(activeAxis);
    }
  }, [activeAxis]);

  const [evSoh, setEvSoh] = useState(90);
  const [evTemp, setEvTemp] = useState(25);
  const [wildlifeSample, setWildlifeSample] = useState<number | null>(null);
  const [wildlifeStatus, setWildlifeStatus] = useState<"idle" | "running" | "done">("idle");
  const [jobSelect, setJobSelect] = useState("fs");
  const [jobScore, setJobScore] = useState<number | null>(null);
  const [jobKeywords, setJobKeywords] = useState<string[]>([]);
  const [bookedSlots, setBookedSlots] = useState<number[]>([]);
  const [conflictWarning, setConflictWarning] = useState<string | null>(null);

  const simulatedEvRange = useMemo(() => {
    const base = 320;
    const sohFact = evSoh / 100;
    const tempFact = 1 - Math.abs(evTemp - 25) * 0.005;
    return Math.round(base * sohFact * tempFact);
  }, [evSoh, evTemp]);

  const wildlifeDetails = [
    { name: "Injured Deer (Fawn)", desc: "Slight limp reported near boundary line.", species: "Cervus elaphus", issue: "Splint Fracture", triage: "URGENT", status: "Critical" },
    { name: "Stray Golden Eagle", desc: "Found grounded near fields, wing drooping.", species: "Aquila chrysaetos", issue: "Lead Poisoning / Wing Sprain", triage: "CRITICAL", status: "Immediate Dispatch" },
    { name: "Sea Turtle Nest", desc: "Erosion exposing eggs near coastal road.", species: "Cheloniidae", issue: "Nesting Hazard", triage: "MODERATE", status: "Scheduled Transfer" },
  ];

  const handleWildlifeAnalyze = (idx: number) => {
    setWildlifeSample(idx);
    setWildlifeStatus("running");
    setTimeout(() => {
      setWildlifeStatus("done");
    }, 1200);
  };

  const handleResumeMatch = () => {
    setJobScore(null);
    let baseScore = 65 + Math.floor(Math.random() * 25);
    let kw: string[] = [];
    if (jobSelect === "fs") {
      kw = ["React.js", "TypeScript", "Node.js", "Express", "REST"];
    } else if (jobSelect === "ai") {
      kw = ["Python", "LangChain", "RAG", "Gemini API", "scikit-learn"];
    } else {
      kw = ["Java", "C++", "DSA", "SQL", "System Design"];
    }
    setJobKeywords(kw);
    setJobScore(baseScore);
  };

  const scheduleMeeting = (slotIdx: number) => {
    setConflictWarning(null);
    if (slotIdx === 2) {
      setConflictWarning("Constraint Engine Conflict: Room 302 booked by AI-Lab during this hour. Smart auto-shifted to virtual Zoom link.");
    }
    if (bookedSlots.includes(slotIdx)) {
      setBookedSlots(bookedSlots.filter(s => s !== slotIdx));
    } else {
      setBookedSlots([...bookedSlots, slotIdx]);
    }
  };

  const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM (Lab Conflict Slot)", "04:30 PM"];

  // Safeguard color resolution since compiler parses Object keys dynamically
  const getAccentColor = (tab: "sde" | "ai" | "fullstack") => {
    if (tab === "sde") return "#E05A47";
    if (tab === "ai") return "#E5A93B";
    return "#8E9A68";
  };

  return (
    <Rise delay={index * 120}>
      <div
        className="project-bento-card"
        style={{
          background: "var(--card-bg)",
          border: `1px solid var(--card-border)`,
          borderRadius: 16,
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 20,
          position: "relative",
          height: "100%",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon size={18} strokeWidth={2} style={{ color: "var(--accent)" }} />
              <span className="mono" style={{ fontSize: 11, letterSpacing: 1.5, color: "var(--muted)", textTransform: "uppercase" }}>{project.period}</span>
            </div>
            <h3 className="serif" style={{ fontSize: 24, fontWeight: 500, margin: "6px 0 2px" }}>{project.name}</h3>
            <div className="mono" style={{ fontSize: 10, color: "var(--muted)", letterSpacing: 0.5 }}>{project.tagline}</div>
          </div>
          <span className="serif" style={{ fontSize: 26, fontStyle: "italic", opacity: 0.3 }}>{project.year}</span>
        </div>

        <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)", opacity: 0.85 }}>{project.description}</p>

        <div>
          <div style={{ display: "flex", background: "rgba(0,0,0,0.04)", padding: 3, borderRadius: 8, marginBottom: 12 }}>
            {(["sde", "ai", "fullstack"] as const).map((tab) => {
              const isActive = subTab === tab;
              const accentColor = getAccentColor(tab);
              return (
                <button
                  key={tab}
                  onClick={() => setSubTab(tab)}
                  className="mono"
                  style={{
                    flex: 1,
                    border: "none",
                    background: isActive ? "var(--bg)" : "transparent",
                    color: isActive ? accentColor : "var(--muted)",
                    fontSize: 10.5,
                    padding: "6px 2px",
                    borderRadius: 6,
                    cursor: "pointer",
                    fontWeight: isActive ? "bold" : "normal",
                    transition: "all 0.25s",
                  }}
                >
                  {tab === "sde" ? "SDE CORE" : tab === "ai" ? "APPLIED AI" : "FULL-STACK"}
                </button>
              );
            })}
          </div>
          <div style={{ minHeight: 65, fontSize: 13.5, lineHeight: 1.6, color: "var(--ink)" }}>
            <span style={{
              display: "inline-block",
              width: 6, height: 6,
              borderRadius: "50%",
              marginRight: 8,
              background: getAccentColor(subTab)
            }} />
            {project.facets[subTab]}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.stack.map((s) => (
            <span key={s} className="mono" style={{ fontSize: 9.5, padding: "3px 8px", background: "rgba(0,0,0,0.03)", border: "1px solid var(--rule)", borderRadius: 999, color: "var(--muted)" }}>{s}</span>
          ))}
        </div>

        <div
          style={{
            marginTop: "auto",
            padding: 16,
            background: "rgba(255,255,255,0.03)",
            border: "1px dashed var(--rule)",
            borderRadius: 10,
            fontSize: 12
          }}
        >
          <div className="mono" style={{ fontSize: 9.5, color: "var(--accent)", letterSpacing: 0.8, display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
            <Sparkles size={11} /> LIVE PLAYGROUND WIDGET
          </div>

          {project.id === "wildlife" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", gap: 8 }}>
                {wildlifeDetails.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleWildlifeAnalyze(idx)}
                    style={{
                      flex: 1, padding: "8px 4px", fontSize: 10,
                      border: `1px solid ${wildlifeSample === idx ? "var(--accent)" : "var(--rule)"}`,
                      background: wildlifeSample === idx ? "var(--bg)" : "rgba(0,0,0,0.02)",
                      borderRadius: 6, cursor: "pointer", color: "var(--ink)", transition: "all 0.2s"
                    }}
                  >
                    Sample #${idx + 1}
                  </button>
                ))}
              </div>
              {wildlifeSample !== null && (
                <div style={{ padding: 8, background: "rgba(0,0,0,0.02)", borderRadius: 6, minHeight: 62 }}>
                  {wildlifeStatus === "running" ? (
                    <div className="mono" style={{ fontSize: 10, display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", justifyContent: "center", paddingTop: 14 }}>
                      <span className="spinning-symbol">\u25e1</span> Orchestrating Gemini API Classifier...
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span className="serif" style={{ fontSize: 13, fontWeight: 600 }}>{wildlifeDetails[wildlifeSample].name}</span>
                        <span className="mono" style={{ fontSize: 9, color: "var(--accent)", fontWeight: "bold" }}>{wildlifeDetails[wildlifeSample].triage}</span>
                      </div>
                      <div className="mono" style={{ fontSize: 9.5, color: "var(--muted)", marginTop: 2 }}>
                        Model output: {wildlifeDetails[wildlifeSample].species} ({wildlifeDetails[wildlifeSample].issue})
                      </div>
                      <div className="mono" style={{ fontSize: 9, color: "var(--olive)", marginTop: 4 }}>
                        ↳ Dispatcher node: {wildlifeDetails[wildlifeSample].status} logged to MySQL.
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {project.id === "charge" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }} className="mono">
                    <span>SoH:</span>
                    <span style={{ fontWeight: "bold" }}>{evSoh}%</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    value={evSoh}
                    onChange={(e) => setEvSoh(Number(e.target.value))}
                    style={{ width: "100%", height: 3, accentColor: "var(--accent)" }}
                  />
                </div>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }} className="mono">
                    <span>Ambient:</span>
                    <span style={{ fontWeight: "bold" }}>{evTemp}°C</span>
                  </div>
                  <input
                    type="range"
                    min="-10"
                    max="45"
                    value={evTemp}
                    onChange={(e) => setEvTemp(Number(e.target.value))}
                    style={{ width: "100%", height: 3, accentColor: "var(--accent)" }}
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,0,0,0.02)", padding: "6px 12px", borderRadius: 6 }}>
                <span className="mono" style={{ fontSize: 10 }}>PREDICTED RANGE:</span>
                <span className="serif font-bold" style={{ fontSize: 16, color: "var(--accent)" }}>{simulatedEvRange} miles</span>
              </div>
            </div>
          )}

          {project.id === "job" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", gap: 8 }}>
                <select
                  value={jobSelect}
                  onChange={(e) => { setJobSelect(e.target.value); setJobScore(null); }}
                  className="mono"
                  style={{
                    flex: 1, padding: 6, fontSize: 10.5, border: "1px solid var(--rule)",
                    background: "var(--bg)", borderRadius: 6, color: "var(--ink)", outline: "none"
                  }}
                >
                  <option value="fs">Full-Stack dev JD</option>
                  <option value="ai">Applied AI developer JD</option>
                  <option value="sde">Core Systems Engineer JD</option>
                </select>
                <button
                  onClick={handleResumeMatch}
                  className="mono"
                  style={{
                    padding: "6px 12px", fontSize: 10.5, background: "var(--ink)",
                    color: "var(--bg)", border: "none", borderRadius: 6, cursor: "pointer"
                  }}
                >
                  Parse Resume
                </button>
              </div>
              {jobScore !== null && (
                <div style={{ padding: 8, background: "rgba(0,0,0,0.02)", borderRadius: 6 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span className="mono" style={{ fontSize: 10 }}>NLP Match Score:</span>
                    <span className="serif" style={{ fontSize: 15, fontWeight: "bold", color: "var(--accent)" }}>{jobScore}%</span>
                  </div>
                  <div className="mono" style={{ fontSize: 9, color: "var(--muted)", marginTop: 4, display: "flex", flexWrap: "wrap", gap: 4 }}>
                    <span>Matched keys:</span>
                    {jobKeywords.map((k) => (
                      <span key={k} style={{ color: "var(--olive)" }}>{k}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {project.id === "meets" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6 }}>
                {timeSlots.map((slot, idx) => {
                  const isBooked = bookedSlots.includes(idx);
                  return (
                    <button
                      key={idx}
                      onClick={() => scheduleMeeting(idx)}
                      style={{
                        padding: 6, fontSize: 9.5,
                        background: isBooked ? "var(--accent)" : "rgba(0,0,0,0.02)",
                        color: isBooked ? "var(--bg)" : "var(--ink)",
                        border: `1px solid ${isBooked ? "var(--accent)" : "var(--rule)"}`,
                        borderRadius: 6, cursor: "pointer", transition: "all 0.2s"
                      }}
                      className="mono"
                    >
                      {idx === 2 ? "02:00 PM (Conflict)" : slot} {isBooked ? "✓" : ""}
                    </button>
                  );
                })}
              </div>
              {conflictWarning && (
                <div style={{ display: "flex", gap: 6, padding: 6, background: "rgba(224, 90, 71, 0.05)", border: "1px solid rgba(224, 90, 71, 0.15)", borderRadius: 6, color: "var(--accent)" }}>
                  <ShieldAlert size={12} style={{ flexShrink: 0, marginTop: 1 }} />
                  <div className="mono" style={{ fontSize: 8.5, lineHeight: 1.3 }}>{conflictWarning}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Rise>
  );
}

/* =========================================================
   3D CONSTELLATION SKILL SPHERE
========================================================= */

function Constellation({ activeAxis }: { activeAxis: string }) {
  const box = useRef<HTMLDivElement | null>(null);
  const rot = useRef({ x: -0.15, y: 0, vx: 0.0006, vy: 0.0022 });
  const drag = useRef({ active: false, lx: 0, ly: 0 });
  const [, tick] = useState(0);
  const [hov, setHov] = useState<string | null>(null);
  const R = 175;

  const pts = useMemo(() => {
    const n = ALL_SKILLS.length;
    const phi = Math.PI * (Math.sqrt(5) - 1);
    return ALL_SKILLS.map((s, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const th = phi * i;
      return { x: Math.cos(th) * r, y, z: Math.sin(th) * r, name: s };
    });
  }, []);

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      if (!drag.current.active) {
        rot.current.x += rot.current.vx;
        rot.current.y += rot.current.vy;
      }
      tick((n) => (n + 1) % 1e9);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = box.current; if (!el) return;
    const down = (e: PointerEvent) => {
      drag.current.active = true; drag.current.lx = e.clientX; drag.current.ly = e.clientY;
      el.setPointerCapture(e.pointerId);
    };
    const move = (e: PointerEvent) => {
      if (!drag.current.active) return;
      const dx = e.clientX - drag.current.lx;
      const dy = e.clientY - drag.current.ly;
      drag.current.lx = e.clientX; drag.current.ly = e.clientY;
      rot.current.y += dx * 0.005;
      rot.current.x += dy * 0.005;
      rot.current.vy = dx * 0.0004;
      rot.current.vx = dy * 0.0004;
    };
    const up = (e: PointerEvent) => {
      drag.current.active = false;
      try { el.releasePointerCapture(e.pointerId); } catch { /* noop */ }
      if (Math.abs(rot.current.vy) < 0.0008) rot.current.vy = 0.0022;
    };
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  const cx = Math.cos(rot.current.x), sx = Math.sin(rot.current.x);
  const cy = Math.cos(rot.current.y), sy = Math.sin(rot.current.y);

  const rendered = pts.map((p, i) => {
    let x = p.x * cy + p.z * sy;
    let z = -p.x * sy + p.z * cy;
    let y = p.y * cx - z * sx;
    z = p.y * sx + z * cx;
    const depth = (z + 1) / 2;
    return { i, x: x * R, y: y * R, depth, name: p.name };
  }).sort((a, b) => a.depth - b.depth);

  const getSkillCategory = (name: string) => {
    if (SKILLS_CATEGORIES.sde.skills.includes(name)) return "sde";
    if (SKILLS_CATEGORIES.ai.skills.includes(name)) return "ai";
    return "fullstack";
  };

  const getCategoryColor = (cat: string) => {
    if (cat === "sde") return "#E05A47";
    if (cat === "ai") return "#E5A93B";
    return "#8E9A68";
  };

  return (
    <div
      ref={box}
      data-hover
      style={{
        position: "relative", width: "100%", maxWidth: 440,
        aspectRatio: "1 / 1", margin: "0 auto",
        touchAction: "none", userSelect: "none",
        cursor: drag.current.active ? "grabbing" : "grab",
      }}
    >
      <svg viewBox="-200 -200 400 400" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
        <ellipse cx="0" cy="0" rx="180" ry="180" fill="none" stroke="var(--ink)" strokeOpacity="0.05" />
        <ellipse cx="0" cy="0" rx="180" ry="55" fill="none" stroke="var(--ink)" strokeOpacity="0.08" strokeDasharray="2 4" />
      </svg>
      {rendered.map((r) => {
        const cxp = 50 + (r.x / R) * 44;
        const cyp = 50 + (r.y / R) * 44;
        const isHov = hov === r.name;
        const s = 0.65 + r.depth * 0.55;
        const op = 0.3 + r.depth * 0.7;

        const category = getSkillCategory(r.name);
        const isActiveCat = activeAxis === "balanced" || activeAxis === category;
        const skillColor = getCategoryColor(category);

        return (
          <span
            key={r.i}
            onMouseEnter={() => setHov(r.name)}
            onMouseLeave={() => setHov(null)}
            style={{
              position: "absolute", left: `${cxp}%`, top: `${cyp}%`,
              transform: `translate(-50%, -50%) scale(${isHov ? s * 1.15 : s})`,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10.5, letterSpacing: 0.2,
              color: isHov ? "var(--bg)" : isActiveCat ? "var(--ink)" : "var(--muted)",
              background: isHov ? skillColor : "transparent",
              padding: isHov ? "3px 8px" : "2px 6px",
              border: `1px solid ${isHov ? skillColor : isActiveCat ? "rgba(0,0,0,0.06)" : "transparent"}`,
              opacity: isHov ? 1 : isActiveCat ? op : op * 0.25,
              whiteSpace: "nowrap",
              transition: "background .2s, color .2s, border-color .2s, opacity .3s",
              zIndex: Math.floor(r.depth * 100),
              cursor: "pointer",
            }}
          >{r.name}</span>
        );
      })}
    </div>
  );
}

/* =========================================================
   PORTFOLIO MAIN COMPONENT
========================================================= */

function Portfolio() {
  const [activeAxis, setActiveAxis] = useState<string>("balanced");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [clock, setClock] = useState("");

  useEffect(() => {
    const upd = () => {
      const d = new Date();
      const t = new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit", minute: "2-digit", second: "2-digit",
        hour12: false, timeZone: "Asia/Kolkata",
      }).format(d);
      setClock(t);
    };
    upd();
    const id = setInterval(upd, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const rootStyle: CSSProperties = {
    ["--bg" as any]: theme === "dark" ? "#0A0908" : "#EDE7DA",
    ["--ink" as any]: theme === "dark" ? "#F5F2EB" : "#141110",
    ["--muted" as any]: theme === "dark" ? "#8E867A" : "#6E655A",
    ["--rule" as any]: theme === "dark" ? "#262421" : "#CFC7B6",
    ["--accent" as any]: theme === "dark" ? "#E05A47" : "#B0432B",
    ["--olive" as any]: theme === "dark" ? "#8E9A68" : "#6B7355",
    ["--card-bg" as any]: theme === "dark" ? "#121110" : "#F5EFE4",
    ["--card-border" as any]: theme === "dark" ? "rgba(245,242,243,0.08)" : "rgba(20,17,16,0.08)",
    
    minHeight: "100vh",
    background: "var(--bg)",
    color: "var(--ink)",
    position: "relative",
    overflow: "hidden",
    transition: "background-color 0.4s, color 0.4s",
  };

  return (
    <div style={rootStyle}>
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; background: var(--bg); transition: background-color 0.4s; }
        body { font-family: 'Inter Tight Variable', system-ui, sans-serif; color: var(--ink); }
        .serif { font-family: 'Fraunces', Georgia, serif; font-variation-settings: "SOFT" 30, "WONK" 0; }
        .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
        .ink { color: var(--ink); }
        .muted { color: var(--muted); }
        .accent { color: var(--accent); }
        .kicker { font-family: 'JetBrains Mono', monospace; font-size: 10.5px; letter-spacing: 2.4px; text-transform: uppercase; color: var(--muted); }
        a { color: inherit; text-decoration: none; }
        ::selection { background: var(--accent); color: var(--bg); }
        @media (pointer: fine) { body, a, button { cursor: none; } }
        
        .paper-noise::before {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: ${theme === 'dark' ? 0.08 : 0.22};
          background-image: radial-gradient(rgba(20,17,16,0.35) 1px, transparent 1px);
          background-size: 3px 3px;
          mix-blend-mode: multiply;
        }

        .marquee { display: flex; gap: 56px; white-space: nowrap; animation: mq 55s linear infinite; }
        @keyframes mq { to { transform: translateX(-50%); } }
        
        .link-u { position: relative; }
        .link-u::after {
          content: ""; position: absolute; left: 0; right: 0; bottom: -3px; height: 1px;
          background: var(--ink); transform: scaleX(1); transform-origin: right center;
          transition: transform .5s cubic-bezier(.7,0,.15,1);
        }
        .link-u:hover::after { transform: scaleX(0); transform-origin: left center; }
        
        @keyframes matrixFall {
          0% { transform: translateY(-200px); }
          100% { transform: translateY(300px); }
        }

        .spinning-symbol {
          display: inline-block;
          animation: spinSymbol 2s linear infinite;
        }
        @keyframes spinSymbol {
          to { transform: rotate(360deg); }
        }

        .project-bento-card:hover {
          box-shadow: 0 10px 30px rgba(0,0,0, ${theme === 'dark' ? '0.2' : '0.05'});
          border-color: var(--accent) !important;
        }

        @media (prefers-reduced-motion: reduce) { * { transition: none !important; animation: none !important; } }
      `}</style>

      <CustomCursor />
      <ScrollLine />

      <div className="paper-noise" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1 }} />

      <div style={{
        position: "fixed", left: 0, top: 0, bottom: 0, width: 40,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between",
        padding: "24px 0", zIndex: 10, pointerEvents: "none",
      }}>
        <div className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--muted)" }}>SMR</div>
        <div className="mono" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: 10, letterSpacing: 3, color: "var(--muted)" }}>
          COIMBATORE - 22°N
        </div>
        <div className="mono" style={{ fontSize: 10, letterSpacing: 2, color: "var(--accent)" }}>*</div>
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1240, margin: "0 auto", padding: "0 clamp(32px, 6vw, 88px)" }}>
        
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "26px 0 22px" }}>
          <div className="serif" style={{ fontSize: 20, fontWeight: 500, letterSpacing: -0.3 }}>
            Shanjai <span style={{ fontStyle: "italic", fontWeight: 400 }}>M<span className="accent">.</span>R</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div className="mono" style={{ fontSize: 11, letterSpacing: 1.6, color: "var(--muted)" }}>
              IST · {clock}
            </div>

            <button
              onClick={toggleTheme}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--rule)",
                borderRadius: "50%",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--ink)",
                transition: "all 0.2s"
              }}
              data-hover
            >
              {theme === "light" ? <Moon size={14} /> : <Sun size={14} />}
            </button>

            <a href="#contact" data-hover className="mono link-u" style={{ fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase" }}>
              Available for work
            </a>
          </div>
        </header>
        <Rule />

        <section style={{ padding: "60px 0 90px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", gap: 24, alignItems: "start" }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: "var(--muted)", paddingTop: 14 }}>
                  Section 01
                </div>
                <h1 className="serif" style={{
                  margin: 0, fontWeight: 500,
                  fontSize: "clamp(48px, 8.5vw, 120px)",
                  lineHeight: 0.94, letterSpacing: -3,
                  fontVariationSettings: '"SOFT" 40, "opsz" 144',
                }}>
                  <LineReveal delay={100}>Software,</LineReveal>
                  <LineReveal delay={260}>
                    <span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--accent)" }}>considered.</span>
                  </LineReveal>
                </h1>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, marginTop: 44, alignItems: "start" }}>
                <Rise delay={400}>
                  <div className="kicker" style={{ marginBottom: 12 }}>The lede</div>
                  <p className="serif" style={{ fontSize: "clamp(18px, 1.8vw, 25px)", lineHeight: 1.5, fontWeight: 400, margin: 0, maxWidth: 700, color: "var(--ink)" }}>
                    I build products at the intersection of core software systems, machine intelligence, and complete user interfaces.
                    Java and Python at the core, 350+ algorithms deep, seven months shipping production features end-to-end.
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 26, marginTop: 36 }}>
                    <Magnetic strength={0.4}>
                      <a href="#contact" data-hover style={{
                        display: "inline-flex", alignItems: "center", gap: 12,
                        padding: "14px 24px",
                        background: "var(--ink)", color: "var(--bg)",
                        borderRadius: 999, fontSize: 14, letterSpacing: 0.2,
                        fontWeight: 500,
                        transition: "all 0.2s"
                      }}>
                        Start a conversation
                        <ArrowUpRight size={16} />
                      </a>
                    </Magnetic>
                    <a href="https://github.com/Shanjai24" target="_blank" rel="noreferrer" data-hover className="mono link-u" style={{ fontSize: 12, letterSpacing: 1.4, textTransform: "uppercase" }}>
                      Code - Github
                    </a>
                  </div>
                </Rise>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <InteractiveRadar activeAxis={activeAxis} setActiveAxis={setActiveAxis} />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 40, marginTop: 60, alignItems: "center" }}>
            <Rise delay={500}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
                {NUMBERS.map((n, i) => (
                  <div key={n.label}>
                    <div className="serif" style={{ fontSize: 32, fontWeight: 500, letterSpacing: -1 }}>
                      <CountUp to={n.v} suffix={n.suffix} />
                    </div>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }}>
                      {n.label}
                    </div>
                  </div>
                ))}
              </div>
            </Rise>

            <Rise delay={550} style={{ display: "flex", justifyContent: "flex-end" }}>
              <TerminalConsole />
            </Rise>
          </div>
        </section>

        <div style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "14px 0", margin: "0 0 80px" }}>
          <div className="marquee serif" style={{ fontSize: 20, fontStyle: "italic", color: "var(--ink)", opacity: 0.75, fontWeight: 400 }}>
            {Array(2).fill(0).map((_, k) => (
              <div key={k} style={{ display: "flex", gap: 56, paddingRight: 56 }}>
                {["systems engineering", "applied machine learning", "full-stack development", "ship, then polish", "own the seams", "boring is a feature"].map((w, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
                    <span>{w}</span>
                    <span className="mono accent" style={{ fontSize: 11 }}>*</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <SectionHead n="02" kicker="Standards" title={<>The way <em style={{ color: "var(--accent)" }}>I work.</em></>} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60, marginBottom: 120 }}>
          <Rise>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
              Five core principles that drive my architecture, pull requests, and debugging.
              Not aesthetic rules, but engineering standards that make code reliable at scale.
            </p>
            <div className="mono" style={{ marginTop: 32, fontSize: 11, letterSpacing: 2, color: "var(--muted)" }}>
              - THE SHANJAI STANDARD
            </div>
          </Rise>
          <div>
            {STANDARDS.map((s, i) => (
              <Rise key={s.n} delay={i * 90}>
                <div style={{ padding: "22px 0", borderTop: "1px solid var(--rule)", display: "grid", gridTemplateColumns: "62px 1fr", gap: 20, alignItems: "baseline" }}>
                  <div className="serif" style={{ fontSize: 26, color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>{s.n}</div>
                  <div>
                    <div className="serif" style={{ fontSize: 22, fontWeight: 500, letterSpacing: -0.4 }}>{s.title}</div>
                    <div style={{ fontSize: 14.5, color: "var(--muted)", marginTop: 8, lineHeight: 1.6, maxWidth: 560 }}>{s.body}</div>
                  </div>
                </div>
              </Rise>
            ))}
            <Rule />
          </div>
        </div>

        <SectionHead n="03" kicker="Unified Case Files" title={<>Selected <em style={{ color: "var(--accent)" }}>products.</em></>} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: 28, marginBottom: 120 }}>
          {PROJECTS.map((project, idx) => (
            <BentoProjectCard
              key={project.id}
              project={project}
              index={idx}
              activeAxis={activeAxis}
            />
          ))}
        </div>

        <SectionHead n="04" kicker="The Toolbox Sphere" title={<>All technologies <em style={{ color: "var(--accent)" }}>deployed.</em></>} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", marginBottom: 120 }}>
          <Rise>
            <p className="serif" style={{ fontSize: 20, lineHeight: 1.55, margin: 0, fontWeight: 400, maxWidth: 460 }}>
              An interactive 3D constellation of every language, framework, database, and model
              I have written and shipped.
            </p>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14, maxWidth: 400 }}>
              {Object.entries(SKILLS_CATEGORIES).map(([key, cat]) => {
                const isSelected = activeAxis === "balanced" || activeAxis === key;
                return (
                  <div
                    key={key}
                    onMouseEnter={() => setActiveAxis(key)}
                    onMouseLeave={() => setActiveAxis("balanced")}
                    style={{
                      padding: "12px 16px",
                      border: "1px solid var(--rule)",
                      borderRadius: 8,
                      background: isSelected ? "rgba(255,255,255,0.02)" : "transparent",
                      borderColor: isSelected ? cat.color : "var(--rule)",
                      cursor: "pointer",
                      transition: "all 0.2s"
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span className="mono font-bold" style={{ fontSize: 11.5, letterSpacing: 1, color: cat.color }}>
                        {cat.label.toUpperCase()}
                      </span>
                      <span className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>
                        {cat.skills.length.toString().padStart(2, "0")} skills
                      </span>
                    </div>
                    <div className="mono" style={{ fontSize: 10, color: "var(--muted)", marginTop: 6, lineHeight: 1.4 }}>
                      {cat.skills.slice(0, 7).join(", ")}...
                    </div>
                  </div>
                );
              })}
            </div>
          </Rise>
          <Rise delay={120}>
            <Constellation activeAxis={activeAxis} />
          </Rise>
        </div>

        <SectionHead n="05" kicker="Professional Log" title={<>Shipped in <em style={{ color: "var(--accent)" }}>production.</em></>} />
        <div style={{ marginBottom: 120 }}>
          <Rise>
            <div style={{ display: "grid", gridTemplateColumns: "180px 1fr 220px", gap: 40, padding: "32px 0", borderTop: "1px solid var(--rule)" }}>
              <div>
                <div className="mono accent" style={{ fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase" }}>{EXPERIENCE.period.split("-")[0].trim()} -</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--muted)" }}>{EXPERIENCE.period.split("-")[1].trim()}</div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: 1.6, textTransform: "uppercase", color: "var(--muted)", marginTop: 10 }}>{EXPERIENCE.place}</div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 32, fontWeight: 500, letterSpacing: -0.8, lineHeight: 1.1 }}>
                  {EXPERIENCE.role}
                </div>
                <div className="serif" style={{ fontSize: 20, fontStyle: "italic", color: "var(--accent)", marginTop: 6, fontWeight: 400 }}>
                  {EXPERIENCE.org}
                </div>
                <ul style={{ margin: "24px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                  {EXPERIENCE.notes.map((n, i) => (
                    <li key={i} style={{ display: "grid", gridTemplateColumns: "36px 1fr", fontSize: 15, lineHeight: 1.55, color: "var(--ink)" }}>
                      <span className="mono" style={{ color: "var(--muted)", fontSize: 11, paddingTop: 4 }}>0{i + 1}</span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="kicker" style={{ marginBottom: 10 }}>Sprint Velocity</div>
                <div className="serif" style={{ fontSize: 56, fontWeight: 500, letterSpacing: -1.6, lineHeight: 1, color: "var(--accent)" }}>
                  <CountUp to={95} suffix="%" />
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6, lineHeight: 1.5 }}>
                  Agile cycle completion rate across seven months of shipped React and REST integrations.
                </div>
              </div>
            </div>
            <Rule />
          </Rise>
        </div>

        <SectionHead n="06" kicker="Credentials" title={<>Academic &amp; <em style={{ color: "var(--accent)" }}>verifications.</em></>} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 120 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>Education</div>
            {EDUCATION.map((e, i) => (
              <Rise key={e.school} delay={i * 90}>
                <div style={{ padding: "22px 0", borderTop: "1px solid var(--rule)" }}>
                  <div className="serif" style={{ fontSize: 20, fontWeight: 500, letterSpacing: -0.3 }}>{e.school}</div>
                  <div style={{ fontSize: 14, color: "var(--ink)", marginTop: 6 }}>{e.detail}</div>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: 1.4, color: "var(--muted)", marginTop: 8, textTransform: "uppercase" }}>{e.date}</div>
                </div>
              </Rise>
            ))}
            <Rule />
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>Certifications</div>
            {CERTS.map((c, i) => (
              <Rise key={c.name} delay={i * 70}>
                <div style={{ padding: "18px 0", borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 20 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                    <span className="mono" style={{ fontSize: 10.5, color: c.status === "done" ? "var(--accent)" : "var(--muted)", letterSpacing: 1.2 }}>
                      {c.status === "done" ? "✓" : "◔"}
                    </span>
                    <span className="serif" style={{ fontSize: 16, fontWeight: 500 }}>{c.name}</span>
                  </div>
                  <span className="mono" style={{ fontSize: 10, letterSpacing: 1.2, color: "var(--muted)", textTransform: "uppercase", whiteSpace: "nowrap" }}>{c.date}</span>
                </div>
              </Rise>
            ))}
            <Rule />
            
            <Rise delay={350}>
              <div style={{ marginTop: 34, padding: "22px 24px", border: "1px solid var(--rule)", borderRadius: 8, background: "rgba(255,255,255,0.02)" }}>
                <div className="kicker accent" style={{ marginBottom: 8 }}>Honors</div>
                <div className="serif" style={{ fontSize: 18, fontWeight: 500 }}>
                  Shortlisted - Amazon ML Summer School <span className="accent">2026</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 6, lineHeight: 1.5 }}>
                  Selected through coding assessment and resume/SOP review, completing coursework in computer vision and deep learning.
                </div>
              </div>
            </Rise>
          </div>
        </div>

        <section id="contact" style={{ padding: "40px 0 60px", position: "relative" }}>
          <Rule />
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 60, paddingTop: 60 }}>
            <div>
              <div className="kicker" style={{ marginBottom: 20 }}>Section 07 - Contact</div>
              <h2 className="serif" style={{
                margin: 0, fontSize: "clamp(42px, 7.5vw, 100px)", fontWeight: 500,
                lineHeight: 0.94, letterSpacing: -3,
              }}>
                <LineReveal>Let's build</LineReveal>
                <LineReveal delay={140}>
                  <span style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 400 }}>
                    something clean.
                  </span>
                </LineReveal>
              </h2>
              <div style={{ marginTop: 40 }}>
                <Magnetic strength={0.35}>
                  <a href="mailto:shanjaimr245@gmail.com" data-hover style={{
                    display: "inline-flex", alignItems: "center", gap: 16,
                    padding: "18px 28px",
                    background: "var(--ink)", color: "var(--bg)",
                    borderRadius: 999, fontSize: 15, letterSpacing: 0.3,
                    fontWeight: 500,
                    transition: "all 0.2s"
                  }}>
                    <Mail size={16} />
                    shanjaimr245@gmail.com
                    <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
              </div>
            </div>

            <div>
              <div className="kicker" style={{ marginBottom: 20 }}>Elsewhere</div>
              {[
                { Icon: Github, label: "github.com/Shanjai24", href: "https://github.com/Shanjai24" },
                { Icon: Linkedin, label: "linkedin.com/in/shanjaimr", href: "https://linkedin.com/in/shanjaimr" },
                { Icon: Phone, label: "+91 86828 59436", href: "tel:+918682859436" },
              ].map(({ Icon, label, href }, i) => (
                <Rise key={label} delay={i * 80}>
                  <a href={href} target="_blank" rel="noreferrer" data-hover
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderTop: "1px solid var(--rule)" }}
                    onMouseEnter={(e) => {
                      const a = e.currentTarget.querySelector("[data-arrow]") as HTMLElement | null;
                      if (a) a.style.transform = "translate(4px, -4px)";
                    }}
                    onMouseLeave={(e) => {
                      const a = e.currentTarget.querySelector("[data-arrow]") as HTMLElement | null;
                      if (a) a.style.transform = "translate(0, 0)";
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <Icon size={16} strokeWidth={1.5} />
                      <span className="mono" style={{ fontSize: 13, letterSpacing: 0.4 }}>{label}</span>
                    </div>
                    <ArrowUpRight data-arrow size={18} strokeWidth={1.4} style={{ transition: "transform .4s cubic-bezier(.2,.7,.15,1)" }} />
                  </a>
                </Rise>
              ))}
              <Rule />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginTop: 100, paddingTop: 24, borderTop: "1px solid var(--rule)" }}>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 1.6, color: "var(--muted)", textTransform: "uppercase", lineHeight: 1.7 }}>
              <div>Colophon -</div>
              <div>Set in Fraunces &amp; Inter Tight.</div>
              <div>Built with React &amp; Tailwind. Draggable CLI included.</div>
            </div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: 1.6, color: "var(--muted)", textTransform: "uppercase", textAlign: "right", lineHeight: 1.7 }}>
              <div>© {new Date().getFullYear()} S.M.R</div>
              <div>Coimbatore - IN</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function SectionHead({ n, kicker, title }: { n: string; kicker: string; title: ReactNode }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "baseline", marginBottom: 50 }}>
      <div className="mono" style={{ fontSize: 11, letterSpacing: 2, color: "var(--muted)" }}>Section {n}</div>
      <div>
        <div className="kicker" style={{ marginBottom: 14 }}>{kicker}</div>
        <Rule />
        <h2 className="serif" style={{
          margin: "22px 0 0", fontSize: "clamp(34px, 5.5vw, 68px)",
          fontWeight: 500, letterSpacing: -1.6, lineHeight: 1,
        }}>
          <LineReveal>{title}</LineReveal>
        </h2>
      </div>
    </div>
  );
}
