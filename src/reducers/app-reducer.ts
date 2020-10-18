// Core
import produce, {Draft} from 'immer'
// Type
import { AppActionReducerType } from '../actions/app-action'


const initialState = {
  def: false,
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionReducerType): InitialStateType => {
    return produce(state, (draft: Draft<InitialStateType>) => {
         switch (action.type) {
             // Sync
            case 'APP_DEFAULT':
                draft.def = action.payload.def
                break
            // Async
            case 'APP_WATCH_DEF': return state
             // Def
            default:
                const allAction:never = action // check use all action
                return state
        }
    })
}
