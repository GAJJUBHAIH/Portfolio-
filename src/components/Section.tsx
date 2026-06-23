import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Section({ id, title, children }: { id: string; title?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-24 md:px-12">
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-3xl font-extrabold md:text-4xl"
        >
          {title}<span className="text-electric">.</span>
        </motion.h2>
      )}
      {children}
    </section>
  );
}
