import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, TerminalSquare } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel py-3 shadow-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl glass flex items-center justify-center border border-border group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
              <TerminalSquare className="w-5 h-5 text-primary transition-transform group-hover:scale-110" />
            </div>
            <span className="font-bold text-lg tracking-tight text-foreground font-sans">
              Sirish<span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <div className="flex items-center p-1 rounded-full glass border border-border/80">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-primary text-white shadow-sm font-semibold'
                        : 'text-foreground/75 hover:text-foreground hover:bg-foreground/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
            
            <div className="flex items-center gap-3 pl-3">
              {/* Elegant Theme Toggle */}
              <button 
                onClick={toggleTheme} 
                className="relative w-9 h-9 rounded-xl glass border border-border/80 flex items-center justify-center text-foreground/80 hover:text-foreground hover:border-primary/40 transition-all active:scale-95" 
                aria-label="Toggle theme"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <div className="transition-transform duration-300 rotate-0 dark:rotate-180">
                  {theme === 'dark' ? (
                    <Sun className="w-4 h-4 text-amber-400 transition-all" />
                  ) : (
                    <Moon className="w-4 h-4 text-slate-700 transition-all" />
                  )}
                </div>
              </button>

              {/* Direct CTA */}
              <a 
                href="#contact" 
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-foreground/80" 
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-foreground"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-border/80 shadow-2xl animate-fade-in">
          <div className="px-4 py-4 space-y-1.5 flex flex-col">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground/80 hover:bg-foreground/5 hover:text-foreground'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="block w-full py-2.5 text-center rounded-xl bg-primary text-white text-sm font-semibold shadow-sm hover:bg-primary-hover transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

