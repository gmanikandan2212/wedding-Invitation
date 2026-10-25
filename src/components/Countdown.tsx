import { useState, useEffect } from "react";
import { weddingConfig } from "../config/weddingConfig";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  isInProgress: boolean;
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const targetTime = new Date(weddingConfig.ceremony.isoDateTime).getTime();
    const now = Date.now();
    const difference = targetTime - now;

    // Ceremony lasts ~1 hour (9:30 AM to 10:30 AM)
    const ceremonyEndTime = targetTime + 60 * 60 * 1000;

    if (difference <= 0) {
      if (now <= ceremonyEndTime) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: false,
          isInProgress: true,
        };
      }
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: true,
        isInProgress: false,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isPast: false,
      isInProgress: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isInProgress) {
    return (
      <div className="text-center py-2.5 px-6 rounded-full bg-white/90 border border-[#c59c3a]/50 inline-block shadow-sm">
        <p className="text-xs sm:text-sm tracking-widest uppercase font-serif-title text-[#8e163b] font-semibold">
          The Holy Matrimony is taking place today
        </p>
      </div>
    );
  }

  if (timeLeft.isPast) {
    return (
      <div className="text-center py-2.5 px-6 rounded-full bg-white/90 border border-[#c59c3a]/50 inline-block shadow-sm">
        <p className="text-xs sm:text-sm tracking-widest uppercase font-serif-title text-[#0d3627] font-semibold">
          United in Holy Matrimony
        </p>
      </div>
    );
  }

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Decorative Golden Cross & Heading */}
      <div className="flex items-center gap-2 mb-2 text-[#c59c3a]">
        <span className="h-[1px] w-8 sm:w-16 bg-[#c59c3a]/50" />
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#0d3627] font-cinzel font-bold text-center">
          Countdown To The Holy Matrimony
        </span>
        <span className="h-[1px] w-8 sm:w-16 bg-[#c59c3a]/50" />
      </div>

      <p className="font-serif-title italic text-xs sm:text-sm text-[#0d3627]/75 mb-6 text-center">
        Counting the blessed moments until we say &ldquo;I do&rdquo;
      </p>

      {/* Grand Countdown Cards Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 max-w-2xl w-full px-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center py-4 sm:py-6 px-2 sm:px-4 rounded-2xl bg-white/95 border-2 border-[#c59c3a]/55 shadow-[0_8px_30px_rgba(13,54,39,0.08)] hover:border-[#c59c3a] hover:-translate-y-2 hover:shadow-[0_16px_35px_rgba(197,156,58,0.22)] transition-all duration-300 cursor-default group"
          >
            <span className="font-serif-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8e163b] tabular-nums tracking-tight leading-none drop-shadow-2xs group-hover:scale-105 transition-transform duration-300">
              {String(item.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm font-cinzel font-bold tracking-[0.2em] uppercase text-[#0d3627] mt-2 sm:mt-3 group-hover:text-[#8e163b] transition-colors">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
