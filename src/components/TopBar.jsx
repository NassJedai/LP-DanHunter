import { useEffect, useState } from 'react'
import { Container, Button } from './ui'
import { Logo } from './Logo'
import { BOOKING_URL } from '../data/content'

export function TopBar() {
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
        <div className="hidden text-[0.82rem] font-semibold text-muted md:block">
          Performance &amp; Health Assessment · Tervuren
        </div>
        <Button href={BOOKING_URL} variant="compact">
          Book — €100
        </Button>
      </Container>
    </header>
  )
}
