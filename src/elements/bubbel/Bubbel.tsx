// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Bubbel.scss'


type PropsType = {
    myMes: boolean
    padding?: boolean
}

export const Bubbel: FC<PropsType> = memo(({myMes,children, padding = true}) => {

    return (
        <div className={clsx('bubble', {'my': myMes, 'padding': padding})}>
            {children}
        </div>
    )
})
