export default function TrackCard({ id, title, desc, icon }) {
  return (
    <div className="group relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer bg-white/5">

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-[#0A0F1E]/95 backdrop-blur-2xl p-8 rounded-2xl h-full flex flex-col justify-between border border-white/10 shadow-2xl">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]" />

        <div>
          <div className="flex justify-between items-center mb-10">
            <span className="text-3xl text-white/10 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
              {icon}
            </span>
          </div>
          
          <h3 className="text-2xl font-black text-white mb-4 group-hover:translate-x-2 transition-transform duration-300 tracking-tight italic uppercase">
            {title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover:text-zinc-300 transition-colors">
            {desc}
          </p>
        </div>

        <div className="mt-12 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <div className="h-[1px] w-12 bg-gradient-to-r from-cyan-500 to-transparent" />
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-[0.2em] font-bold">
            Access_Track
          </span>
        </div>
      </div>
    </div>
  )
}