export default function TestimonialCard({ item }) {
  return (
    <article className="card-panel p-7">
      <p className="text-base leading-8 text-ink/75">“{item.quote}”</p>
      <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-gold">{item.name}</p>
    </article>
  )
}
