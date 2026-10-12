import { useEffect, useState } from 'react'
import { Container } from './ui'
import { Logo } from './Logo'
import { CtaButton } from './CtaButton'
import { useCta } from '../lib/cta'

export function TopBar() {
  const cta = useCta()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-[60] text-txt backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'bg-bg/95 border-b border-txt/12 shadow-[0_6px_24px_rgba(0,0,0,0.25)]' : 'bg-bg/85 border-b border-transparent'
      }`}
    >
      <Container className="flex h-[62px] items-center justify-between gap-4">
        <Logo height={40} />
        <div className="hidden text-[0.82rem] font-semibold text-muted md:block">{cta.topbarMeta}</div>
        <div className="flex items-center gap-2.5 sm:gap-4">
          {cta.languages.length > 0 && (
            <nav aria-label="Language" className="flex items-center text-[0.75rem] font-bold tracking-[0.06em]">
              {cta.languages.map((l) => (
                <a
                  key={l.code}
                  href={l.href}
                  hrefLang={l.code.toLowerCase()}
                  aria-current={l.current ? 'page' : undefined}
                  className={`rounded-md px-1.5 py-1 transition-colors ${
                    l.current
                      ? 'text-white underline decoration-red decoration-2 underline-offset-4'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {l.code}
                </a>
              ))}
            </nav>
          )}
          <CtaButton variant="compact" arrow={false}>
            {cta.short}
          </CtaButton>
        </div>
      </Container>
    </header>
  )
}
