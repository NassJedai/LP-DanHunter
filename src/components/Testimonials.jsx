import { Container, SectionHeading, Reveal, MediaPlaceholder } from './ui'
import { testimonials } from '../data/content'

export function Testimonials() {
  return (
    <section className="bg-bg py-[74px] text-txt">
      <Container>
        <Reveal>
          <SectionHeading tone="dark" eyebrow="What our Tervuren members say" title="Real results. And a real community." />
        </Reveal>

        <Reveal className="mt-5 inline-flex items-center gap-3 rounded-[14px] border border-txt/12 bg-card px-[18px] py-3">
          <span className="text-[1.05rem] tracking-[2px] text-gold">★★★★★</span>
          <span className="font-display text-[1.8rem] leading-none text-white">5.0</span>
          <span className="text-[0.85rem] font-semibold text-txt/70">from 97 Google reviews · Dan Hunter, Tervuren</span>
        </Reveal>

        <div className="mt-[34px] grid grid-cols-2 gap-5 min-[560px]:max-w-[500px]">
          <Reveal>
            <MediaPlaceholder
              badge="Video review"
              icon="play"
              ratio="9/16"
              tone="dark"
              title="Client testimonial"
              note="Your member testimonial. Portrait 9:16."
            />
          </Reveal>
          <Reveal delay={80}>
            <MediaPlaceholder
              badge="Studio tour"
              icon="play"
              ratio="9/16"
              tone="dark"
              title="The studio & equipment"
              note="Presentation of the space and equipment. Portrait 9:16."
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
