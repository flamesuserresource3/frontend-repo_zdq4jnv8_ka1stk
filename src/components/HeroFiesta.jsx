import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Ship, Map, ScrollText } from 'lucide-react';
import { useRef } from 'react';

export default function HeroFiesta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  const handleDiscover = () => {
    const el = document.getElementById('what');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Ancient parchment background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-200" />
        <div className="absolute inset-0 opacity-50 mix-blend-multiply" style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(120,53,15,0.12) 0 200px, transparent 220px), radial-gradient(circle at 80% 30%, rgba(146,64,14,0.12) 0 220px, transparent 240px), radial-gradient(circle at 40% 80%, rgba(120,53,15,0.1) 0 180px, transparent 200px)'
        }} />
      </motion.div>

      {/* Moving ancient props */}
      <motion.div style={{ y: midY }} className="absolute left-6 top-10 text-amber-800/70">
        <Compass size={64} className="animate-spin-slow" />
      </motion.div>
      <motion.div style={{ y: midY }} className="absolute right-8 top-24 text-amber-900/60">
        <Map size={56} />
      </motion.div>
      <motion.div style={{ y: fgY }} className="absolute -left-10 bottom-12 text-amber-900/70">
        <Ship size={80} className="-rotate-6" />
      </motion.div>
      <motion.div style={{ y: fgY }} className="absolute right-10 bottom-24 text-amber-800/60">
        <ScrollText size={72} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm md:text-base tracking-widest uppercase text-amber-800/80">The Dawn of Ideas • Ancient Era</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-amber-950">
            Where Business Booms, Communities Bloom, and Sustainability Grows Green.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-amber-900/90">
            Welcome to FIESTA 2k25 — Thakur Polytechnic’s Entrepreneurship & Sustainability Fest.
          </p>
          <p className="mt-2 text-base md:text-lg text-amber-900/80">Jan 29–30, 2025 • Thakur Polytechnic</p>

          <div className="mt-8">
            <button
              onClick={handleDiscover}
              className="inline-flex items-center gap-2 rounded-full bg-amber-900 px-6 py-3 text-amber-50 hover:bg-amber-800 transition shadow-lg shadow-amber-900/20"
            >
              Discover Fiesta
            </button>
          </div>
        </div>
      </div>

      {/* subtle grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-20" style={{
        backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\' /></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.08\'/></svg>")'
      }} />

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
