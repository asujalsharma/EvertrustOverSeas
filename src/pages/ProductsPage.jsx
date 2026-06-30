import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { products } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import useTranslatedText from '../hooks/useTranslatedText'
import SEO from '../components/SEO'

export default function ProductsPage() {
  const { data } = useTranslationContext()
  const activeProducts = data.products || products
  const customEyebrow = useTranslatedText('Need Something Else?')
  const customTitle = useTranslatedText('We export many more products beyond the items listed here.')
  const customCopy = useTranslatedText(
    'If the exact product you need is not shown in this catalog, you can still send us your requirement. We also support customized products export and additional export categories on request.',
  )
  const customButton = useTranslatedText('Request a Custom Product')

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "EverTrust Overseas Products",
    "description": "Premium Indian exports including Ashwagandha, Moringa, Psyllium Husk, spices, organic jaggery, and sattu flour.",
    "url": "https://www.evertrustoverseas.com/products"
  }

  return (
    <>
      <SEO
        title="Bulk Export Catalog | Indian Herbs, Spices & Superfoods | EverTrust Overseas"
        description="Browse our bulk export catalog of premium Indian agricultural products, spices, herbal products, edible oils, and high-grade herbal powders like Ashwagandha, Moringa, and Beetroot powder."
        keywords="herbal product catalog, bulk agricultural products, all agricultural products, herbal powders, Ashwagandha powder, moringa powder, Beetroot powder, alphonso mango powder, all types of herbal products, all types of herbal powders, mustard oil export, Indian spices wholesale, psyllium husk supplier, wholesale herbs exporting"
        schema={schema}
      />
      <PageHero
        eyebrow="Product Portfolio"
        title="A focused export catalog for wellness, food, herbal, and ingredient-driven markets."
        description="Explore our modular product range built for wholesalers, private-label brands, distributors, and global exporting teams."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
      <CTASection />
    </>
  )
}
