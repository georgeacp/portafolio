export interface TechSkill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps & Cloud' | 'Data';
  badgeBg: string;
  badgeText: string;
  iconKey:
    | 'astro'
    | 'react'
    | 'typescript'
    | 'nodejs'
    | 'postgresql'
    | 'docker'
    | 'aws'
    | 'git'
    | 'linux'
    | 'tailwind';
}

export const skillsSectionData = {
  eyebrow: 'HERRAMIENTAS & STACK',
  title: 'Tecnologías que Utilizo',
  subtitle:
    'Ecosistema moderno de producción para construir desde interfaces estáticas ultra-rápidas hasta sistemas distribuidos en la nube.',
};

export const techSkills: TechSkill[] = [
  {
    id: 'astro',
    name: 'Astro',
    category: 'Frontend',
    badgeBg: 'from-[#FF5D01] to-[#FF1639]',
    badgeText: 'text-white',
    iconKey: 'astro',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    badgeBg: 'from-[#00D8FF] to-[#0284C7]',
    badgeText: 'text-white',
    iconKey: 'react',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    badgeBg: 'from-[#3178C6] to-[#1D4ED8]',
    badgeText: 'text-white',
    iconKey: 'typescript',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    badgeBg: 'from-[#539E43] to-[#2F7422]',
    badgeText: 'text-white',
    iconKey: 'nodejs',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Data',
    badgeBg: 'from-[#336791] to-[#1E3A8A]',
    badgeText: 'text-white',
    iconKey: 'postgresql',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps & Cloud',
    badgeBg: 'from-[#2496ED] to-[#0284C7]',
    badgeText: 'text-white',
    iconKey: 'docker',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'DevOps & Cloud',
    badgeBg: 'from-[#FF9900] to-[#EA580C]',
    badgeText: 'text-white',
    iconKey: 'aws',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'DevOps & Cloud',
    badgeBg: 'from-[#F05032] to-[#DC2626]',
    badgeText: 'text-white',
    iconKey: 'git',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'DevOps & Cloud',
    badgeBg: 'from-[#1E293B] to-[#0F172A]',
    badgeText: 'text-white',
    iconKey: 'linux',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    badgeBg: 'from-[#38BDF8] to-[#6366F1]',
    badgeText: 'text-white',
    iconKey: 'tailwind',
  },
];
