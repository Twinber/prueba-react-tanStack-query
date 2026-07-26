import React from "react"
import {Sun, Moon} from "lucide-react"
import {Button} from "@/components/ui/button"
import {useTheme} from "@/components/ThemeProvider"

export const ThemeSwitcher: React.FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5"/> : <Sun className="h-5 w-5"/>}
        </Button>
    )
}
