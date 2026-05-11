import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Achievement from './components/sections/Achievement';
import About from './components/sections/About';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Hero from './components/sections/Hero';
import Journey from './components/sections/Journey';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/common/LoadingScreen';
import ParticlesBackground from './components/common/ParticlesBackground';
import ScrollProgress from './components/common/ScrollProgress';
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('light', theme === 'light');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (event) => {
      gsap.to(document.documentElement, {
        '--x': `${event.clientX}px`,
        '--y': `${event.clientY}px`,
        duration: 0.35,
        ease: 'power2.out',
      });
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <>
      <a href="#home" className="skip-link">Skip to content</a>
      <LoadingScreen loading={loading} />
      <ScrollProgress />
      <ParticlesBackground />
      <div className="noise" />
      <div className="cursor-glow hidden md:block" />
      <div className="relative z-10 min-h-screen bg-mesh-dark light:bg-slate-50 light:text-slate-950">
        <Navbar theme={theme} onThemeToggle={() => setTheme((value) => (value === 'dark' ? 'light' : 'dark'))} />
        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Certifications />
          <Achievement />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </>
  );
}
