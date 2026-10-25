import { Sparkles, Heart, Eye, Mail } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

interface RelatableOpeningProps {
  guestName: string;
  onOpenCardModal: () => void;
  onReopenEnvelope?: () => void;
}

export function RelatableOpening({
  guestName,
  onOpenCardModal,
  onReopenEnvelope,
}: RelatableOpeningProps) {
  const isPersonalized = guestName && guestName !== "Guest";

  return (
    <div className="w-full bg-gradient-to-r from-[#0d3627] via-[#144734] to-[#0d3627] text-[#fbfaf6] border-b-2 border-[#c59c3a] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Opening Welcome Greeting */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#c59c3a]/20 border border-[#c59c3a] flex items-center justify-center text-[#e2c170] shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="font-cinzel tracking-wider text-[11px] sm:text-xs text-[#e2c170] font-semibold">
              {isPersonalized ? (
                <span>
                  Warm Welcome, <strong className="text-white underline decoration-[#c59c3a]">{guestName}</strong> &amp; Family
                </span>
              ) : (
                <span>With Joyful Hearts &amp; God&apos;s Grace</span>
              )}
            </p>
            <p className="font-serif-title italic text-[11px] sm:text-xs text-white/90">
              Cordially inviting you to the Holy Matrimony of {weddingConfig.couple.bride.firstName} &amp; {weddingConfig.couple.groom.firstName}
            </p>
          </div>
        </div>

        {/* Right: Date pill & Quick View Card & Reopen Envelope */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto sm:ml-0">
          {onReopenEnvelope && (
            <button
              type="button"
              onClick={onReopenEnvelope}
              title="Replay the royal invitation envelope opening"
              className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-[#c59c3a]/60 text-white font-cinzel font-semibold text-[10px] sm:text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#e2c170]" />
              <span>Open Envelope</span>
            </button>
          )}

          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#c59c3a]/50 text-[11px] font-cinzel text-white/90">
            <Heart className="w-3 h-3 text-[#e2c170] fill-[#e2c170]" />
            <span>20 Nov 2026 &middot; Karur</span>
          </span>

          <button
            type="button"
            onClick={onOpenCardModal}
            className="px-3.5 py-1 rounded-full bg-[#c59c3a] hover:bg-[#d6ad4b] text-[#0d3627] font-cinzel font-bold text-[10px] sm:text-xs tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Card</span>
          </button>
        </div>

      </div>
    </div>
  );
}
