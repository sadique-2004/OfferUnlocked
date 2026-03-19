import { createContext, useContext, useState, useCallback } from 'react';
import { roadmapData } from '../data/roadmap';

// ─── Storage key ────────────────────────────────────────
const STORAGE_KEY = 'ou3_v1';

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}
function saveState(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

// ─── Context ────────────────────────────────────────────
const AppContext = createContext(null);

export function AppProvider({ children }) {
  // Current visible section: 'hero' | 'rm' | 'comm' | 'admin'
  const [section, setSection] = useState('hero');

  // Active month index in roadmap
  const [activeMonth, setActiveMonth] = useState(0);

  // localStorage progress map: { "m_w_d_t": true }
  const [progress, setProgress] = useState(loadState);

  // ── Helpers ────────────────────────────────────────────
  const taskKey = (m, w, d, t) => `${m}_${w}_${d}_${t}`;

  const isTaskDone = useCallback(
    (m, w, d, t) => !!progress[taskKey(m, w, d, t)],
    [progress]
  );

  const isDayDone = useCallback(
    (m, w, d) =>
      roadmapData[m].weeks[w].days[d].tasks.every((_, t) =>
        isTaskDone(m, w, d, t)
      ),
    [isTaskDone]
  );

  // Toggle single task
  const toggleTask = useCallback(
    (m, w, d, t) => {
      const key = taskKey(m, w, d, t);
      setProgress((prev) => {
        const next = { ...prev, [key]: !prev[key] };
        saveState(next);
        return next;
      });
    },
    []
  );

  // Mark all tasks in a day done/undone
  const markDay = useCallback(
    (m, w, d, value) => {
      setProgress((prev) => {
        const next = { ...prev };
        roadmapData[m].weeks[w].days[d].tasks.forEach((_, t) => {
          next[taskKey(m, w, d, t)] = value;
        });
        saveState(next);
        return next;
      });
    },
    []
  );

  // ── Percentage helpers ─────────────────────────────────
  const monthPercent = useCallback(
    (mi) => {
      let tot = 0, dn = 0;
      roadmapData[mi].weeks.forEach((wk, wi) =>
        wk.days.forEach((dy, di) =>
          dy.tasks.forEach((_, ti) => {
            tot++;
            if (isTaskDone(mi, wi, di, ti)) dn++;
          })
        )
      );
      return tot ? Math.round((dn / tot) * 100) : 0;
    },
    [isTaskDone]
  );

  const weekPercent = useCallback(
    (mi, wi) => {
      let tot = 0, dn = 0;
      roadmapData[mi].weeks[wi].days.forEach((dy, di) =>
        dy.tasks.forEach((_, ti) => {
          tot++;
          if (isTaskDone(mi, wi, di, ti)) dn++;
        })
      );
      return tot ? Math.round((dn / tot) * 100) : 0;
    },
    [isTaskDone]
  );

  const overallPercent = useCallback(() => {
    let tot = 0, dn = 0;
    roadmapData.forEach((mo, mi) =>
      mo.weeks.forEach((wk, wi) =>
        wk.days.forEach((dy, di) =>
          dy.tasks.forEach((_, ti) => {
            tot++;
            if (isTaskDone(mi, wi, di, ti)) dn++;
          })
        )
      )
    );
    return tot ? Math.round((dn / tot) * 100) : 0;
  }, [isTaskDone]);

  // ── Streak ────────────────────────────────────────────
  const calcStreak = useCallback(() => {
    let streak = 0;
    outer: for (let m = 0; m < roadmapData.length; m++)
      for (let w = 0; w < roadmapData[m].weeks.length; w++)
        for (let d = 0; d < roadmapData[m].weeks[w].days.length; d++) {
          if (isDayDone(m, w, d)) streak++;
          else break outer;
        }
    return streak;
  }, [isDayDone]);

  return (
    <AppContext.Provider
      value={{
        section, setSection,
        activeMonth, setActiveMonth,
        progress,
        isTaskDone, isDayDone,
        toggleTask, markDay,
        monthPercent, weekPercent, overallPercent,
        calcStreak,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useApp = () => useContext(AppContext);
