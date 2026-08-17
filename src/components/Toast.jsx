import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';

export default function Toast({ message, isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="glass-panel px-6 py-4 rounded-xl border border-green-500/30 shadow-lg shadow-green-500/10 flex items-center gap-3">
        <CheckCircle2 className="w-5 h-5 text-green-500" />
        <p className="text-sm font-medium pr-6">{message}</p>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-foreground/5 rounded-md transition-colors absolute right-2"
        >
          <X className="w-4 h-4 text-foreground/50" />
        </button>
      </div>
    </div>
  );
}
