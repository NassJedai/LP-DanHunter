import { Container } from './ui'
import { Icon } from './Icon'

const ITEMS = [
  { icon: 'star', label: 'Trained & mentored coaches' },
  { icon: 'shield', label: 'Health & longevity approach' },
  { icon: 'clock', label: 'Real coaching, not an anonymous membership' },
  { icon: 'activity', label: 'A structured, measured method' },
]

export function Strip() {
  return (
    <div className="bg-bg2 py-4 text-txt/78">
      <Container className="flex flex-wrap justify-center gap-x-8 gap-y-3.5 text-center text-[0.9rem] font-semibold">
        {ITEMS.map((it) => (
          <span key={it.label} className="inline-flex items-center gap-2.5">
            <Icon name={it.icon} className="h-[18px] w-[18px] text-red" />
            {it.label}
          </span>
        ))}
      </Container>
    </div>
  )
}
