import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
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
  if (type === 'fintech-mobile') {
    return (
      <div className="relative h-full w-full flex items-center justify-center gap-2.5 px-2 pt-2">
        {/* Left Phone */}
        <div className="w-[29%] h-[92%] translate-y-2 -rotate-3 rounded-2xl bg-white/95 dark:bg-[#191632]/95 border border-white dark:border-white/15 shadow-md p-2 flex flex-col justify-between">
          <div className="h-12 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 p-1.5 text-white">
            <div className="text-[7px] opacity-80">Balance Total</div>
            <div className="text-[10px] font-extrabold">$24,850</div>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-slate-100 dark:bg-white/10" />
            <div className="h-2 w-4/5 rounded bg-slate-100 dark:bg-white/10" />
            <div className="h-6 w-full rounded-lg bg-violet-50 dark:bg-violet-500/20 border border-violet-100 dark:border-violet-400/25" />
          </div>
        </div>

        {/* Center Featured Phone */}
        <div className="w-[33%] h-[98%] z-10 rounded-2xl bg-white dark:bg-[#221E42] border-2 border-white dark:border-white/25 shadow-xl p-2.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="h-2 w-8 rounded-full bg-violet-200 dark:bg-violet-400/40" />
            <span className="h-2 w-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
          </div>
          <div className="rounded-xl bg-gradient-to-r from-violet-600 via-indigo-500 to-sky-400 p-2 text-white shadow-xs">
            <div className="text-[7px] uppercase tracking-wider opacity-80">Finova Card</div>
            <div className="text-[11px] font-black mt-0.5">$48,920.00</div>
            <div className="mt-1.5 flex justify-between text-[6px] opacity-90">
              <span>•••• 4829</span>
              <span>09/28</span>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-white/8 px-1.5 py-1">
              <span className="h-2 w-10 rounded bg-slate-200 dark:bg-white/20" />
              <span className="text-[7px] font-bold text-emerald-600 dark:text-emerald-400">+$1,240</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-slate-50 dark:bg-white/8 px-1.5 py-1">
              <span className="h-2 w-8 rounded bg-slate-200 dark:bg-white/20" />
              <span className="text-[7px] font-bold text-violet-600 dark:text-violet-300">+$890</span>
            </div>
          </div>
        </div>

        {/* Right Phone */}
        <div className="w-[29%] h-[92%] translate-y-2 rotate-3 rounded-2xl bg-white/95 dark:bg-[#191632]/95 border border-white dark:border-white/15 shadow-md p-2 flex flex-col justify-between">
          <div className="text-[8px] font-bold text-slate-700 dark:text-slate-200">Cashflow</div>
          <div className="flex items-end justify-between gap-1 h-14 px-1">
            <span className="w-2 h-6 rounded-t bg-violet-200 dark:bg-violet-500/40" />
            <span className="w-2 h-9 rounded-t bg-violet-400" />
            <span className="w-2 h-7 rounded-t bg-indigo-300 dark:bg-indigo-400/60" />
            <span className="w-2 h-12 rounded-t bg-indigo-600 dark:bg-indigo-400" />
            <span className="w-2 h-10 rounded-t bg-sky-400" />
          </div>
          <div className="h-4 w-full rounded-lg bg-slate-900 dark:bg-violet-600 text-white text-[6px] font-bold flex items-center justify-center">
            Transferir ↗
          </div>
        </div>
      </div>
    );
  }

  if (type === 'analytics-dashboard') {
    return (
      <div className="h-full w-full flex items-center justify-center pt-1 px-2">
        <div className="w-full h-[94%] rounded-xl bg-white/95 dark:bg-[#191632]/95 border border-white dark:border-white/15 shadow-lg p-2.5 flex gap-2.5">
          {/* Mini Sidebar */}
          <div className="w-9 shrink-0 rounded-lg bg-slate-50 dark:bg-white/6 border border-slate-100 dark:border-white/10 p-1.5 flex flex-col items-center gap-1.5">
            <span className="h-3 w-3 rounded-md bg-violet-600" />
            <span className="h-1.5 w-4 rounded bg-slate-200 dark:bg-white/20 mt-1" />
            <span className="h-1.5 w-4 rounded bg-violet-300 dark:bg-violet-400" />
            <span className="h-1.5 w-4 rounded bg-slate-200 dark:bg-white/20" />
            <span className="h-1.5 w-4 rounded bg-slate-200 dark:bg-white/20" />
          </div>

          {/* Dashboard Body */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-1.5">
              <div className="rounded-lg bg-violet-50/70 dark:bg-violet-500/15 border border-violet-100 dark:border-violet-400/20 p-1.5">
                <div className="text-[6px] text-slate-500 dark:text-slate-300">Requests/s</div>
                <div className="text-[9px] font-extrabold text-slate-900 dark:text-white">142.8k</div>
              </div>
              <div className="rounded-lg bg-indigo-50/70 dark:bg-indigo-500/15 border border-indigo-100 dark:border-indigo-400/20 p-1.5">
                <div className="text-[6px] text-slate-500 dark:text-slate-300">Latencia p95</div>
                <div className="text-[9px] font-extrabold text-indigo-600 dark:text-indigo-300">18.4ms</div>
              </div>
              <div className="rounded-lg bg-sky-50/70 dark:bg-sky-500/15 border border-sky-100 dark:border-sky-400/20 p-1.5">
                <div className="text-[6px] text-slate-500 dark:text-slate-300">Uptime</div>
                <div className="text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400">99.99%</div>
              </div>
            </div>

            {/* Chart Area */}
            <div className="rounded-lg bg-slate-50/80 dark:bg-white/5 border border-slate-100 dark:border-white/10 p-2 flex items-end justify-between gap-1.5 h-16">
              {[42, 68, 54, 86, 62, 95, 76, 100, 84, 92].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className={`flex-1 rounded-t-sm ${
                    i % 2 === 0
                      ? 'bg-gradient-to-t from-indigo-500 to-violet-400'
                      : 'bg-indigo-200/85 dark:bg-indigo-400/35'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'saas-landing') {
    return (
      <div className="h-full w-full flex items-center justify-center pt-1 px-2">
        <div className="w-full h-[94%] rounded-xl bg-white/95 dark:bg-[#191632]/95 border border-white dark:border-white/15 shadow-lg overflow-hidden flex flex-col">
          {/* Browser Top Bar */}
          <div className="h-4 bg-slate-50 dark:bg-white/6 border-b border-slate-100 dark:border-white/10 px-2 flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </div>
          {/* Landing Hero Preview */}
          <div className="flex-1 p-3 grid grid-cols-12 gap-2 items-center bg-gradient-to-br from-white via-indigo-50/40 to-violet-100/40 dark:from-[#1C1838] dark:via-indigo-950/50 dark:to-violet-950/50">
            <div className="col-span-7 space-y-1.5">
              <span className="inline-block rounded-full bg-violet-100 dark:bg-violet-500/25 px-1.5 py-0.5 text-[6px] font-bold text-violet-700 dark:text-violet-200">
                ASTRO 7 + MOTION
              </span>
              <div className="text-[10px] font-extrabold text-slate-900 dark:text-white leading-tight">
                Build Next-Gen Interfaces Faster
              </div>
              <div className="h-1.5 w-4/5 rounded bg-slate-200 dark:bg-white/20" />
              <div className="pt-1 flex gap-1">
                <span className="rounded-full bg-slate-900 dark:bg-violet-600 px-2 py-0.5 text-[6px] font-bold text-white">
                  Get Started
                </span>
                <span className="rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 px-2 py-0.5 text-[6px] font-bold text-slate-700 dark:text-slate-200">
                  Docs
                </span>
              </div>
            </div>
            <div className="col-span-5 flex justify-center">
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-sky-400 p-2 shadow-md flex items-center justify-center text-white">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center pt-1 px-2">
      <div className="w-full h-[94%] rounded-xl bg-white/95 dark:bg-[#191632]/95 border border-white dark:border-white/15 shadow-lg p-3 flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-white/10 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-violet-600 dark:bg-violet-400" />
            <span className="text-[8px] font-bold text-slate-800 dark:text-slate-100 uppercase tracking-wider">
              {type.replace('-', ' ')}
            </span>
          </div>
          <span className="rounded-full bg-emerald-50 dark:bg-emerald-500/20 px-2 py-0.5 text-[7px] font-bold text-emerald-700 dark:text-emerald-300">
            PRODUCTION READY
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="rounded-lg bg-gradient-to-br from-violet-500/10 to-indigo-500/10 dark:from-violet-500/20 dark:to-indigo-500/20 border border-violet-200/60 dark:border-violet-400/25 p-2">
            <div className="text-[7px] text-violet-700 dark:text-violet-300 font-bold">Throughput</div>
            <div className="text-xs font-extrabold text-slate-900 dark:text-white mt-0.5">99.98%</div>
          </div>
          <div className="rounded-lg bg-slate-50 dark:bg-white/6 border border-slate-200/70 dark:border-white/15 p-2">
            <div className="text-[7px] text-slate-500 dark:text-slate-300 font-bold">Architecture</div>
            <div className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300 mt-0.5">Distributed</div>
          </div>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-600 to-sky-400" />
        </div>
      </div>
    </div>
  );
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
    <div className="glass-section rounded-[32px] sm:rounded-[34px] p-6 sm:p-9 lg:p-11">
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
            className="glass-pill inline-flex flex-wrap items-center gap-1 rounded-full p-1"
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
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
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
            className="glass-pill hover:bg-white dark:hover:bg-white/16 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-slate-900 dark:text-white transition-all hover:-translate-y-0.5"
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
                  <div>
                    <h3 className="text-base sm:text-[17px] font-extrabold tracking-tight text-slate-950 dark:text-white group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Circular Glass Action Buttons */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código de ${project.title} en GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 dark:bg-white/12 hover:bg-white dark:hover:bg-white/22 border border-white dark:border-white/20 text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white shadow-xs transition-all hover:scale-105"
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
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo en vivo de ${project.title}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-violet-600 hover:bg-slate-950 dark:hover:bg-violet-500 border border-white dark:border-violet-400/40 text-slate-900 dark:text-white hover:text-white shadow-sm transition-all hover:scale-105"
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
