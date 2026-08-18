import { GraduationCap, Award, Sparkles, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-primary/5 rounded-full blur-[130px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Milestones & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Education & <span className="text-gradient-restrained">Experience</span>
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Academic groundwork in Computer Science and hackathon leadership in fast-paced collaborative environments.
          </p>
          <div className="w-16 h-1 bg-primary/40 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Academic Foundation</h3>
                <p className="text-xs text-foreground/50 font-mono">Formal degrees & coursework</p>
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-px before:bg-border">
              {portfolioData.education.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-4 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-bg-surface border-2 border-primary group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>

                  <TiltCard maxTilt={5} scale={1.01} className="rounded-xl">
                    <div className="glass-card p-5 rounded-xl border border-border group-hover:border-primary/40 transition-all shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1.5">
                        <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">{item.degree}</h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-foreground/60 px-2 py-0.5 bg-foreground/5 rounded-md border border-border w-fit">
                          <Calendar className="w-3 h-3 text-primary" />
                          {item.duration}
                        </span>
                      </div>
                      <h5 className="font-medium text-xs sm:text-sm text-foreground/80 mb-2">{item.institution}</h5>
                      <p className="text-xs text-foreground/65 leading-relaxed">{item.description}</p>
                    </div>
                  </TiltCard>

                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Hackathons Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Leadership & Hackathons</h3>
                <p className="text-xs text-foreground/50 font-mono">Team coordination & solution design</p>
              </div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-px before:bg-border">
              {portfolioData.leadership.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-4 -translate-x-1/2 flex items-center justify-center w-4 h-4 rounded-full bg-bg-surface border-2 border-primary group-hover:scale-125 transition-transform z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>

                  <TiltCard maxTilt={5} scale={1.01} className="rounded-xl">
                    <div className="glass-card p-5 rounded-xl border border-border group-hover:border-primary/40 transition-all shadow-sm">
                      <h4 className="font-bold text-base text-foreground group-hover:text-primary transition-colors mb-2">{item.title}</h4>
                      <p className="text-xs text-foreground/65 leading-relaxed">{item.description}</p>
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

