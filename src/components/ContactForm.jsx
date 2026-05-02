import { siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'

export default function ContactForm({ title = 'Contact Us', compact = false }) {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta
  const translatedTitle = useTranslatedText(title)
  const copy = useTranslatedText(
    'We are currently handling inquiries directly. Please reach out through the contact details below and our team will assist you personally.',
  )
  const emailLabel = useTranslatedText('Email')
  const phoneLabel = useTranslatedText('Phone / WhatsApp')
  const websiteLabel = useTranslatedText('Website')
  const locationLabel = useTranslatedText('Headquarters')
  const whatsappButton = useTranslatedText('Chat on WhatsApp')

  return (
    <div className="card-panel p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-evergreen">{translatedTitle}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/66">{copy}</p>
      <div className={`mt-6 ${compact ? 'space-y-4' : 'grid gap-4 sm:grid-cols-2'}`}>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{emailLabel}</p>
          <a href={`mailto:${activeSiteMeta.email}`} className="mt-3 block text-lg font-semibold text-evergreen">
            {activeSiteMeta.email}
          </a>
        </div>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{phoneLabel}</p>
          <a href={`tel:${activeSiteMeta.phone}`} className="mt-3 block text-lg font-semibold text-evergreen">
            {activeSiteMeta.phone}
          </a>
        </div>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{websiteLabel}</p>
          <a
            href={`https://${activeSiteMeta.website}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-lg font-semibold text-evergreen"
          >
            {activeSiteMeta.website}
          </a>
        </div>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{locationLabel}</p>
          <p className="mt-3 text-lg font-semibold text-evergreen">{activeSiteMeta.location}</p>
        </div>
      </div>
      <a
        href={`https://wa.me/${activeSiteMeta.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="btn-primary mt-6"
      >
        {whatsappButton}
      </a>
    </div>
  )
}
