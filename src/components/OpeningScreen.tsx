import { useState } from "react";
import { ArrowRight, Volume2, Sparkles } from "lucide-react";

interface OpeningScreenProps {
  onEnter: () => void;
  guestName?: string;
}

export function OpeningScreen({ onEnter, guestName }: OpeningScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnterClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#091f16] transition-all duration-700 select-none ${
        isExiting ? "opacity-0 pointer-events-none scale-102" : "opacity-100 scale-100"
      }`}
    >
      {/* Background Container holding the authentic Botanical Green and Gold Image */}
      <div className="relative w-full h-full max-w-xl mx-auto flex flex-col justify-end items-center overflow-hidden shadow-2xl bg-[#091f16]">
        <img
          src="/assets/aistudio/Botanical_Green_and_Gold_Wedding_Invitation_b7acd7a8.png"
          alt="The Wedding of P. Precilla & G. Manikandan - Botanical Green and Gold Invitation"
          className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center"
          loading="eager"
        />

        {/* Ambient Subtle Vignette for Button Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#091f16]/90 via-transparent to-black/25 pointer-events-none" />

        {/* Personalized Guest Badge Overlay (if ?to= is present) */}
        {guestName && guestName !== "Guest" && guestName !== "Beloved Guest" && (
          <div className="absolute top-6 px-5 py-2 rounded-full bg-[#0d3627]/85 backdrop-blur-md border border-[#c59c3a]/50 text-white text-xs sm:text-sm font-serif-title shadow-xl text-center z-10 animate-fade-in">
            <span className="text-[#c59c3a] uppercase tracking-widest text-[10px] block font-cinzel">
              Cordially Welcoming
            </span>
            <span className="font-semibold text-[#f7e6c4]">{guestName} &amp; Family</span>
          </div>
        )}

        {/* Interactive Open Invitation Button matching botanical gold styling */}
        <div className="relative z-20 pb-8 sm:pb-12 flex flex-col items-center gap-2.5">
          <button
            type="button"
            onClick={handleEnterClick}
            className="group px-8 py-3.5 rounded-full bg-[#0d3627] hover:bg-[#07241a] active:scale-95 text-[#fbfaf6] hover:text-white border-2 border-[#c59c3a] text-xs sm:text-sm font-cinzel font-semibold tracking-[0.25em] uppercase transition-all shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 cursor-pointer"
          >
            <span>OPEN INVITATION</span>
            <ArrowRight className="w-4 h-4 text-[#e2c170] group-hover:translate-x-1.5 transition-transform" />
          </button>

          <p className="text-[11px] uppercase tracking-[0.2em] text-[#e2c170] font-cinzel drop-shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-[#e2c170]" />
            <span>Tap to celebrate with us</span>
          </p>
        </div>
      </div>
    </div>
  );
}
