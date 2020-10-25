// Core
import React, {FC, memo} from 'react'
import clsx from "clsx";
// Style
import './Badge.scss'


type PropsType = {
    children?: never
    content: number
    size?: 'large' | 'normal' | 'small'
}

export const Badge: FC<PropsType> = memo(({content, size = 'normal'}) => <div className={clsx('badge', `badge_${size}`)}>{content}</div>)
