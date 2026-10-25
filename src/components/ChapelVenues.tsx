import { Calendar, Clock, Navigation } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { getGoogleCalendarUrl } from "../utils/calendar";

export function ChapelVenues() {
  return (
    <section id="venues" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="font-serif-title uppercase tracking-[0.25em] text-sm sm:text-base md:text-lg text-[#dfbf7b] font-semibold">
            OUR WEDDING VENUES
          </h3>

          <div className="flex items-center justify-center gap-2 my-4 w-32 mx-auto">
            <span className="h-[1px] flex-1 bg-[#c5a059]/50" />
            <svg className="w-4 h-4 text-[#c5a059]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 16l-4.5 4.5 2-7L4 9h7z" />
            </svg>
            <span className="h-[1px] flex-1 bg-[#c5a059]/50" />
          </div>
        </div>

        {/* 2-Column Venues Grid matching Design 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Venue 1: Church Ceremony */}
          <div className="bg-[#0c261e]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-[0_12px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between group hover:border-[#c5a059] transition-colors">
            <div>
              {/* Church Photo from Design 2 */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-black/40">
                <img
                  src="/assets/chapel/church_ceremony.jpg"
                  alt="CSI Henry Little Memorial Church Karur"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Church Information */}
              <div className="p-6 sm:p-7 text-center space-y-2.5">
                <p className="font-cinzel uppercase tracking-[0.2em] text-xs font-semibold text-[#c5a059]">
                  CHURCH CEREMONY
                </p>

                <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {weddingConfig.ceremony.venueName}
                </h4>

                <p className="text-sm font-medium text-[#d4c9b8]">
                  {weddingConfig.ceremony.city}.
                </p>

                <div className="h-[1px] w-16 bg-[#c5a059]/30 mx-auto my-3" />

                <div className="space-y-1.5 text-xs sm:text-sm text-[#ede5d8] font-medium pt-1">
                  <p className="flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-[#c5a059]" />
                    <span>Friday, 20 Nov 2026</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4 text-[#c5a059]" />
                    <span>9:30 AM - 10:30 AM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Actions: Directions & Add to Calendar */}
            <div className="p-6 pt-0 flex flex-wrap items-center justify-center gap-3">
              <a
                href={weddingConfig.ceremony.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#1b4335] hover:bg-[#235846] text-[#f7f2e8] border border-[#c5a059]/60 text-xs font-cinzel font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Get Directions</span>
              </a>

              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-[#0a1f18] hover:bg-[#113127] text-[#c5a059] border border-[#c5a059]/40 text-xs font-cinzel font-semibold tracking-wider uppercase transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Add to Calendar</span>
              </a>
            </div>
          </div>

          {/* Venue 2: Reception to Follow */}
          <div className="bg-[#0c261e]/90 backdrop-blur-md rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-[0_12px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between group hover:border-[#c5a059] transition-colors">
            <div>
              {/* Reception Photo from Design 2 */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-black/40">
                <img
                  src="/assets/chapel/reception_hall.jpg"
                  alt="Anar Punithavathi Mahal Karur"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Reception Information */}
              <div className="p-6 sm:p-7 text-center space-y-2.5">
                <p className="font-cinzel uppercase tracking-[0.2em] text-xs font-semibold text-[#c5a059]">
                  {weddingConfig.reception.header}
                </p>

                <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {weddingConfig.reception.venueName}
                </h4>

                <p className="text-sm font-medium text-[#d4c9b8]">
                  {weddingConfig.reception.landmark}, {weddingConfig.reception.city}.
                </p>

                <div className="h-[1px] w-16 bg-[#c5a059]/30 mx-auto my-3" />

                {/* Decorative Flourish */}
                <div className="flex items-center justify-center gap-2 py-2">
                  <span className="h-[1px] w-12 bg-[#c5a059]/40" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span className="h-[1px] w-12 bg-[#c5a059]/40" />
                </div>
              </div>
            </div>

            {/* Action: Directions */}
            <div className="p-6 pt-0 flex justify-center">
              <a
                href={weddingConfig.reception.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-[#1b4335] hover:bg-[#235846] text-[#f7f2e8] border border-[#c5a059]/60 text-xs font-cinzel font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Get Directions to Mahal</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
