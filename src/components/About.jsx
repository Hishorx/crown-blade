import { site } from '../config/site'
import SectionHeading from './SectionHeading'

const visit = [
  { title: 'Consultation', text: 'We talk through how you wear your hair, how often you style it and what you want to change.' },
  { title: 'The cut', text: 'Clippers, scissors and razor, used with care. No rushing to fit the next client in.' },
  { title: 'Hot towel and finish', text: 'A hot towel, a clean neckline and styling advice you can repeat at home.' },
]

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="on-ivory bg-ivory py-20 text-black sm:py-28">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading id="about-title" title="A proper barbershop, kept simple." tone="light" />
          <div className="mt-8 max-w-[60ch] space-y-5 font-display text-[1.2rem] leading-[1.75] text-black/80">
            <p>
              Crown &amp; Blade opened in {site.established} with three chairs, a good stereo and one rule: every
              client gets the barber’s full attention, from the first question to the last brushstroke.
            </p>
            <p>
              We cut every hair type and texture. Regulars come for sharp fades and scissor work, and stay for the
              hot-towel shave and the conversation. Walk-ins are welcome when there is a free chair, and a quick
              WhatsApp message beforehand saves you the wait.
            </p>
          </div>
          {site.isDemo && (
            <p className="mt-6 text-sm text-black/60">Shop story and details are placeholder copy for this demo.</p>
          )}
        </div>

        <div className="lg:pt-24">
          <h3 className="text-3xl">Your visit</h3>
          <ol className="mt-6 border-t border-black/15">
            {visit.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-black/15 py-6">
                <span className="nums font-display text-3xl leading-none text-gold-deep" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <p className="text-lg font-semibold">{step.title}</p>
                  <p className="mt-1.5 text-black/70">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
