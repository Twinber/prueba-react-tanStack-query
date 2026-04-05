import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const currentLanguage = i18n.resolvedLanguage || i18n.language

    const getButtonClass = (lang: string) => {
        const isActive = currentLanguage?.startsWith(lang)
        return `cursor-pointer rounded px-1 transition-colors hover:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 ${
            isActive ? 'font-bold underline' : ''
        }`
    }

    return (
        <div role="group" aria-label="Language selection" className="flex items-center justify-end gap-1 text-right">
            <button
                type="button"
                aria-pressed={currentLanguage?.startsWith('en')}
                className={getButtonClass('en')}
                onClick={() => handleLanguageChange('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="select-none text-zinc-400">/</span>
            <button
                type="button"
                aria-pressed={currentLanguage?.startsWith('es')}
                className={getButtonClass('es')}
                onClick={() => handleLanguageChange('es')}
            >
                ES
            </button>
        </div>
    )
}
