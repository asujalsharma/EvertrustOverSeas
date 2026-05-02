import ContactForm from '../components/ContactForm'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import { siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'

export default function ContactPage() {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start a serious sourcing conversation with EverTrust Overseas."
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
