import { motion } from 'framer-motion';

const Footer = () => {
  const columns = [
    {
      heading: 'Platform',
      links: ['Features', 'Credit Score', 'Bill Payments', 'Rewards', 'UPI Payments', 'CRÉD Coins'],
    },
    {
      heading: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Blog', 'Newsroom', 'Investors'],
    },
    {
      heading: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'Compliance', 'Grievance'],
    },
    {
      heading: 'Support',
      links: ['Help Center', 'Contact Us', 'Report a Bug', 'Community', 'Status Page', 'FAQs'],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'Instagram', icon: '◎' },
    { name: 'YouTube', icon: '▶' },
  ];

  return (
    <footer className="bg-void border-t border-gold/8 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-7 h-7 relative">
                <div className="absolute inset-0 bg-gold rounded-sm rotate-45" />
                <div className="absolute inset-[2.5px] bg-void rounded-sm rotate-45" />
                <div className="absolute inset-[4.5px] bg-gold/60 rounded-sm rotate-45" />
              </div>
              <span className="font-display text-xl text-platinum-light tracking-[0.12em]">
                CR<span className="gold-text">É</span>D
              </span>
            </div>
            <p className="text-platinum-dark text-sm leading-relaxed mb-6 max-w-[200px] font-light">
              India's most exclusive members-only financial platform for the creditworthy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.name}
                  href="#"
                  className="w-9 h-9 glass-card rounded-lg flex items-center justify-center border border-white/8 text-platinum-dark hover:text-gold hover:border-gold/30 transition-all duration-300 text-xs font-mono"
                  whileHover={{ y: -2 }}
                  title={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-5">{col.heading}</div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-platinum-dark hover:text-platinum-light transition-colors duration-200 font-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gold mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-platinum-dark font-light">
            © 2024 CRÉD Financial Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-xs text-platinum-dark">
            <div className="w-1.5 h-1.5 rounded-full bg-mint" />
            <span>All systems operational</span>
          </div>
          <div className="text-xs text-platinum-dark font-light">
            RBI Registered · CIN: U74999KA2018PTC114977
          </div>
        </div>

        {/* Large watermark text */}
        <div className="mt-12 overflow-hidden">
          <div
            className="text-[10rem] md:text-[16rem] font-display font-light leading-none select-none text-center"
            style={{
              background: 'linear-gradient(to bottom, rgba(201,168,76,0.04), transparent)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.04em',
            }}
          >
            CRÉD
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
