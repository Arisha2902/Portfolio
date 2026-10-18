import { FiExternalLink, FiGithub } from "react-icons/fi";
import { accentVar, projects, rulStats } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const hasUrl = (url) => typeof url === "string" && url.trim() !== "";

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

function ChatVisual({ tint }) {
  const moods = ["Happy", "Sad", "Inspiring", "Romantic"];
  return (
    <div className="mini space-y-2 p-3" aria-hidden="true">
      <p className="mono w-fit max-w-[78%] rounded-2xl rounded-bl-sm border border-white/10 bg-white/5 px-3 py-1.5 text-[0.66rem] text-[#d7deee]">
        Feeling introspective…
      </p>
      <p
        className="mono ml-auto w-fit max-w-[86%] rounded-2xl rounded-br-sm px-3 py-1.5 text-[0.66rem]"
        style={{ background: tint, color: "#04121a" }}
      >
        Norwegian Wood — melancholic, introspective
      </p>
      <div className="flex flex-wrap gap-1">
        {moods.map((m) => (
          <span
            key={m}
            className="mono rounded-full border border-white/12 px-2 py-0.5 text-[0.58rem] text-[var(--faint)]"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

function AlertVisual({ tint }) {
  const rows = [
    { level: "Severe", msg: "Flash flood warning", tone: tint },
    { level: "Warning", msg: "Evacuation route update", tone: "#f2b01e" },
    { level: "Advisory", msg: "Shelter capacity open", tone: "#22d3ee" },
  ];
  return (
    <div className="mini space-y-1.5 p-3" aria-hidden="true">
      {rows.map((r) => (
        <div
          key={r.level}
          className="mono flex items-center gap-2 rounded-[var(--radius-sm)] bg-white/[0.04] py-1.5 pl-2 pr-3 text-[0.62rem]"
          style={{ boxShadow: `inset 2px 0 0 0 ${r.tone}` }}
        >
          <span className="font-bold uppercase tracking-[0.08em]" style={{ color: r.tone }}>
            {r.level}
          </span>
          <span className="truncate text-[#c3cbe0]">{r.msg}</span>
        </div>
      ))}
    </div>
  );
}

function CrowdVisual({ tint }) {
  const bars = [4, 7, 9, 12];
  return (
    <div className="mini p-3" aria-hidden="true">
      <div className="flex h-16 items-end gap-2">
        {bars.map((v) => (
          <div
            key={v}
            className="mono flex-1 rounded-t-[4px] text-center text-[0.55rem]"
            style={{
              height: `${(v / 12) * 100}%`,
              background: v > 10 ? tint : "rgba(255,255,255,0.16)",
              color: v > 10 ? "#04121a" : "#c3cbe0",
            }}
          >
            {v}
          </div>
        ))}
      </div>
      <div className="mono mt-2 flex items-center justify-between text-[0.58rem] uppercase tracking-[0.08em]">
        <span className="text-[var(--faint)]">Threshold 10</span>
        <span className="font-bold" style={{ color: tint }}>
          Crowd alert · 12 people
        </span>
      </div>
    </div>
  );
}

const visualFor = {
  P_01: (tint) => <PipelineVisual tint={tint} />,
  P_02: () => <SocketVisual />,
  P_03: () => <RulVisual />,
  P_04: () => <CartLogVisual />,
  P_05: (tint) => <ChatVisual tint={tint} />,
  P_06: (tint) => <AlertVisual tint={tint} />,
  P_07: (tint) => <CrowdVisual tint={tint} />,
};

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-6">
        <SectionLabel
          heading="Featured Projects"
          headingId="projects-title"
          blurb="Full-stack systems, real-time architecture, and applied machine learning."
        />

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

                    <div className="mt-4">{visualFor[p.id] ? visualFor[p.id](tint) : <CartLogVisual />}</div>

                    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-[var(--muted)] marker:text-[var(--faint)]">
                      {p.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                      {hasUrl(p.demoUrl) ? (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${p.title} live demo (opens in a new tab)`}
                          className="btn btn-accent px-4 py-2.5 text-xs uppercase tracking-[0.1em]"
                        >
                          <FiExternalLink size={14} aria-hidden="true" /> Live Demo
                        </a>
                      ) : null}
                      {hasUrl(p.githubUrl) ? (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${p.title} source code on GitHub (opens in a new tab)`}
                          className="btn btn-glass px-4 py-2.5 text-xs uppercase tracking-[0.1em]"
                        >
                          <FiGithub size={14} aria-hidden="true" /> GitHub
                        </a>
                      ) : null}
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