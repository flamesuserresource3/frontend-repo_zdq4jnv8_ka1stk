import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ScrollText, Cog, Factory, CircuitBoard, Cpu, Trees, Users, Leaf } from 'lucide-react';

/*
  Generic full-screen parallax section.
  Props:
  - id: string
  - era: 'medieval' | 'industrial' | 'digital' | 'future'
  - title: string
  - subtitle?: string
  - children?: ReactNode (content area)
*/
export default function ParallaxSection({ id, era, title, subtitle, children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const decoY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  const theme = getTheme(era);

  return (
    <section id={id} ref={ref} className={`relative h-screen w-full overflow-hidden ${theme.text}`}>      
      {/* background gradient */}
      <motion.div style={{ y: bgY }} className={`absolute inset-0 ${theme.bg}`} aria-hidden />

      {/* decorative era props */}
      <motion.div style={{ y: decoY }} className="absolute inset-0 pointer-events-none" aria-hidden>
        {theme.decor}
      </motion.div>

      {/* content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-sm md:text-base tracking-widest uppercase opacity-80">{theme.label}</p>
          <h2 className={`mt-2 text-3xl md:text-5xl font-extrabold ${theme.titleColor}`}>{title}</h2>
          {subtitle && <p className="mt-4 text-base md:text-lg opacity-90">{subtitle}</p>}

          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

function getTheme(era) {
  switch (era) {
    case 'medieval':
      return {
        label: 'The Guild Era • Medieval',
        bg: 'bg-gradient-to-b from-stone-300 via-amber-100 to-stone-200',
        text: 'text-stone-900',
        titleColor: 'text-stone-950',
        decor: (
          <div className="w-full h-full">
            <div className="absolute left-10 top-16 text-stone-700/50"><ScrollText size={72} /></div>
            <div className="absolute right-14 bottom-20 text-stone-700/40"><Leaf size={80} /></div>
            <div className="absolute right-8 top-24 text-stone-700/40"><Users size={64} /></div>
            <div className="absolute left-1/3 bottom-10 text-stone-700/30"><Trees size={96} /></div>
          </div>
        )
      };
    case 'industrial':
      return {
        label: 'The Industrial Era • Steam & Innovation',
        bg: 'bg-gradient-to-b from-zinc-900 via-zinc-800 to-amber-900',
        text: 'text-amber-100',
        titleColor: 'text-amber-200',
        decor: (
          <div className="w-full h-full">
            <div className="absolute left-8 top-10 text-amber-300/30 animate-spin-slower"><Cog size={80} /></div>
            <div className="absolute right-16 top-24 text-amber-400/40 animate-spin-slowest"><Cog size={56} /></div>
            <div className="absolute left-1/2 bottom-16 text-amber-200/20"><Factory size={96} /></div>
          </div>
        )
      };
    case 'digital':
      return {
        label: 'The Digital Era • Tech',
        bg: 'bg-gradient-to-b from-indigo-900 via-sky-900 to-cyan-900',
        text: 'text-cyan-50',
        titleColor: 'text-cyan-100',
        decor: (
          <div className="w-full h-full">
            <div className="absolute left-8 top-10 text-cyan-200/30"><CircuitBoard size={72} /></div>
            <div className="absolute right-10 bottom-16 text-cyan-300/30"><Cpu size={64} /></div>
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0 2px, transparent 3px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.22) 0 2px, transparent 3px)'
            }} />
          </div>
        )
      };
    case 'future':
      return {
        label: 'The Future Era • Beyond',
        bg: 'bg-gradient-to-b from-fuchsia-900 via-violet-900 to-slate-900',
        text: 'text-fuchsia-50',
        titleColor: 'text-fuchsia-100',
        decor: (
          <div className="w-full h-full">
            <div className="absolute left-12 top-14 w-40 h-40 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20" />
            <div className="absolute right-16 bottom-20 w-56 h-56 rounded-full bg-fuchsia-400/20 blur-2xl" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-2xl bg-cyan-400/10 backdrop-blur-xl border border-white/10" />
          </div>
        )
      };
    default:
      return {
        label: '', bg: 'bg-white', text: 'text-black', titleColor: 'text-black', decor: null
      };
  }
}

// local animations
// We scope keyframes here to avoid global pollution
if (typeof document !== 'undefined' && !document.getElementById('parallax-keyframes')) {
  const style = document.createElement('style');
  style.id = 'parallax-keyframes';
  style.innerHTML = `
    .animate-spin-slower { animation: spin 24s linear infinite; }
    .animate-spin-slowest { animation: spin 40s linear infinite; }
    @keyframes spin { from { transform: rotate(0deg);} to { transform: rotate(360deg);} }
  `;
  document.head.appendChild(style);
}
