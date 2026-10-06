export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface StatMetric {
  value: string;
  label: string;
  icon: 'experience' | 'projects' | 'clients';
  accentColor: string;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'mail';
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
  { label: 'Experiencia', href: '#experiencia', id: 'experiencia' },
  { label: 'Proyectos', href: '#proyectos', id: 'proyectos' },
  { label: 'Contáctame', href: '#contacto', id: 'contacto' },
];

export const profileData = {
  monogram: 'G',
  name: 'George Castillo',
  shortRole: 'Full Stack Developer',
  greeting: 'HOLA, SOY',
  heroRoleGradient: 'Full Stack Developer',
  heroDescription:
    'Diseño y construyo productos digitales escalables, arquitecturas cloud resilientes e interfaces web de alto rendimiento con propósito y precisión.',
  primaryCta: {
    label: 'Ver proyectos',
    href: '#proyectos',
  },
  secondaryCta: {
    label: 'Descargar CV',
    href: '/cv-george-castillo.pdf',
  },
  talkCta: {
    label: 'Hablemos',
    href: '#contacto',
  },
  heroFloatingStats: {
    yearsValue: '5+',
    yearsLabel: 'Años de',
    yearsSubLabel: 'Experiencia',
    impactLabel: 'Impacto en Producción',
    impactValue: '+120%',
    impactMetricNote: 'Rendimiento & Conversión',
  },
  trustedEcosystem: [
    { name: 'Astro', badge: 'Astro 7' },
    { name: 'React', badge: 'React 19' },
    { name: 'Node.js', badge: 'Node.js' },
    { name: 'AWS', badge: 'AWS Cloud' },
    { name: 'PostgreSQL', badge: 'PostgreSQL' },
  ],
  about: {
    eyebrow: 'SOBRE MÍ',
    titleLine1: 'Ingeniería con Empatía',
    titleLine2: 'Arquitectura con Propósito',
    paragraphs: [
      'Soy un desarrollador Full Stack con más de 5 años de experiencia transformando problemas técnicos complejos en aplicaciones web rápidas, intuitivas y listas para escalar en producción.',
      'Creo firmemente en la ingeniería centrada en el usuario, el código limpio con tipado estricto y el cuidado obsesivo por cada micro-interacción y milisegundo de carga.',
    ],
    ctaLabel: 'Mi Trayectoria',
    ctaHref: '#experiencia',
    metrics: [
      {
        value: '5+',
        label: 'Años de Experiencia',
        icon: 'experience',
        accentColor: '#8B5CF6',
      },
      {
        value: '30+',
        label: 'Proyectos Completados',
        icon: 'projects',
        accentColor: '#6366F1',
      },
      {
        value: '15+',
        label: 'Clientes Satisfechos',
        icon: 'clients',
        accentColor: '#3B82F6',
      },
    ] as StatMetric[],
  },
  contact: {
    eyebrow: 'HABLEMOS',
    titleLine1: '¿Tienes un proyecto en mente?',
    titleLine2: 'Construyamos algo increíble juntos.',
    subtitle:
      'Disponible para liderar desarrollos Full Stack, arquitecturas modernas con Astro/React/Node o consultoría de producto.',
    email: 'hola@georgecastillo.dev',
    phone: '+51 987 654 321',
    location: 'Lima, Perú · Remoto Global',
    availability: 'Disponible para nuevos proyectos Q4',
    projectTypes: [
      'Aplicación Web Full Stack (SaaS / Plataforma)',
      'Frontend de Alto Rendimiento (Astro / React / Next.js)',
      'Arquitectura Backend, APIs & Cloud (Node / AWS)',
      'Consultoría Técnica / Rediseño UI & Performance',
      'Oportunidad Laboral / Rol Senior',
    ],
  },
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/georgeacp',
      handle: '@georgeacp',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/georgecastillo',
      handle: 'in/georgecastillo',
      icon: 'linkedin',
    },
    {
      name: 'X / Twitter',
      url: 'https://x.com/georgecastillo',
      handle: '@georgecastillo',
      icon: 'twitter',
    },
    {
      name: 'Email',
      url: 'mailto:hola@georgecastillo.dev',
      handle: 'hola@georgecastillo.dev',
      icon: 'mail',
    },
  ] as SocialLink[],
};
