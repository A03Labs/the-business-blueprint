import { useState } from "react";
import type { Route } from "./+types/home";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { ExecutiveSummary } from "../components/ExecutiveSummary";
import { AudienceSection } from "../components/AudienceSection";
import { ModulesSection } from "../components/ModulesSection";
import { PhysicalIntensive } from "../components/PhysicalIntensive";
import { AccountabilityEngine } from "../components/AccountabilityEngine";
import { PartnerAndNetwork } from "../components/PartnerAndNetwork";
import { PricingSection } from "../components/PricingSection";
import { ParticipantJourney } from "../components/ParticipantJourney";
import { FaqSection } from "../components/FaqSection";
import { ApplicationSection } from "../components/ApplicationSection";
import { Footer } from "../components/Footer";
import { FlierModal } from "../components/FlierModal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Business Blueprint 2027 | Build. Structure. Grow." },
    {
      name: "description",
      content:
        "A 12-Month Business Development, Strategy & Accountability Community for a closed cohort of 10 business owners beginning January 2027.",
    },
    { property: "og:title", content: "The Business Blueprint 2027 | Build. Structure. Grow." },
    {
      property: "og:description",
      content:
        "Your business needs more than ambition. It needs a blueprint. A 12-month strategy community and January 2027 physical intensive for 10 business owners.",
    },
    { property: "og:image", content: "/images/business-blueprint-flier.jpg" },
  ];
}

export default function Home() {
  const [flierOpen, setFlierOpen] = useState(false);

  const scrollToApply = () => {
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const input = document.getElementById("fullName");
        if (input) input.focus();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-orange-600 selection:text-white font-sans">
      {/* Navigation */}
      <Navbar onApplyClick={scrollToApply} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onApplyClick={scrollToApply} onViewFlierClick={() => setFlierOpen(true)} />

        {/* Executive Summary & 4 Pillars */}
        <ExecutiveSummary />

        {/* Target Audience & Expected Outcomes */}
        <AudienceSection onApplyClick={scrollToApply} />

        {/* 5 Core Learning Modules & Concrete Deliverables */}
        <ModulesSection />

        {/* January 2027 2-Day Physical Intensive Experience */}
        <PhysicalIntensive onApplyClick={scrollToApply} />

        {/* The 12-Month Accountability Engine & Quarterly Reviews */}
        <AccountabilityEngine />

        {/* Creative Partner (Aboi Visuals / Prince Francis) & Business Service Network */}
        <PartnerAndNetwork />

        {/* Transparent Investment & 4-Stage Payment Plan */}
        <PricingSection onApplyClick={scrollToApply} />

        {/* 7-Step Participant Roadmap */}
        <ParticipantJourney onApplyClick={scrollToApply} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Interactive Application Form */}
        <ApplicationSection />
      </main>

      {/* Footer */}
      <Footer onApplyClick={scrollToApply} />

      {/* Flier Lightbox Modal */}
      <FlierModal isOpen={flierOpen} onClose={() => setFlierOpen(false)} />
    </div>
  );
}
