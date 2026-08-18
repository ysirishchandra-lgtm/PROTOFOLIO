import { useState } from 'react';
import { ArrowRight, Mail, Code2, Cpu, Database, Play } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterXIcon as TwitterX } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';
import TiltCard from './TiltCard';
import VideoModal from './VideoModal';

export default function Hero() {
  const typedText = useTypewriter(portfolioData.personal.roles, 65, 2800);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      
      {/* Subconscious Atmospheric Glow (Reduced intensity by 30%) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] bg-primary/[0.04] dark:bg-primary/[0.06] rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Info, Headline & Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 animate-slide-up">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-emerald-500/30 bg-emerald-500/[0.04] text-foreground text-xs font-semibold shadow-xs cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-foreground/90">{portfolioData.personal.availability}</span>
              <span className="text-foreground/30">•</span>
              <span className="text-foreground/60 font-normal">Hyderabad, IN</span>
            </div>

            {/* Main Heading with Improved Mobile Composition & Hierarchy */}
            <div className="space-y-1">
              <p className="text-[11px] sm:text-xs uppercase tracking-widest text-primary font-bold font-mono">Software Engineer & Builder</p>
              <h1 className="text-[clamp(2.15rem,6.8vw,3.75rem)] font-extrabold tracking-tight leading-[1.12]">
                <span className="block text-foreground/90 font-medium">Hi, I'm</span>
                <span className="block text-foreground">Sirish Chandra</span>
                <span className="block text-gradient-restrained">Yellanki</span>
              </h1>
            </div>

            {/* Typewriter Banner */}
            <div className="h-10 sm:h-11 flex items-center">
              <div className="glass px-3.5 py-1.5 rounded-lg border border-border flex items-center gap-2">
                <span className="text-primary font-mono font-bold text-xs sm:text-sm">&gt;</span>
                <h2 className="text-sm sm:text-lg font-medium text-foreground/90 font-mono">
                  <span>{typedText}</span>
                  <span className="animate-pulse text-primary font-bold ml-0.5">_</span>
                </h2>
              </div>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-sm sm:text-base text-foreground/75 max-w-xl leading-relaxed">
              {portfolioData.personal.tagline}
            </p>

            {/* Action Buttons: Video Showcase (Primary) + View Projects (Secondary) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Primary CTA: Video Showcase */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 shadow-sm shadow-primary/25 active:scale-[0.98]"
                aria-label="Open video showcase modal"
              >
                <div className="w-5 h-5 rounded-md bg-white/20 flex items-center justify-center text-white">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Video Showcase</span>
              </button>

              {/* Secondary CTA: View Projects */}
              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-xs sm:text-sm font-medium text-foreground/80 hover:text-foreground hover:border-border-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-primary" />
              </a>
            </div>

            {/* Social Channels with Subtle Glow */}
            <div className="flex items-center gap-2.5 pt-1">
              <span className="text-[11px] uppercase tracking-wider text-foreground/45 font-bold font-mono">Connect:</span>
              
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg glass text-foreground/70 hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>

              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg glass text-foreground/70 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/5 transition-all hover:-translate-y-0.5"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <a 
                href={portfolioData.personal.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="p-2 rounded-lg glass text-foreground/70 hover:text-foreground hover:border-foreground/30 hover:bg-foreground/5 transition-all hover:-translate-y-0.5"
                title="X / Twitter"
              >
                <TwitterX className="w-3.5 h-3.5" />
              </a>

              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="p-2 rounded-lg glass text-foreground/70 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all hover:-translate-y-0.5"
                title="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait Preview (Non-clickable) with Clean Tech Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            
            {/* Tech Badge 1 - Top Left */}
            <div className="absolute -top-3 -left-3 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg glass border border-border shadow-xs">
              <div className="p-1 bg-primary/10 rounded text-primary">
                <Code2 className="w-3 h-3" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-foreground/50 uppercase font-semibold">Frontend</p>
                <p className="text-[11px] font-bold text-foreground">React & Vite</p>
              </div>
            </div>

            {/* Tech Badge 2 - Top Right */}
            <div className="absolute -top-3 -right-2 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg glass border border-border shadow-xs">
              <div className="p-1 bg-primary/10 rounded text-primary">
                <Cpu className="w-3 h-3" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-foreground/50 uppercase font-semibold">AI Stack</p>
                <p className="text-[11px] font-bold text-foreground">Ollama & LLMs</p>
              </div>
            </div>

            {/* Tech Badge 3 - Bottom Left */}
            <div className="absolute -bottom-3 -left-2 z-20 hidden sm:flex items-center gap-2 px-2.5 py-1.5 rounded-lg glass border border-border shadow-xs">
              <div className="p-1 bg-emerald-500/10 rounded text-emerald-500">
                <Database className="w-3 h-3" />
              </div>
              <div className="text-left">
                <p className="text-[9px] text-foreground/50 uppercase font-semibold">Database</p>
                <p className="text-[11px] font-bold text-foreground">Supabase & SQL</p>
              </div>
            </div>

            {/* Main 3D Tilt Card (Visual Only) */}
            <div className="relative w-full max-w-[260px] sm:max-w-xs">
              
              <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl">
                <div className="relative rounded-2xl overflow-hidden glass border border-border shadow-md select-none">
                  
                  {/* Photo with Vignette (Purely Visual) */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img 
                      src={portfolioData.personal.avatar} 
                      alt={portfolioData.personal.name} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"></div>

                    {/* Bottom Info badge inside photo */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[9px] uppercase tracking-wider text-blue-400 font-bold">B.Tech — CSE</p>
                          <p className="text-xs font-semibold text-white">KMCE, Hyderabad</p>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                          2025–Present
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Status bar */}
                  <div className="px-3.5 py-2 bg-card font-mono text-xs text-foreground/75 flex justify-between items-center border-t border-border">
                    <span className="flex items-center gap-1.5 text-xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Ready to Build
                    </span>
                    <span className="text-[10px] text-foreground/45">Full-Stack & AI</span>
                  </div>

                </div>
              </TiltCard>

            </div>

          </div>

        </div>
      </div>

      {/* Video Player Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="/intro_video.mp4"
      />
    </section>
  );
}

