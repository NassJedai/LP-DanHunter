import { Container, SectionHeading, Reveal } from './ui'
import { SelfHostedVideo } from './SelfHostedVideo'
import { testimonials, TESTIMONIAL_VIDEO_URL } from '../data/content'
import { useCopy } from '../lib/locale'

export function Testimonials() {
  const { testimonials: t } = useCopy()
  return (
    <section className="bg-bg py-[74px] text-txt">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow={t.eyebrow} title={t.title} />
        </Reveal>

        <Reveal className="mt-5 inline-flex items-center gap-3 rounded-[14px] border border-txt/12 bg-card px-[18px] py-3">
          <span className="text-[1.05rem] tracking-[2px] text-gold">★★★★★</span>
          <span className="font-display text-[1.8rem] leading-none text-white">5.0</span>
          <span className="text-[0.85rem] font-semibold text-txt/70">{t.rating}</span>
        </Reveal>
        {t.reviewsNote && <p className="mt-2.5 text-[0.8rem] text-txt/50">{t.reviewsNote}</p>}

        <div className="mt-[34px] max-w-[260px]">
          <Reveal>
            <SelfHostedVideo
              src={TESTIMONIAL_VIDEO_URL}
              title={t.videoTitle}
              className="aspect-[9/16]"
            />
          </Reveal>
        </div>

        <div className="mt-9 grid gap-5 min-[560px]:grid-cols-2 min-[900px]:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 70}
              className="flex flex-col rounded-brand border border-txt/12 bg-card p-6"
            >
              <div className="mb-3 tracking-[2px] text-gold">★★★★★</div>
              <p className="mb-[18px] flex-1 text-[0.97rem] text-txt/86">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(180deg,var(--color-red-bright),var(--color-red-d))] text-[1rem] font-extrabold text-white">
                  {t.initial}
                </div>
                <div>
                  <b className="block text-[0.95rem] text-white">{t.name}</b>
                  <span className="text-[0.78rem] text-txt/55">{t.meta}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
