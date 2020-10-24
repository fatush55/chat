// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Avatar.scss'


type PropsType = {
    children?: never
    url: string
    alt: string
    size: number
    className?: string
}

export const Avatar: FC<PropsType> = memo(({url, alt, size = 24}) => <img className={clsx('avatar')} src={url} width={size} height={size} alt={alt}/>)
