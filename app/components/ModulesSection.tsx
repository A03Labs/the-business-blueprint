import { useState } from "react";
import {
  CompassIcon,
  LayersIcon,
  TrendingUpIcon,
  VideoIcon,
  TargetIcon,
  FileTextIcon,
  CheckIcon,
} from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ModulesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const modules = [
    {
      id: "01",
      title: "Business Clarity & Identity",
      tagline: "Core Purpose & Differentiation",
      icon: <CompassIcon className="w-5 h-5" />,
      pillColor: "text-orange-800 bg-orange-100 border-orange-200",
      description:
        "Clarify business purpose and direction, value proposition, target audience, customer problem, market understanding, and brand positioning.",
      topics: [
        "Business purpose and long-term direction",
        "Defining a compelling value proposition",
        "Target audience and deep customer problem analysis",
        "Market understanding and competitive differentiation",
        "Strategic brand positioning to command premium value",
      ],
      outputName: "Business Clarity Canvas",
      outputDesc: "A complete architectural canvas mapping your business direction, customer profile, and competitive advantage.",
    },
    {
      id: "02",
      title: "Business Structure & Systems",
      tagline: "Operations & Profit Architecture",
      icon: <LayersIcon className="w-5 h-5" />,
      pillColor: "text-red-800 bg-red-100 border-red-200",
      description:
        "Structure business models and revenue streams, products and services, pricing fundamentals, operational processes, and financial organization.",
      topics: [
        "Business model and diversified revenue streams",
        "Product and service catalog packaging",
        "Pricing fundamentals and profit margin protection",
        "Standard operating processes and customer experience design",
        "Team roles, responsibilities, and basic financial organization",
      ],
      outputName: "Business Structure Map",
      outputDesc: "A visual operational blueprint detailing service delivery, pricing tiers, and internal processes.",
    },
    {
      id: "03",
      title: "Business Strategy & Growth",
      tagline: "Acquisition & Partnerships",
      icon: <TrendingUpIcon className="w-5 h-5" />,
      pillColor: "text-amber-800 bg-amber-100 border-amber-200",
      description:
        "Define 2027 business goals, market and competitor analysis, customer acquisition and retention, sales strategy, and strategic partnerships.",
      topics: [
        "2027 annual business goals and measurable targets",
        "Market and competitor analysis",
        "Customer acquisition funnels and repeat retention systems",
        "Sales strategy tailored to your customer journey",
        "Strategic partnerships, risk management, and long-term sustainability",
      ],
      outputName: "2027 Business Growth Map",
      outputDesc: "A comprehensive strategic growth plan with acquisition channels, sales targets, and expansion milestones.",
    },
    {
      id: "04",
      title: "Marketing, Content & Visibility",
      tagline: "Storytelling & Trust Building",
      icon: <VideoIcon className="w-5 h-5" />,
      pillColor: "text-sky-800 bg-sky-100 border-sky-200",
      description:
        "Establish brand messaging, marketing channels, content pillars, storytelling, video and social media strategy, customer trust, and campaigns.",
      topics: [
        "Brand messaging and tone of voice",
        "Selecting high-ROI marketing channels for your niche",
        "Content pillars and organic brand storytelling",
        "Video and social media strategy for credibility and customer trust",
        "Promotional campaigns and customer conversion funnels",
      ],
      outputName: "90-Day Marketing & Visibility Plan",
      outputDesc: "A structured 90-day plan covering message themes, video direction, channels, and conversion touchpoints.",
    },
    {
      id: "05",
      title: "Execution & Performance",
      tagline: "Discipline, KPIs & Review",
      icon: <TargetIcon className="w-5 h-5" />,
      pillColor: "text-emerald-800 bg-emerald-100 border-emerald-200",
      description:
        "Master prioritization, quarterly planning, KPIs, performance tracking, implementation discipline, and reviewing results to adjust strategy.",
      topics: [
        "Ruthless prioritization: identifying what moves the needle",
        "Quarterly planning and milestone setting",
        "Key performance indicators (KPIs) and simple tracking dashboards",
        "Implementation discipline and resolving operational blockers",
        "Reviewing empirical data and strategically pivoting when necessary",
      ],
      outputName: "90-Day Business Execution Roadmap",
      outputDesc: "A practical sprint roadmap with weekly targets, milestones, and performance scorecards.",
    },
  ];

  return (
    <section id="modules" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <span>Programme Curriculum</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            The Five Learning Modules
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg">
            Practical and implementation-focused. Each module concludes with a <strong>concrete blueprint output</strong>{" "}
            you will use directly in your daily operations.
          </p>
        </AnimateOnScroll>

        {/* Tab Buttons */}
        <AnimateOnScroll delayMs={100} className="flex items-center justify-start lg:justify-center overflow-x-auto px-1 pb-3 mb-6 sm:mb-8 gap-2 no-scrollbar">
          {modules.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs font-bold whitespace-nowrap transition cursor-pointer btn-press shrink-0 ${
                activeTab === idx
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-extrabold ${activeTab === idx ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"}`}>
                {m.id}
              </span>
              <span>{m.title}</span>
            </button>
          ))}
        </AnimateOnScroll>

        {/* Active Module Detailed Card with Smooth Transition Key */}
        <AnimateOnScroll delayMs={150}>
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs card-hover">
            <div key={activeTab} className="p-5 sm:p-8 lg:p-12 animate-fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Module Details */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  <div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${modules[activeTab].pillColor}`}>
                      Module {modules[activeTab].id}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    {modules[activeTab].title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                    {modules[activeTab].description}
                  </p>

                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Curriculum Topics:
                    </div>
                    <div className="space-y-2.5">
                      {modules[activeTab].topics.map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                          <div className="p-1 rounded-md bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                            <CheckIcon className="w-3 h-3" />
                          </div>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Tangible Deliverable Output Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-orange-50/80 border-2 border-orange-200 p-5 sm:p-7 space-y-4 card-hover">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-800">
                      <FileTextIcon className="w-4 h-4" />
                      <span>Tangible Programme Output</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 font-display">
                      {modules[activeTab].outputName}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {modules[activeTab].outputDesc}
                    </p>

                    <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-orange-200/80 text-xs text-slate-700 space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Delivery Format
                      </div>
                      <div className="font-semibold text-slate-900">
                        Physical Intensive + Guided Implementation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module Navigation Footer */}
            <div className="bg-slate-50 px-5 sm:px-8 py-3.5 sm:py-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <button
                onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : modules.length - 1))}
                className="font-bold text-slate-600 hover:text-slate-950 transition cursor-pointer btn-press"
              >
                ← Previous Module
              </button>
              <span className="text-slate-400 font-medium">
                {activeTab + 1} of {modules.length} Modules
              </span>
              <button
                onClick={() => setActiveTab((prev) => (prev < modules.length - 1 ? prev + 1 : 0))}
                className="font-bold text-orange-600 hover:text-orange-700 transition cursor-pointer btn-press"
              >
                Next Module →
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
