// Core
import { call, put, select } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
// Action
import { actionsApp } from '../../actions/app-action'

export function* workerSetUsers(): SagaIterator {

    yield put(actionsApp.set_def(true))

}