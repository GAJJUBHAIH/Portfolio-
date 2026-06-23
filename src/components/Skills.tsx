import { motion } from 'framer-motion';
import Section from './Section';
import { skills } from '../data';

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="glass rounded-full px-4 py-2 text-sm hover:text-electric transition-colors"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
