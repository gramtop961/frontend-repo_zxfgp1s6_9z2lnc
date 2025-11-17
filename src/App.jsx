import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Partners from './components/Partners'
import CTA from './components/CTA'
import Footer from './components/Footer'

const palette = {
  primary: '#2168de',
  secondary: '#4a5ca2',
  background: '#ffffff',
  accent: '#ff8e3c'
}

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Geist, Inter, sans-serif', background: palette.background }}>
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl" style={{ color: palette.secondary }}>FashionONE</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#home" className="hover:opacity-80">Home</a>
            <a href="#about" className="hover:opacity-80">About Us</a>
            <a href="#features" className="hover:opacity-80">FashionONE</a>
            <a href="#partners" className="hover:opacity-80">Our Partners</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <div id="home"><Hero palette={palette} /></div>
        <div id="features"><Features palette={palette} /></div>
        <div id="about"><About palette={palette} /></div>
        <div id="partners"><Partners palette={palette} /></div>
        <div id="contact"><CTA palette={palette} /></div>
      </main>

      <Footer palette={palette} />
    </div>
  )
}
