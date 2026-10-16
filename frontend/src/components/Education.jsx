import { FiAward, FiBookOpen, FiStar } from "react-icons/fi";
import { certificationStrip, degrees, honors } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionLabel index="SEC_05" title="EDUCATION & HONORS" blurb="Academic degrees and competitive record." />
        <h2 id="education-title" className="sr-only">Education and Honors</h2>

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">
          {/* Left: degrees */}
          <div className="flex h-full flex-col gap-4">
            {degrees.map((d, i) => (
              <Reveal key={d.degree} delay={i * 0.06}>
                <article className="brutal brutal-hover rounded-md p-5">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--chip)] text-[var(--ink)]">
                      <FiBookOpen size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-grotesk text-lg font-bold uppercase leading-snug tracking-tight text-[var(--ink)]">
                        {d.degree}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{d.school}</p>
                      <p className="font-mono2 mt-2 text-xs font-bold tracking-wider text-[var(--accent)]">
                        {d.period} · <span className="text-[var(--ink)]">{d.detail}</span>
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.12} className="mt-auto">
              <p className="brutal font-mono2 rounded-md px-4 py-3 text-center text-xs font-bold tracking-[0.12em] text-[var(--ink)]">
                CERTIFICATION // {certificationStrip}
              </p>
            </Reveal>
          </div>

          {/* Right: honors grid */}
          <div className="h-full">
            <div className="grid h-full content-start gap-3 sm:grid-cols-2">
              {honors.map((h, i) => (
                <Reveal
                  key={h.title}
                  delay={(i % 2) * 0.06}
                  className={`h-full ${i === honors.length - 1 ? "sm:col-span-2" : ""}`}
                >
                  <article className="brutal brutal-hover flex h-full items-start gap-3 rounded-md p-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[var(--accent)] text-white">
                      {i === 0 ? (
                        <FiStar size={16} aria-hidden="true" />
                      ) : (
                        <FiAward size={16} aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <h3 className="font-grotesk text-sm font-bold uppercase tracking-tight text-[var(--ink)]">
                        {h.title}
                      </h3>
                      <p className="mt-1 text-[0.83rem] leading-relaxed text-[var(--muted)]">{h.detail}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
