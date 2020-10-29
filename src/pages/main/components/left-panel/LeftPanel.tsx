// Core
import React, {FC, memo} from 'react'
// Style
import './LeftPanel.scss'
// Hooks
import {useLeftPanelEf} from './useLeftPanelEf'
// Components
import { CardUser } from 'components/card-user/CardUser'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'


type PropsType = {
    children?: never
}

export const LeftPanel: FC<PropsType> = memo(() => {
    const {cardsUser, search,  active, handlerActive, handlerSearch} = useLeftPanelEf()

    return (
        <div className={'cont-left-panel'}>
            <div className={'cont-left-panel__search-container'}>
                <div className={'search-left-panel'}>
                    <Input placeholder="Search user" className={'search-left-panel__input'} onChange={handlerSearch} />
                    <SearchOutlined className={'search-left-panel__icon'} />
                </div>
            </div>
            <div className={'cont-left-panel__cards'}>
                {
                    cardsUser
                        .filter(elem => -1 < elem.name.toLocaleUpperCase().indexOf(search.toLocaleUpperCase()))
                        .map(elem => (
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
