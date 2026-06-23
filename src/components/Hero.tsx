import { motion } from 'framer-motion';
import { profile } from '../data';

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="https://placehold.co/200x200/121214/2f81f7?text=Gajju"
        alt={profile.name}
        className="mb-8 h-40 w-40 rounded-full border-2 border-electric/40 object-cover animate-float"
      />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl font-extrabold leading-tight md:text-6xl"
      >
        Hi, I'm <span className="text-electric">{profile.name}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 text-lg text-white/70 md:text-2xl"
      >
        Developer &amp; Tech Enthusiast
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a href="#projects" className="rounded-full bg-electric px-6 py-3 font-semibold text-white transition-transform hover:scale-105">
          View Projects
        </a>
        <a href="#contact" className="glass rounded-full px-6 py-3 font-semibold transition-transform hover:scale-105">
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
