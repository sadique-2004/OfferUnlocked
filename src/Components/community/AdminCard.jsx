import { motion } from 'framer-motion';
import { communityData } from '../../data/community';

function normaliseGender(g) {
  if (!g) return 'm';
  return g.toLowerCase().startsWith('f') ? 'f' : 'm';
}

function DefaultAvatar({ gender = 'm' }) {
  const g = normaliseGender(gender);
  const grad = (
    <defs>
      <linearGradient id="admin-av-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8b5cf6"/>
        <stop offset="100%" stopColor="#6366f1"/>
      </linearGradient>
    </defs>
  );

  return (
    <svg viewBox="0 0 56 56" fill="none" style={{ width:'100%', height:'100%' }}>
      {grad}
      <circle cx="28" cy="20" r="11" fill="url(#admin-av-grad)"/>
      <path d="M6 54c0-10 8-18 22-18s22 8 22 18" fill="url(#admin-av-grad)" opacity=".65"/>
    </svg>
  );
}

function LinkedInIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#0a66c2"/>
      <path d="M7 10v7M7 7v.5M11 17v-3.5c0-1.5 1-2.5 2.5-2.5S16 12 16 13.5V17M11 10v7"
        stroke="#fff" strokeWidth="1.8" strokeLinecap="round"
      />
    </svg>
  );
}

export default function AdminCard() {
  const { admin } = communityData;

  const message =
    admin.message ??
    admin.bio ??
    "Consistency beats motivation. Show up, even on your worst days—that’s where real growth begins.";

  return (
    <>
      <style>{`
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes pulse{0%,100%{opacity:.7}50%{opacity:1}}

        .ring{
          width:132px;height:132px;border-radius:50%;padding:3px;
          background:linear-gradient(135deg,#8b5cf6,#6366f1,#38bdf8,#8b5cf6);
          animation:spin 6s linear infinite;
        }
        .ring-inner{
          width:100%;height:100%;border-radius:50%;
          background:#0c0a18;overflow:hidden;
          display:flex;align-items:center;justify-content:center;
        }

        .quote{
          margin:0 0 16px;
          padding:12px 16px 12px 18px;
          border-radius:10px;
          background:rgba(139,92,246,.06);
          border-left:3px solid #8b5cf6;
          max-width:420px;
        }
        .quote p{
          font-size:13px;
          line-height:1.6;
          color:#9490b0;
          margin:0;
          font-style:italic;
        }

        @media(max-width:560px){
          .card-inner{
            padding:22px 16px !important;
            gap:18px !important;
            flex-direction:column;
            text-align:center;
          }
          .ring{
            width:100px;height:100px;
          }
        }
      `}</style>

      <div style={{ padding:'0 16px' }}>
        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          style={{
            maxWidth:'640px',
            margin:'0 auto',
            borderRadius:'20px',
            overflow:'hidden',
            background:'linear-gradient(135deg,#0b0a16,#05050e)',
            border:'1px solid rgba(139,92,246,.2)'
          }}
        >
          <div
            className="card-inner"
            style={{
              padding:'28px 30px',
              display:'flex',
              alignItems:'center',
              gap:'24px',
              flexWrap:'wrap'
            }}
          >
            {/* Avatar */}
            <div className="ring">
              <div className="ring-inner">
                {admin.image ? (
                  <img
                    src={admin.image}
                    alt={admin.name}
                    style={{ width:'100%', height:'100%', objectFit:'cover' }}
                  />
                ) : (
                  <DefaultAvatar gender={admin.gender} />
                )}
              </div>
            </div>

            {/* Info */}
            <div style={{ flex:1, minWidth:'220px' }}>
              <div style={{
                fontSize:'clamp(20px,3vw,26px)',
                fontWeight:800,
                marginBottom:'10px',
                background:'linear-gradient(135deg,#fff,#a78bfa)',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent'
              }}>
                {admin.name}
              </div>

              {/* Quote */}
              <div className="quote">
                <p>{message}</p>
              </div>

              {/* Actions */}
              <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                {admin.linkedin && (
                  <a
                    href={admin.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'6px',
                      padding:'8px 14px',
                      borderRadius:'8px',
                      background:'rgba(10,102,194,.15)',
                      color:'#60a5fa',
                      textDecoration:'none',
                      fontSize:'12px'
                    }}
                  >
                    <LinkedInIcon size={14} />
                    LinkedIn
                  </a>
                )}

                <div style={{
                  padding:'8px 14px',
                  borderRadius:'8px',
                  background:'rgba(34,197,94,.1)',
                  fontSize:'12px',
                  color:'#4ade80'
                }}>
                  Active
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}