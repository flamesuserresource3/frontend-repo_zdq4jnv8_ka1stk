import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Ship, Map, ScrollText } from 'lucide-react';
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroFiesta() {
  const ref = useRef(null);
  // Parallax tied to the section so props scroll with the page
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const midY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const fgY = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  const handleDiscover = () => {
    const el = document.getElementById('what');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Spline cover background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Warm overlay to blend with brand (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-amber-200/40" aria-hidden />

      {/* Parallax decorative props (scroll with page) */}
      <motion.div style={{ y: bgY }} className="absolute left-6 top-10 text-amber-900/60" aria-hidden>
        <Compass size={64} className="animate-spin-slow" />
      </motion.div>
      <motion.div style={{ y: midY }} className="absolute right-8 top-24 text-amber-900/60" aria-hidden>
        <Map size={56} />
      </motion.div>
      <motion.div style={{ y: fgY }} className="absolute -left-10 bottom-12 text-amber-900/70" aria-hidden>
        <Ship size={80} className="-rotate-6" />
      </motion.div>
      <motion.div style={{ y: fgY }} className="absolute right-10 bottom-24 text-amber-900/60" aria-hidden>
        <ScrollText size={72} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm md:text-base tracking-widest uppercase text-amber-900/80">Thakur Polytechnic • Jan 29–30, 2025</p>
          <h1 className="mt-3 text-5xl md:text-7xl font-extrabold text-amber-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            FIESTA
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-amber-900/90 max-w-3xl mx-auto">
            Where Business Booms, Communities Bloom, and Sustainability Grows Green.
          </p>

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

      {/* subtle grain overlay (non-blocking) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'2\\' stitchTiles=\\'stitch\\' /></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.08\\'/></svg>')",
        }}
      />

      <style>{`
        .animate-spin-slow { animation: spin 18s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
