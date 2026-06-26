import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="section-padding bg-[#121212] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Find Your Perfect Property</h2>
          <p className="text-gray-400 text-lg">Schedule a consultation with Dhananjay Singh to discuss your real estate requirements.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 glass-panel p-2 md:p-4">
          <div className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-8 text-white">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Office Address</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Mahakaal Property<br />
                    Owner: Dhananjay Singh<br />
                    Shaheed Nagar, Lucknow<br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1e1e1e] border border-white/10 flex items-center justify-center text-[#d4af37] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Email</h4>
                  <p className="text-gray-400">info@mahakaalproperty.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0a0a0a] rounded-[24px] p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-3xl font-bold mb-8 text-white">Send a Message</h3>
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                  <input type="text" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Property Requirement</label>
                  <select className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#d4af37] transition-colors">
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Renting</option>
                    <option>Investment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Estimated Budget</label>
                  <select className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#d4af37] transition-colors">
                    <option>Under ₹50 Lacs</option>
                    <option>₹50 Lacs - ₹1 Cr</option>
                    <option>₹1 Cr - ₹3 Cr</option>
                    <option>Above ₹3 Cr</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                <textarea rows="4" className="w-full bg-[#1e1e1e] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button type="submit" className="btn-primary w-full h-[54px] text-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
