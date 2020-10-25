// Core
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Selector
import {getMessages} from "selectors/main-selector"
// Actions
import { actionsMain } from 'actions/main-action'
import {getIsAuth} from "../../selectors/auth-selector";


export const useMainPageEf = () => {
    const dispatch = useDispatch()
    const MessageData = useSelector(getMessages)
    const isAuth = useSelector(getIsAuth)

    useEffect(() => {
        dispatch(actionsMain.watch_load_page(10))
    }, [dispatch])

    return {
        MessageData,
        isAuth,
    }
}
