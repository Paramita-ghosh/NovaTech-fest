export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`relative group p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.05] hover:border-cyan-500/50 transition-all duration-500 cursor-pointer overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://res.cloudinary.com/dzv9idfvq/image/upload/v1642355554/noise_tvf9td.png')]" />
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}