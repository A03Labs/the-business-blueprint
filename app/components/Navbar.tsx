import { useState } from "react";
import { MenuIcon, XMarkIcon, ArrowRightIcon } from "./Icons";
import { scrollToSection, scrollToTop } from "../utils/scroll";

export function Navbar({ onApplyClick }: { onApplyClick: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      {/* Refined Minimalist Announcement Bar */}
      <aside aria-label="Announcement" className="bg-slate-950 text-white text-[11px] font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span className="text-slate-200">
          January 2027 Closed Cohort • <strong className="text-white font-semibold">Strictly 10 Businesses</strong>
        </span>
        <span className="hidden sm:inline text-slate-400">— Applications Now Open</span>
      </aside>

      {/* Main Navbar - Clean, Spacious & Uncluttered */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-2.5 sm:gap-3 text-left cursor-pointer group"
              aria-label="Scroll to top"
            >
              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5 font-display text-base sm:text-xl font-extrabold tracking-tight text-slate-950 leading-none">
                  <span className="text-slate-400 font-semibold text-[10px] sm:text-xs tracking-wider uppercase block">THE</span>
                  <span className="text-orange-600">BUSINESS</span>
                  <span>BLUEPRINT</span>
                  <span className="bg-red-600 text-white text-[9px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded ml-0.5">
                    2027
                  </span>
                </div>
                <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-0.5 sm:mt-1">
                  Build • Structure • Grow
                </span>
              </div>
            </button>

            {/* Desktop Navigation - Clean, Accessible Buttons without # */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => scrollToSection("overview")}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("modules")}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                Curriculum
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("accountability")}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                12-Month System
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("investment")}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                Investment
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("faq")}
                className="hover:text-slate-950 transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </nav>

            {/* Right Action: Single High-Impact Button */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                type="button"
                onClick={onApplyClick}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl transition cursor-pointer shadow-sm hover:shadow btn-press"
              >
                <span>Apply for Cohort</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-700 hover:text-slate-950 p-2 rounded-lg hover:bg-slate-50 transition cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-5 pt-3 pb-6 space-y-3 shadow-lg">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              <button
                type="button"
                onClick={() => handleMobileNavClick("overview")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                Overview
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick("modules")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                Curriculum & Deliverables
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick("intensive")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                January Physical Intensive
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick("accountability")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                The 12-Month System
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick("partner")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                Creative Partner (Aboi Visuals)
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick("investment")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                Investment & Payment Plan
              </button>
              <button
                type="button"
                onClick={() => handleMobileNavClick("faq")}
                className="w-full text-left px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-orange-600 transition cursor-pointer"
              >
                Frequently Asked Questions
              </button>
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onApplyClick();
                }}
                className="w-full text-center text-xs font-bold uppercase tracking-wider bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl shadow-sm cursor-pointer btn-press"
              >
                Apply for Cohort 2027 (10 Spots)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
