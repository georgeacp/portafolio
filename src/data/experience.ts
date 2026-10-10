export interface ExperienceItem {
  id: string;
  step: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  technologies: string[];
  accentTheme: {
    iconBg: string;
    iconColor: string;
    pillBg: string;
    pillText: string;
  };
  iconType: "architecture" | "fullstack" | "frontend" | "cloud";
}

export const experienceSectionData = {
  eyebrow: "TRAYECTORIA PROFESIONAL",
  title: "Experiencia & Evolución Técnica",
  processEyebrow: "MI METODOLOGÍA",
  processTitle: "Proceso de Ingeniería que Sigo",
};

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    step: "01",
    role: "Full Stack - Devops",
    company: "Rapidboard",
    location: "Remoto · Trujillo, PE",
    period: "2025 — Presente",
    current: true,
    summary:
      "Cofundador junto a mi equipo una plataforma SaaS orientada a la creación de dashboards y reportes ejecutivos generados con inteligencia artificial.",
    highlights: [
      "Diseñé y administré de forma autónoma la infraestructura de microservicios en AWS con Infraestructura como Código con Pulumi",
      "Puse el entorno de producción en marcha en 15 días mediante automatización de infraestructura y despliegues.",
      "Automaticé pipelines de CI/CD por ambiente en GitHub Actions, con gestión segura de variables en AWS Secrets Manager.",
    ],
    technologies: [
      "React",
      "Nest Js",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Pulumi",
      "Docker",
    ],
    accentTheme: {
      iconBg: "bg-violet-100/90 border-violet-200/80",
      iconColor: "text-violet-600",
      pillBg: "bg-violet-500/10 border-violet-500/20",
      pillText: "text-violet-700",
    },
    iconType: "architecture",
  },
  {
    id: "exp-2",
    step: "02",
    role: "Full Stack Developer",
    company: "Aether Digital Studio",
    location: "Híbrido · Lima / Madrid",
    period: "2022 — 2024",
    summary:
      "Desarrollo end-to-end de plataformas SaaS B2B, dashboards analíticos en tiempo real e integraciones API.",
    highlights: [
      "Construí un motor de reportes analíticos en tiempo real con WebSockets, React y cachés distribuidos en Redis.",
      "Automatizaciones CI/CD con GitHub Actions y contenedores Docker en AWS ECS, reduciendo tiempos de despliegue de 35m a 4m.",
      "Colaboré directamente con diseño de producto para entregar interfaces fluidas con Motion y puntajes Lighthouse 98+.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Git",
    ],
    accentTheme: {
      iconBg: "bg-violet-100/90 border-violet-200/80",
      iconColor: "text-violet-600",
      pillBg: "bg-indigo-500/10 border-indigo-500/20",
      pillText: "text-indigo-700",
    },
    iconType: "fullstack",
  },
  {
    id: "exp-3",
    step: "03",
    role: "Frontend & UI Engineer",
    company: "NovaScale Labs",
    location: "Remoto · LATAM",
    period: "2021 — 2022",
    summary:
      "Especialista en interfaces interactivas, sistemas de componentes reutilizables y optimización Core Web Vitals.",
    highlights: [
      "Desarrollé más de 40 componentes reutilizables documentados con pruebas de accesibilidad y teclado.",
      "Incrementé la conversión de landing pages comerciales en un +34% mediante mejoras de rendimiento y micro-interacciones.",
      "Integración de pasarelas de pago Stripe y paneles de autogestión de suscripciones.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "REST APIs",
    ],
    accentTheme: {
      iconBg: "bg-indigo-100/90 border-indigo-200/80",
      iconColor: "text-indigo-600",
      pillBg: "bg-sky-500/10 border-sky-500/20",
      pillText: "text-sky-700",
    },
    iconType: "frontend",
  },
  {
    id: "exp-4",
    step: "04",
    role: "Backend & Cloud Junior Developer",
    company: "Kinetix Tech",
    location: "Lima, Perú",
    period: "2020 — 2021",
    summary:
      "Desarrollo de servicios RESTful, modelado relacional en PostgreSQL y administración de servidores Linux.",
    highlights: [
      "Optimización de consultas SQL complejas logrando reducciones del 70% en latencia p95.",
      "Configuración de entornos Linux seguros, proxies inversos Nginx y monitoreo automatizado.",
    ],
    technologies: ["Node.js", "PostgreSQL", "Linux", "Docker", "Git"],
    accentTheme: {
      iconBg: "bg-teal-100/90 border-teal-200/80",
      iconColor: "text-teal-600",
      pillBg: "bg-teal-500/10 border-teal-500/20",
      pillText: "text-teal-700",
    },
    iconType: "cloud",
  },
];

export const engineeringProcess = [
  {
    step: "01",
    title: "Descubrir",
    description:
      "Análisis de objetivos de negocio, usuarios y métricas técnicas clave.",
  },
  {
    step: "02",
    title: "Arquitectura",
    description:
      "Modelado de datos, contratos de API y selección óptima del stack.",
  },
  {
    step: "03",
    title: "Diseño & UI",
    description:
      "Sistemas de componentes accesibles, estados interactivos y prototipado.",
  },
  {
    step: "04",
    title: "Construcción",
    description:
      "Código tipado, limpio, modular e islas de hidratación selectiva.",
  },
  {
    step: "05",
    title: "Deploy & Scale",
    description:
      "Auditoría Lighthouse 95+, CI/CD con Docker y observabilidad en producción.",
  },
];
