// Type
import { ActionsCreatorType } from '../store'


// Watcher Action
export const APP_WATCH_DEF = 'APP_WATCH_DEF'

export const actionsApp = {
  // Sync
  set_def: (def: boolean) => ({type: 'APP_DEFAULT', payload: {def}} as const),
  // Async
  watch_def: () => ({type: APP_WATCH_DEF} as const)
}

export type AppActionReducerType = ActionsCreatorType<typeof actionsApp>
