import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right gap-1 items-center">
            <button
                aria-label="Switch to English"
                className={`cursor-pointer font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1 ${i18n.language === 'en' ? 'font-bold' : ''}`}
                aria-current={i18n.language === 'en' ? 'true' : 'false'}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                aria-label="Switch to Spanish"
                className={`cursor-pointer font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1 ${i18n.language === 'es' ? 'font-bold' : ''}`}
                aria-current={i18n.language === 'es' ? 'true' : 'false'}
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
