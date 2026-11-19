import { CalendarIcon, SparklesIcon, CheckCircleIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function PhysicalIntensive({ onApplyClick }: { onApplyClick: () => void }) {
  const schedule = [
    {
      day: "Day 01",
      theme: "Building the Foundation",
      focus: "Business Clarity, Structure & Strategy",
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      activities: [
        "Executive Orientation & Programme Vision",
        "Business Clarity, Purpose & Value Proposition",
        "Business Structure & Operational Systems",
        "Pricing Models & Basic Financial Organization",
        "Practical Business Mapping & Diagnostics",
      ],
    },
    {
      day: "Day 02",
      theme: "Positioning for Growth",
      focus: "Marketing, Visibility & Execution",
      badgeColor: "bg-red-100 text-red-800 border-red-200",
      activities: [
        "Brand & Market Positioning Strategy",
        "Content Pillars & High-Impact Visibility",
        "Key Performance Indicators (KPIs) & Milestones",
        "Individual 1-on-1 Business Strategy Clinics",
        "Blueprint Presentations & 12-Month Commitments",
      ],
    },
  ];

  return (
    <section id="intensive" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <span>January 2027 • In-Person Immersion</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            The Two-Day Physical Intensive
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal">
            A practical, hands-on business strategy experience designed to assess your current model,
            solve operational bottlenecks, and construct your master blueprint.
          </p>
        </AnimateOnScroll>

        {/* 2-Day Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {schedule.map((item, idx) => (
            <AnimateOnScroll key={idx} delayMs={idx * 120} direction="up">
              <div className="h-full rounded-2xl sm:rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 bg-slate-50 shadow-xs flex flex-col justify-between card-hover">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}>
                      {item.day}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <CalendarIcon className="w-3.5 h-3.5 text-orange-600" />
                      <span>January 2027</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-1 font-display">{item.theme}</h3>
                  <div className="text-xs sm:text-sm font-semibold text-slate-500 mb-5 sm:mb-6">{item.focus}</div>

                  <div className="space-y-3 pt-5 border-t border-slate-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Core Intensive Activities:
                    </div>
                    {item.activities.map((act, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-slate-200 text-xs text-slate-500">
                  <span>Output: <strong className="text-slate-900">Personalised Business Roadmap</strong></span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* The Physical Workbook Box */}
        <AnimateOnScroll delayMs={150}>
          <div className="rounded-2xl sm:rounded-3xl bg-slate-950 text-white p-6 sm:p-8 lg:p-10 shadow-md card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Physical Material Included</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                  The Business Blueprint Workbook
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
                  Each participant completes a physical Business Blueprint Workbook during the intensive.
                  You leave with documented revenue targets, mapped processes, and an actionable 90-day implementation plan.
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 sm:py-4 rounded-xl shadow-xs transition cursor-pointer btn-press"
                >
                  <span>Reserve 1 of 10 Seats</span>
                </button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
