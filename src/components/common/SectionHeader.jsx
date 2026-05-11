import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyanGlow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-300 light:text-slate-600">{text}</p> : null}
    </motion.div>
  );
}
