// Core
import React, {FC, memo} from "react"
import {Typography} from "antd"
import {useRouter} from "../../hooks/useRouter"
import {NavLink} from 'react-router-dom'
// Components
import {Login} from './components/login/Login'
import {Register} from './components/register/Register'
// Elements
import {Box} from '../../elements/Box/Box'
// Style
import './AuthPage.scss'


type PropsType = {
    children?: never
}

export const AuthPage: FC<PropsType> = memo(() => {
    const {path} = useRouter()

    return (
        <div className='auth'>
            <div className='auth__wrapper'>
                {
                    path === '/login' && (<>
                        <Typography className='auth__title'>Войти в аккаунт</Typography>
                        <Typography className='auth___text'>Пожалуйста, войдите в свой аккаунт</Typography>
                    </>)
                }
                {
                    path === '/register' && (<>
                        <Typography className='auth__title'>Регистрация</Typography>
                        <Typography className='auth___text'>Для входа в чат, вам нужно зарегистрироваться</Typography>
                    </>)
                }
                <Box dis={'flex'} flexPos={"center"}>
                    {
                        path === '/login' && <Login/>
                    }
                    {
                        path === '/register' && <Register/>
                    }
                </Box>
            </div>
        </div>
    )
})
