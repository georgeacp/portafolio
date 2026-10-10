export interface ExperienceItem {
  id: string;
  step: string;
  role: string;
  company: string;
  location?: string;
  logo?: string;
  logoSize?: "regular" | "compact";
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
    logo: "https://rapidboard.app/logo/logo.svg",
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
    role: "Desarrollador Full Stack Jr.",
    company: "Grupo Insight Out",
    logo: "/images/grupo-insight-out.png",
    period: "Jul – Nov 2025",
    summary:
      "Sistema Integral de Gestión para Gimnasio",
    highlights: [
      "Diseñé y desarrollé una arquitectura de microservicios para un sistema usado por 100–200 clientes.",
      "Implementé módulos CRUD (usuarios, rutinas, citas, métricas) con autenticación y autorización basadas en JWT.",
      "Reduje ~35% el tiempo de respuesta de endpoints críticos optimizando consultas SQL y aplicando caché selectivo en el backend.",
      "Construí un panel de administración responsive con dashboard de métricas del negocio y gráficos dinámicos.",
    ],
    technologies: ["React", "NestJS", "PostgreSQL", "TypeORM"],
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
    role: "Analista TI Jr.",
    company: "PMI Lima Perú Chapter",
    logo: "/images/pmi-lima-peru-chapter.png",
    logoSize: "compact",
    period: "Feb – Dic 2024",
    summary:
      "Página Web del CONCEPMI 2024",
    highlights: [
      "Lideré un equipo de 6 personas en el desarrollo del sitio web responsive, con pagos en línea integrados (Stripe).",
      "Reforcé la seguridad del flujo de pagos con protección de rutas, tokenización con Stripe y MFA.",
      "Apliqué SCRUM, reduciendo ~20% el tiempo de entrega de proyectos.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    accentTheme: {
      iconBg: "bg-indigo-100/90 border-indigo-200/80",
      iconColor: "text-indigo-600",
      pillBg: "bg-indigo-500/10 border-indigo-500/20",
      pillText: "text-indigo-700",
    },
    iconType: "frontend",
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
