// // 



// import { motion } from 'framer-motion';

// /* ─────────────────────────────────────────────────────────────
//    BrandStatement — Manifesto Section
//    Sits after HeroSection + MotivationBanner.
//    Design: editorial magazine manifesto · oversized type · ticker
//    Tokens: #05050e · #8b5cf6 · #6366f1 · #38bdf8 · #22c55e
// ───────────────────────────────────────────────────────────── */

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap');

//   @keyframes bs-shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
//   @keyframes bs-ticker   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
//   @keyframes bs-drift    { 0%,100%{transform:translate(0,0)} 50%{transform:translate(8px,-6px)} }
//   @keyframes bs-noise    { 0%,100%{transform:translate(0,0)} 25%{transform:translate(-1%,1%)} 50%{transform:translate(1%,-1%)} 75%{transform:translate(-1%,-1%)} }
//   @keyframes bs-scan     { 0%{top:-20%} 100%{top:120%} }
//   @keyframes bs-blink    { 0%,49%{opacity:1} 50%,100%{opacity:0} }
//   @keyframes bs-pulse    { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.6)} }
//   @keyframes bs-line-grow{ from{transform:scaleX(0)} to{transform:scaleX(1)} }

//   /* ── Root ── */
//   .bs-section {
//     position: relative;
//     overflow: hidden;
//     padding: clamp(56px,8vh,96px) clamp(20px,5vw,64px) 0;
//     background: #05050e;
//     border-bottom: 1px solid rgba(255,255,255,.055);
//   }

//   /* grain overlay */
//   .bs-section::before {
//     content: '';
//     position: absolute; inset: -150%;
//     width: 400%; height: 400%;
//     background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//     opacity: .018; pointer-events: none;
//     animation: bs-noise 11s steps(1) infinite;
//   }

//   /* scan line */
//   .bs-scanline {
//     position: absolute;
//     left: 0; right: 0; height: 1px;
//     background: linear-gradient(90deg, transparent, rgba(139,92,246,.15), rgba(56,189,248,.1), transparent);
//     animation: bs-scan 8s linear infinite;
//     pointer-events: none; z-index: 1;
//   }

//   /* ── Inner max-width wrapper ── */
//   .bs-inner {
//     position: relative; z-index: 2;
//     max-width: 1120px;
//     margin: 0 auto;
//   }

//   /* ── Layout: two columns ── */
//   .bs-layout {
//     display: grid;
//     grid-template-columns: 1fr auto;
//     gap: clamp(32px, 5vw, 72px);
//     align-items: flex-start;
//     margin-bottom: clamp(48px, 7vh, 72px);
//   }
//   @media(max-width: 720px) {
//     .bs-layout { grid-template-columns: 1fr; }
//     .bs-right-col { display: none; }
//   }

//   /* ── Left: manifesto text ── */
//   .bs-eyebrow {
//     display: flex; align-items: center; gap: 8px;
//     margin-bottom: 20px;
//   }

//   /* The big line */
//   .bs-big {
//     font-family: 'Syne', sans-serif;
//     font-weight: 800;
//     font-size: clamp(32px, 5.5vw, 72px);
//     letter-spacing: -.055em;
//     line-height: .93;
//     margin-bottom: clamp(20px, 3vw, 32px);
//   }
//   .bs-big-dim  { color: rgba(255,255,255,.14); display: block; }
//   .bs-big-grad {
//     display: block;
//     background: linear-gradient(108deg, #f5f0ff 0%, #c4b5fd 22%, #818cf8 50%, #38bdf8 75%, #c4b5fd 100%);
//     background-size: 200% auto;
//     -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//     animation: bs-shimmer 4.5s linear infinite;
//   }
//   .bs-big-white { color: rgba(255,255,255,.82); display: block; }

//   /* Body copy */
//   .bs-body {
//     font-family: 'Outfit', sans-serif;
//     font-weight: 300;
//     font-size: clamp(13px, 1.1vw, 15px);
//     line-height: 1.96;
//     color: rgba(255,255,255,.32);
//     max-width: 420px;
//     margin-bottom: 28px;
//   }
//   .bs-body strong { color: rgba(255,255,255,.72); font-weight: 500; }
//   .bs-body em     { font-style: normal; color: #c4b5fd; font-weight: 500; }

//   /* Terminal annotation */
//   .bs-terminal {
//     display: inline-flex;
//     align-items: center;
//     gap: 10px;
//     padding: 9px 16px;
//     border-radius: 8px;
//     background: rgba(255,255,255,.02);
//     border: 1px solid rgba(255,255,255,.06);
//   }
//   .bs-term-prompt {
//     font-family: 'DM Mono', monospace;
//     font-size: 11px;
//     color: #22c55e;
//     letter-spacing: .04em;
//     flex-shrink: 0;
//   }
//   .bs-term-text {
//     font-family: 'DM Mono', monospace;
//     font-size: 11px;
//     color: rgba(255,255,255,.55);
//     letter-spacing: .06em;
//   }
//   .bs-term-cursor {
//     display: inline-block;
//     width: 6px; height: 12px;
//     background: #8b5cf6;
//     border-radius: 1px;
//     vertical-align: middle;
//     margin-left: 2px;
//     animation: bs-blink 1.1s step-end infinite;
//   }

//   /* ── Right: vertical stat column ── */
//   .bs-right-col {
//     display: flex;
//     flex-direction: column;
//     gap: 2px;
//     padding-top: 4px;
//     width: 160px;
//   }

//   .bs-stat-block {
//     padding: 16px 18px;
//     border-radius: 12px;
//     border: 1px solid rgba(255,255,255,.055);
//     background: rgba(255,255,255,.016);
//     transition: border-color .22s, background .22s;
//     cursor: default;
//   }
//   .bs-stat-block:hover {
//     border-color: rgba(139,92,246,.22);
//     background: rgba(139,92,246,.05);
//   }
//   .bs-stat-n {
//     font-family: 'DM Mono', monospace;
//     font-size: 22px; font-weight: 500; line-height: 1;
//     margin-bottom: 4px;
//   }
//   .bs-stat-l {
//     font-family: 'DM Mono', monospace;
//     font-size: 8px; color: #2a2848;
//     letter-spacing: .12em; text-transform: uppercase;
//   }

//   /* divider between stats */
//   .bs-stat-divider {
//     height: 1px;
//     background: rgba(255,255,255,.04);
//     margin: 4px 0;
//   }

//   /* ── Horizontal rule before ticker ── */
//   .bs-rule {
//     height: 1px;
//     background: linear-gradient(90deg, transparent, rgba(255,255,255,.08) 20%, rgba(255,255,255,.08) 80%, transparent);
//     transform-origin: left;
//     animation: bs-line-grow .9s .4s ease both;
//   }

//   /* ── Ticker ── */
//   .bs-ticker-wrap {
//     overflow: hidden;
//     padding: clamp(12px, 2vw, 16px) 0;
//     mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%);
//     -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%);
//     cursor: default;
//     user-select: none;
//   }
//   .bs-ticker-track {
//     display: flex;
//     gap: 0;
//     width: max-content;
//     animation: bs-ticker 28s linear infinite;
//   }
//   .bs-ticker-track:hover { animation-play-state: paused; }

//   .bs-ticker-item {
//     display: inline-flex;
//     align-items: center;
//     gap: 10px;
//     padding: 0 24px;
//     white-space: nowrap;
//   }
//   .bs-ticker-word {
//     font-family: 'DM Mono', monospace;
//     font-size: clamp(10px, .9vw, 11.5px);
//     letter-spacing: .16em;
//     text-transform: uppercase;
//     color: rgba(255,255,255,.18);
//     transition: color .2s;
//   }
//   .bs-ticker-track:hover .bs-ticker-word { color: rgba(255,255,255,.3); }
//   .bs-ticker-sep {
//     width: 3px; height: 3px;
//     border-radius: 50%;
//     background: rgba(139,92,246,.4);
//     flex-shrink: 0;
//   }
//   .bs-ticker-word-accent {
//     background: linear-gradient(90deg, #c4b5fd, #38bdf8);
//     -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
//     opacity: .55;
//   }
// `;

// /* ── Staggered word animation ── */
// const wordVariants = {
//   hidden:  { opacity: 0, y: 14, filter: 'blur(4px)' },
//   visible: (i) => ({
//     opacity: 1, y: 0, filter: 'blur(0px)',
//     transition: { duration: .55, ease: [.25, .46, .45, .94], delay: i * .06 },
//   }),
// };

// function AnimWord({ children, i, className, style }) {
//   return (
//     <motion.span
//       custom={i}
//       variants={wordVariants}
//       initial="hidden"
//       animate="visible"
//       className={className}
//       style={{ display: 'inline-block', ...style }}
//     >
//       {children}
//     </motion.span>
//   );
// }

// /* ── Ticker content ── */
// const TICKER_ITEMS = [
//   { text: 'Show Up', accent: false },
//   { text: 'Every Single Day', accent: true  },
//   { text: 'No Excuses', accent: false },
//   { text: 'Execute Daily', accent: true  },
//   { text: 'Build Real Skills', accent: false },
//   { text: 'Aug 15 Deadline', accent: true  },
//   { text: 'Consistency Wins', accent: false },
//   { text: 'Unlock the Offer', accent: true  },
//   { text: 'Trust the System', accent: false },
//   { text: 'Stay in the Chain', accent: true  },
//   { text: 'Compound Daily',  accent: false },
//   { text: 'Dream Company Ahead', accent: true },
// ];

// function Ticker() {
//   const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]; // seamless loop
//   return (
//     <div className="bs-ticker-wrap">
//       <div className="bs-ticker-track">
//         {doubled.map((item, i) => (
//           <span key={i} className="bs-ticker-item">
//             <span className="bs-ticker-sep" />
//             <span className={`bs-ticker-word${item.accent ? ' bs-ticker-word-accent' : ''}`}>
//               {item.text}
//             </span>
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* ════════════════════════════════════════════
//    COMPONENT
// ════════════════════════════════════════════ */
// export default function BrandStatement() {
//   const stats = [
//     { n: '90%', l: 'Quit Here',   color: 'linear-gradient(135deg,#f87171,#fb923c)' },
//     { n: '10×', l: 'ROI Daily',   color: 'linear-gradient(135deg,#c4b5fd,#818cf8)' },
//     { n: '#1',  l: 'System > Mood', color: 'linear-gradient(135deg,#38bdf8,#818cf8)' },
//   ];

//   return (
//     <>
//       <style>{STYLES}</style>

//       <section className="bs-section">
//         <div className="bs-scanline" />

//         {/* Ambient orbs */}
//         <div style={{ position:'absolute', top:'10%', left:'15%', width:'40%', height:'60%', background:'radial-gradient(ellipse,rgba(139,92,246,.055),transparent 65%)', filter:'blur(60px)', pointerEvents:'none', animation:'bs-drift 12s ease-in-out infinite' }} />
//         <div style={{ position:'absolute', bottom:'-10%', right:'5%', width:'30%', height:'50%', background:'radial-gradient(ellipse,rgba(56,189,248,.04),transparent 60%)', filter:'blur(40px)', pointerEvents:'none' }} />

//         <div className="bs-inner">
//           <div className="bs-layout">

//             {/* ── LEFT: manifesto ── */}
//             <div>
//               {/* Eyebrow */}
//               <motion.div
//                 className="bs-eyebrow"
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: .5, delay: .05 }}
//               >
//                 <span style={{ width:'13px', height:'1px', background:'rgba(139,92,246,.5)', display:'block' }} />
//                 <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(139,92,246,.65)' }}>
//                   The OfferUnlocked Manifesto
//                 </span>
//               </motion.div>

//               {/* Big headline — 3 tiers */}
//               <h2 className="bs-big">
//                 <AnimWord i={0} className="bs-big-dim">Most people wait</AnimWord>
//                 {' '}
//                 <AnimWord i={1} className="bs-big-dim">for</AnimWord>
//                 <br />
//                 <AnimWord i={2} className="bs-big-grad">motivation.</AnimWord>
//                 <br />
//                 <AnimWord i={3} className="bs-big-white">You build</AnimWord>
//                 {' '}
//                 <AnimWord i={4} className="bs-big-white">a</AnimWord>
//                 {' '}
//                 <AnimWord
//                   i={5}
//                   style={{
//                     display:'inline-block',
//                     background:'linear-gradient(108deg,#f5f0ff,#c4b5fd,#818cf8,#38bdf8)',
//                     backgroundSize:'200% auto',
//                     WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
//                     animation:'bs-shimmer 4.5s linear infinite',
//                     fontFamily:"'Syne',sans-serif", fontWeight:800,
//                   }}
//                 >
//                   system.
//                 </AnimWord>
//               </h2>

//               {/* Body */}
//               <motion.p
//                 className="bs-body"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: .55, delay: .42 }}
//               >
//                 OfferUnlocked isn't a course. It isn't a group chat.
//                 It's a <strong>daily execution framework</strong> built for one outcome — landing the offer
//                 you actually want, at the company that actually matters.{' '}
//                 <em>No fluff. No random prep. Just the system.</em>
//               </motion.p>

//               {/* Terminal annotation */}
//               <motion.div
//                 initial={{ opacity: 0, y: 8 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: .5, delay: .54 }}
//               >
//                 <div className="bs-terminal">
//                   <span className="bs-term-prompt">$</span>
//                   <span className="bs-term-text">git commit -m "show up every single day"</span>
//                   <span className="bs-term-cursor" />
//                 </div>
//               </motion.div>
//             </div>

//             {/* ── RIGHT: vertical stats ── */}
//             <motion.div
//               className="bs-right-col"
//               initial={{ opacity: 0, x: 16 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: .6, delay: .2 }}
//             >
//               {stats.map((s, i) => (
//                 <div key={s.l}>
//                   <div className="bs-stat-block">
//                     <div
//                       className="bs-stat-n"
//                       style={{ background: s.color, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}
//                     >
//                       {s.n}
//                     </div>
//                     <div className="bs-stat-l">{s.l}</div>
//                   </div>
//                   {i < stats.length - 1 && <div className="bs-stat-divider" />}
//                 </div>
//               ))}
//             </motion.div>

//           </div>

//           {/* Horizontal rule */}
//           <div className="bs-rule" />
//         </div>

//         {/* Full-bleed ticker */}
//         <Ticker />

//       </section>
//     </>
//   );
// }


import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   BrandStatement — Compact manifesto strip
   One sharp line. No columns. No ticker. No stats.
   These people don't need motivation — they need acknowledgment.
───────────────────────────────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500&display=swap');

  @keyframes bs-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes bs-pulse   { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.65)} }
  @keyframes bs-fadein  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }

  .bs-wrap {
    position: relative;
    padding: clamp(28px, 4vh, 40px) clamp(20px, 5vw, 64px);
    border-bottom: 1px solid rgba(255,255,255,.055);
    background:
      radial-gradient(ellipse 60% 120% at 50% 50%, rgba(139,92,246,.04) 0%, transparent 70%);
    overflow: hidden;
    text-align: center;
  }

  /* top + bottom 1px shimmer lines */
  .bs-topline {
    position: absolute;
    top: 0; left: 10%; right: 10%; height: 1px;
    background: linear-gradient(90deg,
      transparent,
      rgba(139,92,246,.35) 30%,
      rgba(56,189,248,.3) 70%,
      transparent
    );
    background-size: 200% auto;
    animation: bs-shimmer 5s linear infinite;
  }

  .bs-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  /* label */
  .bs-label {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Mono', monospace;
    font-size: 8.5px;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(139,92,246,.6);
    animation: bs-fadein .5s ease both;
  }
  .bs-label-dot {
    width: 4px; height: 4px; border-radius: 50%;
    background: #8b5cf6;
    box-shadow: 0 0 6px rgba(139,92,246,.8);
    animation: bs-pulse 2.2s ease-in-out infinite;
  }

  /* the hard line */
  .bs-line {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: clamp(17px, 2.4vw, 28px);
    letter-spacing: -.03em;
    line-height: 1.22;
    color: rgba(255,255,255,.82);
    animation: bs-fadein .55s .1s ease both;
  }
  .bs-line-grad {
    background: linear-gradient(105deg, #f0eaff 0%, #c4b5fd 30%, #818cf8 60%, #38bdf8 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: bs-shimmer 5s linear infinite;
  }
  .bs-line-dim { color: rgba(255,255,255,.22); }

  /* sub */
  .bs-sub {
    font-family: 'DM Mono', monospace;
    font-size: clamp(9px, .85vw, 10.5px);
    color: rgba(255,255,255,.2);
    letter-spacing: .08em;
    animation: bs-fadein .55s .2s ease both;
  }
  .bs-sub em {
    font-style: normal;
    color: rgba(255,255,255,.42);
  }
`;

export default function BrandStatement() {
  return (
    <>
      <style>{STYLES}</style>

      <motion.section
        className="bs-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <div className="bs-topline" />

        <div className="bs-inner">

          {/* Label */}
          <div className="bs-label">
            <div className="bs-label-dot" />
            OfferUnlocked Community
          </div>

          {/* The one hard line */}
          <p className="bs-line">
            <span className="bs-line-dim">Others wait for a good day. </span>
            <span className="bs-line-grad">We don't wait.</span>
            <br />
            Bad day, good day —&nbsp;
            <span style={{ color: 'rgba(255,255,255,.9)' }}>we show up.</span>
          </p>

          {/* Sub */}
          <p className="bs-sub">
            No motivation needed ·{' '}
            <em>just commitment</em>
            {' '}· That's what separates this community.
          </p>

        </div>
      </motion.section>
    </>
  );
}