import { weddingConfig } from "../config/weddingConfig";

export function ChapelFamilies() {
  return (
    <section id="families" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative leafy sprigs on left and right */}
      <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-28 opacity-40 pointer-events-none select-none hidden md:block">
        <svg className="w-full h-auto text-[#3a6b57]" viewBox="0 0 100 200" fill="currentColor">
          <path d="M0 100c30-10 60-30 80-60-10 30-20 60-40 80 30-10 60 10 50 30-20 30-60 40-90 40V100z" opacity="0.6" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <h3 className="font-serif-title uppercase tracking-[0.25em] text-sm sm:text-base md:text-lg text-[#dfbf7b] font-semibold">
          TOGETHER WITH OUR FAMILIES
        </h3>

        {/* Flourish Divider */}
        <div className="flex items-center justify-center gap-2 my-4 w-32 mx-auto">
          <span className="h-[1px] flex-1 bg-[#c5a059]/50" />
          <svg className="w-4 h-4 text-[#c5a059]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-4.5 4.5 2-7L4 9h7z" />
          </svg>
          <span className="h-[1px] flex-1 bg-[#c5a059]/50" />
        </div>

        {/* 3-Column Family Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-10">
          {/* Column 1: Bride's Parents */}
          <div className="md:col-span-5 flex flex-col items-center text-center space-y-2">
            {/* Gold Family Outline Icon */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#c5a059] mb-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="12" r="5" />
                <circle cx="15" cy="12" r="5" />
              </svg>
            </div>

            <p className="font-serif-title italic text-sm text-[#c5a059] font-medium">
              – Bride&#39;s Parents –
            </p>

            <h4 className="font-serif-title text-base sm:text-lg font-bold text-white tracking-wide text-balance">
              {weddingConfig.couple.bride.parents}
            </h4>

            <p className="text-xs sm:text-sm text-[#d4c9b8] font-medium">
              {weddingConfig.couple.bride.residence}
            </p>
          </div>

          {/* Column 2 (Center): Golden Latin Cross with Olive Branch */}
          <div className="md:col-span-2 flex flex-col items-center justify-center py-4">
            <div className="w-16 h-24 flex flex-col items-center justify-center">
              {/* Golden Cross */}
              <svg
                className="w-9 h-14 text-[#c5a059] filter drop-shadow-[0_0_8px_rgba(197,160,89,0.3)]"
                viewBox="0 0 24 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="12" y1="2" x2="12" y2="34" />
                <line x1="4" y1="12" x2="20" y2="12" />
              </svg>

              {/* Olive Branch Leaves below cross */}
              <svg
                className="w-8 h-5 text-[#8f7b44] -mt-1"
                viewBox="0 0 24 16"
                fill="currentColor"
              >
                <path d="M12 0c-4 6-10 10-12 12 3 1 8 0 12-4 4 4 9 5 12 4-2-2-8-6-12-12z" opacity="0.9" />
              </svg>
            </div>
          </div>

          {/* Column 3: Groom's Parents */}
          <div className="md:col-span-5 flex flex-col items-center text-center space-y-2">
            {/* Gold Family Outline Icon */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#c5a059] mb-1">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="12" r="5" />
                <circle cx="15" cy="12" r="5" />
              </svg>
            </div>

            <p className="font-serif-title italic text-sm text-[#c5a059] font-medium">
              – Groom&#39;s Parents –
            </p>

            <h4 className="font-serif-title text-base sm:text-lg font-bold text-white tracking-wide text-balance">
              S/o. {weddingConfig.couple.groom.parents}
            </h4>

            <p className="text-xs sm:text-sm text-[#d4c9b8] font-medium">
              {weddingConfig.couple.groom.residence}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
