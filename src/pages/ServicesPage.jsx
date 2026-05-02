import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import { services, faqs } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'

export default function ServicesPage() {
  const { data } = useTranslationContext()
  const activeServices = data.services || services
  const activeFaqs = data.faqs || faqs

  return (
    <>
      <PageHero
        eyebrow="Export Services"
        title="Commercial support that goes beyond supply and helps buyers scale with confidence."
        description="Our services are structured to support product sourcing, branding opportunities, customized requirements, and long-term distribution collaboration."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-space bg-white/50">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-3">
            {activeFaqs.map((faq) => (
              <div key={faq.question} className="card-panel p-7">
                <h3 className="text-xl font-semibold text-evergreen">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/68">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
