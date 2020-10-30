// Core
import React, {FC, memo} from 'react'
import clsx from "clsx";
// Style
import './MessagePanel.scss'
// Components
import {useMessagePanelEf} from './useMessagePanelEf'
import TextArea from 'antd/lib/input/TextArea'
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons'


type PropsType = {
    children?: never
}

export const MessagePanel: FC<PropsType> = memo(() => {
    const {message, handlerMessage} = useMessagePanelEf()



    return (
       <div className={'message-panel'}>
           <SmileOutlined className={'message-panel__icon_smile'} />

            <div className={'message-panel__area'}>
              <TextArea
                  value={message}
                  onChange={handlerMessage}
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 1, maxRows: 1 }}
              />
            </div>
           {
               message.length
                   ? <SendOutlined className={'message-panel__icon_send'} />
                   : <AudioOutlined className={'message-panel__icon_audio'} />
           }
           <CameraOutlined className={'message-panel__icon_camera'} />
       </div>
    )
})
