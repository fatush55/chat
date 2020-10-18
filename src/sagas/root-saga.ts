// Root
import { all } from 'redux-saga/effects'
// Watcher
import { appSagaWatcher } from './app/watcher-saga'


export function* rootSaga(): Generator {
    yield all([
        appSagaWatcher(),
    ])
}
