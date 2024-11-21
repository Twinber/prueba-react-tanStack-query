export interface NetWorkDataBody {
    network: NetworkData
}

export interface NetworkData {
    id: string
    name: string
    location: Location
    href: string
    company: string[]
    system: string
    stations: Station[]
}

export interface Station {
    id: string
    name: string
    latitude: number
    longitude: number
    timestamp: string
    free_bikes: number
    empty_slots: number
    extra: Extra
}

export interface Extra {
    uid: string
    number: string
    slots: number
    bike_uids: string[]
}

export interface Location {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
}