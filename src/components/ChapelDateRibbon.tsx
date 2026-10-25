import { Countdown } from "./Countdown";

export function ChapelDateRibbon() {
  return (
    <section id="details" className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-6">
      {/* Date & Time Container matching Design 2 */}
      <div className="bg-[#0c261e]/90 backdrop-blur-md border border-[#c5a059]/45 rounded-2xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 md:gap-8 text-center md:text-left">
          {/* Item 1: Calendar Date */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#13372b] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0 shadow-inner">
              {/* Antique Gold Calendar SVG */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <circle cx="8" cy="14" r="1.2" fill="currentColor" />
                <circle cx="12" cy="14" r="1.2" fill="currentColor" />
                <circle cx="8" cy="18" r="1.2" fill="currentColor" />
                <circle cx="12" cy="18" r="1.2" fill="currentColor" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-[#c5a059] font-bold">
                FRIDAY
              </p>
              <p className="text-xl sm:text-2xl font-serif-title font-bold text-white tracking-tight">
                20 NOV 2026
              </p>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="hidden md:block h-12 w-[1px] bg-[#c5a059]/30" />

          {/* Item 2: Ceremony Time */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#13372b] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shrink-0 shadow-inner">
              {/* Antique Gold Clock SVG */}
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-serif-title font-bold text-white tracking-tight">
                9:30 AM - 10:30 AM
              </p>
              <p className="text-[11px] font-cinzel uppercase tracking-[0.2em] text-[#c5a059] font-medium">
                Church Ceremony
              </p>
            </div>
          </div>
        </div>

        {/* Live Countdown in Asia/Kolkata timezone */}
        <div className="mt-6 pt-5 border-t border-[#c5a059]/25 flex justify-center">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
