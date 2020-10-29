// Core
import React, {FC, memo} from 'react'
// Style
import './LeftPanelHead.scss'
import {useLeftPanelHeadEf} from './useLeftPanelHeadEf'
import { TeamOutlined, EditOutlined } from '@ant-design/icons'
import { Typography } from 'antd'

type PropsType = {
    children?: never
}

export const LeftPanelHead: FC<PropsType> = memo(() => {
    const {} = useLeftPanelHeadEf()
    const { Title } = Typography;

    return (
        <div className={'left-top-container'}>
            <div className={'left-top-container__dialog'}>
                <TeamOutlined />
                <p>
                    Dialog LIst
                </p>
            </div>
            <EditOutlined className={'left-top-container__edit'} />
        </div>

    )
})
