import React from 'react';
import { motion } from 'framer-motion';

const PropertyShowcase = () => {
  return (
    <section className="section-padding bg-[#121212]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Portfolio</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Property Showcase</h2>
          <p className="text-gray-400">Glimpses of premium properties that redefine luxury living in Lucknow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">Luxury Villas</h3>
              <p className="text-gray-200 text-sm font-medium">12 Properties</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 rounded-2xl overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" alt="Apartments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold text-white mb-1 drop-shadow-md">Premium Apartments</h3>
              <p className="text-gray-200 text-sm font-medium">45 Properties</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600" alt="Commercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md">Commercial</h3>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl overflow-hidden relative group"
          >
            <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=600" alt="Plots" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md">Plots</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
