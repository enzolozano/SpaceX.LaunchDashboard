export interface DetailedLaunch {
    id: string
    links: {
        patch: {
            small: string
            large: string
        }
        reddit: {
            campaign: string
            launch: string
            media: string
            recovery: string
        }
        youtubeId: string
        article: string
        wikipedia: string
        youtubeLink: string
    }
    rocket: {
        id: string
        name: string
        description: string
        height: {
            meters: number
            feet: number
        }
        diameter: {
            meters: number
            feet: number
        }
        mass: {
            kg: number
            lb: number
        }
    }
    success?: boolean
    failures: {
        time: number
        altitude: number
        reason: string
    }
    details: string
    crews: Array<{
        id: string
        name: string
        agency: string
        image: string
        wikipedia: string
    }>
    flightNumber: number
    name: string
    dateUtc: string
    upcoming?: boolean
    payloads: Array<{
        id: string
        name: string
        type: string
        massKg: number
        massLbs: number
        orbit: string
    }>
    launchpad: {
        id: string
        images: {
            large: Array<string>
        }
        fullName: string
        locality: string
        region: string
        launchAttempts: number
        launchSuccesses: number
        status: string
    }
}