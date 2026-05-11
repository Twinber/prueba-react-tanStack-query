import React from "react"
import {useTranslation} from "react-i18next"
import {cn} from "@/lib/utils"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const buttonClasses = "cursor-pointer transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded px-1"

    return (
        <div className="flex justify-end text-right text-zinc-500 dark:text-zinc-400 font-medium" role="group" aria-label="Language selection">
            <button
                className={cn(buttonClasses, currentLang === 'en' && "text-zinc-900 dark:text-zinc-50 underline underline-offset-4")}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="px-1 text-zinc-300 dark:text-zinc-600">/</span>
            <button
                className={cn(buttonClasses, currentLang === 'es' && "text-zinc-900 dark:text-zinc-50 underline underline-offset-4")}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
