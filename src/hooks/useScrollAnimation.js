import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useScrollAnimation(ref, options = {}) {
  useEffect(() => {
    if (!ref.current) return

    gsap.from(ref.current, {
      y: 120,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%"
      },
      ...options
    })
  }, [])
}
