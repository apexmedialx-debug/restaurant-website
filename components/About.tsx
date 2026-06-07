'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInView = useInView(imgRef, { once: true, margin: '-80px' });

  return (
    <section id="about" style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'oklch(94% 0.009 78)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '4rem',
          }}
          className="lg:grid-cols-2"
        >
          {/* Image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={imgInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80"
              alt="ALMA kitchen and team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            {/* Gold accent bar */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'oklch(70% 0.09 68)',
              }}
            />
          </motion.div>

          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2rem' }}>
            <FadeUp>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  textTransform: 'uppercase',
                  color: 'oklch(70% 0.09 68)',
                }}
              >
                Our Story
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: 'clamp(32px, 4vw, 56px)',
                  lineHeight: 1.05,
                  color: 'oklch(14% 0.015 40)',
                }}
              >
                Alma means{' '}
                <em>soul</em>{' '}
                in Portuguese
              </h2>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: 'oklch(55% 0.012 60)',
                  maxWidth: '480px',
                }}
              >
                We opened our doors in 2008 with a single belief: that honest cooking, made from what the season gives us, is the most generous thing a table can offer. Our menu changes with the tides, the market, and what our grandmothers taught us.
              </p>
            </FadeUp>

            <FadeUp delay={0.26}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: 1.75,
                  color: 'oklch(55% 0.012 60)',
                  maxWidth: '480px',
                }}
              >
                Chef Mariana Sousa grew up between the fishing villages of the Alentejo coast and the spice markets of Lisbon. Every dish on this menu is a letter home.
              </p>
            </FadeUp>

            <FadeUp delay={0.34}>
              <div style={{ display: 'flex', gap: '3rem', paddingTop: '0.5rem' }}>
                {[
                  { num: '16+', label: 'Years open' },
                  { num: '4', label: 'Awards' },
                  { num: '80%', label: 'Seasonal menu' },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontStyle: 'italic',
                        fontSize: '32px',
                        color: 'oklch(32% 0.095 15)',
                        lineHeight: 1,
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'oklch(55% 0.012 60)',
                        marginTop: '4px',
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
