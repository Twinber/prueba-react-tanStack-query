import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right items-center gap-1">
            <button
                type="button"
                className={`px-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-1 ${i18n.language === 'en' ? 'font-bold underline' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                onClick={() => handleLanguageChange('en')}
                aria-label="Switch to English"
                aria-current={i18n.language === 'en' ? 'true' : undefined}
            >
                EN
            </button>
            <span aria-hidden="true" className="text-zinc-400">/</span>
            <button
                type="button"
                className={`px-1 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-1 ${i18n.language === 'es' ? 'font-bold underline' : 'hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
                onClick={() => handleLanguageChange('es')}
                aria-label="Cambiar a Español"
                aria-current={i18n.language === 'es' ? 'true' : undefined}
            >
                ES
            </button>
        </div>
    )
}
