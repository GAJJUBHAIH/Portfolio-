import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('custom-cursor-active');
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest('a, button'));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-electric mix-blend-difference hidden md:block"
      animate={{ x: pos.x - 8, y: pos.y - 8, scale: hovering ? 2.5 : 1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.3 }}
      style={{ width: 16, height: 16 }}
    />
  );
}
