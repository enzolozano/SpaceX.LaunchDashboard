export interface Launch {
    id: string
    name: string
    dateUtc: string
    rocket: string
    upcoming?: boolean
    success?: boolean
    patch: {
        small: string
        large: string
    }
}