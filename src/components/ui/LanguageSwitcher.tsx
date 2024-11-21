import React from "react"
import {useTranslation} from "react-i18next"

export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end text-right">
            <span className="cursor-pointer" onClick={() => handleLanguageChange('en')}>EN</span> /
            <span className="cursor-pointer" onClick={() => handleLanguageChange('es')}>ES</span>
        </div>
    )
}
