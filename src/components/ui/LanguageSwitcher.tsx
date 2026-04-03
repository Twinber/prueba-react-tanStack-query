import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en'

    return (
        <div className="flex justify-end text-right items-center" role="group" aria-label="Language selection">
            <button
                className={`cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLanguage.startsWith('en') ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLanguage.startsWith('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="mx-1">/</span>
            <button
                className={`cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLanguage.startsWith('es') ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLanguage.startsWith('es')}
            >
                ES
            </button>
        </div>
    )
}
