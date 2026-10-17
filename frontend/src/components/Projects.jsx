import { FiExternalLink, FiGithub } from "react-icons/fi";
import { accentVar, projects, rulStats } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

function PipelineVisual({ tint }) {
  const nodes = ["PR Webhook", "Static AST", "Security Audit", "Executive Bot"];
  return (
    <div className="mini p-3" aria-hidden="true">
      <div className="flex flex-wrap items-center gap-1.5">
        {nodes.map((n, i) => (
          <span key={n} className="flex items-center gap-1.5">
            {i > 0 ? <span className="mono text-xs font-bold text-[var(--faint)]">→</span> : null}
            <span
              className="mono rounded-full px-2.5 py-1 text-[0.62rem] font-bold"
              style={
                n === "Security Audit"
                  ? { background: tint, color: "#04121a" }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#d7deee",
                    }
              }
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
  const blocks = ["Host Control", "Socket.IO Core", "N Participants"];
  return (
    <div className="mini grid grid-cols-3 gap-2 p-3" aria-hidden="true">
      {blocks.map((n, i) => (
        <div
          key={n}
          className={`mono rounded-[var(--radius-sm)] px-2 py-3 text-center text-[0.62rem] font-bold leading-tight ${
            i === 1
              ? "grad-cyan-blue text-[#04121a]"
              : "border border-white/10 bg-white/5 text-[#c3cbe0]"
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
    <div
      className="mini grid grid-cols-3 gap-px overflow-hidden"
      role="img"
      aria-label="RUL results: baseline RMSE 43.87, optimized RMSE 35.32, projected cost saved Rs. 21.7 Cr"
    >
      {rulStats.map((s) => (
        <div key={s.label} className="bg-white/[0.03] px-2 py-3 text-center">
          <p className="h-title text-sm text-[var(--ink)] sm:text-base">{s.value}</p>
          <p className="mono mt-1 text-[0.58rem] uppercase tracking-[0.08em] text-[var(--faint)]">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function CartLogVisual() {
  return (
    <div className="mini mono overflow-x-auto p-3 text-[0.7rem] leading-relaxed" aria-hidden="true">
      <p>
        <span className="text-emerald-300">POST</span> <span className="text-white">/cart/update/</span>{" "}
        <span className="text-[var(--faint)]">200</span>
      </p>
      <p className="text-[var(--faint)]">{'{ "qty": 2, "total": ... }'}</p>
      <p>
        <span className="text-emerald-300">POST</span> <span className="text-white">/checkout/</span>{" "}
        <span className="text-[var(--faint)]">200</span>
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionLabel
          index="SEC_04"
          title="Featured Projects"
          blurb="Full-stack systems, real-time architecture, and applied machine learning."
        />
        <h2 id="projects-title" className="sr-only">Featured Projects</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const tint = accentVar[p.accent];
            return (
              <Reveal key={p.id} delay={(i % 2) * 0.07} className="h-full">
                <article className="card card-hover flex h-full flex-col overflow-hidden" style={{ "--tint": tint }}>
                  <div className="strip flex items-center justify-between gap-3 px-5 py-2.5">
                    <span className="mono text-[0.68rem] font-bold uppercase tracking-[0.12em]" style={{ color: tint }}>
                      {p.id} // {p.category}
                    </span>
                    <span className="pill-outline" style={{ color: tint, borderColor: tint }}>
                      {p.badge}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="h-title text-xl text-[var(--ink)]">{p.title}</h3>
                    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={`${p.title} tech stack`}>
                      {p.stack.map((t) => (
                        <li key={t} className="chip chip-accent" style={{ "--tint": tint }}>
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4">
                      {p.id === "P_01" ? (
                        <PipelineVisual tint={tint} />
                      ) : p.id === "P_02" ? (
                        <SocketVisual />
                      ) : p.id === "P_03" ? (
                        <RulVisual />
                      ) : (
                        <CartLogVisual />
                      )}
                    </div>

                    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--faint)]">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      <a
                        href={p.demoUrl}
                        aria-label={`${p.title} live demo (placeholder link)`}
                        className="btn btn-accent px-4 py-2.5 text-xs uppercase tracking-[0.1em]"
                      >
                        <FiExternalLink size={14} aria-hidden="true" /> Live Demo
                      </a>
                      <a
                        href={p.githubUrl}
                        aria-label={`${p.title} source code on GitHub (placeholder link)`}
                        className="btn btn-glass px-4 py-2.5 text-xs uppercase tracking-[0.1em]"
                      >
                        <FiGithub size={14} aria-hidden="true" /> GitHub
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}