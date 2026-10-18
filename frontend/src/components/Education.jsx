import { FiAward, FiBookOpen, FiStar } from "react-icons/fi";
import { accentVar, certificationStrip, degrees, honors } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-6">
        <SectionLabel
          heading="Education & Achievements"
          headingId="education-title"
          blurb="Academic degrees and competitive record."
        />

        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">
          {/* Left: degrees */}
          <div className="flex h-full flex-col gap-4">
            {degrees.map((d, i) => (
              <Reveal key={d.degree} delay={i * 0.06}>
                <article className="card card-hover p-5" style={{ "--tint": accentVar.cyan }}>
                  <div className="flex items-start gap-3.5">
                    <span className="icon-tile h-11 w-11 shrink-0">
                      <FiBookOpen size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="h-title text-lg leading-snug text-[var(--ink)]">{d.degree}</h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{d.school}</p>
                      <p className="mono mt-2.5 text-[0.7rem] font-bold uppercase tracking-[0.1em]" style={{ color: accentVar.cyan }}>
                        {d.period}
                      </p>
                      <ul className="mt-2.5 flex flex-wrap gap-1.5">
                        {d.badges.map((b) => (
                          <li key={b} className="pill-tint" style={{ "--tint": accentVar.cyan }}>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.12} className="mt-auto">
              <p className="card mono px-4 py-3.5 text-center text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                Certification // {certificationStrip}
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
                  <article
                    className="card card-hover flex h-full items-start gap-3.5 p-4"
                    style={
                      h.featured
                        ? { "--tint": accentVar.purple, backgroundImage: "var(--grad-purple-indigo)", border: "none" }
                        : { "--tint": accentVar.pink }
                    }
                  >
                    <span
                      className={`icon-tile h-9 w-9 shrink-0 ${
                        h.featured ? "border-white/25 bg-white/15 text-white" : ""
                      }`}
                    >
                      {i === 0 ? <FiStar size={16} aria-hidden="true" /> : <FiAward size={16} aria-hidden="true" />}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`h-title text-sm ${h.featured ? "text-white" : "text-[var(--ink)]"}`}>
                          {h.title}
                        </h3>
                        {h.badge ? (
                          <span
                            className={`mono rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-[0.1em] ${
                              h.featured
                                ? "grad-brand text-white"
                                : "pill-tint"
                            }`}
                            style={h.featured ? undefined : { "--tint": accentVar.pink }}
                          >
                            {h.badge}
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={`mt-1.5 text-[0.83rem] leading-relaxed ${
                          h.featured ? "text-white/75" : "text-[var(--muted)]"
                        }`}
                      >
                        {h.detail}
                      </p>
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