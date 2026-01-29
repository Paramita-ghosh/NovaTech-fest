import { useEffect, useRef } from "react"
import { timelineReveal } from "./timelineAnimations"
import TimelineItem from "./TimelineItem"

const timelineData = [
  { 
    time: "Day 1 — 10:00 AM", 
    title: "Nexus Launch Protocol", 
    sub: "Opening Ceremony • Vision keynote + holographic reveal" 
  },
  { 
    time: "Day 1 — 12:00 PM", 
    title: "Code Genesis Phase", 
    sub: "Hackathon systems go live • Innovation unlocked" 
  },
  { 
    time: "Day 2 — 10:00 AM", 
    title: "Neural Sync Mentorship", 
    sub: "Live problem-solving with AI leaders & founders" 
  },
  { 
    time: "Day 2 — 06:00 PM", 
    title: "Final Transmission", 
    sub: "Project upload window closes • Judging begins" 
  },
  { 
    time: "Day 2 — 08:00 PM", 
    title: "Ascension Ceremony", 
    sub: "Awards, funding offers & future roadmap reveal" 
  }
]


export default function Timeline() {
  const sectionRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    const ctx = timelineReveal(sectionRef.current, listRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="event-timeline" ref={sectionRef} className="relative py-20 px-6 bg-[#020617] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
            Schedule <span className="text-cyan-500">.LOG</span>
          </h2>
          <div className="h-[2px] w-24 bg-cyan-900 mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-900 -translate-x-1/2 overflow-hidden">
             <div className="timeline-progress w-full h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 origin-top scale-y-0" />
          </div>

          <div ref={listRef} className="space-y-12 relative z-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}