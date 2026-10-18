import { FiCheckCircle } from "react-icons/fi";
import { accentVar, experience } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-[1400px] px-6 pb-14 pt-6 md:px-10 lg:px-16 lg:pb-16 lg:pt-6">
        <SectionLabel
          heading="Work Experience"
          headingId="experience-title"
          blurb="02 Internships in responsive interfaces and API integration."
        />

        <div className="mt-8 space-y-5">
          {experience.map((job, i) => {
            const tint = accentVar[job.accent];
            return (
              <Reveal key={job.company} delay={i * 0.06}>
                <article className="card card-hover p-5 sm:p-6" style={{ "--tint": tint }}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className={`tile ${
                          job.index === "01" ? "grad-cyan-blue" : "grad-purple-indigo"
                        } h-14 w-14 shrink-0 text-lg`}
                      >
                        {job.index}
                      </span>
                      <div>
                        <h3 className="h-title text-xl text-[var(--ink)]">{job.role}</h3>
                        <p className="mt-1 text-sm font-medium text-[var(--muted)]">{job.company}</p>
                        <p className="mono mt-1.5 text-xs font-bold uppercase tracking-[0.1em]" style={{ color: tint }}>
                          {job.period} · {job.duration}
                        </p>
                      </div>
                    </div>
                    <ul
                      className="flex max-w-xs flex-wrap justify-end gap-1.5"
                      aria-label={`${job.company} tags`}
                    >
                      {job.tags.map((t) => (
                        <li key={t} className="chip chip-accent" style={{ "--tint": tint }}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--muted)]">
                        <FiCheckCircle
                          size={16}
                          aria-hidden="true"
                          className="mt-0.5 shrink-0"
                          style={{ color: tint }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-3">
                    <hr className="rule flex-1" aria-hidden="true" />
                    <span className="pill-tint" style={{ "--tint": tint }}>
                      {job.status}
                    </span>
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