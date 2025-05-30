import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiSend, FiAlertCircle, FiCheckCircle } from 'react-icons/fi'; // Using react-icons for better icon consistency

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' }); // type: 'success', 'error', 'loading'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ type: 'loading', message: 'Sending your story...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Your story has been sent! We\'ll be in touch.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please check your connection.' });
    }
  };

  return (
    <motion.section 
      id="contact"
      className="py-20 md:py-32 px-6 md:px-12 bg-pale-lilac flex flex-col items-center"
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 variants={itemVariants} className="font-lora text-4xl md:text-6xl text-deep-slate mb-4 text-center">Let’s Work Together</motion.h2>
      <motion.p variants={itemVariants} className="font-poppins text-muted-mauve text-lg md:text-xl mb-10 md:mb-12 text-center max-w-lg">
        Ready to tell your story? Drop us a line, or find more of our world on Instagram.
      </motion.p>

      <motion.div 
        variants={itemVariants}
        className="w-full max-w-2xl bg-creamy-white p-8 md:p-12 rounded-medium shadow-soft-lift relative"
      >
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-poppins text-sm font-medium text-muted-mauve mb-1">Your Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 font-poppins bg-pale-lilac/50 border ${errors.name ? 'border-error' : 'border-muted-mauve/30'} rounded-soft focus:ring-2 focus:ring-soft-orchid focus:border-soft-orchid outline-none transition-colors duration-200 text-deep-slate placeholder-muted-mauve/70`}
              placeholder="What should we call you?"
            />
            {errors.name && <p className="text-error text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block font-poppins text-sm font-medium text-muted-mauve mb-1">Your Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 font-poppins bg-pale-lilac/50 border ${errors.email ? 'border-error' : 'border-muted-mauve/30'} rounded-soft focus:ring-2 focus:ring-soft-orchid focus:border-soft-orchid outline-none transition-colors duration-200 text-deep-slate placeholder-muted-mauve/70`}
              placeholder="Where can we reach you?"
            />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block font-poppins text-sm font-medium text-muted-mauve mb-1">Your Story / Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              className={`w-full px-4 py-3 font-poppins bg-pale-lilac/50 border ${errors.message ? 'border-error' : 'border-muted-mauve/30'} rounded-soft focus:ring-2 focus:ring-soft-orchid focus:border-soft-orchid outline-none transition-colors duration-200 text-deep-slate placeholder-muted-mauve/70`}
              placeholder="Tell us about your project or idea..."
            ></textarea>
            {errors.message && <p className="text-error text-xs mt-1">{errors.message}</p>}
          </div>
          
          {status.message && (
            <div className={`flex items-center p-3 rounded-soft text-sm ${status.type === 'success' ? 'bg-success/20 text-success' : status.type === 'error' ? 'bg-error/20 text-error' : 'bg-blue-100 text-blue-700'}`}>
              {status.type === 'success' && <FiCheckCircle className="mr-2" />}
              {status.type === 'error' && <FiAlertCircle className="mr-2" />}
              {status.message}
            </div>
          )}

          <motion.button 
            type="submit" 
            disabled={status.type === 'loading'}
            className="w-full flex items-center justify-center font-poppins text-lg bg-coral-blush text-creamy-white py-3 px-6 rounded-soft shadow-soft-lift hover:bg-opacity-90 hover:shadow-interactive transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-coral-blush focus:ring-opacity-50 disabled:opacity-70 disabled:cursor-not-allowed group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status.type === 'loading' ? 'Sending...' : 'Let’s design your story'}
            {status.type !== 'loading' && <FiSend className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1"/>}
          </motion.button>
        </form>

        <motion.div variants={itemVariants} className="mt-10 text-center">
          <a 
            href="https://instagram.com/hueneu_" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center font-poppins text-muted-mauve hover:text-coral-blush transition-colors duration-300 group"
          >
            <FiInstagram className="mr-2 text-xl group-hover:text-coral-blush transition-colors duration-300" />
            <span className="border-b border-muted-mauve/50 group-hover:border-coral-blush/70 transition-all duration-300">
              @hueneu_ on Instagram
            </span>
          </a>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default ContactForm;
