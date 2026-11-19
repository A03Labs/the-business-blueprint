import { ArrowRightIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { scrollToSection, scrollToTop } from "../utils/scroll";

export function Footer({ onApplyClick }: { onApplyClick: () => void }) {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Top Section: Brand Identity & Cohort Summary */}
        <AnimateOnScroll className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start pb-10 sm:pb-14 border-b border-slate-200">
          {/* Left: Brand & Manifesto */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="flex items-center gap-1.5 font-display text-lg sm:text-xl font-black text-slate-950 tracking-tight">
                <span className="text-slate-400 text-xs font-semibold tracking-wider uppercase">THE</span>
                <span className="text-orange-600">BUSINESS</span>
                <span>BLUEPRINT</span>
                <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded ml-0.5">
                  2027
                </span>
              </div>
              <span className="bg-red-600 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded">
                BUILD. STRUCTURE. GROW.
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight font-display">
              Don&apos;t just run a business.{" "}
              <span className="text-orange-600">Build one.</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl font-normal">
              An independent 12-month business development, strategy, and accountability community.
              Combining an intensive January 2027 physical training with guided implementation, monthly 1-on-1 reviews,
              and quarterly audits for a closed cohort of 10 business owners.
            </p>
          </div>

          {/* Right: Quick Action & Status Card */}
          <div className="lg:col-span-5 w-full">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3.5 sm:space-y-4 card-hover">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Cohort Status
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Applications Active
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-700 pt-1 border-t border-slate-200">
                <span>Commencement: <strong className="text-slate-900">January 2027</strong></span>
                <span>Strict Limit: <strong className="text-slate-900">10 Businesses</strong></span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={onApplyClick}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-xs btn-press"
                >
                  <span>Apply Online</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
                <a
                  href="https://wa.me/2348000000000?text=Hello%2C%20I%20have%20an%20enquiry%20regarding%20The%20Business%20Blueprint%202027"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition btn-press"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Middle Section: 4 Balanced Navigation Columns */}
        <AnimateOnScroll delayMs={100} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 py-10 sm:py-12 border-b border-slate-200 text-xs">
          {/* Column 1: Curriculum */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-slate-950 text-xs">
              Curriculum
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("modules")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  5 Learning Modules
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("intensive")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  January Physical Intensive
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("intensive")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Business Blueprint Workbook
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("modules")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Tangible Deliverables
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: 12-Month System */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-slate-950 text-xs">
              12-Month System
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("accountability")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Monthly Business Updates
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("accountability")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  1-on-1 Strategy Reviews
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("accountability")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Group Mastermind Calls
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("accountability")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Quarterly Strategic Audits
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosystem & Partners */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-slate-950 text-xs">
              Ecosystem
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("partner")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Aboi Visuals Partnership
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("partner")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Prince Francis Profile
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("partner")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Monthly Video Packages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("partner")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Business Service Network
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions & Details */}
          <div className="space-y-3">
            <div className="font-bold uppercase tracking-wider text-slate-950 text-xs">
              Admissions
            </div>
            <ul className="space-y-2 text-slate-600">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("investment")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  ₦200,000 Programme Fee
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("investment")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  4-Stage Payment Plan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("overview")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Candidate Selection
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection("faq")}
                  className="hover:text-orange-600 transition text-left cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Bottom Section: Legal Governance, Copyright & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-slate-700 font-medium">
              <span>© 2027 The Business Blueprint. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>Creative Implementation Partner: Aboi Visuals.</span>
            </div>
            <p className="text-[11px] text-slate-400 max-w-2xl leading-relaxed">
              The programme provides business development guidance and accountability; it does not take over ownership or daily management.
              Participating business owners remain responsible for all business decisions, implementation, compliance, and commercial outcomes.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-950 font-semibold transition cursor-pointer py-1.5 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 btn-press"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
