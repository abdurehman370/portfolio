import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Zap, ArrowRight } from 'lucide-react';
import { projects } from '../data';

const ProjectCard: React.FC<{ project: any; onImageClick: (index: number) => void }> = ({ project, onImageClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card flex flex-col p-8 h-full group perspective-1000"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative z-10 h-full flex flex-col">
        <div className="pillRow mb-4" style={{ gap: '0.5rem' }}>
          {project.tags.slice(0, 5).map((tag: string) => (
            <span key={tag} className="pill" style={{ fontSize: '0.72rem', padding: '0.35rem 0.65rem', borderRadius: '0.85rem' }}>
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
        <p className="text-muted text-sm mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="surface mb-6" style={{ padding: '1rem 1.1rem', borderRadius: '1.05rem' }}>
          <p className="text-subtle" style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.55rem', letterSpacing: '0.02em', textTransform: 'uppercase' }}>
            What I delivered
          </p>
          <ul style={{ display: 'grid', gap: '0.55rem' }}>
            {project.features.slice(0, 4).map((f: string, i: number) => (
              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem' }} className="text-muted">
                <Zap className="w-4 h-4 shrink-0" style={{ marginTop: '0.22rem', color: 'var(--accent-2)' }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Preview - Proper Carousel/Scroll */}
        {project.images && project.images.length > 0 && (
          <div className="projectGalleryWrapper mb-8">
            <div className="projectGallery">
              {project.images.map((img: any, i: number) => (
                <div 
                  key={i} 
                  className="projectThumb"
                  onClick={() => onImageClick(i)}
                >
                  <img src={img.src} alt={img.caption} loading="lazy" />
                  <div className="projectThumbOverlay">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
            {project.images.length > 3 && (
              <div className="galleryIndicator">
                <ArrowRight className="w-4 h-4 text-subtle animate-pulse" />
              </div>
            )}
          </div>
        )}

        <div className="mt-auto pt-4 flex flex-wrap gap-4 items-center border-t border-white/5">
          {project.links.map((link: any) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="navLink"
              style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}
            >
              <link.icon className="w-4 h-4" />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                {link.name} <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openLightbox = (project: any, index: number) => {
    setActiveProject(project);
    setImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="section overflow-hidden">
      <div className="max-w-7xl">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="lead">
            Case-study style previews of systems I’ve built: e-commerce workflows, enterprise tools, and automation-heavy platforms.
          </p>
        </motion.div>

        <div className="twoColProjects">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard 
                project={project} 
                onImageClick={(idx) => openLightbox(project, idx)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeProject && activeProject.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightboxOverlay"
          >
            <button 
              onClick={closeLightbox}
              className="lightboxClose"
              aria-label="Close images"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="lightboxFrame">
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="glass-card lightboxMedia"
              >
                <img 
                  src={activeProject.images[imageIndex].src} 
                  alt={activeProject.images[imageIndex].caption}
                />
              </motion.div>

              <div className="lightboxMeta">
                <h4 className="text-white font-bold text-xl" style={{ marginBottom: '0.35rem' }}>{activeProject.title}</h4>
                <p className="text-muted" style={{ marginBottom: '0.75rem' }}>{activeProject.images[imageIndex].caption}</p>
                
                <div className="lightboxControls">
                  <button 
                    onClick={() => setImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length)}
                    className="circleBtn"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <span className="text-sm font-medium font-mono text-muted">
                    {imageIndex + 1} / {activeProject.images.length}
                  </span>
                  <button 
                    onClick={() => setImageIndex((prev) => (prev + 1) % activeProject.images.length)}
                    className="circleBtn"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
