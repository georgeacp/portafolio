import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { NavItem } from '../../data/profile';
import BrandLogo from '../ui/BrandLogo';

interface NavbarIslandProps {
  navItems: NavItem[];
  monogram: string;
  name: string;
  role: string;
  talkCta: {
    label: string;
    href: string;
  };
}

export default function NavbarIsland({
  navItems,
  name,
  role,
  talkCta,
}: NavbarIslandProps) {
  const [activeId, setActiveId] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    // Sync initial theme state with <html class="dark">
    const root = document.documentElement;
    setIsDark(root.classList.contains('dark'));

    const handleScroll = () => {
      setScrolled(window.scrollY > 16);

      const sectionPositions = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: item.id, top: rect.top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current = sectionPositions.find(
        (sec) => sec.top <= 240 && sec.top >= -600
      );
      if (current) {
        setActiveId(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    const root = document.documentElement;
    if (nextDark) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    const metaTheme = document.getElementById('theme-color-meta');
    if (metaTheme) {
      metaTheme.setAttribute('content', nextDark ? '#080711' : '#F2F3FA');
    }
    const faviconEl = document.getElementById('site-favicon') as HTMLLinkElement | null;
    if (faviconEl) {
      faviconEl.href = nextDark ? '/favicon-dark.svg' : '/favicon-light.svg';
    }
  };

  return (
    <header className="sticky top-4 z-50 mb-5">
      <nav
        aria-label="Navegación principal"
        className={`glass-pill rounded-full px-3.5 sm:px-5 py-2.5 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#17142E]/88 shadow-[0_16px_40px_-10px_rgba(79,70,229,0.14)] dark:shadow-[0_16px_44px_-10px_rgba(0,0,0,0.65)]'
            : ''
        }`}
      >
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          {/* Left: Monogram circle + Name & Role */}
          <a
            href="#home"
            onClick={() => setActiveId('home')}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/95 dark:bg-[#131127]/90 shadow-[0_4px_14px_rgba(15,23,42,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-white dark:border-white/18 transition-transform duration-200 group-hover:scale-105">
              <BrandLogo className="h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-[15px] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {name}
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                {role}
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav Links with floating pill + violet indicator dot */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    onClick={() => setActiveId(item.id)}
                    className={`relative z-10 inline-flex flex-col items-center px-4 py-1.5 text-xs xl:text-[13px] font-semibold transition-colors duration-200 rounded-full ${
                      isActive
                        ? 'text-slate-950 dark:text-white'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-white dark:bg-white/14 shadow-[0_4px_14px_rgba(99,102,241,0.12)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] border border-white dark:border-white/20"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-dot"
                        className="mt-0.5 h-1 w-1 rounded-full bg-violet-600 dark:bg-violet-400"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right: Dark/Light Theme Toggle Button + "Hablemos ↗" Pill CTA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/95 dark:bg-white/12 hover:bg-white dark:hover:bg-white/20 border border-white dark:border-white/20 text-slate-800 dark:text-amber-300 shadow-[0_6px_18px_-4px_rgba(79,70,229,0.16)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isDark ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -65, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 65, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex items-center justify-center"
                  >
                    <Sun className="h-4 w-4 text-amber-300" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 65, scale: 0.5, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: -65, scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex items-center justify-center"
                  >
                    <Moon className="h-4 w-4 text-violet-700" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* "Hablemos ↗" CTA Pill */}
            <a
              href={talkCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-white/95 dark:bg-white/14 hover:bg-white dark:hover:bg-white/22 border border-white dark:border-white/20 px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white shadow-[0_6px_20px_-4px_rgba(79,70,229,0.14)] transition-all duration-200 hover:-translate-y-0.5 active:scale-98"
            >
              <span>{talkCta.label}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-slate-700 dark:text-violet-300" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-full bg-white/90 dark:bg-white/12 border border-white dark:border-white/20 text-slate-800 dark:text-white shadow-sm"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Glass Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="glass-section mt-2.5 rounded-3xl p-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveId(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-white dark:bg-white/14 text-slate-950 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
