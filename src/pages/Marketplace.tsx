
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';
import CryptoTable from '../components/CryptoTable';
import { Button } from '@/components/ui/button';

const Marketplace = () => {
  const [activeCategory, setActiveCategory] = useState('digital');
  
  const categories = [
    { id: 'digital', name: 'Digital currency' },
    { id: 'forex', name: 'Forex' },
    { id: 'precious', name: 'Precious metals' },
    { id: 'index', name: 'Index' },
    { id: 'futures', name: 'Futures' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 pb-16">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <h1 className="text-xl font-medium mb-4">Market</h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {categories.map((category) => (
                <Button 
                  key={category.id}
                  variant="outline"
                  className={`rounded-full px-4 py-1 text-sm ${
                    activeCategory === category.id 
                      ? 'bg-crypto-accent text-white border-transparent' 
                      : 'bg-gray-100/10 text-foreground/70 border-gray-700/30'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>
          
          <div className="overflow-hidden rounded-lg">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-3 w-full border-b border-gray-700/30 px-4 py-3 text-sm">
                <div className="text-foreground/70">Market</div>
                <div className="text-right text-foreground/70">Price</div>
                <div className="text-right text-foreground/70">Change</div>
              </div>
              
              <CryptoTable category={activeCategory} />
            </motion.div>
          </div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Marketplace;
