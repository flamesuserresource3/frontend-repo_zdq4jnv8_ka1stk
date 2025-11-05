import React from 'react';

const NavBar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-center">
        <nav className="flex items-center gap-3 rounded-full bg-white/60 border border-black/5 shadow-sm px-2 py-1">
          <button
            onClick={() => scrollTo('hero')}
            className="px-4 py-1.5 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('what')}
            className="px-4 py-1.5 rounded-md text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Events
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
