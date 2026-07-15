import { useReveal } from '../lib/useReveal'
import { Icon } from './Icon'

/* Layout container — matches the original 1120px max width */
export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-[1120px] px-5 sm:px-[22px] ${className}`}>{children}</div>
}

/* Primary red pill CTA */
export function Button({ as = 'a', variant = 'primary', className = '', children, ...props }) {
  const Tag = as
  // External links open in a new tab (safely) unless the caller overrides.
  const isExternal = as === 'a' && typeof props.href === 'string' && /^https?:\/\//.test(props.href)
  if (isExternal && props.target === undefined) {
    props.target = '_blank'
    props.rel = 'noopener noreferrer'
  }
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full font-extrabold tracking-[0.01em] cursor-pointer transition-[transform,box-shadow,filter] duration-200 ease-out text-center select-none'
  const variants = {
    primary:
      'bg-[linear-gradient(180deg,var(--color-red-bright),var(--color-red-d))] text-white px-[30px] py-[17px] text-[1.02rem] shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover hover:brightness-[1.08] active:translate-y-0',
    compact:
      'bg-[linear-gradient(180deg,var(--color-red-bright),var(--color-red-d))] text-white px-5 py-2.5 text-[0.9rem] hover:-translate-y-0.5 hover:brightness-[1.08] active:translate-y-0',
    dark: 'bg-ink text-white px-[22px] py-3.5 text-[0.95rem] rounded-xl hover:brightness-125 hover:-translate-y-0.5',
  }
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}

/* Scroll-reveal wrapper */
export function Reveal({ as = 'div', className = '', delay = 0, children, ...props }) {
  const Tag = as
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}

/* Eyebrow + big heading + optional lead */
export function SectionHeading({ eyebrow, title, lead, align = 'left', tone = 'light', className = '' }) {
  const eyebrowColor = tone === 'dark' ? 'text-[#ff6a70]' : 'text-red-d'
  const leadColor = tone === 'dark' ? 'text-txt/68' : 'text-[#5a5c63]'
  const alignCls = align === 'center' ? 'text-center mx-auto' : ''
  return (
    <div className={className}>
      <span
        className={`inline-block text-[0.78rem] font-extrabold uppercase tracking-[0.16em] ${eyebrowColor} ${
          align === 'center' ? 'w-full text-center' : ''
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`display-face mt-3.5 text-[clamp(1.9rem,3.6vw,2.9rem)] max-w-[26ch] ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        } ${alignCls}`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-4 max-w-[62ch] text-[1.1rem] ${leadColor} ${alignCls}`}>{lead}</p>
      )}
    </div>
  )
}

/* Dashed media placeholder — reusable across the page */
const RATIO = {
  '21/9': 'aspect-[21/9] max-[820px]:aspect-[4/3]',
  '16/9': 'aspect-video',
  '9/16': 'aspect-[9/16]',
  '4/5': 'aspect-[4/5]',
}

export function MediaPlaceholder({ badge, title, note, ratio = '16/9', icon = 'camera', tone = 'light' }) {
  const toneCls =
    tone === 'dark'
      ? 'border-txt/20 bg-white/[0.03] text-white'
      : 'border-ink/20 bg-white text-ink'
  const noteCls = tone === 'dark' ? 'text-txt/60' : 'text-muted'
  const badgeCls =
    tone === 'dark'
      ? 'bg-red/16 text-[#ff6a70] border border-red/40'
      : 'bg-[#f2dcdc] text-[#a23b3b] border border-[#e6b8b8]'

  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-3 rounded-brand border-2 border-dashed p-6 text-center ${toneCls} ${RATIO[ratio]}`}
    >
      <span
        className={`absolute left-3 top-3 rounded-full px-2.5 py-[5px] text-[0.64rem] font-extrabold uppercase tracking-[0.1em] ${badgeCls}`}
      >
        {badge}
      </span>
      <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[linear-gradient(180deg,var(--color-red-bright),var(--color-red-d))] shadow-[0_8px_22px_rgba(225,20,30,0.38)]">
        <Icon name={icon} className="h-6 w-6 text-white" />
      </span>
      <b className="text-[1rem] tracking-[0.01em]">{title}</b>
      <small className={`max-w-[36ch] text-[0.8rem] leading-normal ${noteCls}`}>{note}</small>
    </div>
  )
}
