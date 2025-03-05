
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 'recharge',
    icon: '💰',
    title: 'Recharge',
    description: 'Deposit funds to your account instantly using multiple payment methods',
    path: '/recharge'
  },
  {
    id: 'invite',
    icon: '👥',
    title: 'Invite',
    description: 'Refer friends and earn rewards for every successful referral',
    path: '/invite'
  },
  {
    id: 'online',
    icon: '🌐',
    title: 'Online',
    description: 'Access all platform features from any device, anytime',
    path: '/online'
  },
  {
    id: 'mining',
    icon: '⛏️',
    title: 'Mining Pool',
    description: 'Join our mining pools to maximize your mining rewards',
    path: '/mining'
  },
  {
    id: 'quantify',
    icon: '📊',
    title: 'Quantify',
    description: 'Analyze market data with advanced quantitative tools',
    path: '/quantify'
  },
  {
    id: 'arbitrage',
    icon: '↔️',
    title: 'Arbitrage',
    description: 'Identify and exploit price differences across exchanges',
    path: '/arbitrage'
  },
  {
    id: 'loan',
    icon: '💳',
    title: 'Loan',
    description: 'Access crypto-backed loans with competitive interest rates',
    path: '/loan'
  },
  {
    id: 'debt',
    icon: '📝',
    title: 'Debt',
    description: 'Manage your loan repayments and track your debt efficiently',
    path: '/debt'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link to={feature.path} className="block h-full">
        <div className="h-full glassmorphism rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-crypto-card-hover border border-white/10 hover:border-crypto-accent/30 hover:shadow-glow-blue">
          <div className="w-14 h-14 mb-4 flex items-center justify-center text-2xl rounded-full bg-gradient-to-r from-crypto-accent/20 to-crypto-secondary/20 backdrop-blur-sm group-hover:from-crypto-accent/30 group-hover:to-crypto-secondary/30 transition-all duration-300">
            {feature.icon}
          </div>
          <h3 className="text-lg font-medium mb-2 text-foreground group-hover:text-crypto-accent transition-all duration-300">{feature.title}</h3>
          <p className="text-sm text-foreground/70 group-hover:text-foreground/80 transition-all duration-300">{feature.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const FeaturesGrid = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Comprehensive <span className="text-crypto-accent">Trading Tools</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Everything you need to manage your digital assets in one platform
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
