import React, { useState, useEffect } from "react";
import { Sparkles, Music, Volume2, ChevronRight, Heart } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

interface EnvelopeOpeningProps {
  guestName?: string;
  onOpened?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export function EnvelopeOpening({
  guestName = "Guest",
  onOpened,
  isOpen,
  onClose,
}: EnvelopeOpeningProps) {
  const [isOpening, setIsOpening] = useState<boolean>(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const isPersonalized = guestName && guestName !== "Guest";

  // Play a soft angelic celestial chime via Web Audio API on opening
  const playChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const frequencies = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (heavenly chord)
      frequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

        gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + idx * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.95);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.08);
        osc.stop(ctx.currentTime + idx * 0.08 + 1.0);
      });
    } catch {
      // Audio context fallback
    }
  };

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play celestial chime & trigger hymn playback
    playChime();
    window.dispatchEvent(new CustomEvent("wedding-play-audio"));

    // Generate burst sparkles
    const newSparkles = Array.from({ length: 28 }, (_, i) => {
      const angle = (i / 28) * Math.PI * 2;
      const distance = 50 + Math.random() * 110;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        delay: Math.random() * 0.2,
      };
    });
    setSparkles(newSparkles);

    // Sequence opening animation then transition out
    setTimeout(() => {
      onClose();
      setIsOpening(false);
      if (onOpened) onOpened();
    }, 1100);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Envelope"
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 transition-all duration-700 ${
        isOpening ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      style={{
        backgroundColor: "rgba(13, 54, 39, 0.75)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Background Soft Cathedral Golden Light */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[radial-gradient(circle_at_center,_rgba(255,248,220,0.3)_0%,_transparent_70%)]" />
      </div>

      {/* Main Envelope Presentation Container (Exact Mobile Phone Aspect matching attached image) */}
      <div className="relative w-full max-w-[390px] sm:max-w-[420px] h-[640px] sm:h-[680px] rounded-[36px] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.5),0_0_0_1px_rgba(197,156,58,0.4)] flex flex-col justify-between select-none">
        
        {/* Botanical Damask Jacquard Etched Pattern (Sage Green / Gold Christian Wedding Theme) */}
        <div
          className="absolute inset-0 z-0 bg-[#e3ece2]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.6) 0%, transparent 60%),
              radial-gradient(circle at 10% 90%, rgba(197, 156, 58, 0.15) 0%, transparent 45%),
              radial-gradient(circle at 90% 10%, rgba(46, 89, 73, 0.12) 0%, transparent 40%),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232e5949' fill-opacity='0.12' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3Ccircle cx='35' cy='35' r='3'/%3E%3Ccircle cx='5' cy='35' r='3'/%3E%3Ccircle cx='35' cy='5' r='3'/%3E%3Ccircle cx='5' cy='5' r='3'/%3E%3C/g%3E%3C/svg%3E")
            `,
          }}
        />

        {/* Delicate Golden Foil Perimeter Inner Frame */}
        <div className="absolute inset-3 sm:inset-4 rounded-[28px] border border-[#c59c3a]/40 pointer-events-none z-10" />

        {/* Top Header Floating Music / Status Pill matching the screenshot */}
        <div className="relative z-20 pt-6 px-6 flex items-center justify-between text-[#0d3627]">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#c59c3a]/30 shadow-xs text-[10px] font-cinzel font-semibold tracking-wider text-[#0d3627]">
            <Heart className="w-3 h-3 text-[#8e163b] fill-[#8e163b]" />
            <span>20 NOV 2026</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-[#c59c3a]/30 shadow-xs text-[10px] font-cinzel font-semibold tracking-wider text-[#0d3627]">
            <Volume2 className="w-3 h-3 text-[#c59c3a]" />
            <span>Hymn Ready</span>
          </div>
        </div>

        {/* Realistic Envelope Flap Upper Section with 3D Fold */}
        <div className="relative z-10 w-full perspective-1200 flex flex-col items-center pt-2">
          
          {/* Triangular Top Flap */}
          <div
            className={`w-[90%] h-44 sm:h-48 relative transition-transform duration-800 transform-style-3d origin-top-edge ${
              isOpening ? "-rotate-x-170" : "rotate-x-0"
            }`}
            style={{
              filter: "drop-shadow(0 12px 14px rgba(13, 54, 39, 0.15))",
            }}
          >
            {/* SVG Flap Shape with Gold Foil Edges */}
            <svg
              viewBox="0 0 340 160"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Flap Body */}
              <path
                d="M10 0 L330 0 L170 150 Z"
                fill="#d2dfd0"
                stroke="#c59c3a"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Inner Decorative Accent Line */}
              <path
                d="M24 6 L316 6 L170 138 Z"
                stroke="rgba(197, 156, 58, 0.45)"
                strokeWidth="1"
                fill="#dce7db"
              />
              {/* Gentle Olive Branch Emblem on Flap */}
              <g transform="translate(155, 30) scale(0.9)" fill="#2e5949" opacity="0.4">
                <path d="M16 2c4 8 12 10 14 14-8 2-14-2-14-14z" />
                <path d="M16 16c4 6 10 8 12 12-6 2-12-2-12-12z" />
              </g>
            </svg>
          </div>

          {/* 3D Crimson Red & Gold Wax Seal with Monogram P & M */}
          <div className="absolute top-28 sm:top-32 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            
            {/* Pulsing Golden Aura Ring */}
            <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-[#c59c3a]/50 animate-ping opacity-35 pointer-events-none" />

            {/* Sparkle burst particles on open */}
            {isOpening &&
              sparkles.map((sp) => (
                <span
                  key={sp.id}
                  className="absolute w-2 h-2 rounded-full bg-[#fce59e] shadow-[0_0_8px_#c59c3a] animate-ping pointer-events-none"
                  style={{
                    transform: `translate(${sp.x}px, ${sp.y}px)`,
                    transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
              ))}

            {/* The Wax Seal Button */}
            <button
              type="button"
              onClick={handleOpenEnvelope}
              title="Click to open the wedding invitation"
              aria-label="Tap wax seal to open wedding invitation"
              className={`group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 active:scale-95 hover:scale-105 ${
                isOpening ? "scale-110 rotate-12 opacity-80" : "animate-wax-seal"
              }`}
              style={{
                background: "radial-gradient(circle at 35% 32%, #a82046 0%, #8e163b 60%, #560a22 100%)",
                boxShadow:
                  "0 12px 28px rgba(142, 22, 59, 0.45), 0 4px 12px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.35), inset 0 -3px 6px rgba(0,0,0,0.45)",
              }}
            >
              {/* Organic Melted Wax Outer Lip Texture */}
              <div className="absolute inset-0 rounded-full border-2 border-[#b53457]/80 opacity-90 pointer-events-none" />

              {/* Raised Debossed Inner Ring */}
              <div className="w-16 h-16 sm:w-19 sm:h-19 rounded-full border border-[#c59c3a]/70 flex flex-col items-center justify-center shadow-inner relative bg-[#8e163b]">
                
                {/* Tiny Debossed Cross */}
                <div className="text-[#e2c170] opacity-90 mb-0.5">
                  <svg className="w-3 h-3 text-[#e2c170]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="7" y1="9" x2="17" y2="9" />
                  </svg>
                </div>

                {/* Couple Monogram: P & M (Precilla & Michael) */}
                <span className="font-serif-title font-bold text-lg sm:text-xl tracking-tight text-[#fce59e] drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] leading-none">
                  P <span className="font-script text-base text-[#e2c170]">&amp;</span> M
                </span>

                {/* Subtle Year Stamp */}
                <span className="font-cinzel text-[7px] text-[#fce59e]/80 tracking-widest mt-0.5">
                  2026
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Lower Envelope Body: "You are invited" & Tap To Open Call to Action */}
        <div className="relative z-20 pb-10 sm:pb-12 px-6 text-center space-y-4">
          
          {/* Guest Name Greeting Header */}
          <div className="space-y-1">
            <p className="font-cinzel text-xs sm:text-sm tracking-[0.22em] uppercase text-[#0d3627]/75 font-semibold">
              {isPersonalized ? `Dear ${guestName} & Family` : "With Joyful Hearts"}
            </p>
          </div>

          {/* Calligraphic Script: "You are invited" (Matching attached image) */}
          <div className="py-1">
            <h1 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#0d3627] leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.7)] animate-glow-text">
              You are invited
            </h1>
            <p className="font-serif-title italic text-xs sm:text-sm text-[#0d3627]/85 pt-1">
              to celebrate the Holy Matrimony of
            </p>
            <p className="font-cinzel font-bold text-xs sm:text-sm tracking-wider uppercase text-[#8e163b] pt-0.5">
              Precilla &amp; Michael
            </p>
          </div>

          {/* Tap to Open Prompt Button */}
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={handleOpenEnvelope}
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#0d3627] hover:bg-[#07241a] text-[#fbfaf6] border-2 border-[#c59c3a] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#e2c170] animate-spin [animation-duration:4s]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white">
                Tap To Open
              </span>
              <ChevronRight className="w-4 h-4 text-[#e2c170] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Date & Location Footnote */}
          <p className="text-[10px] sm:text-[11px] font-cinzel uppercase tracking-widest text-[#0d3627]/70 pt-1">
            Friday, 20 November 2026 &middot; Karur, Tamil Nadu
          </p>
        </div>

      </div>
    </div>
  );
}
