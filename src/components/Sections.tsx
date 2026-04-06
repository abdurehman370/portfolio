import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Calendar, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { skillCategories, experience, education, contact } from '../data';

const RevealOnScroll: React.FC<{
  children: React.ReactNode;
  delay?: number;
  from?: 'left' | 'right' | 'bottom';
}> = ({ children, delay = 0, from = 'bottom' }) => {
  const initial =
    from === 'left'
      ? { opacity: 0, x: -40, y: 0 }
      : from === 'right'
        ? { opacity: 0, x: 40, y: 0 }
        : { opacity: 0, y: 30, x: 0 };

  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: false, amount: 0.35, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, delay: delay + 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

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
          <RevealOnScroll
            key={cat.title}
            delay={i * 0.1}
            from={i === 0 ? 'left' : i === 1 ? 'bottom' : 'right'}
          >
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
                <div className="glass-card p-8 relative overflow-hidden group timelineCard">
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
                <div className="glass-card p-8 relative overflow-hidden group timelineCard">
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

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusText, setStatusText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      setStatus('error');
      setStatusText(
        'EmailJS is not configured. Add VITE_EMAILJS_PUBLIC_KEY, VITE_EMAILJS_SERVICE_ID, and VITE_EMAILJS_TEMPLATE_ID to your environment.'
      );
      return;
    }

    setStatus('loading');
    setStatusText('');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          reply_to: email,
          message: message,
        },
        publicKey
      );
      setStatus('success');
      setStatusText('Message sent. I’ll get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err: unknown) {
      setStatus('error');
      const msg =
        err && typeof err === 'object' && 'text' in err && typeof (err as { text?: string }).text === 'string'
          ? (err as { text: string }).text
          : err instanceof Error
            ? err.message
            : 'Could not send. Try again.';
      setStatusText(msg);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl">
        <div className="glass-card p-12 contactShell relative overflow-hidden" style={{ padding: 'clamp(1.35rem, 5vw, 5rem)' }}>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(124, 140, 255, 0.12)' }} />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(38, 217, 209, 0.10)' }} />

          <div className="twoCol" style={{ alignItems: 'center', gap: '4rem' }}>
            <div>
              <RevealOnScroll>
                <h2 className="h2" style={{ fontSize: 'clamp(2rem, 3.4vw, 3.25rem)', marginBottom: '1rem' }}>
                  Let’s build something <span className="gradient-text">together</span>.
                </h2>
                <p className="lead" style={{ marginBottom: '2.2rem' }}>
                  Open to full‑stack roles and contract work focused on API architecture, e‑commerce, and integrations.
                </p>
              </RevealOnScroll>

              <div className="grid grid-cols-1 gap-6">
                <RevealOnScroll delay={0.1}>
                  <a href={`mailto:${contact.email}`} className="contactSocialLink flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="iconBtn shrink-0" style={{ width: '3.3rem', height: '3.3rem' }}>
                      <Mail className="w-6 h-6" />
                    </div>
                    <div className="contactLinkBlock min-w-0">
                      <p className="text-subtle" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>Email</p>
                      <p className="text-lg font-bold">{contact.email}</p>
                    </div>
                  </a>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                  <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contactSocialLink flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="iconBtn shrink-0" style={{ width: '3.3rem', height: '3.3rem' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="contactLinkBlock min-w-0">
                      <p className="text-subtle" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>LinkedIn</p>
                      <p className="text-lg font-bold">Abdur Rehman</p>
                    </div>
                  </a>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <a href={contact.github} target="_blank" rel="noreferrer" className="contactSocialLink flex items-center gap-4 sm:gap-6 min-w-0">
                    <div className="iconBtn shrink-0" style={{ width: '3.3rem', height: '3.3rem' }}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="contactLinkBlock min-w-0">
                      <p className="text-subtle" style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.15rem' }}>GitHub</p>
                      <p className="text-lg font-bold">abdurehman370</p>
                    </div>
                  </a>
                </RevealOnScroll>
              </div>
            </div>

            <RevealOnScroll delay={0.4}>
              <form className="glass-card p-8 min-w-0" style={{ background: 'rgba(0,0,0,0.18)' }} onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium mb-2 block text-muted">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="contactField"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium mb-2 block text-muted">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="contactField"
                      value={email}
                      onChange={(ev) => setEmail(ev.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium mb-2 block text-muted">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="contactField"
                      value={message}
                      onChange={(ev) => setMessage(ev.target.value)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={status === 'loading'}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                  </button>
                  {status !== 'idle' && statusText && (
                    <p
                      className={`contactFormStatus ${status === 'success' ? 'contactFormStatus--ok' : 'contactFormStatus--err'}`}
                      role="status"
                    >
                      {statusText}
                    </p>
                  )}
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
};
