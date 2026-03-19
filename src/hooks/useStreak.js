import { useMemo } from 'react';
import { useApp } from '../context/AppContext';

export function useStreak() {
  const { calcStreak } = useApp();
  const streak = useMemo(() => calcStreak(), [calcStreak]);

  function getInfo(s) {
    if (s === 0) return { icon: '💡', msg: 'Start small, stay consistent',   sub: 'Complete Day 1 to begin your streak' };
    if (s === 1) return { icon: '🌱', msg: 'Day 1 done — great start!',      sub: "Don't break the chain." };
    if (s <  5)  return { icon: '🔥', msg: `${s}-day streak!`,               sub: 'Consistency is building. Keep going.' };
    if (s < 10)  return { icon: '⚡', msg: `${s} days straight`,             sub: 'The compound effect is kicking in.' };
    if (s < 20)  return { icon: '🚀', msg: `${s}-day streak — incredible`,   sub: 'Consistency is paying off.' };
    return              { icon: '🏆', msg: `${s} days of pure execution`,     sub: "You're unstoppable. Don't stop now." };
  }

  return { streak, ...getInfo(streak) };
}
