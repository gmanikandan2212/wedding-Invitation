import { useEffect, useState, useRef } from "react";

interface SparkleParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
}

export function WeddingCursor() {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isClicking, setIsClicking] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [sparkles, setSparkles] = useState<SparkleParticle[]>([]);
  const isTouchRef = useRef<boolean>(false);
  const lastSpawnRef = useRef<number>(0);
  const nextIdRef = useRef<number>(0);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      isTouchRef.current = true;
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      const { clientX: x, clientY: y } = e;
      setPos({ x, y });

      // Spawn subtle golden wedding stardust sparkle on movement
      const now = performance.now();
      if (now - lastSpawnRef.current > 45) {
        lastSpawnRef.current = now;
        const newSparkle: SparkleParticle = {
          id: nextIdRef.current++,
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          size: Math.random() * 5 + 3,
          opacity: 0.9,
          rotation: Math.random() * 360,
        };

        setSparkles((prev) => [...prev.slice(-14), newSparkle]);
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest(".group") ||
          target.tagName === "A" ||
          target.tagName === "BUTTON")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Fade out sparkles over time
  useEffect(() => {
    if (sparkles.length === 0) return;
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((s) => ({ ...s, opacity: s.opacity - 0.12, size: s.size * 0.92 }))
          .filter((s) => s.opacity > 0.05)
      );
    }, 40);
    return () => clearInterval(interval);
  }, [sparkles.length]);

  if (isTouchRef.current || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Sparkle Trail Particles */}
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 will-change-transform"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            opacity: s.opacity,
            transform: `translate(-50%, -50%) rotate(${s.rotation}deg) scale(${s.opacity})`,
            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
          }}
        >
          {/* 4-point Golden Wedding Star Sparkle */}
          <svg
            width={s.size * 2}
            height={s.size * 2}
            viewBox="0 0 24 24"
            fill="none"
            className="text-[#c59c3a] drop-shadow-[0_0_6px_rgba(197,156,58,0.8)]"
          >
            <path
              d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}

      {/* Main Golden Follower Halo */}
      <div
        className="absolute rounded-full border border-[#c59c3a]/70 will-change-transform pointer-events-none transition-[width,height,background-color,border-color,transform] duration-150 ease-out flex items-center justify-center -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(197,156,58,0.25)]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isHovering ? "46px" : isClicking ? "24px" : "32px",
          height: isHovering ? "46px" : isClicking ? "24px" : "32px",
          backgroundColor: isHovering
            ? "rgba(197, 156, 58, 0.12)"
            : isClicking
            ? "rgba(142, 22, 59, 0.2)"
            : "rgba(255, 255, 255, 0.05)",
          backdropFilter: isHovering ? "blur(1px)" : "none",
        }}
      >
        {/* Subtle center golden cross or dot */}
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovering
              ? "w-2 h-2 bg-[#8e163b] shadow-[0_0_8px_rgba(142,22,59,0.7)]"
              : "w-1.5 h-1.5 bg-[#c59c3a] shadow-[0_0_6px_rgba(197,156,58,0.9)]"
          }`}
        />
      </div>
    </div>
  );
}
