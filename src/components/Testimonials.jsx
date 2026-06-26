import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data';

const Testimonials = () => {
  return (
    <section className="section-padding bg-[#121212] relative">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Client Success Stories</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-panel p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-[#d4af37]/20" size={60} />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#d4af37" className="text-[#d4af37]" />
                ))}
              </div>
              <p className="text-gray-300 mb-8 italic relative z-10">"{testimonial.review}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] rounded-full flex items-center justify-center text-[#0a0a0a] font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Verified Buyer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
