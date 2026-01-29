import { useEffect, useRef } from "react"
import { heroIntro } from "./heroAnimations"
import HeroBackground from "./HeroBackground"
import Button from "../../ui/Button"

export default function Hero() {
  const ref = useRef()

  useEffect(() => heroIntro(ref.current), [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* 3D Canvas Layer */}
      <HeroBackground />

      {/* Depth Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#020617_90%)] z-0" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none" />

      {/* Main Content Card */}
      <div
        ref={ref}
        className="relative z-10 px-6 py-16 md:px-16 md:py-24 text-center"
      >
        {/* Decorative HUD Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        
        <span className="block mb-4 text-cyan-500 font-mono text-xs md:text-sm tracking-[0.5em] uppercase animate-pulse">
          System.Initialize(2026)
        </span>

        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase leading-none italic">
          NovaTech <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">
            Fest
          </span>
        </h1>

        <p className="mt-8 text-zinc-400 text-sm md:text-xl max-w-xl mx-auto font-light leading-relaxed tracking-wide">
          A 48-hour immersive odyssey where <span className="text-white">code meets creativity</span>. 
          The benchmark for next-gen innovation starts here.
        </p>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <Button className="group relative overflow-hidden bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:text-white transition-colors duration-500">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-cyan-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Button>
          
          <div className="hidden md:block w-12 h-[1px] bg-zinc-800" />
          
          <button className="text-zinc-500 hover:text-cyan-400 transition-colors font-mono text-xs tracking-widest uppercase">
            [ View Schedule ]
          </button>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute bottom-10 left-10 hidden lg:block font-mono text-[10px] text-zinc-600 space-y-1">
        <p>LAT: 40.7128° N</p>
        <p>LONG: 74.0060° W</p>
      </div>
    </section>
  )
}