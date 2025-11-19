import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Partnership from './components/Partnership'
import Industries from './components/Industries'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Partnership />
      <About />
      <Industries />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
