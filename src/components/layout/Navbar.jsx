import { useEffect, useMemo, useState } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { navItems, profile } from '../../data/portfolioData';
import { useActiveSection } from '../../hooks/useActiveSection';

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const ids = useMemo(() => navItems.map((item) => item.toLowerCase()), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-[60] border-b border-white/10 bg-night/70 backdrop-blur-2xl light:border-slate-900/10 light:bg-white/75">
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 font-black" aria-label="Go to home">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyanGlow text-night shadow-neon">AK</span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition hover:text-cyanGlow ${
                  active === id ? 'bg-cyanGlow/10 text-cyanGlow' : 'text-slate-300 light:text-slate-700'
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cyanGlow transition hover:bg-cyanGlow hover:text-night light:border-slate-900/10 light:bg-slate-900/5"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            title="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-cyanGlow lg:hidden light:border-slate-900/10 light:bg-slate-900/5"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-x-0 top-16 z-50 border-b border-white/10 bg-night/95 p-5 backdrop-blur-xl transition lg:hidden light:bg-white/95 ${
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="grid gap-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-slate-200 hover:bg-cyanGlow/10 hover:text-cyanGlow light:text-slate-700"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
