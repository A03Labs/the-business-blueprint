import { CheckCircleIcon, TicketIcon, ArrowRightIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function PricingSection({ onApplyClick }: { onApplyClick: () => void }) {
  const installments = [
    {
      stage: "Commitment Deposit",
      amount: "₦50,000",
      timing: "Upon Application Acceptance",
      purpose: "Secures 1 of the 10 spots and activates onboarding and workshop preparation.",
    },
    {
      stage: "Instalment 01",
      amount: "₦50,000",
      timing: "January 2027",
      purpose: "Powers participation in the 2-Day Physical Strategy Intensive and Workbook.",
    },
    {
      stage: "Instalment 02",
      amount: "₦50,000",
      timing: "February 2027",
      purpose: "Powers Q1 implementation and the first monthly 1-on-1 strategy review.",
    },
    {
      stage: "Instalment 03",
      amount: "₦50,000",
      timing: "March 2027",
      purpose: "Final installment; covers the rest of the 12-month accountability partnership.",
    },
  ];

  const includes = [
    "Two-day physical strategy intensive in January 2027",
    "Comprehensive hardcopy Business Blueprint Workbook",
    "Individual business strategy clinic during the intensive",
    "12-month closed founder community membership (Jan–Dec 2027)",
    "Monthly structured business updates and performance tracking",
    "Scheduled monthly 1-on-1 business reviews with advisors",
    "Monthly group accountability and peer mastermind meetings",
    "4 quarterly strategic reviews (Q1, Q2, Q3, Q4)",
    "Access to preferential community rates across the Business Service Network",
    "Direct strategic guidance and iterative blueprint roadmapping all year",
  ];

  return (
    <section id="investment" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider">
            <span>Programme Investment</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Transparent Pricing & Accessible Payment Plan
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal">
            Priced at an accessible rate to make structured, high-touch business development available to committed entrepreneurs.
          </p>
        </AnimateOnScroll>

        {/* Investment Master Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start mb-12 sm:mb-16">
          {/* Left Column: What's Included */}
          <div className="lg:col-span-7">
            <AnimateOnScroll direction="up">
              <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs card-hover">
                <div className="flex items-center justify-between mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600">All-Inclusive</span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 font-display">What Your Investment Covers</h3>
                  </div>
                  <div className="p-2.5 sm:p-3 rounded-2xl bg-orange-100 text-orange-600">
                    <TicketIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-3.5">
                  {includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-700">
                      <div className="p-1 rounded-md bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                        <CheckCircleIcon className="w-4 h-4" />
                      </div>
                      <span className="leading-relaxed font-normal">{inc}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span>Strictly Limited:</span>
                  <strong className="text-slate-900">Cohort capped at 10 businesses</strong>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Pricing & 4-Stage Payment Breakdown */}
          <div className="lg:col-span-5">
            <AnimateOnScroll delayMs={120} direction="up">
              <div className="rounded-2xl sm:rounded-3xl bg-white border-2 border-slate-900 p-6 sm:p-8 lg:p-10 shadow-md space-y-5 sm:space-y-6 card-hover">
                <div className="text-center pb-5 sm:pb-6 border-b border-slate-200 space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Full 12-Month Investment
                  </span>
                  <div className="text-3xl sm:text-5xl font-black text-slate-950 font-display">
                    ₦200,000
                  </div>
                  <p className="text-xs text-orange-600 font-semibold">
                    Per business • Payable across 4 equal stages
                  </p>
                </div>

                {/* Installments Breakdown */}
                <div className="space-y-2.5 sm:space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Payment Schedule:
                  </div>

                  {installments.map((inst, idx) => (
                    <div
                      key={idx}
                      className={`p-3 sm:p-3.5 rounded-xl border transition card-hover ${
                        idx === 0
                          ? "bg-orange-50 border-orange-200"
                          : "bg-slate-50 border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-slate-900">{inst.stage}</span>
                        <span className="text-orange-600 font-display text-sm">{inst.amount}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mb-0.5">
                        <span>{inst.timing}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 italic">
                        {inst.purpose}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={onApplyClick}
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider py-3.5 sm:py-4 rounded-xl shadow-xs transition cursor-pointer btn-press"
                >
                  <span>Apply for Cohort 2027</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  *Admission is application-based. Deposit confirms place upon acceptance.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
