import {createLazyFileRoute} from '@tanstack/react-router'
import {NetworkController} from "@/controllers/NetworkController.tsx";

export const Route = createLazyFileRoute('/')({
    component: NetworkController,
})