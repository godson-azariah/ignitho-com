"use client";

import { useState } from "react";

/**
 * Get in touch.
 *
 * Same posture as the Career form: no endpoint exists yet, so submit is
 * deliberately inert rather than pretending to send. The reCAPTCHA box is a
 * front-end gate only — it verifies nothing and must be swapped for the real
 * widget plus a server-side check before this goes live.
 */
const FIELD =
  "w-full rounded-[9px] border border-[#e3d9f5] bg-white px-[16px] py-[13px] text-[15px] text-[#1d0f2a] placeholder:text-[#a99cc0] focus:border-[#7a00c2] focus:outline-none";

function Label({ children, required }) {
  return (
    <span className="mb-[8px] block text-[13px] font-semibold uppercase tracking-[0.04em] text-[#3f3a4a]">
      {children} {required ? <span className="text-[#e11d48]">*</span> : null}
    </span>
  );
}

export default function EnquiryForm({ inquiryOptions, consent, submitLabel }) {
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState("no"); // no | checking | yes
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (!e.currentTarget.consent.checked) {
      setError("Please accept the privacy policy to continue.");
      return;
    }
    if (human !== "yes") {
      setError("Please confirm you're not a robot.");
      return;
    }
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // eslint-disable-next-line no-console
    console.info("[Contact] no endpoint configured yet — payload:", data);
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full flex-col rounded-[14px] border border-[#16b981] bg-white p-[30px] shadow-[0_8px_26px_rgba(74,18,184,0.08)]"
    >
      <label className="block">
        <Label required>Nature of Inquiry</Label>
        <select name="inquiry" required defaultValue="" className={FIELD}>
          <option value="" disabled>
            Select an option...
          </option>
          {inquiryOptions.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-[20px] grid grid-cols-1 gap-x-[22px] gap-y-[20px] sm:grid-cols-2">
        <label className="block">
          <Label required>Full Name</Label>
          <input name="full_name" type="text" required placeholder="John Smith" className={FIELD} />
        </label>
        <label className="block">
          <Label required>Work Email</Label>
          <input name="email" type="email" required placeholder="john@company.com" className={FIELD} />
        </label>
      </div>

      <label className="mt-[20px] block">
        <Label required>Company</Label>
        <input name="company" type="text" required placeholder="Your company name" className={FIELD} />
      </label>

      <label className="mt-[20px] block">
        <Label>LinkedIn / Portfolio URL</Label>
        <input name="linkedin" type="url" placeholder="https://linkedin.com/in/..." className={FIELD} />
      </label>

      <label className="mt-[20px] flex flex-1 flex-col">
        <Label required>Requirement / Message</Label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your data challenge or requirement..."
          className={`${FIELD} min-h-[120px] flex-1 resize-y`}
        />
      </label>

      <label className="mt-[20px] flex items-start gap-[10px] text-[13px] leading-[19px] text-[#6b6080]">
        <input name="consent" type="checkbox" className="mt-[3px] h-[15px] w-[15px] shrink-0 accent-[#16b981]" />
        <span>
          I consent to Ignitho processing my personal data in accordance with their{" "}
          <a href="/privacy-policy" className="text-[#7a00c2] underline">
            Privacy Policy
          </a>
        </span>
      </label>

      {/* front-end gate only — see the note at the top of this file */}
      <div className="mt-[20px] flex w-[302px] max-w-full items-center gap-3 rounded-[3px] border border-[#d3d3d3] bg-[#f9f9f9] px-[13px] py-[13px]">
        <button
          type="button"
          role="checkbox"
          aria-checked={human === "yes"}
          aria-label="I'm not a robot"
          onClick={() => {
            if (human !== "no") return;
            setHuman("checking");
            setTimeout(() => setHuman("yes"), 550);
          }}
          className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-[2px] border-2 border-[#c1c1c1] bg-white"
        >
          {human === "checking" ? (
            <span className="h-[15px] w-[15px] animate-spin rounded-full border-2 border-[#c1c1c1] border-t-[#4285f4]" />
          ) : null}
          {human === "yes" ? (
            <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="#0f9d58" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12.5 5 5L19 7" />
            </svg>
          ) : null}
        </button>
        <span className="text-[14px] text-[#3f3a4a]">I&apos;m not a robot</span>
        <span className="ml-auto text-[9px] leading-[11px] text-[#9aa0a6]">reCAPTCHA</span>
      </div>

      {error ? (
        <p role="alert" className="mt-[8px] text-[13px] font-semibold text-[#e11d48]">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-[22px] flex w-full items-center justify-center gap-2 rounded-[9px] py-[13px] text-[15px] font-bold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#0f9d58" }}
      >
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden="true">
          <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
        </svg>
        {submitLabel}
      </button>

      {sent ? (
        <p role="status" className="mt-[12px] text-center text-[13px] font-semibold text-[#0f9d58]">
          Thanks — your details were captured. (No submission endpoint is connected yet.)
        </p>
      ) : null}
    </form>
  );
}
