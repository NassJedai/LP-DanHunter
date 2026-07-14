import { Container, Button, Reveal } from './ui'
import { Icon } from './Icon'

export function FinalCta() {
  return (
    <section className="bg-[radial-gradient(120%_130%_at_20%_0%,#1c1c22,var(--color-bg)_62%,#08080a)] py-[74px] text-center text-txt">
      <Container>
        <Reveal as="h2" className="display-face mx-auto mb-[18px] max-w-[20ch] text-[clamp(2.1rem,4.5vw,3.4rem)]">
          Stop forcing it. <em className="not-italic text-red">Start progressing.</em>
        </Reveal>
        <Reveal as="p" delay={80} className="mx-auto mb-8 max-w-[54ch] text-[1.12rem] text-txt/75">
          One assessment. Sixty minutes. A clear picture of what's holding you back — and what will finally move you
          forward. Your body is sending signals. Come decode them with us.
        </Reveal>
        <Reveal delay={140}>
          <Button href="#book" className="text-[1.1rem]! px-10! py-[19px]!">
            Book my Performance &amp; Health Assessment
            <Icon name="arrow" className="h-[18px] w-[18px]" strokeWidth={2.5} />
          </Button>
        </Reveal>
        <div className="mt-[22px] text-[0.86rem] text-txt/55">
          €100 · no commitment · Tervuren · limited slots this week
        </div>
      </Container>
    </section>
  )
}
