import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLang = i18n.resolvedLanguage || i18n.language;
    const buttonClass = "cursor-pointer rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2";

    return (
        <div className="flex justify-end items-center gap-1 text-right" role="group" aria-label="Language">
            <button
                type="button"
                className={`${buttonClass} ${currentLang === 'en' ? 'font-bold' : ''}`}
                aria-pressed={currentLang === 'en'}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-muted-foreground">/</span>
            <button
                type="button"
                className={`${buttonClass} ${currentLang === 'es' ? 'font-bold' : ''}`}
                aria-pressed={currentLang === 'es'}
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
