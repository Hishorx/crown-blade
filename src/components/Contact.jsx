import { site } from '../config/site'
import { mapsLink, whatsappLink } from '../lib/links'
import SectionHeading from './SectionHeading'
import { Chat, Clock, Mail, Phone, Pin } from './Icons'

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-charcoal py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading id="contact-title" title="Visit, call or send a message" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          {/* Enquiry */}
          <div className="rounded-[3px] border border-gold/30 bg-black p-7 sm:p-10">
            <h3 className="text-3xl">Appointment enquiries</h3>
            <p className="mt-4 max-w-[48ch] text-ivory/80">
              Message us on WhatsApp with the service you want and a couple of times that suit you. A barber will
              reply to confirm availability.
            </p>
            <p className="mt-3 max-w-[48ch] text-sm text-stone">
              This website does not take live bookings. Your appointment is only confirmed once we reply.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-8 w-full sm:w-auto"
            >
              <Chat className="size-5" />
              Start a WhatsApp enquiry
              <span className="sr-only">(opens in a new tab)</span>
            </a>

            <ul className="mt-10 space-y-4 border-t border-graphite pt-8">
              <li>
                <a href={site.phoneHref} className="group inline-flex items-center gap-3">
                  <Phone className="size-5 text-gold" />
                  <span className="link-draw">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="group inline-flex items-center gap-3">
                  <Mail className="size-5 text-gold" />
                  <span className="link-draw">{site.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Location + hours */}
          <div className="space-y-12">
            <div>
              <h3 className="flex items-center gap-3 text-2xl">
                <Pin className="size-6 text-gold" />
                Address
              </h3>
              <address className="mt-4 text-lg leading-relaxed not-italic text-ivory/90">
                {site.address.line1}
                <br />
                {site.address.line2}
              </address>
              <a
                href={mapsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw mt-3 inline-block text-gold-soft"
              >
                Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
              </a>
            </div>

            <div>
              <h3 className="flex items-center gap-3 text-2xl">
                <Clock className="size-6 text-gold" />
                Opening hours
              </h3>
              <dl className="mt-4 divide-y divide-graphite border-y border-graphite">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 py-3.5">
                    <dt className="text-ivory/80">{h.days}</dt>
                    <dd className={`nums text-right ${h.time === 'Closed' ? 'text-stone' : 'text-ivory'}`}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {site.isDemo && (
              <p className="text-sm text-stone">
                Address, phone, email, WhatsApp number and hours are placeholders for this demo.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
