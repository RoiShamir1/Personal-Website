// All site content lives here. Edit this file to update text, skills, projects or links —
// the components only handle layout.
import {
  SiAmazoncloudwatch,
  SiAmazonec2,
  SiAmazonecs,
  SiAngular,
  SiArgo,
  SiAwslambda,
  SiCplusplus,
  SiCsharp,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGrafana,
  SiHtml5,
  SiJavascript,
  SiJenkins,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiNodedotjs,
  SiOpencv,
  SiPingdom,
  SiPython,
  SiReact,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  FiActivity,
  FiAperture,
  FiCheckCircle,
  FiCloud,
  FiCode,
  FiCpu,
  FiCrosshair,
  FiDatabase,
  FiGithub,
  FiInstagram,
  FiLayers,
  FiLinkedin,
  FiRadio,
  FiTerminal,
} from "react-icons/fi";

export const CV_URL = `${process.env.PUBLIC_URL}/Roi_Shamir_CV.pdf`;

export const profile = {
  name: "Roi Shamir",
  role: "NOC Engineer",
  roleDetail: "at 365scores",
  eyebrow: "Cloud · Kubernetes · DevOps",
  tagline:
    "I keep production healthy at 365scores — monitoring AWS and Kubernetes infrastructure, shipping with ArgoCD and automating with Terraform and Python, backed by a full-stack development background.",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/RoiShamir1", icon: FiGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/roishamir/", icon: FiLinkedin },
  { label: "Instagram", href: "https://www.instagram.com/roi_shamir/", icon: FiInstagram },
];

export const linkedInUrl = socials.find((s) => s.label === "LinkedIn").href;
export const githubUrl = socials.find((s) => s.label === "GitHub").href;

// Commands typed by the animated terminal on the home page.
export const terminalSession = [
  { command: "whoami", output: [{ text: "roi-shamir · noc engineer @ 365scores", tone: "accent" }] },
  { command: "kubectl get pods -n production", output: [{ text: "✔ 24/24 pods Running · 0 restarts", tone: "success" }] },
  {
    command: "argocd app sync api",
    output: [
      { text: "→ syncing to revision a3f9c21", tone: "muted" },
      { text: "✔ Synced · Healthy", tone: "success" },
    ],
  },
  { command: "terraform apply", output: [{ text: "✔ Apply complete · 2 added, 1 changed", tone: "success" }] },
];

export const terminalSummary =
  "Terminal demo: checking pods on Kubernetes, syncing a deployment with ArgoCD and applying infrastructure changes with Terraform.";

export const lifecycle = ["plan", "code", "build", "test", "release", "deploy", "operate", "monitor"];

export const focusAreas = [
  {
    icon: FiActivity,
    title: "Production monitoring",
    description:
      "Watching over live systems — spotting incidents early with dashboards, logs and uptime checks, then troubleshooting to the root cause.",
    tools: ["Grafana", "Coralogix", "CloudWatch", "Checkly"],
  },
  {
    icon: FiCloud,
    title: "Cloud & Kubernetes",
    description: "Running services on AWS and Kubernetes, with ArgoCD handling deployments and continuous delivery.",
    tools: ["AWS", "Kubernetes", "ArgoCD", "Docker"],
  },
  {
    icon: FiLayers,
    title: "Infrastructure as Code",
    description: "Infrastructure defined in Terraform and routine work automated with Python, so changes are repeatable and reviewable.",
    tools: ["Terraform", "Python", "Jenkins", "Git"],
  },
  {
    icon: FiCode,
    title: "Full-stack development",
    description: "I build, too — from AWS Lambda functions wired into a C# ASP.NET backend to React and Angular front-ends.",
    tools: ["C# / .NET", "AWS Lambda", "Node.js", "React"],
  },
];

export const bio = [
  "I'm Roi, a NOC Engineer at 365scores with a full-stack development background and a B.Sc. in Computer Science (Sapir Academic College, 2023–2026). I enjoy the part of software most people never see: the infrastructure, deployments and automation that keep production running.",
  "Day to day I monitor and troubleshoot production systems, work with AWS, Kubernetes and ArgoCD for deployment and continuous delivery, and maintain Terraform and Python automation. I also build — for example, AWS Lambda functions integrated directly with a C# ASP.NET backend to scale backend operations.",
  "My path into tech started at Sela College's Soldiers to High-Tech program, where I trained as a full-stack developer. For my final project at Sapir, I built Argus with a teammate: a drone-based security system that detects threats in real time using YOLO and OpenCV.",
  "Before tech, I served four years as a combat soldier in Search & Rescue and was discharged as a Staff Sergeant. It taught me to stay calm under pressure, communicate clearly and own the mission end to end — great training for production incidents.",
];

export const quote = { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" };

// Rendered as a syntax-highlighted YAML file on the About page.
export const yamlFacts = [
  { key: "name", value: "Roi Shamir" },
  { key: "role", value: "NOC Engineer @ 365scores" },
  { key: "based_in", value: "Israel" },
  { key: "focus", list: ["cloud & kubernetes", "infrastructure as code", "monitoring & reliability"] },
  { key: "education", value: "B.Sc. Computer Science" },
  { key: "languages", value: "[Hebrew, English]" },
  { key: "service", value: "Combat Soldier, Search & Rescue" },
];

export const skillGroups = [
  {
    title: "Cloud & DevOps",
    icon: FiCloud,
    skills: [
      { name: "AWS EC2", icon: SiAmazonec2 },
      { name: "AWS ECS", icon: SiAmazonecs },
      { name: "AWS Lambda", icon: SiAwslambda },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "ArgoCD", icon: SiArgo },
      { name: "Terraform", icon: SiTerraform },
      { name: "Docker", icon: SiDocker },
      { name: "Jenkins", icon: SiJenkins },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
    ],
  },
  {
    title: "Monitoring & Incident Response",
    icon: FiActivity,
    skills: [
      { name: "CloudWatch", icon: SiAmazoncloudwatch },
      { name: "Grafana", icon: SiGrafana },
      { name: "Coralogix", icon: FiActivity },
      { name: "Checkly", icon: FiCheckCircle },
      { name: "Pingdom", icon: SiPingdom },
      { name: "Jira", icon: SiJira },
    ],
  },
  {
    title: "Languages, Frameworks & Data",
    icon: FiCode,
    skills: [
      { name: "C#", icon: SiCsharp },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C++", icon: SiCplusplus },
      { name: "SQL", icon: FiDatabase },
      { name: "ASP.NET / Web API", icon: SiDotnet },
      { name: ".NET Core", icon: SiDotnet },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "HTML / CSS", icon: SiHtml5 },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Entity Framework", icon: FiDatabase },
    ],
  },
  {
    title: "AI & Hardware",
    icon: FiCpu,
    skills: [
      { name: "YOLO", icon: FiCrosshair },
      { name: "RF-DETR", icon: FiCrosshair },
      { name: "OpenCV", icon: SiOpencv },
      { name: "Roboflow", icon: FiAperture },
      { name: "DJI drones", icon: FiRadio },
      { name: "Claude Code", icon: FiTerminal },
    ],
  },
];

export const journey = [
  {
    period: "2024 — Present",
    title: "NOC Engineer",
    org: "365scores",
    description:
      "Monitor and troubleshoot production infrastructure and applications. Deploy with AWS, Kubernetes and ArgoCD, maintain Terraform and Python automation, and build AWS Lambda functions integrated with a C# ASP.NET backend.",
  },
  {
    period: "2023 — 2026",
    title: "B.Sc. Computer Science",
    org: "Sapir Academic College",
    description:
      "Final project: Argus, an autonomous drone-based security system with real-time threat detection. Courses included embedded computer systems, object-oriented programming in .NET, and AI & LLMs.",
  },
  {
    period: "2022 — 2023",
    title: "Software Developer track",
    org: "Sela College · Soldiers to High-Tech (TechIDF)",
    description:
      "12-month web development track with on-the-job training in the college's honors program: C#, ASP.NET Core, Node.js, Angular, React, SQL and Azure.",
  },
  {
    period: "2019 — 2023",
    title: "Combat Soldier — Search & Rescue",
    org: "Military service · Staff Sergeant",
    description: "Operational service that taught me teamwork, discipline and staying calm when things go wrong.",
  },
];

export const projects = [
  {
    id: "argus",
    title: "Argus — Autonomous Drone Security System",
    year: "2026",
    category: "AI · Computer Vision",
    featured: true,
    summary:
      "My B.Sc. final project at Sapir Academic College, built in a team of two: a DJI drone streams live video to an edge computer that detects weapons and suspicious behavior in real time, and every confirmed threat becomes a geo-tagged alert in the cloud.",
    highlights: [
      "Live RTMP video from a DJI drone processed on a local edge machine with OpenCV, with automatic stream reconnects",
      "Custom weapon-detection models (YOLOv11, RF-DETR) trained on a Roboflow dataset, merged with a person detector using IoU de-duplication",
      "Sliding-window confirmation (4 hits in 8 frames) before raising an alert, to cut false positives",
      "Cloud event logging to MongoDB Atlas and a real-time Streamlit dashboard for alert monitoring and incident management",
    ],
    flow: ["DJI drone", "RTMP stream", "YOLOv11 + OpenCV", "MongoDB Atlas", "Streamlit"],
    tech: ["Python", "YOLOv11", "RF-DETR", "OpenCV", "Roboflow", "MongoDB Atlas", "Streamlit"],
    links: [
      { label: "Code", href: "https://github.com/RoiShamir1/final-project-sapir", type: "github" },
      { label: "Demo video", href: "https://www.youtube.com/watch?v=QYCQQtA69Eg", type: "video" },
    ],
  },
  {
    id: "cicd",
    title: "CI/CD Pipeline for a Java Web App",
    year: "2025",
    category: "DevOps · CI/CD",
    featured: true,
    summary:
      "A hands-on DevOps lab on the open-source vprofile stack: every commit runs through an automated Jenkins pipeline, and only artifacts that pass the quality gate get deployed.",
    highlights: [
      "Declarative Jenkinsfile: Maven build, unit and integration tests, Checkstyle analysis",
      "SonarQube scan with a quality gate that aborts the pipeline on failure",
      "Build-numbered artifacts published to a Nexus repository",
      "Ansible playbooks set up Tomcat, back up the running release and deploy the new WAR",
      "Multi-VM environment (MySQL, Memcached, RabbitMQ, Tomcat, Nginx) provisioned with Vagrant",
    ],
    flow: ["git push", "Jenkins", "Build & test", "SonarQube gate", "Nexus", "Ansible → Tomcat"],
    tech: ["Jenkins", "Maven", "SonarQube", "Nexus", "Ansible", "Vagrant"],
    links: [{ label: "Code", href: "https://github.com/RoiShamir1/proton", type: "github" }],
  },
  {
    id: "event-streaming",
    title: "Event Streaming Microservices",
    year: "2024",
    category: "DevOps · Containers",
    featured: true,
    summary:
      "An event-driven pipeline defined entirely as code: seven containerized services produce, stream, persist and cache metric events — all started with a single docker compose up.",
    highlights: [
      "Python producer publishes JSON metric events to a Kafka topic (with ZooKeeper)",
      "Consumer service persists every event to MongoDB",
      "Sync worker caches new events in Redis, tracking a timestamp watermark so nothing is processed twice",
      "Per-service Dockerfiles with shared configuration mounted into each container",
    ],
    flow: ["Producer", "Kafka", "Consumer", "MongoDB", "Redis"],
    tech: ["Docker Compose", "Kafka", "ZooKeeper", "MongoDB", "Redis", "Python"],
    links: [{ label: "Code", href: "https://github.com/RoiShamir1/Project-123completed", type: "github" }],
  },
  {
    id: "flight-control",
    title: "Flight Control System",
    year: "2023",
    category: "Full-Stack · .NET",
    summary:
      "An airport control simulation: a simulator sends flights through eight terminal legs while the API logs every entry and exit, tracked in an Angular client.",
    highlights: [
      "ASP.NET Core Web API with Entity Framework and SQL Server",
      "Object-oriented design with Chain of Responsibility, dependency injection and ILogger",
      "Separate simulation service generating traffic against the API",
    ],
    flow: ["Simulator", "ASP.NET Core API", "SQL Server", "Angular"],
    tech: ["C#", "ASP.NET Core", "Entity Framework", "SQL Server", "Angular"],
    links: [{ label: "Code", href: "https://github.com/RoiShamir1/Flight-Control-Angular", type: "github" }],
  },
  {
    id: "streaming-platform",
    title: "Netflix-style Streaming Platform",
    year: "2023",
    category: "Full-Stack · MERN",
    summary:
      "A streaming platform with a Node.js/Express API for movies and series and a React client with sign-up, browsing, search and video playback.",
    highlights: [
      "REST API with Express, Mongoose and MongoDB",
      "JWT authentication with bcrypt-hashed passwords",
      "React client with search, carousels and an in-browser video player",
    ],
    flow: ["React client", "Express API", "MongoDB"],
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "SCSS"],
    links: [
      { label: "Frontend", href: "https://github.com/RoiShamir1/Netflix-Streaming-Platform-Frontend", type: "github" },
      { label: "Backend", href: "https://github.com/RoiShamir1/Netflix-Streaming-Platform-Backend", type: "github" },
    ],
  },
  {
    id: "e-shop",
    title: "Amazon-style E-Shop",
    year: "2023",
    category: "Full-Stack · MERN",
    summary:
      "An online store with an Express/MongoDB products API and a React client: sign up, browse and sort products by price, and check out.",
    highlights: [
      "Express API with Mongoose models and JWT authentication",
      "Cart and checkout state managed with React Context and useReducer",
      "Responsive UI built with React Bootstrap",
    ],
    flow: ["React + Context", "Express API", "MongoDB"],
    tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    links: [{ label: "Code", href: "https://github.com/RoiShamir1/Amazon-Store", type: "github" }],
  },
];

export const earlierWork = [
  { title: "Movies Catalog Website", stack: "ASP.NET Core MVC · C#", href: "https://github.com/RoiShamir1/Movies-Catalog-Website" },
  { title: "Angular Product Website", stack: "Angular · Node.js", href: "https://github.com/RoiShamir1/Angular-Product-Website" },
  { title: "Box Store Data Structures", stack: "C# · console app", href: "https://github.com/RoiShamir1/Project-Box-DataStructures" },
  { title: "WPF Library", stack: "C# · WPF · JSON", href: "https://github.com/RoiShamir1/Wpf-Library-Json" },
  { title: "Dodge Game", stack: "C# · WPF", href: "https://github.com/RoiShamir1/Dodge-Game" },
  { title: "Number Base Converter", stack: "JavaScript · live on GitHub Pages", href: "https://roishamir1.github.io/" },
];
