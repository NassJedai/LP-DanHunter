import { useEffect, useMemo, useRef, useState } from 'react'

const YT_ORIGIN = 'https://www.youtube-nocookie.com'

/**
 * YouTube embed with two modes:
 *  - autoplay: loads the player immediately and starts it muted once it scrolls
 *    into view (browsers only allow autoplay while muted). Controls stay visible
 *    so the user can unmute.
 *  - facade (default): shows a poster + play button and only loads the (heavy)
 *    iframe on click, with sound on.
 *
 * Autoplay is never guaranteed: Safari, Low Power Mode or a per-site "block
 * autoplay" setting can still refuse. When that happens the player simply shows
 * its own play button, so the video is one click away rather than broken.
 *
 * Uses youtube-nocookie for privacy. Inside the Claude Artifact sandbox external
 * embeds are blocked by the CSP, so playback only works on the real site.
 */
export function YouTubeEmbed({ id, title = 'Video', autoplay = false, className = '' }) {
  const [playing, setPlaying] = useState(autoplay)
  const [posterFailed, setPosterFailed] = useState(false)
  const wrapRef = useRef(null)
  const iframeRef = useRef(null)
  const readyRef = useRef(false)

  const src = useMemo(() => {
    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      autoplay: '1',
      // Lets us re-issue play/mute commands via postMessage below.
      enablejsapi: '1',
      ...(autoplay ? { mute: '1' } : {}),
    })
    if (typeof window !== 'undefined') params.set('origin', window.location.origin)
    return `${YT_ORIGIN}/embed/${id}?${params.toString()}`
  }, [id, autoplay])

  // Autoplay mode: ask the player to mute + play once it's both loaded and
  // actually visible. The `autoplay=1` param alone is often ignored for an
  // off-screen or late-loading iframe.
  useEffect(() => {
    if (!autoplay || !playing) return
    const wrap = wrapRef.current
    if (!wrap) return

    const send = (func) => {
      iframeRef.current?.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func, args: [] }),
        YT_ORIGIN,
      )
    }

    let timers = []
    const kick = () => {
      if (!readyRef.current) return
      send('mute')
      send('playVideo')
      // The player can still be booting; a couple of retries costs nothing.
      timers = [400, 1200].map((d) => setTimeout(() => { send('mute'); send('playVideo') }, d))
    }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && kick()),
      { threshold: 0.4 },
    )
    io.observe(wrap)

    return () => {
      io.disconnect()
      timers.forEach(clearTimeout)
    }
  }, [autoplay, playing])

  return (
    <div ref={wrapRef} className={`relative aspect-video bg-bg ${className}`}>
      {playing ? (
        <iframe
          ref={iframeRef}
          onLoad={() => {
            readyRef.current = true
            // Nudge it as soon as the player exists, in case it's already in view.
            iframeRef.current?.contentWindow?.postMessage(
              JSON.stringify({ event: 'command', func: 'playVideo', args: [] }),
              YT_ORIGIN,
            )
          }}
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer overflow-hidden"
        >
          {!posterFailed && (
            <img
              src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              onError={() => setPosterFailed(true)}
            />
          )}
          <span className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(225,20,30,0.18),transparent_70%)]" />
          <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
          <span className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[linear-gradient(180deg,var(--color-red-bright),var(--color-red-d))] shadow-[0_12px_34px_rgba(225,20,30,0.5)] transition-transform duration-200 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-8 w-8 text-white" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-5 text-[0.85rem] font-semibold text-white/90 drop-shadow">
            {title}
          </span>
        </button>
      )}
    </div>
  )
}
