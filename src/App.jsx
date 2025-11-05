import { useEffect } from 'react';
import HeroFiesta from './components/HeroFiesta';
import ParallaxSection from './components/ParallaxSection';
import SponsorsCarousel from './components/SponsorsCarousel';
import CommitteesGrid from './components/CommitteesGrid';
import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Leaf, Play } from 'lucide-react';

export default function App() {
  // enable smooth scroll behavior globally for in-page anchors
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = 'smooth';
    return () => { html.style.scrollBehavior = prev; };
  }, []);

  return (
    <div className="min-h-screen w-full font-sans bg-black">
      {/* HERO – Ancient Era */}
      <HeroFiesta />

      {/* WHAT IS FIESTA – Medieval */}
      <ParallaxSection
        id="what"
        era="medieval"
        title="What is Fiesta?"
        subtitle="A platform uniting business, sustainability, and innovation — blending creativity, community, and growth."
      >
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4">
          <IconCard icon={<Lightbulb />} label="Innovation" />
          <IconCard icon={<Handshake />} label="Teamwork" />
          <IconCard icon={<Leaf />} label="Ecology" />
        </div>
      </ParallaxSection>

      {/* SPONSORS – Industrial */}
      <ParallaxSection
        id="sponsors"
        era="industrial"
        title="Our Partners in Innovation"
        subtitle="Celebrating the brands powering ideas into impact."
      >
        <SponsorsCarousel />
      </ParallaxSection>

      {/* HIGHLIGHTS – Digital */}
      <ParallaxSection
        id="highlights"
        era="digital"
        title="Relive Fiesta 2k24"
        subtitle="A glimpse of last year’s workshops, fairs, and activities."
      >
        <div className="relative mx-auto max-w-5xl">
          <SimpleSlider />
        </div>
      </ParallaxSection>

      {/* COMMITTEES – Future */}
      <ParallaxSection
        id="committees"
        era="future"
        title="Our Committees"
        subtitle="Meet the councils shaping entrepreneurship, service, and sustainability."
      >
        <CommitteesGrid />
      </ParallaxSection>

      <SiteFooter />
    </div>
  );
}

function IconCard({ icon, label }) {
  return (
    <div className="rounded-2xl bg-white/60 backdrop-blur-sm border border-stone-300 p-6 text-stone-900 flex flex-col items-center gap-3">
      <div className="text-stone-800">{icon}</div>
      <div className="text-sm font-semibold tracking-wide">{label}</div>
    </div>
  );
}

function SimpleSlider() {
  const slides = [
    { color: 'from-cyan-400 to-blue-600', title: 'Workshops', desc: 'Hands-on learning with industry mentors.' },
    { color: 'from-indigo-400 to-fuchsia-600', title: 'Startup Fair', desc: 'Student ventures and prototypes.' },
    { color: 'from-emerald-400 to-teal-600', title: 'Activities', desc: 'Challenges, networking, and more.' },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-2xl">
      <motion.div
        className="flex"
        initial={{ x: '0%' }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {[...slides, ...slides].map((s, i) => (
          <div key={i} className={`flex-none w-full sm:w-[640px] h-64 sm:h-80 p-6 bg-gradient-to-br ${s.color} text-white` }>
            <div className="h-full w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <Play size={18} className="opacity-90" />
                <span className="tracking-widest text-xs uppercase opacity-90">Highlight</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <p className="text-sm mt-1 opacity-90">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/40 to-transparent" />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-black text-white/70 text-center py-6 text-sm">
      © {new Date().getFullYear()} Fiesta 2k25 • Thakur Polytechnic. All rights reserved.
    </footer>
  );
}
