// Core
import {SagaIterator} from 'redux-saga'
import {all, call, takeEvery} from 'redux-saga/effects'
// Worker
import { workerSetUsers } from './worker-saga'
// Actions
import { APP_WATCH_DEF } from '../../actions/app-action'


function* watchSetUsers(): SagaIterator {
    yield takeEvery(APP_WATCH_DEF, workerSetUsers)
}

export function* appSagaWatcher(): SagaIterator {
    yield all([
        call(watchSetUsers),
    ])
}