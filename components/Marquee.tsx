'use client';

import { motion } from 'motion/react';

const CONTENT = 'Est. 2008  ·  Alfama, Lisboa  ·  Fine Portuguese Cuisine  ·  Reservas Abertas  ·  Award-Winning Kitchen  ·  ';

export default function Marquee() {
  const doubled = CONTENT + CONTENT;

  return (
    <div
      style={{
        overflow: 'hidden',
        background: 'oklch(10% 0.015 40)',
        paddingTop: '16px',
        paddingBottom: '16px',
        borderTop: '1px solid oklch(97% 0.007 75 / 0.06)',
        borderBottom: '1px solid oklch(97% 0.007 75 / 0.06)',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
        style={{ display: 'flex', width: 'max-content', willChange: 'transform' }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'oklch(68% 0.1 68)',
            whiteSpace: 'nowrap',
          }}
        >
          {doubled}
        </span>
      </motion.div>
    </div>
  );
}
