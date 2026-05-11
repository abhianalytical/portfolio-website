import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { profile } from '../../data/portfolioData';

function useTyping(words) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === '';
    const delay = doneTyping ? 1200 : deleting ? 45 : 80;

    const timer = window.setTimeout(() => {
      if (doneTyping) {
        setDeleting(true);
      } else if (doneDeleting) {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, text, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typedRole = useTyping(profile.roles);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyanGlow">MCA Student</p>
          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            Hi, I am <span className="gradient-text">{profile.name}</span>
          </h1>
          <div className="mt-5 min-h-12 text-2xl font-extrabold text-slate-100 sm:text-3xl light:text-slate-800">
            <span>{typedRole}</span>
            <span className="ml-1 animate-pulse text-cyanGlow">|</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 light:text-slate-600">
            A passionate software developer with a strong foundation in Java, Python, and modern web development.
            I build responsive, accessible interfaces and enjoy turning practical problems into polished software.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-cyanGlow px-6 py-3 font-bold text-night shadow-neon transition hover:-translate-y-1">
              <FaPaperPlane /> Hire Me
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-cyanGlow hover:text-cyanGlow light:text-slate-800">
              <FaDownload /> Download Resume
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-violetGlow hover:text-violetGlow light:text-slate-800">
              <FaArrowDown /> View Projects
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                title={label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-200 transition hover:-translate-y-1 hover:border-cyanGlow hover:bg-cyanGlow hover:text-night light:border-slate-900/10 light:bg-white light:text-slate-700"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[440px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15 }}
        >
          <div className="absolute inset-6 rounded-[42px] bg-cyanGlow/20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[32px] p-4">
            <img src={profile.avatar} alt="Abhishek Kumar profile placeholder" className="aspect-square w-full rounded-[24px] object-cover" loading="eager" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-night/70 p-4 text-white backdrop-blur-xl light:border-slate-900/10 light:bg-white/85 light:text-slate-950">
              <p className="text-xs uppercase tracking-[0.24em] text-cyanGlow">Available for work</p>
              <p className="mt-1 font-bold">Java, Python, React, MySQL</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
