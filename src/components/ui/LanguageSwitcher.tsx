import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLang = i18n.resolvedLanguage || i18n.language

    return (
        <div
            className="flex justify-end text-right items-center gap-1"
            role="group"
            aria-label="Language switcher"
        >
            <button
                type="button"
                className={`rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLang === 'en' ? 'font-bold underline' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="text-zinc-400">/</span>
            <button
                type="button"
                className={`rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLang === 'es' ? 'font-bold underline' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
