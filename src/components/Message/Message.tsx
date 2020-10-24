// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import ruLocation from 'date-fns/locale/ru'
// Ant
import { ExclamationCircleOutlined, CheckCircleOutlined, EllipsisOutlined } from '@ant-design/icons'
// Style
import './Message.scss'
// Elements
import { Avatar } from 'elements/Avatar/Avatar'
import { Bubbel } from 'elements/Bubbel/Bubbel'
import { ItemImg } from 'elements/ItemImg/ItemImg'
// Type
import { DataType } from 'types/main-type'


type PropsType = {
    children?: never
    content?: string
    date: Date
    myMes?: boolean
    reading?: boolean
    urlAvatar: string
    data: DataType
}

export const Message: FC<PropsType> = memo(({date, content, myMes = false, urlAvatar, reading = false, data}) => {

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
                   <Avatar size={40} url={urlAvatar}/>
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
                {formatDistanceToNowStrict(date, {addSuffix: true, locale: ruLocation})}
            </span>
        </div>
    )
})
