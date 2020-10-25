// Root
import { all } from 'redux-saga/effects'
// Watcher
import { appSagaWatcher } from './app/watcher-saga'
import { mainSagaWatcher } from './main/watcher-saga'
import { authSagaWatcher } from './auth/watcher-saga'


export function* rootSaga(): Generator {
    yield all([
        appSagaWatcher(),
        mainSagaWatcher(),
        authSagaWatcher(),
    ])
}

export type SagaPropsType<P> = {
    type: string,
    payload: P
}
