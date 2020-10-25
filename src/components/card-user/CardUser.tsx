// Core
import React, {FC, memo} from 'react'
import clsx from "clsx";
// Style
import './CardUser.scss'
// Elements
import { Avatar } from 'elements/Avatar/Avatar'
import { Badge } from 'elements/badge/Badge'


type PropsType = {
    children?: never
    active?: boolean
}

export const CardUser: FC<PropsType> = memo(({active = false}) => {

    return (
        <div className={clsx('card-user', {'card-user_active': active})}>
            <div>
                <Avatar
                    url={'https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/anthony-brebion.jpg'}
                    size={40}
                    online={true}
                    active={active}
                />
            </div>
            <div className={'card-user__content'}>
                <div className={'card-user__top'}>
                    <h6>
                        Ян Борисович Кум
                    </h6>
                    <p>
                        Сейчас
                    </p>
                </div>
                <div className={'card-user__bottom'}>
                    <p>
                        Я ща стрепсилс тебе куплю, п…
                    </p>
                </div>
                <div className={'card-user__info'}>
                    <Badge  content={3}/>
                </div>
            </div>
        </div>
    )
})
