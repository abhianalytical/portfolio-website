import { certifications } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Certifications" title="Verified learning milestones" text="Focused credentials across programming, databases, and cloud fundamentals." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map(({ title, issuer, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.06} className="glass rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-violet">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-violetGlow/10 text-3xl text-violetGlow">
                <Icon />
              </span>
              <h3 className="mt-5 text-lg font-black">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-400 light:text-slate-500">{issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
