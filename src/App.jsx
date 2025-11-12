import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { Services, Cases, Pricing } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cases />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
