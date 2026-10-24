import { useEffect, useState } from 'react'
import { whatsappLink } from '../lib/links'
import { Chat } from './Icons'

/** Floating enquiry button. Appears once the hero has scrolled away. */
export default function WhatsAppButton({ hidden }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const visible = show && !hidden

  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      data-show={visible}
      tabIndex={visible ? undefined : -1}
      aria-hidden={visible ? undefined : true}
      className="fab fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 inline-flex items-center gap-2 rounded-full bg-gold py-3.5 pr-5 pl-4 font-semibold text-black shadow-[0_10px_30px_-8px_rgb(0_0_0/0.8)] hover:bg-gold-soft sm:right-6 sm:bottom-6"
    >
      <Chat className="size-6" />
      <span>Enquire</span>
      <span className="sr-only">on WhatsApp (opens in a new tab)</span>
    </a>
  )
}
