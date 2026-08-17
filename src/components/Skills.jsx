import { useState } from 'react';
import { Sparkles, Check, Search, Code2 } from 'lucide-react';
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
    <section id="skills" className="py-28 relative overflow-hidden bg-foreground/[0.015]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[130px] -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[130px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            My Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Skills & <span className="text-shimmer">Technologies</span>
          </h2>
          <p className="mt-4 text-foreground/75 max-w-2xl mx-auto text-base sm:text-lg">
            A comprehensive suite of programming languages, modern frameworks, database systems, and AI tools I use to build scalable products.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 scale-105'
                    : 'glass text-foreground/70 hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-foreground/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech stack..."
              className="w-full pl-10 pr-4 py-2 rounded-xl glass border border-border/70 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground"
            />
          </div>

        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <TiltCard key={idx} maxTilt={10} scale={1.02} className="rounded-3xl h-full">
                <div className="glass-panel p-7 rounded-3xl border border-border/70 hover:border-primary/50 transition-all h-full flex flex-col justify-between group shadow-xl">
                  
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3.5">
                        <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/30 transition-all text-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                          <p className="text-xs text-foreground/50 font-mono">{category.skills.length} competencies</p>
                        </div>
                      </div>
                    </div>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-background/80 hover:bg-primary/10 border border-border/80 hover:border-primary/40 text-xs sm:text-sm font-medium text-foreground/90 hover:text-primary transition-all hover:scale-105 shadow-sm group/badge cursor-default"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70 group-hover/badge:bg-primary"></span>
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Accent */}
                  <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-foreground/50 font-mono">
                    <span>Verified Knowledge</span>
                    <span className="text-primary font-bold">100%</span>
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
