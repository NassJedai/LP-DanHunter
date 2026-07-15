import { Container, SectionHeading, Reveal } from './ui'
import { steps } from '../data/content'

export function Process() {
  return (
    <section id="process" className="bg-paper2 py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="How your assessment works" title="60 minutes that change your trajectory." />
        </Reveal>

        <div className="mt-10 grid gap-[22px] min-[820px]:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal
              key={s.num}
              delay={i * 80}
              className="relative rounded-brand border border-ink/12 bg-white p-7"
            >
              <div className="mb-1.5 font-display text-[2.4rem] leading-none text-red">{s.num}</div>
              <div className="mb-3 text-[0.76rem] font-extrabold uppercase tracking-[0.08em] text-muted">{s.when}</div>
              <h3 className="mb-2.5 text-[1.18rem] font-bold">{s.title}</h3>
              <p className="text-[0.96rem] text-[#3a3d44]">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal
          as="p"
          className="mx-auto mt-[34px] max-w-[62ch] text-center text-[1.12rem] font-semibold text-ink"
        >
          We're not "testing" you. We're reading the signals your body is sending — so we can build the right support
          around you.
        </Reveal>
      </Container>
    </section>
  )
}
