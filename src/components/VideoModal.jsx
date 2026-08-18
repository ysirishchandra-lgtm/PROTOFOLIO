import { X } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function VideoModal({ isOpen, onClose, videoSrc = '/intro_video.mp4' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden glass-panel border border-border shadow-2xl bg-bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
            <span className="ml-2 font-mono text-xs text-foreground/70">Sirish Chandra — Project & Intro Showcase</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg glass hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 bg-foreground/[0.02] border-t border-border flex items-center justify-between text-xs text-foreground/60">
          <span className="font-mono text-[11px]">Developer Showcase Video</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

