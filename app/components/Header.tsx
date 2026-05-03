// app/components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { path: '/',               label: 'Home' },
  { path: '/About',          label: 'About' },
  { path: '/Services',       label: 'Services' },
  { path: '/Certifications',        label: 'Certification' },
  { path: '/Contact',        label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  /* Detect scroll so we can harden the header background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close drawer whenever route changes */
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path);

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">

          {/* ── Logo ── */}
          <Link href="/" className="logo" aria-label="BuildMax home">
            <img 
              src="/assets/maxlogo1.png" 
              alt="BuildMax" 
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className={`nav ${mobileOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
            <div className="nav-links">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                  {isActive(item.path) && <span className="nav-dot" aria-hidden />}
                </Link>
              ))}
            </div>

            {/* CTA inside mobile drawer */}
            <div className="nav-drawer-cta">
              <Link href="/Contact" className="btn-cta">
                Get in Touch
              </Link>
            </div>
          </nav>

          {/* ── Desktop CTA ── */}
          <Link href="/Contact" className="btn-cta desktop-cta">
            Get in Touch
          </Link>

          {/* ── Hamburger ── */}
          <button
            className={`nav-toggle ${mobileOpen ? 'toggle-open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </button>
        </div>
      </header>

      <style jsx>{`
        /* ── Shell ── */
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(253, 251, 248, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(13, 59, 102, 0.07);
          transition: box-shadow 0.3s ease, background 0.3s ease;
        }
        .header.scrolled {
          background: rgba(253, 251, 248, 0.98);
          box-shadow: 0 2px 24px rgba(13, 59, 102, 0.08);
        }
        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* ── Logo ── */
        .logo {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          text-decoration: none;
        }
        .logo img {
          height:1px;
          max-width: 10px;       /* ← tweak this value (40–56px works for most navbars) */
          width: 1px;
          object-fit: left center;
          display: block;
        }
        
        

        /* ── Nav wrapper ── */
        .nav {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .nav-links::-webkit-scrollbar { display: none; }

        /* ── Nav links ── */
        .nav-link {
          position: relative;
          padding: 0.45rem 0.65rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--color-slate);
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--color-navy);
          background: rgba(212, 168, 83, 0.1);
        }
        .nav-link.active {
          color: var(--color-navy);
          font-weight: 600;
        }
        .nav-dot {
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--color-gold);
        }

        /* ── Desktop CTA ── */
        .btn-cta {
          display: inline-block;
          padding: 0.55rem 1.25rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-navy);
          background: var(--color-gold);
          border-radius: 6px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .btn-cta:hover {
          background: var(--color-gold-light);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(212, 168, 83, 0.35);
        }
        .nav-drawer-cta { display: none; }

        /* ── Hamburger ── */
        .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-shrink: 0;
        }
        .bar {
          display: block;
          height: 2px;
          background: var(--color-navy);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .bar-1 { width: 22px; }
        .bar-2 { width: 16px; }
        .bar-3 { width: 22px; }

        /* Animate to × */
        .toggle-open .bar-1 {
          width: 22px;
          transform: translateY(7px) rotate(45deg);
        }
        .toggle-open .bar-2 {
          opacity: 0;
          transform: scaleX(0);
        }
        .toggle-open .bar-3 {
          width: 22px;
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── Backdrop ── */
        .nav-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(8, 40, 71, 0.4);
          z-index: 99;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          backdrop-filter: blur(2px);
        }
        .nav-backdrop.open {
          display: block;
          opacity: 1;
          pointer-events: auto;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nav-link { font-size: 0.8rem; padding: 0.4rem 0.5rem; }
        }

        @media (max-width: 900px) {
          .desktop-cta { display: none; }
          .nav-toggle  { display: flex; }

          .nav {
            position: fixed;
            top: 0;
            right: 0;
            width: min(300px, 85vw);
            height: 100dvh;
            background: var(--color-white);
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            padding: 5.5rem 1.5rem 2rem;
            box-shadow: -8px 0 32px rgba(8, 40, 71, 0.12);
            transform: translateX(100%);
            transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
            overflow-y: auto;
            z-index: 100;
          }
          .nav-open { transform: translateX(0); }

          .nav-links {
            flex-direction: column;
            align-items: stretch;
            gap: 0.25rem;
            overflow-x: visible;
          }
          .nav-link {
            padding: 0.85rem 1rem;
            font-size: 1rem;
            border-radius: 8px;
          }
          .nav-dot {
            bottom: auto;
            top: 50%;
            left: auto;
            right: 1rem;
            transform: translateY(-50%);
          }
          .nav-drawer-cta {
            display: block;
            padding-top: 1.5rem;
            margin-top: auto;
            border-top: 1px solid rgba(13, 59, 102, 0.08);
          }
          .nav-drawer-cta .btn-cta {
            display: block;
            text-align: center;
            padding: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}