import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 'bills',
    label: 'Bill Payments',
    icon: '◈',
    color: '#C9A84C',
    tag: 'Core Feature',
    title: 'Pay every credit card bill. Earn every time.',
    description: 'Pay bills for all major banks — HDFC, SBI, ICICI, Axis, and 40+ more — from one place. Every payment earns CRÉD Coins automatically.',
    stat: '₹2.4L',
    statLabel: 'avg. annual bills paid',
    visual: (
      <div className="space-y-2 p-4">
        {[
          { bank: 'HDFC Bank', due: '₹12,480', date: '15 Feb', pct: 78 },
          { bank: 'SBI Card', due: '₹6,200', date: '18 Feb', pct: 45 },
          { bank: 'Axis Bank', due: '₹3,800', date: '22 Feb', pct: 28 },
        ].map((b, i) => (
          <motion.div
            key={b.bank}
            className="glass-card rounded-xl p-3 flex items-center justify-between border border-white/5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-gold/50" />
              </div>
              <div>
                <div className="text-xs text-platinum-light font-medium">{b.bank}</div>
                <div className="text-[10px] text-platinum-dark">Due {b.date}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gold font-mono">{b.due}</div>
              <div className="text-[10px] text-platinum-dark">{b.pct}% used</div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: 'rewards',
    label: 'Rewards',
    icon: '◎',
    color: '#7B61FF',
    tag: 'Members Benefit',
    title: 'Rewards that feel like a first-class upgrade.',
    description: 'Earn CRÉD Coins on every bill payment and redeem for flights, hotels, exclusive brand offers, and once-in-a-lifetime experiences.',
    stat: '₹1,200',
    statLabel: 'avg. monthly savings',
    visual: (
      <div className="p-4 space-y-3">
        <div className="text-center">
          <div className="text-3xl font-display text-aurora mb-1">48,200</div>
          <div className="text-xs text-platinum-dark uppercase tracking-widest">CRÉD Coins Balance</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {[
            { label: 'Flights', icon: '✈', val: '12,000 coins' },
            { label: 'Hotels', icon: '◈', val: '8,000 coins' },
            { label: 'Shopping', icon: '◇', val: '500 coins' },
            { label: 'Cashback', icon: '◉', val: '1,000 coins' },
          ].map(r => (
            <div key={r.label} className="glass-card rounded-xl p-3 border border-aurora/15">
              <div className="text-lg mb-1">{r.icon}</div>
              <div className="text-xs text-platinum-light font-medium">{r.label}</div>
              <div className="text-[10px] text-aurora mt-0.5">{r.val}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'credit',
    label: 'Credit Score',
    icon: '◇',
    color: '#00D9A6',
    tag: 'Free Tool',
    title: 'Know your credit score. Improve it daily.',
    description: 'Free real-time credit score monitoring with personalised tips, score analysis, and a roadmap to financial excellence — all in one tap.',
    stat: '+42',
    statLabel: 'avg. score improvement in 6mo',
    visual: (
      <div className="p-4 flex flex-col items-center">
        <div className="relative w-36 h-36 mb-4">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(0,217,166,0.1)" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="50"
              fill="none" stroke="#00D9A6" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 50}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - 0.87) }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
              style={{ transformOrigin: '60px 60px', transform: 'rotate(-90deg)' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-2xl font-display text-mint">782</div>
            <div className="text-[10px] text-mint uppercase tracking-wider">Excellent</div>
          </div>
        </div>
        <div className="w-full space-y-2">
          {[
            { label: 'Payment History', val: '96%', color: '#00D9A6' },
            { label: 'Credit Age', val: '7 yrs', color: '#C9A84C' },
          ].map(f => (
            <div key={f.label} className="flex justify-between text-xs glass-card rounded-lg px-3 py-2 border border-white/5">
              <span className="text-platinum-dark">{f.label}</span>
              <span style={{ color: f.color }} className="font-mono">{f.val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'upi',
    label: 'UPI Payments',
    icon: '◉',
    color: '#FF6B35',
    tag: 'Fast & Secure',
    title: 'UPI with rewards. Because why not?',
    description: 'Send and receive money instantly with CRÉD UPI. Every transaction earns you points. The first UPI app that actually rewards you for paying.',
    stat: '0.3s',
    statLabel: 'average transaction time',
    visual: (
      <div className="p-4">
        <div className="glass-card rounded-2xl p-4 border border-ember/20 mb-3">
          <div className="text-xs text-platinum-dark mb-1 uppercase tracking-widest">Sending To</div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-ember/20 flex items-center justify-center">
              <span className="text-ember font-display text-lg">P</span>
            </div>
            <div>
              <div className="text-sm text-platinum-light font-medium">Priya Sharma</div>
              <div className="text-[10px] text-platinum-dark font-mono">priya@cred</div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <div className="text-2xl font-display text-ember">₹2,500</div>
          </div>
        </div>
        <motion.div
          className="rounded-xl p-2.5 text-center text-xs"
          style={{ background: 'rgba(255,107,53,0.15)', border: '1px solid rgba(255,107,53,0.3)' }}
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-ember uppercase tracking-widest">Earning 25 CRÉD Coins</span>
        </motion.div>
      </div>
    ),
  },
  {
    id: 'coins',
    label: 'CRÉD Coins',
    icon: '⬡',
    color: '#C9A84C',
    tag: 'Earn & Redeem',
    title: 'A currency for the creditworthy.',
    description: 'CRÉD Coins are earned on every interaction — bills, UPI, referrals. Use them to unlock exclusive deals, cashbacks, and lifestyle rewards.',
    stat: '1.2B+',
    statLabel: 'coins earned by members',
    visual: (
      <div className="p-4 flex flex-col items-center gap-3">
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center text-3xl"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.3), rgba(201,168,76,0.05))', border: '2px solid rgba(201,168,76,0.4)' }}
          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ⬡
        </motion.div>
        <div className="w-full space-y-2">
          {['Bill payments: 10x coins', 'Referrals: 5,000 coins', 'First payment: 2x bonus'].map((t, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-platinum-dark">
              <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'cashback',
    label: 'Cashback',
    icon: '◪',
    color: '#00D9A6',
    tag: 'Instant Returns',
    title: 'Cashback that lands in your account, not promises.',
    description: 'Instant cashback on purchases from 1,000+ partner brands. The more you pay through CRÉD, the better your cashback rates become.',
    stat: '₹480',
    statLabel: 'avg. monthly cashback',
    visual: (
      <div className="p-4 space-y-2">
        {[
          { brand: 'Amazon', cb: '5%', max: '₹500', color: '#FF6B35' },
          { brand: 'Swiggy', cb: '10%', max: '₹200', color: '#00D9A6' },
          { brand: 'Myntra', cb: '8%', max: '₹400', color: '#7B61FF' },
        ].map((b) => (
          <div key={b.brand} className="glass-card rounded-xl p-3 flex items-center justify-between border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: b.color + '22', border: `1px solid ${b.color}44` }}>
                <div className="w-3 h-3 rounded-full" style={{ background: b.color + '88' }} />
              </div>
              <span className="text-xs text-platinum-light">{b.brand}</span>
            </div>
            <div className="text-right">
              <div className="text-xs font-mono" style={{ color: b.color }}>{b.cb} back</div>
              <div className="text-[10px] text-platinum-dark">upto {b.max}</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];

const FeatureCard = ({ feature, isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    data-hover
    className={`feature-card glass-card rounded-2xl p-5 cursor-pointer border transition-all duration-300 ${
      isActive ? 'border-gold/40 shadow-gold-sm' : 'border-white/5 hover:border-white/15'
    }`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="flex items-start justify-between mb-3">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
        style={{ background: `${feature.color}18`, color: feature.color, border: `1px solid ${feature.color}30` }}
      >
        {feature.icon}
      </div>
      <div
        className="text-[9px] uppercase tracking-widest px-2 py-1 rounded-full"
        style={{ background: `${feature.color}18`, color: feature.color }}
      >
        {feature.tag}
      </div>
    </div>
    <h4 className="font-body font-medium text-platinum-light text-sm mb-1">{feature.label}</h4>
    <p className="text-platinum-dark text-xs leading-relaxed line-clamp-2">{feature.description}</p>
    <div className="mt-3 pt-3 border-t border-white/5 flex items-baseline gap-1.5">
      <span className="font-display text-xl" style={{ color: feature.color }}>{feature.stat}</span>
      <span className="text-[10px] text-platinum-dark">{feature.statLabel}</span>
    </div>
  </motion.div>
);

const FeaturesSection = () => {
  const [active, setActive] = useState(features[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="features" ref={sectionRef} className="relative py-28 bg-void overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Features</div>
          <h2 className="section-title text-5xl md:text-6xl text-platinum-light mb-5">
            Built for the <em className="gold-text">exceptional</em>
          </h2>
          <p className="text-platinum-dark text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Every feature is crafted to make your financial life effortless, rewarding, and intelligent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Feature detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden border shadow-card"
                style={{ borderColor: `${active.color}25` }}
              >
                {/* Visual area */}
                <div className="min-h-[260px] relative" style={{ background: `radial-gradient(ellipse at 50% 0%, ${active.color}12, transparent 70%)` }}>
                  {active.visual}
                </div>
                {/* Detail text */}
                <div className="p-6 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: active.color }}>
                    {active.tag}
                  </div>
                  <h3 className="font-display text-2xl text-platinum-light font-light mb-3 leading-tight">
                    {active.title}
                  </h3>
                  <p className="text-platinum-dark text-sm leading-relaxed">{active.description}</p>
                  <motion.button
                    className="mt-5 text-xs uppercase tracking-widest flex items-center gap-2 group"
                    style={{ color: active.color }}
                    whileHover={{ x: 4 }}
                  >
                    Explore Feature
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Feature grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i, duration: 0.6 }}
              >
                <FeatureCard
                  feature={f}
                  isActive={active.id === f.id}
                  onClick={() => setActive(f)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
