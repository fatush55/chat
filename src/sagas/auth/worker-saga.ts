// Core
import { call, put, select } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
// Action
import { actionsAuth } from 'actions/auth-actions'
// Type
import {SagaPropsType} from '../root-saga'
import { FormLoginType, FormRegisterType } from 'types/auth-types'


export function* workerLogin({payload}: SagaPropsType<FormLoginType>): SagaIterator {

    console.log(payload)

    yield put(actionsAuth.set_loading_form(true))
    yield put(actionsAuth.set_errors_form(null))
    // yield put(actionsAuth.set_errors_form({email: 'xx', password: 'DD'}))
    yield put(actionsAuth.set_is_auth(true))
    yield put(actionsAuth.set_loading_form(false))
}

export function* workerRegis({payload}: SagaPropsType<FormRegisterType>): SagaIterator {

    console.log(payload)

    yield put(actionsAuth.set_loading_form(true))
    yield put(actionsAuth.set_errors_form(null))
    // yield put(actionsAuth.set_errors_form({email: 'xx', password: 'DD'}))
    yield put(actionsAuth.set_loading_form(false))
}

export function* workerLogout(): SagaIterator {

    yield put(actionsAuth.set_is_auth(true))
}

