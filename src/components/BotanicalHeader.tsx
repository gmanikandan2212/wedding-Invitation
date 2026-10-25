import { weddingConfig } from "../config/weddingConfig";
import { Calendar, Mail } from "lucide-react";
import { getGoogleCalendarUrl } from "../utils/calendar";

interface BotanicalHeaderProps {
  onOpenCardModal: () => void;
  onReopenEnvelope?: () => void;
}

export function BotanicalHeader({ onOpenCardModal, onReopenEnvelope }: BotanicalHeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#fcfbf7]/95 backdrop-blur-md border-b border-[#c59c3a]/30 shadow-xs transition-all">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between gap-4">
        
        {/* Left: Monogram Badge & Couple Title matching template */}
        <a href="#invitation" className="flex items-center gap-3 group shrink-0">
          {/* Circular P | M Monogram */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#fdfbf7] border-2 border-[#c59c3a] flex items-center justify-center text-[#0d3627] shadow-xs group-hover:scale-105 transition-transform">
            <span className="font-serif-title font-bold text-xs sm:text-sm tracking-widest text-[#0d3627]">
              P <span className="text-[#c59c3a] font-normal">|</span> M
            </span>
          </div>

          <div>
            <span className="font-serif-title font-bold text-sm sm:text-base text-[#0d3627] tracking-tight block leading-tight">
              {weddingConfig.couple.bride.firstName} &amp; {weddingConfig.couple.groom.firstName}
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#c59c3a] font-cinzel font-semibold block">
              OUR WEDDING INVITATION
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-cinzel uppercase tracking-[0.2em] text-[#0d3627] font-semibold">
          <a
            href="#invitation"
            className="hover:text-[#8e163b] transition-colors py-1 hover:border-b-2 hover:border-[#8e163b]"
          >
            INVITATION
          </a>
          <a
            href="#solemnized"
            className="hover:text-[#8e163b] transition-colors py-1 hover:border-b-2 hover:border-[#8e163b]"
          >
            SOLEMNIZED
          </a>
          <a
            href="#events"
            className="hover:text-[#8e163b] transition-colors py-1 hover:border-b-2 hover:border-[#8e163b]"
          >
            VENUES &amp; SCHEDULE
          </a>
          <a
            href="#family"
            className="hover:text-[#8e163b] transition-colors py-1 hover:border-b-2 hover:border-[#8e163b]"
          >
            FAMILY
          </a>
        </nav>

        {/* Right: Quick Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onReopenEnvelope && (
            <button
              type="button"
              onClick={onReopenEnvelope}
              className="hidden lg:inline-flex px-3.5 py-2 rounded-full border border-[#c59c3a]/70 hover:bg-[#faf9f5] text-[#0d3627] text-xs font-cinzel font-semibold tracking-wider uppercase transition-all shadow-2xs items-center gap-1.5 cursor-pointer hover:scale-102 active:scale-98"
              title="Open Royal Envelope"
            >
              <Mail className="w-3.5 h-3.5 text-[#8e163b]" />
              <span>Open Envelope</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenCardModal}
            className="hidden sm:inline-flex px-4 py-2 rounded-full border border-[#c59c3a]/70 hover:bg-[#faf9f5] text-[#0d3627] text-xs font-cinzel font-semibold tracking-wider uppercase transition-colors shadow-2xs cursor-pointer hover:scale-102 active:scale-98"
          >
            View Card
          </button>

          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2.5 rounded-full bg-[#0d3627] hover:bg-[#07241a] text-[#fbfaf6] border border-[#c59c3a] text-xs font-cinzel font-semibold tracking-wider uppercase transition-all shadow-xs flex items-center gap-2 cursor-pointer hover:scale-102 active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5 text-[#e2c170]" />
            <span>Save The Date</span>
          </a>
        </div>

      </div>
    </header>
  );
}
