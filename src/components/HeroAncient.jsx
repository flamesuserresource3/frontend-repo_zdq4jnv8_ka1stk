import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass } from 'lucide-react';

const StarField = () => {
  // decorative dots that parallax subtly
  const stars = Array.from({ length: 60 }).map((_, i) => ({
    key: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: 0.25 + Math.random() * 0.5,
  }));
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.key}
          className="absolute rounded-full bg-amber-200/60"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, opacity: s.opacity }}
        />)
      )}
    </div>
  );
};

const HeroAncient = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax transforms
  const yBack = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -340]);
  const rotateCompass = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scaleCompass = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Ancient parchment ambiance */}
      <motion.div
        style={{ y: yBack }}
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-amber-50 via-amber-100 to-amber-50"
      />

      {/* Subtle radial vignette */}
      <motion.div
        style={{ y: yBack }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(80% 70% at 50% 40%, rgba(120, 53, 15, 0.18), transparent 60%)'
        }} />
      </motion.div>

      {/* Decorative star/dust field */}
      <motion.div style={{ y: yMid }} className="pointer-events-none">
        <StarField />
      </motion.div>

      {/* Concentric navigation rings */}
      <motion.svg
        aria-hidden
        style={{ y: yMid }}
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="ring" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="rgba(120,53,15,0)" />
            <stop offset="85%" stopColor="rgba(120,53,15,0.25)" />
            <stop offset="100%" stopColor="rgba(120,53,15,0)" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="url(#ring)" />
        <circle cx="50" cy="50" r="32" fill="url(#ring)" />
        <circle cx="50" cy="50" r="22" fill="url(#ring)" />
      </motion.svg>

      {/* Foreground content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <motion.div
            style={{ y: yFront, scale: scaleCompass, rotate: rotateCompass }}
            className="mx-auto mb-8 flex items-center justify-center w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-amber-200/60 ring-2 ring-amber-700/30 shadow-xl"
          >
            <Compass className="w-24 h-24 sm:w-28 sm:h-28 text-amber-800" />
          </motion.div>
          <motion.h1
            style={{ y: yFront }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-amber-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]"
          >
            Ancient Origins of Enterprise
          </motion.h1>
          <motion.p
            style={{ y: yFront }}
            className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-amber-900/80"
          >
            From compass and caravan to market and mint — chart the journey of entrepreneurship through the ages.
          </motion.p>
        </div>
      </div>

      {/* Bottom cue */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center">
        <div className="text-xs text-amber-900/70 bg-amber-200/60 px-3 py-1 rounded-full border border-amber-700/20">
          Scroll to explore eras
        </div>
      </div>
    </section>
  );
};

export default HeroAncient;
