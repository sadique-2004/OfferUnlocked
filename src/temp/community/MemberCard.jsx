import { motion } from 'framer-motion';
import { AvatarSmall, LinkedInIcon } from '../Avatar';

export default function MemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{
        y: -3,
        scale: 1.02,
        borderColor: 'rgba(139,92,246,.22)',
        boxShadow: '0 8px 24px rgba(0,0,0,.4), 0 0 0 1px rgba(139,92,246,.2), 0 0 20px rgba(139,92,246,.1)',
      }}
      className="
        bg-ou-bg1 border border-[rgba(255,255,255,.06)] rounded-[12px] p-[16px]
        flex flex-col gap-[10px] cursor-default transition-colors duration-[250ms]
        hover:bg-ou-bg2
      "
    >
      {/* Top row: avatar + name */}
      <div className="flex items-center gap-[10px]">
        {/* Avatar */}
        <div
          className="w-[38px] h-[38px] rounded-[9px] flex-shrink-0 overflow-hidden"
          style={{ border: '1px solid rgba(139,92,246,.16)' }}
        >
          <AvatarSmall image={member.image} gender={member.gender} />
        </div>

        {/* Meta */}
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold tracking-[-0.01em] leading-[1.2] mb-[2px]">
            {member.name}
          </div>
          <div className="text-[10.5px] text-ou-text3 leading-[1.3]">
            {member.college}
          </div>
          <span className="font-mono text-[9px] text-ou-text3 bg-ou-bg3 px-[6px] py-[1px] rounded-[3px] inline-block mt-[3px]">
            {member.year}
          </span>
        </div>
      </div>

      {/* Footer: LinkedIn + active dot */}
      <div
        className="flex items-center justify-between pt-[10px]"
        style={{ borderTop: '1px solid rgba(255,255,255,.06)' }}
      >
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-[5px] no-underline
              text-[rgba(59,130,246,.65)] text-[11px] font-medium
              transition-colors duration-[180ms] hover:text-[#60a5fa]
            "
          >
            <LinkedInIcon size={12} />
            Connect
          </a>
        ) : (
          <span className="text-[10.5px] text-ou-text4 italic">No LinkedIn</span>
        )}

        {/* Active dot */}
        <div
          className="w-[7px] h-[7px] rounded-full flex-shrink-0"
          style={{
            background: 'rgba(34,197,94,.6)',
            boxShadow: '0 0 6px rgba(34,197,94,.4)',
          }}
          title="Active"
        />
      </div>
    </motion.div>
  );
}
