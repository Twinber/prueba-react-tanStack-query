import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div
            className="flex justify-end text-right gap-1 items-center"
            role="group"
            aria-label="Language selection"
        >
            <button
                className="cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                aria-pressed={currentLang === 'en'}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-zinc-400">/</span>
            <button
                className="cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                aria-pressed={currentLang === 'es'}
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
