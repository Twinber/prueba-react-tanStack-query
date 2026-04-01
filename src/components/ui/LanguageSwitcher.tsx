import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right items-center gap-1" role="group" aria-label="Language">
            <button
                type="button"
                className={`cursor-pointer rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 hover:underline ${currentLang === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-zinc-500">/</span>
            <button
                type="button"
                className={`cursor-pointer rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 hover:underline ${currentLang === 'es' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
