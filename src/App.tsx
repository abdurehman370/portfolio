import { Navbar, Hero } from './components/HeroNav';
import { Skills, Timeline, Contact } from './components/Sections';
import { Projects } from './components/Projects';
import Background3D from './components/Background3D';

// Lazy load some sections for performance
// const Projects = lazy(() => import('./components/Projects').then(m => ({ default: m.Projects })));
function App() {
  return (
    <div className="relative min-h-screen min-w-0">
      <Background3D />
      <div className="bg-accents" aria-hidden="true" />
      <div className="subtle-grid" aria-hidden="true" />
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="section">
          <div className="max-w-7xl">
            <div className="twoCol" style={{ alignItems: 'stretch' }}>
              <div className="hangingWrap">
                <div className="glass-card p-10 relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(124, 140, 255, 0.10)' }} />
                  <div className="relative">
                    <div className="section-kicker" style={{ marginBottom: '1rem' }}>
                      <span className="section-kickerDot" />
                      About
                    </div>
                    <h2 className="section-title">Practical engineering, product mindset</h2>
                    <p className="lead" style={{ marginTop: '1.25rem', maxWidth: '48rem' }}>
                      I build full‑stack web products with a focus on reliability, performance, and business workflows—especially in
                      e‑commerce and integration-heavy environments. I’m comfortable owning features end‑to‑end: UX, APIs, background jobs,
                      and production operations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hangingWrap hangingWrap--alt">
                <div className="glass-card p-10">
                  <p className="text-subtle" style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    Highlights
                  </p>
                  <div style={{ display: 'grid', gap: '0.75rem' }}>
                    <div className="surface" style={{ padding: '1rem 1.1rem', borderRadius: '1.05rem' }}>
                      <p style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Systems & integrations</p>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>APIs, webhooks, ERP-style workflows, queues, and automation.</p>
                    </div>
                    <div className="surface" style={{ padding: '1rem 1.1rem', borderRadius: '1.05rem' }}>
                      <p style={{ fontWeight: 800, marginBottom: '0.25rem' }}>E‑commerce depth</p>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>Shopify apps, merchant tooling, conversion-focused UX.</p>
                    </div>
                    <div className="surface" style={{ padding: '1rem 1.1rem', borderRadius: '1.05rem' }}>
                      <p style={{ fontWeight: 800, marginBottom: '0.25rem' }}>Quality & maintainability</p>
                      <p className="text-muted" style={{ fontSize: '0.95rem' }}>Clean architecture, sensible abstractions, and fast delivery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
    </div>
  );
}

export default App;
