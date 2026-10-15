import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectCategory, ProjectItem } from '../../data/projects';

interface ProjectsShowcaseProps {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
  categories: ProjectCategory[];
  projects: ProjectItem[];
}

function ProjectVisualMockup({ type }: { type: ProjectItem['mockupType'] }) {
  if (type === 'kucode-landing') {
    return (
      <div className="h-full w-full flex items-center justify-center px-2 py-2">
        <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/90 bg-white shadow-lg dark:border-white/15 dark:bg-[#191632]">
          <div className="flex h-7 shrink-0 items-center justify-between border-b border-slate-100 px-3 dark:border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="flex h-4 w-4 items-center justify-center rounded bg-slate-950 text-[7px] font-black text-white dark:bg-white dark:text-slate-950">K</span>
              <span className="text-[7px] font-extrabold tracking-tight text-slate-900 dark:text-white">KU CODE LABS</span>
            </div>
            <span className="text-[6px] font-semibold text-slate-500 dark:text-slate-400">TRUJILLO · PERÚ</span>
          </div>
          <div className="grid flex-1 grid-cols-12 items-center gap-2 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-3 dark:from-slate-900 dark:via-[#17152a] dark:to-indigo-950/50">
            <div className="col-span-7">
              <span className="inline-flex rounded-full bg-sky-100 px-1.5 py-1 text-[5px] font-bold uppercase tracking-wide text-sky-800 dark:bg-sky-400/15 dark:text-sky-200">
                Sede principal · Trujillo
              </span>
              <div className="mt-1.5 text-[10px] font-extrabold leading-tight text-slate-950 dark:text-white">
                Desarrollo de software en Trujillo
              </div>
              <div className="mt-1 text-[6px] leading-snug text-slate-600 dark:text-slate-300">
                Software, apps móviles, IA y seguridad para empresas.
              </div>
              <span className="mt-2 inline-flex rounded-full bg-slate-950 px-2 py-1 text-[6px] font-bold text-white dark:bg-white dark:text-slate-950">
                Hablemos ↗
              </span>
            </div>
            <div className="col-span-5 flex flex-col gap-1.5">
              {['Software a medida', 'Apps móviles', 'Pentesting', 'WhatsApp + IA'].map((service) => (
                <div key={service} className="flex items-center gap-1.5 rounded-md border border-white bg-white/85 px-1.5 py-1.5 text-[6px] font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function ProjectsShowcase({
  eyebrow,
  title,
  ctaLabel,
  ctaHref,
  categories,
  projects,
}: ProjectsShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="glass-section rounded-[32px] sm:rounded-[34px] p-6 sm:p-9 lg:p-11" data-reveal>
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8">
        <div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400 mb-1.5">
            {eyebrow}
          </p>
          <h2
            id="projects-heading"
            className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-[-0.03em] text-slate-950 dark:text-white"
          >
            {title}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Interactive Category Pills */}
          <div
            role="tablist"
            aria-label="Filtrar proyectos por categoría"
            className="glass-pill inline-flex flex-wrap items-center gap-1 rounded-2xl p-1 sm:rounded-full"
          >
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative min-h-11 rounded-full px-3.5 py-3 text-xs font-bold transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-slate-950 dark:text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-white dark:bg-white/16 shadow-xs border border-white dark:border-white/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {cat}
                </button>
              );
            })}
          </div>

          {/* "View All Projects ↗" Pill Button */}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-pill hover:bg-white dark:hover:bg-white/16 inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-xs font-bold text-slate-900 dark:text-white transition-all hover:-translate-y-0.5"
          >
            <span>{ctaLabel}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-700 dark:text-violet-300" />
          </a>
        </div>
      </div>

      {/* 3-Column Glass Cards Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card glass-card-interactive group rounded-[26px] p-3.5 border border-white/95 dark:border-white/14 flex flex-col justify-between"
            >
              <div>
                {/* Top Mockup Frame */}
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-gradient-to-br ${project.accentGradient} border border-white/90 dark:border-white/15`}
                >
                  <ProjectVisualMockup type={project.mockupType} />
                </div>

                {/* Title, Category & Action Circle */}
                <div className="mt-4 px-1.5 flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-[17px] font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Circular Glass Action Buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código de ${project.title} en GitHub`}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/85 dark:bg-white/12 hover:bg-white dark:hover:bg-white/22 border border-white dark:border-white/20 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white shadow-xs transition-all hover:scale-105"
                      >
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </a>
                    )}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo en vivo de ${project.title}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white dark:bg-violet-600 hover:bg-slate-950 dark:hover:bg-violet-500 border border-white dark:border-violet-400/40 text-slate-900 dark:text-white hover:text-white shadow-sm transition-all hover:scale-105"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Concise Description */}
                <p className="mt-2.5 px-1.5 text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills & Impact Metric */}
              <div className="mt-4 pt-3 px-1.5 border-t border-slate-200/50 dark:border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/85 dark:bg-white/10 border border-white dark:border-white/15 px-2.5 py-0.5 text-[10.5px] font-bold text-slate-700 dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-[10.5px] font-bold text-violet-600 dark:text-violet-300">
                  {project.metrics}
                </span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
