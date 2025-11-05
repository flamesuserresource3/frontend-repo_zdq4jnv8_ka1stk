import React from 'react';
import NavBar from './components/NavBar.jsx';
import HeroAncient from './components/HeroAncient.jsx';
import EraSection from './components/EraSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <NavBar />

      {/* Scroll container */}
      <main className="w-full">
        {/* Hero (Ancient theme) */}
        <HeroAncient />

        {/* Eras */}
        <EraSection
          id="ancient"
          era="ancient"
          title="Ancient Era — Origins of Trade"
          points={[
            { heading: 'Caravans & Maritime Routes', copy: 'Silk Road caravans and Phoenician shipping linked markets and ideas across continents.' },
            { heading: 'Coinage & Ledgers', copy: 'From clay tablets to minted coins, record-keeping and currency unlocked scale.' },
            { heading: 'Guilds & Markets', copy: 'Early merchant guilds set norms for quality, trust, and dispute resolution.' },
          ]}
        />

        <EraSection
          id="renaissance"
          era="renaissance"
          title="Renaissance — Capital & Discovery"
          points={[
            { heading: 'Double-Entry Accounting', copy: 'Florentine books balanced risk and reward, ushering in modern finance.' },
            { heading: 'Patronage → Venture', copy: 'Investment in explorers, artists, and makers seeded new industries.' },
            { heading: 'Printing & Knowledge', copy: 'The press scaled ideas like products, accelerating entrepreneurship.' },
          ]}
        />

        <EraSection
          id="industrial"
          era="industrial"
          title="Industrial Revolution — Scale & Systems"
          points={[
            { heading: 'Factories & Steam', copy: 'Mechanization multiplied output and redefined labor.' },
            { heading: 'Rail & Telegraph', copy: 'Speed in transport and information collapsed distances for markets.' },
            { heading: 'Corporations', copy: 'Limited liability and management theory scaled enterprise complexity.' },
          ]}
        />

        <EraSection
          id="digital"
          era="digital"
          title="Digital Age — Software Scale"
          points={[
            { heading: 'Internet & Protocols', copy: 'Open standards enabled global distribution and network effects.' },
            { heading: 'Cloud & Mobile', copy: 'Always-on computing turned services into platforms.' },
            { heading: 'Open Source', copy: 'Shared tooling accelerated iteration and lowered barriers.' },
          ]}
        />

        <EraSection
          id="future"
          era="future"
          title="Frontier — AI, Space, Climate"
          points={[
            { heading: 'Intelligence as Leverage', copy: 'AI copilots reshape research, creation, and operations.' },
            { heading: 'New Geographies', copy: 'Orbital, lunar, and deep-sea economies emerge as viable markets.' },
            { heading: 'Regenerate & Resilience', copy: 'Climate tech aligns profit with planetary boundaries.' },
          ]}
        />

        <Footer />
      </main>
    </div>
  );
}

export default App;
