import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, Landmark, CalendarCheck, TrendingUp, Handshake } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Verified Properties",
      desc: "100% verified listings with zero legal disputes ensuring peace of mind."
    },
    {
      icon: <Scale size={32} />,
      title: "Legal Assistance",
      desc: "End-to-end legal documentation and registration support."
    },
    {
      icon: <Landmark size={32} />,
      title: "Home Loan Support",
      desc: "Tie-ups with leading banks to provide hassle-free loan approvals."
    },
    {
      icon: <CalendarCheck size={32} />,
      title: "Site Visits",
      desc: "Complimentary site visits with our expert property consultants."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Investment Consultation",
      desc: "Data-driven advice for high ROI real estate investments."
    },
    {
      icon: <Handshake size={32} />,
      title: "Transparent Pricing",
      desc: "No hidden charges. Clear and transparent property valuations."
    }
  ];

  return (
    <section className="section-padding bg-[#121212] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Our Value Proposition</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Mahakaal Property</h2>
          <p className="text-gray-400 text-lg">We provide end-to-end property assistance with a focus on trust, transparency, and tailored solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37] mb-6 group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a] transition-colors duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
              <p className="text-gray-400 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
