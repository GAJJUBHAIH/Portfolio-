import { motion } from 'framer-motion';
import Section from './Section';
import { services } from '../data';

export default function Services() {
  return (
    <Section id="services" title="Services">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-electric">{s.title}</h3>
            <p className="text-sm text-white/60">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
