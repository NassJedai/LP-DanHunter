import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './fonts.css'
import './index.css'
import VisitApp from './VisitApp.jsx'
import { COPY } from './lib/locale'

// One entry for /visit, /visit/fr and /visit/nl — each HTML shell sets <html lang>.
const lang = document.documentElement.lang
const locale = lang in COPY ? lang : 'en'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VisitApp locale={locale} />
  </StrictMode>,
)
