import { FiCpu, FiDatabase, FiCode, FiGlobe, FiTool, FiZap } from "react-icons/fi";
import { skills } from "../data/portfolio";
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
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionLabel index="SEC_02" title="CAPABILITY MATRIX" blurb="Technical skills, grouped by system layer." />
        <h2 id="skills-title" className="sr-only">Technical Skills</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((cat, i) => {
            const Icon = iconFor[cat.id] ?? FiCode;
            return (
              <Reveal key={cat.id} delay={(i % 3) * 0.06} className="h-full">
                <article className="brutal brutal-hover flex h-full flex-col rounded-md p-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--chip)] text-[var(--ink)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span className="font-mono2 text-xs font-bold tracking-[0.15em] text-[var(--muted)]">
                      CAT // {cat.id}
                    </span>
                  </div>
                  <h3 className="font-grotesk mt-4 text-xl font-bold uppercase tracking-tight text-[var(--ink)]">
                    {cat.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">{cat.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${cat.title} items`}>
                    {cat.items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <hr className="rule mt-4" aria-hidden="true" />
                  <p className="font-mono2 mt-3 text-[0.68rem] font-bold tracking-[0.12em] text-[var(--accent)]">
                    {cat.footer}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
