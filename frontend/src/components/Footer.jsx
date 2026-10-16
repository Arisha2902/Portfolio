import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-[1.5px] border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div>
          <p className="font-display text-lg tracking-tight text-[var(--ink)]">ARISHA FIROZ</p>
          <p className="font-mono2 mt-1 text-[0.7rem] tracking-[0.12em] text-[var(--muted)]">
            © {year} ARISHA FIROZ. ALL SYSTEMS NOMINAL.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="font-mono2 flex items-center gap-4 text-xs font-bold tracking-widest">
            <li>
              <a href="#projects" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-[var(--accent)]">
                PROJECTS
              </a>
            </li>
            <li>
              <a href="#contact" className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-[var(--accent)]">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#home"
          className="btn-brutal btn-primary font-mono2 inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-bold tracking-widest"
          aria-label="Back to top"
        >
          <FiArrowUp size={14} aria-hidden="true" /> BACK TO TOP
        </a>
      </div>
    </footer>
  );
}
