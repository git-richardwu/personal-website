import { HashRouter, Routes, Route } from 'react-router-dom'
import About from './components/pages/About.tsx';
import Experience from './components/pages/Experience.tsx';
import LandingPage from './components/pages/LandingPage.tsx';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Denouement from './components/pages/Denouement.tsx';
import './App.css';
import { MysteryContentProvider } from './components/context/MysteryContext.tsx';
import { TransitionProvider } from "./components/context/TransitionContext.tsx";
import CircleTransition from "./components/context/CircleTransition";

const data = {
  about: "Front-end focused full-stack developer with a B.S. degree in computer science and experience building React/NodeJs applications including real-time multiplayer games, interactive visualizations,and full-stack CRUD apps. I combine technical execution with strong communication skills developed through teaching coding and robotics - mentoring students through debugging workflows and iterative development cycles. Passionate about creating engaging user experiences and contributing to collaborative engineering teams.",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Javascript",
    "Postgresql",
    "HTML + CSS",
    "Figma",
    "Git",
  ],
  experience: [
    {
      title: "Coding and Robotics Instructor/Technology Support Specialist",
      company: "New Design High School",
      period: "2023 - Present",
      bullets: [
        "Designed and delivered project-based robotics curriculum teaching core programming concepts - including loops, conditionals, event-driven logic - using Sphero BOLT platforms",
        "Applied Agile-inspired workflows to mentor students through systematic debugging and iterative development cycles, reinforcing real-world software practices",
        "Deployed automated absence tracking system syncing staff schedules to centralized calendars, eliminating manual data entry for 50+ staff members",
        "Eliminated 13+ hours of manual work per cycle by engineering a Google Apps Script automation that consolidated 10+ spreadsheets into 400+ individualized progress reports with conditional formatting, custom templates, and automated email distribution",
      ],
    },
  ],
  projects: [
    {
      name: "ARQS",
      description: "Community Character Glossary",
      period: "2026",
      bullets: [
        "Built a full-stack Wikipedia-style platform allowing for community contributions and real-time glossary management, deployed on Railway with CI/CD",
        "Designed and built an intuitive UI that streamlines the full content lifecycle—browsing, editing, and resolving conflicting changes—within a single cohesive workflow",
        "Integrated the OpenLibrary API to dynamically enrich pages with book data, including covers, author details, and publication metadata",
        "Eliminated a key performance bottleneck by refactoring algorithm to consolidate redundant API calls into single call at initialization, reducing call volume by roughly 5x and improving response times",
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "Postgresql",
        "Docker",
        "Railway"
      ],
      links: {
        github: "https://github.com/git-richardwu/gloss",
        demo: "https://gloss-frontend-production.up.railway.app/search",
      },
    },
    {
      name: "numBRR",
      description: "Browser-Based Multiplayer Auto-Battler Game",
      period: "2025",
      bullets: [
        "Reduced sync latency by designing a real-time event-driven architecture with Socket.IO and streamlined React state management via custom hooks and Context API in TypeScript",
        "Implemented scalable matchmaking on Node.js/Socket.IO (Render) using room partitioning and targeted event broadcasting to support 200+ concurrent users",
        "Formulated a template-driven item system using weighted randomness and parametric inheritance, reducing new feature prototyping time by 60% while driving a 30% improvement in user engagement via level-based drop rates",
        "Optimized UI with React hooks and prioritized visual hierarchy, cutting first-time user errors by 50%",
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Render",
        "Socket.IO",
        "Sass",
      ],
      links: {
        github: "https://github.com/git-richardwu/num-brrr",
        demo: "https://numbrrr.up.railway.app/",
      },
    },
    {
      name: "feed the cat.",
      description:
        "Fast-paced browser game that involves accurately preparing and delivering dishes to feline patrons",
      period: "2023",
      bullets: [
        "Developed core game logic in React and TypeScript, optimizing rendering for a fluid, responsive gameplay loop",
        "Built dynamic content generation and a persistent scoring system to boost engagement and replayability",
        "Designed a minimalist, animation-driven UI for clear visual feedback during fast-paced play"
      ],
      stack: ["React", "TypeScript", "Sass"],
      links: {
        github: "https://github.com/git-richardwu/feed-the-cats",
        demo: "https://git-richardwu.github.io/feed-the-cats/",
      },
    },
    {
      name: "Collaj",
      description:
        "MERN-based web application of a dynamic art gallery that sorts entries by hue",
      period: "2022",
      bullets: [
        "Implemented RESTful API with Express/Node.js and MongoDB for high-performance CRUD operations",
        "Engineered Puppeteer scraper to automate extraction of artwork metadata from dynamic web pages",
        "Secured user sessions via JWT (JSON Web Tokens)/BCrypt authentication and encrypted data storage",
        "Validated API reliability with Mocha/Chai test suites for performance and edge-case handling",
      ],
      stack: [
        "MongoDB",
        "Express",
        "Node.js",
        "React",
        "Render",
        "Javascript",
      ],
      links: {
        github: "https://github.com/git-richardwu/Collaj",
        demo: "https://collaj.onrender.com/",
      },
    },
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      school: "University at Buffalo",
    },
  ],
  contact: {
    contact: {
      email: "",
      github: "",
      linkedin: "",
    },
  },
};

function App() {
  return (
    <MysteryContentProvider>
      <TransitionProvider>
      <CircleTransition />
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About data={data.about} />} />
          <Route path="/experience" element={<Experience data={data.experience}/>} />
          <Route path="/skills" element={<Skills data={data.skills}/>} />
          <Route path="/projects" element={<Projects data={data.projects}/>} />
          <Route path="/denouement" element={<Denouement />} />
        </Routes>
      </HashRouter>
      </TransitionProvider>
    </MysteryContentProvider>
  );
}

export default App
