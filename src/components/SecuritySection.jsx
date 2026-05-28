import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SecurityCard = ({ icon, title, description, label, delay, color = '#C9A84C' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card rounded-2xl p-7 border border-white/8 hover:border-gold/25 transition-all duration-300 group relative overflow-hidden"
    whileHover={{ y: -6 }}
  >
    {/* Background gradient */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
      style={{ background: `radial-gradient(ellipse at 50% 0%, ${color}08, transparent 70%)` }}
    />

    <div className="relative z-10">
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
        >
          {icon}
        </div>
        <div
          className="text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-mono"
          style={{ background: `${color}15`, color }}
        >
          {label}
        </div>
      </div>
      <h3 className="font-body font-semibold text-platinum-light text-base mb-3">{title}</h3>
      <p className="text-platinum-dark text-sm leading-relaxed font-light">{description}</p>
    </div>
  </motion.div>
);

const securityFeatures = [
  {
    icon: '🔒',
    title: '256-bit AES Encryption',
    description: 'All data is encrypted using bank-grade AES-256 encryption — the same standard used by the world\'s largest financial institutions.',
    label: 'Bank Grade',
    color: '#C9A84C',
  },
  {
    icon: '🛡',
    title: 'RBI-Regulated Platform',
    description: 'CRÉD operates under strict guidelines by the Reserve Bank of India and is fully compliant with all NPCI regulations.',
    label: 'Certified',
    color: '#7B61FF',
  },
  {
    icon: '👁',
    title: 'Zero Data Selling',
    description: 'Your financial data is never sold, shared, or monetised. Ever. Our privacy-first commitment is legally binding.',
    label: 'Privacy First',
    color: '#00D9A6',
  },
  {
    icon: '⚡',
    title: 'Instant Fraud Alerts',
    description: 'AI-powered anomaly detection scans every transaction in real-time. You get notified of any suspicious activity within seconds.',
    label: 'AI Powered',
    color: '#FF6B35',
  },
  {
    icon: '🔑',
    title: 'Biometric Authentication',
    description: 'Face ID and fingerprint authentication on every login and payment. Your identity is always verified before access is granted.',
    label: 'Multi-Factor',
    color: '#C9A84C',
  },
  {
    icon: '📋',
    title: 'SOC 2 Type II Audited',
    description: 'Our systems are independently audited by world-class security firms to ensure your data remains protected at every layer.',
    label: 'Audited',
    color: '#7B61FF',
  },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="security" ref={ref} className="relative py-28 bg-void overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(123,97,255,0.04) 0%, transparent 50%)',
          }}
        />
        {/* Animated lock rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[200, 300, 400].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-gold/5"
              style={{
                width: size,
                height: size,
                top: -size / 2,
                left: -size / 2,
              }}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 20 + i * 10, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold/30" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Security</div>
            <h2 className="section-title text-5xl md:text-6xl text-platinum-light mb-5">
              Trusted. Secured.{' '}
              <em className="gold-text">Uncompromising.</em>
            </h2>
            <p className="text-platinum-dark text-lg max-w-2xl mx-auto font-light leading-relaxed">
              We handle your financial data with the same care and precision you apply to your credit score.
              Every layer. Every transaction. Every time.
            </p>
          </motion.div>
        </div>

        {/* Central security indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="glass-card rounded-3xl px-8 py-5 border border-gold/20 flex items-center gap-6 shadow-gold-sm">
            <motion.div
              className="w-4 h-4 rounded-full bg-mint"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <div className="text-platinum-light font-medium text-sm">All Systems Secure</div>
              <div className="text-platinum-dark text-xs uppercase tracking-widest">99.99% uptime · 0 breaches</div>
            </div>
            <div className="h-8 w-px bg-gold/15" />
            <div className="text-right">
              <div className="text-gold font-mono text-sm font-medium">ISO 27001</div>
              <div className="text-platinum-dark text-xs uppercase tracking-widest">Certified</div>
            </div>
          </div>
        </motion.div>

        {/* Security cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {securityFeatures.map((f, i) => (
            <SecurityCard key={f.title} {...f} delay={i * 0.08} />
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 glass-card rounded-2xl p-6 border border-gold/10 flex flex-wrap justify-around gap-6"
        >
          {[
            'RBI Registered', 'PCI DSS Compliant', 'SSL Secured', 'NPCI Certified', 'ISO 27001'
          ].map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mint" />
              <span className="text-xs text-platinum-dark uppercase tracking-widest">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
