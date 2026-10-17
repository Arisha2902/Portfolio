import { FiArrowUp } from "react-icons/fi";
import { footerCopy } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-6 px-4 pb-6 sm:px-6">
      <div className="card mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row">
        <div>
          <p className="h-title text-lg text-[var(--ink)]">{footerCopy.name}</p>
          <p className="mono mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-[var(--faint)]">
            © {year} {footerCopy.name}. {footerCopy.line}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="mono flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em]">
            {footerCopy.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="pill-outline px-3 py-1.5 text-[0.65rem] text-[var(--muted)] transition-colors hover:text-[var(--ink)]">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#home" className="btn btn-glass px-4 py-2 text-xs uppercase tracking-[0.1em]" aria-label="Back to top">
          <FiArrowUp size={14} aria-hidden="true" /> {footerCopy.backToTop}
        </a>
      </div>
    </footer>
  );
}