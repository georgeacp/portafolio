export type ProjectCategory = 'Todos' | 'Full Stack' | 'Frontend & UI' | 'Cloud & APIs';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  description: string;
  metrics: string;
  technologies: string[];
  demoUrl: string;
  repoUrl: string;
  featured: boolean;
  mockupType: 'fintech-mobile' | 'analytics-dashboard' | 'saas-landing' | 'ai-workspace' | 'cloud-monitor' | 'commerce-engine';
  accentGradient: string;
}

export const projectsSectionData = {
  eyebrow: 'PROYECTOS DESTACADOS',
  title: 'Trabajo Seleccionado',
  ctaLabel: 'Ver Todo en GitHub',
  ctaHref: 'https://github.com/georgeacp',
  categories: ['Todos', 'Full Stack', 'Frontend & UI', 'Cloud & APIs'] as ProjectCategory[],
};

export const projectsData: ProjectItem[] = [
  {
    id: 'finova-app',
    title: 'Finova — Plataforma Financiera',
    subtitle: 'Full Stack Fintech & Billetera Multidivisa',
    category: 'Full Stack',
    description:
      'Ecosistema financiero con conciliación en tiempo real, tarjetas virtuales, analítica predictiva de flujo de caja y autenticación biométrica.',
    metrics: '+42k usuarios activos · 99.98% uptime',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    demoUrl: 'https://finova-demo.georgecastillo.dev',
    repoUrl: 'https://github.com/georgeacp/finova-platform',
    featured: true,
    mockupType: 'fintech-mobile',
    accentGradient: 'from-violet-500/20 via-indigo-400/15 to-purple-200/30',
  },
  {
    id: 'cloudpulse-analytics',
    title: 'CloudPulse — Analytics Dashboard',
    subtitle: 'Observabilidad SaaS & Métricas en Tiempo Real',
    category: 'Full Stack',
    description:
      'Panel de telemetría y analítica de producto capaz de visualizar millones de eventos con filtros dinámicos sub-50ms y alertas inteligentes.',
    metrics: 'Sub-45ms latencia de consulta · 99 Lighthouse',
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    demoUrl: 'https://cloudpulse.georgecastillo.dev',
    repoUrl: 'https://github.com/georgeacp/cloudpulse-dashboard',
    featured: true,
    mockupType: 'analytics-dashboard',
    accentGradient: 'from-indigo-500/20 via-blue-400/15 to-sky-200/30',
  },
  {
    id: 'aether-saas',
    title: 'Aether — SaaS Landing & Design System',
    subtitle: 'Arquitectura Web con Islas Astro & Motion',
    category: 'Frontend & UI',
    description:
      'Sitio comercial interactivo y documentación técnica con puntaje 100/100 en Core Web Vitals, animaciones físicas y modo glassmorphism.',
    metrics: '100/100 Performance · +38% conversión',
    technologies: ['Astro', 'React', 'Tailwind CSS', 'Motion', 'Radix UI'],
    demoUrl: 'https://aether-ui.georgecastillo.dev',
    repoUrl: 'https://github.com/georgeacp/aether-design-system',
    featured: true,
    mockupType: 'saas-landing',
    accentGradient: 'from-sky-400/20 via-indigo-400/15 to-violet-200/30',
  },
  {
    id: 'nexus-ai-ops',
    title: 'Nexus — Orquestador de APIs & IA',
    subtitle: 'Gateway de Baja Latencia con Control de Costos',
    category: 'Cloud & APIs',
    description:
      'Proxy distribuido para modelos LLM y microservicios internos con caché semántico, rate-limiting por tenant y trazabilidad completa.',
    metrics: '-40% costos de inferencia · Docker + AWS',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS', 'Linux'],
    demoUrl: 'https://nexus-gateway.georgecastillo.dev',
    repoUrl: 'https://github.com/georgeacp/nexus-api-gateway',
    featured: false,
    mockupType: 'ai-workspace',
    accentGradient: 'from-purple-500/20 via-fuchsia-400/15 to-indigo-200/30',
  },
  {
    id: 'velox-commerce',
    title: 'Velox — Headless Commerce Engine',
    subtitle: 'Storefront Instantáneo & Checkout Resiliente',
    category: 'Full Stack',
    description:
      'Arquitectura de comercio electrónico desacoplada con inventario sincronizado en tiempo real, pagos internacionales y catálogo estático.',
    metrics: '0.4s FCP · Integración Stripe & Webhooks',
    technologies: ['Astro', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    demoUrl: 'https://velox-store.georgecastillo.dev',
    repoUrl: 'https://github.com/georgeacp/velox-commerce',
    featured: false,
    mockupType: 'commerce-engine',
    accentGradient: 'from-blue-500/20 via-indigo-400/15 to-violet-200/30',
  },
  {
    id: 'kubewatch-infra',
    title: 'Sentinel — Monitor de Infraestructura Linux',
    subtitle: 'Agente Ligero & Consola de Estado de Servidores',
    category: 'Cloud & APIs',
    description:
      'Sistema de monitoreo de contenedores Docker y nodos Linux con notificaciones instantáneas y reportes históricos de uso de recursos.',
    metrics: '< 15MB RAM por agente · 100% Open Source',
    technologies: ['Linux', 'Docker', 'Node.js', 'TypeScript', 'AWS', 'Git'],
    demoUrl: 'https://sentinel-ops.georgecastillo.dev',
    repoUrl: 'https://github.com/georgeacp/sentinel-linux-monitor',
    featured: false,
    mockupType: 'cloud-monitor',
    accentGradient: 'from-teal-400/20 via-cyan-400/15 to-indigo-200/30',
  },
];
