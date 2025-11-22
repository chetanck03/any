import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Home, About, CustomCRM } from './pages'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/complaint-management-system" element={<CustomCRM />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
