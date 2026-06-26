import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Car, Heart } from 'lucide-react';
import { properties } from '../data';

const FeaturedProperties = () => {
  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Exclusive Collection</h4>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Properties</h2>
          </div>
          <button className="hidden md:block btn-secondary text-sm">View All Properties</button>
        </motion.div>

        <div className="grid-cards">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-panel overflow-hidden group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#121212]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#d4af37]">
                  {property.type}
                </div>
                <button className="absolute top-4 right-4 w-8 h-8 bg-[#121212]/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-red-500 transition-colors">
                  <Heart size={16} />
                </button>
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                  <h3 className="text-2xl font-bold text-white">{property.price}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#d4af37] transition-colors">{property.name}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <MapPin size={16} className="mr-1" />
                  {property.location}
                </div>
                
                <div className="grid grid-cols-4 gap-2 border-t border-white/10 pt-4 mb-6">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <Bed size={18} className="mb-1" />
                    <span className="text-xs">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-400 border-l border-white/10">
                    <Bath size={18} className="mb-1" />
                    <span className="text-xs">{property.bathrooms} Baths</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-400 border-l border-white/10">
                    <Square size={18} className="mb-1" />
                    <span className="text-xs">{property.area} sqft</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-gray-400 border-l border-white/10">
                    <Car size={18} className="mb-1" />
                    <span className="text-xs">{property.parking} Park</span>
                  </div>
                </div>
                
                <button className="w-full btn-secondary py-3 text-sm">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center md:hidden">
          <button className="btn-secondary">View All Properties</button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
