// app/(Dashboard)/FAQ/page.tsx
'use client';

import { useFAQs } from '@/hooks/useFAQs';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';
import { useState } from 'react';

export default function FAQ() {
  const { data: faqs, isLoading } = useFAQs();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>Frequently Asked Questions</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Get answers to common questions about BuildMax and our services</p>
        </AnimatedSection>
      </section>

      <PageSection>
        {isLoading ? (
          <div className="loading">Loading FAQs...</div>
        ) : (
          <div className="faq-list">
            {faqs?.map((faq, index) => (
              <AnimatedSection key={faq.id} delay={index * 50}>
                <div className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  >
                    {faq.question}
                    <span className="faq-toggle">
                      {openId === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  {openId === faq.id && (
                    <div className="faq-answer">{faq.answer}</div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </PageSection>

      <style jsx>{`
        .faq-list {
          max-width: 700px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid #e5e5e5;
          padding: 1.5rem 0;
        }

        .faq-question {
          width: 100%;
          background: none;
          border: none;
          padding: 0;
          text-align: left;
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #1a1a1a;
          transition: color 0.2s ease;
        }

        .faq-question:hover {
          color: #0066cc;
        }

        .faq-toggle {
          flex-shrink: 0;
          font-size: 1.5rem;
          margin-left: 1rem;
        }

        .faq-answer {
          margin-top: 1rem;
          color: #666;
          line-height: 1.6;
          animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
