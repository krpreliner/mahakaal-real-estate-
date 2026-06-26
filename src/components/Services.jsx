import React from 'react';
import { motion } from 'framer-motion';
import { Home, Key, TrendingUp, Briefcase, FileCheck, Landmark } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Home size={28} />, title: 'Buy Property', desc: 'Find your dream home with our extensive curated listings and personalized assistance.' },
    { icon: <Key size={28} />, title: 'Sell Property', desc: 'Get the best market value for your property with our premium network of buyers.' },
    { icon: <TrendingUp size={28} />, title: 'Property Valuation', desc: 'Accurate and data-driven property valuation to ensure you get the right price.' },
    { icon: <FileCheck size={28} />, title: 'Legal Assistance', desc: 'Complete legal documentation and verification to ensure a smooth, risk-free transaction.' },
    { icon: <Landmark size={28} />, title: 'Loan Consultation', desc: 'Hassle-free home loans with our banking partners at the best interest rates.' },
    { icon: <Briefcase size={28} />, title: 'Investment Planning', desc: 'Strategic advice for high-yield real estate investments in emerging corridors.' },
  ];

  return (
    <section className="section-padding bg-[#121212] relative border-t border-white/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">What We Do</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Real Estate Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-8 border border-white/5 rounded-[24px] hover:border-[#d4af37]/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-[#121212] rounded-2xl flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] group-hover:text-[#0a0a0a] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
