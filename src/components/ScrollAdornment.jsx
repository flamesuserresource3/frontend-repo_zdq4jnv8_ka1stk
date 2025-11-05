import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, BadgeDollarSign, Camera, Users } from 'lucide-react';

// A floating motif that follows scroll and swaps icon based on the section in view
// Sections expected: what, sponsors, highlights, committees
const sectionMap = [
  { id: 'what', icon: Star, color: 'text-amber-700', ring: 'ring-amber-600/30 bg-amber-200/60' },
  { id: 'sponsors', icon: BadgeDollarSign, color: 'text-emerald-700', ring: 'ring-emerald-600/30 bg-emerald-200/60' },
  { id: 'highlights', icon: Camera, color: 'text-indigo-700', ring: 'ring-indigo-600/30 bg-indigo-200/60' },
  { id: 'committees', icon: Users, color: 'text-rose-700', ring: 'ring-rose-600/30 bg-rose-200/60' },
];

const ScrollAdornment = () => {
  const { scrollY } = useScroll();
  const [active, setActive] = useState(sectionMap[0]);
  const y = useTransform(scrollY, (v) => v * 0.08); // subtle parallax drift

  useEffect(() => {
    const observers = [];
    sectionMap.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(s);
            }
          });
        },
        { root: null, threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const Icon = active.icon;

  return (
    <motion.div
      aria-hidden
      style={{ y }}
      className="pointer-events-none fixed right-5 sm:right-8 top-1/3 z-40"
    >
      <div className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full backdrop-blur-md border border-black/5 shadow-xl flex items-center justify-center ${active.ring}`}>
        <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${active.color}`} />
      </div>
    </motion.div>
  );
};

export default ScrollAdornment;
