'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const DISHES = [
  {
    id: 1,
    name: 'Bacalhau à Brás',
    desc: 'Shredded salt cod, straw potatoes, egg, black olive, parsley. The dish Lisbon grew up on.',
    price: '£24',
    tag: 'Signature',
    src: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 2,
    name: 'Cataplana de Marisco',
    desc: 'Clams, prawns, and chorizo slow-cooked in a copper cataplana with tomato, white wine, and coriander.',
    price: '£32',
    tag: 'Chef\'s choice',
    src: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 3,
    name: 'Presa de Porco Preto',
    desc: 'Ibérico pork shoulder, migas de pão, roasted garlic, and pickled samphire from the Sado estuary.',
    price: '£28',
    tag: 'Seasonal',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    name: 'Pastéis de Nata',
    desc: 'Our custard tarts: butter-pastry shells, crème brûlée centre, dusted with cinnamon. Baked at noon.',
    price: '£8',
    tag: 'Dessert',
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
  },
];

function DishCard({ dish, index }: { dish: (typeof DISHES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '3/2', overflow: 'hidden', marginBottom: '1.5rem' }}>
        <Image
          src={dish.src}
          alt={dish.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="hover:scale-105"
        />
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'oklch(97% 0.007 75)',
            background: 'oklch(32% 0.095 15)',
            padding: '4px 10px',
          }}
        >
          {dish.tag}
        </span>
      </div>

      {/* Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: '22px',
            color: 'oklch(14% 0.015 40)',
          }}
        >
          {dish.name}
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '20px',
            color: 'oklch(32% 0.095 15)',
          }}
        >
          {dish.price}
        </span>
      </div>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          lineHeight: 1.65,
          color: 'oklch(55% 0.012 60)',
        }}
      >
        {dish.desc}
      </p>
    </motion.div>
  );
}

export default function Menu() {
  const headingRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section id="menu" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '4rem', borderBottom: '1px solid oklch(14% 0.015 40 / 0.12)', paddingBottom: '1.5rem' }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(36px, 6vw, 80px)',
              lineHeight: 1,
              color: 'oklch(14% 0.015 40)',
            }}
          >
            From the Kitchen
          </motion.h2>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'oklch(55% 0.012 60)',
            }}
          >
            Seasonal menu
          </motion.span>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '4rem 3rem',
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {DISHES.map((d, i) => (
            <DishCard key={d.id} dish={d} index={i} />
          ))}
        </div>

        {/* Full menu CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'oklch(32% 0.095 15)',
              textDecoration: 'none',
              borderBottom: '1px solid oklch(32% 0.095 15)',
              paddingBottom: '2px',
              transition: 'opacity 0.2s',
            }}
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
