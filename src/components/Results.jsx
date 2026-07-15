import { Container, SectionHeading, Reveal } from './ui'
import jackie from '../assets/transformations/jackie.webp'
import matt from '../assets/transformations/matt.webp'
import lucy from '../assets/transformations/lucy.webp'
import cody from '../assets/transformations/cody.webp'
import chantal from '../assets/transformations/chantal.webp'

// Real member before/after photos (shared with permission). Grouped by aspect
// ratio so each grid row stays visually even: 5:4 landscape first, then 1:1.
const TRANSFORMATIONS = [
  { src: jackie, name: 'Jackie', ratio: '5 / 4' },
  { src: matt, name: 'Matt', ratio: '5 / 4' },
  { src: lucy, name: 'Lucy', ratio: '5 / 4' },
  { src: cody, name: 'Cody', ratio: '1 / 1' },
  { src: chantal, name: 'Chantal', ratio: '1 / 1' },
]

export function Results() {
  return (
    <section id="results" className="py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Real transformations"
            title="Results you can see."
            lead="Real members, real progress — shared with their permission. Not the point of the assessment, but proof the system works."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 min-[560px]:grid-cols-2 min-[820px]:grid-cols-3">
          {TRANSFORMATIONS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 80}
              className="overflow-hidden rounded-brand border border-ink/12 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <img
                src={t.src}
                alt={`${t.name} — before and after transformation at DH Tervuren`}
                loading="lazy"
                className="w-full"
                style={{ aspectRatio: t.ratio, objectFit: 'cover' }}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
