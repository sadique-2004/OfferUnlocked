import { useApp } from '../../context/AppContext';
import { useStreak } from '../../hooks/useStreak';
import { communityData } from '../../data/community';
import { roadmapData } from '../../data/roadmap';
import { useMemo } from 'react';

export default function Sidebar({ isOpen }) {
  const { section, setSection, activeMonth, setActiveMonth, monthPercent } = useApp();
  const { streak, icon, msg, sub } = useStreak();

  function goMonth(i) {
    setActiveMonth(i);
    setSection('rm');
  }

  const monthPcts = useMemo(
    () => roadmapData.map((_, i) => monthPercent(i)),
    [monthPercent]
  );

  return (
    <nav
      className={`
        flex-shrink-0 flex flex-col overflow-y-auto
        bg-gradient-to-b from-ou-bg1 to-ou-bg
        border-r border-[rgba(139,92,246,.08)]
        transition-transform duration-[250ms] ease-in-out
        z-[90]
        ${isOpen ? 'translate-x-0' : ''}
      `}
      style={{ width: 240 }}
    >
      {/* Active badge */}
      <div className="flex items-center gap-2 px-[14px] py-[16px] border-b border-[rgba(255,255,255,.06)]">
        <div
          className="w-[7px] h-[7px] rounded-full flex-shrink-0 animate-pulse-glow"
          style={{ background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,.6)' }}
        />
        <span className="text-[11px] text-ou-text3 font-medium">
          Batch active ·{' '}
          <b className="text-ou-text2">{communityData.members.length}</b> grinding
        </span>
      </div>

      {/* Month nav */}
      <div className="px-[10px] pt-[14px] pb-[4px]">
        <div className="flex items-center gap-[6px] px-[6px] mb-[6px]">
          <span className="text-[9.5px] tracking-[.12em] uppercase text-ou-text4 font-semibold">
            Roadmap
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,.06)]" />
        </div>

        {roadmapData.map((month, i) => (
          <button
            key={i}
            onClick={() => goMonth(i)}
            className={`
              flex items-center gap-[9px] w-full px-[10px] py-[8px]
              rounded-[8px] font-sans text-[12.5px] font-medium text-left
              border-0 cursor-pointer transition-all duration-[180ms]
              ${activeMonth === i && section === 'rm'
                ? 'bg-[rgba(139,92,246,.12)] text-ou-text shadow-[inset_0_0_0_1px_rgba(139,92,246,.2)]'
                : 'bg-transparent text-ou-text3 hover:bg-ou-bg2 hover:text-ou-text2 hover:translate-x-[2px]'
              }
            `}
          >
            <span
              className={`
                w-[6px] h-[6px] rounded-full flex-shrink-0 transition-all
                ${activeMonth === i && section === 'rm'
                  ? 'bg-gradient-to-br from-ou-p to-ou-b shadow-[0_0_6px_rgba(139,92,246,.6)]'
                  : 'bg-ou-bg4'
                }
              `}
            />
            <span className="flex-1">{month.short}</span>
            <span
              className={`
                font-mono text-[9.5px] px-[6px] py-[1px] rounded-[3px]
                ${activeMonth === i && section === 'rm'
                  ? 'bg-[rgba(139,92,246,.18)] text-[#c4b5fd]'
                  : 'bg-ou-bg3 text-ou-text4'
                }
              `}
            >
              {monthPcts[i]}%
            </span>
          </button>
        ))}
      </div>

      <div className="h-px bg-[rgba(255,255,255,.06)] mx-[10px] my-[8px]" />

      {/* Streak badge */}
      {streak > 0 && (
        <div
          className="
            mx-[10px] mb-[8px] px-[12px] py-[10px] rounded-[8px]
            border border-[rgba(245,158,11,.14)]
            bg-gradient-to-br from-[rgba(245,158,11,.06)] to-[rgba(234,88,12,.04)]
          "
        >
          <div className="text-[12px] font-semibold text-[#fbbf24]">
            {icon} {msg}
          </div>
          <div className="text-[10px] text-ou-text3 mt-[2px]">{sub}</div>
        </div>
      )}

      {/* Navigation links */}
      <div className="px-[10px] pb-[4px]">
        <div className="flex items-center gap-[6px] px-[6px] mb-[6px]">
          <span className="text-[9.5px] tracking-[.12em] uppercase text-ou-text4 font-semibold">
            Navigate
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,.06)]" />
        </div>

        {[
          { id: 'hero', icon: '⌂', label: 'Overview' },
          { id: 'comm', icon: '◈', label: 'Community' },
        ].map(({ id, icon: ic, label }) => (
          <button
            key={id}
            onClick={() => setSection(id)}
            className="
              flex items-center gap-[9px] w-full px-[10px] py-[8px]
              rounded-[8px] font-sans text-[12.5px] font-medium text-left
              bg-transparent border-0 text-ou-text3 cursor-pointer
              transition-all duration-[180ms]
              hover:bg-ou-bg2 hover:text-ou-text2 hover:translate-x-[2px]
            "
          >
            <span className="text-[12px] w-[18px] text-center opacity-70">{ic}</span>
            {label}
          </button>
        ))}
      </div>

      {/* Admin link */}
      <div className="mt-auto p-[10px]">
        <a
          href="#admin"
          onClick={(e) => { e.preventDefault(); setSection('admin'); }}
          className="
            flex items-center gap-[9px] w-full px-[10px] py-[8px]
            rounded-[8px] font-sans text-[12.5px] font-medium
            bg-transparent border-0 text-ou-text4 cursor-pointer no-underline
            transition-all duration-[180ms]
            hover:bg-ou-bg2 hover:text-ou-text3 hover:translate-x-[2px]
          "
        >
          <span className="text-[12px] w-[18px] text-center opacity-70">⚙</span>
          Admin
        </a>
      </div>
    </nav>
  );
}
