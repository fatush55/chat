// Core
import React, {FC, memo} from 'react'
import clsx from 'clsx'
// Ant
import { Button as AntButton } from 'antd'
// Style
import './Button.scss'
// Type
import { ButtonHTMLType } from 'antd/lib/button/button'


type PropsType = {
    onClick?: () => void
    children?: never
    className?: string,
    content: string | number
    type: 'primary' | 'dashed' | 'text' | 'link'
    sizeH?: 'large' | 'small'
    sizeW?: 'full'
    htmlType?: ButtonHTMLType
}

export const Button: FC<PropsType> = (props) => {
    const {className, content, sizeH, sizeW, htmlType = 'button', ...oldProps} = props

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
            htmlType={htmlType}
        >
            {content}
        </AntButton>
    )
}
