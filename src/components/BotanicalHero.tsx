import { weddingConfig } from "../config/weddingConfig";

export function BotanicalHero() {
  return (
    <section id="invitation" className="relative w-full py-6 sm:py-10 lg:py-12 overflow-hidden">
      {/* Master Invitation Card Container */}
      <div className="relative max-w-4xl mx-auto rounded-3xl bg-white/95 border-2 border-[#c59c3a]/45 shadow-[0_16px_50px_rgba(13,54,39,0.08),0_4px_24px_rgba(197,156,58,0.12)] p-6 sm:p-10 md:p-14 overflow-hidden text-center transition-all duration-500 hover:shadow-[0_20px_60px_rgba(13,54,39,0.12),0_6px_30px_rgba(197,156,58,0.18)]">
        
        {/* Subtle Decorative Golden Border Inner Frame */}
        <div className="absolute inset-2 sm:inset-3 rounded-2xl border border-[#c59c3a]/25 pointer-events-none" />

        {/* Top Centered Holy Cross with Olive Leaves */}
        <div className="flex items-center justify-center gap-3 mb-4 text-[#c59c3a]">
          <span className="h-[1px] w-10 sm:w-24 bg-gradient-to-r from-transparent to-[#c59c3a]/70" />
          <div className="w-8 h-8 rounded-full bg-[#faf9f5] border border-[#c59c3a] flex items-center justify-center shadow-xs animate-float-slow">
            <svg className="w-4 h-4 text-[#c59c3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="3" x2="12" y2="21" />
              <line x1="7" y1="8" x2="17" y2="8" />
            </svg>
          </div>
          <span className="h-[1px] w-10 sm:w-24 bg-gradient-to-l from-transparent to-[#c59c3a]/70" />
        </div>

        {/* Scripture Quote with Professional Slide-Up Entrance */}
        <div className="space-y-1.5 max-w-xl mx-auto animate-text-reveal">
          <p className="font-serif-title italic text-sm sm:text-lg md:text-xl text-[#0d3627] leading-relaxed tracking-wide">
            &ldquo;{weddingConfig.verse.text}&rdquo;
          </p>
          <cite className="block text-xs sm:text-sm font-serif-title text-[#8e163b] font-bold not-italic tracking-wider uppercase">
            ({weddingConfig.verse.reference})
          </cite>
        </div>

        {/* Title: Wedding INVITATION with Shimmer & Fluid Animations */}
        <div className="space-y-1 pt-4 sm:pt-5">
          <h1 className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-shimmer leading-none select-none drop-shadow-sm hover:scale-103 transition-transform duration-500 cursor-default">
            Wedding
          </h1>
          
          <div className="flex items-center justify-center gap-3 pt-1 text-[#c59c3a]">
            <span className="h-[1.5px] w-12 sm:w-28 bg-gradient-to-r from-transparent via-[#c59c3a] to-transparent animate-pulse" />
            <p className="font-cinzel text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.3em] text-[#0d3627] font-bold transition-all duration-300 hover:tracking-[0.35em]">
              INVITATION
            </p>
            <span className="h-[1.5px] w-12 sm:w-28 bg-gradient-to-l from-transparent via-[#c59c3a] to-transparent animate-pulse" />
          </div>

          {/* Golden Leaf Sprig with Gentle Sway Animation */}
          <div className="flex items-center justify-center text-[#c59c3a] pt-1.5 animate-sway">
            <svg className="w-10 h-5 text-[#c59c3a]" viewBox="0 0 32 16" fill="currentColor">
              <ellipse cx="16" cy="8" rx="6" ry="2.5" />
              <ellipse cx="8" cy="6" rx="5" ry="2" transform="rotate(-20 8 6)" />
              <ellipse cx="24" cy="6" rx="5" ry="2" transform="rotate(20 24 6)" />
            </svg>
          </div>
        </div>

        {/* Bride's Parents Invocation with Staggered Entrance */}
        <div className="space-y-1.5 pt-6 max-w-2xl mx-auto">
          <h2 className="font-serif-title text-base sm:text-xl md:text-2xl font-bold text-[#0d3627] tracking-tight">
            {weddingConfig.invitationMessage.parentsHeader}
          </h2>
          <p className="text-xs sm:text-sm text-[#0d3627]/80 font-medium tracking-wide">
            {weddingConfig.invitationMessage.parentsResidence}
          </p>
          <p className="text-xs sm:text-base text-[#0d3627]/90 font-serif-title max-w-xl mx-auto pt-2.5 leading-relaxed italic">
            {weddingConfig.invitationMessage.invitationBody}
          </p>
        </div>

        {/* Couple's Names with DEGREES directly after their name - Perfectly Centered Layout */}
        <div className="py-7 sm:py-9 space-y-4 text-center">
          
          {/* Bride Name & Degree with Rich Burgundy Hover Elevation */}
          <div className="inline-flex items-baseline justify-center gap-2 flex-wrap group/bride cursor-default transition-transform duration-300 hover:scale-102">
            <span className="font-serif-title italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8e163b] tracking-wide transition-colors duration-300 group-hover/bride:text-[#a82046] drop-shadow-2xs">
              {weddingConfig.couple.bride.fullName},
            </span>
            <span className="font-serif-title font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8e163b]/90 not-italic group-hover/bride:text-[#8e163b]">
              {weddingConfig.couple.bride.qualification}
            </span>
          </div>

          {/* With Flourish Centered */}
          <div className="flex items-center justify-center gap-3 text-[#c59c3a]">
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#c59c3a]/70" />
            <span className="font-serif-title italic text-base sm:text-xl text-[#0d3627] font-medium px-2 select-none">
              with
            </span>
            <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#c59c3a]/70" />
          </div>

          {/* Groom Name & Degree with Rich Burgundy Hover Elevation */}
          <div className="inline-flex items-baseline justify-center gap-2 flex-wrap group/groom cursor-default transition-transform duration-300 hover:scale-102">
            <span className="font-serif-title italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8e163b] tracking-wide transition-colors duration-300 group-hover/groom:text-[#a82046] drop-shadow-2xs">
              {weddingConfig.couple.groom.fullName},
            </span>
            <span className="font-serif-title font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#8e163b]/90 not-italic group-hover/groom:text-[#8e163b]">
              {weddingConfig.couple.groom.qualification}
            </span>
          </div>

          {/* Groom's Parents Line */}
          <div className="pt-3 text-center space-y-0.5 animate-text-reveal">
            <p className="font-serif-title text-sm sm:text-base md:text-lg font-bold text-[#0d3627] tracking-tight">
              S/o. {weddingConfig.couple.groom.parents}
            </p>
            <p className="text-xs sm:text-sm text-[#0d3627]/80 font-medium tracking-wide">
              {weddingConfig.couple.groom.residence}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
