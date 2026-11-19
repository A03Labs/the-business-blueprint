import { CheckCircleIcon, ArrowRightIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AudienceSection({ onApplyClick }: { onApplyClick: () => void }) {
  const outcomes = [
    "A clear, objective assessment of the current state of your business.",
    "A defined business direction, value proposition, and well-profiled target audience.",
    "A practical structure for products, services, operations, and customer experience.",
    "A 2027 business strategy with measurable, trackable milestones.",
    "A marketing, content, and visibility direction suited specifically to your industry.",
    "A 90-day implementation plan and framework for tracking progress.",
    "A consistent accountability rhythm for reviewing results and making adjustments.",
  ];

  const personas = [
    {
      title: "Existing Business Owners",
      subtitle: "Seeking Structure & Predictable Growth",
      description:
        "You have customers and revenue, but lack repeatable operational systems, struggle with inconsistent marketing, and want clear strategic direction to grow intentionally.",
      traits: [
        "Desire automated processes & clear roles",
        "Need better pricing fundamentals & profit margins",
        "Want to fix inconsistent visibility & customer flow",
        "Ready to transition from operator to business builder",
      ],
      badge: "Structure & Scale",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      title: "Early-Stage Entrepreneurs",
      subtitle: "Building the Right Foundation from Day 1",
      description:
        "You have a defined product, service, or validated business offer and want to build a battle-tested enterprise foundation without expensive trial and error.",
      traits: [
        "Have an active offer or product ready for market",
        "Need a concrete launch & go-to-market roadmap",
        "Require guidance on brand positioning & visibility",
        "Value structured accountability to build momentum",
      ],
      badge: "Foundation & Launch",
      badgeColor: "bg-red-100 text-red-800 border-red-200",
    },
  ];

  return (
    <section id="audience" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <span>Selective Cohort Admission</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Who The Programme Is For
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Admission is application-based. The cohort is intentionally limited to <strong>10 businesses</strong>{" "}
            to allow for meaningful interaction and individual attention.
          </p>
        </AnimateOnScroll>

        {/* 2 Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {personas.map((persona, idx) => (
            <AnimateOnScroll key={idx} delayMs={idx * 120} direction="up">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between card-hover">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${persona.badgeColor}`}>
                      {persona.badge}
                    </span>
                    <span className="text-slate-400 text-xs font-medium">Profile 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1">{persona.title}</h3>
                  <div className="text-xs sm:text-sm font-semibold text-orange-600 mb-3 sm:mb-4">{persona.subtitle}</div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">{persona.description}</p>

                  <div className="space-y-3 pt-5 border-t border-slate-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Key Focus Areas:</div>
                    {persona.traits.map((trait, tIdx) => (
                      <div key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onApplyClick}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-xs btn-press"
                  >
                    <span>Apply for this track</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* The 10-Business Rule Highlight Box */}
        {/* <AnimateOnScroll delayMs={100} className="rounded-2xl bg-orange-50/70 border border-orange-200 p-5 sm:p-8 mb-12 sm:mb-16 card-hover">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 justify-between">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="p-3.5 sm:p-4 rounded-xl bg-red-600 text-white font-black text-xl sm:text-2xl font-display shrink-0 shadow-xs transform hover:rotate-3 transition-transform">
                10
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-bold text-slate-950">Why strictly 10 businesses?</h4>
                <p className="text-xs sm:text-sm text-slate-700 max-w-2xl leading-relaxed font-normal">
                  Large conferences offer broad inspiration; small cohorts deliver transformation. A 10-business ceiling
                  guarantees that your business gets individual strategy diagnostics, monthly personalized reviews, and direct problem-solving.
                </p>
              </div>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <div className="px-4 py-2.5 rounded-xl bg-white border border-orange-200 text-center shadow-xs">
                <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Cohort Status</div>
                <div className="text-xs sm:text-sm font-extrabold text-emerald-700 flex items-center gap-1.5 justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Applications Active</span>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll> */}

        {/* What You Walk Away With */}
        <AnimateOnScroll delayMs={150}>
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                What You Will Walk Away With
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                By the end of the programme, each participant will have developed:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
              {outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs card-hover ${
                    idx === outcomes.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="p-1 rounded-md bg-orange-100 text-orange-600 shrink-0 mt-0.5">
                    <CheckCircleIcon className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
