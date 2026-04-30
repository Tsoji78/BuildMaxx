// app/portfolio/page.tsx
'use client';

import { useState } from 'react';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

// ─── ADD / EDIT YOUR PROJECTS HERE ───────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'Luxury Residential Estate',
    category: 'Residential',
    location: 'Maitama, Abuja',
    description: 'A premium residential development featuring modern architectural design and smart home integration.',
    images: [
      '/assets/p1.jpg',
      '/assets/p2.jpg',
      '/assets/p3.jpg',
    ],
    year: '2024',
  },
  {
    id: 2,
    title: 'Commercial Complex',
    category: 'Commercial',
    location: 'Wuse 2, Abuja',
    description: 'A multi-storey commercial building with state-of-the-art facilities and sustainable construction practices.',
    images: [
      '/assets/p5.jpg',
      '/assets/p4.jpg',
    ],
    year: '2023',
  },
  {
    id: 3,
    title: 'Industrial Warehouse Facility',
    category: 'Industrial',
    location: 'Kuje, Abuja',
    description: 'Large-scale industrial storage and operations facility built to international safety standards.',
    images: [
      '/assets/p6.jpg',
    ],
    year: '2023',
  },
  {
  id: 4,                              // unique number
  title: 'Your Project Name',
  category: 'Residential',           // auto-appears as a filter tab
  location: 'Garki, Abuja',
  description: 'Short description of the work done.',
  images: [
    '/assets/p17.jpg',      // first = main photo
    '/assets/p18.jpg',      // rest = thumbnails + lightbox
    '/assets/p19.jpg',
  ],
  year: '2025',
  },
  {
  id: 5,                              // unique number
  title: 'Your Project Name',
  category: 'Residential',           // auto-appears as a filter tab
  location: 'Garki, Abuja',
  description: 'Short description of the work done.',
  images: [
    '/assets/p15.jpg',      // first = main photo
    '/assets/p12.jpg',      // rest = thumbnails + lightbox
    '/assets/p13.jpg',
  ],
  year: '2025',
},
];

// ─── FILTER CATEGORIES (auto-generated from projects) ────────────────────────
const allCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

// ─── LIGHTBOX COMPONENT ───────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>

      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <img src={images[current]} alt={`Image ${current + 1}`} className="lightbox-img" />

        {images.length > 1 && (
          <>
            <button className="lightbox-arrow lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="lightbox-arrow lightbox-next" onClick={next} aria-label="Next">›</button>
            <div className="lightbox-counter">{current + 1} / {images.length}</div>
          </>
        )}
      </div>

      <style jsx>{`
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 999;
          background: rgba(5, 20, 40, 0.92);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(6px);
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        .lightbox-close {
          position: absolute;
          top: 1.25rem;
          right: 1.5rem;
          font-size: 1.5rem;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.2s;
          z-index: 10;
        }
        .lightbox-close:hover { opacity: 1; }

        .lightbox-inner {
          position: relative;
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img {
          max-width: 90vw;
          max-height: 85vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5);
        }
        .lightbox-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2.5rem;
          color: #fff;
          background: rgba(255,255,255,0.1);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          line-height: 1;
        }
        .lightbox-arrow:hover { background: rgba(255,255,255,0.2); }
        .lightbox-prev { left: -64px; }
        .lightbox-next { right: -64px; }
        .lightbox-counter {
          position: absolute;
          bottom: -2rem;
          left: 50%;
          transform: translateX(-50%);
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Our Projects</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>A showcase of our construction works and completed projects</p>
        </AnimatedSection>
      </section>

      <PageSection>

        {/* ── Category Filter ── */}
        <div className="filter-bar">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Project Cards ── */}
        <div className="projects-grid">
          {filtered.map((project) => (
            <article key={project.id} className="project-card">

              {/* Image gallery thumbnails */}
              <div className="project-images">
                {/* Main image */}
                <div
                  className="project-main-img"
                  onClick={() => setLightbox({ images: project.images, index: 0 })}
                >
                  <img src={project.images[0]} alt={project.title} />
                  <div className="img-overlay">
                    <span className="view-icon">⤢</span>
                  </div>
                </div>

                {/* Thumbnail strip (if more than 1 image) */}
                {project.images.length > 1 && (
                  <div className="project-thumbs">
                    {project.images.slice(1).map((img, i) => (
                      <div
                        key={i}
                        className="project-thumb"
                        onClick={() => setLightbox({ images: project.images, index: i + 1 })}
                      >
                        <img src={img} alt={`${project.title} ${i + 2}`} />
                        {/* "+N more" overlay on last thumb if there are extras */}
                        {i === 1 && project.images.length > 3 && (
                          <div className="thumb-more">+{project.images.length - 3}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Project info */}
              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">📍 {project.location}</p>
                <p className="project-desc">{project.description}</p>
                <button
                  className="project-gallery-btn"
                  onClick={() => setLightbox({ images: project.images, index: 0 })}
                >
                  View Gallery ({project.images.length} photo{project.images.length !== 1 ? 's' : ''})
                </button>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <style jsx>{`
        /* ── Filter Bar ── */
        .filter-bar {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .filter-btn {
          padding: 0.45rem 1.1rem;
          font-size: 0.85rem;
          font-weight: 500;
          border: 1.5px solid rgba(13, 59, 102, 0.2);
          border-radius: 100px;
          background: transparent;
          color: var(--color-slate);
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover {
          border-color: var(--color-gold);
          color: var(--color-navy);
        }
        .filter-btn.active {
          background: var(--color-navy);
          border-color: var(--color-navy);
          color: #fff;
        }

        /* ── Grid ── */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        /* ── Card ── */
        .project-card {
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 2px 16px rgba(13, 59, 102, 0.07);
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(13, 59, 102, 0.13);
        }

        /* ── Images ── */
        .project-images { display: flex; flex-direction: column; gap: 3px; }

        .project-main-img {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          cursor: pointer;
          background: #e8e8e8;
        }
        .project-main-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .project-card:hover .project-main-img img { transform: scale(1.04); }

        .img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(8, 40, 71, 0.0);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }
        .project-main-img:hover .img-overlay { background: rgba(8, 40, 71, 0.35); }
        .view-icon {
          color: #fff;
          font-size: 2rem;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .project-main-img:hover .view-icon { opacity: 1; }

        /* Thumbnail strip */
        .project-thumbs {
          display: flex;
          gap: 3px;
          height: 72px;
        }
        .project-thumb {
          flex: 1;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          background: #e8e8e8;
        }
        .project-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .project-thumb:hover img { transform: scale(1.08); }
        .thumb-more {
          position: absolute;
          inset: 0;
          background: rgba(8, 40, 71, 0.55);
          color: #fff;
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── Info ── */
        .project-info { padding: 1.25rem; }
        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }
        .project-category {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--color-gold);
          background: rgba(212, 168, 83, 0.12);
          padding: 0.2rem 0.6rem;
          border-radius: 100px;
        }
        .project-year {
          font-size: 0.8rem;
          color: var(--color-slate);
          opacity: 0.7;
        }
        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--color-navy);
          margin: 0 0 0.35rem;
        }
        .project-location {
          font-size: 0.82rem;
          color: var(--color-slate);
          margin-bottom: 0.6rem;
        }
        .project-desc {
          font-size: 0.875rem;
          color: var(--color-slate);
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .project-gallery-btn {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--color-navy);
          background: none;
          border: 1.5px solid var(--color-navy);
          border-radius: 6px;
          padding: 0.45rem 1rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .project-gallery-btn:hover {
          background: var(--color-navy);
          color: #fff;
        }

        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}