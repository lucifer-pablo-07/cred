import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MembershipBadge = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card rounded-2xl p-6 flex flex-col items-center text-center border border-gold/10 hover:border-gold/25 transition-colors duration-300"
  >
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-4 ring-1 ring-gold/20">
      <div className="w-8 h-8 rounded-full bg-gold/30 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-gold" />
      </div>
    </div>
    <div className="text-xs uppercase tracking-widest text-gold mb-1">CRÉD Member</div>
    <div className="font-display text-lg text-platinum-light">Tier 1 · Elite</div>
  </motion.div>
);

const TrustPillar = ({ icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl glass-card flex items-center justify-center text-gold text-xl border border-gold/15 group-hover:border-gold/35 transition-colors duration-300">
          {icon}
        </div>
        <div>
          <h4 className="font-body font-medium text-platinum-light text-base mb-1.5">{title}</h4>
          <p className="text-platinum-dark text-sm leading-relaxed font-light">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const pillars = [
    {
      icon: '◈',
      title: 'Invite Only Access',
      description: 'Not everyone qualifies. CRÉD is built exclusively for individuals with a credit score above 750 — because excellence deserves recognition.',
    },
    {
      icon: '◎',
      title: 'Rewards That Matter',
      description: 'Every payment earns CRÉD Coins. Redeem for flights, hotels, premium brands, and experiences — the more you pay, the more you earn.',
    },
    {
      icon: '◇',
      title: 'Financial Intelligence',
      description: 'Track your credit score in real time, understand your financial health, and receive personalised insights to keep you ahead.',
    },
    {
      icon: '◉',
      title: 'Zero Compromise on Privacy',
      description: 'Bank-grade encryption on every transaction. Your data is yours — we never sell it, share it, or compromise on your security.',
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden bg-obsidian">
      {/* Section divider */}
      <div className="divider-gold mb-0 absolute top-0 left-0 right-0" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-gold/4 blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-aurora/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Central card */}
            <div className="relative z-10">
              <div className="glass-card rounded-3xl p-8 border border-gold/15 shadow-card">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-platinum-dark mb-1">Welcome Back,</div>
                    <div className="font-display text-2xl text-platinum-light font-light">Arjun Mehta</div>
                  </div>
                  <div className="glass-card px-3 py-1.5 rounded-full border border-gold/20">
                    <span className="text-xs text-gold uppercase tracking-widest">Elite</span>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { label: 'CRÉD Coins', value: '48,200' },
                    { label: 'Bills Paid', value: '₹2.4L' },
                    { label: 'Credit Score', value: '782' },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="stat-number text-xl mb-0.5">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-platinum-dark">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3">
                  {[
                    { label: 'Credit Utilisation', pct: 28, color: '#00D9A6' },
                    { label: 'Payment History', pct: 96, color: '#C9A84C' },
                    { label: 'Score Health', pct: 87, color: '#7B61FF' },
                  ].map((bar, i) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-[10px] mb-1">
                        <span className="text-platinum-dark uppercase tracking-wider">{bar.label}</span>
                        <span className="font-mono" style={{ color: bar.color }}>{bar.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: bar.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${bar.pct}%` } : {}}
                          transition={{ delay: 0.5 + i * 0.2, duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent transactions */}
                <div className="mt-6 pt-5 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-widest text-platinum-dark mb-3">Recent Activity</div>
                  {[
                    { name: 'HDFC Credit Card', amount: '−₹12,480', sub: 'Earned 1,248 coins', color: '#C9A84C' },
                    { name: 'Cashback Redeemed', amount: '+₹480', sub: 'Amazon voucher', color: '#00D9A6' },
                  ].map((tx) => (
                    <div key={tx.name} className="flex justify-between items-center py-2.5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl glass-card flex items-center justify-center border border-white/5">
                          <div className="w-3 h-3 rounded-full" style={{ background: tx.color + '66' }} />
                        </div>
                        <div>
                          <div className="text-xs text-platinum-light font-medium">{tx.name}</div>
                          <div className="text-[10px] text-platinum-dark">{tx.sub}</div>
                        </div>
                      </div>
                      <div className="text-xs font-mono" style={{ color: tx.color }}>{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 z-20"
            >
              <div className="glass-card rounded-2xl px-4 py-3 border border-gold/25 shadow-gold-sm">
                <div className="text-xs text-gold uppercase tracking-widest">Member Since</div>
                <div className="font-display text-lg text-platinum-light">2021</div>
              </div>
            </motion.div>

            {/* Bottom badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-5 -left-5 z-20"
            >
              <div className="glass-card rounded-xl px-4 py-2.5 border border-mint/25">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mint" />
                  <span className="text-xs text-mint uppercase tracking-widest">Score Improved</span>
                  <span className="text-xs font-mono text-platinum-light">+42 pts</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-10"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About CRÉD</div>
              <h2 className="section-title text-5xl md:text-6xl text-platinum-light mb-6">
                Not for everyone.{' '}
                <em className="gold-text">By design.</em>
              </h2>
              <p className="text-platinum-dark text-lg leading-relaxed font-light">
                CRÉD was founded on a simple belief — people who honour their financial commitments 
                deserve something better. A platform that treats them as the premium members they are, 
                not just another account number.
              </p>
            </motion.div>

            <div className="space-y-7">
              {pillars.map((p, i) => (
                <TrustPillar key={p.title} {...p} delay={0.3 + i * 0.1} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-10"
            >
              <button className="neo-button px-8 py-3.5 text-xs rounded-sm">
                Check Your Eligibility
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="divider-gold mt-28 absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default AboutSection;
