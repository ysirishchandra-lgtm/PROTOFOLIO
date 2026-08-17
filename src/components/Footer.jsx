import { ArrowUp, Mail, TerminalSquare } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterXIcon as TwitterX } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/[0.03] border-t border-border mt-12 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10 translate-y-1/2 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-4">
              <TerminalSquare className="w-8 h-8 text-primary" />
              <span className="font-bold text-xl tracking-tight">Sirish Chandra.</span>
            </a>
            <p className="text-foreground/70 max-w-sm mb-6">
              Computer Science & Engineering Student • Full-Stack Developer • AI/Software Enthusiast. Open to software development internships and innovative collaborations.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-primary/50 transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/70 hover:text-[#0A66C2] hover:border-[#0A66C2]/50 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.personal.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/70 hover:text-sky-400 hover:border-sky-400/50 transition-all hover:scale-105"
                title="X / Twitter"
              >
                <TwitterX className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-foreground/70 hover:text-rose-500 hover:border-rose-500/50 transition-all hover:scale-105"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors text-sm">About Me</a></li>
              <li><a href="#skills" className="text-foreground/70 hover:text-primary transition-colors text-sm">Technical Skills</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors text-sm">Projects</a></li>
              <li><a href="#experience" className="text-foreground/70 hover:text-primary transition-colors text-sm">Education & Leadership</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-primary transition-colors text-sm">Contact Me</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Let's Connect</h4>
            <p className="text-foreground/70 text-sm mb-4">
              Feel free to reach out directly via email, phone, or LinkedIn.
            </p>
            <div className="space-y-2 text-sm text-foreground/75">
              <p>📧 {portfolioData.personal.email}</p>
              <p>📞 {portfolioData.personal.phone}</p>
            </div>
            <a href="#contact" className="inline-flex text-primary font-semibold hover:text-primary-hover transition-colors text-sm group mt-4">
              Send a direct message 
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-foreground/60 text-sm">Built with React & Vite</span>
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full glass hover:border-primary/50 text-foreground/60 hover:text-primary transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
