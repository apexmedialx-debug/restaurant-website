'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reservations' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        background: scrolled ? 'oklch(97% 0.007 75 / 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(14% 0.015 40 / 0.08)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontSize: '22px',
                fontStyle: 'italic',
                letterSpacing: '0.04em',
                color: 'oklch(14% 0.015 40)',
              }}
            >
              Alma
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex" style={{ gap: '2.5rem' }}>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'oklch(22% 0.015 40)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'oklch(32% 0.095 15)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'oklch(22% 0.015 40)')}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Reserve CTA */}
          <a
            href="#reservations"
            className="hidden md:inline-flex"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'oklch(97% 0.007 75)',
              background: 'oklch(32% 0.095 15)',
              padding: '10px 22px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.background = 'oklch(22% 0.015 40)')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.background = 'oklch(32% 0.095 15)')}
          >
            Reserve
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ height: '1px', background: 'oklch(14% 0.015 40)', display: 'block', transition: 'transform 0.3s', transform: open ? 'translateY(6px) rotate(45deg)' : 'none' }} />
              <span style={{ height: '1px', background: 'oklch(14% 0.015 40)', display: 'block', opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
              <span style={{ height: '1px', background: 'oklch(14% 0.015 40)', display: 'block', transition: 'transform 0.3s', transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none' }} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', background: 'oklch(97% 0.007 75)', borderBottom: '1px solid oklch(14% 0.015 40 / 0.1)' }}
          >
            <div className="max-w-7xl mx-auto px-6" style={{ paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'oklch(22% 0.015 40)',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
