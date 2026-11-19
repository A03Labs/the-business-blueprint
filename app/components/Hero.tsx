import {
  CalendarIcon,
  UsersIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
} from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface HeroProps {
  onApplyClick: () => void;
  onViewFlierClick: () => void;
}

export function Hero({ onApplyClick, onViewFlierClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-center">
          {/* Left Column: Core Message & Value Badges */}
          <div className="lg:col-span-7 flex flex-col space-y-6 sm:space-y-8 text-left animate-fade-in-up">
            {/* Cohort Eyebrow Tag */}

            {/* Master Headline */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-baseline gap-x-2 sm:gap-x-3 gap-y-1">
                <span className="text-slate-400 text-base sm:text-2xl font-semibold tracking-tight">The</span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-orange-600 font-display">
                  Business
                </span>
                <span className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 font-display">
                  Blueprint
                </span>
                <span className="inline-block bg-red-600 text-white font-extrabold text-xs sm:text-base lg:text-lg px-2 py-0.5 rounded-md shadow-xs">
                  2027
                </span>
              </div>

              {/* Tagline Pill */}
              <div className="inline-block">
                <div className="bg-red-600 text-white text-[11px] sm:text-xs font-black uppercase tracking-widest px-3 sm:px-3.5 py-1 rounded-md shadow-xs">
                  Build. Structure. Grow.
                </div>
              </div>

              {/* Punchy Subtitle with Red Accent Bar */}
              <div className="border-l-4 border-red-600 pl-4 sm:pl-5 py-1">
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                  Your business needs more than ambition.{" "}
                  <span className="text-orange-600 block sm:inline">
                    It needs a blueprint.
                  </span>
                </h1>
              </div>

              {/* Clear, readable paragraph */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal pt-1">
                A 12-month business development, strategy, and accountability community designed for 10 selected entrepreneurs.
                Transition from chaotic daily operations into building an intentional, structured, and growth-ready enterprise.
              </p>
            </div>

            {/* Bottom Ticket Banner */}
            <div className="rounded-2xl bg-slate-950 text-white p-3.5 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 shadow-md card-hover">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="ticket-edge text-white font-extrabold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl flex flex-col items-center justify-center shrink-0">
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-red-100">Programme Fee</span>
                  <span className="font-display font-black text-lg sm:text-xl">₦200,000</span>
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white uppercase tracking-wider">Enquiries & Applications Open</div>
                  <div className="text-[11px] text-slate-300">Flexible 4-stage payment plan (₦50,000 / stage)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition cursor-pointer shadow-xs btn-press"
                >
                  <span>Apply Now</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Trust points */}
            <div className="hidden sm:flex flex-wrap items-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs text-slate-500 font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Physical 2-Day Strategy Intensive</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Business Blueprint Workbook included</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Quarterly strategic reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cropped Image of Prince Francis from the Flyer */}
          <div className="lg:col-span-5 flex flex-col items-center w-full">
            <AnimateOnScroll direction="left" delayMs={150} className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                {/* Cropped Image of Prince Francis */}
                <div className="relative aspect-[600/790] overflow-hidden cursor-pointer group" onClick={onViewFlierClick}>
                  <img
                    src="/images/prince-francis.png"
                    alt="Prince Francis, CEO Aboi Visuals - The Business Blueprint 2027"
                    className="w-full h-full object-contain transform group-hover:scale-102 transition-transform duration-500 ease-out"
                  />

                  {/* Floating Action to View Full Flyer */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onViewFlierClick();
                      }}
                      className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-white/95 hover:bg-white text-slate-900 text-[10px] sm:text-[11px] font-bold transition flex items-center gap-1.5 shadow-sm border border-slate-200/80 btn-press cursor-pointer"
                    >
                      <SparklesIcon className="w-3.5 h-3.5 text-orange-600" />
                      <span>View Full Flyer</span>
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
