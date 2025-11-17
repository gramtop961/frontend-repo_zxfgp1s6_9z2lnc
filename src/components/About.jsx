import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About({ palette }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', { x: -60, opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.about-image', start: 'top 80%' } })
      gsap.from('.about-text', { x: 60, opacity: 0, duration: 0.8, scrollTrigger: { trigger: '.about-text', start: 'top 80%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="about-image rounded-2xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1713742628722-b5068de6b211?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjMzNTQ1OTR8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="About FashionONE" className="w-full h-[360px] object-cover" />
        </div>
        <div className="about-text">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: palette.secondary }}>About FashionONE</h2>
          <p className="text-gray-700 mb-4">Delivering comprehensive ERP solutions for the garment industry.</p>
          <p className="text-gray-700">Trusted by industry leaders. 10+ years experience. Cutting-edge automation.</p>
        </div>
      </div>
    </section>
  )
}
