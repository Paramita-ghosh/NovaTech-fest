import { useEffect, useState } from "react"

export default function Footer() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour12: false }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="relative py-20 bg-[#020617] border-t border-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center mb-16">

          <div className="hidden md:flex flex-col gap-2 font-mono text-[10px] text-zinc-600 uppercase tracking-widest">
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              Nexus Core: Online
            </p>
            <p>Global_Timecode: {time || "00:00:00"}</p>
            <p>Innovation_Level: MAXIMUM</p>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-black text-white italic tracking-tighter mb-4">
              NOVATECH <span className="text-cyan-500">NEXUS</span>
            </h2>

            <p className="text-xs text-zinc-500 font-mono tracking-[0.35em] uppercase mb-8">
              Mission Cycle 2026 Complete
            </p>

            <p className="text-[11px] text-zinc-600 font-mono mb-10 leading-relaxed">
              The systems powered down.<br />
              The ideas launched into the future.<br />
              This was only the beginning.
            </p>

            <div className="flex justify-center gap-8">
              {['X_Network', 'LinkedIn_Node', 'GitHub_Repo'].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="group relative text-xs font-mono text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  <span className="relative z-10">{link}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-500 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <button className="relative px-8 py-3 bg-transparent border border-cyan-500/50 text-cyan-400 font-mono text-xs uppercase tracking-[0.25em] overflow-hidden group">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                Reconnect Next Cycle
              </span>
              <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            </button>
            <p className="text-[9px] text-zinc-700 font-mono">
              ACCESS_PORTAL_STANDBY
            </p>
          </div>

        </div>

        <div className="flex items-center justify-between border-t border-zinc-900 pt-8 opacity-20">
          <div className="h-1 w-1/3 bg-gradient-to-r from-cyan-500 to-transparent" />
          <div className="h-1 w-4 bg-zinc-800 rounded-full" />
          <div className="h-1 w-1/3 bg-gradient-to-l from-cyan-500 to-transparent" />
        </div>
      </div>
    </footer>
  )
}
