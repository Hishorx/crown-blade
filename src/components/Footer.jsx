import { nav, site } from '../config/site'
import { Crown } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-graphite bg-black pt-16 pb-28 sm:pb-16">
      <div className="container-x grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-3 font-display text-2xl">
            <Crown className="size-6 text-gold" />
            {site.name}
          </p>
          <p className="mt-3 max-w-[36ch] text-stone">
            {site.address.line1}, {site.address.line2}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-3 text-ivory/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-draw hover:text-ivory">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex gap-6 text-ivory/80 md:justify-end">
          {site.social.map((s) => (
            <li key={s.label}>
              <a href={s.href} className="link-draw hover:text-ivory">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="container-x mt-14 flex flex-col gap-2 border-t border-graphite pt-6 text-sm text-stone sm:flex-row sm:justify-between">
        <p>
          © {year} {site.name}
          {site.isDemo && '. Demo website with placeholder content.'}
        </p>
        <p>
          Website designed &amp; developed by{' '}
          <a href={site.credit.href} className="link-draw text-ivory/80 hover:text-ivory">
            {site.credit.label}
          </a>
        </p>
      </div>
    </footer>
  )
}
