import { useEffect, useRef } from "react"
import { aboutReveal } from "./aboutAnimations"

export default function About() {
  const sectionRef = useRef()

useEffect(() => {
  const timer = setTimeout(() => {
    aboutReveal(sectionRef.current);
  }, 100);
  
  return () => clearTimeout(timer);
}, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-48 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-left space-y-8">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">Mission Protocol 2026</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
            DECODE THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">UNTHINKABLE.</span>
          </h2>

          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl font-light">
            NovaTech Fest isn't just a hackathon; it's a <span className="text-white font-medium">high-velocity forge</span>. We unite 500+ digital architects for 48 hours of pure creation, pushing the boundaries of Web3, AI, and Spatial Computing.
          </p>

          <div className="flex gap-8 border-t border-zinc-800 pt-8">
            <div>
              <p className="text-3xl font-bold text-white tracking-tighter">48H</p>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Sprints</p>
            </div>
            <div className="w-[1px] h-12 bg-zinc-800" />
            <div>
              <p className="text-3xl font-bold text-white tracking-tighter">$25K+</p>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Prize Pool</p>
            </div>
            <div className="w-[1px] h-12 bg-zinc-800" />
            <div>
              <p className="text-3xl font-bold text-white tracking-tighter">50+</p>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Mentors</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-zinc-900/80 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-2xl">
             <div className="flex justify-between items-start mb-12">
                <div className="space-y-1">
                  <div className="h-1 w-12 bg-cyan-500" />
                  <div className="h-1 w-6 bg-cyan-800" />
                </div>
                <span className="font-mono text-xs text-zinc-600 uppercase tracking-tighter">Secure_Access//01</span>
             </div>
             
             <ul className="space-y-6">
                {[
                  { title: "Rapid Prototyping", desc: "Access to cutting-edge cloud infrastructure and hardware labs." },
                  { title: "Elite Mentorship", desc: "Direct 1-on-1s with industry giants from OpenAI, Google, and Meta." },
                  { title: "Networking Hub", desc: "Connect with venture capitalists and top-tier recruiters." }
                ].map((item, i) => (
                  <li key={i} className="group/item flex gap-4">
                    <span className="text-cyan-500 font-mono mt-1">0{i+1}.</span>
                    <div>
                      <h4 className="text-white font-bold group-hover/item:text-cyan-400 transition-colors">{item.title}</h4>
                      <p className="text-zinc-500 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </li>
                ))}
             </ul>
          </div>
        </div>
      </div>
    </section>
  )
}