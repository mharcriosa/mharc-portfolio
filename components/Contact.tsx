"use client";

import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import Section from "./Section";

const EMAIL = "0526mharc.riosa@gmail.com";
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/f074d6c3b5fff18b85029cdae8f57ef1e";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name || "Anonymous visitor",
          message,
          _subject: `Portfolio inquiry from ${name || "a visitor"}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("sent");
      setName("");
      setMessage("");
    } catch {
      // Fallback: open the visitor's mail client if the service is unavailable.
      const subject = encodeURIComponent(
        `Portfolio inquiry from ${name || "a visitor"}`
      );
      const body = encodeURIComponent(`${message}\n\n— ${name}`);
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("idle");
    }
  }

  const inputClass =
    "w-full rounded border border-slate-800 bg-surface/80 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-all focus:border-accent focus:shadow-[0_0_20px_-8px_rgba(79,143,255,0.45)]";

  return (
    <Section id="contact" eyebrow="06 // CONTACT" title="Get In Touch">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5">
          <p className="leading-relaxed text-slate-400">
            I&apos;m open to new opportunities, collaborations, or just a chat
            about frontend and 3D on the web. My inbox is always open.
          </p>
          <div className="space-y-3 font-mono text-sm">
            <p className="text-slate-400">
              <span className="mr-3 text-accent">EMAIL</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-accent">
                {EMAIL}
              </a>
            </p>
            <p className="text-slate-400">
              <span className="mr-3 text-accent">ALT</span>
              <a href="mailto:mharcriosa123@gmail.com" className="hover:text-accent">
                mharcriosa123@gmail.com
              </a>
            </p>
            <p className="text-slate-400">
              <span className="mr-3 text-accent">PHONE</span>
              <a href="tel:+639763585929" className="hover:text-accent">
                +63 976 358 5929
              </a>
            </p>
            <p className="text-slate-400">
              <span className="mr-3 text-accent">LOC</span>
              Marikina City / San Mateo, Rizal, PH
            </p>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={6}
            className={`${inputClass} resize-none`}
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status === "sending"}
            className="self-start bg-accent px-8 py-3 font-mono text-sm text-ink transition-opacity hover:opacity-85 disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Message Sent"
                : "Send Message →"}
          </motion.button>
          {status === "sent" && (
            <p className="font-mono text-xs text-emerald-400">
              Thanks! Your message was delivered to my inbox.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  );
}
