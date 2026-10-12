import { Container, SectionHeading, Reveal } from './ui'
import { Icon } from './Icon'
import { CtaButton } from './CtaButton'
import { useCopy } from '../lib/locale'

// Sections specific to the studio-visit pages (/visit, /visit/fr, /visit/nl).
// Copy comes from the page's language; every CTA goes through <CtaButton>,
// which those pages point at WhatsApp.

export function VisitHero() {
  const { visit: t } = useCopy()
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_130%_at_82%_0%,#1c1c22_0%,var(--color-bg)_58%,#08080a_100%)] text-txt">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_52%_at_88%_16%,rgba(225,20,30,0.22),transparent_62%),radial-gradient(45%_40%_at_4%_94%,rgba(245,200,97,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative z-[2] grid items-center gap-9 py-11 min-[900px]:grid-cols-[1.15fr_0.85fr] min-[900px]:gap-[52px] min-[900px]:pb-[70px] min-[900px]:pt-[60px]">
        <div>
          <Reveal className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-red/45 bg-red/14 px-[15px] py-2 text-[0.82rem] font-bold tracking-[0.02em] text-[#ff6a70]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-red animate-pulse-ring" />
            {t.badge}
          </Reveal>

          <Reveal as="h1" delay={60} className="display-face mb-5 text-[clamp(2.55rem,5.4vw,4.4rem)]">
            {t.titleA}
            <em className="block not-italic text-red">{t.titleB}</em>
          </Reveal>

          <Reveal as="p" delay={120} className="mb-7 max-w-[34rem] text-[1.16rem] text-txt/82">
            {t.lede} <strong className="font-bold text-white">{t.ledeStrong}</strong>
          </Reveal>

          <Reveal delay={180} className="mb-6 flex flex-wrap items-center gap-4">
            <CtaButton />
            <span className="text-[0.86rem] text-txt/60">{t.ctaNote}</span>
          </Reveal>

          <Reveal
            delay={240}
            className="flex flex-wrap items-center gap-x-[26px] gap-y-4 border-t border-txt/12 pt-[26px]"
          >
            {t.trust.map((item) => (
              <div key={item.label} className="flex flex-col leading-[1.15]">
                {item.stars ? (
                  <span className="text-[1rem] tracking-[2px] text-gold">★★★★★</span>
                ) : (
                  <b className="font-display text-[1.5rem] tracking-[0.02em] text-white">{item.value}</b>
                )}
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-txt/60">{item.label}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal
          as="aside"
          delay={120}
          className="relative rounded-brand border border-txt/12 bg-[linear-gradient(180deg,#1d1d23,#141419)] p-[30px] shadow-brand"
        >
          <div className="mb-3 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-gold">{t.cardKicker}</div>
          <h3 className="mb-1.5 text-[1.5rem] font-bold text-white">{t.cardTitle}</h3>
          <ul className="my-[22px] grid gap-[11px]">
            {t.includes.map((item) => (
              <li key={item} className="flex gap-[11px] text-[0.96rem] text-txt/88">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-red" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <CtaButton className="w-full" />
          <p className="mt-3.5 text-center text-[0.8rem] text-txt/55">{t.address}</p>
        </Reveal>
      </Container>
    </section>
  )
}

export function VisitSteps() {
  const { visit: t } = useCopy()
  return (
    <section className="bg-paper2 py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={t.stepsEyebrow} title={t.stepsTitle} />
        </Reveal>

        <div className="mt-10 grid gap-[22px] min-[820px]:grid-cols-3">
          {t.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="rounded-brand border border-ink/12 bg-white p-7">
              <div className="mb-3 font-display text-[2.4rem] leading-none text-red">{String(i + 1).padStart(2, '0')}</div>
              <h3 className="mb-2.5 text-[1.18rem] font-bold">{s.title}</h3>
              <p className="text-[0.96rem] text-[#3a3d44]">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <CtaButton />
        </Reveal>
      </Container>
    </section>
  )
}

export function VisitFinalCta() {
  const { visit: t } = useCopy()
  return (
    <section className="bg-[radial-gradient(120%_130%_at_20%_0%,#1c1c22,var(--color-bg)_62%,#08080a)] py-[74px] text-center text-txt">
      <Container>
        <Reveal as="h2" className="display-face mx-auto mb-[18px] max-w-[20ch] text-[clamp(2.1rem,4.5vw,3.4rem)]">
          {t.finalA}
          <em className="not-italic text-red">{t.finalB}</em>
        </Reveal>
        <Reveal as="p" delay={80} className="mx-auto mb-8 max-w-[54ch] text-[1.12rem] text-txt/75">
          {t.finalBody}
        </Reveal>
        <Reveal delay={140}>
          <CtaButton className="px-10! py-[19px]! text-[1.1rem]!" />
        </Reveal>
        <div className="mt-[22px] text-[0.86rem] text-txt/55">{t.finalMicro}</div>
      </Container>
    </section>
  )
}
