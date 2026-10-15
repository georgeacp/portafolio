export type ProjectCategory = 'Todos' | 'Frontend & UI';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'Todos'>;
  description: string;
  metrics: string;
  technologies: string[];
  demoUrl: string;
  repoUrl?: string;
  featured: boolean;
  mockupType: 'kucode-landing';
  accentGradient: string;
}

export const projectsSectionData = {
  eyebrow: 'PROYECTOS DESTACADOS',
  title: 'Trabajo Seleccionado',
  ctaLabel: 'Ver Todo en GitHub',
  ctaHref: 'https://github.com/georgeacp',
  categories: ['Todos', 'Frontend & UI'] as ProjectCategory[],
};

export const projectsData: ProjectItem[] = [
  {
    id: 'kucode-trujillo',
    title: 'Ku Code Labs — Desarrollo en Trujillo',
    subtitle: 'Página local de servicios tecnológicos',
    category: 'Frontend & UI',
    description:
      'Página de servicios dirigida a empresas de Trujillo y La Libertad, con software a medida, apps móviles, pentesting y bots de WhatsApp con IA.',
    metrics: '4+ años en Trujillo · 15+ apps entregadas',
    technologies: ['Software a medida', 'Apps móviles', 'Pentesting', 'WhatsApp + IA'],
    demoUrl: 'https://kucodelabs.com/peru/trujillo/',
    featured: true,
    mockupType: 'kucode-landing',
    accentGradient: 'from-sky-500/20 via-blue-400/15 to-indigo-200/30',
  },
];
