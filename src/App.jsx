import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Partnership from './components/Partnership'
import Industries from './components/Industries'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Clients from './components/Clients'
import SoftwareProducts from './components/SoftwareProducts'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Partnership />
      <Industries />
      <Technologies />
      <SoftwareProducts/>
      <Clients/>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
