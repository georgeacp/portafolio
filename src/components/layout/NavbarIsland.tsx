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

    const syncActiveSection = () => {
      setScrolled(window.scrollY > 16);

      // Keep the last section that has crossed the reading line active. The
      // previous overlapping range could keep an earlier link (usually Home)
      // active while the next section was already visible.
      const readingLine = window.scrollY + Math.min(180, window.innerHeight * 0.25);
      let currentId = navItems[0]?.id ?? 'home';

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= readingLine) {
          currentId = item.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener('scroll', syncActiveSection, { passive: true });
    window.addEventListener('hashchange', syncActiveSection);
    syncActiveSection();
    return () => {
      window.removeEventListener('scroll', syncActiveSection);
      window.removeEventListener('hashchange', syncActiveSection);
    };
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
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Monogram circle + Name & Role */}
          <a
            href="#home"
            onClick={() => setActiveId('home')}
            className="group flex min-w-0 items-center gap-2 sm:gap-3 focus:outline-none"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/95 dark:bg-[#131127]/90 shadow-[0_4px_14px_rgba(15,23,42,0.08)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-white dark:border-white/18 transition-transform duration-200 group-hover:scale-105">
              <BrandLogo className="h-7 w-7" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="text-[13px] min-[400px]:text-sm sm:text-[15px] font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                {name}
              </span>
              <span className="max-[380px]:hidden text-[10px] min-[400px]:text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
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
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/95 dark:bg-white/12 hover:bg-white dark:hover:bg-white/20 border border-white dark:border-white/20 text-slate-800 dark:text-amber-300 shadow-[0_6px_18px_-4px_rgba(79,70,229,0.16)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
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
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir WhatsApp para escribir un mensaje"
              className="max-[480px]:hidden inline-flex min-h-11 items-center gap-2 rounded-full bg-white/95 dark:bg-white/14 hover:bg-white dark:hover:bg-white/22 border border-white dark:border-white/20 px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-bold text-slate-900 dark:text-white shadow-[0_6px_20px_-4px_rgba(79,70,229,0.14)] transition-all duration-200 hover:-translate-y-0.5 active:scale-98"
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
              className="inline-flex lg:hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 dark:bg-white/12 border border-white dark:border-white/20 text-slate-800 dark:text-white shadow-sm"
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
                      className={`flex min-h-11 items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
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
            <a
              href={talkCta.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-violet-700 dark:bg-white dark:text-slate-950 dark:hover:bg-violet-200"
            >
              <span>{talkCta.label}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
