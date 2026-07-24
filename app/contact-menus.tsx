"use client";

import { useEffect } from "react";

// The Résumé / Email menus use the native Popover API: the browser handles
// open/close, light-dismiss (tap outside), and Escape natively — including on
// iOS Safari. Popovers live in the top layer, so we position each one above
// its trigger button ourselves.
export default function ContactMenus() {
  useEffect(() => {
    const pops = Array.from(document.querySelectorAll<HTMLElement>(".menu-popover"));

    const place = (pop: HTMLElement) => {
      const btn = document.querySelector<HTMLElement>(`[popovertarget="${pop.id}"]`);
      if (!btn) return;
      const b = btn.getBoundingClientRect();
      const p = pop.getBoundingClientRect();
      const gap = 8;
      let left = b.left + b.width / 2 - p.width / 2;
      left = Math.max(gap, Math.min(left, window.innerWidth - p.width - gap));
      const top = Math.max(gap, b.top - p.height - gap);
      pop.style.left = `${left}px`;
      pop.style.top = `${top}px`;
      pop.style.opacity = "1";
    };

    const onToggle = (e: Event) => {
      const pop = e.currentTarget as HTMLElement;
      if ((e as unknown as { newState?: string }).newState === "open") place(pop);
      else pop.style.opacity = "0";
    };

    const reposition = () => {
      for (const pop of pops) {
        try {
          if (pop.matches(":popover-open")) place(pop);
        } catch {
          /* :popover-open unsupported — ignore */
        }
      }
    };

    pops.forEach((pop) => pop.addEventListener("toggle", onToggle));
    window.addEventListener("resize", reposition);
    window.addEventListener("scroll", reposition, true);
    return () => {
      pops.forEach((pop) => pop.removeEventListener("toggle", onToggle));
      window.removeEventListener("resize", reposition);
      window.removeEventListener("scroll", reposition, true);
    };
  }, []);

  return null;
}
