import { motion } from 'framer-motion';

const cards = [
  {
    variant:    'gold',
    badge:      'if (effort === 100% && blessed)',
    emoji:      '🏆',
    condition:  'if ',
    condSpan:   'you give 100% and God blesses with good luck',
    heading:    'FAANG / Dream Company',
    desc:       'The stars align. Elite product-based opportunity. This is what happens when preparation meets a rare moment.',
    companies:  ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'],
    lpa:        '30+ LPA 🚀',
    borderColor:'rgba(245,158,11,.28)',
    bgGrad:     'linear-gradient(145deg,rgba(245,158,11,.1),rgba(251,191,36,.05),rgba(245,158,11,.08))',
    glowHover:  '0 0 0 1px rgba(245,158,11,.3), 0 0 24px rgba(245,158,11,.15), 0 12px 40px rgba(0,0,0,.4)',
    badgeBg:    'rgba(245,158,11,.15)', badgeColor:'#fbbf24', badgeBorder:'rgba(245,158,11,.25)',
    dotColor:   '#fbbf24',
    headingCls: 'grad-text-gold',
    lpaBg:      'rgba(245,158,11,.1)', lpaColor:'#fbbf24', lpaBorder:'rgba(245,158,11,.15)',
    chipBg:     'rgba(245,158,11,.08)', chipColor:'#d97706', chipBorder:'rgba(245,158,11,.12)',
  },
  {
    variant:    'silver',
    badge:      'else if (effort === 100%)',
    emoji:      '⚡',
    condition:  'else if ',
    condSpan:   'you put in 100% consistently',
    heading:    'Product-Based Company',
    desc:       'Strong execution guarantees a product-based role. Not luck — just pure daily consistency and skill.',
    companies:  ['Razorpay', 'Swiggy', 'CRED', 'Zepto', 'BrowserStack'],
    lpa:        '15–30 LPA 💜',
    borderColor:'rgba(139,92,246,.25)',
    bgGrad:     'linear-gradient(145deg,rgba(139,92,246,.1),rgba(99,102,241,.05),rgba(139,92,246,.07))',
    glowHover:  '0 0 0 1px rgba(139,92,246,.2), 0 0 20px rgba(139,92,246,.1), 0 12px 40px rgba(0,0,0,.4)',
    badgeBg:    'rgba(139,92,246,.15)', badgeColor:'#c4b5fd', badgeBorder:'rgba(139,92,246,.25)',
    dotColor:   '#c4b5fd',
    headingCls: 'grad-text',
    lpaBg:      'rgba(139,92,246,.1)', lpaColor:'#c4b5fd', lpaBorder:'rgba(139,92,246,.15)',
    chipBg:     'rgba(139,92,246,.08)', chipColor:'#8b5cf6', chipBorder:'rgba(139,92,246,.12)',
  },
  {
    variant:    'bronze',
    badge:      'else',
    emoji:      '💚',
    condition:  'else ',
    condSpan:   'a solid service-based company with good package',
    heading:    'Service-Based + Good Package',
    desc:       'Even in the "worst" case — a real offer with a real salary. The baseline is still financial independence.',
    companies:  ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Accenture'],
    lpa:        '6+ LPA 🌱',
    borderColor:'rgba(34,197,94,.2)',
    bgGrad:     'linear-gradient(145deg,rgba(34,197,94,.08),rgba(16,185,129,.04),rgba(34,197,94,.06))',
    glowHover:  '0 0 0 1px rgba(34,197,94,.18), 0 0 16px rgba(34,197,94,.07), 0 12px 40px rgba(0,0,0,.4)',
    badgeBg:    'rgba(34,197,94,.12)', badgeColor:'#4ade80', badgeBorder:'rgba(34,197,94,.2)',
    dotColor:   '#4ade80',
    headingCls: '',  // plain green
    headingColor:'#4ade80',
    lpaBg:      'rgba(34,197,94,.08)', lpaColor:'#4ade80', lpaBorder:'rgba(34,197,94,.12)',
    chipBg:     'rgba(34,197,94,.06)', chipColor:'#16a34a', chipBorder:'rgba(34,197,94,.1)',
  },
];

export default function OutcomeCards() {
  return (
    <section className="px-[52px] py-[36px] border-b border-[rgba(255,255,255,.06)]">
      {/* Title */}
      <div className="flex items-center gap-[10px] mb-[18px]">
        <span className="font-mono text-[11px] tracking-[.1em] uppercase text-ou-text3">
          What consistent execution unlocks
        </span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,.06)]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[14px] max-[900px]:grid-cols-1">
        {cards.map((c, i) => (
          <OutcomeCard key={c.variant} card={c} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}

function OutcomeCard({ card: c, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, boxShadow: c.glowHover }}
      className="rounded-[16px] p-[22px_20px] relative overflow-hidden cursor-default transition-all duration-[300ms]"
      style={{ background: c.bgGrad, border: `1px solid ${c.borderColor}` }}
    >
      {/* Background glow orb */}
      {c.variant === 'gold' && (
        <div
          className="absolute pointer-events-none rounded-full"
          style={{
            top: '-50%', right: '-20%',
            width: 200, height: 200,
            background: 'radial-gradient(circle,rgba(245,158,11,.08),transparent 70%)',
          }}
        />
      )}

      {/* Badge */}
      <div
        className="inline-flex items-center gap-[5px] font-mono text-[9px] tracking-[.1em] uppercase px-[9px] py-[3px] rounded-full mb-[14px] font-medium"
        style={{ background: c.badgeBg, color: c.badgeColor, border: `1px solid ${c.badgeBorder}` }}
      >
        <span className="w-[5px] h-[5px] rounded-full" style={{ background: c.dotColor }} />
        {c.badge}
      </div>

      {/* Emoji */}
      <span className="text-[28px] mb-[10px] block leading-[1]">{c.emoji}</span>

      {/* Condition */}
      <div className="font-mono text-[9.5px] text-ou-text3 mb-[10px] tracking-[.02em]">
        {c.condition}
        <span className="text-ou-text2">{c.condSpan}</span>
      </div>

      {/* Heading */}
      <div
        className={`text-[15px] font-bold tracking-[-0.02em] mb-[6px] leading-[1.3] ${c.headingCls}`}
        style={c.headingColor ? { color: c.headingColor } : {}}
      >
        {c.heading}
      </div>

      {/* Desc */}
      <div className="text-[11.5px] text-ou-text3 leading-[1.65]">{c.desc}</div>

      {/* Company chips */}
      <div className="flex flex-wrap gap-[5px] mt-[10px]">
        {c.companies.map((co) => (
          <span
            key={co}
            className="font-mono text-[9px] px-[7px] py-[2px] rounded-[4px] font-medium tracking-[.04em]"
            style={{ background: c.chipBg, color: c.chipColor, border: `1px solid ${c.chipBorder}` }}
          >
            {co}
          </span>
        ))}
      </div>

      {/* LPA badge */}
      <div
        className="mt-[12px] font-mono text-[11px] font-medium px-[10px] py-[5px] rounded-[6px] inline-block"
        style={{ background: c.lpaBg, color: c.lpaColor, border: `1px solid ${c.lpaBorder}` }}
      >
        {c.lpa}
      </div>

      {/* Target */}
      <div className="mt-[18px] pt-[14px] border-t border-[rgba(255,255,255,.06)] text-center">
        <div className="font-mono text-[9px] tracking-[.1em] text-ou-text3 uppercase mb-[4px]">
          Target
        </div>
        <div className="grad-text text-[13px] font-bold">
          Before August 15, 2026 🇮🇳
        </div>
      </div>
    </motion.div>
  );
}
