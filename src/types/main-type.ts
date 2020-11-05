export type DateType = {
    year: number
    month:number
    day: number
    hours: number
    minutes: number
    second: number
}

export type Img = {
    id: number,
    url: string
}

export type DataType = {
    img?: Array<Img>
    sound?: string
}

export type MessageType = {
    id: number
    name: string
    url?: string
    content?: string
    reading: boolean
    myMes: boolean
    date: DateType
    data: DataType
}

export type CardsUserType = {
    id: number
    online?: boolean
    name: string
    lastMessage?: string
    newMessage?: number
    url?: string
}