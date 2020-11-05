// Core
import React, {FC, memo, useRef, useState} from 'react'
// Style
import './AudiMessage.scss'
// Hooks
import {useAudiMessageEf} from './useAudiMessageEf'
// Element
import {Bubbel} from 'elements/bubbel/Bubbel'
// Assets
import audiGrafic from 'assets/img/audi-grafic.svg'
import { PlayCircleOutlined, CaretRightOutlined, PauseOutlined } from '@ant-design/icons'

type PropsType = {
    children?: never
    url: string
}

export const AudiMessage: FC<PropsType> = memo(({url}) => {
    const {} = useAudiMessageEf()

    const audioRef = useRef(null)

    const [mode, setMode] = useState(true)

    const handlerAction = () => {
        setMode(!mode)

        // @ts-ignore
        mode && audioRef.current.play()
    }



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
                   00:00
               </div>
               <div className={'audi-message__progress'} style={{width: `10%`}} />
               <audio ref={audioRef} src={url} preload={'zz'} />
           </div>
        </Bubbel>
    )
})
