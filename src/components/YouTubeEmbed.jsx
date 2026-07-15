import { useState } from 'react'

/**
 * YouTube embed with two modes:
 *  - autoplay: loads the player immediately, muted (browsers only allow
 *    autoplay when muted). Controls stay visible so the user can unmute.
 *  - facade (default): shows a poster + play button and only loads the (heavy)
 *    iframe on click, with sound on.
 *
 * Uses youtube-nocookie for privacy. Note: inside the Claude Artifact sandbox,
 * external embeds/images are blocked by the CSP, so playback works on the
 * dev/production site, not in the Artifact preview.
 */
export function YouTubeEmbed({ id, title = 'Video', autoplay = false, className = '' }) {
  const [playing, setPlaying] = useState(autoplay)
  const [posterFailed, setPosterFailed] = useState(false)

  const params = new URLSearchParams({
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
    autoplay: '1',
    ...(autoplay ? { mute: '1' } : {}),
  })
  const src = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`

  return (
    <div className={`relative aspect-video bg-bg ${className}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          loading="lazy"
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
