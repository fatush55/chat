// Core
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Action
import {actionsAuth} from "actions/auth-actions"
// Type
import { FormRegisterType } from 'types/auth-types'


export const useRegisterEf = () => {
    const dispatch = useDispatch()
    //const def = useSelector()

    const [isRegs, setRegs] = useState(true)

    const handlerSubmit = (value: FormRegisterType) => {
        dispatch(actionsAuth.watch_regis(value))
    }

    useEffect(() => {
        dispatch(actionsAuth.set_errors_form(null))
    }, [dispatch])

    return {
        isRegs,
        handlerSubmit
    }
}
