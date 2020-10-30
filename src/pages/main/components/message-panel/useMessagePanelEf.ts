// Core
import {ChangeEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'


export const useMessagePanelEf = () => {
    const dispatch = useDispatch()
    //const def = useSelector()

    const [message, setMessage] = useState('')

    const handlerMessage = (e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)

    return {
        message,
        handlerMessage,
    }
}
