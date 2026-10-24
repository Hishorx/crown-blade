import { site } from '../config/site'

/** Builds a wa.me link with the configured number and a pre-filled message. */
export function whatsappLink(message = site.whatsappMessage) {
  const number = String(site.whatsappNumber).replace(/\D/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`
}

/** Resolves a file in /public against Vite's base path (needed on GitHub Pages). */
export function asset(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
