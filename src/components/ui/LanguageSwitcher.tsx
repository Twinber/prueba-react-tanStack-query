import {useTranslation} from "react-i18next"
import {cn} from "@/lib/utils"


export const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation()
    const handleLanguageChange = async (lang: string) => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className="flex justify-end gap-3 font-mono text-[10px] tracking-widest uppercase">
            <span 
                className={cn("cursor-pointer transition-colors", i18n.language === 'en' ? "text-cyan-400 glow-text" : "text-slate-500 hover:text-slate-300")} 
                onClick={() => handleLanguageChange('en')}
            >
                [ EN ]
            </span>
            <span className="text-slate-700">|</span>
            <span 
                className={cn("cursor-pointer transition-colors", i18n.language === 'es' ? "text-cyan-400 glow-text" : "text-slate-500 hover:text-slate-300")} 
                onClick={() => handleLanguageChange('es')}
            >
                [ ES ]
            </span>
        </div>

    )
}
