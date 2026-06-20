import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavTheme } from "../../hooks/useNavTheme";
import { BRAND, consultHref, CTA_LABEL, hasConsultLink, navLinks } from "../../lib/constants";
import { augenEase } from "../../lib/motion";
import { Button } from "../ui/Button";
import { GilaLogo } from "../ui/GilaLogo";

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const theme = useNavTheme();
  const href = consultHref();

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className={`nav-shell ${sticky ? "is-sticky" : ""} ${visible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      data-theme={theme}
    >
      <div className="container-site nav-bar">
        <a href="#" className="logo-circle" aria-label={`${BRAND} home`}>
          <GilaLogo />
        </a>

        <nav className="nav-pill" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="nav-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-menu-icon" aria-hidden="true">
              <span />
            </span>
          </button>

          <Button href={href} size="sm" animated={false} className="nav-cta">
            <span className="nav-cta-full">{CTA_LABEL}</span>
            <span className="nav-cta-short">Book</span>
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: augenEase }}
          >
            <nav aria-label="Mobile">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="nav-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              {hasConsultLink && (
                <a href={href} className="nav-mobile-link" onClick={() => setMenuOpen(false)}>
                  {CTA_LABEL}
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="section-dark border-t border-border-onDark">
      <div className="container-site footer-inner">
        <GilaLogo className="footer-logo h-[15px] w-auto" />

        <div className="footer-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="footer-link">
              {l.label}
            </a>
          ))}
          {hasConsultLink && (
            <a href={consultHref()} className="footer-link">
              Book consult
            </a>
          )}
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} {BRAND}</p>
      </div>
    </footer>
  );
}
