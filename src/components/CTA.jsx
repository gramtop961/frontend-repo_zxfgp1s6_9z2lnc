import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTA({ palette }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, { opacity: 0, y: 30, duration: 0.6, scrollTrigger: { trigger: ref.current, start: 'top 85%' } })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(800px 300px at 10% 0%, ${palette.primary}22, transparent), radial-gradient(800px 300px at 90% 100%, ${palette.accent}22, transparent)` }} />
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: palette.secondary }}>Ready to Optimize Your Factory?</h2>
        <p className="mt-3 text-gray-700">Contact us to schedule a free demo.</p>
        <a href="/contact.html" className="mt-8 inline-block px-6 py-3 rounded-full font-semibold shadow-lg" style={{ backgroundColor: palette.accent, color: '#0b0b0b' }}>Contact Us</a>
      </div>
    </section>
  )
}
