import { useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useParallax(ref, strength = 150) {
  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      y: strength,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        scrub: true
      }
    })
  }, [])
}
