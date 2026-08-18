"use client";

import { useState } from "react";

/**
 * Quick Apply.
 *
 * The original posts to WordPress. There is no endpoint on this build yet, so
 * submit is deliberately inert: it validates, shows a confirmation, and logs
 * the payload. Wire `onSubmit` to a route handler or form service when the
 * destination is decided — nothing here silently drops an application.
 */
const FIELD =
  "w-full rounded-[9px] border border-[#e3d9f5] bg-white px-[16px] py-[15px] text-[16px] text-[#1d0f2a] placeholder:text-[#a99cc0] focus:border-[#7a00c2] focus:outline-none";

function Label({ children, required }) {
  return (
    <span className="mb-[9px] block text-[15px] font-semibold text-[#3f3a4a]">
      {children} {required ? <span className="text-[#e11d48]">*</span> : null}
    </span>
  );
}

export default function ApplyForm({ departments, submitLabel }) {
  const [sent, setSent] = useState(false);
  const [human, setHuman] = useState("no"); // no | checking | yes
  const [showHumanError, setShowHumanError] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (human !== "yes") {
      setShowHumanError(true);
      return;
    }
    setShowHumanError(false);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // eslint-disable-next-line no-console
    console.info("[Quick Apply] no endpoint configured yet — payload:", data);
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto mt-[34px] max-w-[700px] rounded-[18px] border border-[#16b981] bg-white px-[38px] py-[46px] shadow-[0_8px_26px_rgba(74,18,184,0.08)]"
    >
      <div className="grid grid-cols-1 gap-x-[28px] gap-y-[28px] sm:grid-cols-2">
        <label className="block">
          <Label required>Full Name</Label>
          <input name="full_name" type="text" required placeholder="Enter your full name" className={FIELD} />
        </label>
        <label className="block">
          <Label required>Email Address</Label>
          <input name="email" type="email" required placeholder="Enter your email" className={FIELD} />
        </label>
        <label className="block">
          <Label required>Role / Department Interested In</Label>
          <select name="role" required defaultValue="" className={FIELD}>
            <option value="" disabled>
              Select a department
            </option>
            {departments.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <Label>LinkedIn Profile (Optional)</Label>
          <input name="linkedin" type="url" placeholder="Paste your LinkedIn URL" className={FIELD} />
        </label>
      </div>

      <div className="mt-[28px] rounded-[10px] border border-dashed border-[#16b981] p-[22px]">
        <Label required>Upload Your Resume</Label>
        <input
          name="resume"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          className="block w-full text-[15px] text-[#6b6080] file:mr-3 file:rounded-[6px] file:border file:border-[#cfc4e6] file:bg-[#f6f1ff] file:px-[13px] file:py-[7px] file:text-[15px] file:text-[#3f3a4a]"
        />
      </div>

      <label className="mt-[28px] block">
        <Label>Tell us about yourself (Optional)</Label>
        <textarea
          name="about_you"
          rows={7}
          placeholder="Share a few lines about your experience, interests, or what excites you about Ignitho"
          className={`${FIELD} resize-y`}
        />
      </label>

      {/* Front-end only check. It behaves like the real widget — tick, brief
          spinner, green check — and gates submit, but it verifies nothing.
          Swap for reCAPTCHA with a site key and a server-side verify when the
          endpoint exists; this stops bots from nothing today. */}
      <div className="mt-[26px] flex w-[330px] max-w-full items-center gap-3 rounded-[3px] border border-[#d3d3d3] bg-[#f9f9f9] px-[14px] py-[14px]">
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
          className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[2px] border-2 border-[#c1c1c1] bg-white"
        >
          {human === "checking" ? (
            <span className="h-[16px] w-[16px] animate-spin rounded-full border-2 border-[#c1c1c1] border-t-[#4285f4]" />
          ) : null}
          {human === "yes" ? (
            <svg viewBox="0 0 24 24" className="h-[19px] w-[19px]" fill="none" stroke="#0f9d58" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12.5 5 5L19 7" />
            </svg>
          ) : null}
        </button>
        <span className="text-[16px] text-[#3f3a4a]">I&apos;m not a robot</span>
        <span className="ml-auto text-[9px] leading-[11px] text-[#9aa0a6]">reCAPTCHA</span>
      </div>
      {showHumanError ? (
        <p role="alert" className="mt-[8px] text-[13px] font-semibold text-[#e11d48]">
          Please confirm you&apos;re not a robot.
        </p>
      ) : null}

      <button
        type="submit"
        className="bg-brand-green mx-auto mt-[30px] block w-full max-w-[280px] rounded-[10px] py-[14px] text-[17px] font-bold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#16b981" }}
      >
        {submitLabel}
      </button>

      {sent ? (
        <p role="status" className="mt-[14px] text-center text-[14px] font-semibold text-[#0f9d58]">
          Thanks — your details were captured. (No submission endpoint is connected yet.)
        </p>
      ) : null}
    </form>
  );
}
