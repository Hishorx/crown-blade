export default function SectionHeading({ id, title, children, tone = 'dark' }) {
  return (
    <div className="max-w-2xl">
      <span className={`rule-gold ${tone === 'light' ? 'bg-gold-deep' : ''}`} aria-hidden="true" />
      <h2 id={id} className="display-section mt-6">
        {title}
      </h2>
      {children && (
        <div className={`mt-5 text-lg leading-relaxed ${tone === 'light' ? 'text-black/70' : 'text-ivory/70'}`}>
          {children}
        </div>
      )}
    </div>
  )
}
