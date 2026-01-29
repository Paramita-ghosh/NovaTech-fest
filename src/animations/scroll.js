import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const smoothScrollTo = (target) => {
  const element = document.querySelector(target);
  
  if (!element) {
    console.warn(`Target element ${target} not found.`);
    return;
  }

  gsap.to(window, {
    duration: 1.5,
    scrollTo: {
      y: target,
      autoKill: true,
    },
    ease: "expo.inOut",
  });
};