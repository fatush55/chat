// Core
import React, {FC, memo} from 'react'
import { Redirect } from 'react-router-dom'
// Style
import './MainPage.scss'
// Components
import {Message} from 'components/message/Message'
import {LeftPanel} from './components/left-panel/LeftPanel'
// Hook
import { useMainPageEf } from './useMainPageEf'

type PropsType = {
    children?: never
}

export const MainPage: FC<PropsType> = memo(() => {
    const {MessageData, isAuth} = useMainPageEf()

    if (!isAuth) return  <Redirect to={'/login'} />

    return (
       <div className={'panel_container'}>
           <div className={'left_panel'}>
               <div className={'left_panel__topbar_wrapper'}>
                   top left panel
               </div>
               <LeftPanel/>
           </div>
           <div className={'right_panel'}>
               <div className={'right_panel__topbar_wrapper'}>
                   top right panel
               </div>
               <div className={'right_panel__message_wrapper'}>
                   {
                       MessageData.map(elem => (<Message key={elem.id} { ...elem}/>))
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
