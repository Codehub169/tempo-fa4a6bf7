import { motion } from 'framer-motion';
import Image from 'next/image';

const StorySection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const whoKnewVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }
    },
  };

  return (
    <motion.section
      id="story"
      className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-creamy-white text-deep-slate flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={itemVariants} className="text-center md:text-left">
          <motion.h2 
            variants={itemVariants} 
            className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-muted-mauve"
          >
            The <span className="text-coral-blush">hue</span>neu Story
          </motion.h2>
          <motion.p variants={itemVariants} className="font-poppins text-lg md:text-xl mb-4 leading-relaxed">
            At hueneu, we believe in the evocative power of balance. 'Hue' represents the vibrant bursts of creativity, the unexpected color that tells a story. 'Neu' signifies the grounding neutrality, the calm foundation upon which bold ideas can flourish.
          </motion.p>
          <motion.p variants={itemVariants} className="font-poppins text-lg md:text-xl leading-relaxed">
            It's about design that's quietly confident, deeply intentional, and always stirring a gentle surprise.
          </motion.p>
        </motion.div>

        <motion.div 
          className="relative flex justify-center items-center mt-10 md:mt-0"
          variants={whoKnewVariants}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 p-4 bg-soft-orchid/20 rounded-soft shadow-soft-lift">
            <Image 
              src="/images/who-knew-visual.svg" 
              alt="'Who Knew?' playful abstract visual representing surprise and creativity" 
              layout="fill" 
              objectFit="contain"
              className="p-4"
            />
          </div>
          <motion.p 
            variants={itemVariants}
            className="absolute -bottom-8 md:-bottom-4 -right-4 md:right-0 font-lora text-3xl md:text-4xl text-coral-blush transform -rotate-6 bg-creamy-white px-3 py-1 rounded-soft shadow-interactive"
          >
            Who Knew?
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StorySection;