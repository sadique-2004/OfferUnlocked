import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { roadmapData } from '../../data/roadmap';
import { useMemo } from 'react';

/* ─────────────────────────────────────────────────────────
   Design tokens (locked)
   bg #05050e · #8b5cf6 · #6366f1 · #38bdf8 · #22c55e
   Syne 800 · DM Mono · Outfit 300-700 · JetBrains Mono (editor)
───────────────────────────────────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 18 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut', delay },
});

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');

  @keyframes hs-pulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.5)}}
  @keyframes hs-blink{0%,100%{opacity:1}50%{opacity:0}}
  @keyframes hs-scan{0%{transform:translateY(-100%)}100%{transform:translateY(600%)}}

  /* scanline sweep */
  .hs-code-body::before{
    content:'';position:absolute;left:0;right:0;height:44px;pointer-events:none;
    background:linear-gradient(transparent,rgba(139,92,246,.022),transparent);
    animation:hs-scan 4s linear infinite;
  }
  /* blinking cursor */
  .hs-cursor{
    display:inline-block;width:6px;height:11px;background:#8b5cf6;
    vertical-align:middle;margin-left:1px;border-radius:1px;
    animation:hs-blink 1.1s step-end infinite;
  }
  .hs-cta:hover{
    transform:translateY(-2px) !important;
    box-shadow:0 8px 32px rgba(139,92,246,.55),inset 0 1px 0 rgba(255,255,255,.2) !important;
  }

  /* Java syntax colours */
  .jkw { color:#c084fc; }
  .jty { color:#67e8f9; }
  .jfn { color:#a5f3fc; }
  .jst { color:#86efac; }
  .jcm { color:#3d3659; font-style:italic; }
  .jsy { color:#e879f9; }
  .jnm { color:#fb923c; }
  .jan { color:#fbbf24; }
  .jpl { color:#ccc5e8; }

  /* indent helpers */
  .i1{padding-left:16px;}
  .i2{padding-left:32px;}
  .i3{padding-left:48px;}

  /* layout breakpoints */
  .hs-layout{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:clamp(24px,4vw,48px);
    align-items:center;
  }
  @media(max-width:800px){
    .hs-layout{ grid-template-columns:1fr; }
    .hs-editor-col{ display:none; }          /* hide editor on tablet/mobile */
  }
  @media(max-width:480px){
    .hs-section{ padding:40px 18px !important; }
  }
`;

/* ── Single code line ──────────────────────────────────── */
function CL({ n, children }) {
  return (
    <div style={{ display:'flex', alignItems:'baseline', minHeight:'19px' }}>
      <span style={{
        width:'32px', minWidth:'32px', textAlign:'right', paddingRight:'14px',
        color:'#2a2640', fontFamily:"'JetBrains Mono',monospace",
        fontSize:'10px', userSelect:'none', flexShrink:0,
      }}>
        {n}
      </span>
      <span style={{
        flex:1, fontFamily:"'JetBrains Mono',monospace",
        fontSize:'11.5px', lineHeight:'1.72', paddingRight:'14px',
      }}>
        {children}
      </span>
    </div>
  );
}

/* Syntax helpers */
const kw  = t => <span className="jkw">{t}</span>;
const ty  = t => <span className="jty">{t}</span>;
const fn  = t => <span className="jfn">{t}</span>;
const st  = t => <span className="jst">"{t}"</span>;
const cmt = t => <span className="jcm">{t}</span>;
const sy  = t => <span className="jsy">{t}</span>;
const nm  = t => <span className="jnm">{t}</span>;
const an  = t => <span className="jan">{t}</span>;
const pl  = t => <span className="jpl">{t}</span>;

/* ── Compact Java code editor ─────────────────────────── */
function JavaEditor({ memberCount }) {
  return (
    <div style={{
      borderRadius:'13px', overflow:'hidden',
      border:'1px solid rgba(139,92,246,.2)',
      boxShadow:'0 12px 50px rgba(0,0,0,.55),0 0 0 1px rgba(139,92,246,.07)',
    }}>

      {/* Window chrome */}
      <div style={{
        background:'#181425', padding:'9px 14px',
        display:'flex', alignItems:'center', gap:'10px',
        borderBottom:'1px solid rgba(255,255,255,.07)',
      }}>
        <div style={{ display:'flex', gap:'5px' }}>
          {['#ff5f57','#febc2e','#28c840'].map(c => (
            <div key={c} style={{ width:'10px', height:'10px', borderRadius:'50%', background:c }} />
          ))}
        </div>
        <div style={{
          padding:'2px 10px', borderRadius:'4px',
          fontFamily:"'DM Mono',monospace", fontSize:'10.5px',
          background:'rgba(139,92,246,.12)', border:'1px solid rgba(139,92,246,.2)', color:'#9490b0',
        }}>
          <span style={{ color:'#c4b5fd', fontWeight:500 }}>OfferUnlocked</span>.java
        </div>
        <span style={{ marginLeft:'auto', fontFamily:"'DM Mono',monospace", fontSize:'9.5px', color:'#3d3659', letterSpacing:'.06em' }}>
          Java 17
        </span>
      </div>

      {/* Code */}
      <div className="hs-code-body" style={{ background:'#0f0d1a', padding:'12px 0', position:'relative', overflow:'hidden' }}>
        <CL n={1}>{cmt('// OfferUnlocked — Daily Execution Engine')}</CL>
        <CL n={2}>{cmt('// Aug 15 deadline. No excuses.')}</CL>
        <CL n={3}>&nbsp;</CL>
        <CL n={4}>{an('@DailySystem')}</CL>
        <CL n={5}>{kw('public class ')}{ty('OfferUnlocked ')}{sy('{')}</CL>
        <CL n={6}>&nbsp;</CL>
        <CL n={7}><span className="i1">{kw('private static final ')}{ty('int ')}{pl('MEMBERS ')}{sy('= ')}{nm(memberCount)}{pl(';')}</span></CL>
        <CL n={8}>&nbsp;</CL>
        <CL n={9}><span className="i1">{kw('public static void ')}{fn('main')}{sy('(')}{ty('String')}{sy('[] ')}{pl('args')}{sy(') {')}</span></CL>
        <CL n={10}>&nbsp;</CL>
        <CL n={11}><span className="i2">{ty('Student ')}{pl('you ')}{sy('= new ')}{ty('Student')}{sy('(')}{st('you')}{sy(');')}</span></CL>
        <CL n={12}>&nbsp;</CL>
        <CL n={13}><span className="i2">{kw('if ')}{sy('(')}{pl('you')}{sy('.')}{fn('isConsistent')}{sy('() && ')}{pl('you')}{sy('.')}{fn('executesDaily')}{sy('()) {')}</span></CL>
        <CL n={14}>&nbsp;</CL>
        <CL n={15}><span className="i3">{ty('System')}{sy('.')}{pl('out')}{sy('.')}{fn('println')}{sy('(')}{st('Offer unlocked 🔓')}{sy(');')}</span></CL>
        <CL n={16}><span className="i3">{ty('System')}{sy('.')}{pl('out')}{sy('.')}{fn('println')}{sy('(')}{st('Dream company secured ✅')}{sy(');')}</span></CL>
        <CL n={17}>&nbsp;</CL>
        <CL n={18}><span className="i2">{sy('} ')}{kw('else ')}{sy('{')}</span></CL>
        <CL n={19}>&nbsp;</CL>
        <CL n={20}><span className="i3">{ty('System')}{sy('.')}{pl('out')}{sy('.')}{fn('println')}{sy('(')}{st("Keep grinding. Don't stop.")}{sy(');')}</span></CL>
        <CL n={21}><span className="i3">{fn('retry')}{sy('(')}{pl('you')}{sy(', ')}{st('tomorrow')}{sy(');')}</span></CL>
        <CL n={22}>&nbsp;</CL>
        <CL n={23}><span className="i2">{sy('}')}</span></CL>
        <CL n={24}><span className="i1">{sy('}')}</span></CL>
        <CL n={25}>{sy('}')}<span className="hs-cursor" /></CL>
      </div>

      {/* Status bar */}
      <div style={{
        background:'#181425', padding:'5px 14px',
        display:'flex', alignItems:'center', gap:'14px',
        borderTop:'1px solid rgba(255,255,255,.06)',
      }}>
        {[
          { dot:'#22c55e', glow:'rgba(34,197,94,.8)', label:'No errors',    pulse:true },
          { dot:'#818cf8', glow:null,                 label:'Java 17 · UTF-8' },
        ].map(s => (
          <div key={s.label} style={{ display:'flex', alignItems:'center', gap:'4px' }}>
            <div style={{
              width:'5px', height:'5px', borderRadius:'50%', background:s.dot,
              boxShadow: s.glow ? `0 0 5px ${s.glow}` : 'none',
              animation: s.pulse ? 'hs-pulse 2s ease-in-out infinite' : 'none',
            }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'9.5px', color:'#3d3659' }}>
              {s.label}
            </span>
          </div>
        ))}
        <span style={{ marginLeft:'auto', fontFamily:"'DM Mono',monospace", fontSize:'9.5px', color:'#3d3659' }}>
          Ln 25, Col 2
        </span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════
   MAIN EXPORT
════════════════════════════════════════════════════════ */
export default function HeroSection() {
  const { setSection, setActiveMonth, isTaskDone } = useApp();

  const stats = useMemo(() => {
    let tot = 0, dn = 0;
    roadmapData.forEach((mo, m) =>
      mo.weeks.forEach((wk, w) =>
        wk.days.forEach((dy, d) =>
          dy.tasks.forEach((_, t) => {
            tot++;
            if (isTaskDone(m, w, d, t)) dn++;
          })
        )
      )
    );
    const totalWeeks = roadmapData.reduce((a, mo) => a + mo.weeks.length, 0);
    const totalDays  = roadmapData.reduce((a, mo) => a + mo.weeks.reduce((b, wk) => b + wk.days.length, 0), 0);
    return [
      { n: roadmapData.length, l: 'Months'    },
      { n: totalWeeks,         l: 'Weeks'      },
      { n: totalDays,          l: 'Days'       },
      { n: `${dn}/${tot}`,     l: 'Tasks Done' },
    ];
  }, [isTaskDone]);

  /* Update this if you import communityData */
  const memberCount = 24;

  return (
    <>
      <style>{STYLES}</style>

      <section
        className="hs-section"
        style={{
          position:'relative', overflow:'hidden',
          padding:'clamp(36px,5vh,56px) clamp(20px,4vw,52px)',
          borderBottom:'1px solid rgba(255,255,255,.06)',
          minHeight:'100vh', display:'flex', alignItems:'center',
          background:`
            radial-gradient(ellipse 70% 80% at 55% -10%,rgba(139,92,246,.08),transparent 65%),
            radial-gradient(ellipse 30% 40% at 95% 80%, rgba(56,189,248,.05),transparent 55%)
          `,
        }}
      >
        {/* Ambient orbs */}
        <div style={{ position:'absolute', top:'-10%', left:'35%', width:'55%', height:'70%', background:'radial-gradient(ellipse,rgba(139,92,246,.1),transparent 65%)', filter:'blur(40px)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-10%', right:'-5%', width:'35%', height:'50%', background:'radial-gradient(ellipse,rgba(56,189,248,.06),transparent 60%)', filter:'blur(24px)', pointerEvents:'none' }} />
        {/* Dot grid */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(rgba(139,92,246,.1) 1px,transparent 1px)', backgroundSize:'30px 30px', maskImage:'radial-gradient(ellipse 85% 70% at 20% 30%,black,transparent 80%)' }} />

        {/* Grid */}
        <div className="hs-layout" style={{ position:'relative', zIndex:2, width:'100%' }}>

          {/* ── LEFT: copy ── */}
          <div>
            <motion.div {...fadeUp(0)} style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'16px' }}>
              <span style={{ width:'14px', height:'1px', background:'rgba(139,92,246,.6)', display:'block' }} />
              <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'10px', letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(139,92,246,.85)' }}>
                Consistency · Execution · Results
              </span>
            </motion.div>

            <motion.h1 {...fadeUp(0.1)} style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(24px,3.2vw,40px)', fontWeight:800, letterSpacing:'-.04em', lineHeight:1.05, marginBottom:'14px' }}>
              <span style={{ background:'linear-gradient(135deg,#f5f0ff 0%,#c4b5fd 40%,#818cf8 70%,#38bdf8 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                OfferUnlocked
              </span>
              {' '}🔓
            </motion.h1>

            <motion.p {...fadeUp(0.15)} style={{ fontSize:'clamp(13px,1.2vw,14.5px)', lineHeight:'1.82', color:'#8b85a8', maxWidth:'400px', marginBottom:'6px', fontFamily:"'Outfit',sans-serif", fontWeight:300 }}>
              Consistency is the key — but very few actually stay consistent.{' '}
              A focused system to{' '}
              <strong style={{ color:'#c4b5fd', fontWeight:500 }}>execute daily</strong>,
              {' '}build real skills, and unlock the opportunities that matter.
            </motion.p>

            <motion.p {...fadeUp(0.2)} style={{ fontFamily:"'DM Mono',monospace", fontSize:'10.5px', color:'#4a4465', letterSpacing:'.05em', marginBottom:'24px' }}>
              Not a course. Not a random group. A system.
            </motion.p>

            <motion.div {...fadeUp(0.25)}>
              <button
                className="hs-cta"
                onClick={() => { setActiveMonth(0); setSection('rm'); }}
                style={{
                  display:'inline-flex', alignItems:'center', gap:'7px',
                  padding:'10px 22px', borderRadius:'9px', border:'none',
                  background:'linear-gradient(135deg,#8b5cf6,#6366f1)',
                  color:'#fff', fontFamily:"'Outfit',sans-serif", fontSize:'12.5px', fontWeight:600,
                  cursor:'pointer', letterSpacing:'-.01em',
                  boxShadow:'0 0 24px rgba(139,92,246,.35),inset 0 1px 0 rgba(255,255,255,.15)',
                  transition:'all .25s',
                }}
              >
                Start Journey
                <svg viewBox="0 0 14 14" fill="none" width="12" height="12">
                  <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.3)} style={{ display:'flex', gap:0, marginTop:'26px', flexWrap:'wrap' }}>
              {stats.map((s, i) => (
                <div key={s.l} style={{ display:'flex', alignItems:'stretch' }}>
                  <div style={{ display:'flex', flexDirection:'column', gap:'2px' }}>
                    <span style={{ fontFamily:"'DM Mono',monospace", fontSize:'18px', fontWeight:500, background:'linear-gradient(135deg,#c4b5fd,#818cf8,#38bdf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                      {s.n}
                    </span>
                    <span style={{ fontSize:'9.5px', color:'#4a4465', fontWeight:500, letterSpacing:'.06em', textTransform:'uppercase' }}>
                      {s.l}
                    </span>
                  </div>
                  {i < stats.length - 1 && (
                    <div style={{ width:'1px', background:'rgba(255,255,255,.07)', margin:'4px 16px', alignSelf:'stretch' }} />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: compact editor ── */}
          <motion.div className="hs-editor-col" {...fadeUp(0.15)}>
            <JavaEditor memberCount={memberCount} />
          </motion.div>

        </div>
      </section>
    </>
  );
}