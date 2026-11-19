import {
  CompassIcon,
  LayersIcon,
  VideoIcon,
  TrendingUpIcon,
  TargetIcon,
} from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ExecutiveSummary() {
  const pillars = [
    {
      number: "01",
      title: "Clarity & Direction",
      tagline: "Purpose & Value Proposition",
      desc: "Identify your exact value proposition, acute target customer problem, and defensible market differentiation.",
      icon: <CompassIcon className="w-5 h-5 text-orange-600" />,
      iconBg: "bg-orange-50",
    },
    {
      number: "02",
      title: "Structure & Systems",
      tagline: "Operations & Profit Architecture",
      desc: "Engineer repeatable business models, pricing fundamentals, delivery workflows, and clear financial controls.",
      icon: <LayersIcon className="w-5 h-5 text-red-600" />,
      iconBg: "bg-red-50",
    },
    {
      number: "03",
      title: "Visibility & Content",
      tagline: "Attention into Customer Trust",
      desc: "Turn random social posting into high-converting storytelling, strategic marketing channels, and short-form video assets.",
      icon: <VideoIcon className="w-5 h-5 text-amber-600" />,
      iconBg: "bg-amber-50",
    },
    {
      number: "04",
      title: "Disciplined Execution",
      tagline: "12-Month Accountability Rhythm",
      desc: "Stay consistent with monthly individual progress reviews, peer mastermind sessions, and quarterly strategic audits.",
      icon: <TrendingUpIcon className="w-5 h-5 text-sky-600" />,
      iconBg: "bg-sky-50",
    },
  ];

  const quickStats = [
    { label: "Programme", value: "The Business Blueprint 2027" },
    { label: "Format", value: "2-Day Physical Intensive + 12-Month Closed Community" },
    { label: "Cohort Size", value: "Strictly 10 Selected Businesses" },
    { label: "Audience", value: "Early-Stage Entrepreneurs & Existing Business Owners" },
    { label: "Programme Period", value: "January – December 2027 (Full Year)" },
    { label: "Core Investment", value: "₦200,000 per business (Flexible ₦50k x 4)" },
    { label: "Brand Ownership", value: "Independent Business Blueprint Brand" },
    { label: "Creative Partner", value: "Aboi Visuals (Special Community Rates)" },
  ];

  return (
    <section id="overview" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Conviction Callout */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <span>The Foundational Conviction</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            A business needs more than ambition.{" "}
            <span className="text-orange-600 block sm:inline">
              It needs a system.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            A business needs more than a good product, a service, or a social media presence. It needs{" "}
            <strong className="text-slate-900 font-semibold">clarity</strong>,{" "}
            <strong className="text-slate-900 font-semibold">structure</strong>,{" "}
            <strong className="text-slate-900 font-semibold">strategic direction</strong>,{" "}
            <strong className="text-slate-900 font-semibold">visibility</strong>, and{" "}
            <strong className="text-slate-900 font-semibold">consistent execution</strong>.
          </p>
        </AnimateOnScroll>

        {/* 4 Pillars Grid - Staggered Subtle Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, i) => (
            <AnimateOnScroll key={i} delayMs={i * 90} direction="up">
              <div className="h-full p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 card-hover flex flex-col justify-between group shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div className={`p-2.5 rounded-xl ${pillar.iconBg} transform group-hover:scale-105 transition-transform duration-200`}>
                      {pillar.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-display">
                      {pillar.number}
                    </span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {pillar.tagline}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 sm:mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{pillar.desc}</p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100 text-[11px] font-bold text-orange-600">
                  Core Pillar
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Programme at a Glance Matrix */}
        <AnimateOnScroll delayMs={150}>
          <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs card-hover">
            <div className="bg-slate-100/70 px-4 sm:px-6 py-3.5 sm:py-4 border-b border-slate-200 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-orange-100 text-orange-600">
                  <TargetIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Programme at a Glance</h3>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-bold">
                <span>Strictly 10 Businesses</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-4 sm:p-6 space-y-3">
                {quickStats.slice(0, 4).map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-100 last:border-b-0 gap-0.5 sm:gap-2">
                    <span className="text-xs font-medium text-slate-500">{item.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 sm:p-6 space-y-3">
                {quickStats.slice(4).map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-2.5 border-b border-slate-100 last:border-b-0 gap-0.5 sm:gap-2">
                    <span className="text-xs font-medium text-slate-500">{item.label}</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-900 text-left sm:text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
