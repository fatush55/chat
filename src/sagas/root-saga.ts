// Root
import { all } from 'redux-saga/effects'
// Watcher
import { appSagaWatcher } from './app/watcher-saga'
import { mainSagaWatcher } from './main/watcher-saga'


export function* rootSaga(): Generator {
    yield all([
        appSagaWatcher(),
        mainSagaWatcher(),
    ])
}
