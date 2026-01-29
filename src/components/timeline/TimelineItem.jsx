export default function TimelineItem({ time, title, sub, index }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Spacer for Desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Center Point */}
      <div className="absolute left-[15px] md:left-1/2 w-8 h-8 -translate-x-1/2 flex items-center justify-center">
        <div className="w-3 h-3 bg-black border-2 border-cyan-500 rounded-full z-10 shadow-[0_0_10px_rgba(6,182,212,1)]" />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
        <div className="relative p-6 bg-zinc-900/40 border border-white/5 backdrop-blur-md rounded-2xl hover:border-cyan-500/30 transition-colors group">
          <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-100 transition-opacity">
            <span className="font-mono text-[10px] text-cyan-400">0{index + 1}</span>
          </div>
          
          <p className="font-mono text-xs text-cyan-500 mb-2 uppercase tracking-widest">{time}</p>
          <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">{title}</h3>
          <p className="text-zinc-500 text-sm italic font-light">{sub}</p>
        </div>
      </div>
    </div>
  )
}