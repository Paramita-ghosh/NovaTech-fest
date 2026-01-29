export default function Button({ children, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`group relative mt-8 px-10 py-4 font-mono text-xs uppercase tracking-[0.3em] font-bold overflow-hidden transition-all duration-300 ${className}`}>

      <span className="absolute inset-0 bg-cyan-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      
      <span className="absolute inset-0 border border-cyan-500/50 group-hover:border-white transition-colors" />
      
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 group-hover:border-black transition-colors" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 group-hover:border-black transition-colors" />

      <span className="relative z-10 text-cyan-400 group-hover:text-black transition-colors flex items-center gap-2">
        {children}
        <span className="text-[10px] group-hover:translate-x-1 transition-transform">→</span>
      </span>
    </button>
  )
}