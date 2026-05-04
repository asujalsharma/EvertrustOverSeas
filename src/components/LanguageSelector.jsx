import { useState, useRef, useEffect } from 'react'
import { languages } from '../data/siteData'

export default function LanguageSelector({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredLanguages = languages.filter((lang) =>
    lang.label.toLowerCase().includes(search.toLowerCase())
  )

  const selectedLang = languages.find((l) => l.code === language) || languages[0]

  return (
    <div className="relative inline-block w-full text-left lg:w-auto" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full min-w-[140px] items-center justify-between gap-2 rounded-full border border-evergreen/15 bg-white px-4 py-2 text-sm text-evergreen outline-none lg:w-auto"
      >
        <span className="truncate">{selectedLang.label}</span>
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-full origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none lg:w-64">
          <div className="border-b border-gray-100 p-2">
            <div className="relative">
              <svg
                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search language..."
                className="w-full rounded-md border border-gray-200 py-2 pl-9 pr-3 text-sm focus:border-evergreen focus:outline-none focus:ring-1 focus:ring-evergreen"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredLanguages.length === 0 ? (
              <div className="p-3 text-center text-sm text-gray-500">No languages found</div>
            ) : (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  className={`w-full px-4 py-2 text-left text-sm ${
                    language === lang.code
                      ? 'bg-evergreen/10 font-medium text-evergreen'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    setLanguage(lang.code)
                    setIsOpen(false)
                    setSearch('')
                  }}
                >
                  {lang.label}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
