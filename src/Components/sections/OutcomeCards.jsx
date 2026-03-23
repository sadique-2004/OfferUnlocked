// import { motion } from 'framer-motion';

// const cards = [
//   {
//     variant:    'gold',
//     badge:      'if (effort === 100% && blessed)',
//     emoji:      '🏆',
//     condition:  'if ',
//     condSpan:   'you give 100% and God blesses with good luck',
//     heading:    'FAANG / Dream Company',
//     desc:       'The stars align. Elite product-based opportunity. This is what happens when preparation meets a rare moment.',
//     companies:  ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'],
//     lpa:        '30+ LPA 🚀',
//     borderColor:'rgba(245,158,11,.28)',
//     bgGrad:     'linear-gradient(145deg,rgba(245,158,11,.1),rgba(251,191,36,.05),rgba(245,158,11,.08))',
//     glowHover:  '0 0 0 1px rgba(245,158,11,.3), 0 0 24px rgba(245,158,11,.15), 0 12px 40px rgba(0,0,0,.4)',
//     badgeBg:    'rgba(245,158,11,.15)', badgeColor:'#fbbf24', badgeBorder:'rgba(245,158,11,.25)',
//     dotColor:   '#fbbf24',
//     headingCls: 'grad-text-gold',
//     lpaBg:      'rgba(245,158,11,.1)', lpaColor:'#fbbf24', lpaBorder:'rgba(245,158,11,.15)',
//     chipBg:     'rgba(245,158,11,.08)', chipColor:'#d97706', chipBorder:'rgba(245,158,11,.12)',
//   },
//   {
//     variant:    'silver',
//     badge:      'else if (effort === 100%)',
//     emoji:      '⚡',
//     condition:  'else if ',
//     condSpan:   'you put in 100% consistently',
//     heading:    'Product-Based Company',
//     desc:       'Strong execution guarantees a product-based role. Not luck — just pure daily consistency and skill.',
//     companies:  ['Razorpay', 'Swiggy', 'CRED', 'Zepto', 'BrowserStack'],
//     lpa:        '15–30 LPA 💜',
//     borderColor:'rgba(139,92,246,.25)',
//     bgGrad:     'linear-gradient(145deg,rgba(139,92,246,.1),rgba(99,102,241,.05),rgba(139,92,246,.07))',
//     glowHover:  '0 0 0 1px rgba(139,92,246,.2), 0 0 20px rgba(139,92,246,.1), 0 12px 40px rgba(0,0,0,.4)',
//     badgeBg:    'rgba(139,92,246,.15)', badgeColor:'#c4b5fd', badgeBorder:'rgba(139,92,246,.25)',
//     dotColor:   '#c4b5fd',
//     headingCls: 'grad-text',
//     lpaBg:      'rgba(139,92,246,.1)', lpaColor:'#c4b5fd', lpaBorder:'rgba(139,92,246,.15)',
//     chipBg:     'rgba(139,92,246,.08)', chipColor:'#8b5cf6', chipBorder:'rgba(139,92,246,.12)',
//   },
//   {
//     variant:    'bronze',
//     badge:      'else',
//     emoji:      '💚',
//     condition:  'else ',
//     condSpan:   'a solid service-based company with good package',
//     heading:    'Service-Based + Good Package',
//     desc:       'Even in the "worst" case — a real offer with a real salary. The baseline is still financial independence.',
//     companies:  ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture'],
//     lpa:        '6+ LPA 🌱',
//     borderColor:'rgba(34,197,94,.2)',
//     bgGrad:     'linear-gradient(145deg,rgba(34,197,94,.08),rgba(16,185,129,.04),rgba(34,197,94,.06))',
//     glowHover:  '0 0 0 1px rgba(34,197,94,.18), 0 0 16px rgba(34,197,94,.07), 0 12px 40px rgba(0,0,0,.4)',
//     badgeBg:    'rgba(34,197,94,.12)', badgeColor:'#4ade80', badgeBorder:'rgba(34,197,94,.2)',
//     dotColor:   '#4ade80',
//     headingCls: '',  // plain green
//     headingColor:'#4ade80',
//     lpaBg:      'rgba(34,197,94,.08)', lpaColor:'#4ade80', lpaBorder:'rgba(34,197,94,.12)',
//     chipBg:     'rgba(34,197,94,.06)', chipColor:'#16a34a', chipBorder:'rgba(34,197,94,.1)',
//   },
// ];

// export default function OutcomeCards() {
//   return (
//     <section className="px-[52px] py-[36px] border-b border-[rgba(255,255,255,.06)]">
//       {/* Title */}
//       <div className="flex items-center gap-[10px] mb-[18px]">
//         <span className="font-mono text-[11px] tracking-[.1em] uppercase text-ou-text3">
//           What consistent execution unlocks
//         </span>
//         <div className="flex-1 h-px bg-[rgba(255,255,255,.06)]" />
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-3 gap-[14px] max-[900px]:grid-cols-1">
//         {cards.map((c, i) => (
//           <OutcomeCard key={c.variant} card={c} delay={i * 0.1} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function OutcomeCard({ card: c, delay }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay }}
//       whileHover={{ y: -4, boxShadow: c.glowHover }}
//       className="rounded-[16px] p-[22px_20px] relative overflow-hidden cursor-default transition-all duration-[300ms]"
//       style={{ background: c.bgGrad, border: `1px solid ${c.borderColor}` }}
//     >
//       {/* Background glow orb */}
//       {c.variant === 'gold' && (
//         <div
//           className="absolute pointer-events-none rounded-full"
//           style={{
//             top: '-50%', right: '-20%',
//             width: 200, height: 200,
//             background: 'radial-gradient(circle,rgba(245,158,11,.08),transparent 70%)',
//           }}
//         />
//       )}

//       {/* Badge */}
//       <div
//         className="inline-flex items-center gap-[5px] font-mono text-[9px] tracking-[.1em] uppercase px-[9px] py-[3px] rounded-full mb-[14px] font-medium"
//         style={{ background: c.badgeBg, color: c.badgeColor, border: `1px solid ${c.badgeBorder}` }}
//       >
//         <span className="w-[5px] h-[5px] rounded-full" style={{ background: c.dotColor }} />
//         {c.badge}
//       </div>

//       {/* Emoji */}
//       <span className="text-[28px] mb-[10px] block leading-[1]">{c.emoji}</span>

//       {/* Condition */}
//       <div className="font-mono text-[9.5px] text-ou-text3 mb-[10px] tracking-[.02em]">
//         {c.condition}
//         <span className="text-ou-text2">{c.condSpan}</span>
//       </div>

//       {/* Heading */}
//       <div
//         className={`text-[15px] font-bold tracking-[-0.02em] mb-[6px] leading-[1.3] ${c.headingCls}`}
//         style={c.headingColor ? { color: c.headingColor } : {}}
//       >
//         {c.heading}
//       </div>

//       {/* Desc */}
//       <div className="text-[11.5px] text-ou-text3 leading-[1.65]">{c.desc}</div>

//       {/* Company chips */}
//       <div className="flex flex-wrap gap-[5px] mt-[10px]">
//         {c.companies.map((co) => (
//           <span
//             key={co}
//             className="font-mono text-[9px] px-[7px] py-[2px] rounded-[4px] font-medium tracking-[.04em]"
//             style={{ background: c.chipBg, color: c.chipColor, border: `1px solid ${c.chipBorder}` }}
//           >
//             {co}
//           </span>
//         ))}
//       </div>

//       {/* LPA badge */}
//       <div
//         className="mt-[12px] font-mono text-[11px] font-medium px-[10px] py-[5px] rounded-[6px] inline-block"
//         style={{ background: c.lpaBg, color: c.lpaColor, border: `1px solid ${c.lpaBorder}` }}
//       >
//         {c.lpa}
//       </div>

//       {/* Target */}
//       <div className="mt-[18px] pt-[14px] border-t border-[rgba(255,255,255,.06)] text-center">
//         <div className="font-mono text-[9px] tracking-[.1em] text-ou-text3 uppercase mb-[4px]">
//           Target
//         </div>
//         <div className="grad-text text-[13px] font-bold">
//           Before August 15, 2026 🇮🇳
//         </div>
//       </div>
//     </motion.div>
//   );
// }


import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   OutcomeCards — "The Outcome Path"
   Layout: Tier 01 full-width hero card, 02+03 side by side
   Removed: salary numbers, religious framing, per-card deadline
   Added  : editorial asymmetry, left-spine connector, ghost nums
   Tokens : #05050e · #8b5cf6 · #6366f1 · #38bdf8 · #22c55e
───────────────────────────────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

  @keyframes oc-shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes oc-pulse    { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.7)} }
  @keyframes oc-drift    { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(10px,-8px) scale(1.04)} }
  @keyframes oc-border   { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes oc-glow-in  { from{opacity:0} to{opacity:1} }
  @keyframes oc-float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }

  /* ── Section ── */
  .oc-section {
    padding: clamp(40px,6vh,64px) clamp(20px,5vw,60px);
    border-bottom: 1px solid rgba(255,255,255,.055);
    background: #05050e;
    position: relative;
    overflow: hidden;
  }

  /* ambient bg */
  .oc-section::before {
    content: '';
    position: absolute;
    top: 0; left: 20%; right: 20%; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(139,92,246,.25), rgba(56,189,248,.2), transparent);
    background-size: 200% auto;
    animation: oc-shimmer 6s linear infinite;
  }

  /* ── Header row ── */
  .oc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: clamp(20px, 3vh, 28px);
    flex-wrap: wrap;
    gap: 10px;
  }
  .oc-header-left {
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .oc-header-title {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(255,255,255,.28);
  }
  .oc-deadline-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 100px;
    background: rgba(251,191,36,.07);
    border: 1px solid rgba(251,191,36,.18);
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #fbbf24;
    letter-spacing: .05em;
    cursor: default;
  }
  .oc-deadline-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: #fbbf24;
    box-shadow: 0 0 5px rgba(251,191,36,.8);
    animation: oc-pulse 2s ease-in-out infinite;
  }

  /* ── Grid ── */
  .oc-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Tier 01 is the full-width hero */
  .oc-card-hero { width: 100%; }

  /* Tier 02 + 03 side by side */
  .oc-card-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  @media(max-width:680px) {
    .oc-card-row { grid-template-columns: 1fr; }
  }

  /* ── Shared card shell ── */
  .oc-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    cursor: default;
    transition: transform .28s ease, box-shadow .28s ease;
  }
  .oc-card:hover { transform: translateY(-3px); }

  /* animated shimmer top border for T1 */
  .oc-card-t1-border {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,158,11,.0) 10%,
      rgba(245,158,11,.9) 35%,
      rgba(251,191,36,1)  50%,
      rgba(245,158,11,.9) 65%,
      rgba(245,158,11,.0) 90%,
      transparent 100%
    );
    background-size: 200% auto;
    animation: oc-border 3s linear infinite;
    z-index: 2;
  }
  .oc-card-t2-border {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent, rgba(139,92,246,.7) 40%, rgba(99,102,241,.7) 60%, transparent
    );
    z-index: 2;
  }
  .oc-card-t3-border {
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg,
      transparent, rgba(34,197,94,.6) 40%, rgba(16,185,129,.5) 60%, transparent
    );
    z-index: 2;
  }

  /* left accent spine */
  .oc-spine {
    position: absolute;
    top: 0; left: 0; bottom: 0; width: 3px;
    border-radius: 16px 0 0 16px;
  }

  /* ghost tier number */
  .oc-ghost-num {
    position: absolute;
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 0;
  }

  /* card inner padding */
  .oc-card-inner {
    position: relative; z-index: 1;
    padding: clamp(18px,2.5vw,28px);
  }

  /* hero card: horizontal split */
  .oc-hero-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(20px, 3vw, 40px);
    align-items: flex-start;
  }
  @media(max-width:600px) {
    .oc-hero-layout { grid-template-columns: 1fr; }
  }

  /* ── Card text elements ── */
  .oc-tier-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 100px;
    font-family: 'DM Mono', monospace;
    font-size: 8.5px;
    letter-spacing: .1em;
    text-transform: uppercase;
    border: 1px solid;
    margin-bottom: 14px;
    font-weight: 500;
  }

  .oc-heading {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    letter-spacing: -.035em;
    line-height: 1.05;
    margin-bottom: 8px;
  }

  .oc-desc {
    font-family: 'Outfit', sans-serif;
    font-weight: 300;
    font-size: 12.5px;
    line-height: 1.78;
    color: rgba(255,255,255,.36);
    margin-bottom: 16px;
  }

  /* condition line */
  .oc-condition {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: rgba(255,255,255,.18);
    letter-spacing: .04em;
    margin-bottom: 0;
    line-height: 1.6;
    padding: 8px 12px;
    background: rgba(255,255,255,.03);
    border-radius: 6px;
    border-left: 2px solid;
  }
  .oc-condition-hi { color: rgba(255,255,255,.48); font-weight: 500; }

  /* company chips */
  .oc-chips-label {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: rgba(255,255,255,.15);
    margin-bottom: 8px;
  }
  .oc-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
  }
  .oc-chip {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid;
    letter-spacing: .04em;
    font-weight: 500;
    transition: opacity .2s;
    cursor: default;
  }
  .oc-chip:hover { opacity: .7; }

  /* outcome label — replaces LPA */
  .oc-outcome-label {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    margin-top: 14px;
    padding: 6px 14px;
    border-radius: 8px;
    border: 1px solid;
    font-family: 'Outfit', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: -.01em;
  }
`;



const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: .6, ease: [.25, .46, .45, .94], delay },
}); 

/* ── Shared card structure ── */
function TierCard({ t, heroLayout = false, delay = 0 }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="oc-card"
      whileHover={{ y: -3, boxShadow: t.glowHover }}
      style={{ background: t.cardBg, border: `1px solid ${t.cardBorder}` }}
    >
      {/* animated border line */}
      {t.id === 't1'
        ? <div className="oc-card-t1-border" />
        : t.id === 't2'
        ? <div className="oc-card-t2-border" />
        : <div className="oc-card-t3-border" />
      }

      {/* left spine */}
      <div className="oc-spine" style={{ background: t.spine }} />

      {/* ghost number */}
      <div
        className="oc-ghost-num"
        style={{
          fontSize: t.ghostSize,
          color: t.ghostColor,
          right: t.ghostRight,
          top: t.ghostTop,
          letterSpacing: '-.06em',
        }}
      >
        {t.num}
      </div>

      {/* ambient glow orb */}
      <div style={{ position:'absolute', inset:0, background:t.glow, pointerEvents:'none', zIndex:0 }} />

      {/* inner */}
      <div className="oc-card-inner">
        {heroLayout
          ? <HeroCardLayout t={t} />
          : <SmallCardLayout t={t} />
        }
      </div>
    </motion.div>
  );
}

/* Full-width hero card (T1) layout */
function HeroCardLayout({ t }) {
  return (
    <div className="oc-hero-layout">
      {/* Left */}
      <div>
        <div className="oc-tier-tag" style={{ background: t.tagBg, color: t.tagColor, borderColor: t.tagBorder }}>
          <div style={{ width:'4px', height:'4px', borderRadius:'50%', background: t.tagDot, boxShadow:`0 0 5px ${t.tagDot}`, flexShrink:0, animation:'oc-pulse 2s ease-in-out infinite' }} />
          {t.tag}
        </div>

        <h3
          className="oc-heading"
          style={{
            fontSize: t.headingSize,
            background: t.headingGrad,
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'oc-shimmer 5s linear infinite',
          }}
        >
          {t.heading}
        </h3>

        <p className="oc-desc">{t.desc}</p>

        {/* Condition */}
        <div className="oc-condition" style={{ borderLeftColor: t.condBorder }}>
          <span style={{ color:'rgba(255,255,255,.22)', marginRight:'4px' }}>unlocked by</span>
          {t.condition}
        </div>

        {/* Outcome pill */}
        <div
          className="oc-outcome-label"
          style={{ color: t.outcomeColor, background: t.outcomeBg, borderColor: t.outcomeBorder }}
        >
          <svg viewBox="0 0 12 12" fill="none" width="11" height="11">
            <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {t.outcome}
        </div>
      </div>

      {/* Right: companies */}
      <div>
        <div style={{ paddingTop: '48px' }}>
          <div className="oc-chips-label">Companies in this tier</div>
          <div className="oc-chips">
            {t.companies.map((co, i) => (
              <motion.span
                key={co}
                className="oc-chip"
                style={{ background: t.chipBg, color: t.chipColor, borderColor: t.chipBorder }}
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: .5 + i * .06, duration: .35 }}
              >
                {co}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Smaller side-by-side card (T2/T3) layout */
function SmallCardLayout({ t }) {
  return (
    <>
      <div className="oc-tier-tag" style={{ background: t.tagBg, color: t.tagColor, borderColor: t.tagBorder }}>
        <div style={{ width:'4px', height:'4px', borderRadius:'50%', background: t.tagDot, boxShadow:`0 0 5px ${t.tagDot}`, flexShrink:0, animation:'oc-pulse 2s ease-in-out infinite' }} />
        {t.tag}
      </div>

      <h3
        className="oc-heading"
        style={{
          fontSize: t.headingSize,
          background: t.headingGrad,
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'oc-shimmer 5s linear infinite',
          marginBottom: '8px',
        }}
      >
        {t.heading}
      </h3>

      <p className="oc-desc" style={{ fontSize: '12px', marginBottom: '12px' }}>{t.desc}</p>

      <div className="oc-condition" style={{ borderLeftColor: t.condBorder, marginBottom: '14px' }}>
        <span style={{ color:'rgba(255,255,255,.22)', marginRight:'4px' }}>unlocked by</span>
        {t.condition}
      </div>

      <div className="oc-chips-label">Companies</div>
      <div className="oc-chips" style={{ marginBottom: '14px' }}>
        {t.companies.map((co, i) => (
          <motion.span
            key={co}
            className="oc-chip"
            style={{ background: t.chipBg, color: t.chipColor, borderColor: t.chipBorder }}
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: .55 + i * .06, duration: .35 }}
          >
            {co}
          </motion.span>
        ))}
      </div>

      <div
        className="oc-outcome-label"
        style={{ color: t.outcomeColor, background: t.outcomeBg, borderColor: t.outcomeBorder }}
      >
        <svg viewBox="0 0 12 12" fill="none" width="10" height="10">
          <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {t.outcome}
      </div>
    </>
  );
}

/* ══════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════ */
export default function OutcomeCards() {
  return (
    <>
      <style>{STYLES}</style>

      <section className="oc-section">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="oc-header">
          <div className="oc-header-left">
            <span style={{ width:'13px', height:'1px', background:'rgba(255,255,255,.14)', display:'block' }} />
            <span className="oc-header-title">What consistent execution unlocks</span>
          </div>
          <div className="oc-deadline-pill">
            <div className="oc-deadline-dot" />
            Target: Aug 15, 2026
          </div>
        </motion.div>

        {/* Cards */}
        <div className="oc-grid">
          {/* T1 — hero full width */}
          <div className="oc-card-hero">
            <TierCard t={TIERS[0]} heroLayout delay={0.08} />
          </div>

          {/* T2 + T3 — side by side */}
          <div className="oc-card-row">
            <TierCard t={TIERS[1]} delay={0.16} />
            <TierCard t={TIERS[2]} delay={0.22} />
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          {...fadeUp(0.28)}
          style={{
            marginTop: '16px',
            textAlign: 'center',
            fontFamily: "'DM Mono', monospace",
            fontSize: '9px',
            color: 'rgba(255,255,255,.12)',
            letterSpacing: '.1em',
          }}
        >
          // this system has no losing outcome — every path ends in an offer
        </motion.div>

      </section>
    </>
  );
}