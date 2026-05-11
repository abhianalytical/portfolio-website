import { skills } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Modern stack with strong fundamentals"
          text="Animated skill cards show the technologies and concepts Abhishek is actively using and improving."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ name, level, category, icon: Icon }, index) => (
            <Reveal key={name} delay={index * 0.035} className="glass group rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-neon">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyanGlow/10 text-2xl text-cyanGlow group-hover:bg-cyanGlow group-hover:text-night">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-extrabold">{name}</h3>
                    <p className="text-sm text-slate-400 light:text-slate-500">{category}</p>
                  </div>
                </div>
                <div
                  className="grid h-14 w-14 place-items-center rounded-full text-sm font-black"
                  style={{
                    background: `conic-gradient(#00e5ff ${level * 3.6}deg, rgba(255,255,255,.1) 0deg)`,
                  }}
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-night light:bg-white">{level}</span>
                </div>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10 light:bg-slate-900/10">
                <div className="h-full rounded-full bg-gradient-to-r from-cyanGlow via-violetGlow to-mintGlow" style={{ width: `${level}%` }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
