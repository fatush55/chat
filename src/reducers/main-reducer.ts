// Core
import produce, {Draft} from 'immer'
// Type
import { MainActionReducerType } from 'actions/main-action'
import {MessageType, CardsUserType} from 'types/main-type'


const initialState = {
    cardsUser: [] as Array<CardsUserType>,
    messages: [] as Array<MessageType>
}

type InitialStateType = typeof initialState

export const mainReducer = (state: InitialStateType = initialState, action: MainActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
        switch (action.type) {
            // Sync
            case "MAIN_SET_MESSAGE":
                draft.messages = action.payload.message
                break
            case "MAIN_SET_CARD_USERS":
                draft.cardsUser = action.payload.users
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
