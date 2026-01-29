import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const reveal = el => {
  gsap.from(el, {
    y: 120,
    opacity: 0,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: el,
      start: "top 80%"
    }
  })
}
