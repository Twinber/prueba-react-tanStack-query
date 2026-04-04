import React from "react"
import {useTranslation} from "react-i18next"
import {cn} from "@/lib/utils"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language || 'en'

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div
            className="flex justify-end items-center gap-1 text-sm"
            role="group"
            aria-label="Language selection"
        >
            <button
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
                className={cn(
                    "px-1 py-0.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                    currentLang === 'en' ? "font-bold text-zinc-900 dark:text-zinc-50" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                )}
            >
                EN
            </button>

            <span aria-hidden="true" className="text-zinc-300 dark:text-zinc-700 select-none">
                /
            </span>

            <button
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
                className={cn(
                    "px-1 py-0.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                    currentLang === 'es' ? "font-bold text-zinc-900 dark:text-zinc-50" : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                )}
            >
                ES
            </button>
        </div>
    )
}
