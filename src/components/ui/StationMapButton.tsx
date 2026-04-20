import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { useT } from "@/i18n/useT"
import { Station } from "@/interfaces/networkData"
import { StationMapModal } from "@/components/stations/StationMapModal"
import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"


interface Props {
    station: Station
    className?: string
}

export const StationMapButton: React.FC<Props> = ({ station, className }) => {
    const { t } = useT()
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <Button 
                variant="hud" 
                size="sm" 
                onClick={() => setIsModalOpen(true)}
                className={cn("flex items-center gap-2", className)}
            >
                <MapPin className="w-4 h-4" />
                {t('view_on_map')}
            </Button>


            <StationMapModal 
                station={station} 
                isOpen={isModalOpen} 
                onOpenChange={setIsModalOpen} 
            />
        </>
    )
}
