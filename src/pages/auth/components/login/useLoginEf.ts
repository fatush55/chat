// Core
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
// Actions
import {actionsAuth} from 'actions/auth-actions'
// Type
import {FormLoginType} from "types/auth-types"


export const useLoginEf = () => {
    const dispatch = useDispatch()

    const handlerSubmit = (value: FormLoginType) => {
        dispatch(actionsAuth.watch_login(value))
    }

    useEffect(() => {
        dispatch(actionsAuth.set_errors_form(null))
    }, [dispatch])

    return {
        handlerSubmit
    }
}
