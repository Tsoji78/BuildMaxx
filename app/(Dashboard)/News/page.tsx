// app/news/page.tsx
'use client';

import { useNews } from '@/hooks/useNews';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';
import Link from 'next/link';

export default function News() {
  const { data: news, isLoading } = useNews();

  return (
    <>
      <section
        className="page-hero page-hero-img"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504711331083-9c895941bf81?w=1920)',
        }}
      >
        <div className="page-hero-overlay" />
        <AnimatedSection animation="fadeInUp">
          <h1>News & Insights</h1>
        </AnimatedSection>
        <AnimatedSection animation="fadeInUp" delay={150}>
          <p>Market updates, industry trends, and company news</p>
        </AnimatedSection>
      </section>

      <PageSection>
        {isLoading ? (
          <div className="loading">Loading latest insights...</div>
        ) : (
          <div className="news-grid">
            {news?.map((item, index) => (
              <AnimatedSection
                key={item.id}
                animation="fadeInUp"
                delay={index * 100}
                className="news-card"
              >
                <div className="news-category">{item.category}</div>
                <h3>{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
                <div className="news-meta">
                  <span>{item.date}</span>
                  <Link href={`/news/${item.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </PageSection>
    </>
  );
}