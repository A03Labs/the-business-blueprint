import { useState } from "react";
import { CheckCircleIcon, ArrowRightIcon } from "./Icons";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function ApplicationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    whatsapp: "",
    email: "",
    stage: "existing",
    industry: "",
    challenge: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="py-16 sm:py-24 bg-white border-t border-slate-200/80 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-10 sm:mb-12 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider">
            <span>Official Application</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display">
            Apply to Secure 1 of 10 Seats
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            The Business Blueprint 2027 closed cohort begins in <strong>January 2027</strong>.
            Applications are reviewed in the order received until all 10 seats are filled.
          </p>
        </AnimateOnScroll>

        {/* Application Card */}
        <AnimateOnScroll delayMs={100}>
          <div className="rounded-2xl sm:rounded-3xl bg-slate-50 border-2 border-slate-200 p-5 sm:p-8 lg:p-12 shadow-sm card-hover relative overflow-hidden">
            {submitted ? (
              <div className="text-center py-8 sm:py-12 space-y-5 sm:space-y-6 animate-fade-in-up">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                  <CheckCircleIcon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-3xl font-extrabold text-slate-950 font-display">
                    Application Successfully Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, <strong className="text-slate-900">{formData.fullName || "Entrepreneur"}</strong>.
                    We have received your application for <strong className="text-orange-600">{formData.businessName || "your business"}</strong>.
                  </p>
                </div>

                <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 max-w-lg mx-auto text-left text-xs text-slate-700 space-y-2.5 sm:space-y-3 shadow-xs">
                  <div className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                    What Happens Next?
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">1.</span>
                    <span>Our committee reviews your business submission for cohort balance.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">2.</span>
                    <span>Admitted applicants receive formal confirmation within 48 hours.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-orange-600 font-bold">3.</span>
                    <span>Upon confirmation, payment of the ₦50,000 commitment deposit confirms your seat.</span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/2348000000000?text=Hello%2C%20I%20have%20submitted%20my%20application%20for%20${encodeURIComponent(formData.businessName || "my business")}%20to%20The%20Business%20Blueprint%202027`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xs transition btn-press"
                  >
                    <span>Connect with us on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition btn-press"
                  >
                    Edit Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Samuel Adekunle"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition shadow-xs"
                    />
                  </div>

                  {/* Business Name */}
                  <div className="space-y-2">
                    <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Business / Brand Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      required
                      placeholder="e.g. Apex Apparel & Co."
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* WhatsApp Phone */}
                  <div className="space-y-2">
                    <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      WhatsApp Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      required
                      placeholder="e.g. +234 801 234 5678"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition shadow-xs"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. samuel@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Business Stage */}
                  <div className="space-y-2">
                    <label htmlFor="stage" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Current Business Stage <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="stage"
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition shadow-xs"
                    >
                      <option value="existing">Existing Business Owner (seeking systems & scale)</option>
                      <option value="early">Early-Stage Entrepreneur (defined offer, building foundation)</option>
                    </select>
                  </div>

                  {/* Industry / Niche */}
                  <div className="space-y-2">
                    <label htmlFor="industry" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Industry / Sector <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="industry"
                      type="text"
                      required
                      placeholder="e.g. Retail, Fashion, Tech, Real Estate, Media"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition shadow-xs"
                    />
                  </div>
                </div>

                {/* Primary Challenge */}
                <div className="space-y-2">
                  <label htmlFor="challenge" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    What is your primary bottleneck or growth goal for 2027? <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="challenge"
                    rows={3}
                    required
                    placeholder="Tell us what you want to fix (e.g. erratic sales, lack of pricing structure, missing video content, operational overwhelm)..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-orange-600 focus:ring-1 focus:ring-orange-600 transition resize-none shadow-xs"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl shadow-xs transition cursor-pointer btn-press"
                  >
                    <span>Submit Cohort Application</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                  <span>Core Investment: ₦200,000</span>
                  <span>•</span>
                  <span>Commitment Deposit: ₦50,000 upon acceptance</span>
                </div>
              </form>
            )}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
