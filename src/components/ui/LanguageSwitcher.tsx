import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLanguage = i18n.resolvedLanguage || i18n.language

    return (
        <div className="flex justify-end text-right items-center" role="group" aria-label="Language selection">
            <button
                type="button"
                className="cursor-pointer font-medium rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                aria-pressed={currentLanguage === 'en'}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="mx-1">/</span>
            <button
                type="button"
                className="cursor-pointer font-medium rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                aria-pressed={currentLanguage === 'es'}
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
