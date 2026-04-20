// app/components/PropertyCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Property } from '@/lib/api';

interface PropertyCarouselProps {
  properties: Property[];
}

export default function PropertyCarousel({ properties }: PropertyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    if (!properties.length) return;

    const timer = setInterval(() => {
      setDirection('next');
      setActiveIndex((i) => (i + 1) % properties.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [properties.length]);

  const goTo = (i: number, dir: 'next' | 'prev') => {
    setDirection(dir);
    setActiveIndex(i);
  };

  if (!properties.length) return null;

  return (
    <div className="property-carousel">
      <div className="carousel-track">
        {properties.map((p, i) => (
          <div
            key={p.id}
            className={`carousel-slide ${
              i === activeIndex ? 'active' : ''
            } ${
              i === (activeIndex - 1 + properties.length) % properties.length ? 'prev' : ''
            } ${
              i === (activeIndex + 1) % properties.length ? 'next' : ''
            }`}
          >
            <Link href={`/portfolio#${p.id}`} className="carousel-card">
              <div className="carousel-image">
                <img src={p.image} alt={p.title} />
                <div className="carousel-overlay" />
              </div>
              <div className="carousel-content">
                <span className="carousel-type">{p.type}</span>
                <h3>{p.title}</h3>
                <p className="carousel-location">{p.location}</p>
                <div className="carousel-meta">
                  <span>${(p.price / 1e6).toFixed(2)}M</span>
                  <span>{p.roi}% ROI</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="carousel-nav">
        <button
          className="carousel-btn prev"
          onClick={() => goTo((activeIndex - 1 + properties.length) % properties.length, 'prev')}
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          className="carousel-btn next"
          onClick={() => goTo((activeIndex + 1) % properties.length, 'next')}
          aria-label="Next"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {properties.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(i, i > activeIndex ? 'next' : 'prev')}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        .property-carousel {
          position: relative;
          overflow: hidden;
          padding: 2rem 0;
        }
        .carousel-track {
          position: relative;
          min-height: 420px;
        }
        .carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: translateX(80px) scale(0.95);
          transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }
        .carousel-slide.active {
          opacity: 1;
          transform: translateX(0) scale(1);
          pointer-events: auto;
          z-index: 2;
        }
        .carousel-slide.prev {
          opacity: 0.3;
          transform: translateX(-40px) scale(0.92);
          pointer-events: none;
        }
        .carousel-slide.next {
          opacity: 0.3;
          transform: translateX(40px) scale(0.92);
          pointer-events: none;
        }
        .carousel-card {
          display: block;
          max-width: 540px;
          margin: 0 auto;
          background: var(--color-white);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(13,59,102,0.15), 0 8px 24px rgba(0,0,0,0.08);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .carousel-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(13,59,102,0.2), 0 12px 32px rgba(0,0,0,0.12);
        }
        .carousel-image {
          position: relative;
          aspect-ratio: 16/10;
          overflow: hidden;
        }
        .carousel-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 6s ease;
        }
        .carousel-card:hover .carousel-image img {
          transform: scale(1.08);
        }
        .carousel-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%);
        }
        .carousel-content {
          padding: 1.75rem;
        }
        .carousel-type {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--color-gold);
        }
        .carousel-content h3 {
          margin: 0.5rem 0 0.25rem;
          font-size: 1.5rem;
        }
        .carousel-location {
          font-size: 0.9rem;
          color: var(--color-slate);
          margin-bottom: 0.75rem;
        }
        .carousel-meta {
          display: flex;
          gap: 1.25rem;
          font-weight: 600;
          color: var(--color-navy);
          font-size: 1.05rem;
        }
        .carousel-nav {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .carousel-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid var(--color-gold);
          background: var(--color-white);
          color: var(--color-gold);
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          padding: 0;
        }
        .carousel-btn:hover {
          background: var(--color-gold);
          color: var(--color-white);
          transform: scale(1.08);
        }
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .carousel-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          background: rgba(13,59,102,0.25);
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }
        .carousel-dots .dot:hover,
        .carousel-dots .dot.active {
          background: var(--color-gold);
          transform: scale(1.3);
        }

        @media (max-width: 640px) {
          .carousel-track {
            min-height: 360px;
          }
          .carousel-content h3 {
            font-size: 1.25rem;
          }
          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}