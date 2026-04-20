// app/careers/page.tsx
'use client';

import { useCareers } from '@/hooks/useCareers';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Careers() {
  const { data: careers, isLoading } = useCareers();

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Careers at BuildMax</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Join our team of real estate investment professionals</p>
        </AnimatedSection>
      </section>

      <PageSection>
        <AnimatedSection animation="fadeInUp">
          <div className="careers-intro">
            <p>
              We are always looking for talented individuals who share our passion for excellence in real estate.
            </p>
          </div>
        </AnimatedSection>

        {isLoading ? (
          <div className="loading">Loading opportunities...</div>
        ) : (
          <div className="careers-grid">
            {careers?.map((job, index) => (
              <AnimatedSection
                key={job.id}
                animation="fadeInUp"
                delay={index * 80}
                className="career-card"
              >
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>{job.department}</span>
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
                <button className="btn btn-primary">Apply Now</button>
              </AnimatedSection>
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}