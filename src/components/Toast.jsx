import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="glass-panel px-5 py-3.5 rounded-xl border border-emerald-500/30 shadow-lg flex items-center gap-3 bg-bg-surface">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
        <p className="text-xs sm:text-sm font-medium text-foreground/90 pr-4">{message}</p>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-foreground/5 rounded-md transition-colors text-foreground/50 hover:text-foreground"
          aria-label="Dismiss notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

