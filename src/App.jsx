import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import './index.css'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Instagram />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
