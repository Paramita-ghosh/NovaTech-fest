import { useEffect, useRef } from "react"
import { tracksReveal } from "./tracksAnimations"
import TrackCard from "./TrackCard"

const trackData = [
  { id: "01", title: "AI & ML", desc: "Architect neural networks and autonomous agents that redefine intelligence.", icon: "◈" },
  { id: "02", title: "Web3", desc: "Build trustless protocols and decentralized finance solutions for the new web.", icon: "⬡" },
  { id: "03", title: "Cybersecurity", desc: "Engineer impenetrable defenses and offensive security tools for global data.", icon: "◬" },
  { id: "04", title: "Open Innovation", desc: "Break the mold. Combine disparate techs to solve humanity's weirdest problems.", icon: "◌" }
]

export default function Tracks() {
  const containerRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = tracksReveal(containerRef.current)
      return () => ctx.revert()
    }, 100);

    return () => clearTimeout(timer);
  }, [])

  return (
    <section id="tracks" className="relative py-20 px-6 bg-[#020617] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-cyan-500 font-mono text-xs tracking-[0.5em] uppercase font-bold">Selection.Protocol</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-sm">Tracks</span>
            </h2>
          </div>
          <div className="text-right hidden md:block">
          </div>
        </div>

        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trackData.map((track) => (
            <TrackCard key={track.title} {...track} />
          ))}
        </div>
      </div>
    </section>
  )
}