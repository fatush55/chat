// Core
import React, {FC, memo, useState} from 'react'
// Style
import './LeftPanel.scss'
// Hooks
import {useLeftPanelEf} from './useLeftPanelEf'
// Components
import { CardUser } from 'components/card-user/CardUser'


type PropsType = {
    children?: never
}

export const LeftPanel: FC<PropsType> = memo(() => {
    const {cardsUser,  active, handlerActive,} = useLeftPanelEf()

    return (
        <div className={'cont-left-panel'}>
            <div className={'cont-left-panel__search-container'}>
                <div className={'search-left-panel'}>

                </div>
            </div>
            <div className={'cont-left-panel__cards'}>
                {
                    cardsUser.map(elem => (
                        <CardUser
                            key={elem.id}
                            id={elem.id}
                            active={active === elem.id}
                            name={elem.name}
                            url={elem.url}
                            online={elem.online}
                            newMessage={elem.newMessage}
                            lastMessage={elem.lastMessage}
                            handlerActive={handlerActive}
                        />
                    ))
                }
            </div>
        </div>
    )
})
