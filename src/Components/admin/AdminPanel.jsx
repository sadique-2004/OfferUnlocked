import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { roadmapData } from '../../data/roadmap';

const ADMIN_PASSWORD = 'offerunlocked2026'; // ← change this

export default function AdminPanel() {
  const [authed, setAuthed]   = useState(
    () => sessionStorage.getItem('ou_adm') === '1'
  );
  const [pwd, setPwd]         = useState('');
  const [error, setError]     = useState(false);
  const { isDayDone, markDay } = useApp();

  function login() {
    if (pwd === ADMIN_PASSWORD) {
      sessionStorage.setItem('ou_adm', '1');
      setAuthed(true);
      setError(false);
    } else {
      setError(true);
      setPwd('');
    }
  }

  function logout() {
    sessionStorage.removeItem('ou_adm');
    setAuthed(false);
    setPwd('');
  }

  return (
    <div className="px-[44px] py-[44px] max-w-[600px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-ou-bg1 border border-[rgba(255,255,255,.06)] rounded-[12px] p-[28px]"
      >
        {!authed ? (
          /* Login form */
          <>
            <div className="text-[17px] font-bold tracking-[-0.02em] mb-[5px]">
              Admin Access
            </div>
            <div className="text-[12px] text-ou-text3 mb-[22px]">
              Restricted. For community admins only.
            </div>

            <label className="block font-sans text-[11px] font-medium text-ou-text2 mb-[6px] tracking-[.03em] uppercase">
              Password
            </label>
            <input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && login()}
              placeholder="Enter admin password"
              className="
                w-full px-[12px] py-[9px] bg-ou-bg border border-[rgba(255,255,255,.06)]
                rounded-[7px] text-ou-text font-sans text-[13px] outline-none
                transition-colors duration-[200ms]
                focus:border-[rgba(139,92,246,.4)]
                placeholder:text-ou-text3
              "
            />

            {error && (
              <div className="text-[#f87171] text-[11px] mt-[8px] px-[11px] py-[7px] bg-[rgba(239,68,68,.05)] rounded-[6px] border border-[rgba(239,68,68,.1)]">
                Incorrect password.
              </div>
            )}

            <button
              onClick={login}
              className="
                w-full mt-[12px] py-[10px] bg-gradient-to-br from-ou-p to-ou-b
                text-white border-0 rounded-[7px] font-sans text-[13px] font-semibold
                cursor-pointer transition-opacity duration-[200ms] hover:opacity-85
              "
            >
              Authenticate
            </button>
          </>
        ) : (
          /* Admin panel */
          <>
            <div className="flex items-center justify-between mb-[18px]">
              <div className="text-[15px] font-bold tracking-[-0.015em]">Admin Panel</div>
              <button
                onClick={logout}
                className="
                  text-[11px] text-ou-text3 bg-transparent
                  border border-[rgba(255,255,255,.06)] px-[11px] py-[5px]
                  rounded-[5px] cursor-pointer font-sans transition-all duration-[150ms]
                  hover:border-[rgba(255,255,255,.13)] hover:text-ou-text2
                "
              >
                Sign out
              </button>
            </div>

            <div className="text-[11.5px] text-ou-text3 mb-[14px]">
              Toggle day completion. Changes saved to localStorage.
            </div>

            <div className="flex flex-col gap-[6px]">
              {roadmapData.map((mo, m) =>
                mo.weeks.map((wk, w) =>
                  wk.days.map((d, di) => {
                    const done = isDayDone(m, w, di);
                    return (
                      <div
                        key={`${m}_${w}_${di}`}
                        className="
                          flex items-center gap-[9px] px-[12px] py-[10px]
                          bg-ou-bg border border-[rgba(255,255,255,.06)] rounded-[7px]
                        "
                      >
                        <div className="flex-1">
                          <div className="text-[12.5px]">
                            {d.day} · {d.tasks[0]}
                          </div>
                          <div className="text-[10px] text-ou-text3 font-mono mt-[2px]">
                            {mo.short} · {wk.name}
                          </div>
                        </div>
                        <button
                          onClick={() => markDay(m, w, di, !done)}
                          className={`
                            px-[11px] py-[4px] rounded-[5px] text-[11px] font-semibold
                            font-sans cursor-pointer border transition-all duration-[200ms]
                            ${done
                              ? 'bg-[rgba(245,158,11,.07)] text-[#fbbf24] border-[rgba(245,158,11,.13)] hover:bg-[rgba(245,158,11,.14)]'
                              : 'bg-[rgba(34,197,94,.09)] text-[#4ade80] border-[rgba(34,197,94,.18)] hover:bg-[rgba(34,197,94,.16)]'
                            }
                          `}
                        >
                          {done ? 'Mark Pending' : 'Mark Done'}
                        </button>
                      </div>
                    );
                  })
                )
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
