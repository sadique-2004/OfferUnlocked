import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { roadmapData } from '../../data/roadmap';

export default function DayCard({ monthIdx, weekIdx, dayIdx }) {
  const [open, setOpen] = useState(false);
  const { isTaskDone, isDayDone, toggleTask, markDay } = useApp();

  const day   = roadmapData[monthIdx].weeks[weekIdx].days[dayIdx];
  const done  = isDayDone(monthIdx, weekIdx, dayIdx);

  return (
    <div
      className={`
        rounded-[8px] overflow-hidden border transition-all duration-[220ms]
        ${done
          ? 'border-[rgba(34,197,94,.16)] shadow-glow-g'
          : 'border-[rgba(255,255,255,.05)] hover:border-[rgba(139,92,246,.18)]'
        }
        hover:-translate-y-[1px]
      `}
      style={{
        background: done
          ? 'linear-gradient(135deg,rgba(34,197,94,.02),rgba(16,185,129,.015))'
          : '#07070f',
      }}
    >
      {/* Header row */}
      <div
        className="flex items-center gap-[9px] px-[13px] py-[10px] cursor-pointer transition-colors duration-[150ms] hover:bg-[rgba(255,255,255,.01)]"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Day badge */}
        <span
          className={`
            font-mono text-[9px] font-medium tracking-[.02em] px-[7px] py-[2px]
            rounded-[4px] flex-shrink-0 min-w-[42px] text-center border
            ${done
              ? 'bg-[rgba(34,197,94,.07)] border-[rgba(34,197,94,.14)] text-[#4ade80]'
              : 'bg-ou-bg2 border-[rgba(255,255,255,.06)] text-ou-text3'
            }
          `}
        >
          {day.day}
        </span>

        {/* First task preview */}
        <span
          className={`
            text-[12.5px] font-medium flex-1 tracking-[-0.005em]
            ${done ? 'text-ou-text3 line-through' : 'text-ou-text2'}
          `}
        >
          {day.tasks[0]}
        </span>

        {/* Status dot */}
        <span
          className={`
            w-[7px] h-[7px] rounded-full flex-shrink-0 transition-all duration-[300ms]
            ${done
              ? 'bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,.7)]'
              : 'bg-ou-text4'
            }
          `}
        />

        {/* Chevron */}
        <svg
          className={`text-ou-text3 flex-shrink-0 transition-transform duration-[220ms] ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 12 12" fill="none" width="11" height="11"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="px-[13px] pb-[13px] border-t border-[rgba(255,255,255,.04)]">
              {/* Task list */}
              <ul className="list-none pt-[10px] pb-[11px] flex flex-col gap-[5px]">
                {day.tasks.map((task, t) => {
                  const tdone = isTaskDone(monthIdx, weekIdx, dayIdx, t);
                  return (
                    <li
                      key={t}
                      onClick={() => toggleTask(monthIdx, weekIdx, dayIdx, t)}
                      className={`
                        flex items-center gap-[10px] px-[10px] py-[7px]
                        rounded-[7px] border border-transparent cursor-pointer
                        transition-all duration-[200ms]
                        hover:bg-ou-bg1 hover:border-[rgba(255,255,255,.06)] hover:translate-x-[2px]
                        ${tdone ? 'opacity-45' : ''}
                      `}
                    >
                      {/* Checkbox */}
                      <div
                        className={`
                          w-[16px] h-[16px] rounded-[5px] flex-shrink-0
                          flex items-center justify-center transition-all duration-[250ms]
                          ${tdone
                            ? 'bg-gradient-to-br from-ou-p to-ou-b border-0 shadow-[0_0_10px_rgba(139,92,246,.45)] animate-check-pop'
                            : 'border-[1.5px] border-[rgba(255,255,255,.12)] bg-transparent'
                          }
                        `}
                      >
                        {tdone && (
                          <svg viewBox="0 0 10 10" fill="none" width="9" height="9">
                            <path d="M1.5 5l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>

                      <span
                        className={`text-[12.5px] leading-[1.4] transition-all duration-[200ms] ${tdone ? 'line-through text-ou-text3' : 'text-ou-text2'}`}
                      >
                        {task}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* Mark all done button */}
              <button
                onClick={() => markDay(monthIdx, weekIdx, dayIdx, !done)}
                className={`
                  flex items-center gap-[6px] px-[12px] py-[7px] rounded-[7px]
                  font-sans text-[11.5px] font-medium cursor-pointer border
                  transition-all duration-[220ms]
                  ${done
                    ? 'bg-[rgba(34,197,94,.07)] border-[rgba(34,197,94,.2)] text-[#4ade80] hover:bg-[rgba(239,68,68,.05)] hover:border-[rgba(239,68,68,.18)] hover:text-[#f87171]'
                    : 'bg-transparent border-[rgba(255,255,255,.06)] text-ou-text3 hover:border-[rgba(34,197,94,.28)] hover:bg-[rgba(34,197,94,.05)] hover:text-[#4ade80] hover:-translate-y-[1px]'
                  }
                `}
              >
                {done ? (
                  <>
                    <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
                      <path d="M1.5 5l2.5 2.5 4.5-5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Completed — mark pending
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 10 10" fill="none" width="10" height="10">
                      <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1" />
                    </svg>
                    Mark all done
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
