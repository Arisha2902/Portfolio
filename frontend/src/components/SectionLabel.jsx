import Reveal from "./Reveal";

// Large visible heading + rule + optional blurb.
// Heading text comes from the section itself; the light skin uppercases it via
// the --heading-transform token, the dark skin renders it as written.
export default function SectionLabel({ heading, headingId, blurb }) {
  return (
    <Reveal>
      <div>
        {heading ? (
          <h2 id={headingId} className="h-display text-3xl text-[var(--ink)] sm:text-4xl">
            {heading}
          </h2>
        ) : null}

        <hr className="rule mt-4" aria-hidden="true" />

        {blurb ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{blurb}</p>
        ) : null}
      </div>
    </Reveal>
  );
}