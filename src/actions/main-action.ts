// Type
import { ActionsCreatorType } from 'store'
import { MessageType } from 'types/main-type'


// Watcher Action
export const MAIN_WATCH_LOAD_PAGE = 'MAIN_WATCH_LOAD_PAGE'

export const actionsMain = {
    // Sync
    set_message: (message: Array<MessageType>) => ({type: 'APP_DEFAULT', payload: {message}} as const),
    // Async
    watch_load_page: (id: number) => ({type: MAIN_WATCH_LOAD_PAGE, payload: {id}} as const)
}

export type MainActionReducerType = ActionsCreatorType<typeof actionsMain>
