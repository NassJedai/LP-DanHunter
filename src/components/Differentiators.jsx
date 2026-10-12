import { Container, SectionHeading, Reveal } from './ui'
import { CtaButton } from './CtaButton'
import { Icon } from './Icon'
import { useCopy } from '../lib/locale'

export function Differentiators() {
  const { diff: t } = useCopy()
  const [before, emphasis, after] = t.wideBody
  return (
    <section className="bg-bg py-[74px] text-txt">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow={t.eyebrow} title={t.title} lead={t.lead} />
        </Reveal>

        <div className="mt-11 grid gap-5 min-[820px]:grid-cols-3">
          {t.features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 70}
              className="group rounded-brand border border-txt/12 bg-[linear-gradient(180deg,#191920,#141419)] p-[26px] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-red/16 transition-colors group-hover:bg-red/25">
                <Icon name={f.icon} className="h-6 w-6 text-[#ff5a60]" />
              </div>
              <h3 className="mb-2.5 text-[1.14rem] font-bold text-white">{f.title}</h3>
              <p className="text-[0.95rem] text-txt/70">{f.body}</p>
            </Reveal>
          ))}

          {/* Signature wide differentiator */}
          <Reveal className="grid items-center gap-6 rounded-brand border border-red/32 bg-[linear-gradient(120deg,#241416,#181319)] p-[26px] min-[820px]:col-span-3 min-[820px]:grid-cols-[auto_1fr_auto]">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold/14">
              <Icon name="drop" className="h-6 w-6 text-gold" />
            </div>
            <div>
              <h3 className="mb-2 text-[1.14rem] font-bold text-white">{t.wideTitle}</h3>
              <p className="max-w-[56ch] text-[0.95rem] text-txt/70">
                {before}
                <em className="italic">{emphasis}</em>
                {after}
              </p>
            </div>
            <CtaButton arrow={false} className="justify-self-start min-[820px]:justify-self-auto min-[820px]:whitespace-nowrap" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
