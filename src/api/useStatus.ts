import {useQuery} from "@tanstack/react-query"
import axios from "axios"

export const useStatus = () =>
    useQuery({
        queryKey: ['status'],
        queryFn: async () => {
            const {data} = await axios.get<{ ok: boolean }>('/api/status')
            return data
        },
    })
