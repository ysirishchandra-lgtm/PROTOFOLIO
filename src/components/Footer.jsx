import { ArrowUp, Mail, TerminalSquare } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterXIcon as TwitterX } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-foreground/[0.02] relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10 translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg glass flex items-center justify-center border border-border">
                <TerminalSquare className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-lg tracking-tight text-foreground font-sans">
                Sirish Chandra<span className="text-primary">.</span>
              </span>
            </a>
            <p className="text-foreground/65 max-w-sm text-xs sm:text-sm leading-relaxed">
              Computer Science & Engineering Student • Full-Stack Developer • AI Systems Builder. Open for software development internships and collaborative engineering.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-primary/40 transition-all hover:-translate-y-0.5"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-foreground/70 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={portfolioData.personal.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-all hover:-translate-y-0.5"
                title="X / Twitter"
              >
                <TwitterX className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="w-9 h-9 rounded-xl glass border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/40 transition-all hover:-translate-y-0.5"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider font-mono mb-3">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/65 hover:text-primary transition-colors text-xs sm:text-sm">About Me</a></li>
              <li><a href="#skills" className="text-foreground/65 hover:text-primary transition-colors text-xs sm:text-sm">Skills & Stack</a></li>
              <li><a href="#projects" className="text-foreground/65 hover:text-primary transition-colors text-xs sm:text-sm">Projects</a></li>
              <li><a href="#experience" className="text-foreground/65 hover:text-primary transition-colors text-xs sm:text-sm">Education & Experience</a></li>
              <li><a href="#contact" className="text-foreground/65 hover:text-primary transition-colors text-xs sm:text-sm">Contact Me</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider font-mono mb-3">Direct Contact</h4>
            <div className="space-y-2 text-xs sm:text-sm text-foreground/70">
              <p>{portfolioData.personal.email}</p>
              <p>{portfolioData.personal.phone}</p>
            </div>
            <a href="#contact" className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors text-xs mt-3 group">
              <span>Send direct message</span>
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

        <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-foreground/50 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-foreground/50 text-xs font-mono">React • Vite • Tailwind</span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-xl glass border border-border text-foreground/60 hover:text-foreground hover:border-primary/40 transition-all hover:-translate-y-0.5"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

