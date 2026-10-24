import { gallery, site } from '../config/site'
import { asset } from '../lib/links'
import SectionHeading from './SectionHeading'
import { galleryIcons, Scissors } from './Icons'

const layout = [
  'col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto', // feature tile
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'aspect-square',
  'col-span-2 aspect-[2/1] md:col-span-1 md:aspect-square',
]

function Placeholder({ icon, feature }) {
  const Icon = galleryIcons[icon] || Scissors
  return (
    <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(120%_90%_at_30%_20%,#2c2c2f,#141415_70%)]">
      <div className="absolute inset-3 rounded-[2px] border border-gold/15" aria-hidden="true" />
      <Icon className={`${feature ? 'size-28 md:size-40' : 'size-16 md:size-20'} text-gold/70`} strokeWidth={0.9} />
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading id="gallery-title" title="From the chair">
          <p>
            Fades, crops, classic cuts and clean shaves.
            {site.isDemo && (
              <span className="text-stone"> Illustrated tiles are placeholders for the shop’s own photography.</span>
            )}
          </p>
        </SectionHeading>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {gallery.map((item, i) => (
            <li key={item.title} className={`${layout[i] || 'aspect-square'}`}>
              <figure className="group relative h-full overflow-hidden rounded-[3px] bg-graphite">
                {item.src ? (
                  <img
                    src={asset(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <Placeholder icon={item.icon} feature={i === 0} />
                )}
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-[linear-gradient(transparent,rgb(0_0_0/0.75))] p-4 pt-12">
                  <span className="font-display text-xl sm:text-2xl">{item.title}</span>
                  {!item.src && <span className="text-xs text-stone">Placeholder</span>}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
