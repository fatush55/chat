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
}

export const Avatar: FC<PropsType> = memo(({url, size}) => <div className={clsx('avatar')} style={{backgroundImage: `url(${url})`, width: size, height: size}}/>)
