import { useApp } from '../../context/AppContext';
import { useCountdown } from '../../hooks/useCountdown';
import { useMemo } from 'react';

export default function Topbar({ onHamburger }) {
  const { section, setSection, setActiveMonth, overallPercent } = useApp();
  const daysLeft  = useCountdown();
  const pct       = useMemo(() => overallPercent(), [overallPercent]);

  function goTo(sec, month = 0) {
    if (sec === 'rm') setActiveMonth(month);
    setSection(sec);
  }

  const navItems = [
    { id: 'hero', label: 'Overview', icon: '⌂' },
    { id: 'rm',   label: 'Roadmap',  icon: '◎' },
    { id: 'comm', label: 'Community',icon: '◈' },
  ];

  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-[18px] border-b
        bg-[rgba(7,7,15,0.96)] backdrop-blur-[32px]
        border-[rgba(139,92,246,.12)]
        shadow-[0_1px_0_rgba(139,92,246,.06),0_4px_24px_rgba(0,0,0,.4)]
      "
      style={{ height: 54 }}
    >
      {/* ── LEFT: Logo ── */}
      <div className="flex items-center gap-[10px]">
        {/* Hamburger (mobile) */}
        <button
          onClick={onHamburger}
          className="
            hidden sm:hidden items-center justify-center
            border border-[rgba(255,255,255,.06)] text-ou-text3
            px-2 py-1 rounded-[6px] text-[15px] cursor-pointer
            bg-transparent
          "
          style={{ display: 'none' }}
          id="hamBtn"
        >
          ☰
        </button>

        {/* Logo mark */}
        <div
          className="
            relative w-[30px] h-[30px] rounded-[9px] flex items-center justify-center
            text-[16px] shadow-logo logo-glow flex-shrink-0
            bg-gradient-to-br from-ou-p to-ou-b
          "
        >
          🔓
        </div>
        <span className="grad-text font-bold text-[15px] tracking-[-0.025em]">
          OfferUnlocked
        </span>
        <span
          className="
            font-mono text-[9px] tracking-[0.06em] text-ou-text3
            bg-ou-bg3 px-[5px] py-[1px] rounded-[3px]
            border border-[rgba(255,255,255,.06)] self-center ml-[2px]
          "
        >
          2026
        </span>
      </div>

      {/* ── CENTER: Nav pill ── */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[6px]">
        <div
          className="
            flex items-center gap-[2px] bg-ou-bg2
            border border-[rgba(255,255,255,.06)] rounded-[10px] p-[3px]
          "
        >
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`
                flex items-center gap-[6px] px-3 py-[5px] rounded-[7px]
                font-sans text-[12px] font-medium cursor-pointer
                whitespace-nowrap border-0 transition-all duration-[180ms]
                ${section === id
                  ? 'bg-[rgba(139,92,246,.15)] text-ou-text shadow-[inset_0_0_0_1px_rgba(139,92,246,.22)]'
                  : 'bg-transparent text-ou-text3 hover:bg-ou-bg3 hover:text-ou-text2'
                }
              `}
            >
              <span className="text-[13px] w-[14px] text-center">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Progress + Countdown ── */}
      <div className="flex items-center gap-2">
        {/* Progress bar */}
        <div
          className="
            flex items-center gap-[7px] px-[10px] py-[5px]
            bg-ou-bg2 rounded-[8px] border border-[rgba(255,255,255,.06)]
          "
        >
          <span className="text-[10.5px] text-ou-text3 font-medium whitespace-nowrap">
            Progress
          </span>
          <div className="w-[70px] h-[3px] bg-ou-bg4 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-ou-p to-ou-b transition-[width] duration-1000"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="font-mono text-[10px] text-ou-text2 min-w-[26px] text-right">
            {pct}%
          </span>
        </div>

        {/* Countdown */}
        <div
          className="
            flex items-center gap-2 px-3 py-[5px]
            bg-ou-bg2 border border-[rgba(255,255,255,.06)] rounded-[8px]
          "
        >
          <span className="font-mono text-[10px] text-ou-text3 tracking-[.04em]">
            DAYS LEFT
          </span>
          <span className="grad-text font-mono text-[12px] font-medium">
            {daysLeft > 0 ? `${daysLeft} days` : 'TODAY!'}
          </span>
        </div>
      </div>
    </div>
  );
}
