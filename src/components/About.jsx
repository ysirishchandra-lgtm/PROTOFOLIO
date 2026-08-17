import { useState } from 'react';
import { Terminal, Code, Cpu, Sparkles, Send, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { cmd: 'whoami', output: `Sirish Chandra Yellanki - B.Tech CSE Student, Full-Stack Developer & AI Enthusiast based in Hyderabad, India.` },
    { cmd: 'cat strengths.txt', output: portfolioData.strengths.join(' • ') },
  ]);

  const handleCommand = (cmdStr) => {
    const trimmed = (cmdStr || terminalInput).trim().toLowerCase();
    if (!trimmed) return;

    let response = '';
    switch (trimmed) {
      case 'help':
        response = `Available commands: whoami, skills, projects, contact, strengths, education, clear, quote`;
        break;
      case 'whoami':
        response = `${portfolioData.personal.name} — ${portfolioData.personal.roles.join(', ')}. Passionate about building impactful software and AI workflows.`;
        break;
      case 'skills':
        response = `Frontend (React, Vite, CSS), Backend (Node, Express, REST APIs), DB (Supabase, PostgreSQL), AI (Ollama, Prompt Eng), Tools (Docker, Git).`;
        break;
      case 'projects':
        response = `1. FounderMind (AI Chief-of-Staff) 2. Campus Canteen (Full-Stack Ordering) 3. Ask My Notes (AI Knowledge Processing)`;
        break;
      case 'contact':
        response = `Email: ${portfolioData.personal.email} | Phone: ${portfolioData.personal.phone} | GitHub: ${portfolioData.personal.github}`;
        break;
      case 'strengths':
        response = portfolioData.strengths.join(' • ');
        break;
      case 'education':
        response = `B.Tech CSE at KMCE Hyderabad (2025–Present) | Intermediate at Narayana (887 marks) | SSC (8.0 CGPA)`;
        break;
      case 'quote':
        response = `"First, solve the problem. Then, write the code." — John Johnson`;
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      case 'sudo':
        response = `Permission denied: You are already viewing Sirish's top-tier portfolio! 🚀`;
        break;
      default:
        response = `Command not recognized: "${trimmed}". Type "help" for a list of commands.`;
    }

    setTerminalHistory(prev => [...prev, { cmd: trimmed, output: response }]);
    setTerminalInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand();
  };

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Discover My Story
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-shimmer">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & 3D Feature Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-border/70 shadow-lg relative overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/15 rounded-full blur-2xl group-hover:bg-primary/25 transition-all"></div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <span>Turning Ideas into Functional Reality</span>
              </h3>
              
              <p className="text-foreground/80 leading-relaxed text-base sm:text-lg mb-4">
                {portfolioData.personal.objective}
              </p>

              <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
                Currently building high-performance web applications and experimenting with AI & LLM architectures like Ollama and Supabase to create practical developer tools.
              </p>
            </div>
            
            {/* 3D Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <TiltCard maxTilt={10} scale={1.02} className="rounded-2xl">
                <div className="glass p-6 rounded-2xl border border-border/70 hover:border-primary/50 shadow-md h-full transition-all group">
                  <div className="p-3 bg-primary/15 rounded-xl w-fit text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1">Full-Stack Dev</h4>
                  <p className="text-foreground/70 text-sm">React, Node.js, Express, REST APIs & modern cloud architectures.</p>
                </div>
              </TiltCard>

              <TiltCard maxTilt={10} scale={1.02} className="rounded-2xl">
                <div className="glass p-6 rounded-2xl border border-border/70 hover:border-accent/50 shadow-md h-full transition-all group">
                  <div className="p-3 bg-accent/15 rounded-xl w-fit text-accent mb-4 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1">AI & LLMs</h4>
                  <p className="text-foreground/70 text-sm">Local LLM workflows, Prompt Engineering & intelligent automation.</p>
                </div>
              </TiltCard>

            </div>
          </div>

          {/* Right Column: Live Interactive Developer Terminal */}
          <div className="lg:col-span-6">
            <TiltCard maxTilt={8} scale={1.01} className="rounded-3xl shadow-2xl">
              <div className="glass-panel rounded-3xl border border-border/80 overflow-hidden shadow-2xl">
                
                {/* Terminal Header */}
                <div className="bg-foreground/[0.06] dark:bg-black/40 px-5 py-3.5 flex items-center justify-between border-b border-border/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-foreground/60">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    <span>sirish@terminal:~ (interactive)</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-primary font-mono font-semibold">
                    zsh
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm bg-background/90 dark:bg-gray-950/80 min-h-[320px] max-h-[380px] overflow-y-auto space-y-4">
                  
                  {/* Shortcut pills */}
                  <div className="flex items-center flex-wrap gap-2 pb-2 border-b border-border/40">
                    <span className="text-[11px] text-foreground/50 font-semibold">Quick commands:</span>
                    {['help', 'whoami', 'skills', 'projects', 'contact', 'quote', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleCommand(cmd)}
                        className="px-2.5 py-1 rounded-md bg-primary/10 hover:bg-primary text-primary hover:text-white transition-all text-[11px] border border-primary/20"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  {/* History */}
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1 animate-fade-in">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <span className="text-accent">&gt;</span>
                        <span className="text-foreground">{item.cmd}</span>
                      </div>
                      <div className="text-foreground/80 pl-4 leading-relaxed whitespace-pre-wrap">
                        {item.output}
                      </div>
                    </div>
                  ))}

                  {/* Interactive CLI Input */}
                  <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2 text-primary">
                    <span className="text-accent font-bold">&gt;</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type a command (e.g. skills, projects, contact, help)..."
                      className="bg-transparent text-foreground placeholder:text-foreground/40 outline-none w-full font-mono text-xs sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="p-1.5 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                      title="Run command"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </form>

                </div>

                {/* Terminal Status bar */}
                <div className="px-5 py-2.5 bg-foreground/[0.04] dark:bg-black/30 border-t border-border/40 text-[11px] font-mono text-foreground/50 flex justify-between">
                  <span>💡 Pro tip: Click any command above or type your own!</span>
                  <span className="text-emerald-500 font-semibold">● ONLINE</span>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
