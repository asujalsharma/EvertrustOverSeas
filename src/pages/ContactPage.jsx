import ContactForm from '../components/ContactForm'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import { siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import SEO from '../components/SEO'

export default function ContactPage() {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact EverTrust Overseas",
    "description": "Reach out to EverTrust Overseas for custom products, private label inquiries, and wholesale herbal/agricultural purchases.",
    "url": "https://www.evertrustoverseas.com/contact"
  }

  return (
    <>
      <SEO
        title="Contact Us | Indian Exporter & Sourcing Agent | EverTrust Overseas"
        description="Get in touch with EverTrust Overseas for wholesale pricing, custom herbal product sourcing, and export partnership inquiries."
        keywords="contact Indian exporter, wholesale product inquiry, import from India, herbal sourcing contact, agricultural export partner, bulk herbs supplier contact"
        schema={schema}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Start a serious exporting conversation with EverTrust Overseas."
        description="Reach out for product discussions, private-label requirements, buyer partnerships, or export inquiries."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-5">
              <div className="card-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Email</p>
                <a href={`mailto:${activeSiteMeta.email}`} className="mt-3 block text-xl font-semibold text-evergreen">
                  {activeSiteMeta.email}
                </a>
              </div>
              <div className="card-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Phone</p>
                <a href={`tel:${activeSiteMeta.phone}`} className="mt-3 block text-xl font-semibold text-evergreen">
                  {activeSiteMeta.phone}
                </a>
              </div>
              <div className="card-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Website</p>
                <a
                  href={`https://${activeSiteMeta.website}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-xl font-semibold text-evergreen"
                >
                  {activeSiteMeta.website}
                </a>
              </div>
              <div className="card-panel p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Headquarters</p>
                <p className="mt-3 text-xl font-semibold text-evergreen">{activeSiteMeta.location}</p>
              </div>
            </div>
            <ContactForm title="Send Us a Message" />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
