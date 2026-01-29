import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const timelineReveal = (section, list) => {
  let ctx = gsap.context(() => {
    
    // 1. Line Progress Animation: Ties scaleY to scroll
    gsap.to(".timeline-progress", {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: list,
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    })

    // 2. Individual Item Reveal
    const items = list.querySelectorAll(':scope > div');
    items.forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        filter: "blur(10px)",
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })
    })
  }, section)

  return ctx
}