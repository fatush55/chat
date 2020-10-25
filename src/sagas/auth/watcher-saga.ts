// Core
import {SagaIterator} from 'redux-saga'
import {all, call, takeEvery} from 'redux-saga/effects'
// Worker
import { workerLogin, workerRegis, workerLogout } from './worker-saga'
// Actions
import { AUTH_WATCH_LOGIN, AUTH_WATCH_LOGOUT, AUTH_WATCH_REGIS } from 'actions/auth-actions'


function* watchLogin(): SagaIterator {
    yield takeEvery(AUTH_WATCH_LOGIN, workerLogin)
}

function* watchRegis(): SagaIterator {
    yield takeEvery(AUTH_WATCH_REGIS, workerRegis)
}

function* watchLogout(): SagaIterator {
    yield takeEvery(AUTH_WATCH_LOGOUT, workerLogout)
}

export function* authSagaWatcher(): SagaIterator {
    yield all([
        call(watchLogin),
        call(watchRegis),
        call(watchLogout),
    ])
}