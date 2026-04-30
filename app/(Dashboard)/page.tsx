'use client';

import Link from 'next/link';
import { useProperties } from '@/hooks/useProperties';
import HeroCarousel from '@/components/HeroCarousal';
import PropertyCarousel from '@/components/PropertyCarousal';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '@/styles/page.module.css';

export default function Home() {
  const { data: properties, isLoading } = useProperties();

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroMedia}>
          <HeroCarousel />
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeInUp">
            <span className={styles.eyebrow}>Est. 2020 · Abuja</span>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={100}>
            <h1 className={styles.heroTitle}>
              Strategic<br />
              <em>Real Estate</em><br />
              Investment
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={250}>
            <p className={styles.heroSub}>
              BuildMax partners with discerning investors to acquire,
              develop, and manage premium properties across key markets.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fadeInUp" delay={380} className={styles.heroCta}>
            <Link href="/Portfolio" className={styles.btnPrimary}>
              View Portfolio
            </Link>
            <Link href="/Contact" className={styles.btnGhost}>
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>

        {/* Floating scroll indicator */}
        <div className={styles.scrollHint}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollLabel}>Scroll</span>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {[
            { value: '₦240M+', label: 'Assets Under Management' },
            { value: '15+',   label: 'Properties Acquired' },
            { value: '5+',    label: 'Years of Experience' },
            { value: '8',     label: 'Active Markets' },
          ].map((stat, i) => (
            <AnimatedSection key={stat.label} animation="fadeInUp" delay={i * 100}>
              <div className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statDivider} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── Featured Opportunities ── */}
      <section className={styles.featured}>
        <div className={styles.featuredHeader}>
          <AnimatedSection animation="fadeInUp">
            <span className={styles.sectionTag}>Portfolio</span>
            <h2 className={styles.sectionTitle}>Featured<br />Opportunities</h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={150}>
            <Link href="/Portfolio" className={styles.linkArrow}>
              Full Portfolio &rarr;
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeInUp" delay={200}>
          {isLoading ? (
            <div className={styles.loading}>
              <span className={styles.loadingDot} />
              <span className={styles.loadingDot} />
              <span className={styles.loadingDot} />
            </div>
          ) : (
            <PropertyCarousel properties={properties ?? []} />
          )}
        </AnimatedSection>
      </section>

      {/* ── Video / About ── */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          {/* Left: copy */}
          <div className={styles.aboutCopy}>
            <AnimatedSection animation="fadeInUp">
              <span className={styles.sectionTag}>Our Story</span>
              <h2 className={styles.sectionTitle}>See BuildMax<br />in Action</h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={150}>
              <p className={styles.aboutBody}>
                For over two decades we have been at the forefront of premium
                real estate investment—identifying opportunities others miss,
                executing with precision, and delivering enduring value to our partners.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={250}>
              <Link href="/About" className={styles.btnPrimary}>
                Our Approach
              </Link>
            </AnimatedSection>
          </div>

          {/* Right: video */}
          <AnimatedSection animation="fadeInUp" delay={200} className={styles.videoWrap}>
            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube.com/embed/gd4RnihS6wk?rel=0"
                title="BuildMax Company Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Decorative accent */}
            <div className={styles.videoAccent} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <AnimatedSection animation="fadeInUp">
            <span className={styles.ctaTag}>Start the Conversation</span>
            <h2 className={styles.ctaTitle}>
              Ready to Build<br />Your Portfolio?
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={150}>
            <p className={styles.ctaSub}>
              Our team of experts is ready to help you identify and capitalise
              on the right opportunities for your investment goals.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={280}>
            <Link href="/Contact" className={styles.btnLight}>
              Contact Us Today
            </Link>
          </AnimatedSection>
        </div>

        {/* Large background numeral — purely decorative */}
        <span className={styles.ctaBg} aria-hidden>25</span>
      </section>

    </div>
  );
}