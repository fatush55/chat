// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Ant
import { Button as AntButton } from 'antd'
// Style
import './Button.scss'


type PropsType = {
    onClick?: () => void
    children?: never
    className?: string,
    content: string | number
    type: 'primary' | 'dashed' | 'text' | 'link'
    sizeH?: 'large' | 'small'
    sizeW?: 'full'

}

export const Button: FC<PropsType> = (props) => {
    const {className, content, sizeH, sizeW, ...oldProps} = props

    return (
        <AntButton
            {...oldProps}
            className={
                clsx(
                    'button',
                    className,
                    {'button__large': sizeH === 'large', 'button__full': sizeW === 'full'}
                )
            }
        >
            {content}
        </AntButton>
    )
}
