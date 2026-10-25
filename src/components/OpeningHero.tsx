import { ChevronDown, Calendar, Eye } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { Countdown } from "./Countdown";

interface OpeningHeroProps {
  guestName: string;
  onOpenInvitation: () => void;
  onOpenCardModal: () => void;
}

export function OpeningHero({
  guestName,
  onOpenInvitation,
  onOpenCardModal,
}: OpeningHeroProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between items-center text-center px-4 sm:px-6 pt-10 pb-12 overflow-hidden bg-wedding-canvas">
      {/* Original Top-Left Floral Bouquet */}
      <div
        className="absolute top-0 left-0 w-36 sm:w-56 md:w-72 max-w-[45vw] pointer-events-none select-none z-0 opacity-95 transition-opacity"
        aria-hidden="true"
      >
        <img
          src={weddingConfig.assets.topLeftFloral}
          alt=""
          className="w-full h-auto object-contain drop-shadow-xs"
          loading="eager"
        />
      </div>

      {/* Subtle Botanical Leaf Shadow / Accent (Top Right) */}
      <div
        className="absolute top-2 right-2 w-28 sm:w-44 max-w-[30vw] pointer-events-none select-none z-0 opacity-40 scale-x-[-1]"
        aria-hidden="true"
      >
        <img
          src={weddingConfig.assets.topLeftFloral}
          alt=""
          className="w-full h-auto object-contain filter hue-rotate-15"
          loading="lazy"
        />
      </div>

      {/* Hero Header Area: Cross Emblem & Scripture */}
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center pt-2 sm:pt-6">
        {/* Subtle Christian Cross & Laurel Motif from Original Card */}
        <div className="mb-4 sm:mb-6 max-w-[260px] sm:max-w-[320px]">
          <img
            src={weddingConfig.assets.crossEmblem}
            alt="Christian Cross and botanical laurel emblem"
            className="w-full h-auto object-contain mx-auto"
            loading="eager"
          />
        </div>

        {/* Bible Verse */}
        <blockquote className="space-y-1.5 px-4">
          <p className="font-serif-title italic text-base sm:text-lg md:text-xl text-[#033140] tracking-wide max-w-xl text-balance">
            {weddingConfig.verse.text}
          </p>
          <cite className="block text-xs sm:text-sm font-medium tracking-widest text-[#1b525f]/90 uppercase not-italic">
            ({weddingConfig.verse.reference})
          </cite>
        </blockquote>
      </div>

      {/* Focal Centerpiece: Couple's Names & Wedding Invitation Calligraphy */}
      <div className="relative z-10 max-w-3xl mx-auto my-auto py-6 sm:py-8 flex flex-col items-center">
        {/* Personalized Guest Welcome (from ?to= query param) */}
        {guestName && (
          <div className="mb-4 px-4 py-1.5 rounded-full bg-white/80 border border-[#bce3df] shadow-2xs inline-flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-[#1b525f] font-semibold">
              Cordially Welcoming
            </span>
            <span className="text-xs sm:text-sm font-serif-title font-bold text-[#b40169]">
              {guestName} &amp; Family
            </span>
          </div>
        )}

        {/* Subtitle / Kicker */}
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-[#033140]/80 font-cinzel font-medium mb-3 sm:mb-4">
          Wedding Invitation
        </p>

        {/* Couple Names */}
        <div className="space-y-2 sm:space-y-3">
          <h1 className="font-serif-title italic text-4xl sm:text-6xl md:text-7xl font-bold text-[#b40169] tracking-tight text-balance leading-none">
            {weddingConfig.couple.bride.fullName}
          </h1>

          <div className="flex items-center justify-center gap-4 my-1">
            <span className="h-[1px] w-12 sm:w-16 bg-[#b40169]/30" />
            <span className="font-serif-title italic text-lg sm:text-2xl text-[#033140]/80">
              with
            </span>
            <span className="h-[1px] w-12 sm:w-16 bg-[#b40169]/30" />
          </div>

          <h2 className="font-serif-title italic text-4xl sm:text-6xl md:text-7xl font-bold text-[#b40169] tracking-tight text-balance leading-none">
            {weddingConfig.couple.groom.fullName}
          </h2>
        </div>

        {/* Date Display */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2">
          <Calendar className="w-4 h-4 text-[#033140]/70" />
          <time
            dateTime="2026-11-20"
            className="font-cinzel text-sm sm:text-base tracking-[0.2em] uppercase font-semibold text-[#033140]"
          >
            {weddingConfig.ceremony.date}
          </time>
        </div>

        {/* Live Countdown to the Holy Matrimony */}
        <div className="mt-8 sm:mt-10">
          <Countdown />
        </div>
      </div>

      {/* Gentle Action & Scroll Invite */}
      <div className="relative z-10 flex flex-col items-center gap-4 pt-4">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenInvitation}
            className="px-6 py-2.5 rounded-full bg-[#033140] hover:bg-[#0a4659] text-white text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
          >
            <span>Open Invitation</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onOpenCardModal}
            className="px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#033140] hover:text-[#b40169] border border-[#c8e8e8] text-xs sm:text-sm font-medium tracking-wider uppercase transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#b40169]" />
            <span>View Original Card</span>
          </button>
        </div>

        <p className="text-[11px] text-[#1b525f]/70 tracking-widest uppercase">
          Karur, Tamil Nadu · South India
        </p>
      </div>
    </section>
  );
}
