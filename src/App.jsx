import React from 'react';
import NavBar from './components/NavBar.jsx';
import HeroAncient from './components/HeroAncient.jsx';
import EraSection from './components/EraSection.jsx';
import ScrollAdornment from './components/ScrollAdornment.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900">
      <NavBar />
      <ScrollAdornment />

      <main className="w-full">
        <HeroAncient />

        <EraSection
          id="what"
          era="ancient"
          title="What is FIESTA?"
          points={[
            { heading: 'Festival of Enterprise', copy: 'A campus-wide celebration of innovation, startups, and student-led ventures.' },
            { heading: 'Hands-on Experiences', copy: 'Workshops, talks, and showcases designed to turn ideas into action.' },
            { heading: 'Open to All', copy: 'Builders, designers, hustlers, and the curious — everyone is welcome.' },
          ]}
        />

        <EraSection
          id="sponsors"
          era="renaissance"
          title="Our Sponsors"
          points={[
            { heading: 'Community Partners', copy: 'Organizations that power student entrepreneurship with mentorship and resources.' },
            { heading: 'Industry Leaders', copy: 'Companies investing in the next generation of founders and tech talent.' },
            { heading: 'Why Sponsor?', copy: 'Reach engaged audiences, support impact projects, and recruit top talent.' },
          ]}
        />

        <EraSection
          id="highlights"
          era="industrial"
          title="Last Year\'s Highlights"
          points={[
            { heading: 'Packed Workshops', copy: 'Standing-room-only sessions on product, design, and growth.' },
            { heading: 'Showcase Night', copy: '20+ teams demoed prototypes, from climate tech to creator tools.' },
            { heading: 'Founder Fireside', copy: 'An honest conversation on building, failing, and shipping again.' },
          ]}
        />

        <EraSection
          id="committees"
          era="digital"
          title="Our Committees"
          points={[
            { heading: 'Programs', copy: 'Curates talks, workshops, and competitions across tracks.' },
            { heading: 'Operations', copy: 'Runs logistics, venues, schedules, and volunteer coordination.' },
            { heading: 'Design & Media', copy: 'Owns brand, video, social, and on-site experiences.' },
          ]}
        />

        <Footer />
      </main>
    </div>
  );
}

export default App;
