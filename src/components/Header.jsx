import { useEffect, useRef, useState } from 'react'
import { nav, site } from '../config/site'
import { whatsappLink } from '../lib/links'
import { Chat, Crown } from './Icons'

function useActiveSection(ids) {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

const sectionIds = nav.map((n) => n.href.slice(1))

export default function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuTop, setMenuTop] = useState(64)
  const headerRef = useRef(null)
  const burgerRef = useRef(null)
  const firstLinkRef = useRef(null)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu side-effects: scroll lock, Escape to close, focus management.
  useEffect(() => {
    if (!menuOpen) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Open the panel directly below the header, wherever it currently sits.
    setMenuTop(Math.max(0, headerRef.current?.getBoundingClientRect().bottom ?? 64))
    firstLinkRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        burgerRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 1024px)')
    const onResize = () => mq.matches && setMenuOpen(false)

    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onResize)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onResize)
    }
  }, [menuOpen, setMenuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || menuOpen
          ? 'border-b border-graphite bg-black/85 backdrop-blur-md'
          : 'border-b border-transparent bg-black'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-20">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={`${site.name}, back to top`} onClick={close}>
          <span className="grid size-9 place-items-center rounded-full border border-gold/60 text-gold transition-colors group-hover:bg-gold group-hover:text-black">
            <Crown className="size-[18px]" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Crown <span className="text-gold">&amp;</span> Blade
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.95rem] text-ivory/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="link-draw pb-1 hover:text-ivory"
                  aria-current={active === item.href.slice(1) ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden min-h-11 px-5 py-2 text-sm sm:inline-flex"
          >
            <Chat className="size-[18px]" />
            WhatsApp enquiry
            <span className="sr-only">(opens WhatsApp in a new tab)</span>
          </a>

          <button
            ref={burgerRef}
            type="button"
            className="burger -mr-2 grid size-11 place-items-center rounded-full text-ivory lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="block" aria-hidden="true">
              <span className="burger-line" />
              <span className="burger-line" />
              <span className="burger-line" />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu (outside <header>: its backdrop-filter would trap a fixed child) */}
      <div
        id="mobile-menu"
        className="menu-panel fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-black lg:hidden"
        style={{ top: menuTop }}
        data-open={menuOpen}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <nav aria-label="Mobile" className="container-x flex min-h-full flex-col pt-6 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <ul className="divide-y divide-graphite border-y border-graphite">
            {nav.map((item, i) => (
              <li key={item.href} className="menu-item" style={{ '--i': i }}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={close}
                  className="flex items-baseline justify-between py-4 font-display text-4xl transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="menu-item mt-auto space-y-4 pt-10" style={{ '--i': nav.length }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full"
              onClick={close}
            >
              <Chat className="size-5" />
              Enquire on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <p className="text-center text-sm text-stone">
              {site.hoursShort}. {site.address.line1}, {site.address.line2}
            </p>
          </div>
        </nav>
      </div>
    </>
  )
}
