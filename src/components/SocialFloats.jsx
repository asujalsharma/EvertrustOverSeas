import { siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'

export default function SocialFloats() {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta
  const label = useTranslatedText('Chat with us')

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href="https://www.instagram.com/evertrustoverseas?igsh=MWw2ZzZkZ3VndWl4cA=="
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-2xl transition hover:scale-110"
        aria-label="Instagram"
      >
        <span className="font-semibold">IG</span>
      </a>
      <a
        href="https://www.linkedin.com/company/evertrust-overseas/"
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-2xl transition hover:scale-110"
        aria-label="LinkedIn"
      >
        <span className="font-semibold">IN</span>
      </a>
      <a
        href={`https://wa.me/${activeSiteMeta.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">WA</span>
        {label}
      </a>
    </div>
  )
}
