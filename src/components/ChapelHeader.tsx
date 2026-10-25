interface ChapelHeaderProps {
  onOpenCardModal: () => void;
}

export function ChapelHeader({ onOpenCardModal }: ChapelHeaderProps) {
  return (
    <header className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-5 flex items-center justify-between z-30">
      {/* Top Left Golden Latin Cross */}
      <div className="flex items-center">
        <svg
          className="w-5 h-7 text-[#c5a059]"
          viewBox="0 0 24 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="2" x2="12" y2="30" />
          <line x1="4" y1="10" x2="20" y2="10" />
        </svg>
      </div>

      {/* Top Right Navigation Links */}
      <nav aria-label="Page Navigation" className="flex items-center gap-6 sm:gap-9 text-xs font-serif-title uppercase tracking-[0.2em] text-[#ede5d8]">
        <a
          href="#home"
          className="relative py-1 text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#c5a059]"
        >
          Home
        </a>
        <a
          href="#families"
          className="hover:text-[#c5a059] transition-colors py-1 hidden sm:inline-block text-[#d9cfbe]"
        >
          Our Story
        </a>
        <a
          href="#details"
          className="hover:text-[#c5a059] transition-colors py-1 text-[#d9cfbe]"
        >
          Wedding Details
        </a>
        <a
          href="#venues"
          className="hover:text-[#c5a059] transition-colors py-1 text-[#d9cfbe]"
        >
          Venue
        </a>
        <button
          type="button"
          onClick={onOpenCardModal}
          className="hover:text-white transition-colors py-1 cursor-pointer hidden md:inline-block text-[#c5a059] font-semibold"
        >
          Original Card
        </button>
      </nav>
    </header>
  );
}
