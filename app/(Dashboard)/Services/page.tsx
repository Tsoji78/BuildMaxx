// app/(Dashboard)/Services/page.tsx
'use client';

import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Property Acquisition',
      description: 'Strategic acquisition of premium properties with strong investment potential and growth prospects.',
      icon: '🏢',
    },
    {
      id: 2,
      title: 'Portfolio Management',
      description: 'Professional management of your real estate portfolio to maximize returns and minimize risks.',
      icon: '📊',
    },
    {
      id: 3,
      title: 'Development Services',
      description: 'End-to-end development services from concept through completion with expert project management.',
      icon: '🏗️',
    },
    {
      id: 4,
      title: 'Investment Consultation',
      description: 'Expert guidance and analysis to help you make informed investment decisions aligned with your goals.',
      icon: '💼',
    },
    {
      id: 5,
      title: 'Property Management',
      description: 'Comprehensive property management ensuring optimal performance and tenant satisfaction.',
      icon: '🔑',
    },
    {
      id: 6,
      title: 'Market Analysis',
      description: 'In-depth market research and analysis to identify emerging opportunities and trends.',
      icon: '📈',
    },
  ];

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url("/assets/p19.jpg")',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Our Services</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Comprehensive real estate solutions designed for your success</p>
        </AnimatedSection>
      </section>

      <PageSection>
        <div className="services-grid">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 50}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fadeInUp" delay={300} className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how BuildMax can help achieve your investment goals.</p>
          <Link href="/contact" className="btn btn-primary">
            Schedule a Consultation
          </Link>
        </AnimatedSection>
      </PageSection>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }

        .service-card {
          padding: 2rem;
          background: white;
          border: 1px solid #e5e5e5;
          border-radius: 8px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        .service-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .service-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1a1a1a;
        }

        .service-card p {
          color: #666;
          line-height: 1.6;
        }

        .cta-section {
          margin-top: 4rem;
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #0066cc 0%, #004399 100%);
          color: white;
          text-align: center;
          border-radius: 8px;
        }

        .cta-section h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.125rem;
          margin-bottom: 2rem;
          opacity: 0.95;
        }
      `}</style>
    </>
  );
}
