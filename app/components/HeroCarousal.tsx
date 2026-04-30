// app/components/HeroCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HERO_IMAGES = [
  '/assets/b1.jpg',
  '/assets/b2.jpg',
  '/assets/b3.jpg',
  '/assets/b5.jpg',
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-carousel">
      <AnimatePresence mode="wait">
        {HERO_IMAGES.map((src, i) => (
          i === activeIndex && (
            <motion.div
              key={i}
              className="hero-slide"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          )
        ))}
      </AnimatePresence>

      <div className="hero-overlay" />

      {/* Dots Navigation */}
      <div className="hero-dots">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .hero-carousel {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(13, 59, 102, 0.82) 0%,
            rgba(8, 40, 71, 0.88) 50%,
            rgba(0, 0, 0, 0.5) 100%
          );
          pointer-events: none;
          z-index: 2;
        }

        .hero-dots {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.75rem;
          z-index: 5;
        }

        .hero-dots .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.6);
          background: transparent;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }

        .hero-dots .dot:hover,
        .hero-dots .dot.active {
          background: var(--color-gold);
          border-color: var(--color-gold);
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
}