export type FormRegisterType = {
    name: string
    email: string
    password: string
}

export type FormLoginType = {
    email: string
    password: string
}

export type FormAuthErrorsType = {
    name?: string
    email?: string
    password?: string
}
