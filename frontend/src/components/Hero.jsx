import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheck, FiCopy } from "react-icons/fi";
import { profile } from "../data/portfolio";
import SectionLabel from "./SectionLabel";

function Intro({ text, bold }) {
  const i = text.indexOf(bold);
  if (i === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-bold underline decoration-[var(--accent)] decoration-[3px] underline-offset-4">
        {bold}
      </strong>
      {text.slice(i + bold.length)}
    </>
  );
}

function ManifestRow({ k, v, indent = 2 }) {
  return (
    <div className="whitespace-pre-wrap break-words">
      <span className="text-[#8b93a7]">{" ".repeat(indent)}"</span>
      <span className="text-[#9cdcfe]">{k}</span>
      <span className="text-[#8b93a7]">": </span>
      <span className="text-[#e8e6df]">{v}</span>
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
    <section id="home" aria-labelledby="hero-heading" className="scroll-mt-32 pt-32 sm:pt-36">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionLabel index="SEC_01" title="CURRICULUM VITAE" />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="chip inline-flex">{profile.badge}</p>
            <h1 id="hero-heading" className="font-display mt-5 text-6xl leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block text-[var(--ink)]">{profile.firstName}</span>
              <span className="block text-[var(--accent)]">{profile.lastName}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <Intro text={profile.introLead} bold={profile.introLeadBold} />
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="btn-brutal btn-primary font-mono2 inline-flex items-center rounded-md px-5 py-3 text-sm font-bold tracking-widest"
              >
                VIEW PROJECTS ↓
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="btn-brutal font-mono2 inline-flex items-center rounded-md bg-[var(--surface)] px-5 py-3 text-sm font-bold tracking-widest text-[var(--ink)]"
              >
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>

          {/* Right: code window + side note */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="terminal overflow-hidden rounded-md shadow-[5px_5px_0_var(--shadow)]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" aria-hidden="true" />
                  <span className="font-mono2 ml-2 text-xs text-[#c9c6bb]">{m.fileName}</span>
                </div>
                <span className="font-mono2 rounded border border-emerald-400/60 bg-emerald-400/10 px-2 py-0.5 text-[0.65rem] font-bold tracking-widest text-emerald-300">
                  {m.liveTag}
                </span>
              </div>
              <pre className="font-mono2 overflow-x-auto px-4 py-4 text-[0.78rem] leading-relaxed" aria-label="Developer manifest">
                <code>
                  <span className="text-[#c9c6bb]">{"{"}</span>{"\n"}
                  <ManifestRow k="engineer" v={`"${m.engineer}",`} />
                  <span className="text-[#8b93a7]">  "education": {"{"}</span>{"\n"}
                  <ManifestRow k="degree" v={`"${m.education.degree}",`} indent={4} />
                  <ManifestRow k="college" v={`"${m.education.college}",`} indent={4} />
                  <ManifestRow k="period" v={`"${m.education.period}",`} indent={4} />
                  <span className="text-[#8b93a7]">    "</span>
                  <span className="text-[#9cdcfe]">cgpa</span>
                  <span className="text-[#8b93a7]">": </span>
                  <span className="text-[#f2b01e]">{m.education.cgpa}</span>
                  <span className="text-[#8b93a7]">{"},"}</span>{"\n"}
                  <span className="text-[#8b93a7]">  "primary_focus": [</span>{"\n"}
                  {m.primaryFocus.map((f, i) => (
                    <span key={f}>
                      <span className="text-[#8b93a7]">    "</span>
                      <span className="text-[#a5d6a7]">{f}</span>
                      <span className="text-[#8b93a7]">"{i < m.primaryFocus.length - 1 ? "," : ""}</span>
                      {"\n"}
                    </span>
                  ))}
                  <span className="text-[#8b93a7]">  ],</span>{"\n"}
                  <span className="text-[#8b93a7]">  "availability": {"{"}</span>{"\n"}
                  <ManifestRow k="role" v={`"${m.availability.role}",`} indent={4} />
                  <ManifestRow k="status" v={`"${m.availability.status}"`} indent={4} />
                  <span className="text-[#8b93a7]">  {"},"}</span>{"\n"}
                  <span className="text-[#8b93a7]">  "metrics": {"{"} "</span>
                  <span className="text-[#9cdcfe]">leetcode_solved</span>
                  <span className="text-[#8b93a7]">": </span>
                  <span className="text-[#f2b01e]">{m.metrics.leetcodeSolved}</span>
                  <span className="text-[#8b93a7]">{"}"}</span>{"\n"}
                  <span className="text-[#c9c6bb]">{"}"}</span>
                </code>
              </pre>
              <div className="flex items-center justify-between gap-3 border-t border-white/10 px-4 py-3">
                <span className="font-mono2 truncate text-xs text-[#c9c6bb]">{profile.email}</span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="font-mono2 inline-flex shrink-0 items-center gap-1.5 rounded border border-white/25 px-3 py-1.5 text-[0.7rem] font-bold tracking-widest text-white transition-colors hover:border-white focus-visible:outline-white"
                  aria-live="polite"
                >
                  {copied ? <FiCheck size={13} aria-hidden="true" /> : <FiCopy size={13} aria-hidden="true" />}
                  {copied ? "COPIED" : "COPY EMAIL"}
                </button>
              </div>
            </div>

            <div className="brutal flex items-center gap-4 rounded-md p-4">
              <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[var(--line)] text-lg text-[var(--bg)]" aria-hidden="true">
                AF
              </span>
              <div>
                <p className="font-grotesk text-base font-bold text-[var(--ink)]">{profile.sideNote.title}</p>
                <p className="text-sm text-[var(--muted)]">{profile.sideNote.body}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
