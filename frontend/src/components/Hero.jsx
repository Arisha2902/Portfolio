import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiCheck, FiCopy, FiFileText, FiShield } from "react-icons/fi";
import { accentVar, leetcodeChip, profile, socials } from "../data/portfolio";

const iconFor = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

function Intro({ text, bold }) {
  const i = text.indexOf(bold);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-[var(--ink)]">{bold}</strong>
      {text.slice(i + bold.length)}
    </>
  );
}

function ManifestRow({ k, v, indent = 2 }) {
  return (
    <div className="whitespace-pre-wrap break-words">
      <span className="code-punct">{" ".repeat(indent)}"</span>
      <span className="code-key">{k}</span>
      <span className="code-punct">": </span>
      <span className="code-string">{v}</span>
    </div>
  );
}

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const m = profile.manifest;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = profile.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="scroll-mt-40 pt-[var(--hero-pad)] sm:pt-[var(--hero-pad-sm)]"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* <SectionLabel index="SEC_01" title="Curriculum Vitae" /> */}

        {/* Name and JSON panel share this row so both start at the same height */}
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 id="hero-heading" className="h-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
              <span className="block text-[var(--ink)]">{profile.firstName}</span>
              <span className="grad-text script-name block">{profile.lastName}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <Intro text={profile.introLead} bold={profile.introLeadBold} />
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={profile.primaryCta.href} className="btn btn-grad px-5 py-3 text-sm uppercase tracking-[0.08em]">
                {profile.primaryCta.label} {profile.primaryCta.icon}
              </a>
              <a
                href={profile.secondaryCta.href}
                download={profile.resumeFile}
                className="btn btn-glass px-5 py-3 text-sm uppercase tracking-[0.08em]"
              >
                <FiFileText size={16} aria-hidden="true" />
                {profile.secondaryCta.label}
              </a>
            </div>

            {/* Transmissions */}
            <div className="mt-7">
              <p className="label">{profile.transmissionsLabel}</p>
              <ul className="mt-3 flex flex-wrap gap-2" aria-label="Profiles">
                {socials.map((s) => {
                  const Icon = iconFor[s.key] ?? FaGithub;
                  return (
                    <li key={s.key}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${s.label}${s.key === "leetcode" ? `, ${leetcodeChip}` : ""} (opens in a new tab)`}
                        className="chip chip-accent inline-flex items-center gap-1.5 px-3 py-1.5"
                        style={{ "--tint": accentVar[s.key === "github" ? "neutral" : s.key === "linkedin" ? "indigo" : "pink"] }}
                      >
                        <Icon size={14} aria-hidden="true" />
                        {s.label}
                        {s.key === "leetcode" ? ` · ${leetcodeChip}` : ""}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

          
          </motion.div>

          {/* Right: JSON panel + design discipline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="terminal overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 shrink-0 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="mono flex-1 truncate text-center text-xs text-[var(--muted)]">
                  {m.fileName}
                </span>
                <span className="mono shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] text-emerald-300">
                  {m.liveTag}
                </span>
              </div>

              <pre className="mono overflow-x-auto px-4 py-4 text-[0.76rem] leading-relaxed" aria-label="Developer manifest">
                <code>
                  <span className="code-punct">{"{"}</span>{"\n"}
                  <ManifestRow k="engineer" v={`"${m.engineer}",`} />
                  <span className="code-punct">  "education": {"{"}</span>{"\n"}
                  <ManifestRow k="degree" v={`"${m.education.degree}",`} indent={4} />
                  <ManifestRow k="college" v={`"${m.education.college}",`} indent={4} />
                  <ManifestRow k="period" v={`"${m.education.period}",`} indent={4} />
                  <span className="code-punct">    "</span>
                  <span className="code-key">cgpa</span>
                  <span className="code-punct">": </span>
                  <span className="code-number">{m.education.cgpa}</span>
                  <span className="code-punct">{"},"}</span>{"\n"}
                  <span className="code-punct">  "primary_focus": [</span>{"\n"}
                  {m.primaryFocus.map((f, i) => (
                    <span key={f}>
                      <span className="code-punct">    "</span>
                      <span className="code-string">{f}</span>
                      <span className="code-punct">"{i < m.primaryFocus.length - 1 ? "," : ""}</span>
                      {"\n"}
                    </span>
                  ))}
                  <span className="code-punct">  ],</span>{"\n"}
                  <span className="code-punct">  "availability": {"{"}</span>{"\n"}
                  <ManifestRow k="role" v={`"${m.availability.role}",`} indent={4} />
                  <ManifestRow k="status" v={`"${m.availability.status}"`} indent={4} />
                  <span className="code-punct">  {"},"}</span>{"\n"}
                  <span className="code-punct">  "metrics": {"{"} "</span>
                  <span className="code-key">leetcode_solved</span>
                  <span className="code-punct">": </span>
                  <span className="code-number">{m.metrics.leetcodeSolved}</span>
                  <span className="code-punct">{"}"}</span>{"\n"}
                  <span className="code-punct">{"}"}</span>
                </code>
              </pre>

              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
                <span className="mono inline-flex min-w-0 items-center gap-2 text-xs text-[var(--muted)]">
                  <FiShield size={14} className="shrink-0 text-[var(--accent-cyan)]" aria-hidden="true" />
                  <span className="truncate">{profile.email}</span>
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="pill-solid shrink-0"
                  style={{ "--tint": accentVar.cyan }}
                  aria-live="polite"
                >
                  {copied ? <FiCheck size={12} aria-hidden="true" /> : <FiCopy size={12} aria-hidden="true" />}
                  {copied ? "Copied" : "Copy Email"}
                </button>
              </div>
            </div>

            {/* <div className="card card-hover flex items-center gap-4 p-4 sm:p-5">
              <span className="brand-tile h-12 w-12 shrink-0 text-base" aria-hidden="true">
                AF
              </span>
              <div>
                <p className="label">{profile.sideNote.label}</p>
                <p className="h-title mt-1.5 text-lg text-[var(--ink)]">{profile.sideNote.title}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{profile.sideNote.body}</p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}