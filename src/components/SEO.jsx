import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEO({ title, description, keywords, image, schema, type = 'website' }) {
  const location = useLocation()
  const canonicalUrl = `https://www.evertrustoverseas.com${location.pathname}`

  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title
    }

    // Helper to set/update meta tag
    const setMetaTag = (name, property, content) => {
      if (!content) return
      let element
      if (name) {
        element = document.querySelector(`meta[name="${name}"]`)
        if (!element) {
          element = document.createElement('meta')
          element.setAttribute('name', name)
          document.head.appendChild(element)
        }
      } else if (property) {
        element = document.querySelector(`meta[property="${property}"]`)
        if (!element) {
          element = document.createElement('meta')
          element.setAttribute('property', property)
          document.head.appendChild(element)
        }
      }
      element.setAttribute('content', content)
    }

    // 2. Update Meta Description and Keywords
    setMetaTag('description', null, description)
    setMetaTag('keywords', null, keywords)

    // 3. Update Open Graph Tags
    setMetaTag(null, 'og:title', title)
    setMetaTag(null, 'og:description', description)
    setMetaTag(null, 'og:type', type)
    setMetaTag(null, 'og:url', canonicalUrl)
    if (image) {
      const absoluteImageUrl = image.startsWith('http') ? image : `https://www.evertrustoverseas.com${image}`
      setMetaTag(null, 'og:image', absoluteImageUrl)
    }

    // 4. Update Twitter Card Tags
    setMetaTag('twitter:card', null, 'summary_large_image')
    setMetaTag('twitter:title', null, title)
    setMetaTag('twitter:description', null, description)
    if (image) {
      const absoluteImageUrl = image.startsWith('http') ? image : `https://www.evertrustoverseas.com${image}`
      setMetaTag('twitter:image', null, absoluteImageUrl)
    }

    // 5. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    // 6. Update Schema (JSON-LD)
    let schemaScript = document.getElementById('jsonld-schema')
    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(schema)
    } else if (schema) {
      schemaScript = document.createElement('script')
      schemaScript.id = 'jsonld-schema'
      schemaScript.type = 'application/ld+json'
      schemaScript.textContent = JSON.stringify(schema)
      document.head.appendChild(schemaScript)
    }

    return () => {
      // Clear schema script on unmount so next page can populate it or leave it clean
      if (schemaScript) {
        schemaScript.textContent = ''
      }
    }
  }, [title, description, keywords, image, schema, canonicalUrl, type])

  return null
}
