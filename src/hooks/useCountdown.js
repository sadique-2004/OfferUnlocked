import { useState, useEffect } from 'react';

// Target: before August 15 means the last moment before Aug 15 = Aug 14 23:59:59
const TARGET = new Date('2026-08-14T23:59:59');

export function useCountdown() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    function calc() {
      const diff = TARGET - new Date();
      setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    }
    calc();
    const id = setInterval(calc, 60_000);
    return () => clearInterval(id);
  }, []);

  return daysLeft;
}
