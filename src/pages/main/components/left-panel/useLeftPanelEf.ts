// Core
import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// Selectors
import {getCardsUser} from "selectors/main-selector"


export const useLeftPanelEf = () => {
    const dispatch = useDispatch()
    const cardsUser = useSelector(getCardsUser)

    const [active, setActive] = useState(1)

    const handlerActive = (id: number) => {
        console.log(id)
        setActive(id)
    }

    return {
        cardsUser,
        active,
        handlerActive,
    }
}
