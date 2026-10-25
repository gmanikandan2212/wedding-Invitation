import { Heart, Sparkles } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

export function BlessedUnion() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#f7fcfb] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-[#b40169] font-cinzel font-semibold mb-2">
            Joined by God&#39;s Grace
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-title font-bold text-[#033140] tracking-tight">
            Blessed Union
          </h2>
          <div className="w-16 h-0.5 bg-[#b40169]/40 mx-auto mt-4" />
          <blockquote className="mt-4 max-w-lg mx-auto">
            <p className="font-serif-title italic text-sm sm:text-base text-[#1b525f]">
              &#8220;Submit to one another out of reverence for Christ.&#8221;
            </p>
            <cite className="block text-xs uppercase tracking-widest text-[#033140]/60 mt-1 not-italic">
              — Ephesians 5:21
            </cite>
          </blockquote>
        </div>

        {/* Bride and Groom Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* The Bride Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#bce3df] shadow-[0_6px_25px_-6px_rgba(3,49,64,0.06)] text-center flex flex-col justify-between relative group hover:border-[#b40169]/40 transition-colors">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdf2f7] border border-[#f7d6e6] text-[#b40169] text-xs font-cinzel tracking-wider uppercase">
                <Sparkles className="w-3 h-3" />
                <span>The Bride</span>
              </div>

              <div>
                <h3 className="font-serif-title italic text-3xl sm:text-4xl font-bold text-[#b40169] tracking-tight">
                  {weddingConfig.couple.bride.fullName}
                </h3>
                <p className="font-serif-title text-sm sm:text-base font-semibold text-[#1b525f] mt-1">
                  {weddingConfig.couple.bride.qualification}
                </p>
              </div>

              <div className="h-[1px] w-20 bg-[#bce3df] mx-auto" />

              <div className="text-xs sm:text-sm text-[#033140]/90 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wider text-[#1b525f] font-medium">
                  Beloved Daughter of
                </p>
                <p className="font-serif-title text-base sm:text-lg font-bold text-[#033140]">
                  {weddingConfig.couple.bride.parents}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#1b525f]/90 font-medium">
                  {weddingConfig.couple.bride.residence}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#f0f7f6] text-[11px] italic font-serif-title text-[#1b525f]/80">
              &#8220;She is clothed with strength and dignity.&#8221; · Proverbs 31:25
            </div>
          </div>

          {/* The Groom Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#bce3df] shadow-[0_6px_25px_-6px_rgba(3,49,64,0.06)] text-center flex flex-col justify-between relative group hover:border-[#b40169]/40 transition-colors">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf5f5] border border-[#c8e8e8] text-[#033140] text-xs font-cinzel tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-[#b40169]" />
                <span>The Groom</span>
              </div>

              <div>
                <h3 className="font-serif-title italic text-3xl sm:text-4xl font-bold text-[#b40169] tracking-tight">
                  {weddingConfig.couple.groom.fullName}
                </h3>
                <p className="font-serif-title text-sm sm:text-base font-semibold text-[#1b525f] mt-1">
                  {weddingConfig.couple.groom.qualification}
                </p>
              </div>

              <div className="h-[1px] w-20 bg-[#bce3df] mx-auto" />

              <div className="text-xs sm:text-sm text-[#033140]/90 space-y-1.5">
                <p className="text-[11px] uppercase tracking-wider text-[#1b525f] font-medium">
                  Beloved Son of
                </p>
                <p className="font-serif-title text-base sm:text-lg font-bold text-[#033140]">
                  {weddingConfig.couple.groom.parents}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#1b525f]/90 font-medium">
                  {weddingConfig.couple.groom.residence}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#f0f7f6] text-[11px] italic font-serif-title text-[#1b525f]/80">
              &#8220;Two are better than one, because they have a good return for their labor.&#8221; · Ecclesiastes 4:9
            </div>
          </div>
        </div>

        {/* Solemnization Highlight */}
        <div className="mt-10 p-6 rounded-2xl bg-white/80 border border-[#bce3df] text-center max-w-2xl mx-auto shadow-2xs">
          <p className="text-xs uppercase tracking-widest text-[#1b525f] font-medium mb-1">
            {weddingConfig.solemnization.intro}
          </p>
          <p className="font-serif-title text-lg sm:text-xl font-bold text-[#033140]">
            {weddingConfig.solemnization.bishopName}
          </p>
          <p className="text-xs text-[#1b525f] font-semibold">
            {weddingConfig.solemnization.bishopDegrees}
          </p>
          <p className="text-xs font-medium text-[#033140]/80 mt-1">
            {weddingConfig.solemnization.diocese}
          </p>
        </div>
      </div>
    </section>
  );
}
