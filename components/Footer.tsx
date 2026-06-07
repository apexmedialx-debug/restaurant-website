'use client';

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(10% 0.015 40)', paddingTop: '3.5rem', paddingBottom: '2.5rem' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Large italic brand */}
        <div
          style={{
            paddingBottom: '3.5rem',
            marginBottom: '3.5rem',
            borderBottom: '1px solid oklch(97% 0.007 75 / 0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(48px, 8vw, 100px)',
              letterSpacing: '-0.01em',
              color: 'oklch(94% 0.009 78 / 0.12)',
              display: 'block',
              lineHeight: 1,
            }}
          >
            Alma
          </span>
        </div>

        {/* Three columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid oklch(97% 0.007 75 / 0.07)',
          }}
          className="md:grid-cols-3"
        >
          {/* About */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              About
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '13px',
                lineHeight: 1.75,
                color: 'oklch(42% 0.01 60)',
                maxWidth: '220px',
              }}
            >
              A Lisbon kitchen rooted in tradition and driven by the season. Alfama, since 2008.
            </p>
          </div>

          {/* Hours */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Hours
            </span>
            {[
              { day: 'Tuesday – Friday', time: '18:30 – 22:00' },
              { day: 'Saturday – Sunday', time: '12:30 – 22:00' },
              { day: 'Monday', time: 'Closed' },
            ].map((h) => (
              <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', maxWidth: '260px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'oklch(58% 0.008 65)' }}>
                  {h.day}
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'oklch(36% 0.01 60)' }}>
                  {h.time}
                </span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Contact
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'oklch(58% 0.008 65)' }}>
                14 Rua da Saudade, Alfama
              </span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'oklch(58% 0.008 65)' }}>
                Lisbon, 1100-573, Portugal
              </span>
              <a
                href="tel:+351218880014"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'oklch(68% 0.1 68)', textDecoration: 'none', marginTop: '0.5rem', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                +351 21 888 0014
              </a>
              <a
                href="mailto:reservas@alma-lisboa.pt"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '13px', color: 'oklch(68% 0.1 68)', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                reservas@alma-lisboa.pt
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.75rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.05em',
              color: 'oklch(30% 0.008 60)',
            }}
          >
            &copy; {new Date().getFullYear()} Alma Lisboa. All rights reserved.
          </span>

          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Instagram', 'Facebook'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'oklch(30% 0.008 60)',
                  textDecoration: 'none',
                  transition: 'color 0.25s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'oklch(68% 0.1 68)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'oklch(30% 0.008 60)')}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
