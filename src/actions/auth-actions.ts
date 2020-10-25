// Type
import { ActionsCreatorType } from 'store'
import { FormAuthErrorsType, FormLoginType, FormRegisterType } from 'types/auth-types'


// Watcher Action
export const AUTH_WATCH_LOGIN = 'AUTH_WATCH_LOGIN'
export const AUTH_WATCH_REGIS = 'AUTH_WATCH_REGIS'
export const AUTH_WATCH_LOGOUT = 'AUTH_WATCH_LOGOUT'

export const actionsAuth = {
    // Sync
    set_loading_form: (mode: boolean) => ({type: 'AUTH_SET_LOADING_FORM', payload: {mode}} as const),
    set_is_auth: (mode: boolean) => ({type: 'AUTH_SET_IS_AUTH', payload: {mode}} as const),
    set_errors_form: (errors: FormAuthErrorsType | null) => ({type: 'AUTH_SET_ERRORS_FORM', payload: {errors}} as const),
    // Async
    watch_login: (value: FormLoginType) => ({type: AUTH_WATCH_LOGIN, payload: {...value}} as const),
    watch_regis: (value: FormRegisterType) => ({type: AUTH_WATCH_REGIS, payload: {...value}} as const),
    watch_logout: () => ({type: AUTH_WATCH_LOGOUT} as const)
}

export type AuthActionReducerType = ActionsCreatorType<typeof actionsAuth>