import { motion } from 'framer-motion';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Services', 'Contact'];

export default function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="glass fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
    >
      <a href="#hero" className="text-xl font-extrabold tracking-tight">
        Gajju<span className="text-electric">.</span>
      </a>
      <ul className="hidden md:flex gap-8 text-sm text-white/70">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} className="hover:text-electric transition-colors">{l}</a>
          </li>
        ))}
      </ul>
      <button
        onClick={toggle}
        aria-label="Toggle theme"
        className="glass rounded-full px-3 py-2 text-sm hover:text-electric transition-colors"
      >
        {dark ? '\u2600\ufe0f' : '\u{1F319}'}
      </button>
    </motion.nav>
  );
}
