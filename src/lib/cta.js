import { createContext, useContext } from 'react'
import { BOOKING_URL } from '../data/content'

// The conversion action shared sections (top bar, studio, footer, mobile bar…)
// point to. The main page uses these defaults; /visit overrides them with
// WhatsApp through <CtaProvider>.
const CtaContext = createContext({
  href: BOOKING_URL,
  label: 'Book my assessment',
  short: 'Book — €100',
  mobile: 'Book my assessment — €100',
  topbarMeta: 'Performance & Health Assessment · Tervuren',
  icon: 'arrow',
  // Language switcher links ({ code, href, current }) — only the /visit pages set it.
  languages: [],
})

export const CtaProvider = CtaContext.Provider
export const useCta = () => useContext(CtaContext)
