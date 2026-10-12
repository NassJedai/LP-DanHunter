import { createContext, useContext } from 'react'
import { en } from '../i18n/en'
import { fr } from '../i18n/fr'
import { nl } from '../i18n/nl'

export const COPY = { en, fr, nl }

// Copy for the shared sections. Defaults to English, so the main page — which
// never sets a provider — renders exactly as before.
const LocaleContext = createContext(en)

export const LocaleProvider = LocaleContext.Provider
export const useCopy = () => useContext(LocaleContext)
