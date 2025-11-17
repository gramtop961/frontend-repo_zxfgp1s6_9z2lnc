import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const layers = [
  'https://images.unsplash.com/photo-1533022139390-e31c488d69e2?q=80&w=1600&auto=format&fit=crop', // cotton
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop', // textile machines
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop'  // fashion/mill
]

export default function Hero({ palette }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-title', { y: -30, opacity: 0, duration: 0.8, delay: 0.3 })
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.8 }, '-=0.4')
        .from('.hero-cta', { scale: 0.8, opacity: 0, duration: 0.5 }, '-=0.4')

      const parallax = gsap.utils.toArray('.parallax-layer')
      parallax.forEach((el, i) => {
        gsap.to(el, {
          yPercent: (i + 1) * -15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=1200',
            scrub: true,
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Parallax layers */}
      {layers.map((src, i) => (
        <div key={i} className="parallax-layer absolute inset-0" style={{ zIndex: i + 1 }}>
          <img src={src} alt="textile" className="w-full h-full object-cover opacity-70" />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-white py-20">
          <h1 className="hero-title text-4xl md:text-6xl font-[800] leading-tight">
            ERP for Garment Mills
          </h1>
          <p className="hero-sub mt-4 text-lg md:text-xl text-white/85">
            Modernize your textile operations with innovative ERP software.
          </p>
          <div className="mt-8">
            <a href="/contact.html" className="hero-cta inline-block px-6 py-3 rounded-full font-semibold shadow-lg"
               style={{ backgroundColor: palette.accent, color: '#0b0b0b' }}>
              Get Started
            </a>
          </div>
        </div>

        {/* Decorative yarn path */}
        <div className="relative hidden md:block">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-white/80 backdrop-blur">
            <div className="absolute inset-0">
              <svg viewBox="0 0 600 400" className="w-full h-full">
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor={palette.primary} />
                    <stop offset="100%" stopColor={palette.accent} />
                  </linearGradient>
                </defs>
                <path id="thread" d="M 0 200 C 120 80, 240 320, 360 200 S 520 80, 600 200" fill="none" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" />
                <circle r="10" fill={palette.accent}>
                  <animateMotion dur="8s" repeatCount="indefinite" path="M 0 200 C 120 80, 240 320, 360 200 S 520 80, 600 200" />
                </circle>
              </svg>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-sm text-gray-700">
              FashionONE ERP delivers real-time control across mills, dyeing, cutting, stitching and dispatch.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
