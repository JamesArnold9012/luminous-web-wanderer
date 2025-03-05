
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-crypto-accent/10 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-crypto-secondary/10 filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-crypto-primary/5 filter blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 text-center md:text-left space-y-6 mb-10 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-crypto-accent/10 text-crypto-accent border border-crypto-accent/20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Next Generation Trading Platform
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Trade <span className="text-crypto-accent">Digital Assets</span> With Confidence
          </motion.h1>
          
          <motion.p 
            className="text-lg text-foreground/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Experience seamless cryptocurrency trading with advanced tools, real-time analytics, and institutional-grade security.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <a href="/register" className="px-6 py-3 bg-crypto-accent hover:bg-crypto-accent/90 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md hover:shadow-glow-blue">
              Get Started
            </a>
            <a href="/exchange" className="px-6 py-3 bg-transparent border border-foreground/20 hover:border-foreground/40 text-foreground font-medium rounded-lg transition-all transform hover:scale-105">
              Explore Platform
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative w-full max-w-md perspective-1000">
            <div className="relative z-10 glassmorphism rounded-2xl p-4 shadow-xl border border-white/10 animate-float">
              <img 
                src="/lovable-uploads/f6bf64d4-674e-4606-98a7-100e989ad4e5.png" 
                alt="Cryptocurrency Dashboard" 
                className="w-full h-auto rounded-lg shadow-inner" 
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-crypto-accent/20 backdrop-blur-md rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-crypto-secondary/20 backdrop-blur-md rounded-full animate-float" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
