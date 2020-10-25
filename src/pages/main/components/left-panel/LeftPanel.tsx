// Core
import React, {FC, memo} from 'react'
// Style
import './LeftPanel.scss'
// Hooks
import {useLeftPanelEf} from './useLeftPanelEf'
// Components
import { CardUser } from 'components/card-user/CardUser'


type PropsType = {
    children?: never
}

export const LeftPanel: FC<PropsType> = memo(() => {
    const {} = useLeftPanelEf()

    return (
        <div className={'cont-left-panel'}>
            <div className={'cont-left-panel__search-container'}>
                <div className={'search-left-panel'}>

                </div>
            </div>
            <div className={'cont-left-panel__cards'}>
                <CardUser active={true}/>
                <CardUser/>
            </div>
        </div>
    )
})
