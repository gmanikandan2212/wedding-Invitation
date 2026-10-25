import { weddingConfig } from "../config/weddingConfig";
import { Countdown } from "./Countdown";
import { Navigation, Calendar, Clock } from "lucide-react";

export function BotanicalEvents() {
  return (
    <section id="events" className="w-full py-12 sm:py-16 relative">
      <div id="venues" className="absolute -top-24 pointer-events-none" />
      <div className="bg-white/95 rounded-3xl border-2 border-[#c59c3a]/35 p-6 sm:p-8 lg:p-12 shadow-[0_16px_50px_rgba(13,54,39,0.07)] transition-all duration-500 hover:border-[#c59c3a]/60">
        
        {/* Section Heading with Professional Typography Animation */}
        <div className="text-center mb-10 sm:mb-12 animate-text-reveal">
          {/* Golden Leaf Sprig */}
          <div className="flex items-center justify-center text-[#c59c3a] mb-2 animate-sway">
            <svg className="w-8 h-4 text-[#c59c3a]" viewBox="0 0 32 16" fill="currentColor">
              <ellipse cx="16" cy="8" rx="6" ry="2.5" />
              <ellipse cx="8" cy="6" rx="5" ry="2" transform="rotate(-20 8 6)" />
              <ellipse cx="24" cy="6" rx="5" ry="2" transform="rotate(20 24 6)" />
            </svg>
          </div>

          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3627] tracking-tight transition-colors duration-300">
            Ceremony &amp; Reception Venues
          </h2>

          <div className="flex items-center justify-center gap-2 mt-3.5 w-32 mx-auto text-[#c59c3a]">
            <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#c59c3a]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#c59c3a]" />
            <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#c59c3a]/60" />
          </div>
        </div>

        {/* 2-Column Unified Venue Cards with Real Photos & Schedule Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Venue 1: Church Ceremony Card */}
          <div className="wedding-card-surface rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,54,39,0.12),0_8px_30px_rgba(197,156,58,0.2)]">
            <div>
              {/* Church Photo with Floating Pill Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#faf9f5]">
                <img
                  src="/assets/chapel/church_ceremony.jpg"
                  alt="CSI Henry Little Memorial Church Karur"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#0d3627]/90 backdrop-blur-md text-[#fbfaf6] text-[11px] font-cinzel font-bold tracking-wider uppercase border border-[#c59c3a]/70 shadow-sm animate-float-slow">
                  WEDDING CEREMONY
                </div>
              </div>

              {/* Church Information & Schedule with Professional Text Typography */}
              <div className="p-6 sm:p-8 text-center space-y-3.5">
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#0d3627] tracking-tight group-hover:text-[#8e163b] transition-colors duration-300">
                  {weddingConfig.ceremony.venueName}
                </h3>

                <p className="text-sm sm:text-base font-medium text-[#0d3627]/80 tracking-wide">
                  {weddingConfig.ceremony.city}, Tamil Nadu
                </p>

                {/* Schedule Timings Box */}
                <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#c59c3a]/30 space-y-2 text-xs sm:text-sm text-[#0d3627] font-medium transition-colors group-hover:border-[#c59c3a]/60">
                  <p className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8e163b]" />
                    <span className="font-semibold">Friday, 20 November 2026</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 text-[#8e163b] font-bold">
                    <Clock className="w-4 h-4 text-[#8e163b] animate-pulse" />
                    <span>9:30 AM – 10:30 AM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Single Prominent GET DIRECTIONS & MAP Button */}
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-center">
              <a
                href={weddingConfig.ceremony.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0d3627] hover:bg-[#07241a] text-[#fbfaf6] border-2 border-[#c59c3a] text-xs sm:text-sm font-cinzel font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <Navigation className="w-4 h-4 text-[#e2c170]" />
                <span>Get Directions &amp; Map</span>
              </a>
            </div>
          </div>

          {/* Venue 2: Reception Venue Card */}
          <div className="wedding-card-surface rounded-3xl overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,54,39,0.12),0_8px_30px_rgba(197,156,58,0.2)]">
            <div>
              {/* Reception Photo with Floating Pill Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#faf9f5]">
                <img
                  src="/assets/chapel/anar_punithavathi_mahal_official.jpg"
                  alt="Anar Punithavathi Mahal Karur"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-1000 ease-out"
                  loading="lazy"
                />
                <div
                  className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-[#0d3627]/90 backdrop-blur-md text-[#fbfaf6] text-[11px] font-cinzel font-bold tracking-wider uppercase border border-[#c59c3a]/70 shadow-sm animate-float-slow"
                  style={{ animationDelay: "1.5s" }}
                >
                  RECEPTION VENUE
                </div>
              </div>

              {/* Reception Information & Schedule */}
              <div className="p-6 sm:p-8 text-center space-y-3.5">
                <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#0d3627] tracking-tight group-hover:text-[#8e163b] transition-colors duration-300">
                  {weddingConfig.reception.venueName}
                </h3>

                <p className="text-sm sm:text-base font-medium text-[#0d3627]/80 tracking-wide">
                  {weddingConfig.reception.landmark}, {weddingConfig.reception.city}
                </p>

                {/* Schedule Timings Box */}
                <div className="p-4 rounded-2xl bg-[#faf9f5] border border-[#c59c3a]/30 space-y-2 text-xs sm:text-sm text-[#0d3627] font-medium transition-colors group-hover:border-[#c59c3a]/60">
                  <p className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8e163b]" />
                    <span className="font-semibold">Friday, 20 November 2026</span>
                  </p>
                  <p className="flex items-center justify-center gap-2 text-[#8e163b] font-bold">
                    <Clock className="w-4 h-4 text-[#8e163b] animate-pulse" />
                    <span>Following the Church Ceremony</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Single Prominent GET DIRECTIONS & MAP Button */}
            <div className="p-6 sm:p-8 pt-0 flex items-center justify-center">
              <a
                href={weddingConfig.reception.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0d3627] hover:bg-[#07241a] text-[#fbfaf6] border-2 border-[#c59c3a] text-xs sm:text-sm font-cinzel font-bold tracking-wider uppercase transition-all shadow-sm flex items-center justify-center gap-2.5 cursor-pointer hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <Navigation className="w-4 h-4 text-[#e2c170]" />
                <span>Get Directions &amp; Map</span>
              </a>
            </div>
          </div>

        </div>

        {/* Live Countdown Timer */}
        <div className="mt-12 pt-8 border-t border-[#c59c3a]/30 flex justify-center">
          <Countdown />
        </div>

      </div>
    </section>
  );
}
