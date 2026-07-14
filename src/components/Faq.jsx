import { useState } from 'react'
import { Container, SectionHeading, Reveal } from './ui'
import { faqs } from '../data/content'

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-ink/12 bg-white">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[1.05rem] font-bold transition-colors ${
          open ? 'text-red-d' : 'text-ink'
        }`}
      >
        <span>{q}</span>
        <span className="relative h-6 w-6 shrink-0" aria-hidden="true">
          <span className="absolute left-[3px] top-[11px] h-[2.5px] w-[18px] rounded-sm bg-red" />
          <span
            className={`absolute left-[11px] top-[3px] h-[18px] w-[2.5px] rounded-sm bg-red transition-transform duration-200 ${
              open ? 'rotate-90 opacity-0' : ''
            }`}
          />
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-[22px] text-[1rem] text-[#3a3d44]">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const [openSet, setOpenSet] = useState(() => new Set(faqs.map((f, i) => (f.defaultOpen ? i : null)).filter((v) => v !== null)))

  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <section className="bg-paper2 py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="FAQ — Performance & Health Assessment"
            title="The questions we get asked."
          />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[760px] gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={(i % 3) * 50}>
              <FaqItem q={f.q} a={f.a} open={openSet.has(i)} onToggle={() => toggle(i)} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
