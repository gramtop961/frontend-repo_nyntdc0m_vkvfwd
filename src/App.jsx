import Hero from './components/Hero'
import ProblemPromise from './components/ProblemPromise'
import Showcase from './components/Showcase'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter',_'ui-sans-serif',_system-ui] text-white">
      <Hero />
      <ProblemPromise />
      <Showcase />
      <FinalCTA />
    </div>
  )
}

export default App
