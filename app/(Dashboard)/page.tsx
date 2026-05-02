'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useProperties } from '@/hooks/useProperties';
import HeroCarousel from '@/components/HeroCarousal';
import PropertyCarousel from '@/components/PropertyCarousal';
import AnimatedSection from '@/components/AnimatedSection';
import styles from '@/styles/page.module.css';

// ─── IMAGE CONFIG ──────────────────────────────────────────────────────────────
// Drop your images into /public/images/ and update these paths.
// Each section has its own background; set to '' to use the default gradient.
const IMAGES = {
  // Hero section — full bleed background (replaces the HeroCarousel overlay base)
  // Recommended: 1920×1080, dark/moody architectural photo
  heroBg: '/assets/p15.jpg',

  // Stats band — subtle texture or aerial city shot
  // Recommended: 1600×600, can be dark or desaturated
  statsBg: '/assets/b2.jpg',

  // About / video section — side background accent
  // Recommended: 800×900, portrait-oriented property interior
  aboutBg: '/assets/p17.jpg',

  // CTA section — full-width dramatic shot
  // Recommended: 1920×800, wide architectural exterior
  ctaBg: '/assets/p18.jpg',
};
// ──────────────────────────────────────────────────────────────────────────────

export default function Home() {
  const { data: properties, isLoading } = useProperties();

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        {/* Custom background image layer */}
        {IMAGES.heroBg && (
          <div className={styles.heroBgImage}>
            <Image
              src={IMAGES.heroBg}
              alt=""
              fill
              priority
              quality={90}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        )}

        <div className={styles.heroMedia}>
          <HeroCarousel />
          <div className={styles.heroOverlay} />
        </div>

        {/* Grain texture overlay */}
        <div className={styles.heroGrain} aria-hidden />

        <div className={styles.heroContent}>
          <AnimatedSection animation="fadeInUp">
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Est. 2020 · Abuja</span>
            </div>
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
              <span>View Portfolio</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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

        {/* Bottom gradient fade into next section */}
        <div className={styles.heroFade} aria-hidden />
      </section>

      {/* ── Stats Band ── */}
      <section className={styles.stats}>
        {IMAGES.statsBg && (
          <div className={styles.statsBgImage}>
            <Image
              src={IMAGES.statsBg}
              alt=""
              fill
              quality={75}
              style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
            />
          </div>
        )}
        <div className={styles.statsOverlay} aria-hidden />

        <div className={styles.statsInner}>
          {[
            { value: '₦240M+', label: 'Assets Under Management' },
            { value: '15+',    label: 'Properties Acquired' },
            { value: '5+',     label: 'Years of Experience' },
            { value: '8',      label: 'Active Markets' },
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
        {/* Background image panel behind copy */}
        {IMAGES.aboutBg && (
          <div className={styles.aboutBgImage}>
            <Image
              src={IMAGES.aboutBg}
              alt=""
              fill
              quality={80}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className={styles.aboutBgOverlay} />
          </div>
        )}

        <div className={styles.aboutInner}>
          {/* Left: copy */}
          <div className={styles.aboutCopy}>
            <AnimatedSection animation="fadeInUp">
              <span className={styles.sectionTag}>Our Story</span>
              <h2 className={styles.sectionTitle}>See BuildMax<br />in Action</h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={150}>
              <p className={styles.aboutBody}>
                For over five years we have been at the forefront of premium
                real estate Development — identifying opportunities others miss,
                executing with precision, and delivering enduring value to our partners.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={200}>
              {/* Mini trust indicators */}
              <ul className={styles.trustList} aria-label="Key credentials">
                {['ISO-certified due diligence', 'End-to-end property management', 'Transparent quarterly reporting'].map(item => (
                  <li key={item} className={styles.trustItem}>
                    <span className={styles.trustCheck} aria-hidden>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            <AnimatedSection animation="fadeInUp" delay={300}>
              <Link href="/About" className={styles.btnPrimary}>
                <span>Our Approach</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </AnimatedSection>
          </div>

          {/* Right: video */}
          <AnimatedSection animation="fadeInUp" delay={200} className={styles.videoWrap}>
            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube.com/embed/l16X7Owjz_U?si=Z_lPy3bbmmfzEWXO"
                title="BuildMax Company Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.videoAccent} />
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        {IMAGES.ctaBg && (
          <div className={styles.ctaBgImage}>
            <Image
              src={IMAGES.ctaBg}
              alt=""
              fill
              quality={85}
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            />
          </div>
        )}
        <div className={styles.ctaOverlay} aria-hidden />

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

        <span className={styles.ctaBg} aria-hidden>25</span>
      </section>

    </div>
  );
}