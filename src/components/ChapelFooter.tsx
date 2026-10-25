export function ChapelFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#071d16] border-t border-[#c5a059]/30">
      {/* Banner from Design 2 - 100% clean, crisp, with zero duplicate overlapping text */}
      <div className="relative w-full flex items-center justify-center">
        <img
          src="/assets/emerald/footer_candles_perfect.jpg"
          alt="Let all that you do be done in love - 1 Corinthians 16:14"
          className="w-full max-h-[160px] sm:max-h-[190px] object-cover object-center shadow-lg"
          loading="lazy"
        />
      </div>

      {/* Elegant Bottom Copyright and Blessings Bar */}
      <div className="py-4 text-center text-xs uppercase tracking-widest text-[#d9cfbe] font-cinzel border-t border-[#c5a059]/20 px-4 bg-[#051610]">
        <span>P. Precilla &amp; G. Michael</span>
        <span className="mx-2 text-[#c5a059]">·</span>
        <span>Friday, 20 November 2026</span>
        <span className="mx-2 text-[#c5a059]">·</span>
        <span>Karur, Tamil Nadu</span>
      </div>
    </footer>
  );
}
