// DH brand mark — the official "DH · DO IT FOR YOU" logo (white DH + red block,
// transparent background), meant to sit on the dark header/footer ground.
// The asset is imported so Vite fingerprints it (and inlines it as a data URI
// in the single-file build used for the Claude Artifact).
import logoUrl from '../assets/logo-dh2-white.webp'

export function Logo({ height = 44, className = '' }) {
  return (
    <img
      src={logoUrl}
      alt="DH — Do It For You"
      style={{ height: `${height}px` }}
      className={`w-auto select-none ${className}`}
      draggable="false"
    />
  )
}
