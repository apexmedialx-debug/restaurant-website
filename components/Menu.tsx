'use client';

import Image from 'next/image';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

const DISHES = [
  {
    id: 1,
    num: '01',
    name: 'Bacalhau à Brás',
    desc: 'Shredded salt cod with straw potatoes, beaten egg, black olive, and fresh parsley. The dish Lisbon grew up on.',
    price: '£24',
    tag: 'Signature',
  },
  {
    id: 2,
    num: '02',
    name: 'Cataplana de Marisco',
    desc: 'Clams, tiger prawns, and chouriço slow-cooked in a copper cataplana with tomato, dry white wine, and coriander.',
    price: '£32',
    tag: "Chef's choice",
  },
  {
    id: 3,
    num: '03',
    name: 'Presa de Porco Preto',
    desc: 'Ibérico pork shoulder, migas de pão, roasted garlic, and pickled samphire sourced from the Sado estuary.',
    price: '£28',
    tag: 'Seasonal',
  },
  {
    id: 4,
    num: '04',
    name: 'Pastéis de Nata',
    desc: 'Our custard tarts — hand-rolled butter-pastry shells, a burnished crème brûlée centre, dusted with cinnamon. Baked at noon.',
    price: '£8',
    tag: 'Dessert',
  },
  {
    id: 5,
    num: '05',
    name: 'Açorda de Gambas',
    desc: 'Rustic bread broth enriched with garlic, eggs, fresh coriander, and plump river prawns. Humble and extraordinary.',
    price: '£22',
    tag: 'Traditional',
  },
];

function DishRow({ dish, index }: { dish: (typeof DISHES)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '2.5rem 0',
        paddingLeft: hovered ? '1.25rem' : '0',
        borderBottom: '1px solid oklch(10% 0.015 40 / 0.1)',
        cursor: 'default',
        transition: 'padding-left 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Left gold accent bar */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'absolute',
          left: 0,
          top: '2.5rem',
          bottom: '2.5rem',
          width: '2px',
          background: 'oklch(68% 0.1 68)',
          transformOrigin: 'bottom',
        }}
      />

      {/* Number + tag row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.25em',
            color: 'oklch(68% 0.1 68)',
          }}
        >
          {dish.num}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'oklch(74% 0.008 65)',
            border: '1px solid oklch(74% 0.008 65 / 0.4)',
            padding: '2px 8px',
          }}
        >
          {dish.tag}
        </span>
      </div>

      {/* Name + price */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.6rem', gap: '1rem' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(22px, 3vw, 34px)',
            color: hovered ? 'oklch(30% 0.1 15)' : 'oklch(10% 0.015 40)',
            margin: 0,
            lineHeight: 1,
            transition: 'color 0.3s',
          }}
        >
          {dish.name}
        </h3>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            color: 'oklch(68% 0.1 68)',
            flexShrink: 0,
          }}
        >
          {dish.price}
        </span>
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '14px',
          lineHeight: 1.72,
          color: 'oklch(52% 0.012 60)',
          maxWidth: '500px',
          margin: 0,
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
    <section id="menu" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'stretch' }}>

        {/* Sticky image column — desktop only */}
        <div
          className="hidden lg:block"
          style={{ width: '44%', flexShrink: 0, position: 'sticky', top: 0, height: '100dvh', overflow: 'hidden' }}
        >
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
            alt="ALMA signature dish"
            fill
            sizes="44vw"
            style={{ objectFit: 'cover' }}
          />
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, oklch(7% 0.014 35 / 0.85) 0%, oklch(7% 0.014 35 / 0.3) 60%, oklch(7% 0.014 35 / 0.1) 100%)',
            }}
          />
          {/* Section label inside image */}
          <div
            ref={headingRef}
            style={{ position: 'absolute', bottom: '3.5rem', left: '3rem', right: '3rem' }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.32em',
                textTransform: 'uppercase',
                color: 'oklch(68% 0.1 68)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              Seasonal Menu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 4vw, 56px)',
                color: 'oklch(97% 0.007 75)',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              From the<br />Kitchen
            </motion.h2>
          </div>
        </div>

        {/* Menu list column */}
        <div style={{ flex: 1, background: 'oklch(97% 0.007 75)' }}>
          {/* Mobile heading */}
          <div
            className="lg:hidden"
            style={{ padding: '5rem 1.5rem 2rem', borderBottom: '1px solid oklch(10% 0.015 40 / 0.1)' }}
          >
            <span
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
              Seasonal Menu
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontStyle: 'italic',
                fontSize: 'clamp(36px, 8vw, 56px)',
                color: 'oklch(10% 0.015 40)',
                margin: 0,
              }}
            >
              From the Kitchen
            </h2>
          </div>

          {/* Dishes */}
          <div style={{ padding: '3rem 3.5rem 6rem' }} className="lg:pt-[7rem] lg:pb-[8rem] lg:pl-[4rem] lg:pr-[4rem]">
            {DISHES.map((d, i) => (
              <DishRow key={d.id} dish={d} index={i} />
            ))}

            {/* Full menu link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ marginTop: '3rem' }}
            >
              <a
                href="#"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 300,
                  fontSize: '11px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'oklch(30% 0.1 15)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span style={{ width: '24px', height: '1px', background: 'oklch(68% 0.1 68)', display: 'block' }} />
                View Complete Menu
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
