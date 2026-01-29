import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const tracksReveal = (container) => {
  if (!container) return;

  const ctx = gsap.context(() => {
    gsap.set(container.children, { opacity: 0, y: 50, filter: "blur(10px)" });

    gsap.to(container.children, {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      stagger: 0.15,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container,
        start: "top 90%", 
        toggleActions: "play none none reverse",
      }
    })
  }, container)

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);

  return ctx
}