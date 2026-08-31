import React from "react"
import {useTranslation} from "react-i18next"

import { cn } from "@/lib/utils"

export const LanguageSwitcher: React.FC = () => {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div
            className="flex items-center justify-end gap-1 text-sm text-zinc-600 dark:text-zinc-400"
            role="group"
            aria-label={t('language', 'Language')}
        >
            <button
                type="button"
                className={cn(
                    "cursor-pointer rounded-sm px-1 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300",
                    currentLang?.startsWith('en') && "font-semibold text-zinc-900 dark:text-zinc-50"
                )}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang?.startsWith('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-zinc-300 dark:text-zinc-700">/</span>
            <button
                type="button"
                className={cn(
                    "cursor-pointer rounded-sm px-1 transition-colors hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-300",
                    currentLang?.startsWith('es') && "font-semibold text-zinc-900 dark:text-zinc-50"
                )}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang?.startsWith('es')}
            >
                ES
            </button>
        </div>
    )
}
