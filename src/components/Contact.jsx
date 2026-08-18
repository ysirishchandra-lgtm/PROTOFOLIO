import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, TwitterXIcon as TwitterX } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      onShowToast('Thank you! Your message has been sent successfully. Sirish will reach out soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[140px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-border text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Channel
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Get in <span className="text-gradient-restrained">Touch</span>
          </h2>
          <p className="mt-3 text-foreground/70 max-w-xl mx-auto text-sm sm:text-base">
            Open for software development internships and technical discussions. Let's start a conversation.
          </p>
          <div className="w-16 h-1 bg-primary/40 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              
              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold font-mono">Email Address</h4>
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0 text-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold font-mono">Phone / WhatsApp</h4>
                    <a href={`tel:${portfolioData.personal.phone}`} className="text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors">
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-primary/10 rounded-xl shrink-0 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold font-mono">Location</h4>
                    <p className="text-sm sm:text-base font-semibold text-foreground">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 bg-emerald-500/10 rounded-xl shrink-0 text-emerald-500">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold font-mono">Status</h4>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        {portfolioData.personal.availability}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-border/60">
                <h4 className="text-[11px] uppercase tracking-wider text-foreground/50 font-semibold font-mono mb-3">Direct Networks</h4>
                <div className="flex items-center gap-2.5">
                  <a 
                    href={portfolioData.personal.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-border text-foreground/80 hover:text-foreground hover:border-primary/40 transition-all text-xs font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={portfolioData.personal.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-border text-foreground/80 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all text-xs font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a 
                    href={portfolioData.personal.twitter} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-border text-foreground/80 hover:text-foreground hover:border-foreground/30 transition-all text-xs font-medium"
                  >
                    <TwitterX className="w-4 h-4" />
                    <span>X</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-border shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-foreground/80 font-mono">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-background/80 border border-border rounded-xl focus:border-primary transition-all outline-none text-foreground text-sm placeholder:text-foreground/35"
                      placeholder="e.g. Alex Morgan"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground/80 font-mono">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 bg-background/80 border border-border rounded-xl focus:border-primary transition-all outline-none text-foreground text-sm placeholder:text-foreground/35"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-foreground/80 font-mono">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 bg-background/80 border border-border rounded-xl focus:border-primary transition-all outline-none text-foreground text-sm placeholder:text-foreground/35 resize-none"
                    placeholder="Hello Sirish, I came across your portfolio and would like to discuss..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-all duration-200 shadow-sm shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-[0.98]"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

