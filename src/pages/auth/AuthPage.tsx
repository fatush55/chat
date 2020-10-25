// Core
import React, {FC, memo} from "react"
import {useRouter} from "../../hooks/useRouter"
import {Redirect} from "react-router-dom"
// Ant
import {Typography} from "antd"
// Components
import {Login} from './components/login/Login'
import {Register} from './components/register/Register'
// Elements
import {Box} from 'elements/Box/Box'
// Style
import './AuthPage.scss'
// Hooks
import {useAuthPageEf} from './useAuthPageEf'


type PropsType = {
    children?: never
}

export const AuthPage: FC<PropsType> = memo(() => {
    const {path} = useRouter()
    const {isAuth} = useAuthPageEf()

    if (isAuth) return  <Redirect to={'/'} />

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
