import React from "react"
import {Link} from "@tanstack/react-router"
import {LanguageSwitcher} from "@/components/ui/LanguageSwitcher"

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold hover:text-blue-200">
                    CityBike
                </Link>
                <LanguageSwitcher/>
            </div>
        </nav>
    )
}

export default Navbar
