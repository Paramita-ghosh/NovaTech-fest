import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const parallax = (el, strength = 120) => {
  gsap.to(el, {
    y: strength,
    scrollTrigger: {
      trigger: el,
      scrub: true
    }
  })
}
