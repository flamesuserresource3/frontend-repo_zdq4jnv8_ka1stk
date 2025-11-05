import React from 'react';

const Section = ({ id, title, subtitle, children }) => {
  return (
    <section id={id} className="min-h-screen snap-start flex items-center justify-center w-full">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
