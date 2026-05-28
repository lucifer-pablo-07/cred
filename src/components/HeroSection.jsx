import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingCard = ({ delay = 0, style = {}, label = '', amount = '', type = 'payment' }) => (
  <motion.div
    className="credit-card p-4 w-56 shadow-card absolute"
    style={style}
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ scale: 1.05, zIndex: 10 }}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay: delay * 0.5 }}
    >
      {type === 'payment' && (
        <>
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="text-xs text-platinum-dark uppercase tracking-widest mb-1">Credit Card</div>
              <div className="text-platinum-light text-sm font-mono">{label}</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gold/60" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-gold text-lg font-display font-medium">{amount}</div>
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-0.5 flex-1 bg-gold/20 rounded-full">
                  <div className="h-full bg-gold/60 rounded-full" style={{ width: `${70 + i * 7}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <div className="text-xs text-platinum-dark font-mono">•••• •••• •••• 4521</div>
            <div className="flex -space-x-2">
              <div className="w-5 h-5 rounded-full bg-gold/50 border border-obsidian" />
              <div className="w-5 h-5 rounded-full bg-ember/50 border border-obsidian" />
            </div>
          </div>
        </>
      )}
      {type === 'reward' && (
        <>
          <div className="text-xs text-platinum-dark uppercase tracking-widest mb-2">Reward Earned</div>
          <div className="text-gold text-2xl font-display font-semibold mb-1">{amount}</div>
          <div className="text-platinum-dark text-xs">{label}</div>
          <div className="mt-3 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-gold"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
              />
            ))}
          </div>
        </>
      )}
      {type === 'score' && (
        <>
          <div className="text-xs text-platinum-dark uppercase tracking-widest mb-2">Credit Score</div>
          <div className="relative w-16 h-16 mx-auto mb-2">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="2" />
              <motion.circle
                cx="18" cy="18" r="15.9" fill="none" stroke="#C9A84C" strokeWidth="2"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 22 }}
                transition={{ delay: 1.5, duration: 2, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-mono text-gold">782</span>
            </div>
          </div>
          <div className="text-center text-xs text-mint font-medium">Excellent</div>
        </>
      )}
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const titleWords = ["The only app", "the creditworthy", "deserve."];

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-void">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="glow-orb w-[600px] h-[600px] bg-gold/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="glow-orb w-96 h-96 bg-aurora/10 top-20 right-10"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="glow-orb w-72 h-72 bg-ember/8 bottom-20 left-10"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial fade from center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(201,168,76,0.05),rgba(0,0,0,0))]" />
      </div>

      <motion.div style={{ opacity, y }} className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-mint"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-platinum-dark tracking-widest uppercase">Members-Only Platform</span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden mb-6">
              {titleWords.map((word, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h1 className={`section-title text-5xl md:text-6xl lg:text-7xl ${i === 1 ? 'gold-text italic' : 'text-platinum-light'}`}>
                    {word}
                  </h1>
                </motion.div>
              ))}
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-platinum-dark text-lg leading-relaxed mb-10 max-w-md font-body font-light"
            >
              Pay bills. Earn rewards. Track your credit score. All inside an invite-only platform 
              built for people who deserve better.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <motion.button
                className="neo-button px-8 py-4 text-sm rounded-sm animate-pulse-gold"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Request an Invite
              </motion.button>
              <motion.button
                className="flex items-center gap-2 text-platinum-dark hover:text-gold transition-colors group"
                whileHover={{ x: 4 }}
              >
                <span className="text-sm tracking-widest uppercase">Watch How It Works</span>
                <div className="w-8 h-8 rounded-full border border-platinum-dark/30 group-hover:border-gold/50 flex items-center justify-center transition-colors">
                  <svg viewBox="0 0 16 16" className="w-3 h-3 fill-current ml-0.5">
                    <polygon points="5,3 13,8 5,13" />
                  </svg>
                </div>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.7 }}
              className="mt-12 flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {['#C9A84C', '#7B61FF', '#00D9A6', '#FF6B35'].map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-obsidian"
                    style={{ background: `radial-gradient(circle at 40% 40%, ${color}88, ${color}33)` }}
                  />
                ))}
              </div>
              <div>
                <div className="text-platinum-light text-sm font-medium">10M+ Members</div>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 12 12" className="w-3 h-3 fill-gold">
                      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9.2,11 6,9.2 2.8,11 3.5,7.5 1,5 4.5,4.5" />
                    </svg>
                  ))}
                  <span className="text-platinum-dark text-xs ml-1">4.9 Rating</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right floating cards */}
          <div className="relative h-[500px] hidden lg:block">
            <FloatingCard
              delay={0.6}
              label="HDFC Millennia"
              amount="₹ 12,480"
              type="payment"
              style={{ top: '5%', left: '15%', zIndex: 3 }}
            />
            <FloatingCard
              delay={0.9}
              amount="2,400 Coins"
              label="Bill payment reward"
              type="reward"
              style={{ top: '35%', right: '5%', zIndex: 4 }}
            />
            <FloatingCard
              delay={1.2}
              type="score"
              style={{ bottom: '10%', left: '20%', zIndex: 3 }}
            />

            {/* Phone mockup */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 z-2"
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                {/* Phone outer */}
                <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[3rem] p-2 border border-gold/20 shadow-card">
                  <div className="bg-obsidian rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="flex justify-center pt-3 pb-1">
                      <div className="w-24 h-6 bg-[#0d0d0d] rounded-full" />
                    </div>
                    {/* Screen content */}
                    <div className="px-4 pb-6 pt-2 min-h-[340px]">
                      <div className="text-center mb-4">
                        <div className="text-xs text-platinum-dark uppercase tracking-widest">Total Saved</div>
                        <div className="text-3xl font-display text-gold font-semibold">₹48,200</div>
                      </div>
                      {/* Mini cards */}
                      {[
                        { label: 'Bill Payment', val: '−₹3,200', color: '#C9A84C' },
                        { label: 'Cashback', val: '+₹320', color: '#00D9A6' },
                        { label: 'CRED Coins', val: '+2,400', color: '#7B61FF' },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="glass-card rounded-xl p-3 mb-2 flex justify-between items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.2 + i * 0.1 }}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg" style={{ background: `${item.color}22`, border: `1px solid ${item.color}44` }}>
                              <div className="w-full h-full flex items-center justify-center">
                                <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                              </div>
                            </div>
                            <span className="text-xs text-platinum-dark">{item.label}</span>
                          </div>
                          <span className="text-xs font-mono" style={{ color: item.color }}>{item.val}</span>
                        </motion.div>
                      ))}
                      {/* Bottom bar */}
                      <div className="mt-4 h-0.5 bg-gold/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '78%' }}
                          transition={{ delay: 1.8, duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-[10px] text-platinum-dark">Score</span>
                        <span className="text-[10px] text-gold">782 / 900</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow under phone */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-gold/20 blur-xl rounded-full" />
              </motion.div>
            </motion.div>

            {/* Orbiting ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-gold/5 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold/60" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1 h-1 rounded-full bg-aurora/60" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] text-platinum-dark uppercase tracking-widest">Scroll</span>
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent"
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
