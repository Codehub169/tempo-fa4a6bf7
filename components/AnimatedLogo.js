import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      className="relative w-48 h-24 md:w-64 md:h-32 lg:w-80 lg:h-40"
    >
      <Image
        src="/images/hueneu-logo.svg"
        alt="hueneu studio animated logo"
        layout="fill"
        objectFit="contain"
        priority
      />
    </motion.div>
  );
};

export default AnimatedLogo;