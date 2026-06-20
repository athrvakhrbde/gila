import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.replace("#", ""));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
  }, [pathname, hash]);
}
