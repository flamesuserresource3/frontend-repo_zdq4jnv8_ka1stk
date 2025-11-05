import React from 'react';

const NavBar = () => {
  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-neutral-900/60 rounded-full border border-black/10 dark:border-white/10 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2">
            <button
              onClick={() => goTo('hero')}
              className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Go to Home"
            >
              Home
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => goTo('events')}
                className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Go to Events"
              >
                Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
