import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    title: "GenAI & LLM Solutions",
    subtitle: "Leading the AI Revolution",
    description: "Transform your business with cutting-edge generative AI and large language models that understand, create, and innovate at scale.",
    icon: "🤖",
    color: "from-blue-600 to-purple-600",
    gradient: "from-blue-50 to-purple-50"
  },
  {
    title: "Multi-Agent Applications",
    subtitle: "Collaborative AI Ecosystems",
    description: "Build sophisticated AI systems where multiple intelligent agents work together to solve complex business challenges autonomously.",
    icon: "🔗",
    color: "from-purple-600 to-pink-600",
    gradient: "from-purple-50 to-pink-50"
  },
  {
    title: "MCP Server Development",
    subtitle: "Secure AI Integration",
    description: "Develop robust Model Context Protocol servers that enable seamless and secure integration between AI models and your systems.",
    icon: "🛡️",
    color: "from-pink-600 to-red-600",
    gradient: "from-pink-50 to-red-50"
  },
  {
    title: "LLMOps & MLOps",
    subtitle: "Production AI Excellence",
    description: "Operationalize your AI models with enterprise-grade practices ensuring reliability, scalability, and continuous improvement.",
    icon: "⚙️",
    color: "from-red-600 to-orange-600",
    gradient: "from-red-50 to-orange-50"
  },
  {
    title: "Machine Learning & AI",
    subtitle: "Intelligent Automation",
    description: "Comprehensive ML solutions from traditional algorithms to deep learning that drive predictive insights and automation.",
    icon: "🧠",
    color: "from-orange-600 to-yellow-600",
    gradient: "from-orange-50 to-yellow-50"
  },
  {
    title: "Data Science",
    subtitle: "Data-Driven Insights",
    description: "Extract actionable insights through advanced statistical analysis and scientific methodology that powers strategic decisions.",
    icon: "📊",
    color: "from-yellow-600 to-green-600",
    gradient: "from-yellow-50 to-green-50"
  },
  {
    title: "Data Engineering",
    subtitle: "Robust Data Infrastructure",
    description: "Build scalable data pipelines and infrastructure that powers your AI initiatives with clean, accessible, and reliable data.",
    icon: "🏗️",
    color: "from-green-600 to-teal-600",
    gradient: "from-green-50 to-teal-50"
  },
  {
    title: "Business Analytics",
    subtitle: "Strategic Intelligence",
    description: "Transform business data into actionable insights through comprehensive analytics solutions and interactive dashboards.",
    icon: "📈",
    color: "from-teal-600 to-cyan-600",
    gradient: "from-teal-50 to-cyan-50"
  },
  {
    title: "AI Strategy & Roadmapping",
    subtitle: "Strategic Transformation",
    description: "Develop comprehensive AI strategies aligned with your business objectives and create actionable roadmaps for success.",
    icon: "🗺️",
    color: "from-cyan-600 to-blue-600",
    gradient: "from-cyan-50 to-blue-50"
  }
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentService = services[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4, ease: "easeIn" }
    }
  };

  return (
    <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Fixed Height Container */}
      <div className="min-h-screen flex items-center py-16 sm:py-24 lg:py-32 xl:py-40">
        {/* Dynamic Background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${currentService.gradient} transition-all duration-1000`}
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        />
        
        {/* Floating Elements - Hidden on mobile for performance */}
        <div className="hidden sm:block absolute top-1/4 left-1/4 w-64 h-64 lg:w-96 lg:h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-48 h-48 lg:w-80 lg:h-80 bg-magenta/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Service Icon with Animation */}
              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4"
                variants={itemVariants}
              >
                <motion.div
                  className="text-4xl sm:text-5xl lg:text-6xl"
                  key={`icon-${currentIndex}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                  {currentService.icon}
                </motion.div>
                <motion.div
                  className="h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 'auto' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>

              {/* Dynamic Title - Fixed Height Container */}
              <div style={{ minHeight: '200px' }} className="flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1 
                    key={`title-${currentIndex}`}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-space font-bold text-text leading-tight w-full"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.span className="block">
                      Transform Your Business with
                    </motion.span>
                    <motion.span 
                      className="block bg-gradient-to-r from-accent to-magenta bg-clip-text text-transparent"
                    >
                      {currentService.title}
                    </motion.span>
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Dynamic Subtitle - Fixed Height Container - MUTED STYLING */}
              <div style={{ minHeight: '60px' }} className="flex items-center justify-center lg:justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`subtitle-${currentIndex}`}
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 text-gray-600 rounded-full text-sm sm:text-base lg:text-lg font-medium border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentService.subtitle}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Dynamic Description - Fixed Height Container */}
              <div style={{ minHeight: '120px' }} className="flex items-start">
                <AnimatePresence mode="wait">
                  <motion.p 
                    key={`desc-${currentIndex}`}
                    className="text-base sm:text-lg lg:text-xl xl:text-2xl text-text-muted leading-relaxed max-w-3xl mx-auto lg:mx-0"
                    variants={descriptionVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    {currentService.description}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              {/* CTA Buttons - Fixed Position - MAIN CTA HIGHLIGHTED */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start pt-4"
                variants={itemVariants}
              >
                <motion.a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-gradient-to-r from-accent to-magenta text-white font-medium rounded-2xl sm:rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-glow overflow-hidden text-sm sm:text-base lg:text-lg shadow-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <motion.svg 
                      className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.7 }}
                  />
                </motion.a>
                
                <motion.a
                  href="/services"
                  className="group relative inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 border-2 border-gray-300 text-gray-600 font-medium rounded-2xl sm:rounded-3xl transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 backdrop-blur-sm text-sm sm:text-base lg:text-lg"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    Explore All Services
                    <motion.svg 
                      className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </motion.svg>
                  </span>
                </motion.a>
              </motion.div>

              {/* Service Navigation Dots - MUTED STYLING */}
              <motion.div 
                className="flex justify-center lg:justify-start space-x-2 sm:space-x-3 pt-6"
                variants={itemVariants}
              >
                {services.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsPlaying(false);
                      setTimeout(() => setIsPlaying(true), 5000); // Resume after 5 seconds
                    }}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gray-600 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            </div>
            
            {/* Visual Element - Hidden on mobile, shown on tablet+ */}
            <motion.div 
              className="hidden lg:flex justify-center lg:justify-end"
              variants={itemVariants}
            >
              <motion.div 
                className="w-full max-w-lg xl:max-w-2xl relative"
                key={`visual-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-4xl lg:rounded-6xl blur-2xl opacity-30"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="relative z-10 p-8 lg:p-12 bg-white/80 backdrop-blur-sm rounded-4xl lg:rounded-6xl border border-gray-200 shadow-2xl"
                  whileHover={{ y: -10, rotateX: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-center space-y-4 lg:space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.div 
                      className="text-6xl lg:text-8xl mb-4 lg:mb-6"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {currentService.icon}
                    </motion.div>
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-space font-bold text-gray-700"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      {currentService.title}
                    </motion.h3>
                    <motion.div 
                      className="grid grid-cols-3 gap-3 lg:gap-4 mt-6 lg:mt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="h-2 lg:h-3 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-60"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ 
                            delay: 0.8 + i * 0.1, 
                            duration: 0.5,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;