import React from "react"
import {cn} from "@/lib/utils"

interface Props {
    className?: string
}

export const Skeleton: React.FC<Props> = ({className}) => (
    <div className={cn("animate-pulse rounded-md bg-zinc-200 dark:bg-zinc-800", className)}/>
)
