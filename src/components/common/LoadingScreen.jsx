import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ loading }) {
  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-night"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="text-center">
            <motion.div
              className="mx-auto h-20 w-20 rounded-2xl border border-cyanGlow/40 bg-cyanGlow/10 shadow-neon"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { repeat: Infinity, duration: 1.8, ease: 'linear' }, scale: { repeat: Infinity, duration: 1.2 } }}
            />
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.32em] text-cyanGlow">Loading Portfolio</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
