import useTranslatedText from '../hooks/useTranslatedText'

export default function PageHero({ eyebrow, title, description }) {
  const translatedEyebrow = useTranslatedText(eyebrow)
  const translatedTitle = useTranslatedText(title)
  const translatedDescription = useTranslatedText(description)

  return (
    <section className="relative overflow-hidden border-b border-evergreen/8 py-20">
      <div className="absolute inset-0 bg-mesh opacity-80" />
      <div className="container-shell relative">
        <p className="eyebrow">{translatedEyebrow}</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-tight text-evergreen sm:text-6xl">
          {translatedTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">{translatedDescription}</p>
      </div>
    </section>
  )
}
