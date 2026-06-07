'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function Reservations() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: '14px',
    color: 'oklch(10% 0.015 40)',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid oklch(10% 0.015 40 / 0.18)',
    padding: '12px 0',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.25s',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: '10px',
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'oklch(52% 0.012 60)',
    display: 'block',
    marginBottom: '2px',
  };

  return (
    <section
      id="reservations"
      ref={ref}
      style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', background: 'oklch(94% 0.009 78)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle background food image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1400&q=60"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.1 }}
          aria-hidden
        />
      </div>

      <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}
          className="lg:grid-cols-2"
        >
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}
            >
              <div style={{ width: '28px', height: '1px', background: 'oklch(68% 0.1 68)', flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'oklch(68% 0.1 68)',
                }}
              >
                Reservations
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(34px, 5vw, 68px)',
                lineHeight: 1.02,
                color: 'oklch(10% 0.015 40)',
                marginBottom: '2rem',
              }}
            >
              Join us<br />for dinner
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '15px',
                lineHeight: 1.78,
                color: 'oklch(52% 0.012 60)',
                maxWidth: '380px',
                marginBottom: '2.5rem',
              }}
            >
              We seat guests Tuesday through Sunday, 18:30 to 22:00. Weekend lunch from 12:30. For parties of eight or more, please contact us directly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
            >
              {[
                { label: 'Address', val: '14 Rua da Saudade, Alfama, Lisbon' },
                { label: 'Phone',   val: '+351 21 888 0014' },
                { label: 'Email',   val: 'reservas@alma-lisboa.pt' },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'oklch(68% 0.1 68)',
                      minWidth: '55px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 300,
                      fontSize: '14px',
                      color: 'oklch(20% 0.015 40)',
                    }}
                  >
                    {item.val}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            {submitted ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '380px',
                  gap: '1.25rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    border: '1px solid oklch(68% 0.1 68)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'oklch(68% 0.1 68)',
                    fontSize: '22px',
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    fontSize: '32px',
                    color: 'oklch(10% 0.015 40)',
                  }}
                >
                  We'll be in touch soon
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '14px',
                    color: 'oklch(52% 0.012 60)',
                  }}
                >
                  Thank you for your reservation request.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem 2.5rem' }}>
                  <div>
                    <label style={labelStyle}>First name</label>
                    <input type="text" required placeholder="Sofia" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'oklch(30% 0.1 15)')}
                      onBlur={(e) => (e.target.style.borderColor = 'oklch(10% 0.015 40 / 0.18)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Last name</label>
                    <input type="text" required placeholder="Ferreira" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'oklch(30% 0.1 15)')}
                      onBlur={(e) => (e.target.style.borderColor = 'oklch(10% 0.015 40 / 0.18)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input type="email" required placeholder="sofia@example.com" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'oklch(30% 0.1 15)')}
                      onBlur={(e) => (e.target.style.borderColor = 'oklch(10% 0.015 40 / 0.18)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input type="tel" placeholder="+351 912 345 678" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'oklch(30% 0.1 15)')}
                      onBlur={(e) => (e.target.style.borderColor = 'oklch(10% 0.015 40 / 0.18)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Date</label>
                    <input type="date" required style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'oklch(30% 0.1 15)')}
                      onBlur={(e) => (e.target.style.borderColor = 'oklch(10% 0.015 40 / 0.18)')}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Guests</label>
                    <select required style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select...</option>
                      {[1, 2, 3, 4, 5, 6, 7].map((n) => (
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
                    onFocus={(e) => (e.target.style.borderColor = 'oklch(30% 0.1 15)')}
                    onBlur={(e) => (e.target.style.borderColor = 'oklch(10% 0.015 40 / 0.18)')}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '11px',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'oklch(97% 0.007 75)',
                    background: 'oklch(10% 0.015 40)',
                    border: 'none',
                    padding: '18px 36px',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                    transition: 'background 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'oklch(30% 0.1 15)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'oklch(10% 0.015 40)')}
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
