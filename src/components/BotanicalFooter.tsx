import { weddingConfig } from "../config/weddingConfig";
import { ChevronUp, Heart, MessageCircle } from "lucide-react";
import { getWhatsAppWishUrl } from "../utils/calendar";

export function BotanicalFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#faf8f2] via-[#f5efe2] to-[#ede5d4] border-t-2 border-[#c59c3a]/40 text-[#0d3627] shadow-[0_-12px_40px_rgba(197,156,58,0.08)] overflow-hidden">
      {/* Decorative Golden Top Trim Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c59c3a] to-transparent opacity-80" />

      {/* Background Soft Cathedral Glow Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 md:px-8 py-14 sm:py-16 relative z-10">
        
        {/* Top Centered Holy Cross & Olive Branch Crest */}
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="flex items-center gap-4 text-[#c59c3a]">
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#c59c3a]/60" />
            
            {/* Ornate Gold Cross Emblem */}
            <div className="w-9 h-9 rounded-full bg-white/90 border border-[#c59c3a] flex items-center justify-center shadow-xs animate-float-slow">
              <svg className="w-5 h-5 text-[#c59c3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="3" x2="12" y2="21" />
                <line x1="7" y1="8" x2="17" y2="8" />
              </svg>
            </div>

            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#c59c3a]/60" />
          </div>

          <p className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#c59c3a] font-bold mt-2.5">
            HOLY MATRIMONY &middot; BLESSINGS
          </p>
        </div>

        {/* 3-Column Balanced Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-center justify-items-center text-center">
          
          {/* Column 1: Monogram and Couple Title (Left on desktop) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#c59c3a] bg-white/95 flex items-center justify-center text-[#0d3627] shadow-sm hover:scale-105 transition-transform duration-300">
                <span className="font-serif-title font-bold text-sm tracking-widest text-[#0d3627]">
                  P <span className="text-[#c59c3a] font-normal">|</span> M
                </span>
              </div>
              <div>
                <p className="font-serif-title font-bold text-base sm:text-lg text-[#0d3627] tracking-tight leading-tight">
                  {weddingConfig.couple.bride.firstName} &amp; {weddingConfig.couple.groom.firstName}
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#c59c3a] font-cinzel font-bold">
                  20 NOVEMBER 2026 &middot; KARUR
                </p>
              </div>
            </div>
            <p className="text-xs text-[#0d3627]/80 font-serif-title italic max-w-xs pt-1">
              United in Christian faith, love, and sacred covenant.
            </p>
          </div>

          {/* Column 2: Scripture & Sacred Promise (Centered) */}
          <div className="flex flex-col items-center text-center space-y-1.5 max-w-sm animate-text-reveal">
            {/* Golden Leaf Sprig */}
            <div className="text-[#c59c3a] animate-sway">
              <svg className="w-8 h-4 text-[#c59c3a]" viewBox="0 0 32 16" fill="currentColor">
                <ellipse cx="16" cy="8" rx="6" ry="2.5" />
                <ellipse cx="8" cy="6" rx="5" ry="2" transform="rotate(-20 8 6)" />
                <ellipse cx="24" cy="6" rx="5" ry="2" transform="rotate(20 24 6)" />
              </svg>
            </div>
            
            <p className="font-serif-title italic text-sm sm:text-base text-[#0d3627]/95 leading-relaxed font-medium">
              &ldquo;Therefore what God has joined together, let no one separate.&rdquo;
            </p>
            <cite className="block text-[11px] sm:text-xs font-serif-title text-[#8e163b] font-bold not-italic tracking-wider uppercase">
              (Mark 10:9)
            </cite>
            <p className="font-script text-3xl sm:text-4xl text-shimmer pt-1 leading-none select-none drop-shadow-2xs">
              A New Beginning
            </p>
          </div>

          {/* Column 3: Navigation Links & Back to Top (Right on desktop) */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3">
            <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center md:justify-end gap-3 text-xs font-cinzel uppercase tracking-[0.2em] font-semibold text-[#0d3627]">
              <a href="#invitation" className="hover:text-[#8e163b] transition-colors py-0.5">
                INVITATION
              </a>
              <span className="text-[#c59c3a]/60 select-none">&middot;</span>
              <a href="#solemnized" className="hover:text-[#8e163b] transition-colors py-0.5">
                SOLEMNIZED
              </a>
              <span className="text-[#c59c3a]/60 select-none">&middot;</span>
              <a href="#events" className="hover:text-[#8e163b] transition-colors py-0.5">
                VENUES &amp; SCHEDULE
              </a>
              <span className="text-[#c59c3a]/60 select-none">&middot;</span>
              <a href="#family" className="hover:text-[#8e163b] transition-colors py-0.5">
                FAMILY
              </a>
            </nav>

            {/* Back to Top Pill Button */}
            <button
              type="button"
              onClick={scrollToTop}
              title="Return to top of page"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#c59c3a] bg-white/90 hover:bg-[#0d3627] text-[#0d3627] hover:text-[#fbfaf6] text-xs font-cinzel font-bold tracking-wider uppercase shadow-xs transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back To Top</span>
              <ChevronUp className="w-3.5 h-3.5 text-[#c59c3a]" />
            </button>
          </div>

        </div>

        {/* WhatsApp Wedding Wishes Feature Card */}
        <div className="mt-10 py-6 px-6 sm:px-10 rounded-2xl bg-white/90 border-2 border-[#c59c3a]/45 shadow-[0_8px_30px_rgba(13,54,39,0.06)] flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#0d3627]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] shadow-[0_0_8px_#25D366]" />
              <h4 className="font-serif-title font-bold text-base sm:text-lg text-[#0d3627]">
                Send Your Prayers &amp; Wedding Wishes
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-[#0d3627]/80 font-serif-title">
              Share your heartfelt congratulations, love, and blessings directly with the family via WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppWishUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-7 sm:px-9 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white border-2 border-emerald-400 font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Send Wishes On WhatsApp</span>
          </a>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="mt-10 pt-6 border-t border-[#c59c3a]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#0d3627]/75 text-center">
          <p className="font-serif-title italic flex items-center justify-center gap-1.5">
            <span>Cordially presented with prayers &amp; love by the Families</span>
            <Heart className="w-3.5 h-3.5 text-[#8e163b] fill-[#8e163b] animate-pulse" />
          </p>
          <p className="font-cinzel text-[11px] uppercase tracking-wider text-[#0d3627]/70 font-semibold">
            Friday, 20 November 2026 &middot; Karur, Tamil Nadu
          </p>
        </div>

      </div>
    </footer>
  );
}
