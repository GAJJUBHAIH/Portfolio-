import { useTheme } from './hooks/useTheme';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import { profile } from './data';

export default function App() {
  const { dark, toggle } = useTheme();
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite, Tailwind &amp; Framer Motion.
      </footer>
    </>
  );
}
