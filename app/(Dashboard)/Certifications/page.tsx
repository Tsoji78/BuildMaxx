'use client';

import { useState } from 'react';
import PageSection from '@/components/PageSection';
import AnimatedSection from '@/components/AnimatedSection';
import PdfModal from './PdfModal';

// ─── CERTIFICATIONS DATA ──────────────────────────────────────────────
const certifications = [
  {
    id: 1,
    title: 'Corporate Affairs Commission Certificate',
    owner: 'BuildMax Investment Limited',
    issuer: 'Corporate Affairs Commission (CAC)',
    year: '2023',
    category: 'Registration',
    pdfUrl: '/assets/D9.pdf',
  },
  {
    id: 2,
    title: 'Project Manager (PM)',
    owner: 'BuildMax Investment Limited',
    issuer: 'Chatered Institute of Project Managers of Nigeria (CIPMN)',
    year: '2023',
    category: 'Projects',
    pdfUrl: '/assets/D3.pdf',
  },
  {
    id: 3,
    title: 'Council for the Regulation of Engineering',
    owner: 'Engr. [Your Full Name]',
    issuer: 'COREN',
    year: '2022',
    category: 'Professional',
    pdfUrl: '/assets/D1.pdf',
  },
];

const CATEGORY_COLORS = {
  Registration: { bg: '#EEF4FF', text: '#2B4DB0', dot: '#4F75E8' },
  Tax:          { bg: '#FFF7ED', text: '#9A4E08', dot: '#E8843A' },
  Professional: { bg: '#ECFDF5', text: '#0C5E3A', dot: '#25A070' },
};

const allCategories = ['All', ...new Set(certifications.map((c) => c.category))];

// Thin horizontal seal strip used as certificate decoration
function SealStrip({ category }) {
  const colors = CATEGORY_COLORS[category] || { dot: '#94A3B8' };
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 20,
    }}>
      <div style={{
        width: 28, height: 28,
        borderRadius: '50%',
        border: `2px solid ${colors.dot}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: colors.dot }} />
      </div>
      <div style={{
        flex: 1,
        height: 1,
        background: `linear-gradient(to right, ${colors.dot}55, transparent)`,
      }} />
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L9.8 5.7H14.8L10.8 8.6L12.3 13.5L8 10.6L3.7 13.5L5.2 8.6L1.2 5.7H6.2L8 1Z"
          fill={colors.dot} opacity="0.7" />
      </svg>
    </div>
  );
}

function CategoryBadge({ category }) {
  const colors = CATEGORY_COLORS[category] || { bg: '#F1F5F9', text: '#475569', dot: '#94A3B8' };
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '3px 10px',
      borderRadius: 99,
      background: colors.bg,
      color: colors.text,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: colors.dot, flexShrink: 0 }} />
      {category}
    </span>
  );
}

function CertCard({ cert, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#FFFFFF',
        border: '1px solid #E2E8F0',
        borderRadius: 16,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 40px -12px rgba(15, 30, 60, 0.16)'
          : '0 2px 8px rgba(15, 30, 60, 0.06)',
        borderColor: hovered ? '#C7D7F0' : '#E2E8F0',
      }}
    >
      {/* Preview area */}
      <div
        onClick={onClick}
        style={{
          position: 'relative',
          height: 200,
          background: 'linear-gradient(145deg, #F0F4FA 0%, #E8EEF8 100%)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Decorative corner marks */}
        {[['0', '0', 'right', 'bottom'], ['auto', '0', 'left', 'bottom'],
          ['0', 'auto', 'right', 'top'], ['auto', 'auto', 'left', 'top']].map(([b, r, br, tr], i) => (
          <div key={i} style={{
            position: 'absolute',
            bottom: b !== 'auto' ? 12 : 'auto', top: b === 'auto' ? 12 : 'auto',
            right: r !== 'auto' ? 12 : 'auto', left: r === 'auto' ? 12 : 'auto',
            width: 16, height: 16,
            borderBottom: b !== 'auto' ? '1.5px solid #94A3B8' : 'none',
            borderTop: b === 'auto' ? '1.5px solid #94A3B8' : 'none',
            borderRight: r !== 'auto' ? '1.5px solid #94A3B8' : 'none',
            borderLeft: r === 'auto' ? '1.5px solid #94A3B8' : 'none',
            opacity: 0.5,
          }} />
        ))}

        {/* Document icon */}
        <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
          <svg width="52" height="64" viewBox="0 0 52 64" fill="none">
            <rect x="1" y="1" width="50" height="62" rx="4" fill="white"
              stroke="#CBD5E1" strokeWidth="1.5" />
            <path d="M36 1V13H48" stroke="#CBD5E1" strokeWidth="1.5" fill="none" />
            <rect x="10" y="22" width="32" height="2" rx="1" fill="#CBD5E1" />
            <rect x="10" y="30" width="32" height="2" rx="1" fill="#CBD5E1" />
            <rect x="10" y="38" width="24" height="2" rx="1" fill="#CBD5E1" />
            <rect x="10" y="46" width="20" height="2" rx="1" fill="#CBD5E1" />
          </svg>
          <p style={{
            marginTop: 12, fontSize: 11, color: '#94A3B8',
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }}>PDF Document</p>
        </div>

        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(15, 30, 75, 0.72)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 8,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.22s ease',
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <span style={{ color: 'white', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em' }}>
            Preview Certificate
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '22px 24px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <SealStrip category={cert.category} />

        <CategoryBadge category={cert.category} />

        <h3 style={{
          margin: '12px 0 6px',
          fontSize: 16,
          fontWeight: 700,
          color: '#0F1E3C',
          lineHeight: 1.35,
          fontFamily: '"Playfair Display", Georgia, serif',
        }}>
          {cert.title}
        </h3>

        <p style={{ margin: '0 0 2px', fontSize: 13, fontWeight: 600, color: '#334155' }}>
          {cert.owner}
        </p>

        <p style={{ margin: 0, fontSize: 12, color: '#94A3B8' }}>
          {cert.issuer} · {cert.year}
        </p>

        <div style={{ marginTop: 'auto', paddingTop: 20, display: 'flex', gap: 10 }}>
          <button
            onClick={onClick}
            style={{
              flex: 1,
              padding: '10px 0',
              borderRadius: 8,
              background: '#0F1E3C',
              color: 'white',
              border: 'none',
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              letterSpacing: '0.02em',
              transition: 'background 0.18s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#1E3A6E'}
            onMouseLeave={e => e.currentTarget.style.background = '#0F1E3C'}
          >
            View Certificate
          </button>
          <a
            href={cert.pdfUrl}
            download
            title="Download PDF"
            style={{
              width: 42,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
              border: '1px solid #E2E8F0',
              color: '#64748B',
              textDecoration: 'none',
              transition: 'all 0.18s',
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#F1F5F9';
              e.currentTarget.style.borderColor = '#CBD5E1';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = '#E2E8F0';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter((c) => c.category === activeCategory);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center text-white overflow-hidden"
        style={{ height: 480, backgroundImage: 'url(assets/b1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(10,20,55,0.82) 0%, rgba(15,30,70,0.65) 100%)' }} />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.08 }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute', left: `${i * 20}%`, top: 0, bottom: 0,
              width: 1, background: 'white',
            }} />
          ))}
        </div>

        <div className="relative z-10 text-center px-6" style={{ maxWidth: 680 }}>
          <AnimatedSection animation="fadeInUp">
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              marginBottom: 20,
              padding: '6px 18px',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 99,
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.8)',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#E8A83A', display: 'inline-block' }} />
              BuildMax Investment Limited
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: '0 0 16px',
              fontFamily: '"Playfair Display", Georgia, serif',
            }}>
              Certifications &<br />Credentials
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeInUp" delay={150}>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 440, margin: '0 auto' }}>
              Official registrations, licences, and professional qualifications
            </p>
          </AnimatedSection>
        </div>

        {/* Bottom fade */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
          background: 'linear-gradient(to bottom, transparent, white)',
        }} />
      </section>

      {/* ── Main content ─────────────────────────────────────────────── */}
      <PageSection>
        <AnimatedSection animation="fadeInUp">

          {/* Stats bar */}
          <div style={{
            display: 'flex',
            gap: 1,
            background: '#E2E8F0',
            borderRadius: 12,
            overflow: 'hidden',
            marginBottom: 40,
          }}>
            {[
              { label: 'Total Documents', value: certifications.length },
              { label: 'Categories', value: allCategories.length - 1 },
              { label: 'Latest Year', value: Math.max(...certifications.map(c => parseInt(c.year))) },
            ].map(({ label, value }) => (
              <div key={label} style={{
                flex: 1, background: '#F8FAFC',
                padding: '18px 24px',
                textAlign: 'center',
              }}>
                <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#0F1E3C',
                  fontFamily: '"Playfair Display", Georgia, serif' }}>
                  {value}
                </p>
                <p style={{ margin: '2px 0 0', fontSize: 12, color: '#94A3B8',
                  textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Filter bar */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
            {allCategories.map((category) => {
              const active = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: 8,
                    border: active ? '1.5px solid #0F1E3C' : '1px solid #E2E8F0',
                    background: active ? '#0F1E3C' : '#FFFFFF',
                    color: active ? '#FFFFFF' : '#64748B',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.18s',
                    letterSpacing: '0.01em',
                  }}
                >
                  {category}
                  {category !== 'All' && (
                    <span style={{
                      marginLeft: 7,
                      fontSize: 11,
                      opacity: active ? 0.65 : 0.5,
                    }}>
                      {certifications.filter(c => c.category === category).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {filteredCerts.map((cert, index) => (
            <AnimatedSection key={cert.id} animation="fadeInUp" delay={index * 70}>
              <CertCard cert={cert} onClick={() => setSelectedCert(cert)} />
            </AnimatedSection>
          ))}
        </div>

        {/* Empty state */}
        {filteredCerts.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8' }}>
            <p style={{ fontSize: 15 }}>No certificates in this category.</p>
          </div>
        )}
      </PageSection>

      {selectedCert && (
        <PdfModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </>
  );
}