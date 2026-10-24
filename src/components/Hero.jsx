import { site } from '../config/site'
import { whatsappLink } from '../lib/links'
import BarberPole from './BarberPole'
import { Chat } from './Icons'

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="grain relative overflow-hidden">
      {/* soft gold glow behind the wordmark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(179_154_98/0.16),transparent)]"
      />

      <div className="container-x relative grid gap-12 pt-12 pb-14 sm:pt-20 lg:grid-cols-[1fr_auto] lg:items-stretch lg:gap-20 lg:pt-24 lg:pb-28">
        <div>
          <h1 id="hero-title" className="font-display display-hero">
            <span className="reveal block" style={{ '--d': '60ms' }}>
              Crown
            </span>{' '}
            <span className="reveal block" style={{ '--d': '180ms' }}>
              <span className="font-normal text-gold italic">&amp;</span> Blade
            </span>
            <span className="sr-only"> Barbers</span>
          </h1>

          <p
            className="reveal mt-6 flex items-center gap-4 text-lg tracking-[0.18em] text-ivory/70"
            style={{ '--d': '320ms' }}
            aria-hidden="true"
          >
            <span className="rule-gold" />
            Barbers, est. {site.established}
          </p>

          <p className="reveal mt-8 max-w-[34ch] text-xl leading-relaxed text-ivory/85 sm:text-[1.375rem]" style={{ '--d': '440ms' }}>
            {site.intro}
          </p>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={{ '--d': '560ms' }}>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              <Chat className="size-5" />
              Enquire on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a href="#services" className="btn btn-ghost">
              See services and prices
            </a>
          </div>

          <dl className="reveal mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-graphite pt-6 text-sm" style={{ '--d': '680ms' }}>
            <div>
              <dt className="text-stone">Open</dt>
              <dd className="mt-1 text-ivory">{site.hoursShort}</dd>
            </div>
            <div>
              <dt className="text-stone">Find us</dt>
              <dd className="mt-1 text-ivory">{site.address.line1}</dd>
            </div>
          </dl>
        </div>

        <BarberPole className="hidden min-h-[30rem] lg:flex" />
      </div>

      <div className="container-x pb-10 lg:hidden">
        <BarberPole orientation="horizontal" />
      </div>
    </section>
  )
}
