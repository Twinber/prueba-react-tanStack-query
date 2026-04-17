import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation()
    const currentLang = i18n.resolvedLanguage || i18n.language

    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    const buttonClass = "cursor-pointer rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2"

    return (
        <div
            className="flex justify-end text-right items-center gap-1"
            role="group"
            aria-label={t("Language switcher", { defaultValue: "Language switcher" })}
        >
            <button
                type="button"
                className={`${buttonClass} ${currentLang?.startsWith('en') ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-pressed={currentLang?.startsWith('en')}
            >
                EN
            </button>
            <span aria-hidden="true" className="mx-1">/</span>
            <button
                type="button"
                className={`${buttonClass} ${currentLang?.startsWith('es') ? 'font-bold' : ''}`}
                onClick={() => handleLanguageChange('es')}
                aria-pressed={currentLang?.startsWith('es')}
            >
                ES
            </button>
        </div>
    )
}
