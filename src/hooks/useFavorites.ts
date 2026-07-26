import { useState, useEffect, useCallback } from "react"

export interface FavoriteStation {
  networkId: string
  stationId: string
}

const STORAGE_KEY = "favorites"

const loadFavorites = (): FavoriteStation[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<FavoriteStation[]>(loadFavorites)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = useCallback((item: FavoriteStation) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.networkId === item.networkId && f.stationId === item.stationId)) {
        return prev
      }
      return [...prev, item]
    })
  }, [])

  const removeFavorite = useCallback((networkId: string, stationId: string) => {
    setFavorites((prev) =>
      prev.filter((f) => !(f.networkId === networkId && f.stationId === stationId)),
    )
  }, [])

  const isFavorite = useCallback(
    (networkId: string, stationId: string) => {
      return favorites.some((f) => f.networkId === networkId && f.stationId === stationId)
    },
    [favorites],
  )

  const toggleFavorite = useCallback(
    (item: FavoriteStation) => {
      if (isFavorite(item.networkId, item.stationId)) {
        removeFavorite(item.networkId, item.stationId)
      } else {
        addFavorite(item)
      }
    },
    [addFavorite, removeFavorite, isFavorite],
  )

  return { favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }
}
