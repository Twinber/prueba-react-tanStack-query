import {createLazyFileRoute} from '@tanstack/react-router'
import {FavoritesController} from '@/controllers/FavoritesController.tsx'

export const Route = createLazyFileRoute('/favorites')({
  component: FavoritesController,
})
