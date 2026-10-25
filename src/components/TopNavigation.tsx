import { Calendar, Share2 } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { getGoogleCalendarUrl, getWhatsAppShareUrl } from "../utils/calendar";

interface TopNavigationProps {
  onOpenCardModal: () => void;
}

export function TopNavigation({ onOpenCardModal }: TopNavigationProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#eaf5f5]/90 backdrop-blur-md border-b border-[#c8e8e8]/60 transition-all duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <a
          href="#"
          className="text-lg sm:text-xl font-serif-title font-semibold tracking-tight text-[#033140] hover:text-[#b40169] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>{weddingConfig.couple.bride.firstName}</span>
          <span className="font-script text-xl sm:text-2xl text-[#b40169] font-normal leading-none">
            &
          </span>
          <span>{weddingConfig.couple.groom.firstName}</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Invitation Navigation"
          className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest font-medium text-[#1b525f]"
        >
          <a
            href="#invitation"
            className="hover:text-[#b40169] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Invitation
          </a>
          <a
            href="#ceremony"
            className="hover:text-[#b40169] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Ceremony
          </a>
          <a
            href="#reception"
            className="hover:text-[#b40169] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Reception
          </a>
          <a
            href="#family"
            className="hover:text-[#b40169] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Family
          </a>
          <button
            type="button"
            onClick={onOpenCardModal}
            className="hover:text-[#b40169] transition-colors whitespace-nowrap shrink-0 py-1 cursor-pointer"
          >
            Original Card
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on WhatsApp"
            className="p-2 text-[#033140] hover:text-[#b40169] hover:bg-white/60 rounded-full transition-colors"
            aria-label="Share invitation on WhatsApp"
          >
            <Share2 className="w-4 h-4" />
          </a>
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#b40169] hover:bg-[#910052] rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Add to Calendar</span>
          </a>
        </div>
      </div>
    </header>
  );
}
