import { useState, useEffect, useRef } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  autoPlayTrigger?: boolean;
}

export function AudioPlayer({ autoPlayTrigger = true }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userManuallyPausedRef = useRef<boolean>(false);
  const hasStartedRef = useRef<boolean>(false);

  useEffect(() => {
    // Initialize wedding hymn audio
    const audio = new Audio("/audio/church_hymn.mp3");
    audio.loop = true;
    audio.volume = 0; // Start at 0 for smooth fade-in
    audioRef.current = audio;

    const targetVolume = 0.45;
    let fadeInterval: number | null = null;

    const fadeInAudio = () => {
      if (fadeInterval) clearInterval(fadeInterval);
      fadeInterval = window.setInterval(() => {
        if (!audioRef.current) return;
        if (audioRef.current.volume < targetVolume - 0.05) {
          audioRef.current.volume = Math.min(targetVolume, audioRef.current.volume + 0.05);
        } else {
          audioRef.current.volume = targetVolume;
          if (fadeInterval) clearInterval(fadeInterval);
        }
      }, 120);
    };

    const tryAutomaticPlay = () => {
      if (!audioRef.current || userManuallyPausedRef.current) return;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hasStartedRef.current = true;
          fadeInAudio();
          removeUnlockListeners();
        })
        .catch(() => {
          // Autoplay restricted until user interaction
          setIsPlaying(false);
        });
    };

    // Unlock listeners for any user gesture (scroll, touch, click, wheel, keydown)
    const unlockEvents = [
      "pointerdown",
      "touchstart",
      "scroll",
      "wheel",
      "click",
      "keydown",
    ];

    const onUserInteractionUnlock = () => {
      if (!hasStartedRef.current && !userManuallyPausedRef.current) {
        tryAutomaticPlay();
      }
    };

    const addUnlockListeners = () => {
      unlockEvents.forEach((event) => {
        window.addEventListener(event, onUserInteractionUnlock, { passive: true, once: false });
        document.addEventListener(event, onUserInteractionUnlock, { passive: true, once: false });
      });
    };

    const removeUnlockListeners = () => {
      unlockEvents.forEach((event) => {
        window.removeEventListener(event, onUserInteractionUnlock);
        document.removeEventListener(event, onUserInteractionUnlock);
      });
    };

    // 1. Try immediate playback on mount
    if (autoPlayTrigger) {
      tryAutomaticPlay();
    }

    // 2. Set up fallback unlock listeners for immediate trigger on first scroll or touch
    addUnlockListeners();

    // 3. Listen to explicit wedding-play-audio event (from envelope tap)
    const handleExplicitPlay = () => {
      userManuallyPausedRef.current = false;
      hasStartedRef.current = true;
      if (audioRef.current) {
        audioRef.current.volume = 0.45;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };
    window.addEventListener("wedding-play-audio", handleExplicitPlay);

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => {
      if (userManuallyPausedRef.current) {
        setIsPlaying(false);
      }
    };

    return () => {
      if (fadeInterval) clearInterval(fadeInterval);
      window.removeEventListener("wedding-play-audio", handleExplicitPlay);
      removeUnlockListeners();
      audio.pause();
      audioRef.current = null;
    };
  }, [autoPlayTrigger]);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      userManuallyPausedRef.current = true;
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      userManuallyPausedRef.current = false;
      hasStartedRef.current = true;
      audioRef.current.volume = 0.45;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div className="fixed top-20 right-4 z-40">
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Mute wedding church hymn" : "Play wedding church hymn"}
        title={isPlaying ? "Mute church hymn" : "Play church hymn"}
        className="group relative flex items-center gap-2.5 px-3 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#c59c3a]/50 shadow-[0_6px_20px_rgba(197,156,58,0.18)] hover:shadow-[0_8px_25px_rgba(197,156,58,0.28)] text-[#0d3627] hover:text-[#8e163b] transition-all duration-300 cursor-pointer hover:scale-103 active:scale-95"
      >
        {/* Animated Icon & Music Disc */}
        <div
          className={`w-7 h-7 rounded-full bg-[#faf8f2] flex items-center justify-center border border-[#c59c3a] text-[#c59c3a] shadow-xs transition-transform ${
            isPlaying ? "animate-spin [animation-duration:5s]" : ""
          }`}
        >
          <Music className="w-3.5 h-3.5 text-[#c59c3a]" />
        </div>

        {/* Audio Wave Bars indicator when playing */}
        {isPlaying && (
          <div className="flex items-center gap-0.5 h-3.5 px-0.5" aria-hidden="true">
            <span className="w-0.5 h-full bg-[#c59c3a] rounded-full animate-[pulse_1s_ease-in-out_infinite]" />
            <span className="w-0.5 h-2/3 bg-[#8e163b] rounded-full animate-[pulse_1.2s_ease-in-out_infinite_200ms]" />
            <span className="w-0.5 h-4/5 bg-[#0d3627] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_400ms]" />
          </div>
        )}

        {/* Status Text */}
        <span className="hidden sm:inline-block text-xs font-serif-title font-bold tracking-wide">
          {isPlaying ? (
            <span className="flex items-center gap-1.5 text-[#0d3627]">
              <Volume2 className="w-3.5 h-3.5 text-[#c59c3a]" />
              <span>Hymn Playing</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[#0d3627]/70">
              <VolumeX className="w-3.5 h-3.5 text-[#8e163b]" />
              <span>Hymn Paused</span>
            </span>
          )}
        </span>
      </button>
    </div>
  );
}
