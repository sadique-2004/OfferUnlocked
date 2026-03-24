import React from 'react';
import { motion } from 'framer-motion';

/* ───────────────────────────────────────────── */

const STYLES = `
  .oc-section {
    padding: 40px 20px;
    background: #05050e;
    border-bottom: 1px solid rgba(255,255,255,.06);
  }

  .oc-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .oc-card {
    border-radius: 14px;
    padding: 20px;
    border: 1px solid rgba(255,255,255,.1);
  }

  .oc-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .oc-card-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  @media(max-width:700px){
    .oc-card-row {
      grid-template-columns: 1fr;
    }
  }
`;

/* ✅ FIXED: No JSX inside object */
const TIERS = [
  {
    id: 't1',
    tag: 'Tier I · Peak Outcome',
    heading: 'FAANG & Dream Companies',
    desc: 'Elite product-based opportunities where preparation meets opportunity.',
    condition: 'Execution at peak level + timing',
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Apple'],
    outcome: 'Elite Offer',
    color: '#fbbf24'
  },
  {
    id: 't2',
    tag: 'Tier II · Strong Outcome',
    heading: 'Product-Based Companies',
    desc: 'Consistent execution leads to strong product-based roles.',
    condition: 'Daily consistent execution',
    companies: ['Razorpay', 'Swiggy', 'CRED'],
    outcome: 'Strong Offer',
    color: '#8b5cf6'
  },
  {
    id: 't3',
    tag: 'Tier III · Guaranteed Floor',
    heading: 'Service-Based Companies',
    desc: 'Even the floor guarantees a solid start.',
    condition: 'Showing up consistently',
    companies: ['TCS', 'Infosys', 'Wipro'],
    outcome: 'Solid Offer',
    color: '#22c55e'
  }
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

/* ───────────────────────────────────────────── */

function TierCard({ t, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="oc-card"
      style={{ borderColor: t.color }}
    >
      <div style={{ color: t.color, fontSize: '10px', marginBottom: 8 }}>
        {t.tag}
      </div>

      <h3 style={{ fontSize: '16px', marginBottom: 6 }}>
        {t.heading}
      </h3>

      <p style={{ fontSize: '12px', opacity: 0.7 }}>
        {t.desc}
      </p>

      <div style={{ fontSize: '11px', marginTop: 8 }}>
        <b>Condition:</b> {t.condition}
      </div>

      <div style={{ marginTop: 10, fontSize: '11px' }}>
        {t.companies.join(', ')}
      </div>

      <div style={{
        marginTop: 12,
        padding: '6px 10px',
        border: `1px solid ${t.color}`,
        borderRadius: 6,
        display: 'inline-block',
        fontSize: '11px'
      }}>
        {t.outcome}
      </div>
    </motion.div>
  );
}

/* ───────────────────────────────────────────── */

export default function OutcomeCards() {
  return (
    <>
      <style>{STYLES}</style>

      <section className="oc-section">

        <div className="oc-header">
          <span style={{ fontSize: '12px', opacity: 0.6 }}>
            What consistent execution unlocks
          </span>
          <span style={{ fontSize: '12px', color: '#fbbf24' }}>
            Aug 15, 2026
          </span>
        </div>

        <div className="oc-grid">
          <TierCard t={TIERS[0]} delay={0.1} />

          <div className="oc-card-row">
            <TierCard t={TIERS[1]} delay={0.2} />
            <TierCard t={TIERS[2]} delay={0.3} />
          </div>
        </div>

      </section>
    </>
  );
}