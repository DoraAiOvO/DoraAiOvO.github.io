"use client";

import { useEffect } from "react";

export function InteractiveEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const precisePointer = window.matchMedia("(pointer: fine)");
    let frame = 0;

    root.classList.add("motion-ready");

    const updatePointer = (event: PointerEvent) => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const x = event.clientX;
        const y = event.clientY;
        root.style.setProperty("--mouse-x", `${x}px`);
        root.style.setProperty("--mouse-y", `${y}px`);
        const horizontal = x / window.innerWidth - 0.5;
        const vertical = y / window.innerHeight - 0.5;
        root.style.setProperty("--tilt-x", `${horizontal * 7}deg`);
        root.style.setProperty("--tilt-y", `${vertical * -5}deg`);
        const target = event.target as Element | null;
        root.classList.toggle(
          "cursor-over-link",
          Boolean(target?.closest("a, button, .project")),
        );
        frame = 0;
      });
    };

    if (precisePointer.matches && !reduceMotion.matches) {
      root.classList.add("cursor-enabled");
      window.addEventListener("pointermove", updatePointer, { passive: true });
    }

    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 },
    );

    reveals.forEach((element) => observer.observe(element));

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
      observer.disconnect();
      root.classList.remove("motion-ready", "cursor-enabled", "cursor-over-link");
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <span className="cursor-spark">✦</span>
      <span className="cursor-orbit" />
    </div>
  );
}
