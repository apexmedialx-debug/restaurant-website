'use client';

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(14% 0.015 40)', paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid oklch(97% 0.007 75 / 0.1)',
          }}
          className="md:grid-cols-3"
        >
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: '28px',
                letterSpacing: '0.02em',
                color: 'oklch(94% 0.009 78)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Alma
            </span>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                lineHeight: 1.7,
                color: 'oklch(55% 0.012 60)',
                maxWidth: '240px',
              }}
            >
              A Lisbon kitchen rooted in tradition. Alfama, since 2008.
            </p>
          </div>

          {/* Hours */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'oklch(70% 0.09 68)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Hours
            </span>
            {[
              { day: 'Tue – Fri', time: '18:30 – 22:00' },
              { day: 'Sat – Sun', time: '12:30 – 22:00' },
              { day: 'Monday', time: 'Closed' },
            ].map((h) => (
              <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', maxWidth: '220px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'oklch(78% 0.008 65)' }}>{h.day}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'oklch(55% 0.012 60)' }}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'oklch(70% 0.09 68)',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              Contact
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'oklch(78% 0.008 65)' }}>14 Rua da Saudade, Alfama</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'oklch(78% 0.008 65)' }}>Lisbon, 1100-573, Portugal</span>
              <a href="tel:+351218880014" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'oklch(70% 0.09 68)', textDecoration: 'none', marginTop: '0.5rem' }}>+351 21 888 0014</a>
              <a href="mailto:reservas@alma-lisboa.pt" style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'oklch(70% 0.09 68)', textDecoration: 'none' }}>reservas@alma-lisboa.pt</a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
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
              fontSize: '12px',
              color: 'oklch(38% 0.01 60)',
            }}
          >
            &copy; {new Date().getFullYear()} Alma Lisboa. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Instagram', 'Facebook'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'oklch(38% 0.01 60)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'oklch(70% 0.09 68)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'oklch(38% 0.01 60)')}
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
