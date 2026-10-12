import { CtaProvider } from './lib/cta'
import { COPY, LocaleProvider } from './lib/locale'
import { whatsappUrl } from './data/content'
import { TopBar } from './components/TopBar'
import { VisitHero, VisitSteps, VisitFinalCta } from './components/Visit'
import { Strip } from './components/Strip'
import { HeroVideoBand } from './components/Problem'
import { Equipment } from './components/Equipment'
import { Differentiators } from './components/Differentiators'
import { Testimonials } from './components/Testimonials'
import { Results } from './components/Results'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { MobileCta } from './components/MobileCta'

// Studio-visit landing pages: no pricing, single WhatsApp CTA, one per language.
const PATHS = { en: '/visit/', fr: '/visit/fr/', nl: '/visit/nl/' }

const ctaFor = (locale) => ({
  ...COPY[locale].visit.cta,
  href: whatsappUrl(COPY[locale].visit.whatsappMessage),
  icon: 'whatsapp',
  languages: Object.entries(PATHS).map(([code, href]) => ({
    code: code.toUpperCase(),
    href,
    current: code === locale,
  })),
})

const CTAS = { en: ctaFor('en'), fr: ctaFor('fr'), nl: ctaFor('nl') }

export default function VisitApp({ locale = 'en' }) {
  const copy = COPY[locale]
  return (
    <LocaleProvider value={copy}>
      <CtaProvider value={CTAS[locale]}>
        <TopBar />
        <main>
          <VisitHero />
          <Strip />
          <HeroVideoBand />
          <Equipment />
          <Differentiators />
          <Testimonials />
          <Results />
          <VisitSteps />
          <Faq items={copy.visit.faqs} eyebrow={copy.visit.faqEyebrow} />
          <VisitFinalCta />
        </main>
        <Footer />
        <MobileCta />
      </CtaProvider>
    </LocaleProvider>
  )
}
