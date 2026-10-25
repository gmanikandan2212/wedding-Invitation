import { weddingConfig } from "../config/weddingConfig";

export function ChapelSolemnized() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#0c261e]/85 backdrop-blur-md rounded-2xl border border-[#c5a059]/40 p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center sm:text-left">
            {/* Circular Bishop Photo with Gold Trim */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-3 border-[#c5a059] shadow-lg shrink-0">
              <img
                src="/assets/chapel/bishop_portrait.jpg"
                alt="Bishop holding Holy Bible with Golden Cross"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Solemnization Text Details */}
            <div className="space-y-2">
              <p className="font-cinzel uppercase tracking-[0.25em] text-xs font-semibold text-[#c5a059]">
                {weddingConfig.solemnization.intro}
              </p>

              <div className="flex items-center gap-2 w-20 mx-auto sm:mx-0">
                <span className="h-[1px] flex-1 bg-[#c5a059]/60" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                <span className="h-[1px] flex-1 bg-[#c5a059]/60" />
              </div>

              <h4 className="font-serif-title text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                {weddingConfig.solemnization.bishopName},
              </h4>

              <p className="text-sm sm:text-base font-serif-title font-semibold text-[#dfbf7b]">
                {weddingConfig.solemnization.bishopDegrees}
              </p>

              <p className="text-xs sm:text-sm text-[#d4c9b8] font-medium tracking-wide">
                {weddingConfig.solemnization.diocese}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
