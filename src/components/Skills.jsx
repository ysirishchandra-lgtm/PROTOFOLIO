import { useState } from 'react';
import { Sparkles, Search, Code2, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...portfolioData.skills.categories.map(c => c.name)];

  const filteredCategories = portfolioData.skills.categories.map(cat => {
    if (activeCategory !== 'All' && cat.name !== activeCategory) return null;

    const filteredSkills = cat.skills.filter(s =>
      s.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (searchQuery && filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills & <span className="text-gradient-restrained">Technologies</span>
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Technical foundation across full-stack engineering, databases, cloud platforms, and modern AI toolchains.
          </p>
          <div className="w-16 h-1 bg-primary/40 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl glass border border-border overflow-x-auto w-full sm:w-auto pb-1 sm:pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-foreground/45 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full pl-9 pr-4 py-1.5 rounded-xl glass border border-border text-xs sm:text-sm outline-none focus:border-primary transition-all text-foreground placeholder:text-foreground/40"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <TiltCard key={idx} maxTilt={6} scale={1.01} className="rounded-2xl h-full">
                <div className="glass-card p-6 rounded-2xl border border-border hover:border-primary/40 transition-all h-full flex flex-col justify-between group shadow-sm">
                  
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-primary/10 rounded-xl text-primary transition-transform group-hover:scale-105">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{category.name}</h3>
                          <p className="text-[11px] text-foreground/45 font-mono">{category.skills.length} technologies</p>
                        </div>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground/[0.03] dark:bg-[#161C24] border border-border hover:border-primary/40 text-xs font-medium text-foreground/85 hover:text-primary transition-all cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-3.5 border-t border-border/50 flex items-center justify-between text-[11px] text-foreground/50 font-mono">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Production-Ready
                    </span>
                    <span className="text-primary font-semibold">Active Stack</span>
                  </div>

                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}

