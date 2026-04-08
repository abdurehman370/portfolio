import {
  Database,
  Globe,
  Cpu,
  Layout,
  Workflow,
  Link,
  Zap,
  ShoppingBag,
  FileText,
} from 'lucide-react';

const assetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\/+/, '')}`;
};

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const hero = {
  title: "Building practical software that solves real business problems.",
  description:
    "I am a software engineer focused on full-stack web development, APIs, automation, and e-commerce applications. My work combines clean frontend experiences with reliable backend logic, integrations, and scalable system design. Strong fit for web, full-stack, internal tools, integration, SaaS, and e-commerce engineering roles.",
  eyebrow: "Software Engineer • Full-Stack Web Development • Automation • E-commerce Systems",
  skills: [
    "JavaScript", "Node.js", "React", "Next.js", "Remix", "SQL", "Shopify APIs", "Python"
  ],
  stats: [
    { label: "Current focus", value: "Full-Stack Roles", icon: Zap },
    { label: "Core strengths", value: "APIs & Automation", icon: Workflow },
    { label: "Open to", value: "International Scale", icon: Globe }
  ]
};

export const about = {
  content: "I have hands-on experience building web and mobile applications, Shopify apps, internal tools, and automation workflows. My background includes frontend development, backend APIs, third-party integrations, data scraping, and product-oriented problem solving. I enjoy building software that is fast, maintainable, and useful in real business environments."
};

export const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: ["React", "Next.js", "Remix", "TypeScript", "Tailwind CSS", "Recharts", "HTML5/CSS3"]
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: ["Node.js", "Express", "Python", "FastAPI", "REST & GraphQL", "Webhooks", "Automation"]
  },
  {
    title: "Data & Infrastructure",
    icon: Database,
    skills: ["PostgreSQL", "Prisma ORM", "MySQL", "Redis", "BullMQ", "Docker", "Git/GitHub"]
  }
];

export const projects = [
  {
    id: "i-car",
    title: "I-Car Price Evaluation Platform",
    description: "Real-time car price evaluation platform for UAE, Lebanon, and Europe markets. Implemented Redis and BullMQ for high-performance alert delivery and cron-style scheduled jobs.",
    tags: ["Next.js", "React Native", "Python", "Redis", "BullMQ", "AI Integration"],
    features: [
      "Built web and mobile product flows for vehicle price prediction.",
      "Collected listing data from regional sources using Python scrapers.",
      "Implemented dealer authentication and admin controls.",
      "Managed background jobs and real-time alerts."
    ],
    links: [
      { name: "GitHub", href: "https://github.com/abdurehman370/I-Car", icon: Link },
      { name: "Case study", href: assetUrl("i-car-case-study.pdf"), icon: FileText },
      { name: "Scraping Demo", href: "https://youtu.be/9dU3dyGEr3o", icon: Globe },
      { name: "Pricing Demo", href: "https://youtu.be/ijQPD66E8FY", icon: Globe }
    ],
    images: [
      { src: assetUrl("images/icar1.png"), caption: "Home Page" },
      { src: assetUrl("images/icar2.png"), caption: "Dealer Login" },
      { src: assetUrl("images/icar3.png"), caption: "Dealer Dashboard" },
      { src: assetUrl("images/icar4.png"), caption: "Vehicle Evaluation — AI-powered price prediction" },
      { src: assetUrl("images/icar7.png"), caption: "Admin login" },
      { src: assetUrl("images/icar5.png"), caption: "Admin Panel — managing listings and dealers" },
      { src: assetUrl("images/icar6.png"), caption: "Dealer Authentication" }
    ]
  },
  {
    id: "procure-ai",
    title: "ProcureAI: Smart Supply Chain Intelligence",
    description: "Enterprise-grade, AI-powered procurement and inventory management platform. Built with a modern microservices architecture to eliminate supply chain inefficiencies.",
    tags: ["Next.js 15", "FastAPI", "Prisma", "PostgreSQL", "Tailwind v4", "Docker"],
    features: [
      "AI-driven demand forecasting and price anomaly detection.",
      "Decoupled microservices architecture for scalability.",
      "Multi-warehouse tracking and manual stock adjustments.",
      "Dynamic purchase orders and vendor management workflows.",
      "Premium analytics dashboard with Recharts."
    ],
    links: [
      { name: "GitHub", href: "https://github.com/abdurehman370/ProcureAI-Smart-Inventory-Supply-Chain-Intelligence", icon: Link },
      { name: "Case study", href: assetUrl("smart-procurement-case-study.pdf"), icon: FileText }
    ],
    images: [
      { src: assetUrl("images/procurement1.png"), caption: "Executive Dashboard — Login-Page" },
      { src: assetUrl("images/procurement2.png"), caption: "Inventory Management — real-time stock tracking" },
      { src: assetUrl("images/procurement3.png"), caption: "Demand Forecasting — AI-driven stock predictions" },
      { src: assetUrl("images/procurement4.png"), caption: "Vendor Management — supplier performance and lead times" },
      { src: assetUrl("images/procurement5.png"), caption: "Purchase Orders — automated procurement workflows" },
      { src: assetUrl("images/procurement6.png"), caption: "Warehouse Analytics — regional stock distribution" },
      { src: assetUrl("images/procurement7.png"), caption: "Price Anomaly Detection — identifying market fluctuations" },
      { src: assetUrl("images/procurement8.png"), caption: "System Settings — configuration and user permissions" }
    ]
  },
  {
    id: "shopify-reviews",
    title: "Shopify Product Reviews App",
    description: "Custom Shopify application for collecting and managing product reviews with focus on usability and merchant moderation workflows.",
    tags: ["Remix", "Node.js", "Shopify APIs", "React"],
    features: [
      "Merchant workflows for review moderation.",
      "Integrated Shopify APIs for embedded store workflows.",
      "Focused on practical store management needs."
    ],
    links: [
      { name: "GitHub", href: "https://github.com/DevteamPro-Inc/shopify-review-app", icon: Link },
      { name: "App Store", href: "https://apps.shopify.com/devteampro-product-reviews", icon: ShoppingBag }
    ],
    images: [
      { src: assetUrl("images/review1.jpg"), caption: "Embedded admin — moderation workflows" },
      { src: assetUrl("images/review2.jpg"), caption: "Merchant UX — fast review triage and publishing" },
      { src: assetUrl("images/review3.jpg"), caption: "Storefront reviews — customer-facing display" },
      { src: assetUrl("images/review4.jpg"), caption: "Review management — settings and controls" }
    ]
  },
  {
    id: "cod-pro",
    title: "ClarityDesk AI",
    description: "Enterprise decision intelligence workspace that turns messy document sets into searchable evidence, contradiction analysis, decision memos, and follow-up actions.",
    tags: ["Next.js", "NestJS", "Agentic AI", "RAG", "Workflow Automation", "PostgreSQL", "pgvector", "BullMQ", "Redis"],
    features: [
      "Built a document ingestion pipeline with async processing for summaries, facts, chunks, and embeddings.",
      "Implemented semantic search, document comparison, and contradiction detection across uploaded files.",
      "Created decision memo generation, task follow-ups, workspace-scoped RBAC, and audit-ready activity logs."
    ],
    links: [
      { name: "GitHub", href: "https://github.com/abdurehman370/ClarityDesk-Ai", icon: Link },
      { name: "Case study", href: assetUrl("claritydesk-case-study.pdf"), icon: FileText }
    ],
    images: [
      { src: assetUrl("images/claritydesk2.png"), caption: "Login / Signup page" },
      { src: assetUrl("images/claritydesk3.png"), caption: "Dashboard" },
      { src: assetUrl("images/claritydesk4.png"), caption: "Manage Workspaces" },
      { src: assetUrl("images/claritydesk5.png"), caption: "Upload Document for Workspace" },
      { src: assetUrl("images/claritydesk6.png"), caption: "AI Based Intelligence Memo" },
      { src: assetUrl("images/claritydesk7.png"), caption: "AI based Intelligence Comparison Matrix" },
      { src: assetUrl("images/claritydesk8.png"), caption: "AI based Risk Analysis" },
      { src: assetUrl("images/claritydesk9.png"), caption: "Action Task" }
    ]
  }
];

export const experience = [
  {
    company: "DevTeamPro",
    role: "Software Developer",
    period: "Aug 2025 – Present",
    description: "Developing Shopify applications, merchant automation tools, and internal e-commerce systems using React, Remix, Node.js, and backend logic."
  }
];

export const education = [
  {
    school: "Bahria University, Karachi",
    degree: "BSCS (Bachelor of Science in Computer Science)",
    period: "CGPA: 3.4 / 4.0",
    description: "Focus on software engineering, data structures, and web technologies."
  }
];

export const contact = {
  email: "pc18050.abdurehman@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdu-rehman-b19893288/",
  github: "https://github.com/abdurehman370"
};
