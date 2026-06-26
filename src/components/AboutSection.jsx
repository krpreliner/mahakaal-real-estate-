import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#d4af37] translate-x-4 translate-y-4 rounded-2xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200" 
              alt="Dhananjay Singh - Owner" 
              className="relative z-10 w-full h-[600px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-10 -right-10 z-20 glass-panel p-6 w-64 hidden md:block">
              <h3 className="text-[#d4af37] text-2xl font-bold mb-1">10+ Years</h3>
              <p className="text-gray-300 text-sm">Of Real Estate Excellence in Lucknow</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">About The Founder</h4>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Dhananjay Singh</h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              "Mahakaal Property is committed to helping families and investors find the perfect property in Lucknow. We believe in transparency, trust, and personalized service, guiding every client from property selection to registration."
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              With a deep understanding of Lucknow's evolving real estate landscape, Dhananjay Singh has built Mahakaal Property into a trusted name synonymous with luxury, reliability, and unparalleled customer service. Whether you are seeking a dream home or a lucrative investment, our team ensures a seamless experience.
            </p>
            
            <div className="flex items-center gap-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150" 
                alt="Signature" 
                className="w-16 h-16 rounded-full object-cover md:hidden"
              />
              <div>
                <h4 className="font-bold text-xl text-white">Dhananjay Singh</h4>
                <p className="text-[#d4af37] text-sm">Founder & CEO, Mahakaal Property</p>
              </div>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10 flex gap-6">
              <button className="btn-primary">Book Consultation</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
