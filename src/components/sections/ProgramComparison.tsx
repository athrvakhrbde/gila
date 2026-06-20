import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { comparisonRows } from "../../lib/content";
import { augenEase } from "../../lib/motion";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

export function ProgramComparison() {
  const [openRow, setOpenRow] = useState<number | null>(0);

  return (
    <SectionShell
      id="comparison"
      className="section-py bg-bg-alt"
      dataNavTheme="light"
      eyebrow="Compare"
      title="Programme comparison"
      lead="See which path fits your goals."
    >
      <div className="comparison-table hidden md:block">
        <div className="comparison-head">
          <span>Feature</span>
          <span>Weight Loss</span>
          <span>PCOS Reversal</span>
        </div>
        {comparisonRows.map((row) => (
          <div key={row.feature} className="comparison-row">
            <span className="comparison-feature">{row.feature}</span>
            <span>{row.weightLoss}</span>
            <span>{row.pcos}</span>
          </div>
        ))}
      </div>

      <div className="comparison-accordion md:hidden">
        {comparisonRows.map((row, i) => (
          <div key={row.feature} className="faq-item">
            <button
              type="button"
              onClick={() => setOpenRow(openRow === i ? null : i)}
              aria-expanded={openRow === i}
            >
              <span>{row.feature}</span>
              <motion.span
                className="shrink-0 text-xl font-light text-fg-muted"
                animate={{ rotate: openRow === i ? 45 : 0 }}
                transition={{ duration: 0.3, ease: augenEase }}
              >
                +
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openRow === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: augenEase }}
                  className="overflow-hidden"
                >
                  <div className="comparison-accordion-body">
                    <div>
                      <p className="meta-label">Weight Loss</p>
                      <p className="body-sm mt-1">{row.weightLoss}</p>
                    </div>
                    <div>
                      <p className="meta-label">PCOS Reversal</p>
                      <p className="body-sm mt-1">{row.pcos}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <SectionCTA />
    </SectionShell>
  );
}
