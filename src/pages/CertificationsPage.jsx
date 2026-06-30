import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import { certifications, siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import SEO from '../components/SEO'

export default function CertificationsPage() {
  const { data } = useTranslationContext()
  const activeCertifications = data.certifications || certifications
  const activeSiteMeta = data.siteMeta || siteMeta

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Export Certifications and Quality Standards",
    "description": "EverTrust Overseas is ISO 9001:2015 certified, FSSAI licensed, APEDA registered merchant exporter.",
    "url": "https://www.evertrustoverseas.com/certifications"
  }

  return (
    <>
      <SEO
        title="Export Certifications & Quality Standards | EverTrust Overseas"
        description="EverTrust Overseas is ISO 9001:2015 certified, FSSAI licensed, and APEDA registered. We maintain high standards of quality, transparency, and compliance for international trade."
        keywords="ISO 9001:2015 exporter, FSSAI licensed exporter, APEDA registered supplier, Indian export credentials, quality assurance sourcing, herbal export compliance"
        schema={schema}
      />
      <PageHero
        eyebrow="Certifications"
        title="Quality signals that help international buyers move forward with confidence."
        description="Our certifications and operating philosophy reinforce a premium, trustworthy brand identity for global sourcing conversations."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-2">
            {activeCertifications.map((item) => (
              <article key={item.title} className="card-panel overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden border-b border-navy/8 bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                    {item.issuer}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-evergreen">{item.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-ink/68">{item.description}</p>
                  <p className="mt-4 text-sm font-medium text-navy/70">{item.meta}</p>
                </div>
              </article>
            ))}
            {/* <div className="card-panel bg-evergreen p-8 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Featured Credential</p>
              <h2 className="mt-4 font-display text-4xl font-semibold">{activeSiteMeta.certification}</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Highlight this section prominently in pitches, buyer decks, and export inquiries to
                reinforce process maturity and trust.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
