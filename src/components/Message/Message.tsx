// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Message.scss'
// Elements
import { Avatar } from 'elements/Avatar/Avatar'
import { Bubbel } from 'elements/Bubbel/Bubbel'


type PropsType = {
    children?: never
    content: string
    date: string
    myMes?: boolean
}

export const Message: FC<PropsType> = memo(({date, content, myMes = false}) => {

    return (
        <div className={clsx('message', {'message__right': myMes})}>
            <div className={'message__wrapper'}>
               <div className={'message__avatar'}>
                   <Avatar size={30} alt={'avatar'} url={'https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/anthony-brebion.jpg'}/>
               </div>
               <Bubbel>
                   {content}
               </Bubbel>
            </div>
            <span className={'message__date'}>{date}</span>
        </div>
    )
})
