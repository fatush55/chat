// Core
import React, {FC, memo} from 'react'
// Style
import './MainPage.scss'
// Components
import {Message} from 'components/Message/Message'

type PropsType = {
    children?: never
}

export const MainPage: FC<PropsType> = memo(() => {

    return (
        <div>
            <Message content={'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'} date={'Oct 22 2020 00:51:10'}/>
            <Message myMes={true} content={'Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻'} date={'Oct 22 2020 00:56:54'}/>
        </div>
    )
})
