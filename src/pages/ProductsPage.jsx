import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { products } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'

export default function ProductsPage() {
  const { data } = useTranslationContext()
  const activeProducts = data.products || products
  const customEyebrow = useTranslatedText('Need Something Else?')
  const customTitle = useTranslatedText('We source many more products beyond the items listed here.')
  const customCopy = useTranslatedText(
    'If the exact product you need is not shown in this catalog, you can still send us your requirement. We also support customized sourcing and additional export categories on request.',
  )
  const customButton = useTranslatedText('Request a Custom Product')

  return (
    <>
      <PageHero
        eyebrow="Product Portfolio"
        title="A focused export catalog for wellness, food, herbal, and ingredient-driven markets."
        description="Explore our modular product range built for wholesalers, private-label brands, distributors, and global sourcing teams."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="mb-10 overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#162655_0%,#1d6f67_55%,#2077c8_100%)] px-8 py-10 text-white shadow-soft sm:px-10">
            <p className="eyebrow border-white/20 bg-white/10 text-white">{customEyebrow}</p>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="font-display text-4xl font-semibold sm:text-5xl">{customTitle}</h2>
                <p className="mt-4 text-base leading-8 text-white/78">{customCopy}</p>
              </div>
              <Link
                to="/inquiry"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-evergreen transition hover:bg-sand"
              >
                {customButton}
              </Link>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {activeProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
