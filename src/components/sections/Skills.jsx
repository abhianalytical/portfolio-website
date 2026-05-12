import { skillGroups } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function Skills() {
  const totalSkills = skillGroups.reduce((count, group) => count + group.skills.length, 0);

  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Organized technical toolkit"
          text="A cleaner category-wise view of the technologies Abhishek uses across programming, frontend, backend, databases, tools, and core concepts."
        />

        <Reveal className="glass mb-6 grid gap-4 rounded-3xl p-5 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-black gradient-text">{skillGroups.length}</p>
            <p className="mt-1 text-sm font-semibold text-slate-400 light:text-slate-600">Skill Categories</p>
          </div>
          <div>
            <p className="text-3xl font-black gradient-text">{totalSkills}+</p>
            <p className="mt-1 text-sm font-semibold text-slate-400 light:text-slate-600">Tools & Technologies</p>
          </div>
          <div>
            <p className="text-3xl font-black gradient-text">Full Stack</p>
            <p className="mt-1 text-sm font-semibold text-slate-400 light:text-slate-600">Java, React, Spring Boot, MySQL</p>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map(({ title, subtitle, icon: GroupIcon, accent, skills }, index) => (
            <Reveal key={title} delay={index * 0.045} className="glass group rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-neon sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accent} text-2xl text-night shadow-neon`}>
                    <GroupIcon />
                  </span>
                  <div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-1 text-sm font-semibold text-slate-400 light:text-slate-600">{subtitle}</p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-black text-cyanGlow light:border-slate-900/10 light:bg-slate-900/5">
                  {skills.length} Skills
                </span>
              </div>

              <div className="mt-6 grid gap-4">
                {skills.map(({ name, level, icon: Icon }) => (
                  <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-slate-900/10 light:bg-white/70">
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyanGlow/10 text-xl text-cyanGlow">
                          <Icon />
                        </span>
                        <p className="font-extrabold">{name}</p>
                      </div>
                      <span className="text-sm font-black text-cyanGlow">{level}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10 light:bg-slate-900/10">
                      <div className={`h-full rounded-full bg-gradient-to-r ${accent}`} style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
