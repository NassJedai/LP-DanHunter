import { Container } from './ui'
import { Logo } from './Logo'
import { useCta } from '../lib/cta'
import { useCopy } from '../lib/locale'

export function Footer() {
  const cta = useCta()
  const { footer: t } = useCopy()
  return (
    <footer className="bg-bg pb-10 pt-11 text-txt/70">
      <Container className="grid gap-7 min-[720px]:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo height={76} className="mb-4" />
          <p className="text-[0.95rem] leading-[1.9]">{t.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-white">{t.hoursTitle}</h4>
          <p className="text-[0.95rem] leading-[1.9]">
            {t.weekdays}
            <br />
            {t.weekend}
          </p>
        </div>
        <div>
          <h4 className="mb-3.5 text-[0.8rem] font-extrabold uppercase tracking-[0.1em] text-white">DH — Tervuren</h4>
          <p className="text-[0.95rem] leading-[1.9]">
            Brusselsesteenweg 15B
            <br />
            {t.city}
            <br />
            <a href="tel:+3226872160" className="transition-colors hover:text-red">
              +32 (0)2 687 21 60
            </a>
          </p>
          <p className="mt-2.5">
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] transition-colors hover:text-red"
            >
              → {cta.label}
            </a>
          </p>
        </div>
      </Container>
      <Container className="mt-[30px]">
        <div className="border-t border-txt/12 pt-5 text-center text-[0.82rem] text-txt/45">
          © {new Date().getFullYear()} {t.rights}
        </div>
      </Container>
    </footer>
  )
}
