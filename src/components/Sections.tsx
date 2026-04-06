import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { skillCategories, experience, education, contact } from '../data';

const RevealOnScroll: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export const Skills: React.FC = () => (
  <section id="skills" className="section">
    <div className="max-w-7xl">
      <RevealOnScroll>
        <div className="section-header">
          <h2 className="section-title">Technical expertise</h2>
          <p className="lead">
            A curated toolset for building production-grade web apps: frontend UX, backend APIs, automation, and e-commerce integrations.
          </p>
        </div>
      </RevealOnScroll>

      <div className="skillsGrid">
        {skillCategories.map((cat, i) => (
          <RevealOnScroll key={cat.title} delay={i * 0.1}>
            <div className="glass-card p-8 h-full">
              <div className="iconBtn" style={{ width: '3.1rem', height: '3.1rem', marginBottom: '1.25rem' }}>
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{cat.title}</h3>
              <div className="pillRow" style={{ gap: '0.5rem' }}>
                {cat.skills.map(skill => (
                  <span key={skill} className="pill" style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem', borderRadius: '0.85rem' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export const Timeline: React.FC = () => (
  <section id="experience" className="section overflow-hidden">
    <div className="max-w-7xl">
      <div className="twoColProjects" style={{ gap: '4rem' }}>
        {/* Experience */}
        <div>
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-10">
              <div className="iconBtn" style={{ width: '3.1rem', height: '3.1rem' }}>
                <Briefcase className="w-6 h-6" />
              </div>
              <h2 className="h2">Experience</h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <RevealOnScroll key={exp.company + i} delay={i * 0.1}>
                <div className="glass-card p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Briefcase className="w-24 h-24" />
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                      <p className="text-muted font-medium">{exp.company}</p>
                    </div>
                    <span className="pill" style={{ fontSize: '0.78rem', padding: '0.35rem 0.7rem', borderRadius: '999px' }}>
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{exp.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <RevealOnScroll>
            <div className="flex items-center gap-4 mb-10">
              <div className="iconBtn" style={{ width: '3.1rem', height: '3.1rem' }}>
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="h2">Education</h2>
            </div>
          </RevealOnScroll>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <RevealOnScroll key={edu.school + i} delay={i * 0.1}>
                <div className="glass-card p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <GraduationCap className="w-24 h-24" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                    <p className="text-muted font-medium">{edu.school}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">{edu.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Contact: React.FC = () => (
  <section id="contact" className="section">
    <div className="max-w-7xl">
      <div className="glass-card p-12 relative overflow-hidden" style={{ padding: 'clamp(2.5rem, 4vw, 5rem)' }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(124, 140, 255, 0.12)' }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(38, 217, 209, 0.10)' }} />
        
        <div className="twoCol" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <RevealOnScroll>
              <h2 className="h2" style={{ fontSize: 'clamp(2rem, 3.4vw, 3.25rem)', marginBottom: '1rem' }}>
                Let’s build something <span className="gradient-text">worth shipping</span>.
              </h2>
              <p className="lead" style={{ marginBottom: '2.2rem' }}>
                Open to full‑stack roles and contract work focused on API architecture, e‑commerce, and integrations.
              </p>
            </RevealOnScroll>

            <div className="grid grid-cols-1 gap-6">
              <RevealOnScroll delay={0.1}>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-6 group">
                  <div className="iconBtn" style={{ width: '3.3rem', height: '3.3rem' }}>
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-subtle" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>Email</p>
                    <p className="text-lg font-bold">{contact.email}</p>
                  </div>
                </a>
              </RevealOnScroll>

              <RevealOnScroll delay={0.2}>
                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                  <div className="iconBtn" style={{ width: '3.3rem', height: '3.3rem' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-subtle" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>LinkedIn</p>
                    <p className="text-lg font-bold">Abdur Rehman</p>
                  </div>
                </a>
              </RevealOnScroll>

              <RevealOnScroll delay={0.3}>
                <a href={contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-6 group">
                  <div className="iconBtn" style={{ width: '3.3rem', height: '3.3rem' }}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-subtle" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>GitHub</p>
                    <p className="text-lg font-bold">abdurehman370</p>
                  </div>
                </a>
              </RevealOnScroll>
            </div>
          </div>

          <RevealOnScroll delay={0.4}>
            <form className="glass-card p-8" style={{ background: 'rgba(0,0,0,0.18)' }} onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <input type="text" className="surface" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)' }} placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input type="email" className="surface" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)' }} placeholder="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <textarea rows={4} className="surface" style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.03)', resize: 'none' }} placeholder="How can I help you?" />
                </div>
                <button type="submit" className="btn btn-primary w-full" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  Send Message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </div>
      
      <div className="text-center text-subtle" style={{ padding: '2.5rem 0 0', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Abdur Rehman. Built with React + TypeScript.
      </div>
    </div>
  </section>
);
