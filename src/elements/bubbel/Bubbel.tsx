// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Bubbel.scss'


type PropsType = {
    myMes: boolean
}

export const Bubbel: FC<PropsType> = memo(({myMes,children}) => {

    return (
        <div className={clsx('bubble', {'my': myMes})}>
            {children}
        </div>
    )
})
