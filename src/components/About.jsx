import { useState } from 'react';
import { Terminal, Code, Cpu, Sparkles, Send, CheckCircle2, CornerDownLeft, Sparkle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function About() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { cmd: 'whoami', output: `Sirish Chandra Yellanki — B.Tech CSE Student, Full-Stack Developer & AI Systems Enthusiast based in Hyderabad, India.` },
    { cmd: 'cat core_strengths.txt', output: portfolioData.strengths.join(' • ') },
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
        response = `${portfolioData.personal.name} — ${portfolioData.personal.roles.join(', ')}. Passionate about building robust software, scalable web services, and practical AI systems.`;
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
        response = `Access granted: Developer portfolio operating at peak performance.`;
        break;
      default:
        response = `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`;
    }

    setTerminalHistory(prev => [...prev, { cmd: trimmed, output: response }]);
    setTerminalInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand();
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Background
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-gradient-restrained">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary/40 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Story & Highlight Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-border shadow-sm flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                Engineering Practical Solutions with Modern Tech
              </h3>
              
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base mb-4">
                {portfolioData.personal.objective}
              </p>

              <p className="text-foreground/75 leading-relaxed text-sm sm:text-base">
                Currently building high-performance web applications and experimenting with AI & LLM architectures like Ollama and Supabase to create practical developer tools.
              </p>
            </div>
            
            {/* 3D Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <TiltCard maxTilt={6} scale={1.01} className="rounded-xl">
                <div className="glass-card p-5 rounded-xl border border-border hover:border-primary/40 shadow-sm h-full transition-all">
                  <div className="p-2.5 bg-primary/10 rounded-lg w-fit text-primary mb-3">
                    <Code className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-foreground mb-1">Full-Stack Architecture</h4>
                  <p className="text-foreground/65 text-xs leading-relaxed">React, Node.js, Express, REST APIs & modern cloud architectures.</p>
                </div>
              </TiltCard>

              <TiltCard maxTilt={6} scale={1.01} className="rounded-xl">
                <div className="glass-card p-5 rounded-xl border border-border hover:border-primary/40 shadow-sm h-full transition-all">
                  <div className="p-2.5 bg-primary/10 rounded-lg w-fit text-primary mb-3">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-foreground mb-1">AI & LLM Workflows</h4>
                  <p className="text-foreground/65 text-xs leading-relaxed">Local LLM workflows, Prompt Engineering & persistent memory systems.</p>
                </div>
              </TiltCard>

            </div>
          </div>

          {/* Right Column: Live Interactive Developer Terminal */}
          <div className="lg:col-span-6 flex">
            <TiltCard maxTilt={5} scale={1.01} className="rounded-2xl shadow-xl w-full flex">
              <div className="glass-panel rounded-2xl border border-border overflow-hidden shadow-xl w-full flex flex-col justify-between">
                
                {/* Terminal Header */}
                <div className="bg-foreground/[0.04] dark:bg-[#0D1117] px-4 py-3 flex items-center justify-between border-b border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-foreground/60">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    <span>sirish@terminal:~ (interactive)</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary font-mono font-medium">
                    zsh
                  </span>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs sm:text-sm bg-background/90 dark:bg-[#080A0F] min-h-[300px] max-h-[360px] overflow-y-auto space-y-3 flex-grow">
                  
                  {/* Quick Shortcut chips */}
                  <div className="flex items-center flex-wrap gap-1.5 pb-2 border-b border-border/40">
                    <span className="text-[11px] text-foreground/45 font-medium">Quick commands:</span>
                    {['help', 'whoami', 'skills', 'projects', 'contact', 'clear'].map((cmd) => (
                      <button
                        key={cmd}
                        onClick={() => handleCommand(cmd)}
                        className="px-2 py-0.5 rounded bg-foreground/5 hover:bg-primary hover:text-white text-foreground/75 transition-all text-[11px] border border-border"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  {/* History Output */}
                  {terminalHistory.map((item, idx) => (
                    <div key={idx} className="space-y-1 animate-fade-in">
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>&gt;</span>
                        <span className="text-foreground/90 font-bold">{item.cmd}</span>
                      </div>
                      <div className="text-foreground/75 pl-3 leading-relaxed whitespace-pre-wrap text-xs">
                        {item.output}
                      </div>
                    </div>
                  ))}

                  {/* Interactive CLI Input */}
                  <form onSubmit={handleFormSubmit} className="flex items-center gap-2 pt-2 text-primary">
                    <span className="font-bold">&gt;</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="Type a command (e.g. whoami, skills, projects, contact, help)..."
                      className="bg-transparent text-foreground placeholder:text-foreground/35 outline-none w-full font-mono text-xs sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="p-1 rounded bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      title="Run command"
                    >
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </button>
                  </form>

                </div>

                {/* Terminal Status bar */}
                <div className="px-4 py-2 bg-foreground/[0.02] dark:bg-[#0D1117] border-t border-border text-[11px] font-mono text-foreground/50 flex justify-between">
                  <span>Interactive Terminal Session</span>
                  <span className="text-emerald-500 font-medium">● ACTIVE</span>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}

