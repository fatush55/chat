// Core
import React, {FC, memo} from 'react'
// Style
import './RightPanelHead.scss'
// Hooks
import {useRightPanelHeadEf} from './useRightPanelHeadEf'
import { EllipsisOutlined } from '@ant-design/icons'


type PropsType = {
    children?: never
}

export const RightPanelHead: FC<PropsType> = memo(() => {
    const {} =useRightPanelHeadEf()


    return (
        <div className={'right-top-container'}>
            <div className={'right-top-container__left'}>
                <div className={'right-top-container__name'}>
                    Гай Юлий Цезарь
                </div>
                <div className={'right-top-container__active'}>
                    онлайн
                </div>
            </div>
            <div className={'right-top-container__right'}>
                <EllipsisOutlined />
            </div>
        </div>
    )
})
