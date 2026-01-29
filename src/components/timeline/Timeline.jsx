import { useEffect, useRef } from "react"
import { timelineReveal } from "./timelineAnimations"
import TimelineItem from "./TimelineItem"

const timelineData = [
  { time: "Day 1 – 10:00 AM", title: "Opening Ceremony", sub: "Grand Hall A / Livestream" },
  { time: "Day 1 – 12:00 PM", title: "Hackathon Begins", sub: "System.Initialize()" },
  { time: "Day 2 – 10:00 AM", title: "Mentorship Sessions", sub: "1-on-1 with industry leads" },
  { time: "Day 2 – 06:00 PM", title: "Final Pitch", sub: "Submission Deadline: 05:59 PM" },
  { time: "Day 2 – 08:00 PM", title: "Awards & Closing", sub: "Winners Announcement" }
]

export default function Timeline() {
  const sectionRef = useRef()
  const listRef = useRef()

  useEffect(() => {
    const ctx = timelineReveal(sectionRef.current, listRef.current)
    return () => ctx.revert()
  }, [])

  return (
    <section id="event-timeline" ref={sectionRef} className="relative py-40 px-6 bg-[#020617] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase">
            Schedule <span className="text-cyan-500">.LOG</span>
          </h2>
          <div className="h-[2px] w-24 bg-cyan-900 mx-auto mt-4" />
        </div>

        <div className="relative">
          {/* THE PROGRESS LINE: Draws on scroll */}
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