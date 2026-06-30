import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import HorizontalProductShowcase from '../components/HorizontalProductShowcase'
import MotionSection from '../components/MotionSection'
import ProductCard from '../components/ProductCard'
import SectionIntro from '../components/SectionIntro'
import ServiceCard from '../components/ServiceCard'
import StatCard from '../components/StatCard'
import TestimonialCard from '../components/TestimonialCard'
import ContactForm from '../components/ContactForm'
import OceanScene from '../components/OceanScene'
import { certifications, heroMetrics, products, services, siteMeta, testimonials, values } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function HomePage() {
  const { data } = useTranslationContext()
  const activeSiteMeta = data.siteMeta || siteMeta
  const activeHeroMetrics = data.heroMetrics || heroMetrics
  const activeValues = data.values || values
  const activeProducts = data.products || products
  const activeServices = data.services || services
  const activeCertifications = data.certifications || certifications
  const activeTestimonials = data.testimonials || testimonials

  const customEyebrow = useTranslatedText('Need Something Else?')
  const customTitle = useTranslatedText('We export many more products beyond the items listed here.')
  const customCopy = useTranslatedText(
    'If the exact product you need is not shown in this catalog, you can still send us your requirement. We also support customized products export and additional export categories on request.',
  )
  const customButton = useTranslatedText('Request a Custom Product')

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EverTrust Overseas",
    "image": "https://www.evertrustoverseas.com/logo-full-transparent.png",
    "description": "EverTrust Overseas is a leading Indian exporter and sourcing partner for premium herbal wellness products, superfoods, spices, and bulk agricultural commodities.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gwalior",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "India"
    },
    "url": "https://www.evertrustoverseas.com",
    "telephone": "+91 9589741221",
    "email": "info@evertrustoverseas.com",
    "priceRange": "$$"
  }

  return (
    <>
      <SEO
        title="EverTrust Overseas | Indian Herbal Products Export & Sourcing"
        description="EverTrust Overseas is a leading Indian exporter and sourcing partner for premium agricultural commodities, herbal products, herbal powders (Ashwagandha, Moringa, Beetroot), fruit powders (Alphonso Mango), mustard oil, and spices in bulk."
        keywords="herbal products export, herbal sourcing India, Indian herbal supplier, bulk herbs exporter, herbal powders, Ashwagandha powder, moringa powder, Beetroot powder, alphonso mango powder, all types of herbal products, all types of herbal powders, all agricultural products, mustard oil export, agricultural exports India, private label wellness products"
        schema={schema}
      />
      <section className="relative overflow-hidden pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,18,40,0.64),rgba(10,27,54,0.5),rgba(17,42,74,0.42))]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(230,185,56,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(102,168,226,0.14),transparent_24%)]" />
        </div>
        <div className="absolute inset-0 bg-mesh opacity-35" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(16,60,113,0.22))]" />
        <div className="container-shell relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <MotionSection>
              <div className="">
                <p className="eyebrow border-white/20 bg-white/10 text-white">Trust, Carried Forward</p>
                <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
                  Your Trusted Export Partner for Premium Indian Herbal Products & Sourcing.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                  {activeSiteMeta.companyName} helps importers, distributors, and brands source high-value
                  agricultural, herbal, organic, and superfood products from India with professionalism and trust.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/inquiry" className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-lg transition hover:bg-white">
                    Request a Quote
                  </Link>
                  <Link to="/products" className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold">
                    Explore Products
                  </Link>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {activeHeroMetrics.map((metric) => (
                    <StatCard key={metric.label} {...metric} />
                  ))}
                </div>
              </div>
            </MotionSection>

            {/* <MotionSection className="relative" delay={0.15}>
              <div className="card-panel animate-fadeUp overflow-hidden p-4">
                <OceanScene />
              </div>
              <div className="card-panel absolute -bottom-8 left-5 max-w-xs p-5 sm:left-auto sm:right-5 sm:max-w-sm">
                <img
                  src="/logo-mark-transparent.png"
                  alt="EverTrust mark"
                  className="mb-4 h-14 w-14"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Certified Excellence</p>
                <p className="mt-3 text-lg font-semibold text-evergreen">{activeSiteMeta.certification}</p>
                <p className="mt-2 text-sm leading-7 text-ink/65">
                  Backed by quality-led systems and a partnership approach designed for serious international trade.
                </p>
              </div>
            </MotionSection> */}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <MotionSection>
            <SectionIntro
              eyebrow="Why EverTrust"
              title="A modern export partner built on integrity, discipline, and long-term business value."
              copy="We bring a clear commercial mindset to global sourcing while preserving the warmth and accountability of a focused, responsive team."
            />
          </MotionSection>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {activeValues.map((value) => (
              <MotionSection key={value.title}>
                <div className="card-panel p-8">
                <h3 className="text-2xl font-semibold text-evergreen">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ink/68">{value.description}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <HorizontalProductShowcase products={activeProducts} />

      <section className="section-space pt-0 lg:hidden">
        <div className="container-shell">
          <SectionIntro
            eyebrow="Featured Products"
            title="Export-focused product categories with strong global market relevance."
            copy="From wellness ingredients to culinary essentials, our portfolio is curated for importers seeking quality, differentiation, and dependable supply support."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
            <motion.article
              className="card-panel relative flex flex-col items-center justify-center overflow-hidden border border-white/10 bg-evergreen p-8 text-center text-white"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,185,56,0.15),transparent_40%)]" />
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{customEyebrow}</p>
                <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">{customTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-white/78">
                  {customCopy}
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-evergreen shadow-lg transition hover:bg-gold hover:text-white"
                >
                  {customButton}
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="container-shell">
          <MotionSection>
            <SectionIntro
              eyebrow="Services"
              title="Flexible export services designed around how global buyers actually work."
              copy="We support bulk purchasing, private-label growth, custom sourcing, and strategic distribution needs through a modular service model."
            />
          </MotionSection>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeServices.map((service) => (
              <MotionSection key={service.title}>
                <ServiceCard service={service} />
              </MotionSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="gridgap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <MotionSection>
              <SectionIntro
                eyebrow="Certification & Trust"
                title="Built to strengthen buyer confidence from the first conversation."
                copy="Our company profile, quality posture, and India-based sourcing advantage position us to serve serious buyers with professionalism."
              />
              <div className="grid grid-cols-2 gap-6 mt-8 space-y-5 w-full">
                {activeCertifications.map((item) => (
                  <div key={item.title} className="card-panel p-6">
                    <h3 className="text-xl font-semibold text-evergreen">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-ink/66">{item.description}</p>
                  </div>
                ))}
              </div>
            </MotionSection>
            {/* <div className="grid gap-6">
              {activeTestimonials.map((item) => (
                <MotionSection key={item.name}>
                  <TestimonialCard item={item} />
                </MotionSection>
              ))}
            </div> */}
          </div>
        </div>
      </section>

      <section className="section-space bg-white/50">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <MotionSection>
              <SectionIntro
                eyebrow="Start the Conversation"
                title="Tell us what you need and we’ll help shape the right sourcing path."
                copy="Whether you need bulk quantities, private-label support, or a custom product strategy, we’re ready to discuss your goals."
              />
            </MotionSection>
            <MotionSection delay={0.15}>
              <ContactForm title="Quick Contact Form" />
            </MotionSection>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
