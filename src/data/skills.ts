export interface TechSkill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps & Cloud' | 'Data';
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
    iconKey: 'astro',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    iconKey: 'react',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    iconKey: 'typescript',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    iconKey: 'nodejs',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Data',
    iconKey: 'postgresql',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'DevOps & Cloud',
    iconKey: 'docker',
  },
  {
    id: 'aws',
    name: 'AWS',
    category: 'DevOps & Cloud',
    iconKey: 'aws',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'DevOps & Cloud',
    iconKey: 'git',
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'DevOps & Cloud',
    iconKey: 'linux',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    iconKey: 'tailwind',
  },
];
