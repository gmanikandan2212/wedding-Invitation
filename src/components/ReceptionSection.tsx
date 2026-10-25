import { MapPin, Navigation } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

export function ReceptionSection() {
  return (
    <section
      id="reception"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-[#ebf6f6]/60 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#b40169] font-cinzel font-semibold mb-2">
            Celebration & Feast
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#033140] tracking-tight">
            Wedding Reception
          </h2>
          <div className="w-16 h-0.5 bg-[#b40169]/40 mx-auto mt-4" />
        </div>

        {/* Reception Card */}
        <div className="bg-white/90 rounded-2xl border border-[#bce3df] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_rgb(3,49,64,0.05)] text-center relative">
          {/* Intertwined Wedding Rings Emblem */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#fdf2f7] flex items-center justify-center border border-[#f7d6e6]">
              {/* Intertwined Wedding Rings SVG */}
              <svg
                className="w-8 h-8 text-[#b40169]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Left Ring */}
                <circle cx="9" cy="12" r="5" />
                {/* Right Ring */}
                <circle cx="15" cy="12" r="5" />
                {/* Gemstone Diamond Accent on Top of Left Ring */}
                <path d="M9 7l1.2-2h-2.4L9 7z" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <p className="text-xs sm:text-sm font-cinzel tracking-[0.25em] uppercase text-[#b40169] font-bold">
              {weddingConfig.reception.header}
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif-title font-bold text-[#033140] tracking-wide text-balance">
              {weddingConfig.reception.venueName}
            </h3>
            <p className="text-sm sm:text-base text-[#1b525f] font-medium">
              {weddingConfig.reception.landmark}, {weddingConfig.reception.city}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#033140]/80 max-w-lg mx-auto mb-8 font-sans">
            Join us immediately following the church ceremony to share in our joy,
            fellowship, and celebratory feast.
          </p>

          {/* Action Link */}
          <div className="flex justify-center">
            <a
              href={weddingConfig.reception.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#033140] hover:bg-[#0a4659] text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions to Mahal</span>
            </a>
          </div>

          {/* Location details card */}
          <div className="mt-8 pt-6 border-t border-[#bce3df]/70 flex flex-wrap items-center justify-center gap-6 text-xs text-[#1b525f]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#b40169]" />
              <span>Adjacent to New Bus Stand</span>
            </div>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Easy Bus & Taxi Access</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Karur, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
