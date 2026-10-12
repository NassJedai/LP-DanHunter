import { Container } from './ui'
import { Icon } from './Icon'
import { useCopy } from '../lib/locale'

const ICONS = ['star', 'shield', 'clock', 'activity']

export function Strip() {
  const { strip } = useCopy()
  return (
    <div className="bg-bg2 py-4 text-txt/78">
      <Container className="flex flex-wrap justify-center gap-x-8 gap-y-3.5 text-center text-[0.9rem] font-semibold">
        {strip.map((label, i) => (
          <span key={label} className="inline-flex items-center gap-2.5">
            <Icon name={ICONS[i]} className="h-[18px] w-[18px] text-red" />
            {label}
          </span>
        ))}
      </Container>
    </div>
  )
}
