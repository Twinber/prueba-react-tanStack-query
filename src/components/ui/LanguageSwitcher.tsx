import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const activeLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const buttonClass = "cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"

    return (
        <div
            className="flex items-center justify-end gap-1 text-right"
            role="group"
            aria-label="Language selection"
        >
            <button
                type="button"
                className={buttonClass}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={activeLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-zinc-500">/</span>
            <button
                type="button"
                className={buttonClass}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={activeLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
