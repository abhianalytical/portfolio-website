import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

export default function Achievement() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <motion.div
          className="glass relative overflow-hidden rounded-[32px] p-8 text-center sm:p-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
          <motion.div
            className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-yellow-300/15 text-5xl text-yellow-200 shadow-[0_0_60px_rgba(253,224,71,.35)]"
            animate={{ y: [0, -10, 0], rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
          >
            <FaTrophy />
          </motion.div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.28em] text-yellow-200">Highlighted Achievement</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">1st Prize - Code with Gemini Hackathon</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600">
            A competitive win showcasing fast learning, teamwork, presentation clarity, and practical engineering execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
