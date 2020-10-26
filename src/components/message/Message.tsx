// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Ant
import { ExclamationCircleOutlined, CheckCircleOutlined, EllipsisOutlined } from '@ant-design/icons'
// Style
import './Message.scss'
// Elements
import { Avatar } from 'elements/avatar/Avatar'
import { Bubbel } from 'elements/bubbel/Bubbel'
import { ItemImg } from 'elements/item-img/ItemImg'
// Type
import { MessageType } from 'types/main-type'
import {useTime} from "../../hooks/useTime";


type PropsType = {
    children?: never
}

export const Message: FC<PropsType & MessageType> = memo(({date, content, myMes = false, url, reading = false, data}) => {
    const time = useTime(date)

    return (
        <div className={clsx('message', {'message__right': myMes})}>
            <div className={'message__wrapper'}>
                {
                    myMes && !reading && (
                        <div className={'message_icon'}>
                            <EllipsisOutlined className={'message_icon__action'} />
                            <ExclamationCircleOutlined className={'message_icon__info'} />
                        </div>
                    )
                }
                {
                    myMes && reading && (
                        <div className={'message_icon'}>
                            <EllipsisOutlined className={'message_icon__action'} />
                            <CheckCircleOutlined className={'message_icon__info'} />
                        </div>
                    )
                }
               <div className={clsx('message__avatar', {'my': myMes})}>
                   <Avatar size={40} url={url}/>
               </div>
                {
                    content && (
                        <Bubbel myMes={myMes}>
                            {content}
                        </Bubbel>
                    )
                }
                {
                    data && data.img && (
                        <div className={clsx('data_content', {'my': myMes, 'big': !content})}>
                            {
                                data.img.map(elem => <ItemImg key={elem.id} url={elem.url} big={!content}/>)
                            }
                        </div>
                    )
                }
            </div>
            <span className={clsx('message__date', {'my': myMes})}>
                {time}
            </span>
        </div>
    )
})
