// Core
import React, {FC, memo} from 'react'
// Style
import './MainPage.scss'
// Components
import {Message} from 'components/Message/Message'
// Hook
import { useMainPageEf } from './useMainPageEf'

type PropsType = {
    children?: never
}

export const MainPage: FC<PropsType> = memo(() => {
    const {MessageData} = useMainPageEf()

    return (
       <div className={'panel_container'}>
           <div className={'left_panel'}>
               <div className={'left_panel__topbar_wrapper'}>
                   top left panel
               </div>
               left panel
           </div>
           <div className={'right_panel'}>
               <div className={'right_panel__topbar_wrapper'}>
                   top right panel
               </div>
               <div className={'right_panel__message_wrapper'}>
                   {
                       MessageData.map(elem => (
                           <Message
                               data={elem.data}
                               reading={elem.reading}
                               myMes={elem.myMes}
                               urlAvatar={elem.url}
                               content={elem.content}
                               date={new Date(elem.date.year, elem.date.month, elem.date.day, elem.date.hours, elem.date.minutes, elem.date.second)}
                           />
                       ))
                   }
               </div>
               <div className={'right_panel__footer_wrapper'}>
                   <div className={'field__wrapper'}>
                       text
                   </div>
               </div>
           </div>
       </div>
    )
})
