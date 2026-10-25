import { weddingConfig } from "../config/weddingConfig";

export function InvitationMessage() {
  return (
    <section
      id="invitation"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-white/70 border-y border-[#d5eceb]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Stationery Card Container */}
        <div className="bg-stationery-card rounded-2xl p-6 sm:p-12 md:p-16 text-center relative overflow-hidden">
          {/* Subtle Inner Border Frame */}
          <div className="border border-[#b40169]/15 rounded-xl p-5 sm:p-10 md:p-12">
            {/* Host / Parents of the Bride */}
            <div className="space-y-1.5 mb-8">
              <h3 className="text-base sm:text-lg md:text-xl font-serif-title font-bold text-[#033140] tracking-wide">
                {weddingConfig.invitationMessage.parentsHeader}
              </h3>
              <p className="text-xs sm:text-sm font-medium tracking-wider text-[#1b525f]/90 uppercase">
                {weddingConfig.invitationMessage.parentsResidence}
              </p>
            </div>

            {/* Formal Invitation Verse / Prose */}
            <p className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed text-[#033140]/90 font-sans font-normal mb-8 text-balance">
              {weddingConfig.invitationMessage.invitationBody}
            </p>

            {/* The Couple Details */}
            <div className="space-y-4 my-8">
              {/* Bride */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
                  <span className="font-serif-title italic text-2xl sm:text-4xl md:text-5xl font-bold text-[#b40169] tracking-tight">
                    {weddingConfig.couple.bride.fullName}
                  </span>
                  <span className="font-serif-title text-sm sm:text-base md:text-lg font-semibold text-[#b40169]/90">
                    {weddingConfig.couple.bride.qualification}
                  </span>
                </div>
              </div>

              {/* 'with' separator */}
              <div className="py-1">
                <span className="font-serif-title italic text-base sm:text-xl text-[#033140]/70">
                  with
                </span>
              </div>

              {/* Groom */}
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-0.5">
                  <span className="font-serif-title italic text-2xl sm:text-4xl md:text-5xl font-bold text-[#b40169] tracking-tight">
                    {weddingConfig.couple.groom.fullName}
                  </span>
                  <span className="font-serif-title text-sm sm:text-base md:text-lg font-semibold text-[#b40169]/90">
                    {weddingConfig.couple.groom.qualification}
                  </span>
                </div>
              </div>

              {/* Groom's Parents and Residence */}
              <div className="pt-2 text-xs sm:text-sm text-[#033140]/90 space-y-1 font-medium">
                <p>
                  S/o. {weddingConfig.couple.groom.parents}
                </p>
                <p className="text-[#1b525f]/80 uppercase tracking-wider text-xs">
                  {weddingConfig.couple.groom.residence}
                </p>
              </div>
            </div>

            {/* Original Magenta Flourish Divider from Invitation */}
            <div className="my-8 sm:my-10 max-w-[340px] sm:max-w-[440px] mx-auto opacity-90">
              <img
                src={weddingConfig.assets.flourishDivider}
                alt="Decorative flourish"
                className="w-full h-auto object-contain mx-auto"
                loading="lazy"
              />
            </div>

            {/* Solemnization Section */}
            <div className="space-y-2 pt-2">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#1b525f] font-medium">
                {weddingConfig.solemnization.intro}
              </p>
              <h4 className="text-base sm:text-lg md:text-xl font-serif-title font-bold text-[#033140] tracking-wide text-balance">
                {weddingConfig.solemnization.bishopName},{" "}
                <span className="text-xs sm:text-sm font-semibold text-[#1b525f]">
                  {weddingConfig.solemnization.bishopDegrees}
                </span>
              </h4>
              <p className="text-xs sm:text-sm font-medium tracking-wider text-[#033140]/80">
                {weddingConfig.solemnization.diocese}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
