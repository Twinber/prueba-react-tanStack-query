import React from "react"
import {useTranslation} from "react-i18next"
import { cn } from "@/lib/utils"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLanguage = i18n.resolvedLanguage || i18n.language

    return (
        <div
            className="flex justify-end text-right gap-1 items-center"
            role="group"
            aria-label="Select language"
        >
            <button
                type="button"
                className={cn(
                    "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1",
                    currentLanguage === 'en' && "font-bold"
                )}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLanguage === 'en'}
                aria-label="English"
            >
                EN
            </button>
            <span aria-hidden="true" className="text-zinc-400 select-none">/</span>
            <button
                type="button"
                className={cn(
                    "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 rounded-sm px-1",
                    currentLanguage === 'es' && "font-bold"
                )}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLanguage === 'es'}
                aria-label="Español"
            >
                ES
            </button>
        </div>
    )
}
