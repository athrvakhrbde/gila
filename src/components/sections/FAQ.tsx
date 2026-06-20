import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqCategories } from "../../lib/content";
import { augenEase } from "../../lib/motion";
import { SectionCTA } from "../ui/SectionCTA";
import { SectionShell } from "../ui/SectionShell";

type OpenState = { category: string; index: number } | null;

export function FAQ() {
  const [open, setOpen] = useState<OpenState>(null);

  const toggle = (category: string, index: number) => {
    setOpen(
      open?.category === category && open.index === index
        ? null
        : { category, index }
    );
  };

  return (
    <SectionShell
      id="faq"
      className="section-py bg-bg"
      dataNavTheme="light"
      eyebrow="FAQ"
      title="Questions answered"
    >
      <div className="faq-categories">
        {faqCategories.map((cat) => (
          <div key={cat.id}>
            <h3 className="faq-category-title">{cat.title}</h3>
            <div>
              {cat.items.map((f, i) => {
                const isOpen = open?.category === cat.id && open.index === i;
                return (
                  <div key={f.q} className="faq-item">
                    <button
                      type="button"
                      onClick={() => toggle(cat.id, i)}
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
          </div>
        ))}
      </div>
      <SectionCTA />
    </SectionShell>
  );
}
