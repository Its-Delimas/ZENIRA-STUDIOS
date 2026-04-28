import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </div>
  )
}