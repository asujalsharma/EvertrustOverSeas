import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { languages, navLinks, siteMeta, products } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'
import LanguageSelector from './LanguageSelector'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const { language, setLanguage, data, isTranslating } = useTranslationContext()
  const activeNavLinks = data.navLinks || navLinks
  const activeSiteMeta = data.siteMeta || siteMeta
  const activeProducts = data.products || products

  // Group products by category
  const groupedProducts = activeProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {})

  return (
    <header className="sticky top-0 z-50 border-b border-evergreen/10 bg-mist/90 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-4">
            <img
              src="/logo-full-transparent.png"
              alt={`${activeSiteMeta.companyName} logo`}
              className="h-14 w-auto sm:h-24"
            />
            <div className="hidden xl:block">
              <p className="text-sm tracking-[0.1em] text-ink/50">Trust, Carried Forward</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {activeNavLinks.map((link) => {
              if (link.href === '/products') {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `text-sm font-semibold flex items-center gap-1.5 py-6 ${
                          isActive ? 'text-evergreen' : 'text-ink/70 hover:text-evergreen'
                        }`
                      }
                    >
                      {link.label}
                      <svg
                        className={`h-3.5 w-3.5 transition-transform duration-250 ${
                          isDropdownOpen ? 'rotate-180 text-gold' : 'text-ink/40'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </NavLink>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-1/2 top-full z-50 w-[780px] -translate-x-1/2 pt-2"
                        >
                          <div className="card-panel border border-evergreen/10 bg-white/95 backdrop-blur-xl shadow-2xl p-8 grid grid-cols-3 gap-8 rounded-[28px]">
                            {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                              <div key={category} className="flex flex-col">
                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold border-b border-evergreen/10 pb-2 mb-3">
                                  {category}
                                </h4>
                                <ul className="space-y-1.5">
                                  {categoryProducts.map((p) => (
                                    <li key={p.slug}>
                                      <Link
                                        to={`/products/${p.slug}`}
                                        className="text-sm font-medium text-ink/75 hover:text-evergreen py-1 block transition-colors duration-150"
                                        onClick={() => setIsDropdownOpen(false)}
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }

              return (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-sm font-semibold py-6 ${isActive ? 'text-evergreen' : 'text-ink/70 hover:text-evergreen'}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSelector language={language} setLanguage={setLanguage} />
            <Link to="/inquiry" className="btn-primary">
              {isTranslating ? 'Translating...' : 'Request a Quote'}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex rounded-full border border-evergreen/15 p-3 text-evergreen lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-5 bg-current shadow-[0_6px_0_currentColor,0_-6px_0_currentColor]" />
          </button>
        </div>

        {menuOpen && (
          <div className="card-panel mb-4 p-5 lg:hidden">
            <div className="mb-5 border-b border-navy/10 pb-4">
              <img
                src="/logo-full-transparent.png"
                alt={`${activeSiteMeta.companyName} logo`}
                className="h-10 w-auto"
              />
            </div>
            <nav className="flex flex-col gap-4">
              {activeNavLinks.map((link) => {
                if (link.href === '/products') {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen((prev) => !prev)}
                        className="flex items-center justify-between text-sm font-semibold text-ink/75 hover:text-evergreen text-left py-2"
                      >
                        <span>{link.label}</span>
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${
                            mobileProductsOpen ? 'rotate-180 text-gold' : 'text-ink/40'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden pl-4 border-l border-evergreen/10 mt-1 flex flex-col gap-3"
                          >
                            {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
                              <div key={category} className="mt-2">
                                <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold mb-1">
                                  {category}
                                </h4>
                                <ul className="flex flex-col gap-2">
                                  {categoryProducts.map((p) => (
                                    <li key={p.slug}>
                                      <Link
                                        to={`/products/${p.slug}`}
                                        onClick={() => {
                                          setMenuOpen(false)
                                          setMobileProductsOpen(false)
                                        }}
                                        className="text-xs font-semibold text-ink/65 hover:text-evergreen block py-1"
                                      >
                                        {p.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            <div className="mt-2 border-t border-navy/5 pt-2">
                              <Link
                                to="/products"
                                onClick={() => {
                                  setMenuOpen(false)
                                  setMobileProductsOpen(false)
                                }}
                                className="text-xs font-bold text-evergreen underline block"
                              >
                                View All Products Catalog
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                }

                return (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-semibold text-ink/75 hover:text-evergreen py-2"
                  >
                    {link.label}
                  </NavLink>
                )
              })}
              <div className="mt-2">
                <LanguageSelector language={language} setLanguage={setLanguage} />
              </div>
              <Link to="/inquiry" onClick={() => setMenuOpen(false)} className="btn-primary mt-2">
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
