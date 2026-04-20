// app/certifications/page.tsx
'use client';

import { useCertifications } from '@/hooks/useCertifications';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Certifications() {
  const { data: certifications, isLoading } = useCertifications();

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Certifications and Qualifications</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Credentials of our leadership team</p>
        </AnimatedSection>
      </section>

      <PageSection>
        {isLoading ? (
          <div className="loading">Loading certifications...</div>
        ) : (
          <>
            <AnimatedSection animation="fadeInUp">
              <p className="certs-intro">
                Add your own PDFs to <code>public/certifications/</code> and update{' '}
                <code>public/data/certifications.json</code>.
              </p>
            </AnimatedSection>

            <div className="cert-grid">
              {certifications?.map((cert) => (
                <div key={cert.id} className="cert-card">
                  <div className="cert-header">
                    <h3>{cert.title}</h3>
                    <p className="cert-owner">{cert.ownerName}</p>
                    <p className="cert-meta">
                      {cert.issuer} - {cert.year}
                    </p>
                  </div>
                  <div className="cert-pdf">
                    <iframe
                      src={cert.pdfUrl}
                      title={cert.title}
                      className="pdf-viewer"
                    />
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="pdf-link"
                    >
                      Open PDF in new tab
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </PageSection>
    </>
  );
}