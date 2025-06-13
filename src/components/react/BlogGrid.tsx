import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
}

interface BlogGridProps {
  posts: BlogPost[];
  featured?: boolean;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, featured = false }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`grid gap-6 sm:gap-8 lg:gap-12 ${
        featured 
          ? 'grid-cols-1 lg:grid-cols-2' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}
    >
      {posts.map((post) => (
        <motion.article
          key={post.slug}
          variants={itemVariants}
          whileHover={{ 
            y: -12,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl lg:rounded-4xl overflow-hidden transition-all duration-700 hover:bg-white hover:shadow-card-hover border border-border hover:border-accent/30 h-full flex flex-col"
          style={{ minHeight: featured ? '500px' : '450px' }}
        >
          {/* Glow Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-accent/5 to-magenta/5 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.7 }}
          />
          
          <div className={`relative ${featured ? 'h-48 sm:h-56 lg:h-64' : 'h-40 sm:h-48'} bg-gradient-to-br from-accent/20 to-magenta/20 overflow-hidden flex-shrink-0`}>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent"
              initial={false}
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-accent/10 to-magenta/10 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.7 }}
            />
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
              <motion.span 
                className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 text-accent text-xs sm:text-sm font-medium rounded-xl sm:rounded-2xl border border-accent/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 102, 204, 0.2)" }}
                transition={{ duration: 0.3 }}
              >
                {post.category}
              </motion.span>
            </div>
          </div>
          
          <div className="relative z-10 p-4 sm:p-6 lg:p-8 xl:p-10 flex flex-col flex-grow">
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 flex-shrink-0">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            
            <motion.h3 
              className={`${featured ? 'text-xl sm:text-2xl lg:text-3xl' : 'text-lg sm:text-xl lg:text-2xl'} font-space font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300 flex-shrink-0`}
              style={{ minHeight: featured ? '4rem' : '3.5rem', display: 'flex', alignItems: 'flex-start' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {post.title}
            </motion.h3>
            
            <p className={`text-gray-600 leading-relaxed ${featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'} flex-grow mb-6 sm:mb-8`}
               style={{ minHeight: featured ? '5rem' : '4rem', display: 'flex', alignItems: 'flex-start' }}>
              {post.excerpt}
            </p>
            
            <motion.a
              href={`/insights/${post.slug}`}
              className="inline-flex items-center text-blue-600 hover:text-pink-600 transition-all duration-300 font-medium group/link mt-auto flex-shrink-0 text-sm sm:text-base"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="mr-2">Read Article</span>
              <motion.svg 
                className="w-4 h-4 sm:w-5 sm:h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </motion.svg>
            </motion.a>
          </div>
          
          {/* Hover Border Effect */}
          <motion.div 
            className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-4xl border-2 border-transparent group-hover:border-blue-200 pointer-events-none"
            transition={{ duration: 0.7 }}
          />
        </motion.article>
      ))}
    </motion.div>
  );
};

export default BlogGrid;