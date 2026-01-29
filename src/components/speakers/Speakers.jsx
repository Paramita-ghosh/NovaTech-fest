import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import SpeakerCard from "./SpeakerCard"

gsap.registerPlugin(ScrollTrigger)

const speakers = [
  { 
    name: "Alex Carter", 
    role: "Google AI Lead", 
    alias: "ALX_01",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" 
  },
  { 
    name: "Maya Singh", 
    role: "Meta CTO", 
    alias: "MYA_02",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop" 
  },
  { 
    name: "Ryan Park", 
    role: "Startup Founder", 
    alias: "RYN_03",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" 
  }
]

export default function Speakers() {
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".speaker-title", {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="speakers" ref={sectionRef} className="py-30 px-6 bg-[#020617] relative overflow-hidden">
      <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden xl:block pointer-events-none">
        <span className="text-zinc-800 font-mono text-xs tracking-[1em] uppercase">Architecture.Leadership.Future</span>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="speaker-title mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
            Elite <span className="text-cyan-500">Speakers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((s, i) => (
            <SpeakerCard key={s.name} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}