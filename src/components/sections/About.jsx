import { FaTrophy } from 'react-icons/fa';
import { stats } from '../../data/portfolioData';
import Reveal from '../common/Reveal';
import SectionHeader from '../common/SectionHeader';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Problem solver with full stack ambition"
          text="Currently pursuing MCA, Abhishek combines computer science fundamentals with hands-on frontend development and a growing software engineering mindset."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="glass rounded-3xl p-6 sm:p-8">
            <p className="text-lg leading-9 text-slate-300 light:text-slate-600">
              I am a quick learner and passionate software developer focused on building useful, recruiter-friendly
              projects with clean code and thoughtful UI. My core strengths are Java, Python, web development,
              OOP, DBMS, and DSA, and I am steadily expanding into full stack engineering with Node.js and modern React.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-yellow-300/30 bg-yellow-300/10 px-5 py-4 text-yellow-100 light:text-yellow-700">
              <FaTrophy className="text-2xl" />
              <span className="font-bold">1st Prize - Code with Gemini Hackathon</span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.06} className="glass rounded-2xl p-5">
                <p className="text-4xl font-black gradient-text">
                  {item.value}
                  {item.suffix}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-300 light:text-slate-600">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
