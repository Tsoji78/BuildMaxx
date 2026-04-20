// app/portfolio/page.tsx
'use client';

import { useProperties } from '@/hooks/useProperties';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Portfolio() {
  const { data: properties, isLoading } = useProperties();

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Investment Portfolio</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Current and recent investment opportunities</p>
        </AnimatedSection>
      </section>

      <PageSection>
        {isLoading ? (
          <div className="loading">Loading portfolio...</div>
        ) : (
          <div className="portfolio-grid">
            {properties?.map((p) => (
              <article key={p.id} id={p.id} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={p.image} alt={p.title} />
                </div>
                <div className="portfolio-content">
                  <span className="portfolio-type">{p.type}</span>
                  <h3>{p.title}</h3>
                  <p className="portfolio-location">{p.location}</p>
                  <p className="portfolio-desc">{p.description}</p>
                  <div className="portfolio-details">
                    <span>${(p.price / 1e6).toFixed(2)}M</span>
                    <span>{p.roi}% Target ROI</span>
                    <span>{p.sqft.toLocaleString()} sq ft</span>
                    {p.beds > 0 && <span>{p.beds} units</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}