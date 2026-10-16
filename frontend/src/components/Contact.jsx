import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiCheck, FiCopy, FiMail, FiMapPin } from "react-icons/fi";
import { contact, leetcodeChip, socials } from "../data/portfolio";
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
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-32">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <SectionLabel index="SEC_06" title={contact.heading.toUpperCase()} />
        <h2 id="contact-title" className="sr-only">Contact</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {/* Left: direct channels + quote */}
          <div className="space-y-5">
            <Reveal>
              <div className="brutal rounded-md p-5 sm:p-6">
                <h3 className="font-mono2 text-xs font-bold tracking-[0.15em] text-[var(--accent)]">
                  DIRECT CHANNELS
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-grotesk mt-3 block break-all text-lg font-bold text-[var(--ink)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 hover:opacity-80 focus-visible:outline-[var(--accent)]"
                >
                  <FiMail size={17} aria-hidden="true" className="mr-2 inline-block align-[-2px]" />
                  {contact.email}
                </a>
                <p className="mt-3 flex items-center gap-2 text-sm text-[var(--muted)]">
                  <FiMapPin size={15} aria-hidden="true" className="shrink-0" />
                  {contact.location}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="btn-brutal btn-primary font-mono2 inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-xs font-bold tracking-widest"
                    aria-live="polite"
                  >
                    {copied ? <FiCheck size={14} aria-hidden="true" /> : <FiCopy size={14} aria-hidden="true" />}
                    {copied ? "COPIED" : "COPY"}
                  </button>
                  <ul className="flex flex-wrap gap-2" aria-label="Social links">
                    {socials.map((s) => {
                      const Icon = iconFor[s.key] ?? FaGithub;
                      return (
                        <li key={s.key}>
                          <a
                            href={s.href}
                            aria-label={`${s.label}${s.key === "leetcode" ? `, ${leetcodeChip}` : ""} (placeholder link)`}
                            className="btn-brutal font-mono2 inline-flex items-center gap-1.5 rounded-md bg-[var(--surface)] px-3 py-2 text-xs font-bold tracking-wide text-[var(--ink)]"
                          >
                            <Icon size={14} aria-hidden="true" />
                            {s.label.toUpperCase()}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <blockquote className="rounded-md border-[1.5px] border-[var(--line)] bg-[var(--line)] p-5 text-[var(--bg)] shadow-[5px_5px_0_var(--accent)] sm:p-6">
                <p className="font-grotesk text-lg font-bold leading-snug">“{contact.quote}”</p>
                <cite className="font-mono2 mt-3 block text-[0.68rem] font-bold not-italic tracking-[0.15em] opacity-70">
                  {contact.quoteBy}
                </cite>
              </blockquote>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              className="brutal flex h-full flex-col gap-4 rounded-md p-5 sm:p-6"
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="font-mono2 mb-1.5 block text-xs font-bold tracking-widest">
                    NAME*
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-mono2 mb-1.5 block text-xs font-bold tracking-widest">
                    EMAIL*
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="font-mono2 mb-1.5 block text-xs font-bold tracking-widest">
                  SUBJECT
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Internship opportunity"
                  className="w-full rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="font-mono2 mb-1.5 block text-xs font-bold tracking-widest">
                  MESSAGE*
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Hi Arisha, I'd like to talk about…"
                  className="w-full resize-y rounded-sm border-[1.5px] border-[var(--line)] bg-[var(--bg)] px-3.5 py-2.5 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="btn-brutal btn-primary font-mono2 inline-flex items-center rounded-md px-5 py-2.5 text-sm font-bold tracking-widest"
                >
                  SEND MESSAGE
                </button>
                {status ? (
                  <p role="status" className="text-sm text-[var(--muted)]">
                    {status}
                  </p>
                ) : null}
              </div>
              <p className="text-xs leading-relaxed text-[var(--muted)]">{contact.note}</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
