import { 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Workflow,
  Link,
  Zap,
  ShoppingBag,
} from 'lucide-react';

export const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const hero = {
  title: "Building practical software that solves real business problems.",
  description: "I am a software engineer focused on full-stack web development, APIs, automation, and e-commerce applications. My work combines clean frontend experiences with reliable backend logic, integrations, and scalable system design.",
  eyebrow: "Software Engineer • Full-Stack Web Development • E-commerce Systems",
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
      { name: "Scraping Demo", href: "https://youtu.be/9dU3dyGEr3o", icon: Globe },
      { name: "Pricing Demo", href: "https://youtu.be/ijQPD66E8FY", icon: Globe }
    ],
    images: [
      { src: "images/icar1.png", caption: "Dealer Dashboard — real-time inventory and pricing" },
      { src: "images/icar2.png", caption: "Market Analysis — historical price trends" },
      { src: "images/icar3.png", caption: "Vehicle Evaluation — AI-powered price prediction" },
      { src: "images/icar4.png", caption: "Alert System — custom notifications for price drops" },
      { src: "images/icar5.png", caption: "Admin Panel — managing listings and dealers" },
      { src: "images/icar6.png", caption: "Mobile View — responsive access for dealers on the go" },
      { src: "images/icar7.png", caption: "Detailed Listing — comprehensive vehicle data" }
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
      { name: "GitHub", href: "https://github.com/abdurehman370/ProcureAI-Smart-Inventory-Supply-Chain-Intelligence", icon: Link }
    ],
    images: [
      { src: "images/procurement1.png", caption: "Executive Dashboard — high-level supply chain KPIs" },
      { src: "images/procurement2.png", caption: "Inventory Management — real-time stock tracking" },
      { src: "images/procurement3.png", caption: "Demand Forecasting — AI-driven stock predictions" },
      { src: "images/procurement4.png", caption: "Vendor Management — supplier performance and lead times" },
      { src: "images/procurement5.png", caption: "Purchase Orders — automated procurement workflows" },
      { src: "images/procurement6.png", caption: "Warehouse Analytics — regional stock distribution" },
      { src: "images/procurement7.png", caption: "Price Anomaly Detection — identifying market fluctuations" },
      { src: "images/procurement8.png", caption: "System Settings — configuration and user permissions" }
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
      { src: "/project-images/shopify-reviews-1.svg", caption: "Embedded admin — moderation workflows" },
      { src: "/project-images/shopify-reviews-1.svg", caption: "Merchant UX — fast review triage and publishing" }
    ]
  },
  {
    id: "cod-pro",
    title: "COD Pro Verification",
    description: "Multi-channel cash-on-delivery verification workflow using WhatsApp, email, and call-based confirmation steps.",
    tags: ["Node.js", "Automation", "E-commerce", "WhatsApp APIs"],
    features: [
      "Designed operational logic to reduce risky COD orders.",
      "Connected communication flows into one merchant process.",
      "Practical automation for store operations."
    ],
    links: [
      { name: "App Store", href: "https://apps.shopify.com/cod-call-whatsapp-email", icon: ShoppingBag }
    ],
    images: [
      { src: "/project-images/cod-pro-1.svg", caption: "Flow overview — WhatsApp, email, and call steps" },
      { src: "/project-images/cod-pro-1.svg", caption: "Operational logic — reduce risky COD orders" }
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
    period: "GPA: 3.4 / 4.0",
    description: "Focus on software engineering, data structures, and web technologies."
  }
];

export const contact = {
  email: "pc18050.abdurehman@gmail.com",
  linkedin: "https://www.linkedin.com/in/abdu-rehman-b19893288/",
  github: "https://github.com/abdurehman370"
};
