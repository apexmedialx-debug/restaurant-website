'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
    alt: 'The dining room',
    caption: 'The dining room, Alfama',
    span: '1 / 3', // col span 1-2
    rowSpan: '1 / 3', // row span 1-2 — tall
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85',
    alt: 'Natural wines',
    caption: 'Natural wines from the Alentejo',
    span: '3',
    rowSpan: '1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828a9b6?auto=format&fit=crop&w=700&q=85',
    alt: 'Evening table',
    caption: 'A table set for the evening',
    span: '3',
    rowSpan: '2',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
    alt: 'Cataplana',
    caption: 'Cataplana de Marisco',
    span: '1 / 3',
    rowSpan: '3',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=85',
    alt: 'Bar',
    caption: 'Handcrafted cocktails',
    span: '3',
    rowSpan: '3',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85',
    alt: 'Kitchen artistry',
    caption: 'From the kitchen',
    span: '1 / 3',
    rowSpan: '4',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=700&q=85',
    alt: 'Bread service',
    caption: 'House bread, house butter',
    span: '3',
    rowSpan: '4',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
    alt: 'The kitchen team',
    caption: 'Chef Mariana and her team',
    span: '1 / 4', // full width
    rowSpan: '5',
  },
];

function GalleryItem({ img, delay }: { img: (typeof IMAGES)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
      animate={inView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: img.span,
        gridRow: img.rowSpan,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        minHeight: '260px',
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: 'cover',
          transition: 'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, oklch(7% 0.014 35 / 0.82) 0%, transparent 55%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1.5rem',
        }}
      >
        <motion.span
          animate={{ y: hovered ? 0 : 10, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: 'clamp(14px, 1.8vw, 19px)',
            color: 'oklch(97% 0.007 75)',
            display: 'block',
          }}
        >
          {img.caption}
        </motion.span>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="gallery"
      ref={ref}
      style={{ paddingTop: '5rem', paddingBottom: '5rem', background: 'oklch(10% 0.015 40)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2rem',
            borderBottom: '1px solid oklch(97% 0.007 75 / 0.08)',
            paddingBottom: '1.5rem',
          }}
        >
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              The Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 400,
                fontStyle: 'italic',
                fontSize: 'clamp(30px, 5vw, 68px)',
                color: 'oklch(94% 0.009 78)',
                lineHeight: 1,
                margin: 0,
              }}
            >
              A table worth<br />remembering
            </motion.h2>
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: '17px',
              color: 'oklch(52% 0.012 60)',
              maxWidth: '260px',
              textAlign: 'right',
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            "The finest expression of Portuguese hospitality I've encountered in years."
            <cite
              style={{
                display: 'block',
                fontFamily: 'var(--font-body)',
                fontStyle: 'normal',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
                marginTop: '0.5rem',
              }}
            >
              The Guardian, 2023
            </cite>
          </motion.blockquote>
        </div>

        {/* Mosaic grid — 3 cols, explicit row heights */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: '340px 340px 300px 300px 280px',
            gap: '4px',
          }}
        >
          {IMAGES.map((img, i) => (
            <GalleryItem key={img.id} img={img} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
