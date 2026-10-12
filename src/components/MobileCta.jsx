import { CtaButton } from './CtaButton'
import { useCta } from '../lib/cta'

export function MobileCta() {
  const cta = useCta()
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-txt/12 bg-bg/96 p-3 backdrop-blur-md min-[900px]:hidden">
      <CtaButton className="w-full" arrow={false}>
        {cta.mobile}
      </CtaButton>
    </div>
  )
}
