import { AnimateOnScroll } from "./AnimateOnScroll";

export function ParticipantJourney({ onApplyClick }: { onApplyClick: () => void }) {
  const steps = [
    {
      num: "01",
      title: "Application",
      period: "Open Now",
      desc: "Submit your business details, current bottlenecks, and 2027 growth aspirations through our short application.",
    },
    {
      num: "02",
      title: "Selection & Confirmation",
      period: "Upon Acceptance",
      desc: "Receive formal admission confirmation and secure your 1 of 10 spots with the ₦50,000 commitment payment.",
    },
    {
      num: "03",
      title: "Pre-Intensive Diagnostic",
      period: "Prior to January",
      desc: "Complete the thorough pre-programme business questionnaire so the instructors can study your business model in advance.",
    },
    {
      num: "04",
      title: "January Physical Intensive",
      period: "January 2027",
      desc: "Attend the 2-day in-person strategy masterclass, complete your workbook, and build your tailored business blueprint.",
    },
    {
      num: "05",
      title: "Foundational Sprints",
      period: "January – March 2027",
      desc: "Complete the 3 payment installments while executing your 90-day foundation roadmap with monthly check-ins.",
    },
    {
      num: "06",
      title: "12-Month Accountability Engine",
      period: "April – December 2027",
      desc: "Participate in monthly 1-on-1 progress reviews, mastermind sessions, and quarterly strategic trajectory pivots.",
    },
    {
      num: "07",
      title: "Annual Audit & Alumni Status",
      period: "December 2027",
      desc: "Celebrate 2027 results, conduct the comprehensive annual performance review, and access the optional alumni community.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <span>Roadmap & Milestones</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Your 2027 Participant Journey
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            From application to annual evaluation, here is the clear roadmap of your transformation over the next 12 months.
          </p>
        </AnimateOnScroll>

        {/* Timeline Grid - 8 Cards (1 on mobile, 2 on tablet, 4 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {steps.map((step, idx) => (
            <AnimateOnScroll key={idx} delayMs={idx * 70} direction="up">
              <div className="h-full rounded-2xl bg-slate-50 border border-slate-200 p-5 sm:p-6 flex flex-col justify-between card-hover relative overflow-hidden group shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-black text-2xl text-orange-600">
                      {step.num}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white text-slate-600 border border-slate-200">
                      {step.period}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>Milestone {idx + 1}</span>
                  <span className="text-orange-600 font-bold group-hover:translate-x-1.5 transition-transform duration-200 inline-block">
                    →
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}

          {/* Final CTA Box in the grid */}
          <AnimateOnScroll delayMs={steps.length * 70} direction="up">
            <div className="h-full rounded-2xl bg-slate-950 p-5 sm:p-6 flex flex-col justify-between text-white shadow-md card-hover">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">
                  Step 08 • Your Future
                </span>
                <h3 className="text-lg sm:text-xl font-black mt-2 mb-2 font-display text-white">
                  Build An Enduring Enterprise
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Don't let another year pass hoping things fall into place. Secure your seat in the room today.
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer shadow-sm btn-press"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
