// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Style
import './Bubbel.scss'


type PropsType = {

}

export const Bubbel: FC<PropsType> = memo(({children}) => {

    return (
        <div className={clsx('bubble')}>
            {children}
        </div>
    )
})
