import { Mail, Users, Sprout } from 'lucide-react';

const committees = [
  {
    key: 'iic',
    name: 'Institution’s Innovation Council (IIC)',
    desc: 'Driving innovation and startup culture through mentorship, ideation, and prototyping initiatives.',
    email: 'iic@thakurpoly.ac.in',
    color: 'from-sky-400 to-indigo-500'
  },
  {
    key: 'nss',
    name: 'National Service Scheme (NSS)',
    desc: 'Building community impact via social outreach, leadership, and volunteer programs.',
    email: 'nss@thakurpoly.ac.in',
    color: 'from-pink-400 to-fuchsia-500'
  },
  {
    key: 'vasundhara',
    name: 'Green Club — Vasundhara',
    desc: 'Championing sustainability with eco-projects, campus drives, and green innovations.',
    email: 'green@thakurpoly.ac.in',
    color: 'from-emerald-400 to-teal-500'
  }
];

export default function CommitteesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {committees.map((c) => (
        <a
          key={c.key}
          href={`mailto:${c.email}`}
          className={`group relative block rounded-2xl bg-gradient-to-br ${c.color} p-[2px] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-white/30`}
        >
          <div className="rounded-2xl h-full w-full bg-white/10 backdrop-blur-xl p-6 text-white min-h-[220px] flex flex-col">
            <div className="flex items-center gap-3 text-white/90">
              {c.key === 'iic' && <Users />}
              {c.key === 'nss' && <Users />}
              {c.key === 'vasundhara' && <Sprout />}
              <h3 className="text-lg font-bold">{c.name}</h3>
            </div>
            <p className="mt-3 text-sm text-white/90 flex-1">{c.desc}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/90">
              <Mail size={16} /> {c.email}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
