import { motion } from 'framer-motion';

const sponsors = [
  { name: 'Alpha Corp' },
  { name: 'GreenTech' },
  { name: 'Innova Labs' },
  { name: 'EcoWave' },
  { name: 'ByteWorks' },
  { name: 'Solaris' },
  { name: 'Nimbus' },
];

export default function SponsorsCarousel() {
  // duplicate for seamless loop
  const items = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-6 py-4"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            className="flex-none w-48 h-28 rounded-xl bg-gradient-to-br from-amber-300 to-amber-500 text-amber-950 font-semibold shadow-lg shadow-amber-900/20 flex items-center justify-center"
          >
            {s.name}
          </div>
        ))}
      </motion.div>

      {/* top gradient mask */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent" />
    </div>
  );
}
