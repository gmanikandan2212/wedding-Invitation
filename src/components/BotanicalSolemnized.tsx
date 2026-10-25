import { weddingConfig } from "../config/weddingConfig";

export function BotanicalSolemnized() {
  return (
    <section id="solemnized" className="w-full py-10 sm:py-14">
      <div className="wedding-card-surface rounded-3xl p-6 sm:p-8 lg:p-10 group transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,54,39,0.12),0_8px_30px_rgba(197,156,58,0.2)]">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 lg:gap-14 text-center sm:text-left">
          
          {/* Circular Bishop Photo with Gold Trim and Botanical Leaves */}
          <div className="relative shrink-0 group/photo">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-3 border-[#c59c3a] shadow-lg bg-[#faf9f5] animate-gold-glow transition-transform duration-500 group-hover/photo:scale-105">
              <img
                src="/assets/aistudio/bishop-portrait-2_20497d8f.webp"
                alt="Rt. Rev. Dr. S. Samuel Rajadurai, Bishop of CSI Trichy-Tanjore Diocese holding pastoral crozier"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/photo:scale-110"
                loading="lazy"
              />
            </div>

            {/* Decorative leaf sprig beside photo with gentle sway animation */}
            <div className="absolute -bottom-2 -right-2 text-[#2e5949] opacity-80 pointer-events-none animate-sway">
              <svg className="w-10 h-10" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 2c4 8 12 10 14 14-8 2-14-2-14-14z" />
                <path d="M16 16c4 6 10 8 12 12-6 2-12-2-12-12z" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Solemnization Text Details with Staggered Professional Typography Animation */}
          <div className="space-y-2 max-w-xl animate-text-reveal">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-6 h-[1.5px] bg-[#c59c3a]/70 hidden sm:inline-block" />
              <p className="font-cinzel uppercase tracking-[0.28em] text-xs sm:text-sm font-bold text-[#c59c3a] transition-all duration-300 hover:tracking-[0.32em]">
                {weddingConfig.solemnization.intro}
              </p>
            </div>

            <h3 className="font-serif-title text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0d3627] tracking-tight leading-snug group-hover:text-[#8e163b] transition-colors duration-300">
              {weddingConfig.solemnization.bishopName},
            </h3>

            <p className="text-base sm:text-lg font-serif-title font-semibold text-[#8e163b] tracking-wide">
              {weddingConfig.solemnization.bishopDegrees}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#0d3627]/85 font-medium tracking-wide">
              {weddingConfig.solemnization.diocese}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
