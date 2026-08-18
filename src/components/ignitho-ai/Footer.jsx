"use client";

export default function Footer() {
  return (
    <footer className="border-t border-ignitho-divider bg-white py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-bold text-ignitho-text">Ignitho AI</span>
          <p className="text-xs text-ignitho-muted mt-1">
            Stop experimenting. Start automating enterprise workflows with governed AI
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs font-semibold text-ignitho-muted">
          <span>ISO 27001 Certified</span>
          <span>•</span>
          <span>SOC2 Type II</span>
          <span>•</span>
          <span>HIPAA Compliant</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-ignitho-divider/60 mt-8 pt-6 text-center text-xs text-ignitho-muted">
        © 2026 Ignitho Technologies. All rights reserved
      </div>
    </footer>
  )
}
