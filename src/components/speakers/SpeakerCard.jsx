import { useRef } from "react"

export default function SpeakerCard({ name, role, alias, img, index }) {
  const cardRef = useRef()

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = (clientX - left) / width - 0.5
    const y = (clientY - top) / height - 0.5
    
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`
  }

  const handleMouseLeave = () => {
    cardRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`
  }

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group transition-transform duration-300 ease-out"
    >
      <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-xl relative overflow-hidden group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl">
        
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/30 transition-all duration-700" />
          
          <div 
            className="w-full h-full bg-zinc-800 relative z-10 overflow-hidden border border-white/10"
            style={{ clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-cyan-500/20 font-black text-5xl group-hover:opacity-0 transition-opacity duration-300 uppercase italic">
              {alias.split('_')[0][0]}
            </div>

            <img 
              src={img} 
              alt={name}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
            />

            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,245,255,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%] pointer-events-none z-20" />
            
            <div className="absolute inset-0 bg-cyan-400 mix-blend-overlay opacity-0 group-hover:animate-pulse pointer-events-none z-30" />
          </div>
        </div>

        <div className="text-center relative z-10">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-cyan-400 transition-colors italic">
            {name}
          </h3>
          <p className="text-zinc-500 text-xs font-mono mt-2 lowercase tracking-widest border-t border-white/5 pt-4">
            {role}
          </p>
        </div>

        <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-zinc-700 group-hover:border-cyan-500 transition-colors duration-500" />
        <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-zinc-700 group-hover:border-cyan-500 transition-colors duration-500" />
      </div>
    </div>
  )
}