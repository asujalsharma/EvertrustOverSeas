import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useTranslatedText from '../hooks/useTranslatedText'

export default function ProductCard({ product }) {
  const detailsLabel = useTranslatedText('View Details')

  return (
    <motion.article
      className="card-panel overflow-hidden"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{product.category}</p>
        <h3 className="mt-3 text-2xl font-semibold text-evergreen">{product.name}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/68">{product.shortDescription}</p>
        <Link to={`/products/${product.slug}`} className="mt-5 inline-flex text-sm font-semibold text-evergreen hover:text-gold">
          {detailsLabel}
        </Link>
      </div>
    </motion.article>
  )
}
