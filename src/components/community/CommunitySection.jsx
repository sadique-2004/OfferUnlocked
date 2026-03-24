

// import { motion } from 'framer-motion';
// import { communityData } from '../../data/community';
// import JoinSection from './JoinSection';


// const AVATAR_GRADIENTS = [
//   ['#8b5cf6','#6366f1'], ['#3b82f6','#06b6d4'], ['#f59e0b','#ef4444'],
//   ['#10b981','#3b82f6'], ['#ec4899','#8b5cf6'], ['#f97316','#f59e0b'],
//   ['#06b6d4','#10b981'], ['#6366f1','#ec4899'],
// ];

// // ── Font + global keyframes ──────────────────────────────
// function FontLoader() {
//   return (
//     <style>{`
//       @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap');
//       .cr *{box-sizing:border-box;}
//       .cr{font-family:'Outfit',sans-serif;}
//       .cr .syne{font-family:'Syne',sans-serif;}
//       .cr .mono{font-family:'DM Mono',monospace;}
//       @keyframes cr-spin{to{transform:rotate(360deg)}}
//       @keyframes cr-pulse{0%,100%{opacity:.7;transform:scale(1)}50%{opacity:1;transform:scale(1.5)}}
//       @keyframes cr-live{0%,100%{box-shadow:0 0 6px rgba(34,197,94,.7)}50%{box-shadow:0 0 14px rgba(34,197,94,1)}}

//       /* ── Responsive helpers ── */
//       .cr-admin-body{
//         display:flex; align-items:flex-start; gap:32px; flex-wrap:wrap;
//         padding:36px;
//       }
//       .cr-admin-ring{
//         width:100px; height:100px; border-radius:50%; padding:2.5px;
//         background:linear-gradient(135deg,#8b5cf6,#6366f1,#38bdf8,#8b5cf6);
//         animation:cr-spin 6s linear infinite; flex-shrink:0; position:relative;
//       }
//       .cr-grid{
//         display:grid;
//         grid-template-columns:repeat(auto-fill,minmax(190px,1fr));
//         gap:12px;
//       }
//       @media(max-width:640px){
//         .cr-admin-body{ padding:28px 20px; gap:20px; }
//         .cr-admin-ring{ width:84px; height:84px; }
//         .cr-grid{ grid-template-columns:repeat(auto-fill,minmax(155px,1fr)); gap:10px; }
//       }
//       @media(max-width:400px){
//         .cr-grid{ grid-template-columns:1fr 1fr; }
//       }
//     `}</style>
//   );
// }

// // ── Background orbs ──────────────────────────────────────
// function Orbs() {
//   return (
//     <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
//       <div style={{ position:'absolute', top:'-160px', left:'50%', transform:'translateX(-50%)', width:'700px', height:'440px', background:'radial-gradient(ellipse,rgba(139,92,246,.16),transparent 68%)', filter:'blur(24px)' }} />
//       <div style={{ position:'absolute', bottom:'-80px', left:'-100px', width:'400px', height:'320px', background:'radial-gradient(ellipse,rgba(56,189,248,.08),transparent 65%)', filter:'blur(18px)' }} />
//     </div>
//   );
// }
// function DotGrid() {
//   return (
//     <div style={{
//       position:'absolute', inset:0, pointerEvents:'none',
//       backgroundImage:'radial-gradient(rgba(139,92,246,.13) 1px,transparent 1px)',
//       backgroundSize:'28px 28px',
//       maskImage:'radial-gradient(ellipse 90% 80% at 50% 10%,black,transparent 85%)',
//     }} />
//   );
// }

// // ── Logo ─────────────────────────────────────────────────
// function LogoMark() {
//   return (
//     <motion.div
//       initial={{ opacity:0, x:-16 }}
//       animate={{ opacity:1, x:0 }}
//       transition={{ duration:.5, ease:[.22,1,.36,1] }}
//       style={{ position:'absolute', top:'22px', left:'clamp(16px,4vw,32px)', display:'flex', alignItems:'center', gap:'9px', zIndex:10 }}
//     >
//       <div style={{
//         width:'34px', height:'34px', borderRadius:'9px',
//         background:'linear-gradient(135deg,rgba(139,92,246,.3),rgba(56,189,248,.2))',
//         border:'1px solid rgba(139,92,246,.35)', display:'flex', alignItems:'center',
//         justifyContent:'center', overflow:'hidden',
//       }}>
//         <img src="/favicon.png" alt="Logo"
//           style={{ width:'22px', height:'22px', objectFit:'contain' }}
//           onError={e => { e.target.style.display='none'; e.target.parentNode.textContent='⚡'; }}
//         />
//       </div>
//       <span className="syne" style={{ fontSize:'13px', fontWeight:700, background:'linear-gradient(135deg,#c4b5fd,#818cf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//         GrindOS
//       </span>
//     </motion.div>
//   );
// }

// // ── Section separator ────────────────────────────────────
// function Sep() {
//   return (
//     <div style={{ padding:'0 clamp(16px,4vw,44px)', margin:'2px 0' }}>
//       <div style={{ height:'1px', background:'linear-gradient(90deg,transparent,rgba(139,92,246,.14) 30%,rgba(56,189,248,.08) 70%,transparent)' }} />
//     </div>
//   );
// }

// // ── Section label ────────────────────────────────────────
// function SectionLabel({ children }) {
//   return (
//     <div style={{ display:'flex', alignItems:'center', gap:'13px', padding:`0 clamp(16px,4vw,44px)`, margin:'36px 0 24px' }}>
//       <div style={{ width:'3px', height:'15px', borderRadius:'2px', background:'linear-gradient(180deg,#8b5cf6,#38bdf8)', flexShrink:0 }} />
//       <span className="mono" style={{ fontSize:'10px', letterSpacing:'.15em', textTransform:'uppercase', fontWeight:500, color:'#6258a0' }}>
//         {children}
//       </span>
//       <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,rgba(139,92,246,.22),transparent)' }} />
//     </div>
//   );
// }

// // ── Stat pill ────────────────────────────────────────────
// function StatPill({ value, label, icon, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity:0, y:18, scale:.92 }}
//       animate={{ opacity:1, y:0, scale:1 }}
//       transition={{ duration:.5, delay, ease:[.22,1,.36,1] }}
//       whileHover={{ y:-4, scale:1.05, transition:{ duration:.2 } }}
//       style={{
//         display:'flex', flexDirection:'column', alignItems:'center',
//         padding:'13px 20px', borderRadius:'14px', cursor:'default',
//         background:'linear-gradient(145deg,rgba(255,255,255,.048),rgba(255,255,255,.012))',
//         border:'1px solid rgba(255,255,255,.08)', backdropFilter:'blur(14px)',
//         boxShadow:'0 4px 28px rgba(0,0,0,.38),inset 0 1px 0 rgba(255,255,255,.08)',
//         position:'relative', overflow:'hidden',
//       }}
//     >
//       <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)' }} />
//       <span style={{ fontSize:'17px', marginBottom:'4px' }}>{icon}</span>
//       <span className="mono" style={{ fontSize:'15px', fontWeight:500, background:'linear-gradient(135deg,#c4b5fd,#818cf8 55%,#38bdf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
//         {value}
//       </span>
//       <span className="mono" style={{ fontSize:'9px', letterSpacing:'.12em', textTransform:'uppercase', color:'#4a4465', marginTop:'3px' }}>
//         {label}
//       </span>
//     </motion.div>
//   );
// }

// // ── LinkedIn button ──────────────────────────────────────
// function LinkedInBtn({ href, label = 'Connect on LinkedIn', large = false }) {
//   return (
//     <a
//       href={href ?? '#'}
//       target="_blank"
//       rel="noopener noreferrer"
//       style={{
//         display:'inline-flex', alignItems:'center', gap: large ? '9px' : '6px',
//         padding: large ? '10px 20px' : '7px 14px',
//         borderRadius: large ? '10px' : '8px',
//         textDecoration:'none',
//         background:'rgba(10,102,194,.12)',
//         border:'1px solid rgba(10,102,194,.25)',
//         transition:'all .2s',
//         width: large ? 'auto' : '100%',
//         justifyContent:'center',
//       }}
//       onMouseEnter={e => { e.currentTarget.style.background='rgba(10,102,194,.2)'; e.currentTarget.style.borderColor='rgba(10,102,194,.42)'; e.currentTarget.style.transform='translateY(-1px)'; }}
//       onMouseLeave={e => { e.currentTarget.style.background='rgba(10,102,194,.12)'; e.currentTarget.style.borderColor='rgba(10,102,194,.25)'; e.currentTarget.style.transform='translateY(0)'; }}
//     >
//       <svg width={large ? 16 : 13} height={large ? 16 : 13} viewBox="0 0 24 24" fill="none" style={{ flexShrink:0 }}>
//         <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2"/>
//         <path d="M7 10v7M7 7v.5M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 12 16 13.5V17M11 10v7"
//           stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
//       </svg>
//       <span className="mono" style={{ fontSize: large ? '11px' : '10px', color:'#60a5fa', letterSpacing:'.04em' }}>
//         {label}
//       </span>
//     </a>
//   );
// }

// // ── Gender-based default SVG avatar ──────────────────────
// function DefaultAvatar({ gender = 'm', c1, c2, uid = '0' }) {
//   const id = `av-grad-${uid}`;
//   const grad = (
//     <defs>
//       <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
//         <stop offset="0%" stopColor={c1}/>
//         <stop offset="100%" stopColor={c2}/>
//       </linearGradient>
//     </defs>
//   );
//   if (gender === 'f') {
//     return (
//       <svg viewBox="0 0 56 56" fill="none" style={{ width:'100%', height:'100%' }}>
//         {grad}
//         <circle cx="28" cy="20" r="11" fill={`url(#${id})`}/>
//         <path d="M7 54c0-10 7-19 21-19s21 9 21 19" fill={`url(#${id})`} opacity=".65"/>
//         <path d="M19 31 Q28 37 37 31" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" fill="none" opacity=".4"/>
//       </svg>
//     );
//   }
//   return (
//     <svg viewBox="0 0 56 56" fill="none" style={{ width:'100%', height:'100%' }}>
//       {grad}
//       <circle cx="28" cy="20" r="11" fill={`url(#${id})`}/>
//       <path d="M6 54c0-10 8-18 22-18s22 8 22 18" fill={`url(#${id})`} opacity=".65"/>
//     </svg>
//   );
// }

// // ═══════════════════════════════════════════════════════
// // ADMIN SPOTLIGHT
// // ═══════════════════════════════════════════════════════

// function AdminSpotlight({ admin }) {
//   const px = 'clamp(16px,4vw,44px)';

//   const message =
//     admin?.message ??
//     "Consistency beats motivation. Show up, even on your worst days—that’s where real growth begins.";

//   return (
//     <motion.div
//       initial={{ opacity:0, y:24 }}
//       animate={{ opacity:1, y:0 }}
//       transition={{ duration:.6, ease:[.22,1,.36,1] }}
//       style={{
//         margin:`0 ${px}`,
//         display:'flex',
//         justifyContent:'center'
//       }}
//     >
//       <div
//         style={{
//           width:'100%',
//           maxWidth:'620px',
//           borderRadius:'20px',
//           overflow:'hidden',
//           position:'relative',
//           background:'linear-gradient(135deg,#0b0a16,#05050e)',
//           border:'1px solid rgba(139,92,246,.2)'
//         }}
//       >
//         {/* Top accent */}
//         <div style={{
//           height:'2px',
//           background:'linear-gradient(90deg,transparent,#8b5cf6 30%,#6366f1 60%,#38bdf8 85%,transparent)'
//         }} />

//         <div style={{
//           padding:'26px 28px',
//           display:'flex',
//           alignItems:'center',
//           gap:'22px',
//           flexWrap:'wrap'
//         }}>

//           {/* Avatar (STATIC) */}
//           <div style={{ position:'relative' }}>
//             <div style={{
//               width:'130px',
//               height:'130px',
//               borderRadius:'50%',
//               padding:'3px',
//               background:'linear-gradient(135deg,#8b5cf6,#6366f1,#38bdf8,#8b5cf6)',
//               boxShadow:'0 0 20px rgba(139,92,246,.25)' // subtle glow instead of rotation
//             }}>
//               <div style={{
//                 width:'100%',
//                 height:'100%',
//                 borderRadius:'50%',
//                 background:'#0c0b18',
//                 overflow:'hidden',
//                 display:'flex',
//                 alignItems:'center',
//                 justifyContent:'center'
//               }}>
//                 {admin?.image ? (
//                   <img
//                     src={admin.image}
//                     alt={admin.name}
//                     style={{ width:'100%', height:'100%', objectFit:'cover' }}
//                     onError={e => { e.target.style.display='none'; }}
//                   />
//                 ) : (
//                   <DefaultAvatar
//                     gender={admin?.gender ?? 'm'}
//                     c1="#8b5cf6"
//                     c2="#6366f1"
//                     uid="admin"
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Online dot */}
//             <div style={{
//               position:'absolute',
//               bottom:'6px',
//               right:'6px',
//               width:'18px',
//               height:'18px',
//               borderRadius:'50%',
//               background:'#22c55e',
//               border:'3px solid #05050e',
//               animation:'cr-live 2s ease-in-out infinite'
//             }} />
//           </div>

//           {/* Info */}
//           <div style={{ flex:1, minWidth:'200px' }}>

//             {/* Name */}
//             <div className="syne" style={{
//               fontSize:'clamp(20px,3vw,26px)',
//               fontWeight:800,
//               marginBottom:'8px',
//               background:'linear-gradient(135deg,#fff,#a78bfa)',
//               WebkitBackgroundClip:'text',
//               WebkitTextFillColor:'transparent'
//             }}>
//               {admin?.name ?? 'Community Admin'}
//             </div>

//             {/* Role */}
//             <div style={{
//               display:'inline-flex',
//               alignItems:'center',
//               gap:'6px',
//               padding:'4px 10px',
//               borderRadius:'8px',
//               marginBottom:'12px',
//               background:'rgba(139,92,246,.14)',
//               border:'1px solid rgba(139,92,246,.25)'
//             }}>
//               <div style={{
//                 width:'6px',
//                 height:'6px',
//                 borderRadius:'50%',
//                 background:'#8b5cf6'
//               }} />
//               <span className="mono" style={{
//                 fontSize:'10px',
//                 letterSpacing:'.08em',
//                 color:'#a78bfa'
//               }}>
//                 Community Lead
//               </span>
//             </div>

//             {/* Quote */}
//             <div style={{
//               marginBottom:'14px',
//               padding:'10px 14px',
//               borderRadius:'10px',
//               background:'rgba(139,92,246,.06)',
//               borderLeft:'3px solid #8b5cf6',
//               maxWidth:'420px'
//             }}>
//               <p style={{
//                 margin:0,
//                 fontSize:'13px',
//                 lineHeight:'1.6',
//                 color:'#9490b0',
//                 fontStyle:'italic'
//               }}>
//                 {message}
//               </p>
//             </div>

//             {/* Actions */}
//             <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
//               <LinkedInBtn href={admin?.linkedin} large />

//               <div style={{
//                 padding:'8px 14px',
//                 borderRadius:'8px',
//                 background:'rgba(34,197,94,.1)',
//                 fontSize:'11px',
//                 color:'#4ade80'
//               }}>
//                 Active
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }
// // ═══════════════════════════════════════════════════════
// // MEMBER CARD
// // ═══════════════════════════════════════════════════════
// function MemberCard({ member, index }) {
//   const [c1, c2] = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];

//   return (
//     <motion.div
//       initial={{ opacity:0, y:16, scale:.96 }}
//       animate={{ opacity:1, y:0, scale:1 }}
//       transition={{ duration:.4, delay:Math.min(index * .04, .7), ease:[.22,1,.36,1] }}
//       whileHover={{ y:-5, scale:1.02, transition:{ duration:.22 } }}
//       style={{
//         borderRadius:'16px', overflow:'hidden', position:'relative',
//         background:'linear-gradient(170deg,rgba(255,255,255,.038),rgba(255,255,255,.010))',
//         border:'1px solid rgba(255,255,255,.07)',
//         transition:'border-color .22s, box-shadow .22s',
//       }}
//       onHoverStart={e => {
//         e.currentTarget.style.borderColor = 'rgba(139,92,246,.28)';
//         e.currentTarget.style.boxShadow = '0 14px 40px rgba(0,0,0,.45),0 0 0 1px rgba(139,92,246,.12)';
//       }}
//       onHoverEnd={e => {
//         e.currentTarget.style.borderColor = 'rgba(255,255,255,.07)';
//         e.currentTarget.style.boxShadow = 'none';
//       }}
//     >
//       {/* Coloured top strip */}
//       <div style={{ height:'4px', background:`linear-gradient(90deg,${c1},${c2})` }} />

//       <div style={{ padding:'20px 16px 16px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center' }}>
//         {/* Gradient ring avatar */}
//         <div style={{ width:'64px', height:'64px', borderRadius:'50%', padding:'2px', background:`linear-gradient(135deg,${c1},${c2})`, marginBottom:'13px' }}>
//           <div style={{ width:'100%', height:'100%', borderRadius:'50%', background:`linear-gradient(135deg,${c1}1a,${c2}0d)`, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
//             {member.image
//               ? <img src={member.image} alt={member.name}
//                   style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }}
//                   onError={e => { e.target.style.display='none'; }}
//                 />
//               : <DefaultAvatar gender={member.gender ?? 'm'} c1={c1} c2={c2} uid={String(index)} />
//             }
//           </div>
//         </div>

//         {/* Name */}
//         <div className="syne" style={{ fontSize:'13.5px', fontWeight:700, color:'#e8e4ff', letterSpacing:'-.01em', marginBottom:'3px' }}>
//           {member.name}
//         </div>

//         {/* College — truncated */}
//         <div
//           style={{ fontSize:'11px', color:'#6258a0', fontWeight:400, maxWidth:'148px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', marginBottom:'2px' }}
//           title={member.college}
//         >
//           {member.college}
//         </div>

//         {/* Graduate year */}
//         <div className="mono" style={{ fontSize:'10px', color:'#4a4465', marginBottom:'13px', letterSpacing:'.04em' }}>
//           Graduate {member.yearOfPassing ?? member.year}
//         </div>

//         {/* Divider */}
//         <div style={{ width:'100%', height:'1px', background:'rgba(255,255,255,.05)', marginBottom:'11px' }} />

//         {/* LinkedIn */}
//         <LinkedInBtn href={member.linkedin} label="LinkedIn" />
//       </div>
//     </motion.div>
//   );
// }

// // ═══════════════════════════════════════════════════════
// // MAIN EXPORT
// // ═══════════════════════════════════════════════════════
// export default function CommunitySection() {
//   const { members, admin } = communityData;
//   const px = 'clamp(16px,4vw,44px)';

//   return (
//     <>
//       <FontLoader />
//       <div className="cr" style={{ background:'#05050e', minHeight:'100%', overflowX:'hidden' }}>

//         {/* ── HERO ── */}
//         <div style={{ position:'relative', padding:`72px ${px} 56px`, textAlign:'center', overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,.05)' }}>
//           <Orbs />
//           <DotGrid />
//           <LogoMark />

//           <div style={{ position:'relative', zIndex:2 }}>
//             {/* Kicker */}
//             <motion.div
//               initial={{ opacity:0, y:-12, scale:.88 }}
//               animate={{ opacity:1, y:0, scale:1 }}
//               transition={{ duration:.5, ease:[.22,1,.36,1] }}
//               style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 15px', borderRadius:'20px', marginBottom:'22px', background:'linear-gradient(135deg,rgba(139,92,246,.13),rgba(99,102,241,.08))', border:'1px solid rgba(139,92,246,.3)' }}
//             >
//               <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#8b5cf6', boxShadow:'0 0 10px rgba(139,92,246,1)', animation:'cr-pulse 2.5s ease-in-out infinite' }} />
//               <span className="mono" style={{ fontSize:'10px', letterSpacing:'.13em', textTransform:'uppercase', fontWeight:500, color:'rgba(196,181,253,.9)' }}>
//                 The People Behind The Grind
//               </span>
//             </motion.div>

//             <motion.h2 className="syne"
//               initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
//               transition={{ duration:.6, delay:.1, ease:[.22,1,.36,1] }}
//               style={{ fontSize:'clamp(32px,5vw,54px)', fontWeight:800, letterSpacing:'-.045em', lineHeight:1.0, marginBottom:'10px', background:'linear-gradient(135deg,#f5f0ff 0%,#c4b5fd 38%,#818cf8 68%,#38bdf8 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}
//             >
//               The Community
//             </motion.h2>

//             <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:.6, delay:.22 }}
//               style={{ width:'52px', height:'3px', background:'linear-gradient(90deg,#8b5cf6,#38bdf8)', borderRadius:'3px', margin:'0 auto 20px' }}
//             />

//             <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5, delay:.18 }}
//               style={{ fontSize:'14px', lineHeight:'1.9', maxWidth:'420px', margin:'0 auto 36px', color:'#7a76a0', fontWeight:300 }}
//             >
//               Not a random Telegram group. A focused execution system where{' '}
//               <strong style={{ color:'#c4b5fd', fontWeight:600 }}>every member</strong>{' '}
//               shows up daily and grinds toward one deadline.
//             </motion.p>

//             <div style={{ display:'inline-flex', gap:'10px', flexWrap:'wrap', justifyContent:'center' }}>
//               <StatPill value={members.length} label="Members"      icon="👥" delay={.26} />
//               <StatPill value="4"              label="Months"        icon="📅" delay={.32} />
//               <StatPill value="100%"           label="Commitment"    icon="🔥" delay={.38} />
//               <StatPill value="Aug 15"         label="Deadline 🇮🇳"  icon="🎯" delay={.44} />
//             </div>
//           </div>
//         </div>

//         <Sep />

//         {/* ── ADMIN ── */}
//         <SectionLabel>Community Admin</SectionLabel>
//         <AdminSpotlight admin={admin} />

//         <Sep />

//         {/* ── MEMBERS HEADER ── */}
//         <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', padding:`0 ${px}`, margin:'36px 0 22px' }}>
//           <div style={{ display:'flex', alignItems:'center', gap:'13px', flexWrap:'wrap' }}>
//             <div style={{ width:'3px', height:'15px', borderRadius:'2px', background:'linear-gradient(180deg,#8b5cf6,#38bdf8)' }} />
//             <span className="mono" style={{ fontSize:'10px', letterSpacing:'.15em', textTransform:'uppercase', fontWeight:500, color:'#6258a0' }}>
//               All Members
//             </span>
//             <div style={{ width:'50px', height:'1px', background:'linear-gradient(90deg,rgba(139,92,246,.22),transparent)' }} />
//             <span className="mono" style={{ padding:'3px 11px', borderRadius:'20px', fontSize:'9px', background:'rgba(139,92,246,.1)', border:'1px solid rgba(139,92,246,.22)', color:'#a78bfa', letterSpacing:'.05em' }}>
//               {members.length} total
//             </span>
//           </div>
//           <div style={{ display:'flex', alignItems:'center', gap:'7px', padding:'6px 13px', borderRadius:'20px', background:'rgba(34,197,94,.07)', border:'1px solid rgba(34,197,94,.2)' }}>
//             <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#22c55e', animation:'cr-live 2s ease-in-out infinite' }} />
//             <span className="mono" style={{ fontSize:'10px', color:'#4ade80', fontWeight:500 }}>
//               {members.length} active
//             </span>
//           </div>
//         </div>

//         {/* ── MEMBERS GRID ── */}
//         <div style={{ padding:`0 ${px}` }}>
//           <div className="cr-grid">
//             {members.map((m, i) => (
//               <MemberCard key={i} member={m} index={i} />
//             ))}
//           </div>
//         </div>

//         {/* ── JOIN CTA ── */}
//         <JoinSection />

//         <div style={{ height:'60px', background:'linear-gradient(to top,#05050e,transparent)', pointerEvents:'none' }} />
//       </div>
//     </>
//   );
// }




import { motion, AnimatePresence } from 'framer-motion';
import { communityData } from '../../data/community';
import JoinSection from './JoinSection';
import { useState } from 'react';

const AVATAR_GRADIENTS = [
  ['#8b5cf6','#6366f1'], ['#3b82f6','#06b6d4'], ['#f59e0b','#ef4444'],
  ['#10b981','#3b82f6'], ['#ec4899','#8b5cf6'], ['#f97316','#f59e0b'],
  ['#06b6d4','#10b981'], ['#6366f1','#ec4899'],
];

/* ─────────────────────────────────────────────────────────────
   STYLES
───────────────────────────────────────────────────────────── */
function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap');

      .cr *{box-sizing:border-box;}
      .cr{font-family:'Outfit',sans-serif;}
      .cr .syne{font-family:'Syne',sans-serif;}
      .cr .mono{font-family:'DM Mono',monospace;}

      @keyframes cr-spin   { to{transform:rotate(360deg)} }
      @keyframes cr-pulse  { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.5)} }
      @keyframes cr-live   { 0%,100%{box-shadow:0 0 6px rgba(34,197,94,.7)} 50%{box-shadow:0 0 14px rgba(34,197,94,1)} }
      @keyframes cr-shimmer{ 0%{background-position:-200% center} 100%{background-position:200% center} }
      @keyframes cr-ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      @keyframes cr-glow   { 0%,100%{opacity:.4} 50%{opacity:.85} }
      @keyframes cr-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      @keyframes cr-border { 0%{background-position:-200% center} 100%{background-position:200% center} }

      .cr-grid{
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(190px,1fr));
        gap:12px;
      }
      @media(max-width:640px){
        .cr-grid{grid-template-columns:repeat(auto-fill,minmax(155px,1fr));gap:10px;}
      }
      @media(max-width:400px){
        .cr-grid{grid-template-columns:1fr 1fr;}
      }

      /* ── Legend Ticker ── */
      .cr-ticker-wrap{
        overflow:hidden;
        mask-image:linear-gradient(90deg,transparent 0%,black 5%,black 95%,transparent 100%);
        -webkit-mask-image:linear-gradient(90deg,transparent 0%,black 5%,black 95%,transparent 100%);
        user-select:none; cursor:default;
      }
      .cr-ticker-track{
        display:flex; width:max-content;
        animation:cr-ticker 32s linear infinite;
      }
      .cr-ticker-track:hover{ animation-play-state:paused; }
      .cr-ticker-item{
        display:inline-flex; align-items:center; gap:12px;
        padding:0 28px; white-space:nowrap;
      }
      .cr-ticker-text{
        font-family:'DM Mono',monospace;
        font-size:11px; letter-spacing:.14em; text-transform:uppercase;
      }
      .cr-ticker-dot{
        width:4px;height:4px;border-radius:50%;
        background:rgba(139,92,246,.5);flex-shrink:0;
      }

      /* ── Power tab ── */
      .cr-tab{
        padding:8px 18px; border-radius:8px; cursor:pointer;
        font-family:'DM Mono',monospace; font-size:9.5px;
        letter-spacing:.1em; text-transform:uppercase;
        border:1px solid rgba(255,255,255,.07);
        background:rgba(255,255,255,.02);
        color:rgba(255,255,255,.3);
        transition:all .22s; white-space:nowrap;
      }
      .cr-tab:hover{ color:rgba(255,255,255,.6); border-color:rgba(255,255,255,.12); }
      .cr-tab-active{
        background:rgba(139,92,246,.12) !important;
        border-color:rgba(139,92,246,.3) !important;
        color:#c4b5fd !important;
      }

      /* ── Manifesto card ── */
      .cr-manifesto-card{
        border-radius:16px;
        border:1px solid rgba(255,255,255,.065);
        background:rgba(255,255,255,.018);
        padding:clamp(18px,2.5vw,26px);
        position:relative; overflow:hidden;
        transition:border-color .25s, background .25s, transform .25s;
        cursor:default;
      }
      .cr-manifesto-card:hover{
        border-color:rgba(139,92,246,.22);
        background:rgba(139,92,246,.04);
        transform:translateY(-2px);
      }
      .cr-manifesto-card::before{
        content:'';
        position:absolute; top:0; left:10%; right:10%; height:1px;
        background:linear-gradient(90deg,transparent,rgba(139,92,246,.35),transparent);
        background-size:200% auto;
        animation:cr-border 4s linear infinite;
      }

      /* ── Member card ── */
      .cr-member-card{
        border-radius:16px; overflow:hidden; position:relative;
        background:linear-gradient(170deg,rgba(255,255,255,.038),rgba(255,255,255,.010));
        border:1px solid rgba(255,255,255,.07);
        transition:border-color .22s, box-shadow .22s, transform .22s;
      }
      .cr-member-card:hover{
        border-color:rgba(139,92,246,.28);
        box-shadow:0 14px 40px rgba(0,0,0,.45),0 0 0 1px rgba(139,92,246,.12);
        transform:translateY(-4px) scale(1.01);
      }

      @media(max-width:640px){
        .cr-admin-inner{ flex-direction:column; align-items:center; text-align:center; }
        .cr-admin-actions{ justify-content:center; }
      }
    `}</style>
  );
}

/* ─────────────────────────────────────────────────────────────
   PRIMITIVES
───────────────────────────────────────────────────────────── */
function Orbs() {
  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
      <div style={{ position:'absolute', top:'-160px', left:'50%', transform:'translateX(-50%)', width:'700px', height:'440px', background:'radial-gradient(ellipse,rgba(139,92,246,.16),transparent 68%)', filter:'blur(24px)' }} />
      <div style={{ position:'absolute', bottom:'-80px', left:'-100px', width:'400px', height:'320px', background:'radial-gradient(ellipse,rgba(56,189,248,.08),transparent 65%)', filter:'blur(18px)' }} />
    </div>
  );
}
function DotGrid() {
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:'radial-gradient(rgba(139,92,246,.13) 1px,transparent 1px)', backgroundSize:'28px 28px', maskImage:'radial-gradient(ellipse 90% 80% at 50% 10%,black,transparent 85%)' }} />
  );
}
function Sep() {
  return (
    <div style={{ padding:'0 clamp(16px,4vw,44px)', margin:'2px 0' }}>
      <div style={{ height:'1px', background:'linear-gradient(90deg,transparent,rgba(139,92,246,.14) 30%,rgba(56,189,248,.08) 70%,transparent)' }} />
    </div>
  );
}
function SectionLabel({ children }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:'13px', padding:`0 clamp(16px,4vw,44px)`, margin:'36px 0 24px' }}>
      <div style={{ width:'3px', height:'15px', borderRadius:'2px', background:'linear-gradient(180deg,#8b5cf6,#38bdf8)', flexShrink:0 }} />
      <span className="mono" style={{ fontSize:'10px', letterSpacing:'.15em', textTransform:'uppercase', fontWeight:500, color:'#6258a0' }}>{children}</span>
      <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,rgba(139,92,246,.22),transparent)' }} />
    </div>
  );
}
function StatPill({ value, label, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity:0, y:18, scale:.92 }}
      animate={{ opacity:1, y:0, scale:1 }}
      transition={{ duration:.5, delay, ease:[.22,1,.36,1] }}
      whileHover={{ y:-4, scale:1.05, transition:{ duration:.2 } }}
      style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'13px 20px', borderRadius:'14px', cursor:'default', background:'linear-gradient(145deg,rgba(255,255,255,.048),rgba(255,255,255,.012))', border:'1px solid rgba(255,255,255,.08)', backdropFilter:'blur(14px)', boxShadow:'0 4px 28px rgba(0,0,0,.38),inset 0 1px 0 rgba(255,255,255,.08)', position:'relative', overflow:'hidden' }}
    >
      <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:'linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)' }} />
      <span style={{ fontSize:'17px', marginBottom:'4px' }}>{icon}</span>
      <span className="mono" style={{ fontSize:'15px', fontWeight:500, background:'linear-gradient(135deg,#c4b5fd,#818cf8 55%,#38bdf8)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>{value}</span>
      <span className="mono" style={{ fontSize:'9px', letterSpacing:'.12em', textTransform:'uppercase', color:'#4a4465', marginTop:'3px' }}>{label}</span>
    </motion.div>
  );
}
function LinkedInBtn({ href, label = 'Connect on LinkedIn', large = false }) {
  return (
    <a href={href ?? '#'} target="_blank" rel="noopener noreferrer"
      style={{ display:'inline-flex', alignItems:'center', gap: large ? '9px' : '6px', padding: large ? '10px 20px' : '7px 14px', borderRadius: large ? '10px' : '8px', textDecoration:'none', background:'rgba(10,102,194,.12)', border:'1px solid rgba(10,102,194,.25)', transition:'all .2s', width: large ? 'auto' : '100%', justifyContent:'center' }}
      onMouseEnter={e => { e.currentTarget.style.background='rgba(10,102,194,.2)'; e.currentTarget.style.borderColor='rgba(10,102,194,.42)'; e.currentTarget.style.transform='translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background='rgba(10,102,194,.12)'; e.currentTarget.style.borderColor='rgba(10,102,194,.25)'; e.currentTarget.style.transform='translateY(0)'; }}
    >
      <svg width={large ? 16 : 13} height={large ? 16 : 13} viewBox="0 0 24 24" fill="none" style={{ flexShrink:0 }}>
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2"/>
        <path d="M7 10v7M7 7v.5M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 12 16 13.5V17M11 10v7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      <span className="mono" style={{ fontSize: large ? '11px' : '10px', color:'#60a5fa', letterSpacing:'.04em' }}>{label}</span>
    </a>
  );
}
function DefaultAvatar({ gender = 'm', c1, c2, uid = '0' }) {
  const id = `av-grad-${uid}`;
  const grad = (<defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={c1}/><stop offset="100%" stopColor={c2}/></linearGradient></defs>);
  if (gender === 'f') {
    return (<svg viewBox="0 0 56 56" fill="none" style={{ width:'100%', height:'100%' }}>{grad}<circle cx="28" cy="20" r="11" fill={`url(#${id})`}/><path d="M7 54c0-10 7-19 21-19s21 9 21 19" fill={`url(#${id})`} opacity=".65"/><path d="M19 31 Q28 37 37 31" stroke={`url(#${id})`} strokeWidth="2" strokeLinecap="round" fill="none" opacity=".4"/></svg>);
  }
  return (<svg viewBox="0 0 56 56" fill="none" style={{ width:'100%', height:'100%' }}>{grad}<circle cx="28" cy="20" r="11" fill={`url(#${id})`}/><path d="M6 54c0-10 8-18 22-18s22 8 22 18" fill={`url(#${id})`} opacity=".65"/></svg>);
}

/* ─────────────────────────────────────────────────────────────
   LEGEND TICKER STRIP
───────────────────────────────────────────────────────────── */
const TICKER_ITEMS = [
  { text: 'Not the most talented room',  accent: false },
  { text: 'The most committed one',      accent: true  },
  { text: 'Bad day. Show up.',           accent: false },
  { text: 'Good day. Show up.',          accent: true  },
  { text: 'No motivation required',      accent: false },
  { text: 'Just discipline',             accent: true  },
  { text: 'Every single day',            accent: false },
  { text: 'Aug 15 is the only deadline', accent: true  },
  { text: 'Legends are made in silence', accent: false },
  { text: 'Execution is the answer',     accent: true  },
];

function LegendTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div style={{ padding:'14px 0', borderTop:'1px solid rgba(255,255,255,.04)', borderBottom:'1px solid rgba(255,255,255,.04)', background:'rgba(255,255,255,.008)' }}>
      <div className="cr-ticker-wrap">
        <div className="cr-ticker-track">
          {doubled.map((item, i) => (
            <span key={i} className="cr-ticker-item">
              <span className="cr-ticker-dot" />
              <span className="cr-ticker-text" style={
                item.accent
                  ? { background:'linear-gradient(90deg,#c4b5fd,#818cf8,#38bdf8)', backgroundSize:'200% auto', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', animation:'cr-shimmer 4s linear infinite' }
                  : { color:'rgba(255,255,255,.18)' }
              }>
                {item.text}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   POWER MANIFESTO TABS
   3 tabs: Identity · Standards · Outcome
───────────────────────────────────────────────────────────── */
const MANIFESTO_TABS = [
  {
    id: 'identity',
    label: 'Who We Are',
    icon: '⚡',
    headline: 'Not the most talented room. The most committed one.',
    body: 'This isn\'t a collection of toppers or rankers. These are people who made a decision — to show up every single day regardless of mood, energy, or circumstance. That discipline is rarer than talent. And it compounds.',
    cards: [
      { stat: '0',       label: 'Motivation required',  note:'We run on systems, not feelings', color:'#c4b5fd', bg:'rgba(139,92,246,.08)', border:'rgba(139,92,246,.2)' },
      { stat: '100%',    label: 'Commitment expected',  note:'Anything less is just a hobby',    color:'#38bdf8', bg:'rgba(56,189,248,.07)', border:'rgba(56,189,248,.18)' },
      { stat: '1',       label: 'Deadline. Aug 15.',     note:'No extensions. No exceptions.',    color:'#fbbf24', bg:'rgba(251,191,36,.07)', border:'rgba(251,191,36,.18)' },
    ],
  },
  {
    id: 'standards',
    label: 'The Standard',
    icon: '🔗',
    headline: 'Bad day. Good day. Doesn\'t matter. We execute.',
    body: 'The people in this room have signed an unwritten contract — bad days don\'t get days off. That consistency is what builds the gap between you and everyone who\'s waiting for the "right time" to start grinding.',
    cards: [
      { stat: '∞',       label: 'Chain days attempted', note:'Even one task counts',              color:'#fb923c', bg:'rgba(251,146,60,.08)', border:'rgba(251,146,60,.2)' },
      { stat: 'Daily',   label: 'Execution rhythm',      note:'Not weekly. Not when you feel like it.', color:'#c4b5fd', bg:'rgba(139,92,246,.08)', border:'rgba(139,92,246,.2)' },
      { stat: 'Silent',  label: 'Mode of operation',     note:'Legends don\'t announce — they deliver', color:'#4ade80', bg:'rgba(34,197,94,.07)', border:'rgba(34,197,94,.18)' },
    ],
  },
  {
    id: 'outcome',
    label: 'The Outcome',
    icon: '🏹',
    headline: 'Everyone here is going to break something — their ceiling.',
    body: 'Not everyone will land FAANG. But everyone who stays consistent will land something real — a product role, a strong company, a future they chose. This community has no losing outcome for people who actually show up.',
    cards: [
      { stat: 'Tier I',  label: 'For the relentless',   note:'FAANG & dream companies',          color:'#fbbf24', bg:'rgba(245,158,11,.08)', border:'rgba(245,158,11,.2)' },
      { stat: 'Tier II', label: 'For the consistent',   note:'Product-based, strong packages',   color:'#c4b5fd', bg:'rgba(139,92,246,.08)', border:'rgba(139,92,246,.2)' },
      { stat: 'Tier III',label: 'The guaranteed floor',  note:'Real offer. No losing outcome.',   color:'#4ade80', bg:'rgba(34,197,94,.07)', border:'rgba(34,197,94,.18)' },
    ],
  },
];

function PowerManifesto() {
  const [active, setActive] = useState(0);
  const tab = MANIFESTO_TABS[active];
  const px = 'clamp(16px,4vw,44px)';

  return (
    <div style={{ padding:`0 ${px}`, marginBottom:'0' }}>
      {/* Tab row */}
      <div style={{ display:'flex', gap:'6px', marginBottom:'16px', flexWrap:'wrap' }}>
        {MANIFESTO_TABS.map((t, i) => (
          <button
            key={t.id}
            className={`cr-tab${active === i ? ' cr-tab-active' : ''}`}
            onClick={() => setActive(i)}
          >
            <span style={{ marginRight:'5px' }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab.id}
          initial={{ opacity:0, y:10 }}
          animate={{ opacity:1, y:0 }}
          exit={{ opacity:0, y:-8 }}
          transition={{ duration:.3, ease:'easeOut' }}
        >
          {/* Main manifesto card */}
          <div className="cr-manifesto-card" style={{ marginBottom:'10px' }}>
            {/* ghost icon */}
            <div style={{ position:'absolute', right:'20px', top:'50%', transform:'translateY(-50%)', fontSize:'80px', opacity:.035, lineHeight:1, pointerEvents:'none', userSelect:'none' }}>
              {tab.icon}
            </div>

            <div style={{ position:'relative', zIndex:1 }}>
              <h3 className="syne" style={{
                fontSize:'clamp(18px,2.4vw,26px)',
                fontWeight:800, letterSpacing:'-.035em', lineHeight:1.12,
                marginBottom:'12px',
                background:'linear-gradient(108deg,#f5f0ff 0%,#c4b5fd 30%,#818cf8 60%,#38bdf8 100%)',
                backgroundSize:'200% auto',
                WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text',
                animation:'cr-shimmer 5s linear infinite',
              }}>
                {tab.headline}
              </h3>
              <p style={{ fontFamily:"'Outfit',sans-serif", fontWeight:300, fontSize:'clamp(12.5px,1.1vw,14px)', lineHeight:1.88, color:'rgba(255,255,255,.36)', maxWidth:'560px', margin:0 }}>
                {tab.body}
              </p>
            </div>
          </div>

          {/* Stat cards row */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'8px' }}>
            {tab.cards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity:0, y:10, scale:.97 }}
                animate={{ opacity:1, y:0, scale:1 }}
                transition={{ delay: i * .07, duration:.3 }}
                style={{ borderRadius:'12px', padding:'16px', border:`1px solid ${c.border}`, background:c.bg, cursor:'default' }}
              >
                <div className="mono" style={{ fontSize:'clamp(16px,2vw,22px)', fontWeight:500, color:c.color, lineHeight:1, marginBottom:'5px' }}>
                  {c.stat}
                </div>
                <div className="mono" style={{ fontSize:'9px', letterSpacing:'.1em', textTransform:'uppercase', color:c.color, opacity:.7, marginBottom:'5px' }}>
                  {c.label}
                </div>
                <div style={{ fontFamily:"'Outfit',sans-serif", fontSize:'11px', color:'rgba(255,255,255,.28)', fontWeight:300, lineHeight:1.5 }}>
                  {c.note}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   ADMIN SPOTLIGHT
───────────────────────────────────────────────────────────── */
function AdminSpotlight({ admin }) {
  const px = 'clamp(16px,4vw,44px)';
  const message = admin?.message ?? "Consistency beats motivation. Show up, even on your worst days — that's where real growth begins.";
  return (
    <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:.6, ease:[.22,1,.36,1] }}
      style={{ margin:`0 ${px}`, display:'flex', justifyContent:'center' }}
    >
      <div style={{ width:'100%', maxWidth:'620px', borderRadius:'20px', overflow:'hidden', position:'relative', background:'linear-gradient(135deg,#0b0a16,#05050e)', border:'1px solid rgba(139,92,246,.2)' }}>
        <div style={{ height:'2px', background:'linear-gradient(90deg,transparent,#8b5cf6 30%,#6366f1 60%,#38bdf8 85%,transparent)' }} />
        <div className="cr-admin-inner" style={{ padding:'26px 28px', display:'flex', alignItems:'center', gap:'22px' }}>
          {/* Avatar */}
          <div style={{ position:'relative', flexShrink:0 }}>
            <div style={{ width:'120px', height:'120px', borderRadius:'50%', padding:'3px', background:'linear-gradient(135deg,#8b5cf6,#6366f1,#38bdf8,#8b5cf6)', boxShadow:'0 0 20px rgba(139,92,246,.25)' }}>
              <div style={{ width:'100%', height:'100%', borderRadius:'50%', background:'#0c0b18', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
                {admin?.image
                  ? <img src={admin.image} alt={admin.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e => { e.target.style.display='none'; }} />
                  : <DefaultAvatar gender={admin?.gender ?? 'm'} c1="#8b5cf6" c2="#6366f1" uid="admin" />
                }
              </div>
            </div>
            <div style={{ position:'absolute', bottom:'5px', right:'5px', width:'18px', height:'18px', borderRadius:'50%', background:'#22c55e', border:'3px solid #05050e', animation:'cr-live 2s ease-in-out infinite' }} />
          </div>
          {/* Info */}
          <div style={{ flex:1, minWidth:'200px' }}>
            <div className="syne" style={{ fontSize:'clamp(18px,2.5vw,24px)', fontWeight:800, marginBottom:'8px', background:'linear-gradient(135deg,#fff,#a78bfa)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              {admin?.name ?? 'Community Admin'}
            </div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:'6px', padding:'4px 10px', borderRadius:'8px', marginBottom:'12px', background:'rgba(139,92,246,.14)', border:'1px solid rgba(139,92,246,.25)' }}>
              <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#8b5cf6' }} />
              <span className="mono" style={{ fontSize:'10px', letterSpacing:'.08em', color:'#a78bfa' }}>Community Lead</span>
            </div>
            <div style={{ marginBottom:'14px', padding:'10px 14px', borderRadius:'10px', background:'rgba(139,92,246,.06)', borderLeft:'3px solid #8b5cf6', maxWidth:'420px' }}>
              <p style={{ margin:0, fontSize:'13px', lineHeight:'1.6', color:'#9490b0', fontStyle:'italic' }}>{message}</p>
            </div>
            <div className="cr-admin-actions" style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
              <LinkedInBtn href={admin?.linkedin} large />
              <div style={{ padding:'8px 14px', borderRadius:'8px', background:'rgba(34,197,94,.1)', fontSize:'11px', color:'#4ade80', fontFamily:"'DM Mono',monospace" }}>Active</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MEMBER CARD
───────────────────────────────────────────────────────────── */
function MemberCard({ member, index }) {
  const [c1, c2] = AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length];
  return (
    <motion.div
      initial={{ opacity:0, y:16, scale:.96 }}
      animate={{ opacity:1, y:0, scale:1 }}
      transition={{ duration:.4, delay:Math.min(index * .04, .7), ease:[.22,1,.36,1] }}
      className="cr-member-card"
    >
      <div style={{ height:'3px', background:`linear-gradient(90deg,${c1},${c2})` }} />
      <div style={{ padding:'20px 16px 16px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center' }}>
        <div style={{ width:'64px', height:'64px', borderRadius:'50%', padding:'2px', background:`linear-gradient(135deg,${c1},${c2})`, marginBottom:'13px' }}>
          <div style={{ width:'100%', height:'100%', borderRadius:'50%', background:`linear-gradient(135deg,${c1}1a,${c2}0d)`, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
            {member.image
              ? <img src={member.image} alt={member.name} style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'50%' }} onError={e => { e.target.style.display='none'; }} />
              : <DefaultAvatar gender={member.gender ?? 'm'} c1={c1} c2={c2} uid={String(index)} />
            }
          </div>
        </div>
        <div className="syne" style={{ fontSize:'13.5px', fontWeight:700, color:'#e8e4ff', letterSpacing:'-.01em', marginBottom:'3px' }}>{member.name}</div>
        <div style={{ fontSize:'11px', color:'#6258a0', fontWeight:400, maxWidth:'148px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', marginBottom:'2px' }} title={member.college}>{member.college}</div>
        <div className="mono" style={{ fontSize:'10px', color:'#4a4465', marginBottom:'13px', letterSpacing:'.04em' }}>Graduate {member.yearOfPassing ?? member.year}</div>
        <div style={{ width:'100%', height:'1px', background:'rgba(255,255,255,.05)', marginBottom:'11px' }} />
        <LinkedInBtn href={member.linkedin} label="LinkedIn" />
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────────────────────── */
export default function CommunitySection() {
  const { members, admin } = communityData;
  const px = 'clamp(16px,4vw,44px)';

  return (
    <>
      <Styles />
      <div className="cr" style={{ background:'#05050e', minHeight:'100%', overflowX:'hidden' }}>

        {/* ── HERO ── */}
        <div style={{ position:'relative', padding:`72px ${px} 52px`, textAlign:'center', overflow:'hidden', borderBottom:'1px solid rgba(255,255,255,.05)' }}>
          <Orbs />
          <DotGrid />

          <div style={{ position:'relative', zIndex:2 }}>
            <motion.div
              initial={{ opacity:0, y:-12, scale:.88 }}
              animate={{ opacity:1, y:0, scale:1 }}
              transition={{ duration:.5, ease:[.22,1,.36,1] }}
              style={{ display:'inline-flex', alignItems:'center', gap:'8px', padding:'6px 15px', borderRadius:'20px', marginBottom:'22px', background:'linear-gradient(135deg,rgba(139,92,246,.13),rgba(99,102,241,.08))', border:'1px solid rgba(139,92,246,.3)' }}
            >
              <div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#8b5cf6', boxShadow:'0 0 10px rgba(139,92,246,1)', animation:'cr-pulse 2.5s ease-in-out infinite' }} />
              <span className="mono" style={{ fontSize:'10px', letterSpacing:'.13em', textTransform:'uppercase', fontWeight:500, color:'rgba(196,181,253,.9)' }}>
                The People Behind The Grind
              </span>
            </motion.div>

            <motion.h2 className="syne"
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ duration:.6, delay:.1, ease:[.22,1,.36,1] }}
              style={{ fontSize:'clamp(32px,5vw,54px)', fontWeight:800, letterSpacing:'-.045em', lineHeight:1.0, marginBottom:'10px', background:'linear-gradient(135deg,#f5f0ff 0%,#c4b5fd 38%,#818cf8 68%,#38bdf8 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}
            >
              The Community
            </motion.h2>

            <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:.6, delay:.22 }}
              style={{ width:'52px', height:'3px', background:'linear-gradient(90deg,#8b5cf6,#38bdf8)', borderRadius:'3px', margin:'0 auto 20px' }}
            />

            <motion.p initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:.5, delay:.18 }}
              style={{ fontSize:'clamp(13px,1.1vw,15px)', lineHeight:'1.9', maxWidth:'460px', margin:'0 auto 32px', color:'rgba(255,255,255,.34)', fontWeight:300, fontFamily:"'Outfit',sans-serif" }}
            >
              Not the most talented room.{' '}
              <strong style={{ color:'#c4b5fd', fontWeight:600 }}>The most committed one.</strong>
              {' '}Every person here made a choice — to execute daily until Aug 15, no matter what.
            </motion.p>

            <div style={{ display:'inline-flex', gap:'10px', flexWrap:'wrap', justifyContent:'center' }}>
              <StatPill value={members.length} label="Members"    icon="👥" delay={.26} />
              <StatPill value="4"              label="Months"      icon="📅" delay={.32} />
              <StatPill value="100%"           label="Commitment"  icon="🔥" delay={.38} />
              <StatPill value="Aug 15"         label="Deadline 🇮🇳" icon="🎯" delay={.44} />
            </div>
          </div>
        </div>

        {/* ── LEGEND TICKER ── */}
        <LegendTicker />

        {/* ── POWER MANIFESTO TABS ── */}
        <div style={{ marginTop:'36px', marginBottom:'36px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'13px', padding:`0 ${px}`, marginBottom:'20px' }}>
            <div style={{ width:'3px', height:'15px', borderRadius:'2px', background:'linear-gradient(180deg,#8b5cf6,#38bdf8)', flexShrink:0 }} />
            <span className="mono" style={{ fontSize:'10px', letterSpacing:'.15em', textTransform:'uppercase', fontWeight:500, color:'#6258a0' }}>The OfferUnlocked Identity</span>
            <div style={{ flex:1, height:'1px', background:'linear-gradient(90deg,rgba(139,92,246,.22),transparent)' }} />
          </div>
          <PowerManifesto />
        </div>

        <Sep />

        {/* ── ADMIN ── */}
        <SectionLabel>Community Admin</SectionLabel>
        <AdminSpotlight admin={admin} />

        <Sep />

        {/* ── MEMBERS HEADER ── */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'10px', padding:`0 ${px}`, margin:'36px 0 22px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'13px', flexWrap:'wrap' }}>
            <div style={{ width:'3px', height:'15px', borderRadius:'2px', background:'linear-gradient(180deg,#8b5cf6,#38bdf8)' }} />
            <span className="mono" style={{ fontSize:'10px', letterSpacing:'.15em', textTransform:'uppercase', fontWeight:500, color:'#6258a0' }}>All Members</span>
            <div style={{ width:'50px', height:'1px', background:'linear-gradient(90deg,rgba(139,92,246,.22),transparent)' }} />
            <span className="mono" style={{ padding:'3px 11px', borderRadius:'20px', fontSize:'9px', background:'rgba(139,92,246,.1)', border:'1px solid rgba(139,92,246,.22)', color:'#a78bfa', letterSpacing:'.05em' }}>
              {members.length} total
            </span>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:'7px', padding:'6px 13px', borderRadius:'20px', background:'rgba(34,197,94,.07)', border:'1px solid rgba(34,197,94,.2)' }}>
            <div style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#22c55e', animation:'cr-live 2s ease-in-out infinite' }} />
            <span className="mono" style={{ fontSize:'10px', color:'#4ade80', fontWeight:500 }}>{members.length} active</span>
          </div>
        </div>

        {/* ── MEMBERS GRID ── */}
        <div style={{ padding:`0 ${px}` }}>
          <div className="cr-grid">
            {members.map((m, i) => (
              <MemberCard key={i} member={m} index={i} />
            ))}
          </div>
        </div>

        {/* ── JOIN CTA ── */}
        <JoinSection />

        <div style={{ height:'60px', background:'linear-gradient(to top,#05050e,transparent)', pointerEvents:'none' }} />
      </div>
    </>
  );
}