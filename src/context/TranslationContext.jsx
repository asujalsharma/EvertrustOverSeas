import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import {
  certifications as baseCertifications,
  faqs as baseFaqs,
  heroMetrics as baseHeroMetrics,
  navLinks as baseNavLinks,
  products as baseProducts,
  services as baseServices,
  siteMeta as baseSiteMeta,
  testimonials as baseTestimonials,
  values as baseValues,
} from '../data/siteData'

const TranslationContext = createContext(null)

const TRANSLATABLE_BUNDLES = {
  siteMeta: baseSiteMeta,
  navLinks: baseNavLinks,
  heroMetrics: baseHeroMetrics,
  values: baseValues,
  services: baseServices,
  certifications: baseCertifications,
  testimonials: baseTestimonials,
  products: baseProducts,
  faqs: baseFaqs,
}

const NON_TRANSLATABLE_KEYS = new Set([
  'slug',
  'href',
  'image',
  'email',
  'phone',
  'whatsapp',
  'website',
  'code',
])

function isSafeLiteral(value) {
  return (
    !value ||
    /^https?:\/\//.test(value) ||
    value.includes('@') ||
    /^\+?[\d\s()-]+$/.test(value) ||
    /^\d+$/.test(value)
  )
}

async function translateTextRequest(text, language) {
  if (!text || language === 'en' || isSafeLiteral(text)) return text

  const endpoint = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${language}&dt=t&q=${encodeURIComponent(text)}`
  const response = await fetch(endpoint)

  if (!response.ok) {
    throw new Error(`Translation failed with status ${response.status}`)
  }

  const payload = await response.json()
  return payload?.[0]?.map((item) => item[0]).join('') || text
}

async function translateValue(value, language, cacheRef, path = '') {
  if (value === null || value === undefined) return value

  if (typeof value === 'string') {
    const cacheKey = `${language}:${path}:${value}`
    if (cacheRef.current.has(cacheKey)) return cacheRef.current.get(cacheKey)
    const translated = await translateTextRequest(value, language)
    cacheRef.current.set(cacheKey, translated)
    return translated
  }

  if (Array.isArray(value)) {
    const translatedItems = await Promise.all(
      value.map((item, index) => translateValue(item, language, cacheRef, `${path}[${index}]`)),
    )
    return translatedItems
  }

  if (typeof value === 'object') {
    const entries = await Promise.all(
      Object.entries(value).map(async ([key, itemValue]) => {
        if (NON_TRANSLATABLE_KEYS.has(key)) {
          return [key, itemValue]
        }
        return [key, await translateValue(itemValue, language, cacheRef, `${path}.${key}`)]
      }),
    )

    return Object.fromEntries(entries)
  }

  return value
}

export function TranslationProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [translatedBundles, setTranslatedBundles] = useState(TRANSLATABLE_BUNDLES)
  const [isTranslating, setIsTranslating] = useState(false)
  const cacheRef = useRef(new Map())

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('evertrust-language')
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('evertrust-language', language)

    if (language === 'en') {
      setTranslatedBundles(TRANSLATABLE_BUNDLES)
      setIsTranslating(false)
      return
    }

    let cancelled = false

    async function runTranslation() {
      setIsTranslating(true)

      try {
        const entries = await Promise.all(
          Object.entries(TRANSLATABLE_BUNDLES).map(async ([key, value]) => {
            const translated = await translateValue(value, language, cacheRef, key)
            return [key, translated]
          }),
        )

        if (!cancelled) {
          setTranslatedBundles(Object.fromEntries(entries))
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Google translation request failed:', error)
          setTranslatedBundles(TRANSLATABLE_BUNDLES)
        }
      } finally {
        if (!cancelled) {
          setIsTranslating(false)
        }
      }
    }

    runTranslation()

    return () => {
      cancelled = true
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      isTranslating,
      data: translatedBundles,
      async t(text) {
        return translateTextRequest(text, language)
      },
    }),
    [language, isTranslating, translatedBundles],
  )

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>
}

export function useTranslationContext() {
  const context = useContext(TranslationContext)

  if (!context) {
    throw new Error('useTranslationContext must be used within TranslationProvider')
  }

  return context
}
