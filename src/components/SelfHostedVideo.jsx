import { useEffect, useRef } from 'react'

/**
 * Native <video> player for self-hosted (Cloudinary) clips.
 *
 * Unlike a YouTube iframe, a same-page <video muted playsinline> is trusted by
 * browsers, so muted autoplay works reliably — including Safari and iOS.
 * Playback starts when the clip scrolls into view and pauses when it leaves, so
 * nothing downloads or runs while off-screen. Controls stay visible so the
 * viewer can unmute.
 */
export function SelfHostedVideo({ src, title, poster, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    // Set muted imperatively too: React can drop the attribute, and an unmuted
    // video would have autoplay refused.
    video.muted = true

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Rejected autoplay is not an error worth surfacing — the viewer
            // still has the play button.
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        }),
      { threshold: 0.5 },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      title={title}
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className={`w-full rounded-brand border border-txt/12 bg-bg object-cover ${className}`}
    />
  )
}
