import { X, Play, Volume2, VolumeX } from 'lucide-react';
import { useRef, useState } from 'react';

export default function VideoModal({ isOpen, onClose, videoSrc = '/intro_video.mp4' }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl rounded-3xl overflow-hidden glass-panel border border-border/80 shadow-2xl bg-gray-950/90"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="ml-2 font-mono text-xs text-foreground/70">Sirish Chandra — Video Showcase</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl glass hover:bg-foreground/10 text-foreground/80 hover:text-foreground transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
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
        <div className="px-6 py-3 bg-background/50 border-t border-border/50 flex items-center justify-between text-xs text-foreground/60">
          <span>🎥 Video uploaded by Sirish Chandra</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
