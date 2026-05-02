import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { languages, navLinks, siteMeta } from '../data/siteData'
import { useTranslationContext } from '../context/TranslationContext'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage, data, isTranslating } = useTranslationContext()
  const activeNavLinks = data.navLinks || navLinks
  const activeSiteMeta = data.siteMeta || siteMeta

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
            {activeNavLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-semibold ${isActive ? 'text-evergreen' : 'text-ink/70 hover:text-evergreen'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="rounded-full border border-evergreen/15 bg-white px-4 py-2 text-sm text-evergreen outline-none"
              aria-label="Select language"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
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
              {activeNavLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-ink/75 hover:text-evergreen"
                >
                  {link.label}
                </NavLink>
              ))}
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
