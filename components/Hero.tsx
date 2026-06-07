'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const TITLE = ['A', 'l', 'm', 'a'];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY     = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}
    >
      {/* Parallax image layer */}
      <motion.div style={{ y: bgY, position: 'absolute', inset: '-18% 0', zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=90"
          alt="ALMA restaurant interior"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        {/* Deep, multi-stop overlay — much darker */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(
                to top,
                oklch(7% 0.014 35 / 0.97) 0%,
                oklch(7% 0.014 35 / 0.80) 30%,
                oklch(7% 0.014 35 / 0.55) 60%,
                oklch(7% 0.014 35 / 0.35) 100%
              )
            `,
          }}
        />
        {/* Vignette on sides */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse at center, transparent 40%, oklch(7% 0.014 35 / 0.5) 100%)`,
          }}
        />
      </motion.div>

      {/* Vertical text — far right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: 'absolute',
          right: '2.5rem',
          bottom: '8rem',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
        }}
        className="hidden lg:flex"
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '9px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'oklch(68% 0.1 68)',
            writingMode: 'vertical-rl',
          }}
        >
          Est. MMVIII · Alfama · Lisboa
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '48px', background: 'oklch(68% 0.1 68 / 0.5)', transformOrigin: 'top' }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y: contentY, opacity, position: 'relative', zIndex: 1, width: '100%', paddingBottom: '3.5rem' }}
      >
        <div className="max-w-7xl mx-auto px-6">

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ width: '40px', height: '1px', background: 'oklch(68% 0.1 68)', transformOrigin: 'left', flexShrink: 0 }}
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '11px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
              }}
            >
              Fine Portuguese Kitchen
            </motion.span>
          </div>

          {/* Animated title — per-character */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(88px, 16vw, 210px)',
              lineHeight: 0.88,
              letterSpacing: '-0.01em',
              color: 'oklch(97% 0.007 75)',
              margin: '0 0 0.1em',
              display: 'flex',
              flexWrap: 'nowrap',
            }}
            aria-label="Alma"
          >
            {TITLE.map((char, i) => (
              <span
                key={i}
                style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', lineHeight: 1.05 }}
              >
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.4 + i * 0.09 }}
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Tagline */}
          <div style={{ overflow: 'hidden', maxWidth: '520px', marginTop: '1.75rem' }}>
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: 'clamp(17px, 2.2vw, 26px)',
                color: 'oklch(74% 0.008 65)',
                lineHeight: 1.45,
                margin: 0,
              }}
            >
              A kitchen rooted in the soul of Portugal — bacalhau, cataplana, and the warmth of the table.
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}
          >
            <a
              href="#reservations"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'oklch(97% 0.007 75)',
                background: 'oklch(30% 0.1 15)',
                padding: '16px 36px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'oklch(42% 0.11 15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'oklch(30% 0.1 15)')}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'oklch(94% 0.009 78)',
                border: '1px solid oklch(94% 0.009 78 / 0.35)',
                padding: '16px 36px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.3s, color 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'oklch(94% 0.009 78)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'oklch(94% 0.009 78 / 0.35)';
              }}
            >
              Explore Menu
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
