import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projects } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Production-minded project showcase"
          text="Each project card is structured for recruiters: outcome, stack, demo, source code, and a visual preview."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="glass group overflow-hidden rounded-3xl">
              <img src={project.image} alt={`${project.title} preview`} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-black">{project.title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-slate-300 light:text-slate-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-1 text-xs font-bold text-cyanGlow">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={project.live} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyanGlow px-4 py-3 text-sm font-black text-night">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a href={project.github} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-black hover:border-cyanGlow hover:text-cyanGlow">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
