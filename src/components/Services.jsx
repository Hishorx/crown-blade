import { services, site } from '../config/site'
import { whatsappLink } from '../lib/links'
import SectionHeading from './SectionHeading'
import { Chat } from './Icons'

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-charcoal py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading id="services-title" title="Services & prices">
          <p>
            Every haircut starts with a short consultation and finishes with a hot towel and styling.
            {site.isDemo && <span className="text-stone"> Prices shown are sample figures for this demo.</span>}
          </p>
        </SectionHeading>

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {services.map((group) => (
            <div key={group.group}>
              <h3 className="border-b border-gold/40 pb-3 text-3xl text-gold-soft">{group.group}</h3>
              <ul className="mt-2">
                {group.items.map((item) => (
                  <li key={item.name} className="border-b border-graphite py-5 last:border-b-0">
                    <div className="flex items-baseline">
                      <span className="text-lg font-semibold text-ivory">{item.name}</span>
                      <span className="leader" aria-hidden="true" />
                      <span className="nums font-display text-2xl text-ivory">
                        <span className="sr-only">Price: </span>
                        {site.currency}
                        {item.price}
                      </span>
                    </div>
                    <p className="mt-1.5 flex flex-wrap justify-between gap-x-4 text-[0.95rem] text-stone">
                      <span>{item.note}</span>
                      <span className="nums whitespace-nowrap">{item.minutes} min</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-5 border-t border-graphite pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[46ch] text-ivory/80">
            Not sure what to book? Send a photo of the style you want and we will suggest the right service.
          </p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold shrink-0">
            <Chat className="size-5" />
            Ask on WhatsApp
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
