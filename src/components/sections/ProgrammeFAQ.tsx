import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { augenEase } from "../../lib/motion";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

type FaqItem = { q: string; a: string };

export function ProgrammeFAQ({ title, items }: { title: string; items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionShell
      id="faq"
      className="section-py bg-bg-alt"
      dataNavTheme="light"
      eyebrow="FAQ"
      title={`${title} questions`}
    >
      <div>
        {items.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={f.q} className="faq-item">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span>{f.q}</span>
                <motion.span
                  className="shrink-0 text-xl font-light text-fg-muted"
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: augenEase }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: augenEase }}
                    className="overflow-hidden"
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <SectionCTA />
    </SectionShell>
  );
}
