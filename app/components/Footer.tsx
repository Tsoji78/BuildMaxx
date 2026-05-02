// app/components/Footer.tsx
'use client';

import Link from 'next/link';

const company = [
  { href: '/About',          label: 'About Us' },
  { href: '/Team',           label: 'Our Team' },
  { href: '/Certifications', label: 'Certifications' },
  { href: '/Careers',        label: 'Careers' },
];

const services = [
  { href: '/Services',   label: 'Investment Advisory' },
  { href: '/Portfolio',  label: 'Portfolio' },
  { href: '/News',       label: 'News & Insights' },
];

const support = [
  { href: '/FAQ',     label: 'FAQ' },
  { href: '/Contact', label: 'Contact' },
];

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM9 17H6.5v-7H9v7zm-1.25-8a1.375 1.375 0 110-2.75 1.375 1.375 0 010 2.75zM18 17h-2.5v-3.5c0-.97-.78-1.75-1.75-1.75S12 12.53 12 13.5V17H9.5v-7H12v1.1c.52-.8 1.6-1.35 2.5-1.35C16.43 9.75 18 11.32 18 13.5V17z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
];

function LinkColumn({ heading, links }: { heading: string; links: { href: string; label: string }[] }) {
  return (
    <div className="footer-col">
      <h4 className="col-heading">{heading}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="footer-link">{l.label}</Link>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .footer-col ul { list-style: none; padding: 0; margin: 0; }
        .col-heading {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.1rem;
        }
        .footer-link {
          display: inline-block;
          color: rgba(255,255,255,0.72);
          font-size: 0.9rem;
          line-height: 1;
          margin-bottom: 0.75rem;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: var(--color-gold); }
      `}</style>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      {/* Gold top-border accent */}
      <div className="footer-accent" aria-hidden />

      <div className="footer-inner">
        {/* ── Top row ── */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label="BuildMax home">
               <img 
              src="/assets/maxlogo1.png" 
              alt="BuildMax" 
            />
            </Link>

            <p className="tagline">
              Strategic real estate investment solutions for discerning investors across key markets.
            </p>

            <div className="socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="social-icon"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <LinkColumn heading="Company"  links={company}  />
          <LinkColumn heading="Services" links={services} />
          <LinkColumn heading="Support"  links={support}  />
        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bar">
          <p className="legal">
            © {new Date().getFullYear()} BuildMax Real Estate Investments. All rights reserved.
          </p>
          <div className="legal-links">
            <Link href="/privacy" className="legal-link">Privacy Policy</Link>
            <span className="divider" aria-hidden>·</span>
            <Link href="/terms"   className="legal-link">Terms of Use</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--color-navy-dark);
          color: rgba(255,255,255,0.8);
        }

        /* Three-stop gold-to-transparent gradient across the very top */
        .footer-accent {
          height: 3px;
          background: linear-gradient(
            to right,
            transparent 0%,
            var(--color-gold) 30%,
            var(--color-gold-light) 50%,
            var(--color-gold) 70%,
            transparent 100%
          );
        }

        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 2rem) 2rem;
        }

        /* ── Grid ── */
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* ── Brand ── */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--color-white);
          text-decoration: none;
        }
        .footer-logo em {
          font-style: normal;
          color: var(--color-gold);
        }
        .footer-logo-mark {
          width: 20px;
          height: 20px;
          color: var(--color-gold);
          flex-shrink: 0;
        }
        .tagline {
          font-size: 0.9rem;
          line-height: 1.65;
          color: rgba(255,255,255,0.55);
          max-width: 26ch;
          margin: 0;
        }

        /* ── Socials ── */
        .socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 0.25rem;
        }
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
        }
        .social-icon:hover {
          color: var(--color-gold);
          border-color: var(--color-gold);
          background: rgba(212, 168, 83, 0.08);
        }
        .social-icon :global(svg) {
          width: 16px;
          height: 16px;
        }

        /* ── Bottom bar ── */
        .footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.75rem;
          flex-wrap: wrap;
        }
        .legal {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }
        .legal-links {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .legal-link {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .legal-link:hover { color: var(--color-gold); }
        .divider {
          color: rgba(255,255,255,0.2);
          font-size: 0.8rem;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
          .tagline { max-width: none; }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}