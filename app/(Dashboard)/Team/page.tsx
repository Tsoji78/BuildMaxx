// app/team/page.tsx
'use client';

import { useTeam } from '@/hooks/useTeam';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';

export default function Team() {
  const { data: team, isLoading } = useTeam();

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Our Team</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Experienced professionals driving real estate excellence</p>
        </AnimatedSection>
      </section>

      <PageSection>
        {isLoading ? (
          <div className="loading">Loading team...</div>
        ) : (
          <div className="team-grid">
            {team?.map((member) => (
              <div key={member.id} className="team-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}