import { CheckCircleIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AccountabilityEngine() {
  const monthlyRhythm = [
    {
      title: "Monthly Business Update",
      desc: "Each business submits a short report covering agreed goals, completed activities, results, challenges, and priorities.",
      tag: "Self-Report",
    },
    {
      title: "Individual Business Review",
      desc: "A scheduled 1-on-1 review of the participant's progress, blockers, priorities, and next tactical steps.",
      tag: "1-on-1 Review",
    },
    {
      title: "Group Accountability Meeting",
      desc: "A monthly community session for progress sharing, peer learning, collaboration, and mutual support.",
      tag: "Peer Community",
    },
    {
      title: "Action Tracking",
      desc: "Agreed actions are recorded and systematically followed up ahead of the next monthly review.",
      tag: "Execution Discipline",
    },
  ];

  const quarters = [
    {
      quarter: "Q1",
      period: "January – March 2027",
      title: "Foundation & Early Progress",
      focus: "Implementing foundational systems, product packaging, early execution rhythm, and initial progress milestones.",
      color: "border-orange-200 bg-orange-50/60",
      pillColor: "text-orange-800 bg-orange-100",
    },
    {
      quarter: "Q2",
      period: "April – June 2027",
      title: "Positioning & Customer Acquisition",
      focus: "Reviewing market positioning, marketing channels, content direction, and customer acquisition metrics.",
      color: "border-red-200 bg-red-50/60",
      pillColor: "text-red-800 bg-red-100",
    },
    {
      quarter: "Q3",
      period: "July – September 2027",
      title: "Performance, Sales & Operations",
      focus: "Optimizing sales conversion, operational processes, team delegation, and evaluating expansion opportunities.",
      color: "border-amber-200 bg-amber-50/60",
      pillColor: "text-amber-800 bg-amber-100",
    },
    {
      quarter: "Q4",
      period: "October – December 2027",
      title: "Consolidation & Annual Evaluation",
      focus: "Annual evaluation, consolidating lessons and achievements, and preparing the strategic plan for 2028.",
      color: "border-sky-200 bg-sky-50/60",
      pillColor: "text-sky-800 bg-sky-100",
    },
  ];

  return (
    <section id="accountability" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider">
            <span>Continuous Guided Execution</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            The 12-Month Accountability Partnership
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal">
            The physical intensive is the beginning of the programme, not its conclusion. From January through December 2027,
            the team supports each business in executing their agreed roadmaps.
          </p>
        </AnimateOnScroll>

        {/* Monthly Rhythm */}
        <div className="mb-12 sm:mb-16">
          <AnimateOnScroll className="mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Monthly Accountability Rhythm</h3>
            <p className="text-xs text-slate-500 mt-1">Four structured touchpoints every month throughout 2027</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {monthlyRhythm.map((item, idx) => (
              <AnimateOnScroll key={idx} delayMs={idx * 90} direction="up">
                <div className="h-full p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 card-hover flex flex-col justify-between shadow-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 inline-block mb-3 sm:mb-4">
                      {item.tag}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 text-[10px] font-bold text-slate-400 uppercase">
                    Step 0{idx + 1}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* 4 Quarterly Reviews */}
        <div>
          <AnimateOnScroll className="mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">Quarterly Strategic Reviews</h3>
            <p className="text-xs text-slate-500 mt-1">
              Every quarter, we assess progress and determine whether to maintain, optimize, or restructure your approach.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {quarters.map((q, idx) => (
              <AnimateOnScroll key={idx} delayMs={idx * 90} direction="up">
                <div className={`h-full p-5 sm:p-7 rounded-2xl border ${q.color} shadow-xs flex flex-col justify-between card-hover`}>
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl sm:text-2xl font-black font-display text-slate-950">{q.quarter}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${q.pillColor}`}>
                        {q.period}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{q.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{q.focus}</p>
                  </div>
                  <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold text-slate-700">Quarterly Audit</span>
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
