# OfferUnlocked — React Project

> Be Independent Before Independence Day 🇮🇳  
> A focused execution system to get placed **before August 15, 2026**.

---

## Quick Start

```bash
# 1. Clone / copy this folder into your machine
cd offerunlocked

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open browser
http://localhost:5173
```

---

## Full Project Structure

```
offerunlocked/
│
├── index.html                        # Vite entry, Google Fonts loaded here
├── vite.config.js
├── tailwind.config.js                # Custom colors, fonts, keyframes
├── postcss.config.js
├── package.json
│
└── src/
    ├── main.jsx                      # ReactDOM.createRoot entry
    ├── App.jsx                       # Root shell — wires all sections
    ├── index.css                     # Tailwind directives + global utils
    │
    ├── context/
    │   └── AppContext.jsx            # Global state: section, progress, streak
    │                                 # All localStorage logic lives here
    │
    ├── hooks/
    │   ├── useCountdown.js           # Days left until Aug 14 23:59:59
    │   └── useStreak.js              # Streak count + message generator
    │
    ├── data/
    │   ├── roadmap.js                # All 4 months, weeks, days, tasks
    │   └── community.js             # Admin + members + Discord/LinkedIn URLs
    │
    ├── components/
    │   ├── Avatar.jsx                # AvatarSmall, AvatarLarge, LinkedInIcon, DiscordIcon
    │   │
    │   ├── layout/
    │   │   ├── Topbar.jsx            # Logo, center nav pill, progress bar, countdown
    │   │   └── Sidebar.jsx           # Month nav, streak badge, section links
    │   │
    │   ├── sections/
    │   │   ├── HeroSection.jsx       # Title, subtitle, CTA button, stats row
    │   │   ├── BrandStatement.jsx    # "Consistency beats everything" quote block
    │   │   ├── OutcomeCards.jsx      # if/else if/else outcome cards (FAANG/Product/Service)
    │   │   └── MotivationBanner.jsx  # Dynamic streak/progress banner
    │   │
    │   ├── roadmap/
    │   │   ├── RoadmapSection.jsx    # Month tabs + streak banner + week list
    │   │   ├── WeekBlock.jsx         # Expandable week accordion
    │   │   └── DayCard.jsx           # Expandable day with tasks + mark done
    │   │
    │   ├── community/
    │   │   ├── CommunitySection.jsx  # Full community page wrapper
    │   │   ├── AdminCard.jsx         # Admin spotlight card
    │   │   ├── MemberCard.jsx        # Individual member card
    │   │   └── JoinSection.jsx       # Discord + LinkedIn DM CTA
    │   │
    │   └── admin/
    │       └── AdminPanel.jsx        # Password-protected admin toggle panel
```

---

## Customization Guide

### 1. Update Community Data
Open `src/data/community.js`:

```js
export const communityLinks = {
  discordUrl:    'https://discord.gg/YOUR-INVITE',   // ← your Discord server
  adminLinkedIn: 'https://linkedin.com/in/YOUR-ID',  // ← your LinkedIn
};

export const communityData = {
  admin: {
    name:     'Your Real Name',
    image:    '/images/your-photo.jpg', // or '' for SVG avatar
    gender:   'male',                   // 'male' | 'female'
    linkedin: 'https://linkedin.com/in/your-id',
    message:  'Your custom message here.',
  },
  members: [
    {
      name:     'Member Name',
      college:  'College Name',
      year:     '2026',
      image:    '',           // '' = auto avatar based on gender
      gender:   'male',
      linkedin: '',           // '' = shows "No LinkedIn"
    },
    // ... add more members
  ],
};
```

### 2. Update Roadmap Tasks
Open `src/data/roadmap.js` and edit any month/week/day freely:

```js
{ day: 'Day 1', tasks: ['Your task 1', 'Your task 2', 'Your task 3'] }
```
Tasks auto-save to `localStorage` with key `ou3_v1` on every click.

### 3. Add Profile Photos
- Drop images in `public/images/`
- Reference as `image: '/images/rahul.jpg'` in community.js

### 4. Change Admin Password
Open `src/components/admin/AdminPanel.jsx`:
```js
const ADMIN_PASSWORD = 'your-new-password';
```

### 5. Change Target Date
Open `src/hooks/useCountdown.js`:
```js
const TARGET = new Date('2026-08-14T23:59:59'); // last second before Aug 15
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Dev server & bundler |
| Tailwind CSS v3 | Styling |
| Framer Motion v11 | Animations (hover, enter, accordion) |
| localStorage | Progress persistence (no backend needed) |

---

## How Sections Work

### Section Routing
No React Router needed. `AppContext` holds a `section` string:
- `'hero'`  → Overview (Hero + Brand + Outcome Cards + Motivation Banner)
- `'rm'`    → Roadmap
- `'comm'`  → Community
- `'admin'` → Admin Panel

Switch sections with `setSection('rm')` from any component.

### Progress Tracking (localStorage)
Every task has a unique key: `"monthIdx_weekIdx_dayIdx_taskIdx"`.
```js
// Key format example
"0_0_0_0" = Month 1 → Week 1 → Day 1 → Task 1

// Reading
isTaskDone(0, 0, 0, 0)   // → true | false

// Writing
toggleTask(0, 0, 0, 0)   // flip task
markDay(0, 0, 0, true)   // mark entire day done
```
All changes save immediately to `localStorage` key `ou3_v1`.

### Streak Logic
`calcStreak()` in `AppContext` counts consecutive fully-completed days
starting from Day 1. Breaks the moment any day is incomplete.

---

## Join the Community
- 💬 Discord: [Join here](https://discord.gg/your-invite)  
- 💼 LinkedIn DM: [Connect with admin](https://linkedin.com/in/your-profile)

> Join Discord first → DM the admin on LinkedIn to get verified ✓

---

**Built for one mission — Be Independent Before Independence Day 🇮🇳**
