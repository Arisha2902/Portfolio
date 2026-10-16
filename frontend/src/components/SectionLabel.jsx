import Reveal from "./Reveal";

export default function SectionLabel({ index, title, blurb }) {
  return (
    <Reveal>
      <div>
        <p className="font-mono2 text-xs font-bold tracking-[0.18em] text-[var(--accent)]">
          {index} // {title}
        </p>
        <hr className="rule mt-3" aria-hidden="true" />
        {blurb ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)]">{blurb}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
