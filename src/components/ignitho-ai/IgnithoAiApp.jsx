"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Hero from "./Hero";
import OneFriend from "./OneFriend";
import Pillars from "./Pillars";
import FoundationSuites from "./FoundationSuites";
import Architecture from "./Architecture";
import AllSuitesPage from "./AllSuitesPage";
import SecuritySection from "./SecuritySection";
import CtaBanner from "./CtaBanner";
import SuiteDetail from "./SuiteDetail";
import SimulationModal from "./SimulationModal";
import AiFooter from "./Footer";
import { SUITES } from "@/lib/pages/ai-suites";

/**
 * Ignitho AI, ported from the standalone React app.
 *
 * The original was a Vite SPA that swapped between home, the suite catalog and
 * a suite detail view with local state. That behaviour is kept as-is inside
 * this one client tree rather than split into Next routes — the views are
 * modal-like, share state, and the original has no URLs for them.
 *
 * Its own Navbar is dropped: this page sits inside the site shell, which
 * already renders the header. The AI-specific footer is kept, since the page
 * ends on its own compliance strip rather than the site footer.
 */
export default function IgnithoAiApp() {
  const [page, setPage] = useState("home");
  const [activeSuiteId, setActiveSuiteId] = useState(null);
  const [activeTab, setActiveTab] = useState("ALL");
  const [simAccelerator, setSimAccelerator] = useState(null);
  const [simStep, setSimStep] = useState(0);

  /* Swapping view scrolls back to the top - but only when the view actually
     changes. Counting renders is not enough: React remounts effects in dev, and
     a reload would then restore the visitor to their place and immediately
     throw it away. See ScrollMemory in the site layout. */
  const shown = useRef({ page, activeSuiteId });
  useEffect(() => {
    if (shown.current.page === page && shown.current.activeSuiteId === activeSuiteId) return;
    shown.current = { page, activeSuiteId };
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [activeSuiteId, page]);

  const activeSuite = useMemo(
    () => SUITES.find((s) => s.id === activeSuiteId) || null,
    [activeSuiteId]
  );

  const filteredSuites = useMemo(
    () =>
      SUITES.filter(
        (s) =>
          activeTab === "ALL" ||
          (activeTab === "FOUNDATION" && s.type === "foundation") ||
          (activeTab === "INDUSTRY" && s.type === "industry")
      ),
    [activeTab]
  );

  const runSimulation = (accelerator) => {
    setSimAccelerator(accelerator);
    setSimStep(1);
    setTimeout(() => setSimStep(2), 1200);
    setTimeout(() => setSimStep(3), 2800);
  };

  return (
    <div className="text-ignitho-text bg-white">
      {activeSuite ? (
        <div className="bg-ignitho-light-grid">
          <SuiteDetail
            suite={activeSuite}
            onBack={() => setActiveSuiteId(null)}
            onRunSimulation={runSimulation}
          />
        </div>
      ) : page === "catalog" ? (
        <div className="bg-ignitho-light-grid">
          <AllSuitesPage
            suites={filteredSuites}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onOpenSuite={setActiveSuiteId}
            onBack={() => setPage("home")}
          />
        </div>
      ) : (
        <>
          <Hero />
          {/* hero, then tinted / white alternating all the way to the CTA */}
          <div className="bg-ignitho-light-grid">
            <OneFriend />
          </div>
          <FoundationSuites onOpenSuite={setActiveSuiteId} />
          <div className="bg-ignitho-light-grid">
            <Pillars />
          </div>
          <Architecture />
          <div className="bg-ignitho-light-grid">
            <SecuritySection />
          </div>
          <CtaBanner />
        </>
      )}

      <SimulationModal
        accelerator={simAccelerator}
        step={simStep}
        onClose={() => setSimAccelerator(null)}
      />
      <AiFooter />
    </div>
  );
}
