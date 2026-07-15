import { Button } from './ui'
import { BOOKING_URL } from '../data/content'

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] border-t border-txt/12 bg-bg/96 p-3 backdrop-blur-md min-[900px]:hidden">
      <Button href={BOOKING_URL} className="w-full">
        Book my assessment — €100
      </Button>
    </div>
  )
}
