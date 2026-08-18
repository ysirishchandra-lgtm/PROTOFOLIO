import { useState } from 'react';
import { ExternalLink, Sparkles, FolderGit2, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GithubIcon as Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 40,
      spread: 55,
      origin: { x, y },
      colors: ['#3B82F6', '#60A5FA', '#94A3B8'],
    });
  };

  const filteredProjects = portfolioData.projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'AI / ML') return p.tags.some(t => ['AI', 'Ollama', 'Knowledge Processing'].includes(t));
    if (filter === 'Full Stack') return p.tags.some(t => ['Node.js', 'Express.js', 'Supabase'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-gradient-restrained">Projects</span>
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Software products architected with modern frontend interfaces, scalable backend endpoints, and AI models.
          </p>
          <div className="w-16 h-1 bg-primary/40 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-1.5 p-1 rounded-xl glass border border-border shadow-sm">
            {['All', 'AI / ML', 'Full Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <TiltCard key={idx} maxTilt={6} scale={1.01} className="rounded-2xl h-full">
              <div className="glass-card rounded-2xl overflow-hidden flex flex-col border border-border hover:border-primary/40 transition-all duration-300 h-full group shadow-sm">
                
                {/* Project Image Banner with Vignette */}
                <div className="relative h-48 overflow-hidden bg-background">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"></div>
                  
                  {/* Floating Case Study Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full glass border border-border text-[11px] font-semibold text-primary backdrop-blur-md">
                    Case Study
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        <span>{project.title}</span>
                      </h3>
                      <FolderGit2 className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                    </div>
                    
                    <p className="text-foreground/75 text-xs sm:text-sm mb-5 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 bg-foreground/[0.04] dark:bg-[#161C24] text-foreground/80 text-[11px] font-medium rounded-md border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={triggerConfetti}
                        className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-primary transition-colors py-1.5 px-2.5 rounded-lg hover:bg-foreground/5 border border-border"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                    {project.demo ? (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={triggerConfetti}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-white shadow-xs hover:bg-primary-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-foreground/45 px-2 py-0.5 bg-foreground/5 rounded border border-border">
                        Public Repo
                      </span>
                    )}
                  </div>

                </div>

              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}

