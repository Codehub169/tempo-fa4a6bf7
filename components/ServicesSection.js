import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    icon: "/images/icon-branding.svg",
    title: "Branding",
    description: "Crafting identities that resonate and endure.",
    alt: "Branding icon"
  },
  {
    icon: "/images/icon-packaging.svg",
    title: "Packaging",
    description: "Packaging, but make it poetic.",
    alt: "Packaging icon"
  },
  {
    icon: "/images/icon-social-media.svg",
    title: "Social Media",
    description: "Digital narratives that captivate and connect.",
    alt: "Social media icon"
  },
  {
    icon: "/images/icon-stationery.svg",
    title: "Stationery",
    description: "Tangible expressions of your unique story.",
    alt: "Stationery icon"
  },
  {
    icon: "/images/icon-coffee-table-books.svg",
    title: "Coffee Table Books",
    description: "Curating volumes that tell tales beautifully.",
    alt: "Coffee table books icon"
  },
  {
    icon: "/images/icon-creative-projects.svg",
    title: "Creative Projects",
    description: "Exploring the art of the beautifully unexpected.",
    alt: "Creative projects icon"
  }
];

const ServicesSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="services"
      className="py-20 px-6 md:px-12 lg:px-24 bg-pale-lilac/30 text-deep-slate"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          variants={itemVariants}
          className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-deep-slate"
        >
          What We Do
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          variants={sectionVariants} // Use sectionVariants for staggering children
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-creamy-white p-8 rounded-medium shadow-soft-lift hover:shadow-interactive transition-shadow duration-300 flex flex-col items-center text-center group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <div className="relative w-16 h-16 mb-6 text-coral-blush">
                <Image src={service.icon} alt={service.alt} layout="fill" objectFit="contain" />
              </div>
              <h3 className="font-poppins text-2xl font-bold text-muted-mauve mb-3 group-hover:text-coral-blush transition-colors duration-300">{service.title}</h3>
              <p className="font-poppins text-deep-slate/80 leading-relaxed text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;