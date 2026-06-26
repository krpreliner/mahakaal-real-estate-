import React from 'react';
import { Home, MessageCircle, Globe, Mail, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] rounded-full flex items-center justify-center">
                <Home className="text-[#0a0a0a]" size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-none text-white tracking-wide">MAHAKAAL</h2>
                <p className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase">Property</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Your trusted partner in finding the perfect luxury real estate in Lucknow. We bring you the most exclusive properties with unmatched transparency and service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-white/5 transition-colors border border-white/5">
                <Share2 size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-white/5 transition-colors border border-white/5">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-white/5 transition-colors border border-white/5">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-white/5 transition-colors border border-white/5">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Our Properties</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Investment Opportunities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Buy Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Sell Property</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Property Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Legal Assistance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors text-sm">Home Loan Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get the latest property updates and investment opportunities.</p>
            <div className="flex">
              <input type="email" placeholder="Your email address" className="bg-[#121212] border border-white/10 rounded-l-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors w-full text-sm" />
              <button className="bg-gradient-to-r from-[#d4af37] to-[#aa8c2c] text-[#0a0a0a] font-bold px-6 rounded-r-lg hover:opacity-90 transition-opacity">
                Join
              </button>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Mahakaal Property. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
