import { Phone, Heart } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

export function FamilyClosing() {
  return (
    <footer
      id="family"
      className="relative py-16 sm:py-24 px-4 sm:px-6 bg-wedding-canvas border-t border-[#c8e8e8] overflow-hidden"
    >
      {/* Original Bottom-Left Wedding Bells Artwork */}
      <div
        className="absolute bottom-4 left-0 w-32 sm:w-48 md:w-60 max-w-[35vw] pointer-events-none select-none z-0 opacity-90 transition-opacity"
        aria-hidden="true"
      >
        <img
          src={weddingConfig.assets.weddingBells}
          alt=""
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Original Bottom-Right Floral Bouquet Artwork */}
      <div
        className="absolute bottom-0 right-0 w-36 sm:w-56 md:w-64 max-w-[38vw] pointer-events-none select-none z-0 opacity-95 transition-opacity"
        aria-hidden="true"
      >
        <img
          src={weddingConfig.assets.bottomRightFloral}
          alt=""
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Closing Scripture / Invocation */}
        <div className="mb-10 sm:mb-12">
          <p className="font-serif-title italic text-2xl sm:text-3xl md:text-4xl font-bold text-[#b40169] tracking-tight text-balance">
            {weddingConfig.closingMessage.text}
          </p>
        </div>

        {/* Family Card */}
        <div className="bg-white/90 backdrop-blur-xs rounded-2xl border border-[#bce3df] p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
          {/* Host */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-[#1b525f] font-medium mb-1">
              With Best Compliments & Blessings From
            </p>
            <h4 className="text-xl sm:text-2xl font-serif-title font-bold text-[#033140]">
              {weddingConfig.closingMessage.host}
            </h4>
          </div>

          <div className="h-[1px] w-24 bg-[#bce3df] mx-auto mb-6" />

          {/* Family members grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 text-center sm:text-left">
            {weddingConfig.closingMessage.family.map((member) => (
              <div
                key={member.name}
                className="bg-[#f2faf9] rounded-xl p-4 border border-[#d6eceb]"
              >
                <p className="font-serif-title text-base sm:text-lg font-bold text-[#033140]">
                  {member.name}
                </p>
                <p className="text-xs sm:text-sm text-[#1b525f] font-medium mt-0.5">
                  ({member.designation})
                </p>
              </div>
            ))}
          </div>

          {/* Contact Numbers Badge (matching original design) */}
          <div className="pt-2">
            <p className="text-xs uppercase tracking-widest text-[#1b525f] font-medium mb-3">
              For Inquiries & Blessings
            </p>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full bg-[#1b525f] text-white shadow-sm">
              <span className="text-xs font-semibold px-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#bce3df]" />
                <span>Contact:</span>
              </span>
              {weddingConfig.contacts.map((contact, index) => (
                <div key={contact.number} className="flex items-center">
                  <a
                    href={`tel:${contact.number}`}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/25 text-white font-mono text-xs sm:text-sm font-semibold tracking-wider transition-colors"
                  >
                    {contact.number}
                  </a>
                  {index < weddingConfig.contacts.length - 1 && (
                    <span className="text-white/40 mx-1 select-none">,</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Tagline */}
        <div className="mt-12 sm:mt-16 space-y-2">
          <p className="font-serif-title italic text-lg sm:text-xl text-[#033140]/80">
            {weddingConfig.couple.bride.fullName} &amp; {weddingConfig.couple.groom.fullName}
          </p>
          <p className="text-xs font-cinzel tracking-[0.2em] text-[#1b525f]/90 uppercase font-semibold">
            {weddingConfig.ceremony.date} · Karur
          </p>
          <div className="flex items-center justify-center gap-1.5 pt-3 text-[#b40169]/60">
            <Heart className="w-3.5 h-3.5 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
}
