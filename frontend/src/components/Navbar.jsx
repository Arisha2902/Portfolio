import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiUser, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const isDark = theme === "dark";

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-[1.5px] border-[var(--line)] bg-[var(--bg)]">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6"
      >
        {/* Left: brand */}
        <a href="#home" className="group rounded-sm leading-none focus-visible:outline-[var(--accent)]">
          <span className="font-display block text-sm tracking-tight sm:text-base">
            {profile.brand}
          </span>
          <span className="font-mono2 mt-1 block text-[0.65rem] uppercase tracking-[0.14em] text-[var(--muted)]">
            {profile.brandSubtitle}
          </span>
        </a>

        {/* Center: pill nav */}
        <ul className="hidden items-center gap-1 rounded-full border-[1.5px] border-[var(--line)] bg-[var(--surface)] px-2 py-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`font-mono2 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors focus-visible:outline-[var(--accent)] ${
                  active === link.href
                    ? "bg-[var(--line)] text-[var(--bg)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: toggle, resume, user, burger */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            className="btn-brutal inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface)] text-[var(--ink)]"
          >
            {isDark ? <FiSun size={17} aria-hidden="true" /> : <FiMoon size={17} aria-hidden="true" />}
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="btn-brutal btn-primary font-mono2 hidden rounded-md px-4 py-2.5 text-xs font-bold tracking-widest sm:inline-flex"
          >
            RESUME
          </a>
          <a
            href="#home"
            aria-label="Arisha Firoz profile — back to top"
            className="btn-brutal hidden h-10 w-10 items-center justify-center rounded-md bg-[var(--surface)] text-[var(--ink)] sm:inline-flex"
          >
            <FiUser size={17} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="btn-brutal inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--surface)] text-[var(--ink)] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={19} aria-hidden="true" /> : <FiMenu size={19} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Thin status bar */}
      <div className="border-t-[1.5px] border-[var(--line)]" aria-label="System status">
        <div className="font-mono2 mx-auto flex w-full max-w-6xl items-center gap-x-4 gap-y-1 overflow-x-auto whitespace-nowrap px-4 py-1.5 text-[0.65rem] font-medium tracking-[0.1em] text-[var(--muted)] sm:px-6">
          <span className="inline-flex items-center gap-1.5 text-[var(--ink)]">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
            {profile.statusBar.status}
          </span>
          <span aria-hidden="true">·</span>
          <span>{profile.statusBar.location}</span>
          <span aria-hidden="true">·</span>
          <span className="hidden sm:inline">{profile.statusBar.doc}</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span aria-live="polite">MODE: {isDark ? "DARK" : "LIGHT"}</span>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" id="mobile-menu" className="border-t-[1.5px] border-[var(--line)] bg-[var(--bg)] lg:hidden">
          <ul className="mx-auto w-full max-w-6xl space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`font-mono2 block rounded-md border-[1.5px] px-3 py-2.5 text-sm font-bold uppercase tracking-wide focus-visible:outline-[var(--accent)] ${
                    active === link.href
                      ? "border-[var(--line)] bg-[var(--line)] text-[var(--bg)]"
                      : "border-transparent text-[var(--muted)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:hidden">
              <a
                href={profile.resumeUrl}
                download
                className="btn-brutal btn-primary font-mono2 inline-flex rounded-md px-4 py-2.5 text-xs font-bold tracking-widest"
              >
                RESUME
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
