import { GraduationCap, Award, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-foreground/[0.015]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[140px] -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[140px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Education & <span className="text-shimmer">Leadership</span>
          </h2>
          <p className="mt-4 text-foreground/75 max-w-2xl mx-auto text-base sm:text-lg">
            My academic foundation and hackathon leadership experiences that shape my engineering mindset.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-3 bg-primary/20 rounded-2xl text-primary">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Academic Journey</h3>
                <p className="text-xs text-foreground/50 font-mono">Formal education & milestones</p>
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent">
              {portfolioData.education.map((item, idx) => (
                <div key={idx} className="relative pl-14 group">
                  
                  {/* Glowing Node */}
                  <div className="absolute left-3.5 top-5 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-primary shadow-lg shadow-primary/30 group-hover:scale-125 transition-transform z-10">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                  </div>

                  <TiltCard maxTilt={8} scale={1.01} className="rounded-2xl">
                    <div className="glass-panel p-6 rounded-2xl border border-border/70 group-hover:border-primary/50 transition-all shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h4 className="font-bold text-lg text-primary">{item.degree}</h4>
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-foreground/60 px-2.5 py-1 bg-foreground/5 rounded-lg border border-border/40 w-fit">
                          <Calendar className="w-3 h-3 text-primary" />
                          {item.duration}
                        </span>
                      </div>
                      <h5 className="font-semibold text-foreground/90 mb-2">{item.institution}</h5>
                      <p className="text-sm text-foreground/75 leading-relaxed">{item.description}</p>
                    </div>
                  </TiltCard>

                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Hackathons Column */}
          <div>
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-3 bg-accent/20 rounded-2xl text-accent">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Leadership & Hackathons</h3>
                <p className="text-xs text-foreground/50 font-mono">Team coordination & competitions</p>
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-purple-500 before:to-transparent">
              {portfolioData.leadership.map((item, idx) => (
                <div key={idx} className="relative pl-14 group">
                  
                  {/* Glowing Node */}
                  <div className="absolute left-3.5 top-5 -translate-x-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-background border-2 border-accent shadow-lg shadow-accent/30 group-hover:scale-125 transition-transform z-10">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                  </div>

                  <TiltCard maxTilt={8} scale={1.01} className="rounded-2xl">
                    <div className="glass-panel p-6 rounded-2xl border border-border/70 group-hover:border-accent/50 transition-all shadow-md">
                      <h4 className="font-bold text-lg text-accent mb-2">{item.title}</h4>
                      <p className="text-sm text-foreground/75 leading-relaxed">{item.description}</p>
                    </div>
                  </TiltCard>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
