import React from "react"
import {useTranslation} from "react-i18next"
import { cn } from "@/lib/utils"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right" role="group" aria-label="Language selection">
            <button
                type="button"
                className={cn(
                    "cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                    currentLang === 'en' ? "font-bold" : "opacity-70 hover:opacity-100"
                )}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="mx-1">/</span>
            <button
                type="button"
                className={cn(
                    "cursor-pointer rounded-sm px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
                    currentLang === 'es' ? "font-bold" : "opacity-70 hover:opacity-100"
                )}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
