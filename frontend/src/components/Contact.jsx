import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiCheck, FiCopy, FiMail, FiMapPin } from "react-icons/fi";
import { accentVar, contact, leetcodeChip, socials } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const iconFor = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
};

export default function Contact() {
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = contact.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }

    if (contact.formspreeEndpoint) {
      fetch(contact.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then((res) => {
          setStatus(res.ok ? "Thanks — your message was sent." : "Something went wrong. Please email me directly.");
          if (res.ok) form.reset();
        })
        .catch(() => setStatus("Something went wrong. Please email me directly."));
      return;
    }

    const subject = String(data.get("subject") || "").trim() || `Portfolio contact from ${name}`;
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setStatus("Opening your email app with the message pre-filled.");
  };

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-16 sm:pt-6">
        <SectionLabel heading="Get in Touch" headingId="contact-title" />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Left: direct channels + ethos */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="card card-hover p-5 sm:p-6" style={{ "--tint": accentVar.cyan }}>
                <p className="label">Direct Channels</p>

                <a
                  href={`mailto:${contact.email}`}
                  className="h-title mt-4 block break-all text-lg text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
                >
                  <FiMail size={17} aria-hidden="true" className="mr-2 inline-block align-[-2px]" />
                  {contact.email}
                </a>

                <div className="mt-5 flex items-center gap-3">
                  <span className="icon-tile h-9 w-9 shrink-0" style={{ "--tint": accentVar.pink }} aria-hidden="true">
                    <FiMapPin size={16} />
                  </span>
                  <p className="text-sm text-[var(--muted)]">{contact.location}</p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="pill-solid"
                    style={{ "--tint": accentVar.cyan }}
                    aria-live="polite"
                  >
                    {copied ? <FiCheck size={13} aria-hidden="true" /> : <FiCopy size={13} aria-hidden="true" />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                  <ul className="flex flex-wrap gap-2" aria-label="Social links">
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
                            style={{
                              "--tint": accentVar[
                                s.key === "github" ? "neutral" : s.key === "linkedin" ? "indigo" : "pink"
                              ],
                            }}
                          >
                            <Icon size={14} aria-hidden="true" />
                            {s.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <blockquote
                className="card p-5 sm:p-6"
                style={{ "--tint": accentVar.purple, "--card-accent": accentVar.purple }}
              >
                <p className="h-title text-lg leading-snug text-[var(--ink)]">“{contact.quote}”</p>
                <cite className="mono mt-2.5 block text-[0.65rem] font-bold uppercase not-italic tracking-[0.14em] text-[var(--faint)]">
                  {contact.quoteBy}
                </cite>
              </blockquote>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.08} className="h-full">
            <form onSubmit={handleSubmit} className="card flex h-full flex-col gap-4 p-5 sm:p-6" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mono mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Name*
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="field px-3.5 py-2.5 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mono mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Email*
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="field px-3.5 py-2.5 text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="mono mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity"
                  className="field px-3.5 py-2.5 text-sm"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mono mb-1.5 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[var(--muted)]">
                  Message*
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Hi Arisha, I'd like to talk about…"
                  className="field resize-y px-3.5 py-2.5 text-sm"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button type="submit" className="btn btn-send px-5 py-2.5 text-sm uppercase tracking-[0.08em]">
                  {contact.sendLabel}
                </button>
                {status ? (
                  <p role="status" className="text-sm text-[var(--muted)]">
                    {status}
                  </p>
                ) : null}
              </div>
              <p className="mt-auto text-xs leading-relaxed text-[var(--faint)]">{contact.note}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}