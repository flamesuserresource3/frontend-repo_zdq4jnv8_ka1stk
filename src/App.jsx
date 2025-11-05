import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import EraSection from './components/EraSection';

function App() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white dark:bg-neutral-950">
      <NavBar />
      <Hero />

      <EraSection
        id="events"
        era="Ancient Era — Origins of Trade"
        tagline="Bazaars, barter, and the first entrepreneurial deals that shaped civilizations."
        bg="bg-gradient-to-br from-amber-50 via-rose-50 to-amber-100 dark:from-stone-900 dark:via-amber-950 dark:to-stone-900"
        points={[
          { title: 'Marketplaces', desc: 'Agoras and bazaars where trust, reputation, and storytelling sold goods.' },
          { title: 'Trade Networks', desc: 'Silk Road routes enabling cross-border commerce and innovation.' },
        ]}
      />

      <EraSection
        id="renaissance"
        era="Renaissance — Capital & Discovery"
        tagline="Guilds, patronage, and maritime ventures power new industries and ideas."
        bg="bg-gradient-to-br from-amber-100 via-sky-100 to-emerald-100 dark:from-slate-900 dark:via-indigo-950 dark:to-emerald-950"
        points={[
          { title: 'Guild Innovation', desc: 'Craft standards, apprenticeships, and brand-like seals of quality.' },
          { title: 'Risk Capital', desc: 'Early venture financing for voyages, sharing risk and reward.' },
        ]}
      />

      <EraSection
        id="industrial"
        era="Industrial Revolution — Scale & Systems"
        tagline="Factories, rail, and corporations bring process, scale, and distribution."
        bg="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-stone-900"
        points={[
          { title: 'Mass Production', desc: 'Assembly lines and standardization drive costs down and access up.' },
          { title: 'Infrastructure', desc: 'Rail, telegraph, and global shipping expand entrepreneurial reach.' },
        ]}
      />

      <EraSection
        id="digital"
        era="Digital Age — Software Scale"
        tagline="Internet, platforms, and data create new moats and blitzscaling playbooks."
        bg="bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 dark:from-slate-950 dark:via-slate-900 dark:to-fuchsia-950"
        points={[
          { title: 'Platforms', desc: 'Marketplaces and networks unlock compounding value and reach.' },
          { title: 'Cloud & Mobile', desc: 'Zero-marginal-cost distribution and global-by-default products.' },
        ]}
      />

      <EraSection
        id="future"
        era="Frontier — AI, Space, Climate"
        tagline="Mission-driven founders building at the edge of what’s possible." 
        bg="bg-gradient-to-br from-emerald-50 via-cyan-50 to-lime-50 dark:from-black dark:via-cyan-950 dark:to-emerald-950"
        points={[
          { title: 'Intelligent Products', desc: 'AI-native experiences that learn and adapt in real time.' },
          { title: 'Hard Tech', desc: 'Deep tech, new materials, and sustainable systems at scale.' },
        ]}
      />
    </div>
  );
}

export default App;
