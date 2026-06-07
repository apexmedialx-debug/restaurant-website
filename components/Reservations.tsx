'use client';

import { useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function Reservations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    color: 'oklch(14% 0.015 40)',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid oklch(14% 0.015 40 / 0.25)',
    padding: '10px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: '11px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase' as const,
    color: 'oklch(55% 0.012 60)',
    display: 'block',
    marginBottom: '4px',
  };

  return (
    <section
      id="reservations"
      ref={ref}
      style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5rem' }}
          className="lg:grid-cols-2"
        >
          {/* Left: CTA */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'oklch(70% 0.09 68)',
                display: 'block',
                marginBottom: '1.25rem',
              }}
            >
              Reservations
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(32px, 4.5vw, 64px)',
                lineHeight: 1.05,
                color: 'oklch(14% 0.015 40)',
                marginBottom: '1.75rem',
              }}
            >
              Join us for dinner
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'oklch(55% 0.012 60)',
                maxWidth: '400px',
                marginBottom: '2.5rem',
              }}
            >
              We seat guests Tuesday through Sunday, 18:30 to 22:00. Lunch service on weekends from 12:30. For groups of 8 or more, please contact us directly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {[
                { label: 'Address', val: '14 Rua da Saudade, Alfama, Lisbon' },
                { label: 'Phone', val: '+351 21 888 0014' },
                { label: 'Email', val: 'reservas@alma-lisboa.pt' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '11px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'oklch(70% 0.09 68)',
                      minWidth: '60px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'oklch(22% 0.015 40)',
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  minHeight: '320px',
                  gap: '1rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    border: '1px solid oklch(70% 0.09 68)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'oklch(70% 0.09 68)',
                    fontSize: '20px',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    fontSize: '28px',
                    color: 'oklch(14% 0.015 40)',
                  }}
                >
                  We'll be in touch soon
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'oklch(55% 0.012 60)' }}>
                  Thank you for your reservation request.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2rem' }}
                  className="grid-cols-1 sm:grid-cols-2"
                >
                  <div>
                    <label style={labelStyle}>First name</label>
                    <input type="text" required placeholder="Sofia" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name</label>
                    <input type="text" required placeholder="Ferreira" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" required placeholder="sofia@example.com" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" placeholder="+351 912 345 678" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Date</label>
                    <input type="date" required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Guests</label>
                    <select
                      required
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select...</option>
                      {[1,2,3,4,5,6,7].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Special requests</label>
                  <textarea
                    placeholder="Dietary requirements, occasion, seating preference..."
                    rows={3}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'oklch(97% 0.007 75)',
                    background: 'oklch(32% 0.095 15)',
                    border: 'none',
                    padding: '16px 32px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.background = 'oklch(22% 0.015 40)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.background = 'oklch(32% 0.095 15)')}
                >
                  Request Reservation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
