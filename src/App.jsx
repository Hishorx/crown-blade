import { useState } from 'react'
import DemoBanner from './components/DemoBanner'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-gold px-5 py-3 font-semibold text-black focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <div inert={menuOpen}>
        <DemoBanner />
      </div>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* While the mobile menu is open, the rest of the page is inert so focus stays in the menu. */}
      <main id="main" tabIndex={-1} className="outline-none" inert={menuOpen}>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <div inert={menuOpen}>
        <Footer />
      </div>
      <WhatsAppButton hidden={menuOpen} />
    </>
  )
}
