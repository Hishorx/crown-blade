// Simple line icons drawn for this project (no icon library dependency).
const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

const make = (children) =>
  function Icon({ className = 'size-5', strokeWidth = 1.5 }) {
    return (
      <svg {...base} className={className} strokeWidth={strokeWidth}>
        {children}
      </svg>
    )
  }

export const Crown = make(<path d="M3.5 17.5h17l-1.4-9.2-4.4 3.8L12 5.5l-2.7 6.6-4.4-3.8z M4 20.5h16" />)

export const Scissors = make(
  <>
    <circle cx="6" cy="6" r="2.6" />
    <circle cx="6" cy="18" r="2.6" />
    <path d="M20 4.5 8 16 M8 8l4.2 4.2 M14.6 14.6 20 19.5" />
  </>,
)

export const Razor = make(
  <>
    <path d="M2.5 10.5h11.5l3 3H5.5a3 3 0 0 1-3-3z" />
    <path d="M14 10.5 21 6 M17 13.5l4-2.2" />
    <circle cx="14.6" cy="11.6" r="0.6" />
  </>,
)

export const Comb = make(<path d="M3 6.5h18v3H3z M5 9.5V17 M8 9.5V17 M11 9.5V17 M14 9.5V17 M17 9.5V17 M20 9.5V14" />)

export const Clippers = make(
  <>
    <path d="M7.5 3.5h9l-.9 15.2a2 2 0 0 1-2 1.8h-3.2a2 2 0 0 1-2-1.8z" />
    <path d="M7.5 6h9 M12 10v3.5" />
  </>,
)

export const Chair = make(
  <path d="M8 3.5h8v7.5H8z M5.5 11h13v3h-13z M4 9.5v4 M20 9.5v4 M12 14v4.5 M8 20.5h8" />,
)

export const Pole = make(
  <path d="M9.5 4.5h5v15h-5z M8.5 3h7 M8.5 21h7 M9.5 9l5-2.5 M9.5 13.5l5-2.5 M9.5 18l5-2.5" />,
)

export const Phone = make(
  <path d="M5 3.5h3.2l1.6 4-2 1.3a10.5 10.5 0 0 0 5.4 5.4l1.3-2 4 1.6V17a2.5 2.5 0 0 1-2.5 2.5A15 15 0 0 1 2.5 6 2.5 2.5 0 0 1 5 3.5z" />,
)

export const Mail = make(<path d="M3.5 5.5h17v13h-17z M3.5 6.5 12 13l8.5-6.5" />)

export const Pin = make(
  <>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
    <circle cx="12" cy="10" r="2.3" />
  </>,
)

export const Clock = make(
  <>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </>,
)

/** Chat bubble with handset, used for WhatsApp links. */
export const Chat = make(
  <>
    <path d="M20.5 11.6a8.5 8.5 0 0 1-12.4 7.6L3.5 20.5l1.3-4.4a8.5 8.5 0 1 1 15.7-4.5z" />
    <path d="M9.2 8.4c.2 3.3 3 6.2 6.4 6.6l1-1.5-1.9-1-1 .8c-1.1-.5-2.2-1.6-2.7-2.7l.8-1-1-1.9z" />
  </>,
)

export const galleryIcons = { scissors: Scissors, razor: Razor, comb: Comb, clippers: Clippers, chair: Chair, pole: Pole, crown: Crown }
