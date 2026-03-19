import { motion } from 'framer-motion';
import { DiscordIcon, LinkedInIcon } from '../Avatar';
import { communityLinks } from '../../data/community';

export default function JoinSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="
        mx-[44px] mt-[32px] mb-[48px] rounded-[16px] p-[32px] text-center
        border border-[rgba(139,92,246,.2)] relative overflow-hidden
      "
      style={{
        background: `
          linear-gradient(135deg, rgba(139,92,246,.08), rgba(59,130,246,.04)),
          radial-gradient(ellipse 70% 80% at 50% 0%, rgba(139,92,246,.06) 0%, transparent 70%)
        `,
      }}
    >
      {/* Glow orb */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: '-40%', left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 300,
          background: 'radial-gradient(circle, rgba(139,92,246,.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10">
        {/* Kicker */}
        <div className="font-mono text-[9.5px] tracking-[.14em] uppercase text-[rgba(139,92,246,.7)] mb-[10px]">
          Want to be part of this?
        </div>

        {/* Heading */}
        <h3 className="text-[22px] font-bold tracking-[-0.025em] mb-[8px]">
          <span className="grad-text">Join the Community</span>
        </h3>

        {/* Subtext */}
        <p className="text-[13px] text-ou-text3 max-w-[420px] mx-auto leading-[1.75] mb-[24px]">
          We're a focused group executing daily toward one goal —
          an offer before August 15, 2026. No noise, just consistent progress.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-[12px] flex-wrap">
          {/* Discord */}
          <a
            href={communityLinks.discordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-[8px] no-underline
              px-[20px] py-[10px] rounded-[9px]
              font-sans text-[13px] font-semibold text-white
              bg-[#5865f2] border border-[rgba(88,101,242,.4)]
              transition-all duration-[250ms]
              hover:bg-[#4752c4] hover:-translate-y-[2px]
              hover:shadow-[0_6px_24px_rgba(88,101,242,.4)]
            "
          >
            <DiscordIcon size={16} />
            Join Discord
          </a>

          {/* LinkedIn DM */}
          <a
            href={communityLinks.adminLinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-[8px] no-underline
              px-[20px] py-[10px] rounded-[9px]
              font-sans text-[13px] font-semibold text-[#60a5fa]
              bg-[rgba(59,130,246,.1)] border border-[rgba(59,130,246,.25)]
              transition-all duration-[250ms]
              hover:bg-[rgba(59,130,246,.18)] hover:border-[rgba(59,130,246,.4)]
              hover:text-[#93c5fd] hover:-translate-y-[2px]
              hover:shadow-[0_6px_24px_rgba(59,130,246,.2)]
            "
          >
            <LinkedInIcon size={14} />
            DM on LinkedIn
          </a>
        </div>

        {/* Small note */}
        <p className="text-[10.5px] text-ou-text4 mt-[16px] font-mono tracking-[.02em]">
          Join Discord first · then DM the admin on LinkedIn to get verified ✓
        </p>
      </div>
    </motion.div>
  );
}
