import { Button } from './ui'
import { Icon } from './Icon'
import { EBOOK_URL } from '../data/content'

/* Secondary free offer, shown under the scorecard panel: the downloadable
   guide. Links straight to the hosted PDF (Google Drive) — no email gate,
   since the scorecard above is the lead-capture step. */
export function FreeGuide() {
  return (
    <div className="mx-auto mt-5 flex max-w-[660px] flex-col items-center gap-5 rounded-brand border border-ink/12 bg-white p-6 text-center sm:flex-row sm:text-left">
      <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-xl bg-paper2">
        <Icon name="download" className="h-[26px] w-[26px] text-red-d" />
      </div>

      <div className="flex-1">
        <span className="mb-1 block text-[0.7rem] font-extrabold uppercase tracking-[0.08em] text-red-d">
          Free guide
        </span>
        <h3 className="mb-1 text-[1.15rem] font-bold leading-[1.2]">
          3 Hidden Reasons Your Training Has Stalled
        </h3>
        <p className="text-[0.94rem] text-[#4a4d54]">
          The things a generic program can't fix — and what actually moves the needle. A short, practical read from the
          DH coaches.
        </p>
      </div>

      <Button href={EBOOK_URL} variant="dark" className="w-full shrink-0 sm:w-auto">
        <Icon name="download" className="h-[18px] w-[18px]" />
        Get the guide
      </Button>
    </div>
  )
}
