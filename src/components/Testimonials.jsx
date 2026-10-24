import { testimonials } from '../config/site'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading id="reviews-title" title="What clients say" />
          <p
            role="note"
            className="inline-flex max-w-md items-start gap-3 self-start rounded-lg border border-gold/50 bg-gold/10 px-4 py-3 text-sm text-gold-soft lg:self-auto"
          >
            <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
            <span>
              <strong className="font-semibold">Fictional demo reviews.</strong> These are sample testimonials
              written for this portfolio demo, not quotes from real customers.
            </span>
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[3px] bg-graphite md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="bg-black p-7 sm:p-9">
              <figure className="flex h-full flex-col">
                <span aria-hidden="true" className="font-display text-6xl leading-none text-gold">
                  “
                </span>
                <blockquote className="mt-2 flex-1 font-display text-[1.35rem] leading-[1.5] text-ivory/90">
                  <p>{t.quote}</p>
                </blockquote>
                <figcaption className="mt-8 border-t border-graphite pt-5 text-sm">
                  <span className="font-semibold text-ivory">{t.name}</span>
                  <span className="text-stone">, fictional client</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
