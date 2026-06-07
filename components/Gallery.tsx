'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=900&q=80', alt: 'Restaurant atmosphere', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=80', alt: 'Wine selection', span: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1552566626-52f8b828a9b6?auto=format&fit=crop&w=700&q=80', alt: 'Table setting', span: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=80', alt: 'Cocktail hour', span: '' },
  { id: 5, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', alt: 'Main course plating', span: 'col-span-2' },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="gallery"
      ref={ref}
      style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'oklch(14% 0.015 40)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div style={{ marginBottom: '3rem' }}>
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
              marginBottom: '0.75rem',
            }}
          >
            The Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 5vw, 72px)',
              color: 'oklch(94% 0.009 78)',
              lineHeight: 1,
            }}
          >
            A table worth remembering
          </motion.h2>
        </div>

        {/* Mosaic grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto',
            gap: '4px',
          }}
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className={img.span}
              style={{ position: 'relative', aspectRatio: img.span.includes('col-span-2') && img.span.includes('row-span-2') ? '1/1' : img.span.includes('col-span-2') ? '2/1' : '1/1', overflow: 'hidden' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
                className="hover:scale-105"
              />
              {/* Subtle overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'oklch(14% 0.015 40 / 0.15)',
                  transition: 'opacity 0.3s',
                }}
                className="hover:opacity-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
