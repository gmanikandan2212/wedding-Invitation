import React, { useEffect, useRef, useState } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // delay in milliseconds
  direction?: "up" | "fade" | "scale" | "left" | "right";
  threshold?: number;
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.12,
}: SectionRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if IntersectionObserver is available
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, unobserve to maintain performance and avoid re-triggering
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold]);

  const getTransformClasses = () => {
    if (isVisible) {
      return "opacity-100 translate-y-0 translate-x-0 scale-100";
    }

    switch (direction) {
      case "fade":
        return "opacity-0";
      case "scale":
        return "opacity-0 scale-95 translate-y-4";
      case "left":
        return "opacity-0 -translate-x-8";
      case "right":
        return "opacity-0 translate-x-8";
      case "up":
      default:
        return "opacity-0 translate-y-8";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: "850ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-transform motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:transform-none ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
