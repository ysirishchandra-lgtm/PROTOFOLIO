import { useState } from 'react';
import { ExternalLink, Sparkles, Code2, ArrowUpRight, FolderGit2 } from 'lucide-react';
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
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#a855f7', '#38bdf8', '#10b981'],
    });
  };

  const filteredProjects = portfolioData.projects.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'AI / ML') return p.tags.some(t => ['AI', 'Ollama', 'Knowledge Processing'].includes(t));
    if (filter === 'Full Stack') return p.tags.some(t => ['Node.js', 'Express.js', 'Supabase'].includes(t));
    return true;
  });

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-shimmer">Projects</span>
          </h2>
          <p className="mt-4 text-foreground/75 max-w-2xl mx-auto text-base sm:text-lg">
            Real-world applications built with modern frontend frameworks, scalable cloud backends, and AI models.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-2xl glass border border-border/80 shadow-md">
            {['All', 'AI / ML', 'Full Stack'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md scale-105'
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
            <TiltCard key={idx} maxTilt={10} scale={1.02} className="rounded-3xl h-full">
              <div className="glass-panel rounded-3xl overflow-hidden flex flex-col border border-border/80 hover:border-primary/60 transition-all duration-300 h-full group shadow-xl">
                
                {/* Project Image Banner with Vignette */}
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent"></div>
                  
                  {/* Floating Project Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-panel border border-white/20 text-xs font-semibold text-primary backdrop-blur-xl shadow-md">
                    Featured
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-grow">
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                    </h3>
                    <FolderGit2 className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <p className="text-foreground/75 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={triggerConfetti}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-primary transition-colors py-1.5 px-3 rounded-lg hover:bg-primary/10"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    )}

                    {project.demo ? (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        onClick={triggerConfetti}
                        className="inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-md hover:scale-105 transition-transform"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-foreground/40 px-2 py-1 bg-foreground/5 rounded-md">
                        Repo Public
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
