/**
 * ───────────────────────────────────────────────────────────────
 *  SITE CONFIGURATION — edit this file to adapt the demo.
 *
 *  Every business detail below is a PLACEHOLDER. Phone numbers use
 *  the reserved fictional 555-01xx range and the email uses the
 *  reserved example.com domain, so nothing here reaches a real person.
 *
 *  SEO tags and structured data live in /index.html and must be
 *  updated there too (see README → "Replacing placeholders").
 * ───────────────────────────────────────────────────────────────
 */

export const site = {
  // Shows the slim "portfolio demo" notice at the top of the page.
  // Set to false when this becomes a real client's live site.
  isDemo: true,

  name: 'Crown & Blade Barbers',
  shortName: 'Crown & Blade',
  intro:
    'Precise cuts, hot-towel shaves and unhurried service. Walk out sharper than you walked in.',

  // ── Contact (placeholders) ──────────────────────────────────────
  phoneDisplay: '(555) 010-0123',
  phoneHref: 'tel:+15550100123',
  email: 'hello@example.com',
  address: {
    line1: '123 Placeholder Street',
    line2: 'Your City, ST 00000',
  },
  // Used for the "Get directions" link (opens Google Maps search).
  mapsQuery: '123 Placeholder Street, Your City',

  // ── WhatsApp enquiries ──────────────────────────────────────────
  // International format, digits only: country code + number, no "+",
  // spaces or dashes. Example for a UK mobile 07700 900123 → "447700900123".
  // The value below is a PLACEHOLDER and will not reach anyone.
  whatsappNumber: '15550100123',
  whatsappMessage:
    "Hi Crown & Blade, I'd like to ask about an appointment. Service: ___  Preferred day/time: ___",

  // ── Opening hours (placeholders) ────────────────────────────────
  hours: [
    { days: 'Monday', time: 'Closed' },
    { days: 'Tuesday – Friday', time: '9:00 am – 7:00 pm' },
    { days: 'Saturday', time: '8:00 am – 5:00 pm' },
    { days: 'Sunday', time: '10:00 am – 3:00 pm' },
  ],
  hoursShort: 'Tue–Sun, from 8 am',

  established: '20XX',
  currency: '$',

  social: [
    { label: 'Instagram', href: '#' },
    { label: 'Facebook', href: '#' },
  ],

  // Footer credit. Replace '#' with your portfolio URL, e.g. 'https://your-portfolio.example'.
  credit: { label: 'Veyra Digital', href: '#' },
}

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

// Sample prices — adjust freely. `minutes` is shown as duration.
export const services = [
  {
    group: 'Haircuts',
    items: [
      { name: 'Signature cut', price: 35, minutes: 45, note: 'Consultation, cut, wash and style.' },
      { name: 'Skin fade', price: 38, minutes: 45, note: 'Seamless fade, blended by hand.' },
      { name: 'Scissor cut', price: 40, minutes: 50, note: 'Longer styles, shaped with shears only.' },
      { name: 'Clipper cut', price: 24, minutes: 25, note: 'One or two guards, neat edges.' },
      { name: 'Young gents', price: 25, minutes: 30, note: 'Under 12s.' },
    ],
  },
  {
    group: 'Shaves',
    items: [
      { name: 'Hot-towel shave', price: 40, minutes: 40, note: 'Straight razor, hot towels, cold finish.' },
      { name: 'Head shave', price: 30, minutes: 30, note: 'Razor smooth, with balm.' },
    ],
  },
  {
    group: 'Beard',
    items: [
      { name: 'Beard sculpt', price: 24, minutes: 30, note: 'Shape, razor line-up and hot towel.' },
      { name: 'Beard tidy', price: 18, minutes: 20, note: 'Trim and outline between visits.' },
    ],
  },
  {
    group: 'Packages',
    items: [
      { name: 'The Crown', price: 70, minutes: 80, note: 'Signature cut and hot-towel shave.' },
      { name: 'Cut & beard', price: 52, minutes: 65, note: 'Any cut with a beard sculpt.' },
    ],
  },
]

// Gallery: set `src` to a file in /public/images (e.g. 'images/fade.jpg')
// to replace a placeholder tile with a real photo. Leave `src: null`
// to keep the illustrated placeholder.
export const gallery = [
  { title: 'Skin fade', icon: 'clippers', src: null, alt: 'Skin fade haircut' },
  { title: 'Hot-towel shave', icon: 'razor', src: null, alt: 'Client receiving a hot-towel shave' },
  { title: 'Textured crop', icon: 'comb', src: null, alt: 'Textured crop haircut' },
  { title: 'The chair', icon: 'chair', src: null, alt: 'Barber chair in the shop' },
  { title: 'Beard sculpt', icon: 'scissors', src: null, alt: 'Sculpted beard' },
  { title: 'The shop', icon: 'pole', src: null, alt: 'Shop exterior with barber pole' },
]

// FICTIONAL demo testimonials. Replace with real, verified reviews
// (with the client's permission) before using on a live site.
export const testimonials = [
  {
    quote:
      'Best fade I have had in years. He took the time to ask how I actually wear my hair before picking up the clippers.',
    name: 'Daniel R.',
  },
  {
    quote:
      'The hot-towel shave is the most relaxing forty minutes of my month. Calm room, great music, no rush.',
    name: 'Marcus T.',
  },
  {
    quote:
      'Brought my son for his first proper haircut. Patient, friendly, and he left asking when he can go back.',
    name: 'James O.',
  },
]
