export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Nuxt.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Docker", category: "DevOps" },
  { name: "System Design", category: "DevOps" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "Git", category: "Tools" },
];

export const projects = [
  {
    id: "digital-ustad-academy",
    title: "Digital Ustad Academy",
    description:
      "A production-ready e-learning platform with multi-role access (Admin, Teacher, Student), secure video streaming, real-time ticket system, and full deployment infrastructure.",
    tech: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "Docker" },
      { name: "Socket.io" },
      { name: "Cloudinary" },
    ],
    role: "Fullstack Developer",
    demoUrl: "https://learn.digitalustadacademy.com/",
    githubUrl: "https://github.com/imadkasse/",
    highlights: [
      "Multi-role system (Admin, Teacher, Student)",
      "Secure video streaming integration",
      "Real-time ticket messaging with Socket.io",
      "Docker Compose with Traefik",
      "Deployed on VPS + Vercel",
    ],
  },
  {
    id: "sehatte-platform",
    title: "Sehatte Platform",
    description:
      "Medical appointment and consultation platform developed as a graduation project (LMD) in collaboration with the university and business incubator.",
    tech: [
      { name: "Next.js" },
      { name: "NestJS" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
      { name: "Cloudinary" },
      { name: "Node.js" },
    ],
    role: "Fullstack Developer",
    demoUrl: "https://frontend-teal-nu-15.vercel.app/",
    githubUrl: "https://github.com/imadkasse/",
    highlights: [
      "Online appointment booking system",
      "Secure medical file & prescription storage",
      "Data validation and secure backend architecture",
      "Serverless deployment on Render",
      "Database hosted on MongoDB Atlas",
    ],
  },
];

export const education = [
  {
    degree: "Master 1 in Artificial Intelligence and Applications",
    university: "Université Ziane Achour de Djelfa",
    date: "2025 - 2027",
    description:
      "Focus on AI, data processing, and advanced computing systems.",
  },
  {
    degree: "Bachelor (LMD) in Web and Mobile Application Development",
    university: "Université Ziane Achour de Djelfa",
    date: "2022 - 2025",
    description:
      "Graduation project: Sehatte Platform developed in collaboration with the university and business incubator.",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "B2" },
  { name: "English", level: "A2/B1" },
];

export const personal = {
  name: "Imad Kasse",
  role: "Fullstack Software Engineer",
  summary:
    "Fullstack software engineer with strong experience in JavaScript, React, Vue, and modern web technologies. I build scalable, production-ready applications with real deployment experience using Docker, system design, and cloud infrastructure. Passionate about clean architecture, scalable systems, and continuous learning.",
  about: [
    "Building scalable, production-ready applications with real deployment experience",
    "Passionate about clean architecture and system design",
    "Continuous learner staying current with modern technologies",
    "Focused on creating impactful digital experiences",
  ],
  stats: {
    yearsExp: "4+",
    projectsBuilt: "10+",
    deploysDone: "50+",
  },
  email: "kasseimad81@gmail.com",
  github: "https://github.com/imadkasse/",
  linkedin: "https://www.linkedin.com/in/imad-kasse-8a52ab2a8/",
};
