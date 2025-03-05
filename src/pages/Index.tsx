
import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import FeaturesGrid from '../components/FeaturesGrid';
import MarketOverview from '../components/MarketOverview';
import NewsAndUpdates from '../components/NewsAndUpdates';
import Footer from '../components/Footer';
import BottomNavigation from '../components/BottomNavigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      
      <main>
        <HeroSection />
        <FeaturesGrid />
        <MarketOverview />
        <NewsAndUpdates />
      </main>
      
      <Footer />
      <BottomNavigation />
    </div>
  );
};

export default Index;
