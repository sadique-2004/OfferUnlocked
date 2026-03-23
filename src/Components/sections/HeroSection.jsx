import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { roadmapData } from '../../data/roadmap';
import { useMemo } from 'react';

/* ─────────────────────────────────────────────────────────────
   OfferUnlocked — Hero Section v4
   Right column : Roadmap Preview Card
   Layout       : Tighter & more compact overall
   Tokens       : #05050e · #8b5cf6 · #6366f1 · #38bdf8 · #22c55e
   Fonts        : Syne 800 · DM Mono · Outfit 300-700 · JetBrains Mono
───────────────────────────────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

  /* ── Keyframes ── */
  @keyframes ou-pulse   { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.7)} }
  @keyframes ou-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
  @keyframes ou-drift-a { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(14px,-10px) scale(1.04)} 70%{transform:translate(-8px,14px) scale(.97)} }
  @keyframes ou-drift-b { 0%,100%{transform:translate(0,0)} 35%{transform:translate(-12px,8px)} 70%{transform:translate(10px,-7px)} }
  @keyframes ou-noise   { 0%,100%{transform:translate(0,0)} 25%{transform:translate(-1%,1%)} 50%{transform:translate(1%,-1%)} 75%{transform:translate(-1%,-1%)} }
  @keyframes ou-bar     { from{width:0%} to{width:var(--bw)} }
  @keyframes ou-fadeln  { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:translateY(0)} }
  @keyframes ou-line-in { from{height:0} to{height:100%} }

  /* ── Root ── */
  .ou-hero {
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: clamp(48px,7vh,72px) clamp(20px,4.5vw,60px);
    background: #05050e;
    border-bottom: 1px solid rgba(255,255,255,.05);
  }
  .ou-hero::after {
    content:'';
    position:absolute; inset:-150%;
    width:400%; height:400%;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity:.02; pointer-events:none;
    animation:ou-noise 9s steps(1) infinite;
  }

  /* dot grid */
  .ou-dotgrid {
    position:absolute; inset:0;
    background-image:radial-gradient(rgba(139,92,246,.085) 1px, transparent 1px);
    background-size:26px 26px;
    mask-image:radial-gradient(ellipse 78% 68% at 9% 32%, black 8%, transparent 65%);
    pointer-events:none;
  }

  /* ── Grid layout ── */
  .ou-grid {
    display:grid;
    grid-template-columns:1.08fr .92fr;
    gap:clamp(28px,4.5vw,54px);
    align-items:center;
    position:relative; z-index:2;
    width:100%; max-width:1120px;
    margin:0 auto;
  }
  @media(max-width:840px){
    .ou-grid{ grid-template-columns:1fr; }
    .ou-right-col{ display:none; }
  }
  @media(max-width:460px){
    .ou-hero{ padding:44px 16px; }
  }

  /* ── Badge ── */
  .ou-badge {
    display:inline-flex; align-items:center; gap:7px;
    padding:4px 12px 4px 8px; border-radius:100px;
    background:rgba(34,197,94,.065); border:1px solid rgba(34,197,94,.16);
    backdrop-filter:blur(12px); margin-bottom:14px;
    cursor:default; transition:background .25s,border-color .25s;
  }
  .ou-badge:hover{ background:rgba(34,197,94,.11); border-color:rgba(34,197,94,.28); }

  /* ── Eyebrow ── */
  .ou-eyebrow{ display:flex; align-items:center; gap:8px; margin-bottom:12px; }

  /* ── Headline ── */
  .ou-h1-ghost {
    font-family:'Syne',sans-serif; font-weight:700;
    font-size:clamp(14px,1.7vw,21px); letter-spacing:-.028em;
    color:rgba(255,255,255,.19); line-height:1; margin-bottom:2px;
  }
  .ou-h1-main {
    font-family:'Syne',sans-serif; font-weight:800;
    font-size:clamp(33px,4.2vw,54px); letter-spacing:-.055em; line-height:.96;
    background:linear-gradient(105deg,#f5f0ff 0%,#c4b5fd 28%,#818cf8 58%,#38bdf8 100%);
    background-size:200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:ou-shimmer 5s linear infinite;
    margin-bottom:7px;
  }
  .ou-brand-line {
    font-family:'Syne',sans-serif; font-weight:800;
    font-size:clamp(13px,1.3vw,17px); letter-spacing:-.02em;
    background:linear-gradient(135deg,#c4b5fd,#818cf8);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    margin-bottom:16px; display:block;
  }

  /* ── Body / tagline ── */
  .ou-body {
    font-family:'Outfit',sans-serif; font-weight:300;
    font-size:clamp(12.5px,1.05vw,14px); line-height:1.88;
    color:rgba(255,255,255,.34); max-width:400px; margin-bottom:5px;
  }
  .ou-tagline {
    font-family:'DM Mono',monospace; font-size:8.5px;
    color:#2a2646; letter-spacing:.09em; margin-bottom:22px;
  }

  /* ── CTAs ── */
  .ou-cta-row{ display:flex; align-items:center; gap:8px; flex-wrap:wrap; }

  .ou-cta-primary {
    display:inline-flex; align-items:center; gap:7px;
    padding:10px 20px; border-radius:8px; border:none;
    background:linear-gradient(135deg,#8b5cf6,#6366f1);
    color:#fff; font-family:'Outfit',sans-serif; font-size:12.5px; font-weight:600;
    cursor:pointer; letter-spacing:-.01em;
    box-shadow:0 0 0 1px rgba(139,92,246,.38),0 4px 16px rgba(139,92,246,.24),inset 0 1px 0 rgba(255,255,255,.15);
    transition:all .2s ease; position:relative; overflow:hidden;
  }
  .ou-cta-primary::before{
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(255,255,255,.1),transparent 55%);
    opacity:0; transition:opacity .2s;
  }
  .ou-cta-primary:hover{ transform:translateY(-2px); box-shadow:0 0 0 1px rgba(139,92,246,.58),0 10px 32px rgba(139,92,246,.4),inset 0 1px 0 rgba(255,255,255,.15); }
  .ou-cta-primary:hover::before{ opacity:1; }
  .ou-cta-primary:active{ transform:translateY(0); }

  .ou-cta-ghost {
    display:inline-flex; align-items:center; gap:6px;
    padding:9px 16px; border-radius:8px;
    border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.018);
    color:rgba(255,255,255,.4); font-family:'Outfit',sans-serif;
    font-size:12px; font-weight:500; cursor:pointer; transition:all .2s;
  }
  .ou-cta-ghost:hover{ border-color:rgba(255,255,255,.15); color:rgba(255,255,255,.75); background:rgba(255,255,255,.038); }

  /* ── Stat cards ── */
  .ou-stats {
    display:grid; grid-template-columns:repeat(4,1fr);
    gap:4px; margin-top:22px; padding-top:18px;
    border-top:1px solid rgba(255,255,255,.05);
  }
  @media(max-width:460px){ .ou-stats{ grid-template-columns:repeat(2,1fr); } }

  .ou-stat-card {
    padding:10px 10px 8px; border-radius:8px;
    background:rgba(255,255,255,.016); border:1px solid rgba(255,255,255,.044);
    transition:background .2s,border-color .2s; cursor:default;
  }
  .ou-stat-card:hover{ background:rgba(139,92,246,.065); border-color:rgba(139,92,246,.18); }
  .ou-stat-n {
    font-family:'DM Mono',monospace; font-size:clamp(14px,1.4vw,17px); font-weight:500;
    background:linear-gradient(135deg,#c4b5fd,#818cf8,#38bdf8);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    line-height:1; margin-bottom:3px;
  }
  .ou-stat-l{ font-size:7.5px; color:#2a2848; font-weight:500; letter-spacing:.12em; text-transform:uppercase; }

  /* ══════════════════════════════════════════════
     ROADMAP PREVIEW CARD
  ══════════════════════════════════════════════ */
  .ou-rm-card {
    border-radius:14px;
    border:1px solid rgba(255,255,255,.07);
    background:rgba(255,255,255,.016);
    backdrop-filter:blur(20px);
    overflow:hidden;
    box-shadow:0 0 0 1px rgba(139,92,246,.06),0 20px 60px rgba(0,0,0,.55),0 0 50px rgba(139,92,246,.04);
  }

  /* card header */
  .ou-rm-header {
    padding:14px 18px 12px;
    border-bottom:1px solid rgba(255,255,255,.055);
    display:flex; align-items:center; justify-content:space-between;
    background:rgba(255,255,255,.012);
  }

  /* card body: scrollable timeline */
  .ou-rm-body {
    padding:6px 0 4px;
    max-height:340px;
    overflow-y:auto;
    scrollbar-width:none;
  }
  .ou-rm-body::-webkit-scrollbar{ display:none; }

  /* timeline row */
  .ou-rm-row {
    display:flex; gap:0;
    padding:0 18px;
    position:relative;
    cursor:pointer;
    transition:background .18s;
  }
  .ou-rm-row:hover{ background:rgba(139,92,246,.045); }
  .ou-rm-row:hover .ou-rm-month-num{ color:#c4b5fd; }

  /* left: month spine */
  .ou-rm-spine {
    display:flex; flex-direction:column; align-items:center;
    width:32px; flex-shrink:0; padding-top:14px;
    position:relative;
  }
  .ou-rm-dot {
    width:8px; height:8px; border-radius:50%; flex-shrink:0; z-index:1;
    position:relative;
    transition:box-shadow .2s;
  }
  .ou-rm-row:hover .ou-rm-dot{ box-shadow:0 0 10px rgba(139,92,246,.6); }
  .ou-rm-vline {
    width:1px; flex:1; min-height:12px;
    background:linear-gradient(to bottom,rgba(255,255,255,.07),transparent);
  }

  /* right: month content */
  .ou-rm-content {
    flex:1; padding:12px 0 14px 12px;
    border-bottom:1px solid rgba(255,255,255,.04);
  }
  .ou-rm-row:last-child .ou-rm-content{ border-bottom:none; }

  .ou-rm-month-num {
    font-family:'DM Mono',monospace; font-size:8px;
    color:#2e2a50; letter-spacing:.1em; text-transform:uppercase;
    margin-bottom:3px; transition:color .18s;
  }
  .ou-rm-month-title {
    font-family:'Syne',sans-serif; font-weight:700;
    font-size:12.5px; letter-spacing:-.02em;
    color:rgba(255,255,255,.8); margin-bottom:7px; line-height:1.2;
  }

  /* topic pills */
  .ou-rm-pills{ display:flex; flex-wrap:wrap; gap:4px; margin-bottom:8px; }
  .ou-rm-pill {
    padding:2px 8px; border-radius:100px;
    font-family:'DM Mono',monospace; font-size:8px;
    letter-spacing:.04em; white-space:nowrap;
    border:1px solid; transition:opacity .2s;
  }

  /* progress bar inside row */
  .ou-rm-prog-wrap{ display:flex; align-items:center; gap:7px; }
  .ou-rm-prog-track {
    flex:1; height:2.5px; border-radius:100px;
    background:rgba(255,255,255,.06); overflow:hidden;
  }
  .ou-rm-prog-fill {
    height:100%; border-radius:100px;
    animation:ou-bar .8s ease both;
  }
  .ou-rm-prog-label{
    font-family:'DM Mono',monospace; font-size:8px;
    color:#2e2a50; white-space:nowrap; flex-shrink:0;
  }

  /* card footer */
  .ou-rm-footer {
    padding:10px 18px;
    border-top:1px solid rgba(255,255,255,.055);
    display:flex; align-items:center; justify-content:space-between;
    background:rgba(255,255,255,.008);
  }
`;

/* ── Motion preset ── */
const fadeUp = (delay = 0) => ({
  initial:    { opacity:0, y:18 },
  animate:    { opacity:1, y:0 },
  transition: { duration:.58, ease:[.25,.46,.45,.94], delay },
});

/* Month accent palette — cycles through distinct colours */
const MONTH_ACCENTS = [
  { dot:'#8b5cf6', fill:'rgba(139,92,246,.12)', text:'rgba(139,92,246,.9)', bar:'linear-gradient(90deg,#8b5cf6,#6366f1)' },
  { dot:'#38bdf8', fill:'rgba(56,189,248,.1)',  text:'rgba(56,189,248,.85)', bar:'linear-gradient(90deg,#38bdf8,#818cf8)' },
  { dot:'#22c55e', fill:'rgba(34,197,94,.1)',   text:'rgba(34,197,94,.85)',  bar:'linear-gradient(90deg,#22c55e,#38bdf8)' },
  { dot:'#f472b6', fill:'rgba(244,114,182,.1)', text:'rgba(244,114,182,.85)',bar:'linear-gradient(90deg,#f472b6,#8b5cf6)' },
  { dot:'#fb923c', fill:'rgba(251,146,60,.1)',  text:'rgba(251,146,60,.85)', bar:'linear-gradient(90deg,#fb923c,#f472b6)' },
  { dot:'#34d399', fill:'rgba(52,211,153,.1)',  text:'rgba(52,211,153,.85)', bar:'linear-gradient(90deg,#34d399,#38bdf8)' },
];

/* Derive a short display title from the month object */
function monthTitle(mo) {
  return mo.title || mo.name || `Month ${mo.id ?? ''}`;
}

/* Pull up to 4 topic keywords from a month's tasks */
function topicPills(mo) {
  const seen = new Set();
  const pills = [];
  for (const wk of mo.weeks ?? []) {
    for (const dy of wk.days ?? []) {
      for (const task of dy.tasks ?? []) {
        const word = (task.topic ?? task.title ?? task.name ?? '').split(' ')[0];
        if (word && !seen.has(word)) { seen.add(word); pills.push(word); }
        if (pills.length >= 4) break;
      }
      if (pills.length >= 4) break;
    }
    if (pills.length >= 4) break;
  }
  return pills;
}

/* ── Roadmap Preview Card ── */
function RoadmapCard({ roadmap, taskDoneCount, taskTotalCount, onOpen }) {
  const months = roadmap.slice(0, 6); // show up to 6 months

  /* Per-month task counts */
  const monthStats = useMemo(() => {
    return roadmap.map(mo => {
      let tot = 0;
      mo.weeks?.forEach(wk => wk.days?.forEach(dy => { tot += dy.tasks?.length ?? 0; }));
      return { weeks: mo.weeks?.length ?? 0, tasks: tot };
    });
  }, [roadmap]);

  const totalTasks = taskTotalCount;
  const donePct    = totalTasks > 0 ? Math.round((taskDoneCount / totalTasks) * 100) : 0;

  return (
    <div className="ou-rm-card">
      {/* Header */}
      <div className="ou-rm-header">
        <div>
          <div style={{ fontFamily:"'DM Mono',monospace", fontSize:'8px', color:'#2e2a50', letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'3px' }}>
            Your Roadmap
          </div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:'15px', letterSpacing:'-.03em', color:'rgba(255,255,255,.88)' }}>
            {roadmap.length} Months · Structured Daily
          </div>
        </div>
        {/* overall progress ring */}
        <div style={{ position:'relative', width:'40px', height:'40px', flexShrink:0 }}>
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="3"/>
            <circle
              cx="20" cy="20" r="16" fill="none"
              stroke="url(#prog-grad)" strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 16}`}
              strokeDashoffset={`${2 * Math.PI * 16 * (1 - donePct / 100)}`}
              transform="rotate(-90 20 20)"
              style={{ transition:'stroke-dashoffset .8s ease' }}
            />
            <defs>
              <linearGradient id="prog-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8b5cf6"/>
                <stop offset="100%" stopColor="#38bdf8"/>
              </linearGradient>
            </defs>
          </svg>
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
            fontFamily:"'DM Mono',monospace", fontSize:'9px', fontWeight:500, color:'rgba(255,255,255,.7)',
          }}>
            {donePct}%
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="ou-rm-body">
        {months.map((mo, i) => {
          const acc   = MONTH_ACCENTS[i % MONTH_ACCENTS.length];
          const pills = topicPills(mo);
          const ms    = monthStats[i];
          /* simple per-month progress — 0 for now, expandable */
          const mPct  = 0;

          return (
            <div
              key={i}
              className="ou-rm-row"
              onClick={onOpen}
              style={{ animationDelay:`${i * 60}ms` }}
            >
              {/* Spine */}
              <div className="ou-rm-spine">
                <div className="ou-rm-dot" style={{ background:acc.dot, boxShadow:`0 0 6px ${acc.dot}55` }} />
                {i < months.length - 1 && <div className="ou-rm-vline" />}
              </div>

              {/* Content */}
              <div className="ou-rm-content">
                <div className="ou-rm-month-num">Month {i + 1}</div>
                <div className="ou-rm-month-title">{monthTitle(mo)}</div>

                {pills.length > 0 && (
                  <div className="ou-rm-pills">
                    {pills.map(p => (
                      <span key={p} className="ou-rm-pill" style={{
                        background: acc.fill,
                        borderColor: acc.dot + '33',
                        color: acc.text,
                      }}>
                        {p}
                      </span>
                    ))}
                  </div>
                )}

                <div className="ou-rm-prog-wrap">
                  <div className="ou-rm-prog-track">
                    <div className="ou-rm-prog-fill" style={{
                      background: acc.bar,
                      '--bw': `${mPct}%`,
                      width: `${mPct}%`,
                      animationDelay:`${.5 + i * .08}s`,
                    }} />
                  </div>
                  <span className="ou-rm-prog-label">
                    {ms.weeks}w · {ms.tasks} tasks
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="ou-rm-footer">
        <div style={{ display:'flex', alignItems:'center', gap:'5px' }}>
          <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 6px rgba(34,197,94,.8)', animation:'ou-pulse 2s ease-in-out infinite' }} />
          <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', color:'#22c55e', letterSpacing:'.04em' }}>
            {taskDoneCount}/{taskTotalCount} tasks done
          </span>
        </div>
        <button
          onClick={onOpen}
          style={{
            display:'inline-flex', alignItems:'center', gap:'5px',
            padding:'5px 12px', borderRadius:'6px', border:'none',
            background:'rgba(139,92,246,.14)', color:'#c4b5fd',
            fontFamily:"'DM Mono',monospace", fontSize:'8.5px',
            letterSpacing:'.05em', cursor:'pointer',
            transition:'background .2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(139,92,246,.24)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(139,92,246,.14)'}
        >
          View Full Roadmap
          <svg viewBox="0 0 12 12" fill="none" width="9" height="9">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   HERO SECTION
════════════════════════════════════════════════════ */
export default function HeroSection() {
  const { setSection, setActiveMonth, isTaskDone } = useApp();

  const { stats, done, total } = useMemo(() => {
    let tot = 0, dn = 0;
    roadmapData.forEach((mo, m) =>
      mo.weeks.forEach((wk, w) =>
        wk.days.forEach((dy, d) =>
          dy.tasks.forEach((_, t) => { tot++; if (isTaskDone(m, w, d, t)) dn++; })
        )
      )
    );
    const totalWeeks = roadmapData.reduce((a, mo) => a + mo.weeks.length, 0);
    const totalDays  = roadmapData.reduce((a, mo) => a + mo.weeks.reduce((b, wk) => b + wk.days.length, 0), 0);
    return {
      stats: [
        { n: roadmapData.length, l:'Months' },
        { n: totalWeeks,         l:'Weeks'  },
        { n: totalDays,          l:'Days'   },
        { n: `${dn}/${tot}`,     l:'Done'   },
      ],
      done: dn,
      total: tot,
    };
  }, [isTaskDone]);

  const memberCount = 24;

  const handleOpenRoadmap = () => { setActiveMonth(0); setSection('rm'); };

  return (
    <>
      <style>{STYLES}</style>

      <section className="ou-hero">
        {/* ── Backgrounds ── */}
        <div className="ou-dotgrid" />
        <div style={{ position:'absolute', top:'-8%', left:'25%', width:'55%', height:'62%', background:'radial-gradient(ellipse,rgba(139,92,246,.1),transparent 65%)', filter:'blur(50px)', pointerEvents:'none', animation:'ou-drift-a 14s ease-in-out infinite' }} />
        <div style={{ position:'absolute', bottom:'-20%', right:'-10%', width:'38%', height:'58%', background:'radial-gradient(ellipse,rgba(56,189,248,.07),transparent 60%)', filter:'blur(36px)', pointerEvents:'none', animation:'ou-drift-b 18s ease-in-out infinite' }} />
        <div style={{ position:'absolute', top:'48%', left:'-5%', width:'18%', height:'36%', background:'radial-gradient(ellipse,rgba(99,102,241,.05),transparent 65%)', filter:'blur(26px)', pointerEvents:'none' }} />

        <div className="ou-grid">

          {/* ════ LEFT ════ */}
          <div>
            {/* Live badge */}
            <motion.div {...fadeUp(0)}>
              <div className="ou-badge">
                <div style={{ width:'5px', height:'5px', borderRadius:'50%', background:'#22c55e', boxShadow:'0 0 7px rgba(34,197,94,.9)', animation:'ou-pulse 2s ease-in-out infinite' }} />
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', color:'#86efac', letterSpacing:'.05em' }}>
                  {memberCount} students grinding daily
                </span>
                <span style={{ color:'rgba(255,255,255,.13)', margin:'0 1px' }}>·</span>
                <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', color:'rgba(255,255,255,.24)', letterSpacing:'.04em' }}>
                  Free forever
                </span>
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.div {...fadeUp(.06)} className="ou-eyebrow">
              <span style={{ width:'13px', height:'1px', background:'rgba(139,92,246,.5)', display:'block', flexShrink:0 }} />
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8px', letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(139,92,246,.65)' }}>
                Consistency · Execution · Results
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div {...fadeUp(.1)}>
              <p className="ou-h1-ghost">Your Placement,</p>
              <h1 className="ou-h1-main">Engineered.</h1>
              <span className="ou-brand-line">OfferUnlocked 🔓</span>
            </motion.div>

            {/* Body */}
            <motion.p {...fadeUp(.16)} className="ou-body">
              Most students have the talent. Very few have the{' '}
              <strong style={{ color:'rgba(255,255,255,.68)', fontWeight:500 }}>system</strong>.
              {' '}OfferUnlocked gives you a structured daily roadmap to build real skills and{' '}
              <strong style={{ color:'#c4b5fd', fontWeight:500 }}>unlock the offer</strong> you've been chasing.
            </motion.p>

            <motion.p {...fadeUp(.19)} className="ou-tagline">
              Not a course. Not a random group. A system.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(.23)} className="ou-cta-row">
              <button className="ou-cta-primary" onClick={handleOpenRoadmap}>
                Start Your Journey
                <svg viewBox="0 0 14 14" fill="none" width="12" height="12">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="ou-cta-ghost" onClick={() => setSection('community')}>
                <svg viewBox="0 0 14 14" fill="none" width="11" height="11">
                  <circle cx="5" cy="4.5" r="1.9" stroke="currentColor" strokeWidth="1.3"/>
                  <circle cx="10" cy="4.5" r="1.9" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 12c0-1.9 1.8-3.4 4-3.4s4 1.5 4 3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  <path d="M10 8.8c1.1.4 2.4 1.5 2.4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                Join Community
              </button>
            </motion.div>

            {/* Stat cards */}
            <motion.div {...fadeUp(.28)} className="ou-stats">
              {stats.map(s => (
                <div key={s.l} className="ou-stat-card">
                  <div className="ou-stat-n">{s.n}</div>
                  <div className="ou-stat-l">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ════ RIGHT: Roadmap Preview Card ════ */}
          <motion.div className="ou-right-col" {...fadeUp(.14)}>
            <RoadmapCard
              roadmap={roadmapData}
              taskDoneCount={done}
              taskTotalCount={total}
              onOpen={handleOpenRoadmap}
            />
          </motion.div>

        </div>
      </section>
    </>
  );
}


// import { motion } from 'framer-motion';
// import { useApp } from '../../context/AppContext';
// import { roadmapData } from '../../data/roadmap';
// import { useMemo } from 'react';

// /* ─────────────────────────────────────────────────────────────
//    OfferUnlocked — Hero Section v5
//    Right column : Progress Dashboard Cards (no code)
//    Layout       : Tighter & compact
//    Tokens       : #05050e · #8b5cf6 · #6366f1 · #38bdf8 · #22c55e
//    Fonts        : Syne 800 · DM Mono · Outfit 300-700
// ───────────────────────────────────────────────────────────── */

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

//   /* ── Keyframes ── */
//   @keyframes ou-pulse    { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.7)} }
//   @keyframes ou-shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
//   @keyframes ou-drift-a  { 0%,100%{transform:translate(0,0) scale(1)} 40%{transform:translate(14px,-10px) scale(1.04)} 70%{transform:translate(-8px,14px) scale(.97)} }
//   @keyframes ou-drift-b  { 0%,100%{transform:translate(0,0)} 35%{transform:translate(-12px,8px)} 70%{transform:translate(10px,-7px)} }
//   @keyframes ou-noise    { 0%,100%{transform:translate(0,0)} 25%{transform:translate(-1%,1%)} 50%{transform:translate(1%,-1%)} 75%{transform:translate(-1%,-1%)} }
//   @keyframes ou-bar      { from{width:0%} to{width:var(--bw)} }
//   @keyframes ou-ring     { from{stroke-dashoffset:var(--full)} to{stroke-dashoffset:var(--offset)} }
//   @keyframes ou-pop      { 0%{opacity:0;transform:scale(.88) translateY(6px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
//   @keyframes ou-count-up { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
//   @keyframes ou-heat-in  { from{opacity:0;transform:scaleY(0)} to{opacity:1;transform:scaleY(1)} }

//   /* ── Root ── */
//   .ou-hero {
//     position:relative; overflow:hidden;
//     min-height:100vh; display:flex; align-items:center;
//     padding:clamp(48px,7vh,72px) clamp(20px,4.5vw,60px);
//     background:#05050e;
//     border-bottom:1px solid rgba(255,255,255,.05);
//   }
//   .ou-hero::after {
//     content:''; position:absolute; inset:-150%; width:400%; height:400%;
//     background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
//     opacity:.02; pointer-events:none;
//     animation:ou-noise 9s steps(1) infinite;
//   }
//   .ou-dotgrid {
//     position:absolute; inset:0;
//     background-image:radial-gradient(rgba(139,92,246,.085) 1px,transparent 1px);
//     background-size:26px 26px;
//     mask-image:radial-gradient(ellipse 78% 68% at 9% 32%,black 8%,transparent 65%);
//     pointer-events:none;
//   }

//   /* ── Two-col layout ── */
//   .ou-grid {
//     display:grid; grid-template-columns:1.08fr .92fr;
//     gap:clamp(28px,4.5vw,52px); align-items:center;
//     position:relative; z-index:2;
//     width:100%; max-width:1120px; margin:0 auto;
//   }
//   @media(max-width:840px){ .ou-grid{ grid-template-columns:1fr; } .ou-right-col{ display:none; } }
//   @media(max-width:460px){ .ou-hero{ padding:44px 16px; } }

//   /* ── LEFT: copy elements ── */
//   .ou-badge {
//     display:inline-flex; align-items:center; gap:7px;
//     padding:4px 12px 4px 8px; border-radius:100px;
//     background:rgba(34,197,94,.065); border:1px solid rgba(34,197,94,.16);
//     backdrop-filter:blur(12px); margin-bottom:14px; cursor:default;
//     transition:background .25s,border-color .25s;
//   }
//   .ou-badge:hover{ background:rgba(34,197,94,.11); border-color:rgba(34,197,94,.28); }

//   .ou-eyebrow{ display:flex; align-items:center; gap:8px; margin-bottom:12px; }

//   .ou-h1-ghost {
//     font-family:'Syne',sans-serif; font-weight:700;
//     font-size:clamp(14px,1.7vw,21px); letter-spacing:-.028em;
//     color:rgba(255,255,255,.19); line-height:1; margin-bottom:2px;
//   }
//   .ou-h1-main {
//     font-family:'Syne',sans-serif; font-weight:800;
//     font-size:clamp(33px,4.2vw,54px); letter-spacing:-.055em; line-height:.96;
//     background:linear-gradient(105deg,#f5f0ff 0%,#c4b5fd 28%,#818cf8 58%,#38bdf8 100%);
//     background-size:200% auto;
//     -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//     animation:ou-shimmer 5s linear infinite; margin-bottom:7px;
//   }
//   .ou-brand-line {
//     font-family:'Syne',sans-serif; font-weight:800;
//     font-size:clamp(13px,1.3vw,17px); letter-spacing:-.02em;
//     background:linear-gradient(135deg,#c4b5fd,#818cf8);
//     -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//     margin-bottom:16px; display:block;
//   }
//   .ou-body {
//     font-family:'Outfit',sans-serif; font-weight:300;
//     font-size:clamp(12.5px,1.05vw,14px); line-height:1.88;
//     color:rgba(255,255,255,.34); max-width:400px; margin-bottom:5px;
//   }
//   .ou-tagline {
//     font-family:'DM Mono',monospace; font-size:8.5px;
//     color:#2a2646; letter-spacing:.09em; margin-bottom:22px;
//   }

//   /* CTAs */
//   .ou-cta-row{ display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
//   .ou-cta-primary {
//     display:inline-flex; align-items:center; gap:7px;
//     padding:10px 20px; border-radius:8px; border:none;
//     background:linear-gradient(135deg,#8b5cf6,#6366f1);
//     color:#fff; font-family:'Outfit',sans-serif; font-size:12.5px; font-weight:600;
//     cursor:pointer; letter-spacing:-.01em;
//     box-shadow:0 0 0 1px rgba(139,92,246,.38),0 4px 16px rgba(139,92,246,.24),inset 0 1px 0 rgba(255,255,255,.15);
//     transition:all .2s ease; position:relative; overflow:hidden;
//   }
//   .ou-cta-primary::before{ content:''; position:absolute; inset:0; background:linear-gradient(135deg,rgba(255,255,255,.1),transparent 55%); opacity:0; transition:opacity .2s; }
//   .ou-cta-primary:hover{ transform:translateY(-2px); box-shadow:0 0 0 1px rgba(139,92,246,.58),0 10px 32px rgba(139,92,246,.4),inset 0 1px 0 rgba(255,255,255,.15); }
//   .ou-cta-primary:hover::before{ opacity:1; }
//   .ou-cta-primary:active{ transform:translateY(0); }
//   .ou-cta-ghost {
//     display:inline-flex; align-items:center; gap:6px;
//     padding:9px 16px; border-radius:8px;
//     border:1px solid rgba(255,255,255,.08); background:rgba(255,255,255,.018);
//     color:rgba(255,255,255,.4); font-family:'Outfit',sans-serif; font-size:12px; font-weight:500;
//     cursor:pointer; transition:all .2s;
//   }
//   .ou-cta-ghost:hover{ border-color:rgba(255,255,255,.15); color:rgba(255,255,255,.75); background:rgba(255,255,255,.038); }

//   /* Stat chips */
//   .ou-stats {
//     display:grid; grid-template-columns:repeat(4,1fr);
//     gap:4px; margin-top:22px; padding-top:18px;
//     border-top:1px solid rgba(255,255,255,.05);
//   }
//   @media(max-width:460px){ .ou-stats{ grid-template-columns:repeat(2,1fr); } }
//   .ou-stat-card {
//     padding:10px 10px 8px; border-radius:8px;
//     background:rgba(255,255,255,.016); border:1px solid rgba(255,255,255,.044);
//     transition:background .2s,border-color .2s; cursor:default;
//   }
//   .ou-stat-card:hover{ background:rgba(139,92,246,.065); border-color:rgba(139,92,246,.18); }
//   .ou-stat-n {
//     font-family:'DM Mono',monospace; font-size:clamp(14px,1.4vw,17px); font-weight:500;
//     background:linear-gradient(135deg,#c4b5fd,#818cf8,#38bdf8);
//     -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//     line-height:1; margin-bottom:3px;
//   }
//   .ou-stat-l{ font-size:7.5px; color:#2a2848; font-weight:500; letter-spacing:.12em; text-transform:uppercase; }

//   /* ══════════════════════════════════════
//      DASHBOARD CARDS — right column
//   ══════════════════════════════════════ */
//   .ou-dash { display:flex; flex-direction:column; gap:8px; }

//   /* shared card shell */
//   .ou-card {
//     border-radius:14px;
//     border:1px solid rgba(255,255,255,.068);
//     background:rgba(255,255,255,.018);
//     backdrop-filter:blur(18px);
//     overflow:hidden;
//     transition:border-color .22s, background .22s;
//     animation:ou-pop .5s ease both;
//   }
//   .ou-card:hover{ border-color:rgba(139,92,246,.22); background:rgba(139,92,246,.03); }

//   /* ── Card 1: Progress ring hero ── */
//   .ou-card-main {
//     padding:20px 22px 18px;
//     display:flex; align-items:center; gap:20px;
//     box-shadow:0 0 0 1px rgba(139,92,246,.06),0 18px 50px rgba(0,0,0,.5),0 0 44px rgba(139,92,246,.04);
//   }

//   /* ring container */
//   .ou-ring-wrap{ position:relative; flex-shrink:0; width:88px; height:88px; }

//   .ou-ring-label{
//     position:absolute; inset:0;
//     display:flex; flex-direction:column; align-items:center; justify-content:center;
//     gap:1px;
//   }
//   .ou-ring-pct{
//     font-family:'DM Mono',monospace; font-size:20px; font-weight:500;
//     background:linear-gradient(135deg,#c4b5fd,#38bdf8);
//     -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//     line-height:1;
//     animation:ou-count-up .6s .2s ease both;
//   }
//   .ou-ring-sub{ font-family:'DM Mono',monospace; font-size:7.5px; color:#2e2a50; letter-spacing:.06em; }

//   /* ring info */
//   .ou-ring-info{ flex:1; }
//   .ou-ring-title{
//     font-family:'Syne',sans-serif; font-weight:800;
//     font-size:15px; letter-spacing:-.03em;
//     color:rgba(255,255,255,.88); margin-bottom:4px;
//   }
//   .ou-ring-sub2{ font-family:'Outfit',sans-serif; font-weight:300; font-size:11.5px; color:rgba(255,255,255,.3); line-height:1.6; margin-bottom:10px; }

//   /* mini progress bars inside card 1 */
//   .ou-mini-bars{ display:flex; flex-direction:column; gap:5px; }
//   .ou-mini-bar-row{ display:flex; align-items:center; gap:8px; }
//   .ou-mini-bar-label{ font-family:'DM Mono',monospace; font-size:8px; color:#2e2a50; width:34px; flex-shrink:0; }
//   .ou-mini-bar-track{ flex:1; height:3px; border-radius:100px; background:rgba(255,255,255,.06); overflow:hidden; }
//   .ou-mini-bar-fill{ height:100%; border-radius:100px; animation:ou-bar .8s ease both; }
//   .ou-mini-bar-val{ font-family:'DM Mono',monospace; font-size:8px; color:#3a3460; width:24px; text-align:right; flex-shrink:0; }

//   /* ── Row of 2 small cards ── */
//   .ou-card-row{ display:grid; grid-template-columns:1fr 1fr; gap:8px; }

//   /* ── Card 2: Streak ── */
//   .ou-card-streak{ padding:16px 18px; }
//   .ou-card-label{
//     font-family:'DM Mono',monospace; font-size:7.5px;
//     color:#2e2a50; letter-spacing:.12em; text-transform:uppercase; margin-bottom:6px;
//   }
//   .ou-streak-num{
//     font-family:'DM Mono',monospace; font-size:32px; font-weight:500;
//     background:linear-gradient(135deg,#fb923c,#f97316);
//     -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//     line-height:1; margin-bottom:2px;
//     animation:ou-count-up .5s .3s ease both;
//   }
//   .ou-streak-unit{ font-family:'Outfit',sans-serif; font-size:10px; color:rgba(255,255,255,.22); font-weight:300; }
//   .ou-streak-dots{ display:flex; gap:4px; margin-top:10px; }
//   .ou-streak-dot{ width:9px; height:9px; border-radius:3px; }

//   /* ── Card 3: Deadline ── */
//   .ou-card-deadline{ padding:16px 18px; }
//   .ou-deadline-num{
//     font-family:'DM Mono',monospace; font-size:32px; font-weight:500;
//     background:linear-gradient(135deg,#fbbf24,#fb923c);
//     -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
//     line-height:1; margin-bottom:2px;
//     animation:ou-count-up .5s .35s ease both;
//   }
//   .ou-deadline-unit{ font-family:'Outfit',sans-serif; font-size:10px; color:rgba(255,255,255,.22); font-weight:300; }

//   /* deadline micro bar */
//   .ou-dl-track{ width:100%; height:3px; border-radius:100px; background:rgba(255,255,255,.06); overflow:hidden; margin-top:10px; }
//   .ou-dl-fill{ height:100%; border-radius:100px; background:linear-gradient(90deg,#fbbf24,#fb923c); animation:ou-bar .8s .4s ease both; }

//   /* ── Card 4: Heatmap ── */
//   .ou-card-heat{ padding:14px 18px 16px; }
//   .ou-heat-grid{
//     display:grid;
//     grid-template-columns:repeat(10,1fr);
//     gap:3px; margin-top:10px;
//   }
//   .ou-heat-cell{
//     aspect-ratio:1; border-radius:2.5px;
//     animation:ou-heat-in .3s ease both;
//   }

//   /* ── Live dot ── */
//   .ou-live-dot{
//     width:5px; height:5px; border-radius:50%;
//     background:#22c55e; box-shadow:0 0 7px rgba(34,197,94,.9);
//     animation:ou-pulse 2s ease-in-out infinite; flex-shrink:0;
//   }
// `;

// /* ── Motion preset ── */
// const fadeUp = (delay = 0) => ({
//   initial:    { opacity: 0, y: 18 },
//   animate:    { opacity: 1, y: 0 },
//   transition: { duration: .58, ease: [.25, .46, .45, .94], delay },
// });

// /* ── SVG Progress Ring ── */
// function ProgressRing({ pct, size = 88, stroke = 7 }) {
//   const r   = (size - stroke) / 2;
//   const circ = 2 * Math.PI * r;
//   const off  = circ * (1 - pct / 100);
//   return (
//     <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
//       <defs>
//         <linearGradient id="ring-g" x1="0" y1="0" x2="1" y2="1">
//           <stop offset="0%" stopColor="#8b5cf6"/>
//           <stop offset="50%" stopColor="#6366f1"/>
//           <stop offset="100%" stopColor="#38bdf8"/>
//         </linearGradient>
//       </defs>
//       {/* track */}
//       <circle cx={size/2} cy={size/2} r={r} fill="none"
//         stroke="rgba(255,255,255,.055)" strokeWidth={stroke}/>
//       {/* fill */}
//       <circle cx={size/2} cy={size/2} r={r} fill="none"
//         stroke="url(#ring-g)" strokeWidth={stroke}
//         strokeLinecap="round"
//         strokeDasharray={circ}
//         strokeDashoffset={off}
//         transform={`rotate(-90 ${size/2} ${size/2})`}
//         style={{
//           transition:'stroke-dashoffset .9s cubic-bezier(.34,1.56,.64,1)',
//         }}
//       />
//     </svg>
//   );
// }

// /* ── Dashboard right column ── */
// function Dashboard({ done, total, streak, monthsDone, totalMonths, daysLeft, totalDays }) {
//   const pct        = total > 0 ? Math.round((done / total) * 100) : 0;
//   const deadlinePct = Math.max(0, Math.round(((totalDays - daysLeft) / totalDays) * 100));

//   /* heatmap: 30 cells — simulate activity */
//   const heatCells = Array.from({ length: 30 }, (_, i) => {
//     if (i < streak) return 'done';
//     if (i === streak) return 'today';
//     return 'empty';
//   });

//   const cellColor = (type) => {
//     if (type === 'done')  return { background:'rgba(139,92,246,.55)', boxShadow:'0 0 4px rgba(139,92,246,.3)' };
//     if (type === 'today') return { background:'rgba(56,189,248,.65)', boxShadow:'0 0 5px rgba(56,189,248,.4)' };
//     return { background:'rgba(255,255,255,.04)' };
//   };

//   const DAYS = ['M','T','W','T','F','S','S'];
//   const streakActive = Math.min(streak, 7);

//   return (
//     <div className="ou-dash">

//       {/* ── Card 1: Big progress ring ── */}
//       <div className="ou-card ou-card-main" style={{ animationDelay:'.12s' }}>
//         <div className="ou-ring-wrap">
//           <ProgressRing pct={pct} />
//           <div className="ou-ring-label">
//             <span className="ou-ring-pct">{pct}%</span>
//             <span className="ou-ring-sub">done</span>
//           </div>
//         </div>

//         <div className="ou-ring-info">
//           <div className="ou-ring-title">Overall Progress</div>
//           <div className="ou-ring-sub2">{done} of {total} tasks<br/>completed so far</div>
//           <div className="ou-mini-bars">
//             {[
//               { label:'Tasks',  val: pct,                          color:'linear-gradient(90deg,#8b5cf6,#6366f1)', delay:'.5s' },
//               { label:'Months', val: Math.round((monthsDone / totalMonths) * 100), color:'linear-gradient(90deg,#38bdf8,#818cf8)', delay:'.6s' },
//               { label:'Time',   val: deadlinePct,                  color:'linear-gradient(90deg,#22c55e,#38bdf8)', delay:'.7s' },
//             ].map(b => (
//               <div key={b.label} className="ou-mini-bar-row">
//                 <span className="ou-mini-bar-label">{b.label}</span>
//                 <div className="ou-mini-bar-track">
//                   <div className="ou-mini-bar-fill" style={{ background:b.color, '--bw':`${b.val}%`, width:`${b.val}%`, animationDelay:b.delay }} />
//                 </div>
//                 <span className="ou-mini-bar-val">{b.val}%</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ── Row: Streak + Deadline ── */}
//       <div className="ou-card-row">

//         {/* Streak */}
//         <div className="ou-card ou-card-streak" style={{ animationDelay:'.2s' }}>
//           <div className="ou-card-label">Streak 🔥</div>
//           <div className="ou-streak-num">{streak}</div>
//           <div className="ou-streak-unit">days in a row</div>
//           <div className="ou-streak-dots">
//             {DAYS.map((d, i) => (
//               <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'3px' }}>
//                 <div className="ou-streak-dot" style={{
//                   background: i < streakActive ? 'rgba(251,146,60,.72)' : 'rgba(255,255,255,.05)',
//                   boxShadow:  i < streakActive ? '0 0 6px rgba(251,146,60,.35)' : 'none',
//                 }} />
//                 <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'6px', color:'#24204a' }}>{d}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Deadline */}
//         <div className="ou-card ou-card-deadline" style={{ animationDelay:'.24s' }}>
//           <div className="ou-card-label">Deadline ⏳</div>
//           <div className="ou-deadline-num">{daysLeft}</div>
//           <div className="ou-deadline-unit">days remaining</div>
//           <div className="ou-dl-track">
//             <div className="ou-dl-fill" style={{ '--bw':`${deadlinePct}%`, width:`${deadlinePct}%` }} />
//           </div>
//           <div style={{ marginTop:'5px', display:'flex', justifyContent:'space-between' }}>
//             <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'7.5px', color:'#2a2448' }}>Day 1</span>
//             <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'7.5px', color:'#2a2448' }}>Aug 15</span>
//           </div>
//         </div>

//       </div>

//       {/* ── Card 3: Activity heatmap ── */}
//       <div className="ou-card ou-card-heat" style={{ animationDelay:'.3s' }}>
//         <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
//           <div className="ou-card-label" style={{ marginBottom:0 }}>Activity — Last 30 Days</div>
//           <div style={{ display:'flex', alignItems:'center', gap:'5px' }}>
//             <div className="ou-live-dot" />
//             <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8px', color:'#22c55e', letterSpacing:'.04em' }}>live</span>
//           </div>
//         </div>
//         <div className="ou-heat-grid">
//           {heatCells.map((type, i) => (
//             <div
//               key={i}
//               className="ou-heat-cell"
//               style={{ ...cellColor(type), animationDelay:`${.3 + i * .012}s` }}
//               title={type === 'done' ? 'Completed' : type === 'today' ? 'Today' : 'Upcoming'}
//             />
//           ))}
//         </div>
//         <div style={{ display:'flex', alignItems:'center', justifyContent:'flex-end', gap:'8px', marginTop:'6px' }}>
//           {[
//             { bg:'rgba(255,255,255,.05)', label:'None' },
//             { bg:'rgba(139,92,246,.4)',   label:'Done' },
//             { bg:'rgba(56,189,248,.55)',  label:'Today' },
//           ].map(l => (
//             <div key={l.label} style={{ display:'flex', alignItems:'center', gap:'4px' }}>
//               <div style={{ width:'7px', height:'7px', borderRadius:'2px', background:l.bg }} />
//               <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'7px', color:'#24204a' }}>{l.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// /* ════════════════════════════════════════════════════
//    HERO SECTION
// ════════════════════════════════════════════════════ */
// export default function HeroSection() {
//   const { setSection, setActiveMonth, isTaskDone } = useApp();

//   const { stats, done, total, streak, monthsDone } = useMemo(() => {
//     let tot = 0, dn = 0;
//     roadmapData.forEach((mo, m) =>
//       mo.weeks.forEach((wk, w) =>
//         wk.days.forEach((dy, d) =>
//           dy.tasks.forEach((_, t) => { tot++; if (isTaskDone(m, w, d, t)) dn++; })
//         )
//       )
//     );

//     const totalWeeks = roadmapData.reduce((a, mo) => a + mo.weeks.length, 0);
//     const totalDays  = roadmapData.reduce((a, mo) => a + mo.weeks.reduce((b, wk) => b + wk.days.length, 0), 0);

//     /* streak = consecutive fully-completed days from start */
//     let sk = 0;
//     outer: for (const mo of roadmapData) {
//       const mi = roadmapData.indexOf(mo);
//       for (const wk of mo.weeks) {
//         const wi = mo.weeks.indexOf(wk);
//         for (const dy of wk.days) {
//           const di = wk.days.indexOf(dy);
//           if (dy.tasks.every((_, t) => isTaskDone(mi, wi, di, t))) sk++;
//           else break outer;
//         }
//       }
//     }

//     /* months with at least one task done */
//     let mDone = 0;
//     roadmapData.forEach((mo, m) => {
//       const anyDone = mo.weeks.some((wk, w) =>
//         wk.days.some((dy, d) => dy.tasks.some((_, t) => isTaskDone(m, w, d, t)))
//       );
//       if (anyDone) mDone++;
//     });

//     return {
//       stats: [
//         { n: roadmapData.length, l:'Months' },
//         { n: totalWeeks,         l:'Weeks'  },
//         { n: totalDays,          l:'Days'   },
//         { n: `${dn}/${tot}`,     l:'Done'   },
//       ],
//       done: dn, total: tot, streak: sk,
//       monthsDone: mDone,
//     };
//   }, [isTaskDone]);

//   const memberCount = 24;
//   const TOTAL_DAYS  = 90;  // adjust to your actual programme length
//   const daysLeft    = 42;  // replace with real deadline calc if available

//   return (
//     <>
//       <style>{STYLES}</style>

//       <section className="ou-hero">
//         {/* Backgrounds */}
//         <div className="ou-dotgrid" />
//         <div style={{ position:'absolute', top:'-8%', left:'25%', width:'55%', height:'62%', background:'radial-gradient(ellipse,rgba(139,92,246,.1),transparent 65%)', filter:'blur(50px)', pointerEvents:'none', animation:'ou-drift-a 14s ease-in-out infinite' }} />
//         <div style={{ position:'absolute', bottom:'-20%', right:'-10%', width:'38%', height:'58%', background:'radial-gradient(ellipse,rgba(56,189,248,.07),transparent 60%)', filter:'blur(36px)', pointerEvents:'none', animation:'ou-drift-b 18s ease-in-out infinite' }} />
//         <div style={{ position:'absolute', top:'48%', left:'-5%', width:'18%', height:'36%', background:'radial-gradient(ellipse,rgba(99,102,241,.05),transparent 65%)', filter:'blur(26px)', pointerEvents:'none' }} />

//         <div className="ou-grid">

//           {/* ════ LEFT ════ */}
//           <div>
//             {/* Live badge */}
//             <motion.div {...fadeUp(0)}>
//               <div className="ou-badge">
//                 <div className="ou-live-dot" style={{ width:'5px', height:'5px' }} />
//                 <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', color:'#86efac', letterSpacing:'.05em' }}>
//                   {memberCount} students grinding daily
//                 </span>
//                 <span style={{ color:'rgba(255,255,255,.13)', margin:'0 1px' }}>·</span>
//                 <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8.5px', color:'rgba(255,255,255,.24)', letterSpacing:'.04em' }}>
//                   Free forever
//                 </span>
//               </div>
//             </motion.div>

//             {/* Eyebrow */}
//             <motion.div {...fadeUp(.06)} className="ou-eyebrow">
//               <span style={{ width:'13px', height:'1px', background:'rgba(139,92,246,.5)', display:'block', flexShrink:0 }} />
//               <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'8px', letterSpacing:'.18em', textTransform:'uppercase', color:'rgba(139,92,246,.65)' }}>
//                 Consistency · Execution · Results
//               </span>
//             </motion.div>

//             {/* Headline */}
//             <motion.div {...fadeUp(.1)}>
//               <p className="ou-h1-ghost">Your Placement,</p>
//               <h1 className="ou-h1-main">Engineered.</h1>
//               <span className="ou-brand-line">OfferUnlocked 🔓</span>
//             </motion.div>

//             {/* Body */}
//             <motion.p {...fadeUp(.16)} className="ou-body">
//               Most students have the talent. Very few have the{' '}
//               <strong style={{ color:'rgba(255,255,255,.68)', fontWeight:500 }}>system</strong>.
//               {' '}OfferUnlocked gives you a structured daily roadmap to build real skills and{' '}
//               <strong style={{ color:'#c4b5fd', fontWeight:500 }}>unlock the offer</strong> you've been chasing.
//             </motion.p>

//             <motion.p {...fadeUp(.19)} className="ou-tagline">
//               Not a course. Not a random group. A system.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div {...fadeUp(.23)} className="ou-cta-row">
//               <button
//                 className="ou-cta-primary"
//                 onClick={() => { setActiveMonth(0); setSection('rm'); }}
//               >
//                 Start Your Journey
//                 <svg viewBox="0 0 14 14" fill="none" width="12" height="12">
//                   <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//               <button className="ou-cta-ghost" onClick={() => setSection('community')}>
//                 <svg viewBox="0 0 14 14" fill="none" width="11" height="11">
//                   <circle cx="5" cy="4.5" r="1.9" stroke="currentColor" strokeWidth="1.3"/>
//                   <circle cx="10" cy="4.5" r="1.9" stroke="currentColor" strokeWidth="1.3"/>
//                   <path d="M1 12c0-1.9 1.8-3.4 4-3.4s4 1.5 4 3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//                   <path d="M10 8.8c1.1.4 2.4 1.5 2.4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//                 </svg>
//                 Join Community
//               </button>
//             </motion.div>

//             {/* Stat chips */}
//             <motion.div {...fadeUp(.28)} className="ou-stats">
//               {stats.map(s => (
//                 <div key={s.l} className="ou-stat-card">
//                   <div className="ou-stat-n">{s.n}</div>
//                   <div className="ou-stat-l">{s.l}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* ════ RIGHT: Dashboard ════ */}
//           <motion.div className="ou-right-col" {...fadeUp(.14)}>
//             <Dashboard
//               done={done}
//               total={total}
//               streak={streak}
//               monthsDone={monthsDone}
//               totalMonths={roadmapData.length}
//               daysLeft={daysLeft}
//               totalDays={TOTAL_DAYS}
//             />
//           </motion.div>

//         </div>
//       </section>
//     </>
//   );
// }