import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Mail, FileText } from 'lucide-react';
import { navigation, hero, contact } from '../data';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('#about');

  const sectionIds = useMemo(
    () => navigation.map(n => n.href).filter(h => h.startsWith('#')),
    []
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const els = sectionIds
      .map(id => document.querySelector(id))
      .filter(Boolean) as Element[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -65% 0px', threshold: [0.1, 0.2, 0.35] }
    );

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return (
    <nav className={`navShell ${isScrolled ? 'navShell--scrolled' : 'navShell--top'}`}>
      <div className="max-w-7xl navInner">
        <motion.a href="#" initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} className="brand" aria-label="Home">
          Abdur <span className="gradient-text">Rehman</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="navLinks">
          {navigation.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`navLink ${activeHash === item.href ? 'navLink--active' : ''}`}
            >
              {item.name}
            </motion.a>
          ))}
          <div className="dividerV" aria-hidden="true" />
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="btn btn-primary text-sm"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="navMobileToggle iconBtn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobileOnly mobileMenu overflow-hidden"
          >
            <div className="max-w-7xl mobileMenuInner">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="mobileLink"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn btn-primary mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="heroSection">
      <div className="max-w-7xl twoCol">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="section-kicker"
          >
            <span className="section-kickerDot" />
            {hero.eyebrow}
          </motion.div>
          
          <h1 className="h1 mb-6">
            Full‑stack engineer building <span className="gradient-text">reliable systems</span> for e‑commerce & enterprise.
          </h1>
          
          <p className="lead mb-8">
            {hero.description}
          </p>

          <div className="pillRow mb-10">
            {hero.skills.slice(0, 6).map((skill) => (
              <span key={skill} className="pill">
                {skill}
              </span>
            ))}
            <span className="pill">
              +{Math.max(0, hero.skills.length - 6)} more
            </span>
          </div>

          <div className="pillRow" style={{ gap: '1rem' }}>
            <a href="#projects" className="btn btn-primary" style={{ paddingLeft: '2rem', paddingRight: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ paddingLeft: '1.75rem', paddingRight: '1.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Let’s talk <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(124, 140, 255, 0.12)' }} />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(38, 217, 209, 0.10)' }} />

            <div className="relative">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <p className="text-sm text-muted font-medium mb-1">Selected impact</p>
                  <p className="text-2xl font-bold tracking-tight">Systems that ship & scale</p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="iconBtn"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {hero.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + i * 0.08 }}
                    className="surface"
                    style={{ padding: '1.2rem 1.25rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}
                  >
                    <div className="iconBtn" style={{ width: '3.1rem', height: '3.1rem' }}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted mb-1">{stat.label}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} href="#projects">
                  View case studies <ArrowRight className="w-4 h-4" />
                </a>
                <a className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }} href="#contact">
                  Resume <FileText className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
