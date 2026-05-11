import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="particles"
      init={particlesInit}
      className="fixed inset-0 z-0"
      options={{
        fullScreen: false,
        fpsLimit: 60,
        particles: {
          number: { value: 48, density: { enable: true, area: 900 } },
          color: { value: ['#00e5ff', '#a855f7', '#34d399'] },
          links: { enable: true, color: '#00e5ff', distance: 150, opacity: 0.18, width: 1 },
          move: { enable: true, speed: 0.55, outModes: { default: 'bounce' } },
          opacity: { value: 0.28 },
          size: { value: { min: 1, max: 3 } },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: 'grab' }, resize: true },
          modes: { grab: { distance: 150, links: { opacity: 0.35 } } },
        },
        detectRetina: true,
      }}
    />
  );
}
