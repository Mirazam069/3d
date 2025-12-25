import React from 'react'
import './App.css'
import './pages/Landing.css';
import HeroSection from './components/HeroSection'
import HowItWorksSection from "./components/HowItWorksSection"
import PricingSection from "./components/PricingSection";
import DemoSection from "./components/DemoSection";
import FaqSection from "./components/FaqSection";
import OrderSection from "./components/OrderSection";

function App() {

  return (
    <main className="hb-landing">
      {/* GLOBAL BACKGROUND */}
      <div className="hb-global-bg" aria-hidden="true">
        <div className="hb-global-grid" />
        <div className="hb-global-spot hb-global-spot-1" />
        <div className="hb-global-spot hb-global-spot-2" />
        <div className="hb-global-spot hb-global-spot-3" />

        <span className="hb-global-p hb-global-p1" />
        <span className="hb-global-p hb-global-p2" />
        <span className="hb-global-p hb-global-p3" />
        <span className="hb-global-p hb-global-p4" />
        <span className="hb-global-p hb-global-p5" />
        <span className="hb-global-p hb-global-p6" />
      </div>

      {/* CONTENT */}
      <div className="hb-global-content">
        <HeroSection />
        <HowItWorksSection />
        <PricingSection />
        <DemoSection/>
        <FaqSection />
        <OrderSection />
      </div>
    </main>
  )
}

export default App
