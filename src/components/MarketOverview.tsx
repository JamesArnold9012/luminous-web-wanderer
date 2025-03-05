
import React from 'react';
import { motion } from 'framer-motion';

// Mock crypto data
const cryptoData = [
  { id: 'xau', name: 'XAU', price: '2911.0055', change: -0.22, symbol: '₳', color: 'orange' },
  { id: 'xpd', name: 'XPD', price: '948.2474', change: 1.24, symbol: '₱', color: 'gray' },
  { id: 'xag', name: 'XAG', price: '32.0116', change: 0.16, symbol: '₴', color: 'silver' },
  { id: 'xap', name: 'XAP', price: '961.0819', change: 0.53, symbol: '₵', color: 'teal' },
  { id: 'gt', name: 'GT', price: '27038.3537', change: -0.19, symbol: '₲', color: 'gold' },
  { id: 'twgd', name: 'TWGD', price: '115069.2460', change: -0.50, symbol: '₮', color: 'red' }
];

const categories = [
  { id: 'metals', name: 'Precious metals' },
  { id: 'digital', name: 'Digital currency' },
  { id: 'forex', name: 'Forex' },
  { id: 'index', name: 'Index' },
  { id: 'futures', name: 'Futures' }
];

const MarketOverview = () => {
  const [activeCategory, setActiveCategory] = React.useState('metals');

  return (
    <section className="py-16 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Market <span className="text-crypto-accent">Overview</span></h2>
              <p className="text-foreground/70">Real-time price updates across all markets</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-2 mt-4 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    activeCategory === category.id 
                      ? 'bg-crypto-accent text-white' 
                      : 'bg-foreground/10 text-foreground/70 hover:bg-foreground/20'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="glassmorphism rounded-xl border border-white/10 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-4 px-6 text-left text-sm font-medium text-foreground/70">Asset</th>
                    <th className="py-4 px-6 text-right text-sm font-medium text-foreground/70">Price</th>
                    <th className="py-4 px-6 text-right text-sm font-medium text-foreground/70">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto, index) => (
                    <motion.tr 
                      key={crypto.id}
                      className="coin-row"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      <td className="py-4 px-6 flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 bg-${crypto.color}-500/20`}>
                          <span className="text-sm font-medium">{crypto.symbol}</span>
                        </div>
                        <div>
                          <div className="font-medium">{crypto.name}</div>
                          <div className="text-xs text-foreground/60">{crypto.id.toUpperCase()}</div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right font-medium">${crypto.price}</td>
                      <td className={`py-4 px-6 text-right font-medium ${crypto.change >= 0 ? 'positive' : 'negative'}`}>
                        {crypto.change >= 0 ? '+' : ''}{crypto.change}%
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketOverview;
