import { Phone } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

export function BotanicalFamilyClosing() {
  return (
    <section id="family" className="w-full py-12 sm:py-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* Eagerly looking for your presence and prayers in Burgundy Script */}
        <div className="space-y-2 animate-text-reveal">
          <p className="font-serif-title italic text-2xl sm:text-3xl lg:text-4xl text-[#8e163b] font-bold tracking-wide drop-shadow-2xs">
            Eagerly looking for your presence and prayers.
          </p>

          {/* Small Gold Heart Flourish with Gentle Pulse */}
          <div className="flex items-center justify-center text-[#c59c3a] pt-1">
            <svg className="w-4 h-4 fill-[#c59c3a] animate-pulse" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Host: Mrs. P. Malathi */}
        <div className="pt-1">
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#0d3627] tracking-tight">
            {weddingConfig.closingMessage.host}
          </h3>
        </div>

        {/* Two Daughters / Family Representatives with Center Divider */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto pt-2 divide-y sm:divide-y-0 sm:divide-x divide-[#c59c3a]/40">
          
          {/* Premalatha */}
          <div className="pt-3 sm:pt-0 sm:px-4 group cursor-default transition-transform duration-300 hover:scale-103">
            <p className="font-serif-title text-base sm:text-lg font-bold text-[#0d3627] group-hover:text-[#8e163b] transition-colors">
              {weddingConfig.closingMessage.family[0]?.name}
            </p>
            <p className="text-xs sm:text-sm font-serif-title italic text-[#0d3627]/80 font-medium">
              ({weddingConfig.closingMessage.family[0]?.designation})
            </p>
          </div>

          {/* Indhumathi */}
          <div className="pt-3 sm:pt-0 sm:px-4 group cursor-default transition-transform duration-300 hover:scale-103">
            <p className="font-serif-title text-base sm:text-lg font-bold text-[#0d3627] group-hover:text-[#8e163b] transition-colors">
              {weddingConfig.closingMessage.family[1]?.name}
            </p>
            <p className="text-xs sm:text-sm font-serif-title italic text-[#0d3627]/80 font-medium">
              ({weddingConfig.closingMessage.family[1]?.designation})
            </p>
          </div>

        </div>

        {/* Contact Pill with Interactive Hover Micro-Animations */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-7 sm:px-9 py-3 rounded-full bg-[#0d3627] hover:bg-[#082218] text-[#fbfaf6] border-2 border-[#c59c3a] shadow-md hover:shadow-xl hover:scale-103 transition-all duration-300 group">
            <Phone className="w-4 h-4 text-[#e2c170] group-hover:rotate-12 transition-transform duration-300 animate-pulse" />
            <span className="font-cinzel font-semibold text-xs sm:text-sm tracking-wider">
              Contact:
            </span>
            <div className="flex items-center gap-2 font-serif-title text-sm sm:text-base font-bold text-[#e2c170]">
              <a
                href={`tel:${weddingConfig.contacts[0].number}`}
                className="hover:underline hover:text-white transition-colors"
              >
                {weddingConfig.contacts[0].number}
              </a>
              <span className="text-[#c59c3a]">,</span>
              <a
                href={`tel:${weddingConfig.contacts[1].number}`}
                className="hover:underline hover:text-white transition-colors"
              >
                {weddingConfig.contacts[1].number}
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
