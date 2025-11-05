import React from 'react';

const EraSection = ({ id, era, tagline, points = [], bg = '' }) => {
  return (
    <section
      id={id}
      className={`min-h-screen scroll-mt-24 snap-start w-full relative flex items-center ${bg}`}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.6),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 py-24">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {era}
          </h2>
          <p className="mt-3 text-lg md:text-xl text-gray-700 dark:text-gray-200">
            {tagline}
          </p>
          {points.length > 0 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-5">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EraSection;
