// Core
import React, {FC, memo} from 'react'
import clsx from "clsx"
// Style
import './ItemImg.scss'


type PropsType = {
    children?: never
    url: string
    big?: boolean
}

export const ItemImg: FC<PropsType> = memo(({url, big = false}) => <div className={clsx('item_img', {'big': big})} style={{backgroundImage: `url(${url})`}} />)
