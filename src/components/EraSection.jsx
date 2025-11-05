import React from 'react';
import { motion } from 'framer-motion';

const bgByEra = {
  ancient: 'from-amber-100 via-amber-50 to-amber-100',
  renaissance: 'from-rose-100 via-amber-50 to-rose-100',
  industrial: 'from-stone-200 via-stone-100 to-stone-200',
  digital: 'from-sky-100 via-indigo-50 to-sky-100',
  future: 'from-emerald-100 via-teal-50 to-emerald-100',
};

const accentByEra = {
  ancient: 'text-amber-900',
  renaissance: 'text-rose-900',
  industrial: 'text-stone-900',
  digital: 'text-indigo-900',
  future: 'text-emerald-900',
};

const EraSection = ({ id, era, title, points }) => {
  const bg = bgByEra[era] || 'from-neutral-100 via-white to-neutral-100';
  const accent = accentByEra[era] || 'text-neutral-900';

  return (
    <section id={id} className={`relative h-screen w-full overflow-hidden bg-gradient-to-b ${bg}`}>
      {/* soft vignette */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(90% 70% at 50% 40%, rgba(0,0,0,0.06), transparent 60%)'
      }} />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 w-full">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`text-3xl sm:text-5xl font-extrabold ${accent}`}
          >
            {title}
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {points.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-xl bg-white/70 backdrop-blur border border-black/5 p-5 shadow-sm"
              >
                <h3 className="font-semibold text-neutral-900">{p.heading}</h3>
                <p className="mt-2 text-sm text-neutral-700">{p.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EraSection;
