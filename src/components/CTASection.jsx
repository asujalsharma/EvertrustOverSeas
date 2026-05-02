import { Link } from 'react-router-dom'
import useTranslatedText from '../hooks/useTranslatedText'

export default function CTASection() {
  const eyebrow = useTranslatedText('Global Growth Starts Here')
  const title = useTranslatedText(
    'Ready to source trusted Indian products with a premium export partner?',
  )
  const copy = useTranslatedText(
    'Let’s discuss your market needs, product goals, and supply expectations. We’re here to help you request a quote, start a conversation, or build a long-term trade partnership.',
  )
  const quote = useTranslatedText('Request a Quote')
  const contact = useTranslatedText('Contact Us')
  const partner = useTranslatedText('Become a Partner')

  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[36px] bg-evergreen bg-mesh px-8 py-14 text-white shadow-soft sm:px-12">
          <p className="eyebrow border-white/20 bg-white/10 text-white">{eyebrow}</p>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
              <p className="mt-4 text-base leading-8 text-white/75">{copy}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* <Link to="/inquiry" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-evergreen transition hover:bg-sand">
                {quote}
              </Link> */}
              <Link to="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                {contact}
              </Link>
              {/* <Link to="/services" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                {partner}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
