import { Phone, User } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";

export function ChapelWithLove() {
  return (
    <section className="py-14 sm:py-18 px-4 sm:px-6 border-t border-[#c5a059]/30">
      <div className="max-w-4xl mx-auto">
        {/* 3-Column Layout exactly matching Design 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-center md:text-left">
          {/* Column 1: Contact */}
          <div className="md:col-span-4 flex flex-col md:flex-row items-center md:items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#13372b] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shrink-0 shadow-inner">
              <Phone className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="font-cinzel text-xs uppercase tracking-wider text-[#c5a059] font-bold mb-1">
                Contact
              </p>
              <div className="space-y-1 font-serif-title text-sm sm:text-base font-semibold text-white">
                {weddingConfig.contacts.map((c, i) => (
                  <p key={c.number}>
                    <a
                      href={`tel:${c.number}`}
                      className="hover:text-[#c5a059] transition-colors"
                    >
                      {c.number}
                    </a>
                    {i < weddingConfig.contacts.length - 1 && (
                      <span className="text-[#8d7b48]">, </span>
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Wedding Representatives & Host */}
          <div className="md:col-span-5 flex flex-col md:flex-row items-center md:items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#13372b] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shrink-0 shadow-inner">
              <User className="w-5 h-5 stroke-[1.8]" />
            </div>
            <div>
              <p className="font-cinzel text-xs uppercase tracking-wider text-[#c5a059] font-bold mb-1">
                Wedding Representatives
              </p>
              <p className="font-serif-title text-base sm:text-lg font-bold text-white">
                {weddingConfig.closingMessage.host}
              </p>
              <div className="mt-2 space-y-0.5">
                <p className="font-serif-title text-sm sm:text-base font-bold text-white">
                  {weddingConfig.closingMessage.family[0]?.name.split(",")[0]}
                </p>
                <p className="text-xs sm:text-sm text-[#d4c9b8] font-medium">
                  {weddingConfig.closingMessage.family[0]?.designation}
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Indhumathi */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start pt-0 md:pt-6">
            <p className="font-serif-title text-sm sm:text-base font-bold text-white">
              {weddingConfig.closingMessage.family[1]?.name.split(",")[0]}
            </p>
            <p className="text-xs sm:text-sm text-[#d4c9b8] font-medium">
              {weddingConfig.closingMessage.family[1]?.designation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
