// Core
import React, {FC, memo} from 'react'
// Style
import './AudiMessage.scss'
// Hooks
import {useAudiMessageEf} from './useAudiMessageEf'
// Element
import {Bubbel} from 'elements/bubbel/Bubbel'
// Assets
import audiGrafic from 'assets/img/audi-grafic.svg'
// Ant
import {CaretRightOutlined, PauseOutlined } from '@ant-design/icons'
// Utils
import {getTimer} from 'utils/converter'

type PropsType = {
    children?: never
    url: string
}

export const AudiMessage: FC<PropsType> = memo(({url}) => {
    const {
        mode, audioRef, currentTime, progress,
        handlerAction,
    } = useAudiMessageEf()

    // console.log(mode)

    return (
        <Bubbel myMes={false} padding={false} >
           <div className={'audi-message'}>
               <div className={'audi-message__action-icon'} onClick={handlerAction}>
                   {
                       mode ? <CaretRightOutlined className={'audi-message__icon-play'}/> : <PauseOutlined />
                   }
               </div>
               <img className={'audi-message__grafic'} src={audiGrafic} alt="audi-grafic"/>
               <div className={'audi-message__time'}>
                   {getTimer(currentTime)}
               </div>
               <div className={'audi-message__progress'} style={{width: `${progress}%`}} />
               <audio ref={audioRef} src={url} preload={'audio'} />
           </div>
        </Bubbel>
    )
})
