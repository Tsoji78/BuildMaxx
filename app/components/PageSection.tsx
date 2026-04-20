'use client';

// app/components/PageSection.tsx
import { ReactNode } from 'react';

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export default function PageSection({ children, className = '' }: PageSectionProps) {
  return (
    <section className={`page-section ${className}`}>
      <div className="page-section-inner">{children}</div>

      <style jsx>{`
        .page-section {
          padding: clamp(2.5rem, 5vw, 4rem) clamp(1rem, 4vw, 1.5rem);
        }
        .page-section-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
}