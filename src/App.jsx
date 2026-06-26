import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageCircle, Menu, X, ArrowUp } from 'lucide-react';
import './index.css';

import PropertySearch from './components/PropertySearch';
import FeaturedProperties from './components/FeaturedProperties';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import InvestmentOpportunities from './components/InvestmentOpportunities';
import PropertyShowcase from './components/PropertyShowcase';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// HeroSection, Navbar, StatsCounter components...
// ... (Skipping full replacement of the unchanged top components, I will use targeted edits instead)

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Attempt to force play the video on mobile devices which might block the autoPlay attribute
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log("Video autoplay blocked:", err));
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted={true}
          playsInline={true}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/14713469_3840_2160_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white"
        >
          Find Your <span className="text-gradient">Dream Property</span> in Lucknow
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 text-gray-200 font-light"
        >
          Trusted Property Consultant helping families and investors buy, sell and invest with confidence.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn-primary">
            Explore Properties
          </button>
          <button className="btn-secondary text-white border-white hover:bg-white/10">
            Schedule Site Visit
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-[#d4af37] to-[#aa8c2c] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <Home className="text-[#0a0a0a]" size={20} />
          </div>
          <div>
            <h2 className="text-2xl font-bold leading-none text-white tracking-wide">MAHAKAAL</h2>
            <p className="text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-bold">Property</p>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 items-center bg-[#121212]/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/5">
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors text-sm uppercase tracking-wider font-semibold">Home</a>
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors text-sm uppercase tracking-wider font-semibold">Properties</a>
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors text-sm uppercase tracking-wider font-semibold">About</a>
          <a href="#" className="text-white hover:text-[#d4af37] transition-colors text-sm uppercase tracking-wider font-semibold">Services</a>
        </div>
        
        <div className="hidden md:block">
          <button className="btn-primary py-2 px-6 text-sm">Contact Us</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-10 bg-[#0a0a0a] border-y border-white/5 relative z-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</h3>
            <p className="text-sm uppercase tracking-widest text-gray-400">Happy Clients</p>
          </div>
          <div className="text-center border-l border-white/5">
            <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">250+</h3>
            <p className="text-sm uppercase tracking-widest text-gray-400">Properties Sold</p>
          </div>
          <div className="text-center border-l border-white/5 hidden md:block">
            <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">₹100+</h3>
            <p className="text-sm uppercase tracking-widest text-gray-400">Crore Deals</p>
          </div>
          <div className="text-center border-l border-white/5 hidden md:block">
            <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">10+</h3>
            <p className="text-sm uppercase tracking-widest text-gray-400">Years of Trust</p>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4af37] selection:text-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <PropertySearch />
      <StatsCounter />
      <FeaturedProperties />
      <WhyChooseUs />
      <AboutSection />
      <InvestmentOpportunities />
      <PropertyShowcase />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <AnimatePresence>
          {showTopBtn && (
            <motion.button 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-[#121212] border border-[#d4af37]/30 text-[#d4af37] rounded-full flex items-center justify-center shadow-lg hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-colors"
            >
              <ArrowUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
        
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
          <MessageCircle size={30} />
        </a>
      </div>
    </div>
  );
}

export default App;
