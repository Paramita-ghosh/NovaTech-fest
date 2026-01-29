import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" })
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.4, ease: "power3" })

    const moveCursor = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const handleHover = () => gsap.to(cursor, { scale: 2.5, backgroundColor: "rgba(0, 245, 255, 0.1)", duration: 0.3 })
    const handleLeave = () => gsap.to(cursor, { scale: 1, backgroundColor: "#00f5ff", duration: 0.3 })

    window.addEventListener("mousemove", moveCursor)
    
    const targets = document.querySelectorAll('button, a, .cursor-pointer')
    targets.forEach(t => {
      t.addEventListener("mouseenter", handleHover)
      t.addEventListener("mouseleave", handleLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      targets.forEach(t => {
        t.removeEventListener("mouseenter", handleHover)
        t.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [])

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#00f5ff]"
    />
  )
}