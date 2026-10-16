import { FiCheck } from "react-icons/fi";
import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionLabel index="SEC_03" title="WORK EXPERIENCE" blurb="Internships in responsive interfaces and API integration." />
        <h2 id="experience-title" className="sr-only">Work Experience</h2>

        <div className="mt-8 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <article className="brutal brutal-hover rounded-md p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className={`font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border-[1.5px] border-[var(--line)] text-lg ${
                        job.current ? "bg-[var(--accent)] text-white" : "bg-[var(--chip)] text-[var(--ink)]"
                      }`}
                    >
                      {job.index}
                    </span>
                    <div>
                      <h3 className="font-grotesk text-xl font-bold uppercase tracking-tight text-[var(--ink)]">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-[var(--muted)]">{job.company}</p>
                      <p className="font-mono2 mt-1.5 text-xs font-bold tracking-wider text-[var(--accent)]">
                        {job.period} · {job.duration}
                      </p>
                    </div>
                  </div>
                  <ul className="flex max-w-xs flex-wrap justify-end gap-1.5" aria-label={`${job.company} tags`}>
                    {job.tags.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--ink)]">
                      <FiCheck size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-[var(--accent)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <hr className="rule mt-5" aria-hidden="true" />
                <p className="font-mono2 mt-3 text-[0.68rem] font-bold tracking-[0.12em] text-[var(--muted)]">
                  {job.status}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
