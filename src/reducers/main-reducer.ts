// Core
import produce, {Draft} from 'immer'
// Type
import { MainActionReducerType } from 'actions/main-action'
import {Message} from 'types/main-type'


const initialState = {
    messages: [] as Array<Message>
}

type InitialStateType = typeof initialState

export const mainReducer = (state: InitialStateType = initialState, action: MainActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Sync
            case "APP_DEFAULT":
                draft.messages = action.payload.message
                break
            // Async
            case "MAIN_WATCH_LOAD_PAGE": return state
            // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}
