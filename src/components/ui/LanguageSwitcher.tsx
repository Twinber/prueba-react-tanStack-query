import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div role="group" aria-label="Language selection" className="flex items-center justify-end gap-1 text-right">
            <button
                aria-label="English"
                aria-current={currentLang === 'en' ? 'true' : undefined}
                className={`cursor-pointer rounded hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLang === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="text-muted-foreground select-none">/</span>
            <button
                aria-label="Spanish"
                aria-current={currentLang === 'es' ? 'true' : undefined}
                className={`cursor-pointer rounded hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLang === 'es' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
