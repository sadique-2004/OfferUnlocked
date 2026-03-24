import { useApp } from '../../context/AppContext';
import { useStreak } from '../../hooks/useStreak';
import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────
   MotivationBanner — sits directly below HeroSection
   Design: slim intel strip · data-driven copy · no generic cheering
   People using this are already grinding — speak to that.
───────────────────────────────────────────────────────────── */

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Outfit:wght@400;500;600&display=swap');

  @keyframes mb-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes mb-pulse {
    0%,100% { opacity:.55; transform:scale(1);   }
    50%      { opacity:1;   transform:scale(1.6); }
  }
  @keyframes mb-slide-in {
    from { opacity:0; transform:translateX(-6px); }
    to   { opacity:1; transform:translateX(0);    }
  }

  /* ── Top shimmer line ── */
  .mb-shimline {
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(139,92,246,.0) 20%,
      rgba(139,92,246,.55) 45%,
      rgba(56,189,248,.55) 55%,
      rgba(139,92,246,.0) 80%,
      transparent 100%
    );
    background-size: 200% auto;
    animation: mb-shimmer 4s linear infinite;
  }

  /* ── Banner body ── */
  .mb-body {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0 clamp(20px, 4.5vw, 52px);
    height: 46px;
    background: linear-gradient(
      90deg,
      rgba(139,92,246,.055) 0%,
      rgba(10,8,26,.0)     40%,
      rgba(56,189,248,.03) 100%
    );
    border-bottom: 1px solid rgba(255,255,255,.045);
    overflow: hidden;
    position: relative;
  }

  /* subtle left glow bleed */
  .mb-body::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: var(--mb-accent, rgba(139,92,246,.7));
    box-shadow: 0 0 12px var(--mb-accent, rgba(139,92,246,.5));
  }

  /* ── Left: accent bar + icon + text ── */
  .mb-left {
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
    flex: 1;
    padding-left: 14px;
    animation: mb-slide-in .4s .1s ease both;
  }

  .mb-icon {
    font-size: 14px;
    line-height: 1;
    flex-shrink: 0;
  }

  .mb-text {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(11.5px, 1vw, 13px);
    font-weight: 400;
    color: rgba(255,255,255,.46);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1;
  }
  .mb-text b {
    font-weight: 600;
    color: rgba(255,255,255,.82);
  }
  .mb-text em {
    font-style: normal;
    font-family: 'DM Mono', monospace;
    font-size: .9em;
    color: var(--mb-em, rgba(196,181,253,.9));
  }

  /* ── Right: stat chips ── */
  .mb-chips {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    animation: mb-slide-in .4s .2s ease both;
  }

  .mb-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 10px 3px 8px;
    border-radius: 100px;
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .03em;
    white-space: nowrap;
    border: 1px solid;
    transition: opacity .2s;
  }
  .mb-chip-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* streak chip — orange */
  .mb-chip-streak {
    background: rgba(251,146,60,.08);
    border-color: rgba(251,146,60,.2);
    color: rgba(251,146,60,.9);
  }
  .mb-chip-streak .mb-chip-dot {
    background: #fb923c;
    box-shadow: 0 0 5px rgba(251,146,60,.7);
    animation: mb-pulse 2s ease-in-out infinite;
  }

  /* progress chip — violet */
  .mb-chip-progress {
    background: rgba(139,92,246,.08);
    border-color: rgba(139,92,246,.2);
    color: rgba(196,181,253,.9);
  }
  .mb-chip-progress .mb-chip-dot {
    background: #8b5cf6;
    box-shadow: 0 0 5px rgba(139,92,246,.7);
    animation: mb-pulse 2s .4s ease-in-out infinite;
  }

  /* new-user chip — cyan */
  .mb-chip-new {
    background: rgba(56,189,248,.07);
    border-color: rgba(56,189,248,.18);
    color: rgba(56,189,248,.85);
  }
  .mb-chip-new .mb-chip-dot {
    background: #38bdf8;
    box-shadow: 0 0 5px rgba(56,189,248,.7);
    animation: mb-pulse 2s .2s ease-in-out infinite;
  }
`;

/* ─────────────────────────────────────────
   Copy — data-specific, mentor-tone.
   No generic cheerleading. Each line
   acknowledges the actual number.
───────────────────────────────────────── */
function getContent(pct, streak) {
  /* pct >= 75 */
  if (pct >= 75) return {
    icon: '🏹',
    accent: 'rgba(56,189,248,.75)',
    em: 'rgba(125,211,252,.95)',
    message: (
      <>
        <em>{pct}%</em> done — <b>final stretch.</b>{' '}
        Most people who make it this far finish. You're one of them.
      </>
    ),
  };

  /* pct >= 50 */
  if (pct >= 50) return {
    icon: '⚔️',
    accent: 'rgba(99,102,241,.75)',
    em: 'rgba(165,243,252,.95)',
    message: (
      <>
        Past halfway at <em>{pct}%</em>. <b>You've outlasted the majority</b>{' '}
        of people who started this. That gap keeps growing.
      </>
    ),
  };

  /* pct >= 25 */
  if (pct >= 25) return {
    icon: '📈',
    accent: 'rgba(139,92,246,.75)',
    em: 'rgba(196,181,253,.95)',
    message: (
      <>
        <em>{pct}%</em> in. <b>The first quarter is where most quit.</b>{' '}
        You didn't. Keep that same energy into the second.
      </>
    ),
  };

  /* streak >= 7 */
  if (streak >= 7) return {
    icon: '🔥',
    accent: 'rgba(251,146,60,.8)',
    em: 'rgba(253,186,116,.95)',
    message: (
      <>
        <em>{streak} days straight.</em> <b>A full week of compounding.</b>{' '}
        The gap between you and everyone else just got wider.
      </>
    ),
  };

  /* streak >= 3 */
  if (streak >= 3) return {
    icon: '🔗',
    accent: 'rgba(251,146,60,.7)',
    em: 'rgba(253,186,116,.9)',
    message: (
      <>
        <em>{streak}-day chain.</em> <b>Don't be the person who breaks it today.</b>{' '}
        Identity is built in streaks, not spurts.
      </>
    ),
  };

  /* any progress */
  if (pct > 0) return {
    icon: '📍',
    accent: 'rgba(139,92,246,.65)',
    em: 'rgba(196,181,253,.9)',
    message: (
      <>
        <b>You've started — that's already rare.</b>{' '}
        <em>{pct}%</em> done. One task compounds into the next.
      </>
    ),
  };

  /* day 1 */
  return {
    icon: '🎯',
    accent: 'rgba(56,189,248,.65)',
    em: 'rgba(125,211,252,.9)',
    message: (
      <>
        <b>Day one is the hardest.</b>{' '}
        Open the roadmap, pick one task, do it. That's the whole system.
      </>
    ),
  };
}

/* ══════════════════════════════════════════════
   COMPONENT
══════════════════════════════════════════════ */
export default function MotivationBanner() {
  const { overallPercent } = useApp();
  const { streak } = useStreak();
  const pct = useMemo(() => overallPercent(), [overallPercent]);

  const { icon, accent, em, message } = getContent(pct, streak);

  /* Always show — even day-one users get context */
  const show = true;

  return (
    <>
      <style>{STYLES}</style>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={  { opacity: 0, height: 0 }}
            transition={{ duration: .28, ease: 'easeOut' }}
            style={{ '--mb-accent': accent, '--mb-em': em }}
          >
            {/* shimmer line */}
            <div className="mb-shimline" />

            {/* body */}
            <div className="mb-body">

              {/* Left: message */}
              <div className="mb-left">
                <span className="mb-icon">{icon}</span>
                <span className="mb-text">{message}</span>
              </div>

              {/* Right: stat chips */}
              <div className="mb-chips">
                {streak > 0 && (
                  <div className="mb-chip mb-chip-streak">
                    <div className="mb-chip-dot" />
                    {streak}d streak
                  </div>
                )}

                {pct > 0 && (
                  <div className="mb-chip mb-chip-progress">
                    <div className="mb-chip-dot" />
                    {pct}% done
                  </div>
                )}

                {pct === 0 && streak === 0 && (
                  <div className="mb-chip mb-chip-new">
                    <div className="mb-chip-dot" />
                    Day 1 — start here
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}