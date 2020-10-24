// Core
import {SagaIterator} from 'redux-saga'
import {all, call, takeEvery} from 'redux-saga/effects'
// Worker
import { workerSetMessages } from './worker-saga'
// Actions
import { MAIN_WATCH_LOAD_PAGE } from 'actions/main-action'


function* watchSetUsers(): SagaIterator {
    yield takeEvery(MAIN_WATCH_LOAD_PAGE, workerSetMessages)
}

export function* mainSagaWatcher(): SagaIterator {
    yield all([
        call(watchSetUsers),
    ])
}