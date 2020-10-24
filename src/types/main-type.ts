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
}

export type Message = {
    id: number
    url: string
    content?: string
    reading: boolean
    myMes: boolean
    date: DateType
    data: DataType | {}
}