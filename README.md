# GANSHIELD

**Next-generation AI-powered cybersecurity platform.** A premium React SPA with a real-time threat dashboard, animated landing experience, and interactive UI components.

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Charts | Recharts |
| Icons | Lucide React |
| Routing | React Router DOM 7 |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

Dev server runs at **http://localhost:5173/**

---

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI primitives
│   │   ├── glowing-effect.tsx       # Mouse-tracking glow border
│   │   ├── display-cards.tsx        # Stacked hover-reveal cards
│   │   ├── text-scramble.tsx        # Cyberpunk character shuffle text
│   │   ├── flow-field-background.tsx # Interactive particle canvas
│   │   └── material-design-3-ripple.tsx # MD3 physics ripple
│   ├── AuthForm.tsx           # Login / Sign-up form
│   ├── Background.tsx         # Warm particle network background
│   ├── ClickSpark.tsx         # Click spark burst effect
│   ├── DisplayCardsSection.tsx # Landing page stacked cards section
│   ├── FeaturesGrid.tsx       # Features with GlowingEffect cards
│   ├── Footer.tsx             # Site footer
│   ├── GridFloor.tsx          # Animated perspective grid
│   ├── HeroSection.tsx        # Homepage hero with TextScramble
│   ├── Input.tsx              # Custom styled input field
│   ├── Navbar.tsx             # Fixed pill-style navigation
│   ├── SocialProof.tsx        # Social proof stats + trusted brands
│   └── SpinningShield.tsx     # 3D animated shield with live stats
├── lib/
│   └── utils.ts               # cn() class utility (clsx + tailwind-merge)
├── pages/
│   ├── AuthPage.tsx           # Login page with FlowFieldBackground
│   ├── Dashboard.tsx          # Live threat monitoring dashboard
│   └── LandingPage.tsx        # Marketing homepage
├── App.tsx
├── App.css
└── index.css                  # Global CSS + Tailwind tokens
```

---

## Pages

### `/` — Landing Page
- Animated hero with spinning shield and TextScramble headline
- Feature cards with GlowingEffect (mouse-tracking glow borders)
- DisplayCards — stacked cybersecurity intel cards
- Social proof stats and trusted brands
- Animated footer

### `/auth` — Authentication
- Login / Sign-up toggle with animated transition
- FlowFieldBackground — interactive particle flow canvas
- ClickSpark effects on interaction

### `/dashboard` — Command Center
- Live DEFCON status badge with blinking alarm animation
- 4 animated KPI cards (Defend Rate, AI Mitigation, Active Alerts, Nodes)
- 24h traffic + threat volume area chart
- Attack vector analysis bar chart
- Geographic distribution pie chart
- Live interception event log terminal

---

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--primary` | `#e78a53` | Brand orange — all accents, CTAs |
| `--background` | `#121113` | Page background |
| `--card` | `#121212` | Card backgrounds |
| `--border` | `#222222` | All borders |
| Emerald | `#10b981` | Safe / success states |
| Rose | `#ef4444` | Danger / alert states |
| Amber | `#f59e0b` | Warning states |

---

## Path Aliases

`@/` resolves to `./src/` — configured in both `vite.config.ts` and `tsconfig.app.json`.

```ts
import { cn } from '@/lib/utils'
import { GlowingEffect } from '@/components/ui/glowing-effect'
```
