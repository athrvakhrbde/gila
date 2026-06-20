import { useEffect, useState } from "react";

export type NavTheme = "light" | "dark";

export function useNavTheme() {
  const [theme, setTheme] = useState<NavTheme>("dark");

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;

      const navBar = document.querySelector(".nav-bar");
      const rect = navBar?.getBoundingClientRect();
      const sampleY = (rect?.bottom ?? 72) + 8;
      const sampleX = window.innerWidth / 2;

      const stack = document.elementsFromPoint(sampleX, sampleY);
      const section = stack.find(
        (el) => el instanceof HTMLElement && el.dataset.navTheme
      ) as HTMLElement | undefined;

      const next = section?.dataset.navTheme as NavTheme | undefined;
      if (next) setTheme(next);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return theme;
}
