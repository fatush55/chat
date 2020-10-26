// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Avatar.scss'


type PropsType = {
    children?: never
    url: string
    size: number
    className?: string
    online?: boolean
    active?: boolean
}

export const Avatar: FC<PropsType> = memo(({url, size, online, active = false}) => <div className={clsx('avatar', {'online': online, 'active': active})} data-dane={3} style={{backgroundImage: `url(${url})`, width: size, height: size}}/>)
