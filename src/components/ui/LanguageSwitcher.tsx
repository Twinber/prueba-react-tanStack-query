import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLanguage = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div
            className="flex justify-end text-right gap-1 items-center"
            role="group"
            aria-label="Language switch"
        >
            <button
                className={`cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1 ${currentLanguage === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLanguage === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none">/</span>
            <button
                className={`cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1 ${currentLanguage === 'es' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLanguage === 'es'}
            >
                ES
            </button>
        </div>
    )
}
