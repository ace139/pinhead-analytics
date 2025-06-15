import React, { useState, useEffect } from 'react';
import BlogGrid from './BlogGrid'; // Assuming BlogGrid is in the same directory

interface InsightProcessed {
  title: string;
  excerpt: string;
  // date: string; // Date removed as per user request
  category: string;
  slug: string;
  readTime: string;
  featured: boolean;
}

interface InsightsBrowserProps {
  initialPosts: InsightProcessed[];
  categories: string[];
}

const InsightsBrowser: React.FC<InsightsBrowserProps> = ({ initialPosts, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayedPosts, setDisplayedPosts] = useState<InsightProcessed[]>(initialPosts);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setDisplayedPosts(initialPosts);
    } else {
      setDisplayedPosts(initialPosts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, initialPosts]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-12 sm:mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-300 text-xs sm:text-sm lg:text-base ${
              selectedCategory === category
                ? 'bg-accent text-white shadow-glow'
                : 'bg-white/80 text-text-muted hover:bg-accent/10 hover:text-accent border border-border'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <BlogGrid posts={displayedPosts} />
    </div>
  );
};

export default InsightsBrowser;
