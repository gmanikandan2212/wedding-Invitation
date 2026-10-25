/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { RelatableOpening } from "./components/RelatableOpening";
import { BotanicalHeader } from "./components/BotanicalHeader";
import { BotanicalHero } from "./components/BotanicalHero";
import { BotanicalEvents } from "./components/BotanicalEvents";
import { BotanicalSolemnized } from "./components/BotanicalSolemnized";
import { BotanicalFamilyClosing } from "./components/BotanicalFamilyClosing";
import { BotanicalFooter } from "./components/BotanicalFooter";
import { OriginalCardModal } from "./components/OriginalCardModal";
import { EnvelopeOpening } from "./components/EnvelopeOpening";
import { FallingPetals } from "./components/FallingPetals";
import { AudioPlayer } from "./components/AudioPlayer";
import { FloatingActions } from "./components/FloatingActions";
import { WeddingCursor } from "./components/WeddingCursor";
import { SectionReveal } from "./components/SectionReveal";

export default function App() {
  const [isCardModalOpen, setIsCardModalOpen] = useState<boolean>(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(true);
  const [guestName, setGuestName] = useState<string>("Guest");

  // Read ?to= query parameter from URL (e.g. ?to=Guest or ?to=Family)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get("to");
    if (toParam && toParam.trim()) {
      setGuestName(toParam.trim());
    }
  }, []);

  return (
    <div className="min-h-screen bg-wedding-botanical text-[#0d3627] selection:bg-[#c59c3a]/25 selection:text-[#0d3627] flex flex-col relative pb-28 sm:pb-32 md:pb-0">
      {/* Interactive Wedding Golden Cursor & Sparkle Trail */}
      <WeddingCursor />

      {/* Royal Botanical Wedding Envelope Opening Cover with 3D Wax Seal & Tap to Open */}
      <EnvelopeOpening
        isOpen={isEnvelopeOpen}
        onClose={() => setIsEnvelopeOpen(false)}
        guestName={guestName}
      />

      {/* 1. Welcoming Relatable Opening Banner */}
      <RelatableOpening
        guestName={guestName}
        onOpenCardModal={() => setIsCardModalOpen(true)}
        onReopenEnvelope={() => setIsEnvelopeOpen(true)}
      />

      {/* Floating Gentle Petal Particles */}
      <FallingPetals />

      {/* Background Church Hymn Audio Player - Plays automatically */}
      <AudioPlayer autoPlayTrigger={true} />

      {/* 2. Main Webpage: Botanical Green & Harvest Gold Design */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <BotanicalHeader
          onOpenCardModal={() => setIsCardModalOpen(true)}
          onReopenEnvelope={() => setIsEnvelopeOpen(true)}
        />

        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            {/* Hero Section: Master Invitation Card Presentation with Professional Text Animations */}
            <SectionReveal direction="up" delay={50}>
              <BotanicalHero />
            </SectionReveal>

            {/* Solemnized By Section with Bishop Portrait with Scroll Animation */}
            <SectionReveal direction="up" delay={100}>
              <BotanicalSolemnized />
            </SectionReveal>

            {/* Unified Ceremony & Reception Schedule & Venues Section with Photos and Google Maps */}
            <SectionReveal direction="up" delay={150}>
              <BotanicalEvents />
            </SectionReveal>

            {/* With Love, Representatives & Contacts with Scroll Animation */}
            <SectionReveal direction="up" delay={150}>
              <BotanicalFamilyClosing />
            </SectionReveal>
          </div>
        </main>

        {/* Footer Banner with Scroll Animation */}
        <SectionReveal direction="fade" delay={100}>
          <BotanicalFooter />
        </SectionReveal>
      </div>

      {/* Mobile Sticky Quick Action Bar */}
      <FloatingActions />

      {/* High-Resolution Original Invitation Card Modal */}
      <OriginalCardModal
        isOpen={isCardModalOpen}
        onClose={() => setIsCardModalOpen(false)}
      />
    </div>
  );
}
