import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { useStreak } from '../../hooks/useStreak';
import { roadmapData } from '../../data/roadmap';
import WeekBlock from './WeekBlock';

export default function RoadmapSection() {
  const { activeMonth, setActiveMonth, monthPercent, setSection } = useApp();
  const { streak, icon, msg, sub } = useStreak();
  const pct = monthPercent(activeMonth);

  return (
    <div className="px-[44px] pt-[28px] pb-[64px]">
      {/* Header: title + progress */}
      <div className="flex items-center justify-between mb-[20px] flex-wrap gap-[10px]">
        <h2 className="text-[17px] font-bold tracking-[-0.025em]">
          <span className="grad-text">{roadmapData[activeMonth].name}</span>
        </h2>
        <div className="flex items-center gap-[8px]">
          <span className="font-mono text-[11px] text-ou-text2">{pct}% complete</span>
          <div className="w-[100px] h-[3px] bg-ou-bg3 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-ou-p to-ou-b"
              style={{ boxShadow: '0 0 6px rgba(139,92,246,.5)' }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            />
          </div>
        </div>
      </div>

      {/* Streak banner */}
      {streak > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            flex items-center gap-[11px] px-[14px] py-[10px] mb-[18px]
            rounded-[8px] border border-[rgba(245,158,11,.14)]
          "
          style={{ background: 'linear-gradient(135deg,rgba(245,158,11,.06),rgba(234,88,12,.03))' }}
        >
          <span className="text-[16px]">{icon}</span>
          <div>
            <div className="text-[12.5px] font-semibold text-[#fbbf24]">{msg}</div>
            <div className="text-[10.5px] text-ou-text3 mt-[1px]">{sub}</div>
          </div>
        </motion.div>
      )}

      {/* Month tab switcher */}
      <div className="flex gap-[6px] mb-[20px] flex-wrap">
        {roadmapData.map((mo, i) => (
          <button
            key={i}
            onClick={() => setActiveMonth(i)}
            className={`
              font-mono text-[9.5px] px-[10px] py-[5px] rounded-[6px] border
              cursor-pointer font-medium tracking-[.04em] transition-all duration-[180ms]
              ${activeMonth === i
                ? 'bg-[rgba(139,92,246,.15)] text-[#c4b5fd] border-[rgba(139,92,246,.28)] shadow-glow-p'
                : 'bg-transparent text-ou-text3 border-[rgba(255,255,255,.06)] hover:border-[rgba(139,92,246,.2)] hover:text-ou-text2'
              }
            `}
          >
            {mo.short}
          </button>
        ))}
      </div>

      {/* Week blocks */}
      {roadmapData[activeMonth].weeks.map((_, wi) => (
        <WeekBlock key={wi} monthIdx={activeMonth} weekIdx={wi} />
      ))}
    </div>
  );
}
