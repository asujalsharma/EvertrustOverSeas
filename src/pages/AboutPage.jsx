import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SectionIntro from '../components/SectionIntro'
import { siteMeta, values } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import SEO from '../components/SEO'

export default function AboutPage() {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta
  const activeValues = data.values || values

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About EverTrust Overseas",
    "description": "EverTrust Overseas is an ISO 9001:2015 certified merchant exporter from India. Sourcing and exporting premium herbal wellness products, superfoods, spices, and agricultural commodities.",
    "url": "https://www.evertrustoverseas.com/about"
  }

  return (
    <>
      <SEO
        title="About Us | Herbal & Agricultural Exporter India | EverTrust Overseas"
        description="Learn about EverTrust Overseas, an ISO 9001:2015 certified merchant exporter from India. Sourcing and exporting premium herbal ingredients, wellness plants, and agricultural commodities."
        keywords="about EverTrust Overseas, certified Indian exporter, herbal supplier credentials, sourcing company profile, organic exports India, Gwalior exporter"
        schema={schema}
      />
      <PageHero
        eyebrow="About EverTrust"
        title="An emerging Indian export company focused on premium service, ethical trade, and dependable relationships."
        description="Founded in 2025 in Gwalior, Madhya Pradesh, EverTrust Overseas brings a modern, globally aware approach to exporting agricultural, herbal, organic, and superfood products."
      />

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <SectionIntro
                eyebrow="Company Profile"
                title="We combine India’s product strength with a polished export mindset."
                copy="Our mission is to create long-term value for global buyers through transparent communication, trustworthy sourcing, and premium product presentation."
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="card-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Headquarters</p>
                  <p className="mt-3 text-xl font-semibold text-evergreen">{activeSiteMeta.location}</p>
                </div>
                <div className="card-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Company Size</p>
                  <p className="mt-3 text-xl font-semibold text-evergreen">2–10 Employees</p>
                </div>
                <div className="card-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Founded</p>
                  <p className="mt-3 text-xl font-semibold text-evergreen">{activeSiteMeta.founded}</p>
                </div>
                <div className="card-panel p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Certification</p>
                  <p className="mt-3 text-xl font-semibold text-evergreen">{activeSiteMeta.certification}</p>
                </div>
              </div>
            </div>
            <div className="card-panel overflow-hidden p-4">
              <img
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=80"
                alt="Trade and export operations"
                className="h-[520px] w-full rounded-[28px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Core Values"
            title="Trust is not a slogan for us. It is the structure behind how we operate."
            copy="Every partnership is guided by clarity, professionalism, and a commitment to helping buyers feel confident at every stage."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {activeValues.map((value) => (
              <div key={value.title} className="card-panel p-8">
                <h3 className="text-2xl font-semibold text-evergreen">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/68">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
