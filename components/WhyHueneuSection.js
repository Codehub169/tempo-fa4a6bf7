import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const WhyHueneuSection = () => {
  return (
    <motion.section
      id="why-hueneu"
      className="min-h-screen py-20 md:py-32 px-6 md:px-12 bg-muted-mauve flex flex-col justify-center items-center text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="font-lora text-4xl md:text-6xl text-creamy-white mb-8 md:mb-12 leading-tight"
        variants={itemVariants}
      >
        Why hueneu?
      </motion.h2>
      
      <motion.p 
        className="font-poppins text-xl md:text-3xl text-pale-lilac max-w-xl md:max-w-3xl mb-6 md:mb-8 leading-relaxed"
        variants={itemVariants}
      >
        We don’t just design—<span className="text-soft-orchid font-semibold">we decode stories.</span>
      </motion.p>
      
      <motion.p 
        className="font-poppins text-xl md:text-3xl text-pale-lilac max-w-xl md:max-w-3xl mb-12 md:mb-16 leading-relaxed"
        variants={itemVariants}
      >
        Designs that speak quietly but <span className="text-soft-orchid font-semibold">stay with you.</span>
      </motion.p>

      <motion.div 
        className="font-poppins text-lg md:text-xl text-creamy-white max-w-md md:max-w-2xl space-y-4"
        variants={itemVariants}
      >
        <p>At hueneu, we believe in the power of <strong className="font-semibold text-soft-orchid">calm</strong>, the allure of <strong className="font-semibold text-soft-orchid">mystery</strong>, and the beauty of <strong className="font-semibold text-soft-orchid">balance</strong>.</p>
        <p>We craft experiences that are both intentional and intuitive, weaving your narrative into every detail, creating a visual language that resonates deeply and endures.</p>
      </motion.div>

    </motion.section>
  );
};

export default WhyHueneuSection;
