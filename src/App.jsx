import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import SecuritySection from './components/SecuritySection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Loading screen
const Loader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-void flex flex-col items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Logo mark */}
        <div className="relative w-16 h-16 mb-8">
          <motion.div
            className="absolute inset-0 bg-gold rounded-md"
            animate={{ rotate: [0, 45, 45] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-[6px] bg-void rounded-sm"
            animate={{ rotate: [0, 45, 45] }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-[10px] bg-gold/60 rounded-sm"
            animate={{ rotate: [0, 45, 45] }}
            transition={{ duration: 0.5, delay: 0.25 }}
          />
        </div>

        {/* Word mark */}
        <motion.div
          className="font-display text-4xl text-platinum-light tracking-[0.2em] mb-8"
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 1, letterSpacing: '0.2em' }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          CR<span className="gold-text">É</span>D
        </motion.div>

        {/* Progress bar */}
        <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.2 }}
            onAnimationComplete={onComplete}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor (desktop only) */}
      {!isMobile && <CustomCursor />}

      <AnimatePresence>
        {loading && <Loader onComplete={() => setTimeout(() => setLoading(false), 200)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <TestimonialsSection />
            <SecuritySection />
            <CtaSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
