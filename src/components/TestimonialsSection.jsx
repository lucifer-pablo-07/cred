import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';

const CounterStat = ({ end, suffix = '', prefix = '', label, description, delay = 0 }) => {
  const { count, ref } = useCounter(end, 2200);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-center group"
    >
      <div className="stat-number text-5xl md:text-6xl font-display mb-2 tabular-nums">
        {prefix}{count}{suffix}
      </div>
      <div className="text-platinum-light font-body font-medium text-base mb-1">{label}</div>
      <div className="text-platinum-dark text-sm font-light max-w-[180px] mx-auto leading-relaxed">{description}</div>
    </motion.div>
  );
};

const StoreRating = ({ store, rating, reviews, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="glass-card rounded-2xl p-5 border border-white/8 flex items-center gap-4 hover:border-gold/20 transition-colors"
  >
    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl glass-card border border-white/10">
      {icon}
    </div>
    <div className="flex-1">
      <div className="text-platinum-light text-sm font-medium mb-0.5">{store}</div>
      <div className="flex items-center gap-1 mb-0.5">
        {[...Array(5)].map((_, i) => (
          <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-gold">
            <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9.2,11 6,9.2 2.8,11 3.5,7.5 1,5 4.5,4.5" />
          </svg>
        ))}
        <span className="text-xs text-gold ml-1 font-mono">{rating}</span>
      </div>
      <div className="text-[10px] text-platinum-dark uppercase tracking-wider">{reviews} reviews</div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ name, role, text, coins, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ delay, duration: 0.7 }}
    className="glass-card rounded-2xl p-6 border border-white/8 hover:border-gold/20 transition-all duration-300 group"
    whileHover={{ y: -4 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full flex items-center justify-center font-display text-lg"
        style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(123,97,255,0.2))' }}>
        {name[0]}
      </div>
      <div>
        <div className="text-sm text-platinum-light font-medium">{name}</div>
        <div className="text-[10px] text-platinum-dark uppercase tracking-wider">{role}</div>
      </div>
      <div className="ml-auto glass-card px-2.5 py-1 rounded-full border border-gold/20">
        <span className="text-[10px] text-gold">+{coins} coins</span>
      </div>
    </div>
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 10 10" className="w-2.5 h-2.5 fill-gold">
          <polygon points="5,0.5 6.5,3.5 9.5,4 7,6.5 7.7,9.5 5,8 2.3,9.5 3,6.5 0.5,4 3.5,3.5" />
        </svg>
      ))}
    </div>
    <p className="text-platinum-dark text-sm leading-relaxed font-light">"{text}"</p>
  </motion.div>
);

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Software Engineer, Bengaluru',
    text: 'I was skeptical at first, but CRÉD changed how I handle my finances. The rewards are genuinely valuable — redeemed flights twice already.',
    coins: '12,400',
  },
  {
    name: 'Priya Nair',
    role: 'Product Manager, Mumbai',
    text: 'My credit score jumped by 58 points in 6 months just by consistently paying through CRÉD. The insights are incredibly actionable.',
    coins: '8,200',
  },
  {
    name: 'Rohit Gupta',
    role: 'Founder, Delhi',
    text: 'The exclusivity actually means something here. The interface is beautiful, the rewards are real, and I feel like a premium member every time.',
    coins: '22,100',
  },
  {
    name: 'Kavya Reddy',
    role: 'Doctor, Hyderabad',
    text: 'Never thought paying bills could be rewarding. I earn more CRÉD coins monthly than most bank cashback programs offer in a year.',
    coins: '15,800',
  },
  {
    name: 'Siddharth Jain',
    role: 'Investment Banker, Chennai',
    text: 'The credit score monitoring is the best I have seen. Actionable, clear, and it actually works. My CIBIL score is at an all-time high.',
    coins: '31,500',
  },
  {
    name: 'Ananya Sharma',
    role: 'Designer, Pune',
    text: 'From the dark UI to the smooth animations — CRÉD actually makes me enjoy managing my finances. That is truly saying something.',
    coins: '9,600',
  },
];

const TestimonialsSection = () => (
  <section className="relative py-28 bg-obsidian overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-aurora/5 blur-[80px]" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full bg-gold/5 blur-[80px]" />
    </div>

    <div className="max-w-7xl mx-auto px-6">
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">By The Numbers</div>
        <h2 className="section-title text-5xl md:text-6xl text-platinum-light mb-5">
          Numbers that <em className="gold-text">speak</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-20">
        <CounterStat end={10} suffix="M+" label="Members" description="Creditworthy individuals across India" delay={0} />
        <CounterStat end={4} suffix=".9★" label="App Rating" description="Consistently rated best fintech app" delay={0.1} />
        <CounterStat end={12} suffix="B+" prefix="₹" label="Bills Paid" description="Total credit card bills processed" delay={0.2} />
        <CounterStat end={1200} suffix="cr+" prefix="₹" label="Rewards Given" description="Total cashback and coins redeemed" delay={0.3} />
      </div>

      <div className="divider-gold mb-20" />

      {/* Store ratings */}
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-24">
        <StoreRating store="App Store" rating="4.9" reviews="2.1M+" icon="🍎" delay={0} />
        <StoreRating store="Play Store" rating="4.8" reviews="4.7M+" icon="▶" delay={0.1} />
      </div>

      {/* Testimonials */}
      <div className="text-center mb-12">
        <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Member Stories</div>
        <h2 className="section-title text-4xl md:text-5xl text-platinum-light">
          What members <em className="gold-text">say</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} {...t} delay={i * 0.08} />
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
