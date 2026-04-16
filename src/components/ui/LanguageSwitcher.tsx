import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const buttonClass = "cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"

    return (
        <div
            className="flex items-center justify-end gap-1 text-right"
            role="group"
            aria-label="Select language"
        >
            <button
                type="button"
                className={`${buttonClass} ${currentLang === 'en' ? 'font-bold underline' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none">/</span>
            <button
                type="button"
                className={`${buttonClass} ${currentLang === 'es' ? 'font-bold underline' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
