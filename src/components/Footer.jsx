import { Link } from 'react-router-dom'
import { navLinks, siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'

const socials = [
  ['LinkedIn', 'https://www.linkedin.com/company/evertrust-overseas/'],
  ['Instagram', 'https://www.instagram.com/evertrustoverseas?igsh=MWw2ZzZkZ3VndWl4cA=='],
]

export default function Footer() {
  const { data } = useTranslationContext()
  const activeNavLinks = data.navLinks || navLinks
  const activeSiteMeta = data.siteMeta || siteMeta
  const title = useTranslatedText('Bringing Premium Indian Products to International Markets.')
  const copy = useTranslatedText(
    'EverTrust Overseas delivers agricultural, herbal, organic, superfood, and other product categories with integrity, professionalism, and a partnership-first export approach.',
  )
  const navTitle = useTranslatedText('Navigation')
  const contactTitle = useTranslatedText('Contact')
  const partnerLabel = useTranslatedText('Trust, Carried Forward')
  const whatsappLabel = useTranslatedText('WhatsApp Chat')

  return (
    <footer className="mt-20 bg-evergreen text-white">
      <div className="container-shell py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <img
              src="/logo-full-transparent.png"
              alt={`${activeSiteMeta.companyName} logo`}
              className="h-14 w-auto bg-white rounded-lg m-2"
            />
            <p className="eyebrow border-white/15 bg-white/10 text-white">{partnerLabel}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold">{title}</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/74">{copy}</p>
          </div>

          {/* <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{navTitle}</h3>
            <div className="mt-5 flex flex-col gap-3">
              {activeNavLinks.map((link) => (
                <Link key={link.href} to={link.href} className="text-white/78 hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div> */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">{contactTitle}</h3>
            <div className="mt-5 space-y-3 text-white/78">
              <p>
                Office Flat No. 430, Angel Heights, National Highway 44 Link Road, Hurawali, Gwalior, Madhya Pradesh, India (PIN - 474006)
              </p>
              <a href={`mailto:${activeSiteMeta.email}`} className="block hover:text-white">
                {activeSiteMeta.email}
              </a>
              <a href={`tel:${activeSiteMeta.phone}`} className="block hover:text-white">
                {activeSiteMeta.phone}
              </a>
              <a
                href={`https://wa.me/${activeSiteMeta.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-white"
              >
                {whatsappLabel}
              </a>
              <div className="flex flex-wrap gap-3 pt-4">
                {socials.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/78 hover:border-gold hover:text-gold"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60">
          © 2026 {activeSiteMeta.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
