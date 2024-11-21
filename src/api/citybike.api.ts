import axios from "axios"

export const citybikApi = axios.create({
    baseURL: 'https://api.citybik.es/v2',
})