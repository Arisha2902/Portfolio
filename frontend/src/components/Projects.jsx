import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, rulStats } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

function PipelineVisual() {
  const nodes = ["PR Webhook", "Static AST", "Security Audit", "Executive Bot"];
  return (
    <div className="rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--chip)] p-3" aria-hidden="true">
      <div className="flex flex-wrap items-center gap-1.5">
        {nodes.map((n, i) => (
          <span key={n} className="flex items-center gap-1.5">
            {i > 0 ? <span className="font-mono2 text-xs font-bold text-[var(--muted)]">→</span> : null}
            <span
              className={`font-mono2 rounded-sm border px-2 py-1 text-[0.65rem] font-bold ${
                n === "Security Audit"
                  ? "border-[var(--red)] bg-[var(--red)] text-white"
                  : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
              }`}
            >
              {n}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SocketVisual() {
  return (
    <div className="grid grid-cols-3 gap-2" aria-hidden="true">
      {["Host Control", "Socket.IO Core", "N Participants"].map((n, i) => (
        <div
          key={n}
          className={`font-mono2 rounded-sm border-[1.5px] border-[var(--line)] px-2 py-2.5 text-center text-[0.65rem] font-bold leading-tight ${
            i === 1 ? "bg-[var(--accent)] text-white" : "bg-[var(--chip)] text-[var(--ink)]"
          }`}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

function RulVisual() {
  return (
    <div className="grid grid-cols-3 gap-2" role="img" aria-label="RUL results: baseline RMSE 43.87, optimized RMSE 35.32, projected cost saved Rs. 21.7 Cr">
      {rulStats.map((s) => (
        <div key={s.label} className="rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--surface)] px-2 py-2.5 text-center">
          <p className="font-display text-sm sm:text-base text-[var(--ink)]">{s.value}</p>
          <p className="font-mono2 mt-1 text-[0.6rem] uppercase tracking-wide text-[var(--muted)]">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function CartLogVisual() {
  return (
    <div className="terminal font-mono2 overflow-x-auto rounded-sm p-3 text-[0.7rem] leading-relaxed" aria-hidden="true">
      <p><span className="text-emerald-300">POST</span> <span className="text-white">/cart/update/</span> <span className="text-[#8b93a7]">200</span></p>
      <p className="text-[#8b93a7]">{'{ "qty": 2, "total": ... }'}</p>
      <p><span className="text-emerald-300">POST</span> <span className="text-white">/checkout/</span> <span className="text-[#8b93a7]">200</span></p>
    </div>
  );
}

const visualFor = {
  P_01: <PipelineVisual />,
  P_02: <SocketVisual />,
  P_03: <RulVisual />,
  P_04: <CartLogVisual />,
};

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionLabel index="SEC_04" title="FEATURED PROJECTS" blurb="Full-stack systems, real-time architecture, and applied machine learning." />
        <h2 id="projects-title" className="sr-only">Featured Projects</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.07} className="h-full">
              <article className="brutal brutal-hover flex h-full flex-col overflow-hidden rounded-md">
                <div className="flex items-center justify-between border-b-[1.5px] border-[var(--line)] bg-[var(--chip)] px-4 py-2">
                  <span className="font-mono2 text-[0.7rem] font-bold tracking-[0.12em] text-[var(--ink)]">
                    {p.id} // {p.category}
                  </span>
                  <span className="font-mono2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-2.5 py-0.5 text-[0.65rem] font-bold tracking-wide text-[var(--ink)]">
                    {p.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-grotesk text-xl font-bold uppercase tracking-tight text-[var(--ink)]">
                    {p.title}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${p.title} tech stack`}>
                    {p.stack.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">{visualFor[p.id]}</div>

                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--muted)]">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-3 pt-5">
                    <a
                      href={p.demoUrl}
                      aria-label={`${p.title} live demo (placeholder link)`}
                      className="btn-brutal btn-primary font-mono2 inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-bold tracking-widest"
                    >
                      <FiExternalLink size={14} aria-hidden="true" /> LIVE DEMO
                    </a>
                    <a
                      href={p.githubUrl}
                      aria-label={`${p.title} source code on GitHub (placeholder link)`}
                      className="btn-brutal font-mono2 inline-flex items-center gap-1.5 rounded-md bg-[var(--surface)] px-4 py-2 text-xs font-bold tracking-widest text-[var(--ink)]"
                    >
                      <FiGithub size={14} aria-hidden="true" /> GITHUB
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
