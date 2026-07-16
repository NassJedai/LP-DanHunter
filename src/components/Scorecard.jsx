import { useEffect, useMemo, useRef, useState } from 'react'
import { Container, SectionHeading, Reveal, Button } from './ui'
import { Icon } from './Icon'
import { FreeGuide } from './FreeGuide'
import { BOOKING_URL } from '../data/content'
import {
  QUESTIONS,
  OPTIONS,
  CATEGORY_ORDER,
  CATEGORY_INFO,
  BANDS,
  CATEGORY_MAX,
} from '../data/scorecard'

const RING_CIRCUMFERENCE = 490

/* Score → colour for the per-category bars */
function barColor(pct) {
  if (pct < 50) return 'var(--color-red)'
  if (pct < 75) return 'var(--color-gold)'
  return '#4fd07a'
}

/* ---------------------------------------------------------------- Intro */
function Intro({ onStart }) {
  const META = [
    { icon: 'clock', label: 'About 2 minutes' },
    { icon: 'check', label: 'No jargon' },
    { icon: 'shield', label: 'Personalised result' },
  ]
  return (
    <div className="flex flex-col justify-center">
      <div className="mb-3.5 text-center text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-[#ff6a70]">
        Free · DH Tervuren
      </div>
      <h3 className="display-face mb-4 text-center text-[clamp(1.8rem,4.5vw,2.6rem)] text-white">
        The Performance &amp; Health <em className="not-italic text-red">Scorecard</em>
      </h3>
      <p className="mx-auto mb-6 max-w-[44ch] text-center text-[1.05rem] text-txt/75">
        Twelve quick questions. Get your score across energy, recovery, training and more — and see the one area to
        focus on first.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-5 text-[0.85rem] text-muted">
        {META.map((m) => (
          <span key={m.label} className="inline-flex items-center gap-2">
            <Icon name={m.icon} className="h-4 w-4 text-gold" />
            {m.label}
          </span>
        ))}
      </div>
      <Button as="button" type="button" onClick={onStart} className="w-full">
        Start my scorecard
        <Icon name="arrow" className="h-[18px] w-[18px]" strokeWidth={2.5} />
      </Button>
    </div>
  )
}

/* ---------------------------------------------------------------- Quiz */
function Quiz({ idx, answers, fading, onPick, onNext, onBack }) {
  const q = QUESTIONS[idx]
  const isLast = idx === QUESTIONS.length - 1
  return (
    <div className="flex flex-1 flex-col">
      <div className="h-1.5 overflow-hidden rounded-full bg-txt/10">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-red),#ff6a70)] transition-[width] duration-300 ease-out"
          style={{ width: `${(idx / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <div className="mb-6 mt-2 text-right text-[0.78rem] font-semibold text-muted">
        Question {idx + 1} of {QUESTIONS.length}
      </div>

      <div
        className={`flex flex-1 flex-col justify-center transition-opacity duration-150 ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="mb-2.5 text-[0.74rem] font-extrabold uppercase tracking-[0.12em] text-gold">{q.c}</div>
        <div className="mb-6 text-[1.35rem] font-bold leading-[1.25] text-white">{q.t}</div>
        <div className="grid gap-2.5">
          {OPTIONS.map(([label, value]) => {
            const selected = answers[idx] === value
            return (
              <button
                key={label}
                type="button"
                onClick={() => onPick(value)}
                aria-pressed={selected}
                className={`flex w-full items-center gap-3 rounded-[14px] border-[1.5px] px-[18px] py-[15px] text-left text-[1rem] transition-colors ${
                  selected
                    ? 'border-red bg-red/12 text-white'
                    : 'border-txt/12 bg-card text-txt/90 hover:border-red/50'
                }`}
              >
                <span
                  className={`relative h-5 w-5 shrink-0 rounded-full border-2 ${
                    selected ? 'border-red' : 'border-muted'
                  }`}
                >
                  {selected && <span className="absolute inset-[3px] rounded-full bg-red" />}
                </span>
                {label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className={`rounded-full border-[1.5px] border-txt/12 px-6 py-4 font-bold text-txt/70 transition-colors hover:border-txt/40 hover:text-white ${
            idx === 0 ? 'invisible' : ''
          }`}
        >
          Back
        </button>
        <Button
          as="button"
          type="button"
          onClick={onNext}
          disabled={answers[idx] === null}
          className="flex-1 disabled:cursor-not-allowed disabled:opacity-35 disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:brightness-100"
        >
          {isLast ? 'See my score' : 'Next'}
        </Button>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Email gate */
function Gate({ onReveal }) {
  const [email, setEmail] = useState('')

  /* TODO(CRM): replace this stub with your GoHighLevel form/webhook.
     `email` and the answers are available to push into your CRM. */
  const submit = (e) => {
    e.preventDefault()
    onReveal(email)
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="mb-3.5 text-center text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-[#ff6a70]">
        Almost there
      </div>
      <h3 className="display-face mb-4 text-center text-[1.9rem] text-white">
        Where should we send your <em className="not-italic text-red">scorecard?</em>
      </h3>
      <p className="mx-auto mb-6 max-w-[44ch] text-center text-[1.05rem] text-txt/75">
        Enter your email and we'll reveal your full result — your score, your category breakdown, and where to focus
        first.
      </p>
      <form onSubmit={submit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          aria-label="Your email"
          className="mb-3.5 w-full rounded-[14px] border-[1.5px] border-txt/12 bg-card px-[18px] py-4 text-center text-[1rem] text-white placeholder:text-muted focus:border-red focus:outline-none"
        />
        <Button as="button" type="submit" className="w-full">
          Reveal my scorecard
        </Button>
        <small className="mt-3.5 block text-center text-[0.8rem] text-muted">
          Free. We'll also send occasional health &amp; training tips — unsubscribe anytime.
        </small>
      </form>
    </div>
  )
}

/* ---------------------------------------------------------------- Result */
function Result({ answers }) {
  const { pct, band, cats, lowest } = useMemo(() => {
    const cats = {}
    QUESTIONS.forEach((q, i) => {
      cats[q.c] = (cats[q.c] || 0) + (answers[i] || 0)
    })
    const total = Object.values(cats).reduce((a, b) => a + b, 0)
    const pct = Math.round((total / (QUESTIONS.length * 4)) * 100)

    let band = BANDS[0]
    BANDS.forEach((b) => {
      if (pct >= b.min) band = b
    })

    // First category with the lowest score wins (ties keep display order)
    let lowest = null
    let lowVal = Infinity
    CATEGORY_ORDER.forEach((k) => {
      const v = cats[k] || 0
      if (v < lowVal) {
        lowVal = v
        lowest = k
      }
    })
    return { pct, band, cats, lowest }
  }, [answers])

  // Animate the ring, the counting number and the bars once mounted
  const [ringOffset, setRingOffset] = useState(RING_CIRCUMFERENCE)
  const [shown, setShown] = useState(0)
  const [barsIn, setBarsIn] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setRingOffset(RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * pct) / 100)
      setBarsIn(true)
    }, 80)
    return () => clearTimeout(t)
  }, [pct])

  useEffect(() => {
    if (pct === 0) return
    const step = Math.max(1, Math.ceil(pct / 28))
    const iv = setInterval(() => {
      setShown((n) => {
        const next = n + step
        if (next >= pct) {
          clearInterval(iv)
          return pct
        }
        return next
      })
    }, 30)
    return () => clearInterval(iv)
  }, [pct])

  return (
    <div>
      <div className="text-center text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-[#ff6a70]">
        Your result
      </div>

      {/* Score ring */}
      <div className="mt-4 flex flex-col items-center">
        <div className="relative h-[180px] w-[180px]">
          <svg width="180" height="180" viewBox="0 0 180 180" className="-rotate-90">
            <circle cx="90" cy="90" r="78" fill="none" stroke="rgba(236,236,239,.1)" strokeWidth="14" />
            <circle
              cx="90"
              cy="90"
              r="78"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={RING_CIRCUMFERENCE}
              strokeDashoffset={ringOffset}
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#e1141e" />
                <stop offset="1" stopColor="#ff6a70" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <b className="font-display text-[3rem] leading-none text-white">{shown}</b>
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-muted">out of 100</span>
          </div>
        </div>
      </div>

      {/* Band */}
      <div className="mb-1.5 mt-4 text-center">
        <b className="font-display text-[1.8rem] uppercase text-gold">{band.t}</b>
        <p className="mx-auto mt-1.5 max-w-[46ch] text-[1rem] text-txt/78">{band.d}</p>
      </div>

      {/* Category bars */}
      <div className="my-[26px] grid gap-3.5">
        {CATEGORY_ORDER.map((k) => {
          const p = Math.round(((cats[k] || 0) / CATEGORY_MAX) * 100)
          return (
            <div key={k}>
              <div className="mb-1.5 flex justify-between text-[0.9rem]">
                <b className="font-bold text-white">{k}</b>
                <span className="text-muted tabular-nums">{p}%</span>
              </div>
              <div className="h-[9px] overflow-hidden rounded-full bg-txt/10">
                <div
                  className="h-full rounded-full transition-[width] duration-700 ease-out"
                  style={{ width: barsIn ? `${p}%` : 0, background: barColor(p) }}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Focus area */}
      <div className="mb-6 rounded-[14px] border border-gold/30 bg-gold/10 px-5 py-[18px]">
        <div className="mb-2 text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-gold">
          Focus here first
        </div>
        <h4 className="mb-1.5 text-[1.15rem] font-bold text-white">{lowest}</h4>
        <p className="text-[0.96rem] text-txt/80">{CATEGORY_INFO[lowest]}</p>
      </div>

      {/* Conversion CTA */}
      <div className="border-t border-txt/12 pt-6 text-center">
        <p className="mb-[18px] text-[1.02rem] text-txt/80">
          This is the surface.{' '}
          <strong className="text-white">The in-person Performance &amp; Health Assessment maps the full picture</strong>{' '}
          — body composition, movement and the signals behind your score — and turns it into a plan.
        </p>
        <Button href={BOOKING_URL} className="w-full">
          Book my €100 assessment
          <Icon name="arrow" className="h-[18px] w-[18px]" strokeWidth={2.5} />
        </Button>
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- Section */
export function Scorecard() {
  const [stage, setStage] = useState('intro') // intro | quiz | gate | result
  const [answers, setAnswers] = useState(() => Array(QUESTIONS.length).fill(null))
  const [idx, setIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const panelRef = useRef(null)
  // Lock while a question is cross-fading, so fast/double clicks can't skip
  // a question or leave the panel stuck mid-fade.
  const transitioning = useRef(false)

  const pick = (value) =>
    setAnswers((prev) => {
      const next = [...prev]
      next[idx] = value
      return next
    })

  // Fade the question block out, swap, fade back in
  const go = (nextIdx) => {
    if (transitioning.current) return
    transitioning.current = true
    setFading(true)
    setTimeout(() => {
      setIdx(nextIdx)
      setFading(false)
      transitioning.current = false
    }, 170)
  }

  const next = () => {
    if (answers[idx] === null) return
    if (idx < QUESTIONS.length - 1) go(idx + 1)
    else setStage('gate')
  }

  const reveal = (email) => {
    // eslint-disable-next-line no-console
    console.log('Scorecard lead:', { email, answers })
    setStage('result')
  }

  // Keep the panel in view when the stage changes (results are long)
  useEffect(() => {
    if (stage === 'intro') return
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [stage])

  return (
    <section id="scorecard" className="scroll-mt-24 bg-paper2 py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Not ready to book yet?"
            title="Score yourself in 2 minutes."
            lead="Get a feel for the DH approach before you commit. Answer twelve quick questions and see exactly where to focus first — free, no obligation."
          />
        </Reveal>

        <Reveal className="mx-auto mt-10 flex min-h-[560px] max-w-[660px] flex-col rounded-[22px] border border-txt/12 bg-[linear-gradient(180deg,#1c1c22,#141419)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:p-[30px]">
          <div ref={panelRef} className="flex flex-1 flex-col">
            {stage === 'intro' && <Intro onStart={() => setStage('quiz')} />}
            {stage === 'quiz' && (
              <Quiz
                idx={idx}
                answers={answers}
                fading={fading}
                onPick={pick}
                onNext={next}
                onBack={() => idx > 0 && go(idx - 1)}
              />
            )}
            {stage === 'gate' && <Gate onReveal={reveal} />}
            {stage === 'result' && <Result answers={answers} />}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <FreeGuide />
        </Reveal>
      </Container>
    </section>
  )
}
