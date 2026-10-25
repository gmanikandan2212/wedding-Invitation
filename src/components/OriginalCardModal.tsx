import { useState, useEffect } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Share2, FileText } from "lucide-react";
import { weddingConfig } from "../config/weddingConfig";
import { getWhatsAppShareUrl } from "../utils/calendar";

interface OriginalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OriginalCardModal({ isOpen, onClose }: OriginalCardModalProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Original Wedding Invitation Card"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#033140]/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[95vh] bg-[#fbfaf6] rounded-2xl shadow-2xl border border-[#c59c3a]/40 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-white border-b border-[#c59c3a]/25">
          <div>
            <h3 className="font-serif-title font-bold text-base sm:text-lg text-[#0d3627]">
              Official Wedding Invitation Card
            </h3>
            <p className="text-[11px] sm:text-xs text-[#0d3627]/80 font-medium">
              Authentic printed keepsake for P. Precilla &amp; G. Michael
            </p>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#f5f8f3] p-1 rounded-lg border border-[#c59c3a]/30">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                title="Zoom Out"
                className="p-1.5 text-[#0d3627] hover:bg-white rounded transition-colors disabled:opacity-40 cursor-pointer"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                title="Reset Zoom"
                className="p-1.5 text-[#0d3627] hover:bg-white rounded transition-colors cursor-pointer text-xs font-mono px-2"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                title="Zoom In"
                className="p-1.5 text-[#0d3627] hover:bg-white rounded transition-colors disabled:opacity-40 cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 text-[#0d3627] hover:text-[#8e163b] hover:bg-[#f5f8f3] rounded-full transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Zoomable Image Container */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-radial from-[#fdfcf9] to-[#edf3ea]">
          <div
            className="transition-transform duration-200 ease-out origin-center max-w-full"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={weddingConfig.assets.fullCardImage}
              alt="Complete Original Wedding Invitation for P. Precilla and G. Michael"
              className="max-h-[75vh] w-auto mx-auto rounded-lg shadow-xl border border-white/80 object-contain select-none"
              loading="eager"
            />
          </div>
        </div>

        {/* Modal Footer: Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-white border-t border-[#c59c3a]/25">
          <div className="flex items-center gap-2">
            <a
              href={weddingConfig.assets.fullCardImage}
              download="Precilla_Michael_Wedding_Invitation.png"
              className="px-3.5 py-2 rounded-lg bg-[#0d3627] hover:bg-[#082218] text-[#fbfaf6] text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save Image</span>
            </a>

            <a
              href={weddingConfig.assets.originalPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-white hover:bg-slate-50 text-[#033140] border border-[#c8e8e8] text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#b40169]" />
              <span>Original PDF</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppShareUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
