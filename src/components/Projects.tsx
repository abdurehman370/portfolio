import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Zap, ArrowRight } from 'lucide-react';
import { projects } from '../data';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.16,
      duration: 0.68,
      ease: "easeOut" as const,
    },
  }),
};

const ProjectCard: React.FC<{ project: any; onImageClick: (index: number) => void }> = ({ project, onImageClick }) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div className="glass-card flex flex-col project-card-inner">
      {/* Tags */}
      <div className="pillRow" style={{ gap: '0.45rem', marginBottom: '1.1rem' }}>
        {project.tags.slice(0, 5).map((tag: string) => (
          <span key={tag} className="pill" style={{ fontSize: '0.71rem', padding: '0.28rem 0.65rem', borderRadius: '999px' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '0.55rem' }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-muted" style={{ fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1.1rem' }}>
        {project.description}
      </p>

      {/* What I Delivered */}
      <div className="surface" style={{ padding: '1rem 1.1rem', borderRadius: '0.9rem', marginBottom: '1.1rem' }}>
        <p className="text-subtle" style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          marginBottom: '0.7rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          What I Delivered
        </p>
        <ul style={{ display: 'grid', gap: '0.6rem' }}>
          {project.features.slice(0, 4).map((f: string, i: number) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.84rem', lineHeight: 1.5 }} className="text-muted">
              <Zap className="w-4 h-4 shrink-0" style={{ marginTop: '0.18rem', color: '#06b6d4' }} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <div className="projectGalleryWrapper" style={{ marginBottom: '1.1rem' }}>
          <div className="projectGallery" ref={galleryRef}>
            {project.images.map((img: any, i: number) => (
              <div
                key={i}
                className="projectThumb"
                onClick={() => onImageClick(i)}
                title={img.caption}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="projectThumbOverlay">
                  <Maximize2 className="w-5 h-5 text-white" />
                </div>
                <div className="projectThumbCaption">{img.caption}</div>
              </div>
            ))}
          </div>
          {project.images.length > 2 && (
            <div className="galleryScrollHint">
              <ArrowRight className="w-3 h-3" />
              <span>scroll</span>
            </div>
          )}
        </div>
      )}

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-3 items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1rem' }}>
        {project.links.map((link: any) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            style={{ padding: '0.42rem 0.8rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', borderRadius: '0.5rem' }}
          >
            <link.icon className="w-4 h-4" />
            <span>{link.name}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        ))}
      </div>
    </div>
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

  const prevImage = () =>
    setImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);

  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % activeProject.images.length);

  return (
    <section id="projects" className="section overflow-hidden">
      <div className="max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35, margin: '0px 0px -8% 0px' }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="section-header"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="lead">
            Case-study style previews of systems I've built: e-commerce workflows,
            enterprise tools, and automation-heavy platforms.
          </p>
        </motion.div>

        {/* 2×2 Project Grid */}
        <div className="twoColProjects">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3, margin: '0px 0px -6% 0px' }}
              style={{ display: 'flex', flexDirection: 'column' }}
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
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            <button onClick={closeLightbox} className="lightboxClose" aria-label="Close">
              <X className="w-6 h-6" />
            </button>

            <div className="lightboxFrame">
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.28 }}
                className="glass-card lightboxMedia"
              >
                <img
                  src={activeProject.images[imageIndex].src}
                  alt={activeProject.images[imageIndex].caption}
                />
              </motion.div>

              <div className="lightboxMeta">
                <h4 className="text-white font-bold" style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>
                  {activeProject.title}
                </h4>
                <p className="text-muted" style={{ marginBottom: '1rem', fontSize: '0.9rem' }}>
                  {activeProject.images[imageIndex].caption}
                </p>
                <div className="lightboxControls">
                  <button onClick={prevImage} className="circleBtn" aria-label="Previous image">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm font-mono text-muted">
                    {imageIndex + 1} / {activeProject.images.length}
                  </span>
                  <button onClick={nextImage} className="circleBtn" aria-label="Next image">
                    <ChevronRight className="w-5 h-5" />
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
