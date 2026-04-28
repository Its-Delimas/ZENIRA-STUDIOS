import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"
import FAQ from './components/FAQ'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
      <FAQ />
    </div>
  )
}