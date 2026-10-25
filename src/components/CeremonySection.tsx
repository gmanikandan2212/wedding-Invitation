import { Calendar, Clock, MapPin, Navigation, Download } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { getGoogleCalendarUrl, downloadIcsFile } from "../utils/calendar";

export function CeremonySection() {
  return (
    <section
      id="ceremony"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-[#b40169] font-cinzel font-semibold mb-2">
            The Holy Matrimony
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#033140] tracking-tight">
            Wedding Ceremony
          </h2>
          <div className="w-16 h-0.5 bg-[#b40169]/40 mx-auto mt-4" />
        </div>

        {/* Ceremony Card with subtle church motif */}
        <div className="bg-white/90 rounded-2xl border border-[#bce3df] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_rgb(3,49,64,0.05)] relative overflow-hidden">
          {/* Subtle church line drawing emblem */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#eaf5f5] flex items-center justify-center border border-[#c8e8e8]">
              {/* Elegant Christian Church SVG */}
              <svg
                className="w-8 h-8 text-[#033140]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Cross on spire */}
                <path d="M12 2v4" />
                <path d="M10 4h4" />
                {/* Steeple */}
                <path d="M12 6L7 12h10L12 6z" />
                {/* Church Body */}
                <path d="M7 12v9h10v-9" />
                {/* Arched Door */}
                <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
                {/* Windows */}
                <circle cx="12" cy="14" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Time & Date */}
          <div className="text-center space-y-2 mb-8">
            <p className="text-xs sm:text-sm font-cinzel tracking-[0.2em] uppercase text-[#1b525f] font-semibold">
              {weddingConfig.ceremony.day}
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-serif-title font-bold text-[#b40169] tracking-tight">
              {weddingConfig.ceremony.date}
            </p>
            <div className="inline-flex items-center gap-2 text-sm sm:text-base text-[#033140] font-medium pt-1">
              <Clock className="w-4 h-4 text-[#b40169]" />
              <span>{weddingConfig.ceremony.time}</span>
            </div>
          </div>

          <div className="h-[1px] w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-[#bce3df] to-transparent mb-8" />

          {/* Venue Information */}
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#1b525f] font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#b40169]" />
              <span>Church Venue</span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif-title font-bold text-[#033140] tracking-wide text-balance">
              {weddingConfig.ceremony.venueName}
            </h3>
            <p className="text-base text-[#1b525f] font-medium">
              {weddingConfig.ceremony.city}
            </p>
          </div>

          {/* Action Buttons: Directions and Calendar */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href={weddingConfig.ceremony.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#033140] hover:bg-[#0a4659] text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#033140] border border-[#c8e8e8] font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#b40169]" />
              <span>Google Calendar</span>
            </a>

            <button
              type="button"
              onClick={downloadIcsFile}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#1b525f] border border-[#c8e8e8] font-medium text-xs sm:text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
              title="Download iCal / Outlook .ics file"
            >
              <Download className="w-3.5 h-3.5 text-[#1b525f]" />
              <span>.ICS File</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
