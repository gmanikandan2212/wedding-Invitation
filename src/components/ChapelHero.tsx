import { weddingConfig } from "../config/weddingConfig";

export function ChapelHero() {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      {/* Decorative Botanical Foliage on Far Left */}
      <div className="absolute top-0 left-0 w-24 sm:w-36 h-full opacity-60 pointer-events-none select-none z-10 overflow-hidden">
        <svg className="w-full h-full text-[#2e5949]" viewBox="0 0 100 400" fill="currentColor">
          <path d="M0 0c20 30 30 80 15 150 25-20 40 10 30 50-10 40-35 60-35 120 20-30 45-10 35 30-10 40-40 50-45 50V0z" opacity="0.4" />
          <ellipse cx="30" cy="80" rx="14" ry="6" transform="rotate(-30 30 80)" />
          <ellipse cx="45" cy="140" rx="16" ry="7" transform="rotate(-20 45 140)" />
          <ellipse cx="25" cy="220" rx="15" ry="6" transform="rotate(-40 25 220)" />
          <ellipse cx="40" cy="290" rx="16" ry="7" transform="rotate(-25 40 290)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px] pb-8 pt-2">
          {/* Left Column: Refined Typography & Scripture matching Design 2 */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-4 relative">
            {/* Scripture Quote */}
            <div className="mb-4 space-y-1">
              <p className="font-serif-title italic text-base sm:text-lg md:text-xl text-[#f7f2e8] max-w-sm leading-snug">
                &#8220;The Lord has made everything beautiful in its time.&#8221;
              </p>
              <cite className="block text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#c5a059] font-cinzel font-semibold not-italic">
                ECCLESIASTES 3: 11
              </cite>
            </div>

            {/* Delicate Golden Flourish */}
            <div className="flex items-center gap-2 my-2 w-28 mx-auto lg:mx-0">
              <span className="h-[1px] flex-1 bg-[#c5a059]/60" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
              <span className="h-[1px] flex-1 bg-[#c5a059]/60" />
            </div>

            {/* Sub-header */}
            <p className="font-serif-title uppercase tracking-[0.3em] text-xs sm:text-sm text-[#dfbf7b] font-medium my-3">
              THE WEDDING OF
            </p>

            {/* Couple Calligraphy */}
            <div className="space-y-1 my-1">
              <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-none font-normal drop-shadow-md">
                {weddingConfig.couple.bride.fullName}
              </h1>

              {/* Gold & separator */}
              <div className="flex items-center justify-center lg:justify-start gap-3 my-1.5 py-1">
                <span className="h-[1px] w-8 bg-[#c5a059]/40" />
                <span className="font-script text-3xl sm:text-4xl text-[#c5a059] leading-none font-normal">
                  &amp;
                </span>
                <span className="h-[1px] w-8 bg-[#c5a059]/40" />
              </div>

              <h2 className="font-script text-5xl sm:text-6xl md:text-7xl text-white tracking-wide leading-none font-normal drop-shadow-md">
                {weddingConfig.couple.groom.fullName}
              </h2>
            </div>

            {/* Golden Triple Leaf Sprig Motif */}
            <div className="my-4 pt-1 flex items-center justify-center lg:justify-start">
              <svg className="w-16 h-6 text-[#c5a059]" viewBox="0 0 64 24" fill="currentColor">
                {/* Center Leaf */}
                <ellipse cx="32" cy="12" rx="10" ry="4" />
                {/* Left Leaf */}
                <ellipse cx="18" cy="8" rx="8" ry="3.5" transform="rotate(-25 18 8)" />
                {/* Right Leaf */}
                <ellipse cx="46" cy="8" rx="8" ry="3.5" transform="rotate(25 46 8)" />
                {/* Stem */}
                <path d="M10 16c14-2 28-2 44 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </div>

          {/* Right Column: Cathedral Sanctuary Photograph with glowing stained glass and cross */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.5)] border border-[#c5a059]/40">
              <img
                src="/assets/chapel/hero_altar.jpg"
                alt="Church Cathedral Altar with stained glass windows and cross"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
