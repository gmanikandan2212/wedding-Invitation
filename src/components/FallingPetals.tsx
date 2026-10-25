import { useState, useEffect } from "react";

interface FloatingParticle {
  id: number;
  type: "petal" | "sparkle";
  left: number; // percentage
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  rotation: number; // deg
  drift: number; // px
}

export function FallingPetals() {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    // Generate 18 gentle particles: a mix of floral petals and golden stardust
    const items: FloatingParticle[] = Array.from({ length: 18 }).map((_, index) => ({
      id: index,
      type: index % 3 === 0 ? "sparkle" : "petal",
      left: Math.random() * 96 + 2,
      size: index % 3 === 0 ? Math.floor(Math.random() * 8 + 8) : Math.floor(Math.random() * 16 + 18),
      duration: Math.random() * 7 + 9,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      drift: (Math.random() - 0.5) * 90,
    }));
    setParticles(items);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden select-none"
    >
      <style>{`
        @keyframes gentle-fall {
          0% {
            transform: translateY(-50px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(105vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute will-change-transform opacity-0"
          style={
            {
              left: `${p.left}%`,
              top: 0,
              width: `${p.size}px`,
              animation: `gentle-fall ${p.duration}s ease-in-out ${p.delay}s infinite`,
              "--drift": `${p.drift}px`,
            } as React.CSSProperties
          }
        >
          {p.type === "petal" ? (
            <img
              src="/assets/scatter-petal-1.png"
              alt=""
              className="w-full h-auto object-contain filter drop-shadow-xs"
              loading="lazy"
            />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-auto text-[#c59c3a] drop-shadow-[0_0_6px_rgba(197,156,58,0.7)] animate-pulse"
            >
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
