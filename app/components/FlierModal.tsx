import { XMarkIcon } from "./Icons";

interface FlierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FlierModal({ isOpen, onClose }: FlierModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="flier-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[92vh] sm:max-h-[90vh] bg-white border border-slate-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <h3 id="flier-modal-title" className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
              The Business Blueprint 2027
            </h3>
            <p className="text-[11px] sm:text-xs text-orange-600 font-bold">Official Cohort Flier</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-slate-200 text-slate-700 hover:text-slate-950 hover:bg-slate-300 transition cursor-pointer"
            aria-label="Close modal"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Flier Image */}
        <div className="overflow-y-auto p-2 sm:p-4 flex items-center justify-center bg-slate-100">
          <img
            src="/images/business-blueprint-flier.jpg"
            alt="The Business Blueprint 2027 Official Flier"
            className="max-h-[70vh] sm:max-h-[75vh] w-auto rounded-xl sm:rounded-2xl shadow-md object-contain"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] sm:text-xs text-slate-600">
          <span>January 2027 • 10 Businesses Only</span>
          <a
            href="/images/business-blueprint-flier.jpg"
            download="business-blueprint-2027.jpg"
            className="text-orange-600 hover:text-orange-700 font-bold"
          >
            Download Flier
          </a>
        </div>
      </div>
    </div>
  );
}
