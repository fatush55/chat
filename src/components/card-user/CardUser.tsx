// Core
import React, {FC, memo} from 'react'
import clsx from "clsx";
// Style
import './CardUser.scss'
// Elements
import { Avatar } from 'elements/avatar/Avatar'
import { Badge } from 'elements/badge/Badge'
// Type
import { CardsUserType } from 'types/main-type'


type PropsType = {
    children?: never
    handlerActive: (id: number) => void
    active: boolean
}

export const CardUser: FC<PropsType & CardsUserType> = memo(({handlerActive, id, active, online = false, name, lastMessage = '', newMessage, url}) => {

    return (
        <div className={clsx('card-user', {'card-user_active': active})} onClick={() => handlerActive(id)}>
            <div>
                <Avatar
                    symbol={name.slice(0, 1)}
                    url={url ? url : ''}
                    size={40}
                    online={online}
                    active={active}
                />
            </div>
            <div className={'card-user__content'}>
                <div className={'card-user__top'}>
                    <h6>
                        {name}
                    </h6>
                    <p>
                        Сейчас
                    </p>
                </div>
                <div className={'card-user__bottom'}>
                    <p>
                        {lastMessage}
                    </p>
                </div>
                <div className={'card-user__info'}>
                    {
                        newMessage && <Badge content={newMessage} />
                    }
                </div>
            </div>
        </div>
    )
})
