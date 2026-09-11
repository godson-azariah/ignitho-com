"use client";

import { useEffect, useMemo, useState } from "react";
import Hero from "./Hero";
import ProblemFix from "./ProblemFix";
import Pillars from "./Pillars";
import SuitesSummary from "./SuitesSummary";
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

  useEffect(() => {
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
          <div className="bg-ignitho-light-grid">
            <ProblemFix />
          </div>
          <div className="bg-ignitho-white-grid">
            <Pillars />
          </div>
          <SuitesSummary onOpenSuite={setActiveSuiteId} />
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
