import { Container, SectionHeading, Reveal, Button } from './ui'
import { Icon } from './Icon'
import { includes } from '../data/content'

export function Value() {
  return (
    <section id="offer" className="py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="The offer"
            title="Why €100 — and not free."
            lead="Because this isn't a sales demo. It's a genuine, in-depth analysis with a coach who takes the time to understand you. You walk away with clarity and concrete priorities — whether you continue with us or not."
          />
        </Reveal>

        <Reveal className="mt-10 grid overflow-hidden rounded-3xl border border-ink/12 shadow-[0_18px_50px_rgba(0,0,0,0.1)] min-[820px]:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white p-[38px]">
            <h3 className="mb-[18px] text-[1.5rem] font-bold">What your assessment includes</h3>
            <ul className="grid gap-3.5">
              {includes.map((it) => (
                <li key={it.b} className="flex gap-3 text-[1rem]">
                  <Icon name="check" className="mt-0.5 h-[21px] w-[21px] shrink-0 text-red-d" strokeWidth={2.5} />
                  <span>
                    <b className="font-bold">{it.b}</b> {it.rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center bg-bg p-[38px] text-center text-txt">
            <div className="mb-3.5 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-gold">
              Your investment
            </div>
            <div className="mb-1 font-display text-[3.4rem] tracking-[0.02em] text-white">€100</div>
            <div className="mb-6 text-[0.92rem] text-txt/62">
              60 minutes · in-studio in Tervuren · limited slots each week
            </div>
            <Button href="#book" className="mb-3.5 w-full">
              Book my assessment
            </Button>
            <small className="text-[0.78rem] text-txt/50">
              No commitment · You leave with clarity, whatever you decide next.
            </small>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
