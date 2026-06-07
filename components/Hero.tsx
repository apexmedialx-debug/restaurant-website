'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{ position: 'relative', minHeight: '100dvh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY, position: 'absolute', inset: '-15% 0', zIndex: 0 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=85"
          alt="ALMA restaurant interior"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, oklch(14% 0.015 40 / 0.82) 0%, oklch(14% 0.015 40 / 0.3) 50%, oklch(14% 0.015 40 / 0.1) 100%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity, position: 'relative', zIndex: 1, width: '100%', paddingBottom: '5rem' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'oklch(70% 0.09 68)',
              marginBottom: '1.5rem',
            }}
          >
            Lisbon, since 2008
          </motion.div>

          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(52px, 9vw, 130px)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: 'oklch(97% 0.007 75)',
                marginBottom: '0.1em',
              }}
            >
              Alma
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden' }}>
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 24px)',
                color: 'oklch(78% 0.008 65)',
                maxWidth: '480px',
                lineHeight: 1.5,
                marginTop: '1.5rem',
              }}
            >
              A kitchen rooted in the soul of Portugal — bacalhau, cataplana,<br className="hidden md:block" /> and the warmth of the table.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}
          >
            <a
              href="#reservations"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'oklch(97% 0.007 75)',
                background: 'oklch(32% 0.095 15)',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'background 0.25s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = 'oklch(45% 0.1 15)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = 'oklch(32% 0.095 15)')}
            >
              Reserve a Table
            </a>
            <a
              href="#menu"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'oklch(97% 0.007 75)',
                border: '1px solid oklch(97% 0.007 75 / 0.4)',
                padding: '14px 32px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = 'oklch(97% 0.007 75)')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = 'oklch(97% 0.007 75 / 0.4)')}
            >
              View Menu
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2.5rem',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'oklch(78% 0.008 65)',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '40px',
            background: 'oklch(70% 0.09 68)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>
    </section>
  );
}
