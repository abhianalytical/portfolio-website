import { FaCode, FaJava, FaLaptopCode, FaLayerGroup, FaMobileAlt } from 'react-icons/fa';
import { services } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

const icons = [FaLaptopCode, FaCode, FaJava, FaMobileAlt, FaLayerGroup];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Services" title="What Abhishek can build" text="Practical development services for student projects, prototypes, landing pages, and responsive web applications." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service} delay={index * 0.05} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-neon">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyanGlow/10 text-2xl text-cyanGlow">
                  <Icon />
                </span>
                <h3 className="mt-5 min-h-12 text-lg font-black">{service}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400 light:text-slate-600">Clean, responsive, and maintainable solutions with strong attention to user experience.</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
