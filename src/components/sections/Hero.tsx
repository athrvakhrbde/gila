import { motion } from "framer-motion";
import { consultHref, CTA_LABEL_HERO, hasConsultLink, images } from "../../lib/constants";
import { fadeUp, stagger } from "../../lib/motion";
import { Button } from "../ui/Button";

export function Hero() {
  const href = consultHref();

  return (
    <header className="hero-scrim relative overflow-hidden" data-nav-theme="dark" id="home">
      <div className="container-site hero-inner">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.h1 className="display text-balance text-fg-onDark" variants={fadeUp}>
            Doctor-led care for <em>metabolic health.</em>
          </motion.h1>
          <motion.p className="hero-desc mt-4 text-pretty" variants={fadeUp}>
            Weight loss and PCOS programmes, built for life in India.
          </motion.p>
          <motion.div className="mt-7" variants={fadeUp}>
            {hasConsultLink ? (
              <Button href={href} size="lg" animated={false}>
                {CTA_LABEL_HERO}
              </Button>
            ) : (
              <Button href="#consult" size="lg" animated={false} className="w-full sm:w-auto">
                How to book
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={images.hero}
          alt=""
          className="hero-image absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      </div>
    </header>
  );
}
