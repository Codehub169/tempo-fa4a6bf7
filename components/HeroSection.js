import { motion } from 'framer-motion';
// import AnimatedLogo from './AnimatedLogo'; // To be implemented in a future batch
// import ScrollIndicator from './ScrollIndicator'; // To be implemented in a future batch

const HeroSection = () => {
  return (
    <section 
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative text-center p-8 bg-creamy-white overflow-hidden"
    >
      {/* Placeholder for AnimatedLogo */}
      <div className="mb-8">
        {/* <AnimatedLogo /> */}
        {/* Temporary placeholder for logo while AnimatedLogo is pending */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
        >
          <img src="/images/hueneu-logo.svg" alt="hueneu logo" className="h-24 md:h-32 mx-auto" />
        </motion.div>
      </div>

      <motion.h1 
        className="font-lora text-4xl md:text-5xl lg:text-6xl text-deep-slate mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
      >
        Where stories find their aesthetic.
      </motion.h1>
      
      <motion.p 
        className="font-poppins text-lg md:text-xl lg:text-2xl text-muted-mauve max-w-xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
      >
        Designs that whisper loud stories.
      </motion.p>

      {/* Placeholder for ScrollIndicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        {/* <ScrollIndicator /> */}
        {/* Temporary placeholder for scroll indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          className="w-8 h-12 border-2 border-muted-mauve rounded-full flex items-center justify-center p-1"
        >
          <motion.div 
            className="w-1 h-3 bg-muted-mauve rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Subtle background elements for depth and texture - optional */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-pale-lilac opacity-10 rounded-full filter blur-2xl -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-soft-orchid opacity-5 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4"></div>

    </section>
  );
};

export default HeroSection;
