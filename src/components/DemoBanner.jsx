import { site } from '../config/site'

export default function DemoBanner() {
  if (!site.isDemo) return null
  return (
    <div className="border-b border-graphite bg-charcoal">
      <p className="container-x py-2 text-center text-[0.8rem] leading-snug text-stone">
        <span className="text-gold-soft">Portfolio demo.</span> Business details, prices and reviews are
        placeholders, and the WhatsApp number is not live.
      </p>
    </div>
  )
}
