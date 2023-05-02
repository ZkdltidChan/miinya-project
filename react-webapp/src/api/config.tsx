export const TODO_URL = '/api/v1/todos'
export type TodoResponseProps = {
    data: {
        id: number
        title: string
        description: string
        done: boolean
    }[]
}

export const AI_CHARACTERS_URL = '/api/v1/ai_characters'
export type AiCharacterResponseProps = {
    data: {
        id: number
        name: string
        description: string
        profile_image: string
        images: string[]
    }[]
}

export const LEVELS_URL = '/api/v1/levels'
export type LevelsResponseProps = {
    data: {
        id: number
        name: string
    }[]
}


export const IMAGE_UPLOAD_URL = '/api/v1/upload'
export type ImageUploadResponseProps = {
    data: {
        uri: string
    }
}


export const TABS_URL = '/api/v1/tabs'
export type TabsResponseProps = {
    data: {
        id: number
        name: string
    }[]
}
