export default function ServiceCard({ service }) {
  return (
    <article className="card-panel p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-evergreen text-sm font-bold text-white">
        {service.title.slice(0, 2).toUpperCase()}
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-evergreen">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/68">{service.description}</p>
    </article>
  )
}
