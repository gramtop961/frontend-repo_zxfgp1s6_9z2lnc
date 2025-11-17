import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const logos = [
  'https://dummyimage.com/160x60/ced4da/343a40&text=Partner+1',
  'https://dummyimage.com/160x60/ced4da/343a40&text=Partner+2',
  'https://dummyimage.com/160x60/ced4da/343a40&text=Partner+3',
  'https://dummyimage.com/160x60/ced4da/343a40&text=Partner+4',
  'https://dummyimage.com/160x60/ced4da/343a40&text=Partner+5',
]

export default function Partners({ palette }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.logo', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: 'top 85%' }
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10" style={{ color: palette.secondary }}>Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {logos.map((src, i) => (
            <div key={i} className="logo bg-white/90 border border-gray-100 rounded-xl p-4 flex items-center justify-center">
              <img src={src} alt={`Partner ${i+1}`} className="opacity-80 hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
