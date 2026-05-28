import { motion } from 'framer-motion';

const CtaSection = () => (
  <section className="relative py-28 bg-obsidian overflow-hidden">
    {/* Dramatic radial glow */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>

    <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Emblem */}
        <div className="flex justify-center mb-10">
          <motion.div
            className="relative w-24 h-24"
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gold/20 rotate-45 animate-pulse-gold" />
            <div className="absolute inset-2 rounded-xl bg-obsidian rotate-45" />
            <div className="absolute inset-4 rounded-lg bg-gold/40 rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gold font-display text-3xl font-light">C</span>
            </div>
          </motion.div>
        </div>

        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Join The Club</div>
        <h2 className="section-title text-5xl md:text-7xl text-platinum-light mb-6 max-w-3xl mx-auto leading-none">
          You have earned{' '}
          <em className="gold-text">the upgrade.</em>
        </h2>
        <p className="text-platinum-dark text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          If your credit score qualifies, you deserve to be here. 
          Join 10M+ members who pay smarter, earn more, and live better.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <motion.button
            className="neo-button px-10 py-4 text-sm rounded-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Check Eligibility Now
          </motion.button>
          <motion.button
            className="px-10 py-4 text-sm rounded-sm glass-card border border-gold/20 text-platinum-dark hover:text-platinum-light hover:border-gold/40 uppercase tracking-widest transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            Download App
          </motion.button>
        </div>

        {/* App store buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: '🍎  App Store', sub: '4.9 · 2.1M+ Ratings' },
            { label: '▶  Google Play', sub: '4.8 · 4.7M+ Ratings' },
          ].map((store) => (
            <motion.div
              key={store.label}
              className="glass-card rounded-xl px-6 py-3 border border-white/8 hover:border-gold/25 transition-colors cursor-pointer"
              whileHover={{ y: -3 }}
            >
              <div className="text-sm text-platinum-light font-medium">{store.label}</div>
              <div className="text-[10px] text-platinum-dark uppercase tracking-wider">{store.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
