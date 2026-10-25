import { useState, useEffect } from "react";
import { Mail, Sparkles, Volume2, ChevronRight } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

interface EnvelopeOverlayProps {
  guestName: string;
  onOpen: () => void;
  isOpen: boolean;
}

export function EnvelopeOverlay({ guestName, onOpen, isOpen }: EnvelopeOverlayProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [shouldRender, setShouldRender] = useState(!isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(false);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Play sound / trigger reveal after flap animation
    setTimeout(() => {
      onOpen();
      setTimeout(() => setShouldRender(false), 700);
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#033140]/90 backdrop-blur-md transition-opacity duration-700 ${
        isOpening ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-radial from-[#164e52]/50 via-[#033140]/90 to-[#02212b] pointer-events-none" />

      {/* Main Envelope Card */}
      <div className="relative w-full max-w-md mx-auto aspect-[3/4] max-h-[85vh] flex flex-col justify-between items-center p-6 sm:p-8 rounded-2xl bg-[#fdfbf7] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-[#d6eceb]/80 overflow-hidden select-none">
        {/* Subtle Linen / Botanical Floral Corner Artwork */}
        <div className="absolute top-0 left-0 w-32 opacity-75 pointer-events-none">
          <img
            src={weddingConfig.assets.topLeftFloral}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-32 opacity-75 pointer-events-none">
          <img
            src={weddingConfig.assets.bottomRightFloral}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Envelope Top Flap Silhouette */}
        <div
          className={`absolute top-0 left-0 right-0 h-1/2 bg-[#f6f2ea] border-b border-[#e2d8c6] origin-top transition-transform duration-700 ease-in-out ${
            isOpening ? "-rotate-x-180 opacity-0" : "rotate-x-0"
          }`}
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
          }}
        />

        {/* Header Greeting */}
        <div className="relative z-10 text-center pt-2 sm:pt-4">
          <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-[#1b525f] font-semibold">
            Holy Matrimony
          </p>
          <p className="font-serif-title italic text-sm text-[#033140]/80 mt-1">
            You are cordially invited
          </p>
        </div>

        {/* Center: Wax Seal & Personalized Guest Name */}
        <div className="relative z-20 flex flex-col items-center my-auto cursor-pointer group" onClick={handleOpen}>
          {/* Authentic P & M Magenta Wax Seal */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 active:scale-95">
            {/* Outer Wax Irregular Edge Shadow */}
            <div className="absolute inset-0 rounded-full bg-[#910052] opacity-40 blur-md transform translate-y-1" />

            {/* Main Wax Body with Deep Magenta sampled from invitation */}
            <div
              className="relative w-full h-full rounded-full flex items-center justify-center border-4 border-[#730040]"
              style={{
                background: "radial-gradient(circle at 35% 30%, #d82b79 0%, #b40169 55%, #7a0044 100%)",
                boxShadow: "inset 2px 2px 4px rgba(255,255,255,0.4), inset -3px -3px 6px rgba(0,0,0,0.5), 0 8px 24px rgba(180,1,105,0.35)",
              }}
            >
              {/* Inner Embossed Ring */}
              <div className="w-[82%] h-[82%] rounded-full border border-[#fbd8e8]/50 flex flex-col items-center justify-center shadow-inner">
                {/* Monogram P & M */}
                <div className="flex items-center justify-center font-serif-title italic text-[#fff0f7] text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)]">
                  <span>P</span>
                  <span className="text-base sm:text-lg font-script mx-1 text-[#fce4ee]">&amp;</span>
                  <span>M</span>
                </div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#fce4ee]/90 font-cinzel mt-0.5">
                  2026
                </span>
              </div>
            </div>
          </div>

          {/* Personalized Recipient Name from URL query (?to=...) */}
          <div className="mt-5 text-center px-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#1b525f]/90 font-medium">
              Specially Delivered To
            </span>
            <h2 className="font-serif-title italic text-xl sm:text-2xl font-bold text-[#033140] tracking-tight mt-0.5">
              {guestName}
            </h2>
            <div className="h-0.5 w-12 bg-[#b40169]/30 mx-auto mt-2" />
          </div>
        </div>

        {/* Footer: Tap hint & Skip Button */}
        <div className="relative z-10 w-full flex flex-col items-center gap-3 pb-2 sm:pb-4">
          <button
            type="button"
            onClick={handleOpen}
            className="w-full py-3 px-6 rounded-full bg-[#033140] hover:bg-[#0a4659] text-white font-medium text-xs sm:text-sm uppercase tracking-widest transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#d6eceb]" />
            <span>Tap to Open Invitation</span>
            <ChevronRight className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center justify-between w-full text-[11px] text-[#1b525f]/80 px-2 pt-1">
            <span className="flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5 text-[#b40169]" />
              <span>Includes church melody</span>
            </span>
            <button
              type="button"
              onClick={() => {
                onOpen();
                setShouldRender(false);
              }}
              className="text-[#033140] hover:text-[#b40169] underline underline-offset-2 cursor-pointer font-medium"
            >
              Skip Intro
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
