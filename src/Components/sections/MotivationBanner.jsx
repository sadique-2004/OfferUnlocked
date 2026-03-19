import { useApp } from '../../context/AppContext';
import { useStreak } from '../../hooks/useStreak';
import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MotivationBanner() {
  const { overallPercent } = useApp();
  const { streak } = useStreak();
  const pct = useMemo(() => overallPercent(), [overallPercent]);

  const visible = pct > 0 || streak > 0;

  let icon = '⚡', message;
  if      (pct >= 50) { icon = '🏆'; message = <><b>Halfway there.</b> You are ahead of 90% of people who started.</>;  }
  else if (pct >= 25) { icon = '🚀'; message = <><b>Great job, keep going.</b> Consistency is paying off.</>;            }
  else if (streak>=3) { icon = '🔥'; message = <><b>{streak}-day streak!</b> Don't break the chain.</>;                 }
  else if (pct  > 0)  { icon = '💪'; message = <><b>Progress detected.</b> Small wins compound.</>;                     }
  else                { icon = '⚡'; message = <><b>Start small.</b> One task a day beats motivation every time.</>;    }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-b border-[rgba(139,92,246,.09)]"
          style={{
            background: 'linear-gradient(90deg,rgba(139,92,246,.06),rgba(59,130,246,.04))',
          }}
        >
          <div className="flex items-center gap-[10px] px-[52px] py-[8px] text-[12px]">
            <span className="text-[14px]">{icon}</span>
            <span className="text-ou-text2 font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
