// Core
import produce, {Draft} from 'immer'
// Type
import { AuthActionReducerType } from 'actions/auth-actions'
import {FormAuthErrorsType} from 'types/auth-types'


const initialState = {
    loadingForm: false,
    isAuth: true,
    errors: null as FormAuthErrorsType | null
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Sync
            case "AUTH_SET_LOADING_FORM":
                draft.loadingForm = action.payload.mode
                break
            case "AUTH_SET_ERRORS_FORM":
                draft.errors = action.payload.errors
                break
            case "AUTH_SET_IS_AUTH":
                draft.isAuth = action.payload.mode
                break
            // Async
            case "AUTH_WATCH_LOGIN": return state
            case "AUTH_WATCH_REGIS": return state
            case "AUTH_WATCH_LOGOUT": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}
