// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Avatar.scss'
// Utils
import { getColorSymbol } from 'utils/converter'


type PropsType = {
    children?: never
    url?: string
    symbol: string
    size: number
    className?: string
    online?: boolean
    active?: boolean
}


export const Avatar: FC<PropsType> = memo(({url, size, online, active = false, symbol}) =>  {

    return (
        <div
            className={clsx('avatar', {'online': online, 'active': active})}
            data-dane={3}
            style={{backgroundImage: `url(${url ? url : ''})`, width: size, height: size, backgroundColor: getColorSymbol(symbol)}}
        >
            {!url ? symbol : ''}
        </div>
    )
})
