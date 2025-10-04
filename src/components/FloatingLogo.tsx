import { motion } from 'framer-motion';

export const FloatingLogo = () => {
  return (
    <motion.div
      aria-hidden={false}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: [ -10, 10, -10 ], rotate: [0, 6, -6, 0], opacity: [0.9, 1, 0.95] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="pointer-events-none fixed right-8 top-24 z-40"
      style={{ width: 72, height: 72 }}
    >
      <img src="/abhi.png" alt="Abhi logo" className="w-full h-full object-contain drop-shadow-lg rounded-md" />
    </motion.div>
  );
};

export default FloatingLogo;
