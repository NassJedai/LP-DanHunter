import { Container, SectionHeading, Reveal, MediaPlaceholder } from './ui'

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
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <MediaPlaceholder
                badge="Before / after"
                icon="camera"
                ratio="4/5"
                tone="light"
                title="Client transformation"
                note="Side-by-side, same pose & lighting. Portrait 4:5. Written client consent required."
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
