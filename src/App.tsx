import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Helper component for animated number as per prompt.txt rules
function CounterNum({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(value)
  const prevValue = useRef(value)

  useEffect(() => {
    if (prevValue.current !== value) {
      const start = prevValue.current
      const end = value
      const duration = 500
      let startTime: number | null = null

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setDisplayValue(Math.floor(progress * (end - start) + start))
        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          prevValue.current = value
        }
      }
      requestAnimationFrame(animate)
    }
  }, [value])

  return <span className="font-heading text-4xl md:text-6xl neon-text">{displayValue.toString().padStart(4, '0')}</span>
}

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container crt-flicker">
      <div className="cyber-grid" />
      <div className="scanlines" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 shadow-neon">
            <img src={viteLogo} className="w-6 h-6" alt="Vite logo" />
          </div>
          <span className="font-heading font-bold text-primary tracking-widest hidden sm:block">AXON_GENESIS</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {['SYSTEM', 'NETWORK', 'ARCHIVE'].map((item) => (
            <a key={item} href="#" className="text-sm font-heading hover:text-primary transition-colors glitch">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="px-3 py-1 bg-accent/20 border border-accent/50 text-[10px] text-accent font-heading rounded-full badge-glow animate-pulse">
            SYSTEM ONLINE — VITE + REACT
          </span>
        </div>
      </header>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Hero Section */}
        <section className="mb-20 animate-float">
          <div className="inline-block mb-4 px-4 py-1 bg-primary/10 border-l-4 border-primary text-primary text-xs font-heading uppercase tracking-widest">
            Protocol initialized
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight neon-text glitch" data-text="GET STARTED">
            GET STARTED
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 font-body">
            Edit <code className="text-primary bg-primary/10 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR. 
            Experience the next generation of UI automation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => setCount((c) => c + 1)}
              className="group relative px-10 py-4 bg-primary text-background font-heading font-bold rounded-none skew-x-[-15deg] hover:bg-white transition-all btn-pulse"
            >
              <div className="skew-x-[15deg] flex items-center gap-2">
                <span>COUNT_</span>
                <span className="opacity-50">|</span>
                <span className="group-hover:neon-text transition-all">{count}</span>
              </div>
            </button>
            
            <div className="glass p-4 rounded-xl flex items-center gap-4 border-accent/30">
              <span className="text-xs font-heading text-muted uppercase">Data stream:</span>
              <CounterNum value={count} />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-20">
          {[
            { title: 'GLASSMORPHISM', desc: 'Layered translucent surfaces with advanced backdrop filters.' },
            { title: 'NEON GLOW', desc: 'Custom shadow utilities powered by Tailwind 4 @theme.' },
            { title: 'MOBILE FIRST', desc: 'Responsive design architecture for any terminal size.' }
          ].map((feature, i) => (
            <div key={i} className="glass p-8 rounded-2xl text-left group hover:border-primary/50 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl mb-6 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary group-hover:neon-text transition-all">{feature.title}</h3>
              <p className="text-muted leading-relaxed font-body">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Documentation Section */}
        <section className="w-full mb-20">
          <h2 className="text-3xl font-bold mb-10 neon-text-accent">DOCUMENTATION</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group">
              <img src={viteLogo} className="w-16 h-16 drop-shadow-[0_0_15px_rgba(100,108,255,0.5)] group-hover:scale-110 transition-transform" alt="Vite logo" />
              <span className="font-heading text-sm group-hover:text-primary transition-colors">VITE</span>
            </a>
            <a href="https://react.dev" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-4 group">
              <img src={reactLogo} className="w-16 h-16 drop-shadow-[0_0_15px_rgba(97,218,251,0.5)] group-hover:scale-110 transition-transform animate-[spin_20s_linear_infinite]" alt="React logo" />
              <span className="font-heading text-sm group-hover:text-primary transition-colors">REACT</span>
            </a>
          </div>
        </section>

        {/* Social Section */}
        <section className="glass p-10 rounded-3xl w-full border-accent/20">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {['GITHUB', 'DISCORD', 'X_TWITTER', 'BLUESKY'].map((platform) => (
              <a key={platform} href="#" className="flex items-center gap-2 font-heading text-sm text-muted hover:text-accent transition-all group">
                <span className="w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-neon-accent" />
                {platform}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 py-10 border-t border-primary/10 glass mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted text-sm font-body">
            © 2026 <span className="text-primary font-heading">MICROTRONIC</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse [animation-delay:0.5s]" />
            <div className="w-2 h-2 bg-muted rounded-full" />
          </div>
          <p className="text-[10px] font-heading text-muted uppercase tracking-[0.3em]">
            Built with AXON Template Engine
          </p>
        </div>
      </footer>
    </div>
  )
}
