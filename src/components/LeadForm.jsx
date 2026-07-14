import { useState } from 'react'
import { Icon } from './Icon'

/**
 * Reusable lead-capture form.
 * TODO(CRM): replace the console stub in handleSubmit with your GoHighLevel
 * form/webhook. `magnet` identifies which capture converted.
 */
export function LeadForm({ magnet, cta = 'Submit', buttonVariant = 'dark', doneTone = 'light', inputTone = 'light' }) {
  const [done, setDone] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-console
    console.log('Lead captured:', { email, magnet })
    setDone(true)
  }

  if (done) {
    return (
      <div
        className={`mb-2.5 flex items-center gap-2.5 py-3.5 text-[0.98rem] font-semibold ${
          doneTone === 'dark' ? 'justify-center text-gold' : 'text-red-d'
        }`}
      >
        <Icon name="check" className="h-[22px] w-[22px] shrink-0" strokeWidth={2.5} />
        Done — check your inbox in a moment.
      </div>
    )
  }

  const btnBase =
    buttonVariant === 'primary'
      ? 'bg-[linear-gradient(180deg,var(--color-red-bright),var(--color-red-d))] shadow-cta'
      : 'bg-ink'

  return (
    <form onSubmit={handleSubmit} className="mb-2.5 flex flex-col gap-2.5 min-[420px]:flex-row">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        aria-label="Your email"
        className={`min-w-0 flex-1 rounded-xl border-[1.5px] px-4 py-3.5 text-[0.95rem] placeholder:text-muted focus:border-red focus:outline-none ${
          inputTone === 'dark'
            ? 'border-txt/12 bg-card text-white'
            : 'border-ink/12 bg-white text-ink'
        }`}
      />
      <button
        type="submit"
        className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl px-[22px] py-3.5 text-[0.95rem] font-bold text-white transition-[filter,transform] duration-200 hover:-translate-y-px hover:brightness-125 ${btnBase}`}
      >
        {cta}
      </button>
    </form>
  )
}
