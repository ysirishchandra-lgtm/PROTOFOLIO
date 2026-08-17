import { Download, ArrowRight, Mail, Phone, Sparkles, Terminal, Code2, Cpu, Database, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterXIcon as TwitterX } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import { useTypewriter } from '../hooks/useTypewriter';
import TiltCard from './TiltCard';

export default function Hero() {
  const typedText = useTypewriter(portfolioData.personal.roles);

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#a855f7', '#38bdf8', '#ec4899', '#10b981'],
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      
      {/* Dynamic Animated Ambient Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-blob"></div>
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-accent/20 rounded-full blur-[120px] -z-10 animate-blob" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-pink-500/15 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '5s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Info, Headline & Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 animate-slide-up">
            
            {/* Status Pill with Pulsing Glowing Radar */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass border border-primary/40 bg-primary/10 text-primary text-sm font-semibold shadow-lg shadow-primary/10 hover:scale-105 transition-transform cursor-default">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-sm shadow-emerald-500"></span>
              </span>
              <span>{portfolioData.personal.availability}</span>
              <Sparkles className="w-3.5 h-3.5 text-primary animate-spin-slow" />
            </div>

            {/* Main Headline with Animated Shimmer */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-shimmer drop-shadow-sm">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Typewriter Banner */}
            <div className="h-14 flex items-center">
              <div className="glass px-4 py-2 rounded-xl border border-border/60">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/90 font-mono flex items-center gap-2">
                  <span className="text-accent">&gt;</span> 
                  <span>{typedText}</span>
                  <span className="animate-pulse text-primary font-bold">_</span>
                </h2>
              </div>
            </div>

            {/* Tagline / Pitch */}
            <p className="text-lg text-foreground/75 max-w-xl leading-relaxed">
              {portfolioData.personal.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href={portfolioData.personal.resumeUrl} 
                onClick={triggerConfetti}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-95 transition-all hover:scale-105 shadow-xl shadow-primary/25 active:scale-95"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Resume</span>
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
              </a>

              <a 
                href="#projects" 
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold hover:bg-foreground/10 transition-all hover:scale-105 border border-border/80 shadow-md active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
              </a>

              <a 
                href={`tel:${portfolioData.personal.phone}`} 
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl glass font-medium hover:text-primary hover:border-primary/50 transition-all border border-border/80 shadow-sm"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm">{portfolioData.personal.phone}</span>
              </a>
            </div>

            {/* Social Channels with Hover Glow */}
            <div className="flex items-center gap-4 pt-3">
              <span className="text-xs uppercase tracking-wider text-foreground/50 font-bold">Connect:</span>
              
              <a 
                href={portfolioData.personal.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl glass text-foreground/75 hover:text-foreground hover:border-primary/60 hover:shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a 
                href={portfolioData.personal.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl glass text-foreground/75 hover:text-[#0A66C2] hover:border-[#0A66C2]/60 hover:shadow-lg hover:shadow-[#0A66C2]/20 transition-all hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a 
                href={portfolioData.personal.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 rounded-xl glass text-foreground/75 hover:text-sky-400 hover:border-sky-400/60 hover:shadow-lg hover:shadow-sky-400/20 transition-all hover:-translate-y-1"
                title="X / Twitter"
              >
                <TwitterX className="w-5 h-5" />
              </a>

              <a 
                href={`mailto:${portfolioData.personal.email}`} 
                className="p-3 rounded-xl glass text-foreground/75 hover:text-rose-500 hover:border-rose-500/60 hover:shadow-lg hover:shadow-rose-500/20 transition-all hover:-translate-y-1"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Photo with Orbiting Floating Tech Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Orbiting Floating Badge 1 - Top Left */}
            <div className="absolute -top-6 -left-6 z-20 animate-float-slow hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-primary/40 shadow-xl backdrop-blur-xl">
              <div className="p-1.5 bg-primary/20 rounded-lg text-primary">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-foreground/60 uppercase font-semibold">Frontend</p>
                <p className="text-xs font-bold text-foreground">React & Vite</p>
              </div>
            </div>

            {/* Orbiting Floating Badge 2 - Top Right */}
            <div className="absolute -top-4 -right-4 z-20 animate-float-reverse hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-accent/40 shadow-xl backdrop-blur-xl">
              <div className="p-1.5 bg-accent/20 rounded-lg text-accent">
                <Cpu className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-foreground/60 uppercase font-semibold">AI Stack</p>
                <p className="text-xs font-bold text-foreground">Ollama & LLMs</p>
              </div>
            </div>

            {/* Orbiting Floating Badge 3 - Bottom Left */}
            <div className="absolute -bottom-6 -left-4 z-20 animate-float-reverse hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-emerald-500/40 shadow-xl backdrop-blur-xl">
              <div className="p-1.5 bg-emerald-500/20 rounded-lg text-emerald-400">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-foreground/60 uppercase font-semibold">Database</p>
                <p className="text-xs font-bold text-foreground">Supabase & SQL</p>
              </div>
            </div>

            {/* Orbiting Floating Badge 4 - Bottom Right */}
            <div className="absolute -bottom-5 -right-4 z-20 animate-float-slow hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-pink-500/40 shadow-xl backdrop-blur-xl">
              <div className="p-1.5 bg-pink-500/20 rounded-lg text-pink-400">
                <Flame className="w-4 h-4" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-foreground/60 uppercase font-semibold">Focus</p>
                <p className="text-xs font-bold text-foreground">Full-Stack Apps</p>
              </div>
            </div>

            {/* Main 3D Tilt Card */}
            <div className="relative w-full max-w-xs sm:max-w-sm">
              
              {/* Outer Neon Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary via-purple-500 to-accent rounded-[32px] blur-xl opacity-60 animate-pulse-glow"></div>
              
              <TiltCard maxTilt={15} scale={1.03} className="rounded-[28px]">
                <div className="relative rounded-[28px] overflow-hidden glass-panel border border-border/80 shadow-2xl">
                  
                  {/* Photo with Vignette */}
                  <div className="relative aspect-[4/5] overflow-hidden group">
                    <img 
                      src={portfolioData.personal.avatar} 
                      alt={portfolioData.personal.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent"></div>
                    
                    {/* Bottom floating badge inside image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl glass-panel border border-white/20 backdrop-blur-xl shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                            <p className="text-xs uppercase tracking-wider text-primary font-extrabold">Computer Science & Eng</p>
                          </div>
                          <p className="text-sm font-semibold text-foreground mt-0.5">KMCE, Hyderabad</p>
                        </div>
                        <div className="p-2 bg-primary/20 rounded-xl text-primary">
                          <Sparkles className="w-4 h-4 animate-spin-slow" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terminal Status bar */}
                  <div className="px-4 py-3 bg-background/80 font-mono text-xs text-foreground/80 flex justify-between items-center border-t border-border/50">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      Open for Work
                    </span>
                    <span className="text-foreground/50">Hyderabad, IN</span>
                  </div>

                </div>
              </TiltCard>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
