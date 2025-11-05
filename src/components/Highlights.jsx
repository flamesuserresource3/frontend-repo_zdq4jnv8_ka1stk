import React from 'react';

const items = [
  {
    title: 'Drift Showcase',
    desc: 'Smoke, speed, and surgical control on the corners.',
    color: 'from-slate-900 via-slate-800 to-slate-900',
  },
  {
    title: 'Pit Crew Challenge',
    desc: 'Precision teamwork under the clock.',
    color: 'from-zinc-900 via-neutral-800 to-zinc-900',
  },
  {
    title: 'Esports Arena',
    desc: 'Digital racing thrills with pro-level setups.',
    color: 'from-indigo-900 via-violet-800 to-fuchsia-900',
  },
  {
    title: 'Main Stage',
    desc: 'Headliners lighting up the night.',
    color: 'from-rose-900 via-red-800 to-orange-900',
  },
];

const Highlights = () => {
  return (
    <section id="highlights" className="min-h-screen snap-start flex items-center w-full bg-neutral-950">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Last Year’s Highlights</h2>
          <p className="mt-4 text-lg text-gray-300">
            A glimpse of the momentum we’re building — louder, faster, bigger every year.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((card) => (
            <div
              key={card.title}
              className={`group relative rounded-2xl p-[2px] bg-gradient-to-br ${card.color} shadow-xl`}
            >
              <div className="relative h-56 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                  <p className="mt-1 text-sm text-white/80">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
