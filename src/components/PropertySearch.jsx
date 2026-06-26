import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Home, IndianRupee } from 'lucide-react';

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState('Buy');

  return (
    <section className="py-20 px-6 container relative z-20 -mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-6 md:p-8 max-w-6xl mx-auto"
      >
        <div className="flex gap-4 mb-8 border-b border-white/10 pb-4">
          {['Buy', 'Rent', 'Invest'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-semibold px-4 py-2 transition-all ${
                activeTab === tab 
                  ? 'text-[#d4af37] border-b-2 border-[#d4af37]' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">Property Type</label>
            <div className="relative">
              <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select className="w-full bg-[#121212]/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-[#d4af37] transition-colors">
                <option>All Types</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Plot</option>
                <option>Commercial</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">Location</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select className="w-full bg-[#121212]/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-[#d4af37] transition-colors">
                <option>Any Location</option>
                <option>Gomti Nagar</option>
                <option>Sushant Golf City</option>
                <option>Shaheed Path</option>
                <option>Indira Nagar</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">Budget</label>
            <div className="relative">
              <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <select className="w-full bg-[#121212]/50 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-[#d4af37] transition-colors">
                <option>Any Budget</option>
                <option>Under ₹50 Lacs</option>
                <option>₹50 Lacs - ₹1 Cr</option>
                <option>₹1 Cr - ₹3 Cr</option>
                <option>Above ₹3 Cr</option>
              </select>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">Bedrooms</label>
            <select className="w-full bg-[#121212]/50 border border-white/10 rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#d4af37] transition-colors">
              <option>Any</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK+</option>
            </select>
          </div>

          <button className="btn-primary w-full h-[50px]">
            <Search size={20} /> Search
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default PropertySearch;
