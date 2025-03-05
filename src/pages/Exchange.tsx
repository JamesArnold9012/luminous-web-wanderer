
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import BottomNavigation from '../components/BottomNavigation';
import ExchangeForm from '../components/ExchangeForm';

const Exchange = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main className="pt-20 pb-16">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExchangeForm />
          </motion.div>
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Exchange;
