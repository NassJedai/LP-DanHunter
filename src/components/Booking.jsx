import { Container, SectionHeading, Reveal, Button } from './ui'

export function Booking() {
  return (
    <section id="book" className="scroll-mt-20 bg-paper py-[74px]">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Book your slot"
            title="Pick the time that suits you."
            lead="Select a slot below. You'll get your confirmation and your pre-assessment link by email."
          />
        </Reveal>

        {/* =========================================================
            REPLACE with your booking calendar embed (GoHighLevel / Calendly), e.g.
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/XXXX"
              className="h-[720px] w-full border-0"
              title="Book your assessment"
            />
           ========================================================= */}
        <Reveal className="mt-[34px] rounded-brand border-2 border-dashed border-ink/12 bg-white px-8 py-[54px] text-center text-muted">
          <b className="mb-2 block text-[1.15rem] text-ink">[ Embed your booking calendar here ]</b>
          Paste your GoHighLevel (or Calendly) booking embed code in place of this block.
          <br />
          In the meantime, the button below can point to your booking link.
          <div className="mt-[22px]">
            <Button href="#">Open the booking calendar</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
