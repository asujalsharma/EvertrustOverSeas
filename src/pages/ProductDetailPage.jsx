import { Link, useParams } from 'react-router-dom'
import CTASection from '../components/CTASection'
import { products } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const { data } = useTranslationContext()
  const activeProducts = data.products || products
  const product = activeProducts.find((item) => item.slug === slug)
  const notFoundLabel = useTranslatedText('Product not found')
  const backLabel = useTranslatedText('Back to Products')
  const quoteLabel = useTranslatedText('Request Product Quote')
  const teamLabel = useTranslatedText('Speak to Our Team')

  if (!product) {
    return (
      <section className="section-space">
        <div className="container-shell">
          <div className="card-panel p-10 text-center">
            <h1 className="text-3xl font-semibold text-evergreen">{notFoundLabel}</h1>
            <Link to="/products" className="btn-primary mt-6">
              {backLabel}
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="card-panel overflow-hidden p-4">
              <img src={product.image} alt={product.name} className="h-[520px] w-full rounded-[28px] object-cover" />
            </div>
            <div>
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-6 font-display text-5xl font-semibold text-evergreen">{product.name}</h1>
              <p className="mt-5 text-lg leading-8 text-ink/72">{product.description}</p>
              <div className="mt-8 space-y-4">
                {product.specs.map((spec) => (
                  <div key={spec} className="card-panel p-5">
                    <p className="text-sm font-medium text-ink/74">{spec}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/inquiry" className="btn-primary">
                  {quoteLabel}
                </Link>
                <Link to="/contact" className="btn-secondary">
                  {teamLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
