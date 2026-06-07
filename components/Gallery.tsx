'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=1000&q=85',
    alt: 'Restaurant atmosphere',
    caption: 'The dining room, Alfama',
    gridColumn: '1 / 3',
    gridRow: '1 / 3',
    aspectRatio: '1/1',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=700&q=85',
    alt: 'Wine selection',
    caption: 'Natural wines from the Alentejo',
    gridColumn: '3',
    gridRow: '1',
    aspectRatio: '1/1',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828a9b6?auto=format&fit=crop&w=700&q=85',
    alt: 'Table setting',
    caption: 'A table set for the evening',
    gridColumn: '3',
    gridRow: '2',
    aspectRatio: '1/1',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=85',
    alt: 'Bar detail',
    caption: 'Handcrafted cocktails',
    gridColumn: '1',
    gridRow: '3',
    aspectRatio: '1/1',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85',
    alt: 'Cataplana',
    caption: 'Cataplana de Marisco',
    gridColumn: '2 / 4',
    gridRow: '3',
    aspectRatio: '2/1',
  },
];

function GalleryItem({ img, delay }: { img: (typeof IMAGES)[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
      animate={inView ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: img.gridColumn,
        gridRow: img.gridRow,
        aspectRatio: img.aspectRatio,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        style={{
          objectFit: 'cover',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      {/* Hover caption overlay */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, oklch(7% 0.014 35 / 0.78) 0%, transparent 55%)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1.5rem',
        }}
      >
        <motion.span
          animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(15px, 2vw, 20px)',
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
      style={{ paddingTop: '8rem', paddingBottom: '8rem', background: 'oklch(10% 0.015 40)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '3rem',
            borderBottom: '1px solid oklch(97% 0.007 75 / 0.08)',
            paddingBottom: '2rem',
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
                fontWeight: 300,
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
              — The Guardian, 2023
            </cite>
          </motion.blockquote>
        </div>

        {/* Mosaic grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto auto',
            gap: '4px',
          }}
        >
          {IMAGES.map((img, i) => (
            <GalleryItem key={img.id} img={img} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
