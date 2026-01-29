export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="mb-20 text-center">
      {subtitle && (
        <span className="font-mono text-[10px] text-cyan-500 uppercase tracking-[0.5em] mb-4 block animate-pulse">
          // {subtitle}
        </span>
      )}
      <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none drop-shadow-2xl">
        {children}
      </h2>
      <div className="mt-6 flex justify-center gap-2">
        <div className="h-1 w-12 bg-cyan-500" />
        <div className="h-1 w-2 bg-zinc-800" />
      </div>
    </div>
  )
}