import { motion } from 'framer-motion';

export default function BrandStatement() {
  return (
    <section
      className="px-[52px] py-[40px] border-b border-[rgba(255,255,255,.06)] text-center"
      style={{
        background:
          'radial-gradient(ellipse 50% 70% at 50% 50%, rgba(139,92,246,.025) 0%, transparent 70%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-[clamp(14px,1.6vw,17px)] text-ou-text2 leading-[2.1] max-w-[480px] mx-auto"
      >
        OfferUnlocked is built on one simple idea —
        <span className="grad-text font-bold text-[1.08em] block my-[0.4rem] tracking-[-0.02em]">
          Consistency beats everything when it actually matters.
        </span>
        This is not about motivation. This is about execution.
        <span className="font-mono text-[.78em] text-ou-text3 tracking-[.07em] block mt-[0.8rem]">
          // show up. every single day.
        </span>
      </motion.div>
    </section>
  );
}
