import { Link } from 'react-router-dom'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import SectionIntro from './SectionIntro'

export default function HorizontalProductShowcase({ products }) {
  const sectionRef = useRef(null)
  const scrollRef = useRef(null)
  const totalCards = products.length

  const [scrollRange, setScrollRange] = useState(() => {
    if (typeof window !== 'undefined') {
      const estimatedWidth = totalCards * 512 + (totalCards > 0 ? (totalCards - 1) * 24 : 0) + 192
      return Math.max(0, estimatedWidth - window.innerWidth)
    }
    return 0
  })
  const [viewportHeight, setViewportHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800)

  useEffect(() => {
    const updateDimensions = () => {
      if (scrollRef.current) {
        const range = Math.max(0, scrollRef.current.scrollWidth - window.innerWidth)
        setScrollRange(range)
        setViewportHeight(window.innerHeight)
      }
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [products])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange])
  const smoothX = useSpring(x, {
    stiffness: 125,
    damping: 22,
    mass: 0.28,
  })
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  })
  const introY = useTransform(scrollYProgress, [0, 1], [0, -70])
  const introOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [1, 1, 0.55, 0.2])

  return (
    <section
      ref={sectionRef}
      className="relative hidden lg:block"
      style={{ height: scrollRange > 0 ? `${(scrollRange * 0.7) + viewportHeight}px` : '100vh' }}
    >
      <div className="sticky top-20 overflow-hidden">
        <motion.div style={{ y: introY, opacity: introOpacity }} className="container-shell py-12">
          {/* <SectionIntro
            eyebrow="Featured Products"
            title="A cinematic product journey that slows the scroll and lets buyers explore category depth."
            copy="This section uses Framer Motion scroll transforms to pin the viewport, accelerate horizontal travel, and give each product more visual presence before the page continues."
          /> */}
          <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-evergreen/10">
            <motion.div
              className="h-full origin-left rounded-full bg-gradient-to-r from-gold via-moss to-evergreen"
              style={{ scaleX: progressScale }}
            />
          </div>
        </motion.div>

        <motion.div ref={scrollRef} style={{ x: smoothX }} className="flex w-max gap-6 px-[max(1rem,calc((100vw-80rem)/2+1rem))] pb-12 pt-4">
          {products.map((product, index) => (
            <motion.article
              key={product.slug}
              className="group relative flex h-[70vh] min-h-[540px] w-[32rem] shrink-0 flex-col justify-end overflow-hidden rounded-[34px] border border-white/20 shadow-soft"
              initial={{ opacity: 0.6, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -14, scale: 1.015 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
            >
              <motion.img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#07130fcc] via-[#07130f66] to-transparent"
                whileHover={{ opacity: 0.88 }}
              />
              <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur">
                {String(index + 1).padStart(2, '0')}
              </div>
              <motion.div
                className="relative z-10 p-8 text-white"
                initial={{ opacity: 0.9, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">{product.category}</p>
                <h3 className="mt-4 font-display text-4xl font-semibold">{product.name}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/78">{product.shortDescription}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to={`/products/${product.slug}`}
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-evergreen transition hover:bg-sand"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/inquiry"
                    className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:text-gold"
                  >
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
