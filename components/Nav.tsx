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
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const textCol = scrolled ? 'oklch(20% 0.015 40)' : 'oklch(94% 0.009 78)';
  const hoverCol = scrolled ? 'oklch(30% 0.1 15)' : 'oklch(97% 0.007 75)';
  const lineCol  = scrolled ? 'oklch(68% 0.1 68)' : 'oklch(68% 0.1 68)';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 0.5s, backdrop-filter 0.5s, border-color 0.5s',
        background: scrolled ? 'oklch(97% 0.007 75 / 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(10% 0.015 40 / 0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1px' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: '26px',
                fontStyle: 'italic',
                letterSpacing: '0.06em',
                color: scrolled ? 'oklch(10% 0.015 40)' : 'oklch(97% 0.007 75)',
                transition: 'color 0.5s',
                lineHeight: 1,
              }}
            >
              Alma
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '8px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: scrolled ? 'oklch(68% 0.1 68)' : 'oklch(68% 0.1 68)',
                transition: 'color 0.5s',
              }}
            >
              Lisboa
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex" style={{ gap: '2.5rem', alignItems: 'center' }}>
            {LINKS.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} textCol={textCol} hoverCol={hoverCol} lineCol={lineCol} />
            ))}
          </nav>

          {/* Reserve CTA */}
          <a
            href="#reservations"
            className="hidden md:inline-flex"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: scrolled ? 'oklch(97% 0.007 75)' : 'oklch(97% 0.007 75)',
              background: scrolled ? 'oklch(30% 0.1 15)' : 'transparent',
              border: scrolled ? '1px solid oklch(30% 0.1 15)' : '1px solid oklch(94% 0.009 78 / 0.5)',
              padding: '11px 24px',
              textDecoration: 'none',
              transition: 'all 0.35s',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = 'oklch(10% 0.015 40)';
              el.style.borderColor = 'oklch(10% 0.015 40)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = scrolled ? 'oklch(30% 0.1 15)' : 'transparent';
              el.style.borderColor = scrolled ? 'oklch(30% 0.1 15)' : 'oklch(94% 0.009 78 / 0.5)';
            }}
          >
            Reserve
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px', display: 'flex', flexDirection: 'column', gap: '6px' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: '24px',
                  height: '1px',
                  background: scrolled ? 'oklch(10% 0.015 40)' : 'oklch(94% 0.009 78)',
                  display: 'block',
                  transition: 'transform 0.3s, opacity 0.2s, background 0.5s',
                  transform: open
                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                    : 'none'
                    : 'none',
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
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
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', background: 'oklch(97% 0.007 75)', borderBottom: '1px solid oklch(10% 0.015 40 / 0.08)' }}
          >
            <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: '1rem', paddingBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 300,
                    fontSize: '13px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'oklch(20% 0.015 40)',
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

function NavLink({ href, label, textCol, hoverCol, lineCol }: {
  href: string; label: string; textCol: string; hoverCol: string; lineCol: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 300,
        fontSize: '12px',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: hovered ? hoverCol : textCol,
        textDecoration: 'none',
        transition: 'color 0.3s',
        position: 'relative',
        paddingBottom: '4px',
        display: 'inline-block',
      }}
    >
      {label}
      <motion.span
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: lineCol,
          transformOrigin: 'left',
          display: 'block',
        }}
      />
    </a>
  );
}
