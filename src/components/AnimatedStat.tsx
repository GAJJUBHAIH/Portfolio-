import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedStat({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      setN(Math.floor(p * value));
      if (p < 1) requestAnimationFrame(tick);
      else setN(value);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <p ref={ref} className="text-2xl font-extrabold text-electric">{n}+</p>;
}
