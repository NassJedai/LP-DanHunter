import { Container, Button, Reveal } from './ui'
import { Icon } from './Icon'

const OFFER_ITEMS = [
  'Complete online pre-assessment (15–20 min)',
  'InBody body-composition analysis',
  'Movement & structural-balance screen',
  'Your priorities + our clear recommendation',
]

const TRUST = [
  { stars: true, label: '5.0 on Google' },
  { value: '97', label: '5-star reviews · Tervuren' },
  { value: '7 days', label: 'Tervuren · 06:00–21:00' },
]

export function Hero({ slotsLeft = 6 }) {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_130%_at_82%_0%,#1c1c22_0%,var(--color-bg)_58%,#08080a_100%)] text-txt">
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(58%_52%_at_88%_16%,rgba(225,20,30,0.22),transparent_62%),radial-gradient(45%_40%_at_4%_94%,rgba(245,200,97,0.08),transparent_60%)]"
        aria-hidden="true"
      />
      <Container className="relative z-[2] grid items-center gap-9 py-11 min-[900px]:grid-cols-[1.15fr_0.85fr] min-[900px]:gap-[52px] min-[900px]:pb-[70px] min-[900px]:pt-[60px]">
        {/* Copy column */}
        <div>
          <Reveal
            as="div"
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-red/45 bg-red/14 px-[15px] py-2 text-[0.82rem] font-bold tracking-[0.02em] text-[#ff6a70]"
          >
            <span className="h-2 w-2 rounded-full bg-red animate-pulse-ring" />
            Only {slotsLeft} assessment slots left this week
          </Reveal>

          <Reveal as="h1" delay={60} className="display-face mb-5 text-[clamp(2.55rem,5.4vw,4.4rem)]">
            You're not lacking discipline.
            <em className="block not-italic text-red">You're missing a system.</em>
          </Reveal>

          <Reveal as="p" delay={120} className="mb-7 max-w-[34rem] text-[1.16rem] text-txt/82">
            A <strong className="font-bold text-white">60-minute Performance &amp; Health Assessment</strong> with a
            coach, here in Tervuren. We pinpoint exactly what's blocking your progress — then build the right strategy
            around you. <strong className="font-bold text-white">This isn't a workout. It's your real starting point.</strong>
          </Reveal>

          <Reveal as="div" delay={180} className="mb-6 flex flex-wrap items-center gap-4">
            <Button href="#book">
              Book my assessment
              <Icon name="arrow" className="h-[18px] w-[18px]" strokeWidth={2.5} />
            </Button>
            <span className="text-[0.86rem] text-txt/60">€100 · 60 min · no commitment</span>
          </Reveal>

          <Reveal
            as="div"
            delay={240}
            className="flex flex-wrap items-center gap-x-[26px] gap-y-4 border-t border-txt/12 pt-[26px]"
          >
            {TRUST.map((t, i) => (
              <div key={i} className="flex flex-col leading-[1.15]">
                {t.stars ? (
                  <span className="text-[1rem] tracking-[2px] text-gold">★★★★★</span>
                ) : (
                  <b className="font-display text-[1.5rem] tracking-[0.02em] text-white">{t.value}</b>
                )}
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.04em] text-txt/60">
                  {t.label}
                </span>
              </div>
            ))}
          </Reveal>
        </div>

        {/* Offer card */}
        <Reveal
          as="aside"
          delay={120}
          className="relative order-2 rounded-brand border border-txt/12 bg-[linear-gradient(180deg,#1d1d23,#141419)] p-[30px] shadow-brand min-[900px]:order-none"
        >
          <div className="mb-3 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-gold">
            Your starting point
          </div>
          <h3 className="mb-1.5 text-[1.5rem] font-bold text-white">Performance &amp; Health Assessment</h3>
          <div className="my-4 flex items-baseline gap-2.5">
            <b className="font-display text-[3rem] tracking-[0.02em] text-white">€100</b>
            <span className="text-[1.05rem] text-txt/45">60 min · in-studio with your coach</span>
          </div>
          <ul className="my-[22px] grid gap-[11px]">
            {OFFER_ITEMS.map((item) => (
              <li key={item} className="flex gap-[11px] text-[0.96rem] text-txt/88">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-red" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>
          <Button href="#book" className="w-full">
            Reserve my slot
          </Button>
          <p className="mt-3.5 text-center text-[0.8rem] text-txt/55">
            No commitment · You leave with a clear plan — whether you continue with us or not.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
