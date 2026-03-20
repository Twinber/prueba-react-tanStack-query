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
                className="cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
                aria-current={i18n.language === 'en' ? 'true' : undefined}
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                className="cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"
                onClick={() => handleLanguageChange('es')}
                aria-label="Switch to Spanish"
                aria-current={i18n.language === 'es' ? 'true' : undefined}
            >
                ES
            </button>
        </div>
    )
}
