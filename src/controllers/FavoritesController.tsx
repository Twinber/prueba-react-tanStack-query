import React from "react"
import {useTranslation} from "react-i18next"
import "@/i18n/i18next.ts"
import {useFavorites} from "@/hooks/useFavorites"
import {useFavoriteStations} from "@/api/useFavoriteStations"
import ContainerLayout from "@/components/layouts/ContainerLayout"
import {PageTitle} from "@/components/ui/PageTitle"
import {Spinner} from "@/components/ui/Spinner"
import GridLayout from "@/components/layouts/GridLayout"
import StationItem from "@/components/stations/StationItem"

export const FavoritesController: React.FC = () => {
  const {t} = useTranslation()
  const {favorites} = useFavorites()
  const {stations, isLoading} = useFavoriteStations(favorites)

  return (
    <ContainerLayout>
      <PageTitle title={t("favorites")}/>
      {isLoading && <Spinner/>}
      {!isLoading && stations.length === 0 && (
        <p className="text-center text-zinc-500 mt-8">{t("no_favorites")}</p>
      )}
      {stations.length > 0 && (
        <GridLayout>
          {stations.map((station) => (
            <StationItem
              key={`${station.networkId}-${station.id}`}
              station={station}
              networkId={station.networkId}
            />
          ))}
        </GridLayout>
      )}
    </ContainerLayout>
  )
}
