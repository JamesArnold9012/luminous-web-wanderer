
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-0"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-crypto-accent to-crypto-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">Λ</span>
              </div>
              <span className="font-medium text-lg">CryptoVerse</span>
            </div>
            <p className="text-sm text-foreground/70">The next generation platform for digital asset trading, offering a comprehensive suite of tools for traders of all levels.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-crypto-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-crypto-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-crypto-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              <a href="#" className="text-foreground/70 hover:text-crypto-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link to="/exchange" className="text-foreground/70 hover:text-crypto-accent text-sm">Exchange</Link></li>
              <li><Link to="/wallet" className="text-foreground/70 hover:text-crypto-accent text-sm">Wallet</Link></li>
              <li><Link to="/marketplace" className="text-foreground/70 hover:text-crypto-accent text-sm">Marketplace</Link></li>
              <li><Link to="/mining" className="text-foreground/70 hover:text-crypto-accent text-sm">Mining</Link></li>
              <li><Link to="/cards" className="text-foreground/70 hover:text-crypto-accent text-sm">Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-foreground/70 hover:text-crypto-accent text-sm">Blog</Link></li>
              <li><Link to="/academy" className="text-foreground/70 hover:text-crypto-accent text-sm">Academy</Link></li>
              <li><Link to="/faq" className="text-foreground/70 hover:text-crypto-accent text-sm">FAQ</Link></li>
              <li><Link to="/support" className="text-foreground/70 hover:text-crypto-accent text-sm">Support</Link></li>
              <li><Link to="/api" className="text-foreground/70 hover:text-crypto-accent text-sm">API Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-foreground/70 hover:text-crypto-accent text-sm">About Us</Link></li>
              <li><Link to="/careers" className="text-foreground/70 hover:text-crypto-accent text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-foreground/70 hover:text-crypto-accent text-sm">Contact</Link></li>
              <li><Link to="/privacy" className="text-foreground/70 hover:text-crypto-accent text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-foreground/70 hover:text-crypto-accent text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">© 2023 CryptoVerse. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-foreground/60 hover:text-foreground">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-foreground/60 hover:text-foreground">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-foreground/60 hover:text-foreground">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
