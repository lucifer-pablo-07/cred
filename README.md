# CRÉD Clone — Premium Fintech Landing Page

A pixel-perfect, animation-rich fintech landing page inspired by CRED's premium dark aesthetic. Built with React + Vite + Tailwind CSS + Framer Motion.

## ✨ Features

- 🌑 Ultra-dark luxury theme with gold accents
- ✨ Framer Motion animations throughout
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Custom cursor with smooth follower
- 🔢 Animated counter stats
- 💳 Floating credit card UI mockups
- 📊 Animated credit score gauge
- 🔒 Security section with elegant cards
- ⚡ Loading screen with progress bar
- 🎨 Glassmorphism cards and NeoPOP buttons
- 🖋 Cormorant Garamond display font + DM Sans body

## 🛠 Tech Stack

| Tool | Version |
|------|---------|
| React | 18.x |
| Vite | 5.x |
| Tailwind CSS | 3.x |
| Framer Motion | 11.x |
| React Icons | 5.x |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to the project
cd cred-clone

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with mobile menu
│   ├── HeroSection.jsx     # Fullscreen hero with floating cards
│   ├── AboutSection.jsx    # Trust/exclusivity section
│   ├── FeaturesSection.jsx # Interactive feature showcase
│   ├── TestimonialsSection.jsx # Stats + member reviews
│   ├── SecuritySection.jsx # Security features grid
│   ├── CtaSection.jsx      # Download/invite CTA
│   ├── Footer.jsx          # Full footer with watermark
│   └── CustomCursor.jsx    # Gold cursor with follower
├── hooks/
│   ├── useCursor.js        # Cursor tracking logic
│   └── useCounter.js       # Animated counter hook
├── App.jsx                 # Root with loader
├── main.jsx                # Entry point
└── index.css               # Global styles + Tailwind
```

## 🎨 Design Decisions

- **Fonts**: Cormorant Garamond (luxury serif) + DM Sans (clean body) + DM Mono (data/numbers)
- **Colors**: Obsidian black base, gold (#C9A84C) as primary accent, aurora purple, mint green
- **Cards**: Glassmorphism with subtle gold borders and backdrop blur
- **Buttons**: NeoPOP style with 3D shadow displacement on hover/click
- **Animations**: Spring physics for UI interactions, scroll-triggered reveals, floating elements

## 📝 Notes

- All assets are CSS-generated (no copyrighted images used)
- Custom cursor is disabled on mobile/touch devices
- Fonts loaded via Google Fonts CDN
