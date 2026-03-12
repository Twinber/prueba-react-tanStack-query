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
                className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 rounded"
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true">/</span>
            <button
                className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 rounded"
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
