/**
 * Abstract barber pole: the page's single signature motion.
 * Decorative only (aria-hidden). Animation is disabled for reduced-motion users.
 */
export default function BarberPole({ orientation = 'vertical', className = '' }) {
  if (orientation === 'horizontal') {
    return (
      <div aria-hidden="true" className={`relative h-2.5 w-full overflow-hidden rounded-full ${className}`}>
        <div className="pole-stripes pole-stripes--h absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/0.35),rgb(255_255_255/0.15)_45%,rgb(0_0_0/0.45))]" />
      </div>
    )
  }

  return (
    <div aria-hidden="true" className={`flex flex-col items-center ${className}`}>
      <div className="h-5 w-20 rounded-t-full bg-[linear-gradient(90deg,#6f5c2e,#cdb886_45%,#8a7340)]" />
      <div className="h-2 w-24 rounded-sm bg-[linear-gradient(90deg,#6f5c2e,#cdb886_45%,#8a7340)]" />
      <div className="grow-y relative w-14 flex-1 overflow-hidden border-x border-gold/40">
        <div className="pole-stripes absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(0_0_0/0.55),rgb(255_255_255/0.18)_38%,rgb(0_0_0/0.1)_55%,rgb(0_0_0/0.6))]" />
      </div>
      <div className="h-2 w-24 rounded-sm bg-[linear-gradient(90deg,#6f5c2e,#cdb886_45%,#8a7340)]" />
      <div className="h-6 w-16 rounded-b-full bg-[linear-gradient(90deg,#6f5c2e,#cdb886_45%,#8a7340)]" />
    </div>
  )
}
