import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InvestmentOpportunities = () => {
  const opportunities = [
    {
      title: "Residential Projects",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
      roi: "High ROI"
    },
    {
      title: "Commercial Spaces",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      roi: "Steady Income"
    },
    {
      title: "Land & Plots",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      roi: "Capital Appreciation"
    },
    {
      title: "Luxury Villas",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
      roi: "Premium Asset"
    }
  ];

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Grow Your Wealth</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-gray-400">Discover prime real estate opportunities that guarantee substantial returns and secure your financial future.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {opportunities.map((opp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={opp.image} alt={opp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-[#d4af37] text-[#0a0a0a] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {opp.roi}
              </div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#d4af37] transition-colors">{opp.title}</h3>
                <div className="flex items-center text-[#d4af37] font-medium text-sm group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
