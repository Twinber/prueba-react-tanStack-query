import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLang = i18n.resolvedLanguage || i18n.language

    return (
        <div className="flex items-center justify-end gap-1 text-right" role="group" aria-label="Language selection">
            <button
                className={`cursor-pointer rounded px-1 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLang === 'en' ? 'font-bold underline text-zinc-900' : 'text-zinc-500'}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang === 'en'}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-zinc-400">/</span>
            <button
                className={`cursor-pointer rounded px-1 hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${currentLang === 'es' ? 'font-bold underline text-zinc-900' : 'text-zinc-500'}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang === 'es'}
            >
                ES
            </button>
        </div>
    )
}
