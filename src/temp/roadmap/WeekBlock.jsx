import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { roadmapData } from '../../data/roadmap';
import DayCard from './DayCard';

export default function WeekBlock({ monthIdx, weekIdx }) {
  const [open, setOpen] = useState(false);
  const { weekPercent } = useApp();

  const week = roadmapData[monthIdx].weeks[weekIdx];
  const pct  = weekPercent(monthIdx, weekIdx);
  const done = pct === 100;

  const badgeLabel = done ? 'Done' : pct > 0 ? `${pct}%` : 'Pending';
  const badgeCls   = done
    ? 'bg-[rgba(34,197,94,.09)] text-[#4ade80] border-[rgba(34,197,94,.14)]'
    : pct > 0
    ? 'bg-[rgba(245,158,11,.08)] text-[#fbbf24] border-[rgba(245,158,11,.13)]'
    : 'bg-ou-bg3 text-ou-text3 border-[rgba(255,255,255,.06)]';

  return (
    <div
      className={`
        rounded-[12px] mb-[8px] overflow-hidden border transition-all duration-[250ms]
        ${open
          ? 'border-[rgba(139,92,246,.22)] shadow-[0_0_0_1px_rgba(139,92,246,.08)_inset,0_4px_16px_rgba(0,0,0,.3)]'
          : 'border-[rgba(255,255,255,.055)] hover:border-[rgba(139,92,246,.15)]'
        }
        bg-ou-bg1
      `}
    >
      {/* Week header */}
      <div
        className="flex items-center gap-[10px] px-[16px] py-[13px] cursor-pointer select-none transition-colors duration-[150ms] hover:bg-[rgba(255,255,255,.016)]"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Chevron */}
        <div className="w-[18px] h-[18px] flex items-center justify-center text-ou-text3 flex-shrink-0">
          <motion.svg
            viewBox="0 0 12 12" fill="none" width="11" height="11"
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <path d="M3.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </div>

        {/* Week name */}
        <span className={`font-semibold text-[13px] flex-1 tracking-[-0.01em] ${open ? 'text-ou-text' : 'text-ou-text2'}`}>
          {week.name}
        </span>

        {/* Mini progress + badge */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[40px] h-[2px] bg-ou-bg3 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-ou-p to-ou-b"
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className={`font-mono text-[9px] px-[7px] py-[2px] rounded-[4px] font-medium tracking-[.02em] border ${badgeCls}`}>
            {badgeLabel}
          </span>
        </div>
      </div>

      {/* Expandable day cards */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="weeks"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-[12px] pb-[12px] pt-[2px] flex flex-col gap-[5px]">
              {week.days.map((_, di) => (
                <DayCard
                  key={di}
                  monthIdx={monthIdx}
                  weekIdx={weekIdx}
                  dayIdx={di}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
