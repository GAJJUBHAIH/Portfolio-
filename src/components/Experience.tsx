import { motion } from 'framer-motion';
import Section from './Section';
import { achievements, stats } from '../data';
import AnimatedStat from './AnimatedStat';

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Achievements">
      <div className="grid gap-10 md:grid-cols-2">
        <ul className="space-y-4">
          {achievements.map((a, i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl px-5 py-4 text-white/70"
            >
              {a}
            </motion.li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-4 self-start">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-6 text-center">
              <AnimatedStat value={s.value} />
              <p className="mt-1 text-xs text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
