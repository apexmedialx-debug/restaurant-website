'use client';

import Image from 'next/image';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect } from 'react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString() + suffix);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: '-40px' });

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
    }
  }, [inView, to, count]);

  return (
    <span ref={wrapRef}>
      <motion.span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 300, color: 'oklch(30% 0.1 15)', lineHeight: 1 }}>
        {rounded}
      </motion.span>
    </span>
  );
}

function LineReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });
  const lineRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" style={{ paddingTop: '5.5rem', paddingBottom: '5.5rem', position: 'relative', overflow: 'hidden' }}>
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
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=60"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.045 }}
          aria-hidden
        />
      </div>

      <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr' }}
          className="lg:grid-cols-2"
        >
          {/* Text — left */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
            <LineReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '28px', height: '1px', background: 'oklch(68% 0.1 68)', flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '11px',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'oklch(68% 0.1 68)',
                  }}
                >
                  Our Story
                </span>
              </div>
            </LineReveal>

            <LineReveal delay={0.08}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: 'clamp(34px, 4.5vw, 60px)',
                  lineHeight: 1.05,
                  color: 'oklch(10% 0.015 40)',
                  margin: 0,
                }}
              >
                Alma means <em style={{ fontStyle: 'normal', color: 'oklch(30% 0.1 15)' }}>soul</em><br />
                in Portuguese
              </h2>
            </LineReveal>

            <LineReveal delay={0.16}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'oklch(52% 0.012 60)',
                  maxWidth: '460px',
                  margin: 0,
                }}
              >
                We opened our doors in 2008 with a single belief: that honest cooking, made from what the season gives us, is the most generous thing a table can offer.
              </p>
            </LineReveal>

            <LineReveal delay={0.22}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'oklch(52% 0.012 60)',
                  maxWidth: '460px',
                  margin: 0,
                }}
              >
                Chef Mariana Sousa grew up between the fishing villages of the Alentejo coast and the spice markets of Lisbon. Every dish on this menu is a letter home.
              </p>
            </LineReveal>

            {/* Animated stats */}
            <LineReveal delay={0.3}>
              <div
                ref={lineRef}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid oklch(10% 0.015 40 / 0.1)',
                }}
              >
                {[
                  { to: 16, suffix: '+', label: 'Years open' },
                  { to: 4, suffix: '', label: 'Awards' },
                  { to: 80, suffix: '%', label: 'Seasonal menu' },
                ].map((s) => (
                  <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Counter to={s.to} suffix={s.suffix} />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 300,
                        fontSize: '11px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'oklch(52% 0.012 60)',
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </LineReveal>
          </div>

          {/* Image — right */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={imgInView ? { opacity: 1, clipPath: 'inset(0 0 0% 0)' } : {}}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
              alt="ALMA kitchen and team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Gold accent — left edge */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '3px',
                background: 'oklch(68% 0.1 68)',
              }}
            />
            {/* Caption overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '2rem',
                left: '1.5rem',
                right: '1.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '17px',
                  color: 'oklch(97% 0.007 75)',
                  background: 'oklch(7% 0.014 35 / 0.6)',
                  padding: '8px 14px',
                  display: 'inline-block',
                  backdropFilter: 'blur(4px)',
                }}
              >
                Chef Mariana Sousa, head kitchen
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
