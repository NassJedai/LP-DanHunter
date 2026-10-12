import { Container, SectionHeading, Reveal } from './ui'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'
import { SelfHostedVideo } from './SelfHostedVideo'
import { EQUIPMENT_VIDEO_URL } from '../data/content'
import { useCopy } from '../lib/locale'

export function Equipment() {
  const { equipment: t } = useCopy()
  return (
    <section id="studio" className="bg-paper py-[74px]">
      <Container>
        <div className="grid items-center gap-10 min-[820px]:grid-cols-2 min-[820px]:gap-14">
          {/* Copy */}
          <Reveal>
            <SectionHeading eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
            <ul className="mt-7 grid gap-3.5">
              {t.points.map((p) => (
                <li key={p} className="flex gap-3 text-[1rem] text-[#33363d]">
                  <Icon name="check" className="mt-0.5 h-[21px] w-[21px] shrink-0 text-red-d" strokeWidth={2.5} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <CtaButton className="mt-8" />
          </Reveal>

          {/* Vertical video */}
          <Reveal delay={80} className="w-full max-w-[300px] justify-self-center min-[820px]:justify-self-end">
            <SelfHostedVideo
              src={EQUIPMENT_VIDEO_URL}
              title={t.videoTitle}
              className="aspect-[9/16] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
