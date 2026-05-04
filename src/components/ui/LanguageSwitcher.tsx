import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLanguage = i18n.resolvedLanguage || i18n.language

    return (
        <div
            className="flex justify-end items-center text-right"
            role="group"
            aria-label={t('language_switcher_aria_label', 'Language selection')}
        >
            <button
                type="button"
                className={`cursor-pointer rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLanguage === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLanguage === 'en'}
                aria-label="English"
            >
                EN
            </button>
            <span className="mx-1" aria-hidden="true">/</span>
            <button
                type="button"
                className={`cursor-pointer rounded px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLanguage === 'es' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLanguage === 'es'}
                aria-label="Español"
            >
                ES
            </button>
        </div>
    )
}