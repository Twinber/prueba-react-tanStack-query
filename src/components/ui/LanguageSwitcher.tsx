import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLanguage = i18n.resolvedLanguage || i18n.language

    return (
        <div className="flex justify-end text-right items-center gap-1" role="group" aria-label="Language selection">
            <button
                className={`cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLanguage === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLanguage === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="text-zinc-400">/</span>
            <button
                className={`cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLanguage === 'es' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLanguage === 'es'}
            >
                ES
            </button>
        </div>
    )
}
