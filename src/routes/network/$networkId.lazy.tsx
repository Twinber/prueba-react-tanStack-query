import {createLazyFileRoute} from '@tanstack/react-router'
import {StationController} from '@/controllers/StationController.tsx'

export const Route = createLazyFileRoute('/network/$networkId')({
  component: StationController,
})
