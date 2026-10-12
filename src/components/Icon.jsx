// Central icon set — ports the inline SVGs from the original page.
// Stroked icons use `currentColor`; the `play` glyph is filled.

const STROKE = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  check: <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />,
  x: <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />,
  star: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" strokeLinejoin="round" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </>
  ),
  activity: <path d="M3 12h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round" />,
  users: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
    </>
  ),
  medal: (
    <path
      d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 20l-4.8 2.6.9-5.5-4-3.9 5.5-.8z"
      strokeLinejoin="round"
    />
  ),
  badgeCheck: (
    <path
      d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  drop: (
    <path d="M12 2v6M12 8c-3 2-5 5-5 8a5 5 0 0010 0c0-3-2-6-5-8z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  chart: <path d="M4 4v16h16M8 16l3-4 3 2 4-6" strokeLinecap="round" strokeLinejoin="round" />,
  camera: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10" r="1.6" />
      <path d="M21 15l-5-4-4 4-2-2-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  scorecard: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 8h6M9 12l1.5 1.5L13 11M9 16h4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  download: <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />,
  pin: (
    <>
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
}

export function Icon({ name, className = 'w-5 h-5', strokeWidth = 2, ...rest }) {
  if (name === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    )
  }
  if (name === 'play') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true" {...rest}>
        <path d="M8 5v14l11-7z" />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {STROKE[name]}
    </svg>
  )
}
