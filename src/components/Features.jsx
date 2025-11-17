import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Atom, UserCheck, Cog, Handshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Atom,
    title: 'Innovation',
    description: 'Always evolving with the latest in technology and continuous research.',
  },
  {
    icon: UserCheck,
    title: 'Ease-of-use',
    description: 'Simplifying even the most complex ERP tasks for everyone.',
  },
  {
    icon: Cog,
    title: 'Automation',
    description: 'Boosting efficiency with intelligent process automation.',
  },
  {
    icon: Handshake,
    title: 'Services',
    description: 'Expert after-sales support and tailored enterprise solutions.',
  },
]

export default function Features({ palette }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.feature-card').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.6,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%'
          }
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: palette.primary }} />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ background: palette.accent }} />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} className="feature-card group bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              whileHover={{ y: -4 }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: palette.primary, color: 'white' }}>
                <f.icon />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
