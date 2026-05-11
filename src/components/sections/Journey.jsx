import { timeline } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function Journey() {
  return (
    <section id="journey" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Journey" title="Education and growth timeline" text="A focused path from fundamentals to full stack software development." />
        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-cyanGlow/30 sm:left-1/2" />
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} className={`relative mb-6 sm:w-1/2 ${index % 2 ? 'sm:ml-auto sm:pl-8' : 'sm:pr-8'}`}>
              <span className={`absolute top-7 h-4 w-4 rounded-full bg-cyanGlow shadow-neon ${index % 2 ? '-left-2 sm:left-0' : '-left-2 sm:-right-2 sm:left-auto'}`} />
              <div className="glass rounded-2xl p-6">
                <p className="text-sm font-bold text-cyanGlow">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
