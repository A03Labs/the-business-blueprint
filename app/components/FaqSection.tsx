import { useState } from "react";
import { ChevronDownIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why is the cohort strictly limited to 10 businesses?",
      a: "Most business training programmes gather hundreds of participants where people passively listen to lectures. The Business Blueprint 2027 is an active working community. A 10-business ceiling ensures each founder receives direct diagnostic attention during the physical intensive, personalized monthly 1-on-1 strategy reviews, and deep peer collaboration without being lost in the crowd.",
    },
    {
      q: "When and where will the January 2027 physical intensive take place?",
      a: "The physical sessions will take place over two intensive days in January 2027. The exact venue location, finalized calendar dates, and daily schedule will be communicated directly to admitted participants following the acceptance of their application.",
    },
    {
      q: "How does the flexible payment plan work?",
      a: "The total programme fee is ₦200,000 per business. To make it accessible, payments are split into 4 equal stages: an initial ₦50,000 commitment deposit upon acceptance to secure your seat, followed by three monthly installments of ₦50,000 in January, February, and March 2027.",
    },
    {
      q: "What happens if a strategy is not yielding results during the year?",
      a: "That is the core reason for the 12-month partnership. During the quarterly strategic audits and monthly reviews, if an agreed marketing, pricing, or operational strategy is failing to produce the desired traction, the advisors work with you to diagnose root causes and adjust your tactical roadmap.",
    },
    {
      q: "Are the Aboi Visuals video packages included in the ₦200,000 fee?",
      a: "No. The ₦200,000 covers the full core programme: the 2-day physical intensive, the physical workbook, 12 months of monthly 1-on-1 reviews, mastermind sessions, quarterly audits, and vendor network access. Aboi Visuals offers an optional, heavily discounted community rate (₦20,000/video or ₦200,000 for 10 videos/mo, saving ₦100k/mo) under a separate service contract for businesses desiring professional production.",
    },
    {
      q: "Can both early-stage and established business owners apply?",
      a: "Yes. The cohort is designed for both existing business owners seeking better structure, systems, and margin optimization, as well as early-stage founders who already have a defined offer or product and want to construct a bulletproof enterprise foundation from the start.",
    },
    {
      q: "What is expected of me as a participant?",
      a: "You are expected to attend the January physical intensive, submit your concise monthly business updates, attend your scheduled 1-on-1 review calls, actively engage in the monthly group mastermind sessions, and take consistent action on your agreed blueprints.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <span>Clarifications & Details</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-normal">
            Everything you need to know about the 2027 cohort, structure, and expectations.
          </p>
        </AnimateOnScroll>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <AnimateOnScroll key={idx} delayMs={idx * 50} direction="up">
                <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs transition-shadow card-hover">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full py-4 px-4 sm:py-5 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-slate-50/70 transition"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-2">{faq.q}</span>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 shrink-0 transform transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180 text-orange-600 border-orange-300" : ""
                      }`}
                    >
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-normal">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
