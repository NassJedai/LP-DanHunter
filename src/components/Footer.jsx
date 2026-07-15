import { Container } from './ui'
import { Logo } from './Logo'
import { BOOKING_URL } from '../data/content'

export function Footer() {
  return (
    <footer className="bg-bg pb-10 pt-11 text-txt/70">
      <Container className="grid gap-7 min-[720px]:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo height={76} className="mb-4" />
          <p className="text-[0.95rem] leading-[1.9]">
            Personal training, performance &amp; health. We start with you, then build the right strategy around you.
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-white">Opening hours</h4>
          <p className="text-[0.95rem] leading-[1.9]">
            Monday – Friday: 06:00 – 21:00
            <br />
            Saturday &amp; Sunday: 06:30 – 15:00
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-white">DH — Tervuren</h4>
          <p className="text-[0.95rem] leading-[1.9]">
            Brusselsesteenweg 15B
            <br />
            3080 Tervuren, Belgium
            <br />
            <a href="tel:+3226872160" className="transition-colors hover:text-red">
              +32 (0)2 687 21 60
            </a>
          </p>
          <p className="mt-2.5">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] transition-colors hover:text-red"
            >
              → Book my assessment
            </a>
          </p>
        </div>
      </Container>
      <Container className="mt-[30px]">
        <div className="border-t border-txt/12 pt-5 text-center text-[0.82rem] text-txt/45">
          © {new Date().getFullYear()} DH — Do It For You · Performance &amp; Health Assessment, Tervuren. All rights
          reserved.
        </div>
      </Container>
    </footer>
  )
}
