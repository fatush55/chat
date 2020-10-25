// Core
import { call, put, select } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
// Action
import { actionsMain } from 'actions/main-action'
// Api
import { dataMessage } from 'api/main-api'


export function* workerSetMessages(): SagaIterator {

    yield put(actionsMain.set_message(dataMessage))

}