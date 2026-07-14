import { Container, SectionHeading, Reveal } from './ui'
import { Icon } from './Icon'
import { LeadForm } from './LeadForm'

const CARDS = [
  {
    icon: 'scorecard',
    tag: '2-minute scorecard',
    title: 'The Performance & Health Scorecard',
    body: 'Answer a few quick questions and get your personal score across energy, recovery and training — plus the one area to focus on first.',
    magnet: 'scorecard',
    cta: 'Get my score',
    small: 'Free · takes about 2 minutes',
  },
  {
    icon: 'download',
    tag: 'Free guide',
    title: '3 Hidden Reasons Your Training Has Stalled',
    body: 'The things a generic program can’t fix — and what actually moves the needle. A short, practical read from the DH coaches.',
    magnet: 'guide',
    cta: 'Send me the guide',
    small: 'Free · instant PDF',
  },
]

export function LeadMagnet() {
  return (
    <section id="free" className="bg-paper2 py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Not ready to book yet?"
            title="Start with something free."
            lead="Get a feel for the DH approach before you commit. Pick whichever suits you — we'll email it straight over. No pressure, no obligation."
          />
        </Reveal>

        <div className="mt-10 grid gap-[22px] min-[720px]:grid-cols-2">
          {CARDS.map((c, i) => (
            <Reveal
              key={c.magnet}
              delay={i * 80}
              className="flex flex-col rounded-brand border border-ink/12 bg-white p-[30px]"
            >
              <div className="mb-4 flex h-[50px] w-[50px] items-center justify-center rounded-xl bg-paper2">
                <Icon name={c.icon} className="h-[26px] w-[26px] text-red-d" />
              </div>
              <span className="mb-2 text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-red-d">{c.tag}</span>
              <h3 className="mb-2.5 text-[1.28rem] font-bold leading-[1.15]">{c.title}</h3>
              <p className="mb-[18px] flex-1 text-[0.97rem] text-[#4a4d54]">{c.body}</p>
              <LeadForm magnet={c.magnet} cta={c.cta} />
              <small className="text-[0.8rem] text-muted">{c.small}</small>
            </Reveal>
          ))}
        </div>

        <p className="mt-[30px] text-center text-[1rem] text-[#4a4d54]">
          Prefer to skip ahead?{' '}
          <a href="#book" className="font-bold text-red-d hover:underline">
            Book your €100 assessment →
          </a>
        </p>
      </Container>
    </section>
  )
}
