import { SparklesIcon, CheckCircleIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function PartnerAndNetwork() {
  const vendorCategories = [
    { title: "Brand Identity & Packaging", desc: "Logo systems, brand guidelines, packaging and product labels." },
    { title: "Printing & Materials", desc: "Business cards, promotional flyers, merchandise, and custom corporate printing." },
    { title: "Digital & Web Development", desc: "High-converting sales pages, landing pages, and business website setup." },
    { title: "Accounting & Bookkeeping", desc: "Bookkeeping setup, basic financial organization, and advisory." },
    { title: "Photography & Videography", desc: "Commercial product photography, corporate headshots, and media." },
    { title: "Logistics & Distribution", desc: "Reliable dispatch services, fulfillment, and nationwide logistics." },
  ];

  return (
    <section id="partner" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <span>Creative Partner & Network</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Creative Partner & Business Service Network
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal">
            Gain direct access to pre-negotiated preferential community rates across a curated network of professional service providers.
          </p>
        </AnimateOnScroll>

        {/* Spotlight on Aboi Visuals */}
        <AnimateOnScroll delayMs={100}>
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 shadow-xs card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: About Partner */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
                  <SparklesIcon className="w-4 h-4" />
                  <span>Creative Implementation Partner</span>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4">
                  <img
                    src="/images/prince-francis.png"
                    alt="Prince Francis"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover object-top border-2 border-orange-500 shadow-sm shrink-0"
                  />
                  <div className="space-y-0.5">
                    <h3 className="text-xl sm:text-3xl font-black text-slate-950 font-display">
                      Aboi Visuals
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600">
                      <span className="font-semibold text-slate-900">Prince Francis</span>
                      <span className="text-orange-600 font-bold">• CEO, Aboi Visuals</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-base leading-relaxed font-normal">
                  Aboi Visuals serves as an independent creative implementation partner to the Business Blueprint community.
                  Participants may choose to engage Aboi Visuals for monthly content production under a separate, discounted community contract.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Content Production Scope (10 Videos / Month):
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Monthly content shoot planning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>10 agreed video assets per month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Professional editing and delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Optional social media management</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Pricing Table Comparison */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white border border-slate-200 p-5 sm:p-6 space-y-3.5 sm:space-y-4 shadow-sm card-hover">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Community Content Rates
                    </div>
                    <span className="text-emerald-700 text-xs font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Discounted Rate
                    </span>
                  </div>

                  {/* Per Video Rate */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Per Video</div>
                      <div className="text-[11px] text-slate-400 line-through">Standard: ₦30,000</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-extrabold text-orange-600 font-display">₦20,000</div>
                      <div className="text-[10px] text-emerald-700 font-semibold">Community Rate</div>
                    </div>
                  </div>

                  {/* 10-Video Monthly Package */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-orange-50/80 border-2 border-orange-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">10 Videos / Month</div>
                      <div className="text-[11px] text-slate-400 line-through">Standard: ₦300,000</div>
                    </div>
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black text-slate-950 font-display">₦200,000</div>
                      <div className="text-[10px] text-orange-800 font-bold">Save ₦100,000 / mo</div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed italic text-center">
                    *Optional add-on service. Contracted and paid separately with Aboi Visuals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Business Service Network Categories */}
        <div>
          <AnimateOnScroll className="mb-5 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-950">The Business Service Network</h3>
            <p className="text-xs text-slate-500 mt-1">Preferential rates negotiated for cohort members across verified providers</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {vendorCategories.map((cat, idx) => (
              <AnimateOnScroll key={idx} delayMs={idx * 80} direction="up">
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 card-hover flex flex-col justify-between shadow-xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
                      <div className="w-2 h-2 rounded-full bg-orange-600" />
                      <h4 className="text-base font-bold text-slate-900">{cat.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{cat.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-semibold text-orange-600">
                    Preferential Community Pricing
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
