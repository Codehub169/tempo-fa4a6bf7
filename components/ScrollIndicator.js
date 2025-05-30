import { motion } from 'framer-motion';
import Image from 'next/image';

const ScrollIndicator = ({ targetId }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.a
      href={`#${targetId}`}
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer p-2 group"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      aria-label="Scroll down"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="w-8 h-8 md:w-10 md:h-10 relative"
      >
        <Image
          src="/images/scroll-indicator-arrow.svg"
          alt="Scroll down arrow"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </motion.a>
  );
};

export default ScrollIndicator;