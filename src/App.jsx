import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import Sponsors from './components/Sponsors';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white dark:bg-neutral-950">
      {/* Hero */}
      <Hero />

      {/* What is Fiesta */}
      <Section
        id="about"
        title="What is Fiesta?"
        subtitle="A festival of speed, sport, and innovation — where competition meets community."
      >
        <div className="mx-auto max-w-3xl text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
          <p>
            Fiesta is a high-energy showcase blending automotive culture, athletics, and corporate excellence. It’s a
            platform where brands connect with audiences, teams push their limits, and communities come together to
            celebrate performance. From roaring engines to esports arenas and live stages, Fiesta is built for momentum.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { label: 'Racing & Demos', desc: 'Track runs, drift showcases, and technical displays.' },
              { label: 'Competitions', desc: 'Esports, pit crew sprints, and endurance challenges.' },
              { label: 'Experiences', desc: 'Brand zones, product launches, and interactive tech.' },
            ].map((b) => (
              <div key={b.label} className="rounded-xl border border-gray-200 dark:border-white/10 p-5">
                <h4 className="font-semibold text-gray-900 dark:text-white">{b.label}</h4>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sponsors */}
      <Sponsors />

      {/* Last year's highlights */}
      <Highlights />

      {/* Committees */}
      <Section id="committees" title="Our Committees" subtitle="Driven by dedicated teams that make it all happen.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: 'Operations', desc: 'Logistics, venue, and on-ground execution.' },
            { name: 'Sponsorships', desc: 'Brand partnerships and strategic alliances.' },
            { name: 'Marketing', desc: 'Creative, content, and community engagement.' },
            { name: 'Tech & Production', desc: 'Timing systems, stage, and broadcast.' },
            { name: 'Athletics', desc: 'Competitions, judging, and athlete relations.' },
            { name: 'Guest Experience', desc: 'Registrations, hospitality, and safety.' },
            { name: 'Esports', desc: 'Sim racing, tournaments, and streaming.' },
            { name: 'Design', desc: 'Identity, signage, and visual systems.' },
          ].map((c) => (
            <div key={c.name} className="rounded-xl border border-gray-200 dark:border-white/10 p-5 bg-white dark:bg-neutral-900">
              <h4 className="font-semibold text-gray-900 dark:text-white">{c.name}</h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default App;
