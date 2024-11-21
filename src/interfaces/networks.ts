export interface NetworksBody {
    networks: Network[]
}

export interface Network {
    id: string
    name: string
    location: Location
    href: string
    company: string[]
    gbfs_href?: string
    system?: string
    source?: string
    ebikes?: boolean
    license?: License
    scooters?: boolean
    instances?: Instance[]
}

export interface Instance {
    tag: string
    meta: Meta
}

export interface Meta {
    city: string
    country: string
    name: string
    latitude: number
    longitude: number
}

export interface License {
    name: string
    url: string
}

export interface Location {
    latitude: number
    longitude: number
    city: string
    country: string
}