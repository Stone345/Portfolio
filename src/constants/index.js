import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Cybersecurity",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "JTAC",
    company_name: "Marine Corps",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2008 - Jun 2013",
    points: [
      "Managment and maintenance of military equipment, computers and personel.",
      "Collaborating with cross-functional teams including IT profesionals from other branches of military.",
      "Implemented network security and OPSEC.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Information Technology Specialist",
    company_name: "ARMY",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2013 - Feb 2016",
    points: [
      "Developing and maintaining web applications using React.Js.Python and other related technologies.",
      "Maintained unit web aplications and performed diagnostics and threat assesments.",
      "Implementing responsive design and open lines of comunication for constatnt comunication.",
      "Participated in regular training and experience in team-work and leadership.",
    ],
  },
  {
    title: "Computer Technician",
    company_name: "CORE",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2016 - Jan 2019",
    points: [
      "Maintain, order and customize hardware components for all employee electronics.",
      "Experience in repairing, troubleshooting and debugging equipment.",
      "Experience in educating and working with those not familiar with technology.",
      "Participated in local compitions for design and performance.",
    ],
  },
  {
    title: "Network Technition",
    company_name: "UC Denver",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Accounting Platform",
    description: "An in-development accounting lab exploring AI-assisted bookkeeping, transaction review, and financial reporting using simulated business data.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "bookkeeping", color: "green-text-gradient" },
      { name: "ai-agents", color: "pink-text-gradient" },
    ],
    image: carrent,
    status: "In development",
    details: [
      "Working on a simulated bookkeeping environment to explore journal entries, transaction validation, and reporting.",
      "The goal is an approval-based workflow where AI proposes work and accounting rules independently check it before posting.",
      "The repository is private; this card presents the project without exposing client or source data.",
    ],
  },
  {
    name: "Cybersecurity Assessment Lab",
    description: "A planned simulation of a small business environment for practicing security assessments, findings review, and remediation reporting.",
    tags: [
      { name: "cybersecurity", color: "blue-text-gradient" },
      { name: "risk-assessment", color: "green-text-gradient" },
      { name: "simulation", color: "pink-text-gradient" },
    ],
    image: jobit,
    status: "Planning / prototype",
    details: [
      "The proposed lab models a 25-person professional-services company with Microsoft 365, Windows devices, cloud apps, and simulated security events.",
      "Planned exercises include reviewing mock phishing events, MFA settings, vulnerability findings, and security policies.",
      "The objective is to draft prioritized remediation recommendations and audit-friendly assessment reports without accessing real client systems.",
    ],
  },
  {
    name: "Felix — S&G Labs Assist",
    description: "A voice-based support assistant for a medical testing laboratory, using approved knowledge to answer routine employee questions and safely escalate unsupported requests.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "vapi", color: "pink-text-gradient" },
    ],
    image: tripguide,
    status: "Working prototype / class demo",
    details: [
      "Built a Vapi-powered voice assistant with server-side access-code verification and a Next.js administrative dashboard backed by Supabase.",
      "Employees can ask routine technical support questions; Felix searches approved knowledge and escalates when an approved answer is unavailable.",
      "Unanswered calls can become knowledge gaps. Administrators retrieve source material, generate AI-assisted drafts, review the results, and approve publication before Felix can use the new knowledge.",
      "Demonstrated a full workflow: a question Felix initially could not answer was escalated, developed into approved knowledge, and answered successfully on a later call.",
      "Designed as a support prototype with human oversight; clinical advice, production readiness, and regulatory compliance are not claimed.",
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };