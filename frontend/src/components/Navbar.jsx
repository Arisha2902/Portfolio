import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      {/* Floating glass bar — compacts once the page is scrolled */}
      <nav
        aria-label="Primary"
        className={`glass-bar mx-auto flex w-full max-w-[1400px] flex-wrap items-center justify-between gap-x-3 gap-y-2 px-6 transition-all duration-300 md:px-10 lg:px-16 ${
          scrolled ? "is-scrolled py-1.5" : "py-2.5"
        }`}
      >
        {/* Left: brand */}
        <a href="#home" className="order-1 flex min-w-0 items-center gap-2.5">
          <span
            className={`brand-tile shrink-0 transition-all duration-300 ${
              scrolled ? "h-8 w-8 text-xs" : "h-9 w-9 text-sm"
            }`}
            aria-hidden="true"
          >
            {profile.brand}
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="h-title flex items-center gap-2 text-[0.95rem]">
              {profile.brandName}
              {/* <span className="pill-outline">{profile.availabilityPill}</span> */}
            </span>
            {/* <span className="mono mt-0.5 block truncate text-[0.62rem] uppercase tracking-[0.12em] text-[var(--faint)]">
              {profile.brandSubtitle}
            </span> */}
          </span>
        </a>

        {/* Right: hire, resume, theme toggle, burger (phone/tablet only) */}
        <div className="order-2 flex shrink-0 items-center gap-2 lg:order-3">
          <a href="#contact" className="btn btn-hire px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.1em]">
            {profile.hireLabel}
          </a>
          <a
            href={profile.resumeUrl}
            download={profile.resumeFile}
            aria-label="Download resume (PDF)"
            className={`icon-btn transition-all duration-300 ${scrolled ? "h-8 w-8" : "h-9 w-9"}`}
          >
            <FiDownload size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={isDark}
            className={`icon-btn transition-all duration-300 ${scrolled ? "h-8 w-8" : "h-9 w-9"}`}
          >
            {isDark ? <FiSun size={16} aria-hidden="true" /> : <FiMoon size={16} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className={`icon-btn lg:hidden ${scrolled ? "h-8 w-8" : "h-9 w-9"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={18} aria-hidden="true" /> : <FiMenu size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* Right: pill nav (laptop and up) */}
        <ul className="order-3 hidden w-full min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-[var(--card-border)] bg-[var(--chip-bg)] p-1 lg:order-2 lg:ml-auto lg:flex lg:w-auto lg:overflow-visible">
          {navLinks.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                aria-current={active === link.href ? "true" : undefined}
                className={`mono block rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.06em] transition-colors ${
                  active === link.href
                    ? "grad-cyan-blue text-[var(--tile-ink)] shadow-[0_8px_20px_-10px_rgba(34,211,238,0.7)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <nav
          aria-label="Mobile"
          id="mobile-menu"
          className="glass-bar mx-auto mt-2 w-full max-w-[1400px] px-6 py-3 md:px-10 lg:px-16 lg:hidden"
        >
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "true" : undefined}
                  className={`mono block rounded-full px-3.5 py-2 text-xs font-bold uppercase tracking-[0.08em] ${
                    active === link.href
                      ? "grad-cyan-blue text-[var(--tile-ink)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={profile.resumeUrl}
                download={profile.resumeFile}
                className="btn btn-glass px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.1em]"
              >
                <FiDownload size={14} aria-hidden="true" /> {profile.secondaryCta.label}
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-hire px-3.5 py-2 text-[0.7rem] uppercase tracking-[0.1em]"
              >
                {profile.hireLabel}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}