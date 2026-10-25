import { Navigation, Calendar, MapPin, MessageCircle } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { getGoogleCalendarUrl, getWhatsAppWishUrl } from "../utils/calendar";

export function FloatingActions() {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-4 left-0 right-0 z-40 px-4 pointer-events-none md:hidden">
      <div className="max-w-sm mx-auto bg-[#0d3627]/95 backdrop-blur-md rounded-full border border-[#c59c3a]/60 shadow-[0_10px_30px_rgba(13,54,39,0.35)] p-1.5 flex items-center justify-around pointer-events-auto">
        {/* Church Directions */}
        <a
          href={weddingConfig.ceremony.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-full hover:bg-[#164a37] text-[#fbfaf6] transition-colors"
          title="Directions to Church"
        >
          <Navigation className="w-4 h-4 text-[#e2c170]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Church</span>
        </a>

        {/* Reception Directions */}
        <a
          href={weddingConfig.reception.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-full hover:bg-[#13372b] text-[#f7f2e8] transition-colors"
          title="Directions to Mahal"
        >
          <MapPin className="w-4 h-4 text-[#c5a059]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Reception</span>
        </a>

        {/* Add to Calendar */}
        <a
          href={getGoogleCalendarUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-full hover:bg-[#13372b] text-[#f7f2e8] transition-colors"
          title="Add to Calendar"
        >
          <Calendar className="w-4 h-4 text-[#c5a059]" />
          <span className="text-[10px] font-semibold tracking-tight mt-0.5">Calendar</span>
        </a>

        {/* WhatsApp Wish */}
        <a
          href={getWhatsAppWishUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-3 rounded-full bg-[#25D366]/25 hover:bg-[#25D366]/40 text-[#25D366] transition-colors"
          title="Send Wedding Wishes via WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-[10px] font-bold tracking-tight mt-0.5 text-emerald-300">Wish</span>
        </a>
      </div>
    </aside>
  );
}
