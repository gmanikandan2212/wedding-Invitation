import { Calendar, Clock, Navigation, Map } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

export function BotanicalVenues() {
  return (
    <section id="venues" className="w-full py-12 sm:py-16">
      {/* Section Header with Golden Leaf Sprig */}
      <div className="text-center mb-10 sm:mb-14">
        {/* Golden Leaf Sprig */}
        <div className="flex items-center justify-center text-[#c59c3a] mb-2">
          <svg className="w-8 h-4 text-[#c59c3a]" viewBox="0 0 32 16" fill="currentColor">
            <ellipse cx="16" cy="8" rx="6" ry="2.5" />
            <ellipse cx="8" cy="6" rx="5" ry="2" transform="rotate(-20 8 6)" />
            <ellipse cx="24" cy="6" rx="5" ry="2" transform="rotate(20 24 6)" />
          </svg>
        </div>

        <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d3627] tracking-tight">
          Our Wedding Venues
        </h2>
      </div>

      {/* 2-Column Balanced Venue Cards on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* Venue 1: Church Ceremony */}
        <div className="wedding-card-surface rounded-3xl overflow-hidden flex flex-col justify-between group">
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
                CEREMONY VENUE
              </div>
            </div>

            {/* Church Information */}
            <div className="p-6 sm:p-8 text-center space-y-3">
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#0d3627] tracking-tight group-hover:text-[#8e163b] transition-colors">
                {weddingConfig.ceremony.venueName}
              </h3>

              <p className="text-sm sm:text-base font-medium text-[#0d3627]/80">
                {weddingConfig.ceremony.city}, Tamil Nadu
              </p>

              <div className="space-y-1.5 text-xs sm:text-sm text-[#0d3627] font-medium pt-2">
                <p className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8e163b]" />
                  <span>Friday, 20 November 2026</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#8e163b]" />
                  <span>9:30 AM - 10:30 AM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Button: Single Prominent GET DIRECTIONS & MAP */}
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

        {/* Venue 2: Reception Venue */}
        <div className="wedding-card-surface rounded-3xl overflow-hidden flex flex-col justify-between group">
          <div>
            {/* Reception Photo with Floating Pill Badge - Real Anar Punithavathi Mahal photo */}
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

            {/* Reception Information */}
            <div className="p-6 sm:p-8 text-center space-y-3">
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#0d3627] tracking-tight group-hover:text-[#8e163b] transition-colors">
                {weddingConfig.reception.venueName}
              </h3>

              <p className="text-sm sm:text-base font-medium text-[#0d3627]/80">
                {weddingConfig.reception.landmark}, {weddingConfig.reception.city}
              </p>

              <div className="space-y-1.5 text-xs sm:text-sm text-[#0d3627] font-medium pt-2">
                <p className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8e163b]" />
                  <span>Friday, 20 November 2026</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-[#8e163b]" />
                  <span>Following the Church Ceremony</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Button: Single Prominent GET DIRECTIONS & MAP */}
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
    </section>
  );
}
