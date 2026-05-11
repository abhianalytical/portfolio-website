import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Testimonials" title="Professional feedback" text="Realistic placeholders you can replace with recommendations from mentors, teammates, or clients." />
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08} className="glass rounded-3xl p-6">
              <FaQuoteLeft className="text-3xl text-cyanGlow" />
              <p className="mt-5 min-h-28 leading-8 text-slate-300 light:text-slate-600">"{item.text}"</p>
              <div className="mt-6 border-t border-white/10 pt-5 light:border-slate-900/10">
                <h3 className="font-black">{item.name}</h3>
                <p className="text-sm text-slate-400 light:text-slate-500">{item.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
