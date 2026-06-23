import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { projects } from '../data';

const filters = ['All', 'Web', 'AI', 'College', 'App'] as const;

export default function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const visible = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" title="Projects">
      <div className="mb-8 flex flex-wrap gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${active === f ? 'bg-electric text-white' : 'glass hover:text-electric'}`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.a
              layout
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="glass group rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <p className="mb-2 text-xs uppercase tracking-wide text-electric">{p.category}</p>
              <h3 className="mb-2 text-lg font-semibold group-hover:text-electric transition-colors">{p.title}</h3>
              <p className="text-sm text-white/60">{p.description}</p>
            </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
