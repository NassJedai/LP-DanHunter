import { useEffect, useRef, useState } from 'react'
import { LeadForm } from './LeadForm'

const KEY = 'dh_exit_shown'

export function ExitIntentModal() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef(null)

  useEffect(() => {
    const alreadyShown = () => {
      try {
        return localStorage.getItem(KEY) === '1'
      } catch {
        return false
      }
    }
    const mark = () => {
      try {
        localStorage.setItem(KEY, '1')
      } catch {
        /* ignore */
      }
    }
    const reveal = () => {
      if (alreadyShown()) return
      setOpen(true)
      mark()
    }

    // Desktop: cursor leaves the top of the viewport
    const onMouseOut = (e) => {
      if (!e.relatedTarget && e.clientY <= 0) reveal()
    }
    document.addEventListener('mouseout', onMouseOut)

    // Touch devices: dwell timer fallback
    let timer
    if (window.matchMedia('(pointer:coarse)').matches) {
      timer = setTimeout(reveal, 35000)
    }

    return () => {
      document.removeEventListener('mouseout', onMouseOut)
      clearTimeout(timer)
    }
  }, [])

  // Escape to close + focus the close button when opened
  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-title"
    >
      <div className="absolute inset-0 bg-[rgba(8,8,10,0.72)] backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative z-[1] w-full max-w-[440px] rounded-[22px] border border-txt/12 bg-bg p-8 text-center text-txt shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:px-8 sm:py-[38px]">
        <button
          ref={closeRef}
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-3.5 text-[1.6rem] leading-none text-txt/60 transition-colors hover:text-white"
        >
          ×
        </button>
        <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.16em] text-[#ff6a70]">Before you go</span>
        <h3 id="exit-title" className="mb-3 mt-2 text-[1.6rem] font-bold leading-[1.1] text-white">
          Not ready to invest just yet?
        </h3>
        <p className="mb-5 text-[1rem] text-txt/78">
          Take the free 2-minute Performance &amp; Health Scorecard and see exactly where to focus — no commitment.
        </p>
        <LeadForm
          magnet="scorecard-exit"
          cta="Get my free score"
          buttonVariant="primary"
          inputTone="dark"
          doneTone="dark"
        />
        <button
          onClick={() => setOpen(false)}
          className="mt-3.5 cursor-pointer border-0 bg-none text-[0.86rem] text-txt/55 underline hover:text-txt"
        >
          No thanks — I'll book instead
        </button>
      </div>
    </div>
  )
}
