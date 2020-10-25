// Core
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Selector
import { getIsAuth } from 'selectors/auth-selector'


export const useAuthPageEf = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(getIsAuth)

    return {
        isAuth,
    }
}
