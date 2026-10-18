import { FiCode, FiCpu, FiDatabase, FiGlobe, FiTool, FiZap } from "react-icons/fi";
import { accentVar, skills } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const iconFor = {
  "01": FiCode,
  "02": FiCpu,
  "03": FiGlobe,
  "04": FiDatabase,
  "05": FiTool,
  "06": FiZap,
};

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-6">
        <SectionLabel
          heading="Technical Skills"
          headingId="skills-title"
          blurb="Technical skills, grouped by system layer."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = iconFor[cat.id] ?? FiCode;
            const tint = accentVar[cat.accent];
            return (
              <Reveal key={cat.id} delay={(i % 3) * 0.06} className="h-full">
                <article className="card card-hover flex h-full flex-col p-5" style={{ "--tint": tint }}>
                  <div className="flex items-start justify-between gap-3">
                    <span className="mono pt-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--faint)]">
                      Cat // {cat.id}
                    </span>
                    <span className="icon-tile h-10 w-10 shrink-0">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="h-title mt-4 text-xl text-[var(--ink)]">{cat.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{cat.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${cat.title} items`}>
                    {cat.items.map((item) => (
                      <li key={item} className="chip chip-accent" style={{ "--tint": tint }}>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <hr className="rule mt-auto pt-4" aria-hidden="true" />
                  {cat.footer ? (
                    <p className="mono mt-3 flex items-baseline justify-between gap-3 text-[0.68rem] uppercase tracking-[0.08em]">
                      <span className="text-[var(--faint)]">{cat.footer.label}</span>
                      <span className="font-bold" style={{ color: tint }}>
                        {cat.footer.value}
                      </span>
                    </p>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}