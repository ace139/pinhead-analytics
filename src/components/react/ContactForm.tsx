import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch { // err is not used
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-12 text-center border border-gray-200 relative overflow-hidden"
      >
        {/* Success Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl sm:rounded-3xl lg:rounded-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        <motion.div
          className="relative z-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div 
            className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-50 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 border border-blue-200"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg 
              className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </motion.svg>
          </motion.div>
          
          <h3 className="text-2xl sm:text-3xl font-space font-bold text-gray-900 mb-4 sm:mb-6">Thank You!</h3>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            We've received your message and will get back to you within 24 hours with next steps.
          </p>
          
          <motion.button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                email: '',
                message: ''
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-blue-600 hover:text-pink-600 transition-colors duration-300 font-medium text-sm sm:text-base"
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-gray-200 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-pink-50/50 rounded-2xl sm:rounded-3xl lg:rounded-4xl"></div>
      
      <div className="relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-space font-bold text-gray-900 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
              Email Address *
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
              placeholder="your.email@company.com"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
              Message <span className="text-gray-500 font-normal">(optional)</span>
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/50 backdrop-blur-sm border border-gray-300 rounded-xl sm:rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
              placeholder="Tell us about your project, goals, or any questions you have..."
            />
          </motion.div>

          <AnimatePresence>
            {error && (
              <motion.div 
                className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-3 sm:p-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 102, 204, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative w-full px-6 sm:px-8 lg:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-pink-600 text-white font-medium rounded-2xl sm:rounded-3xl transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group text-sm sm:text-base lg:text-lg"
          >
            <span className="relative z-10">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-blue-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"
              transition={{ duration: 0.7 }}
            />
          </motion.button>
        </form>

        {/* Contact Info */}
        <motion.div 
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-center text-gray-600 text-sm sm:text-base mb-4">
            Or reach us directly at:
          </p>
          <div className="text-center">
            <a 
              href="mailto:hello@pinheadanalytics.com" 
              className="text-blue-600 hover:text-pink-600 transition-colors duration-300 font-medium text-sm sm:text-base"
            >
              hello@pinheadanalytics.com
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactForm;