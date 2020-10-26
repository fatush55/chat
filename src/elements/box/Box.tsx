// Core
import React, {FC} from 'react'
import clsx from 'clsx'
// Style
import './Box.scss'


type PropsType = {
    dis?: 'flex' | 'block'
    flexPos?: 'end' | 'center' | 'start'
}

export const Box: FC<PropsType> = ({flexPos, dis, children}) => {

    return (
        <div className={clsx('box', {'box__flex': dis === 'flex', 'box__flexCenter': flexPos})}>{children}</div>
    )
}
