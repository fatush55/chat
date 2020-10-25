// Core
import React, {FC, memo, useEffect} from 'react'
import { useFormikContext } from 'formik'
import {useSelector} from "react-redux"
// Selector
import {getErrorsFormAuth} from "selectors/auth-selector"
// Type
import {FormAuthErrorsType} from 'types/auth-types'


export const ErrorsFormAuth: FC = memo(() => {
    const formik = useFormikContext<FormAuthErrorsType>()
    const errors = useSelector(getErrorsFormAuth)

    useEffect(() => {
        errors && formik.setErrors(errors)
    }, [errors, formik])

    return <></>
})
