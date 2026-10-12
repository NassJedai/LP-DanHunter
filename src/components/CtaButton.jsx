import { Button } from './ui'
import { Icon } from './Icon'
import { useCta } from '../lib/cta'

/* The page's primary CTA. WhatsApp CTAs lead with the WhatsApp glyph; booking
   CTAs keep their trailing arrow (unless `arrow` is false). */
export function CtaButton({ variant = 'primary', arrow = true, className = '', children }) {
  const cta = useCta()
  const whatsapp = cta.icon === 'whatsapp'
  return (
    <Button href={cta.href} variant={variant} className={className}>
      {whatsapp && <Icon name="whatsapp" className="h-[19px] w-[19px]" />}
      {children ?? cta.label}
      {!whatsapp && arrow && <Icon name="arrow" className="h-[18px] w-[18px]" strokeWidth={2.5} />}
    </Button>
  )
}
