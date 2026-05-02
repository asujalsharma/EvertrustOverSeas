import { useEffect, useState } from 'react'
import { useTranslationContext } from '../context/TranslationContext'

export default function useTranslatedText(text) {
  const { language, t } = useTranslationContext()
  const [translatedText, setTranslatedText] = useState(text)

  useEffect(() => {
    let cancelled = false

    async function run() {
      if (language === 'en') {
        setTranslatedText(text)
        return
      }

      const nextText = await t(text)
      if (!cancelled) {
        setTranslatedText(nextText)
      }
    }

    run()

    return () => {
      cancelled = true
    }
  }, [language, t, text])

  return translatedText
}
