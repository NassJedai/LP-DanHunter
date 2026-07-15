import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { Strip } from './components/Strip'
import { HeroVideoBand, Problem } from './components/Problem'
import { Differentiators } from './components/Differentiators'
import { Process } from './components/Process'
import { Testimonials } from './components/Testimonials'
import { Results } from './components/Results'
import { Value } from './components/Value'
import { Faq } from './components/Faq'
import { LeadMagnet } from './components/LeadMagnet'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'
import { MobileCta } from './components/MobileCta'
import { ExitIntentModal } from './components/ExitIntentModal'

export default function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero slotsLeft={6} />
        <Strip />
        <HeroVideoBand />
        <Problem />
        <Differentiators />
        <Process />
        <Testimonials />
        <Results />
        <Value />
        <Faq />
        <LeadMagnet />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
      <ExitIntentModal />
    </>
  )
}
