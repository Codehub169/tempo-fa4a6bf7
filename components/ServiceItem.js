import { motion } from 'framer-motion';
import Image from 'next/image';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const ServiceItem = ({ iconSrc, title, description, index }) => {
  return (
    <motion.div
      className="group bg-creamy-white p-6 md:p-8 rounded-medium shadow-soft-lift hover:shadow-interactive transform transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] flex flex-col items-center text-center md:items-start md:text-left"
      variants={itemVariants}
      custom={index} // Pass index for staggered animation
      // initial, animate, viewport props will be handled by the parent ServicesSection
    >
      <div className="relative w-12 h-12 mb-4 md:mb-6 text-coral-blush">
        <Image src={iconSrc} alt={`${title} icon`} layout="fill" objectFit="contain" />
      </div>
      <h3 className="font-poppins text-xl md:text-2xl font-semibold text-muted-mauve group-hover:text-coral-blush transition-colors duration-300 mb-2">
        {title}
      </h3>
      <p className="font-poppins text-deep-slate text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceItem;
