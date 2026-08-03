import { Container, SectionHeading, Reveal, Button } from './ui'
import { Icon } from './Icon'
import { SelfHostedVideo } from './SelfHostedVideo'
import { BOOKING_URL, EQUIPMENT_VIDEO_URL } from '../data/content'

const POINTS = [
  'The best equipment, matched to your specific goals',
  'Room to move and be coached properly — not a crowded commercial gym',
]

export function Equipment() {
  return (
    <section id="studio" className="bg-paper py-[74px]">
      <Container>
        <div className="grid items-center gap-10 min-[820px]:grid-cols-2 min-[820px]:gap-14">
          {/* Copy */}
          <Reveal>
            <SectionHeading
              eyebrow="Inside the studio"
              title="A real space. Real equipment."
              lead="The best equipment to reach your specific goals — a dedicated performance studio built for coached, structured training, not a row of machines you fight over at peak hour."
            />
            <ul className="mt-7 grid gap-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 text-[1rem] text-[#33363d]">
                  <Icon name="check" className="mt-0.5 h-[21px] w-[21px] shrink-0 text-red-d" strokeWidth={2.5} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Button href={BOOKING_URL} className="mt-8">
              Book my assessment
              <Icon name="arrow" className="h-[18px] w-[18px]" strokeWidth={2.5} />
            </Button>
          </Reveal>

          {/* Vertical video */}
          <Reveal delay={80} className="w-full max-w-[300px] justify-self-center min-[820px]:justify-self-end">
            <SelfHostedVideo
              src={EQUIPMENT_VIDEO_URL}
              title="Inside the DH studio — equipment tour"
              className="aspect-[9/16] shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
