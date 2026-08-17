import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, Phone } from 'lucide-react';
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
    }, 1200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Touch</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full opacity-50"></div>
          </h2>
          <p className="mt-4 text-foreground/70 max-w-2xl mx-auto">
            I'm currently seeking a software development internship & opportunities. Whether you have a project idea, a role, or just want to connect, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/60 mb-1 text-sm">Email</h4>
                    <a href={`mailto:${portfolioData.personal.email}`} className="text-lg font-semibold hover:text-primary transition-colors">
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/60 mb-1 text-sm">Phone / WhatsApp</h4>
                    <a href={`tel:${portfolioData.personal.phone}`} className="text-lg font-semibold hover:text-accent transition-colors">
                      {portfolioData.personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/60 mb-1 text-sm">Location</h4>
                    <p className="text-lg font-semibold">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0">
                    <MessageSquare className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/60 mb-1 text-sm">Availability</h4>
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </span>
                      <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                        {portfolioData.personal.availability}
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <h4 className="text-xs uppercase tracking-wider text-foreground/50 font-semibold mb-4">Direct Socials</h4>
                <div className="flex items-center gap-3">
                  <a 
                    href={portfolioData.personal.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:border-primary/50 text-foreground/80 hover:text-foreground transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a 
                    href={portfolioData.personal.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:border-[#0A66C2]/50 text-foreground/80 hover:text-[#0A66C2] transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href={portfolioData.personal.twitter} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass hover:border-sky-400/50 text-foreground/80 hover:text-sky-400 transition-all"
                  >
                    <TwitterX className="w-4 h-4" />
                    <span className="text-sm font-medium">X (Twitter)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 rounded-2xl border border-border/50 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Hello Sirish, I'd like to discuss..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
