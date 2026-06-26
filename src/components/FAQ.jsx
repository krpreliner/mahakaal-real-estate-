import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-[#0a0a0a]">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Have Questions?</h4>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel overflow-hidden border border-white/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className={`text-lg font-semibold transition-colors ${openIndex === index ? 'text-[#d4af37]' : 'text-white'}`}>
                  {faq.question}
                </h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'bg-[#121212] text-gray-400'}`}>
                  {openIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
