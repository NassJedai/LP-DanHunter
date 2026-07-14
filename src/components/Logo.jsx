// Text-based DH wordmark (the original referenced a missing PNG).
// Swap this for an <img> once the real logo asset is available.
export function Logo({ className = '', size = 'md' }) {
  const scale = size === 'lg' ? 'text-[1.7rem]' : 'text-[1.25rem]'
  return (
    <span className={`inline-flex items-baseline gap-1.5 leading-none ${className}`} aria-label="DH — Do It For You">
      <span className={`display-face ${scale} text-white`}>DH</span>
      <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.22em] text-txt/55 sm:inline">
        Do It For You
      </span>
    </span>
  )
}
