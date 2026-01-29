import gsap from "gsap"

export const pageLoader = el => {
  gsap.fromTo(
    el,
    { scaleX: 0 },
    { scaleX: 1, duration: 1.2, ease: "power4.out" }
  )
}
