import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full snap-start">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />

      <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white drop-shadow-lg">
            FIESTA
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white/80 max-w-2xl mx-auto">
            Automotive energy. Sports adrenaline. Corporate polish. A dynamic celebration — welcome to Fiesta.
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="h-8 w-[2px] bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
