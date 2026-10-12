import { Container, SectionHeading, Reveal } from './ui'
import { Icon } from './Icon'
import { YouTubeEmbed } from './YouTubeEmbed'
import { useCopy } from '../lib/locale'

const WITHOUT = [
  'A generic program copied from the internet',
  'You push hard without knowing what’s really holding you back',
  'Sleep, stress, energy and nutrition ignored',
  'Results that don’t hold over time',
]

const WITH = [
  <>We start with <b className="font-bold">you</b>: goals, lifestyle, history</>,
  'We identify exactly what’s slowing you down',
  <>Training <b className="font-bold">and</b> health, energy and recovery</>,
  'A phased plan that adapts as you progress',
]

export function Problem() {
  return (
    <section className="py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why you've stalled"
            title="The problem was never your motivation."
            lead="Most people run generic programs, followed “on instinct.” Plenty of effort, little lasting progress. At DH we do the opposite: we start with you."
          />
        </Reveal>

        <div className="mt-10 grid gap-[22px] min-[720px]:grid-cols-2">
          <Reveal className="rounded-brand border border-ink/12 bg-[#faf7f4] p-7">
            <h3 className="mb-4 flex items-center gap-2.5 text-[1.15rem] font-bold">
              <span className="rounded-full bg-[#f2dcdc] px-[11px] py-[5px] text-[0.72rem] font-extrabold uppercase tracking-[0.06em] text-[#a23b3b]">
                Without a system
              </span>
            </h3>
            <ul className="grid gap-3">
              {WITHOUT.map((t, i) => (
                <li key={i} className="flex gap-[11px] text-[0.98rem] text-[#33363d]">
                  <Icon name="x" className="mt-0.5 h-[19px] w-[19px] shrink-0 text-[#c06767]" strokeWidth={2.5} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={80} className="rounded-brand border border-ink/12 bg-white p-7">
            <h3 className="mb-4 flex items-center gap-2.5 text-[1.15rem] font-bold">
              <span className="rounded-full bg-[#e6f0da] px-[11px] py-[5px] text-[0.72rem] font-extrabold uppercase tracking-[0.06em] text-[#3f6b1f]">
                The DH method
              </span>
            </h3>
            <ul className="grid gap-3">
              {WITH.map((t, i) => (
                <li key={i} className="flex gap-[11px] text-[0.98rem] text-[#33363d]">
                  <Icon name="check" className="mt-0.5 h-[19px] w-[19px] shrink-0 text-red-d" strokeWidth={2.5} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

/* Standalone hero-video band shown between the strip and the problem section */
export function HeroVideoBand() {
  const { heroVideoTitle } = useCopy()
  return (
    <section className="pt-10">
      <Container>
        <Reveal className="overflow-hidden rounded-brand border border-ink/12 shadow-[0_18px_50px_rgba(0,0,0,0.12)]">
          <YouTubeEmbed id="UYJhKPT3tt0" title={heroVideoTitle} autoplay />
        </Reveal>
      </Container>
    </section>
  )
}
