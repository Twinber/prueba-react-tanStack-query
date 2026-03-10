import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex items-center justify-end gap-2 text-right">
            <button
                className={`cursor-pointer rounded-sm px-1 py-0.5 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300 ${i18n.language === 'en' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
                aria-current={i18n.language === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="text-zinc-400">/</span>
            <button
                className={`cursor-pointer rounded-sm px-1 py-0.5 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:hover:bg-zinc-800 dark:focus-visible:ring-zinc-300 ${i18n.language === 'es' ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-label="Switch to Spanish"
                aria-current={i18n.language === 'es'}
            >
                ES
            </button>
        </div>
    )
}
