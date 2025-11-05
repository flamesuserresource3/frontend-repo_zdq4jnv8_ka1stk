import React from 'react';

const sponsors = [
  { name: 'Velocity Motors', color: 'from-blue-500 to-cyan-400' },
  { name: 'Ignite Energy', color: 'from-orange-500 to-amber-400' },
  { name: 'TrackPro', color: 'from-rose-500 to-pink-400' },
  { name: 'Apex Labs', color: 'from-emerald-500 to-teal-400' },
  { name: 'Torque Media', color: 'from-violet-500 to-fuchsia-400' },
  { name: 'DriveX', color: 'from-sky-500 to-indigo-400' },
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="min-h-screen snap-start flex items-center w-full bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Our Sponsors</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Powered by industry leaders who share our passion for performance and innovation.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${s.color} p-[2px] shadow-lg`}
            >
              <div className="h-full w-full rounded-xl bg-white/90 dark:bg-neutral-900/80 backdrop-blur flex items-center justify-center">
                <span className="text-sm md:text-base font-semibold text-gray-900 dark:text-white">
                  {s.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
