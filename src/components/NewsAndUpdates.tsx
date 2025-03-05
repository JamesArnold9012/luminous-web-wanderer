
import React from 'react';
import { motion } from 'framer-motion';

// Mock news data
const newsData = [
  {
    id: 1,
    title: 'Major cryptocurrency exchange announces expansion into new markets',
    date: 'May 15, 2023',
    category: 'Exchanges',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 2,
    title: 'New regulatory framework for digital assets proposed by central bank',
    date: 'May 12, 2023',
    category: 'Regulation',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 3,
    title: 'Bitcoin mining efficiency increased by 25% with new hardware release',
    date: 'May 10, 2023',
    category: 'Mining',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
  }
];

const NewsCard = ({ article, index }: { article: typeof newsData[0], index: number }) => {
  return (
    <motion.div
      className="h-full glassmorphism rounded-xl overflow-hidden border border-white/10 hover:border-crypto-accent/30 transition-all duration-300 hover:shadow-glow-blue"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-110" 
        />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium rounded-full bg-crypto-primary text-white">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="text-sm text-foreground/60 mb-2">{article.date}</div>
        <h3 className="text-lg font-medium mb-3 line-clamp-2 hover:text-crypto-accent transition-colors">{article.title}</h3>
        <a href="#" className="text-crypto-accent hover:text-crypto-accent/80 text-sm font-medium flex items-center">
          Read More <span className="ml-1">→</span>
        </a>
      </div>
    </motion.div>
  );
};

const NewsAndUpdates = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Latest <span className="text-crypto-accent">News</span> & Updates
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Stay informed with the latest developments in the cryptocurrency world
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsData.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#" className="px-6 py-3 border border-crypto-accent/40 text-crypto-accent hover:bg-crypto-accent/10 font-medium rounded-lg transition-all">
            View All News
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsAndUpdates;
