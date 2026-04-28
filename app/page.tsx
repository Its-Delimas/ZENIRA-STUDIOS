import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import Pricing from "./components/Pricing"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Pricing />
    </div>
  )
}