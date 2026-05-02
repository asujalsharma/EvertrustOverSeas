import { siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'

export default function WhatsAppFloat() {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta
  const label = useTranslatedText('Chat with us')

  return (
    <a
      href={`https://wa.me/${activeSiteMeta.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18">WA</span>
      {label}
    </a>
  )
}
