// Core
import React, {FC, memo, useState} from 'react'
import {NavLink} from 'react-router-dom'
// Style
import './Register.scss'
// Elements
import {Button} from '../../../../elements/Button/Button'
import {Form, Input, Typography} from "antd";
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons";


type PropsType = {
    children?: never
}

export const Register: FC<PropsType> = memo(() => {
    const [isRegs, setRegs] = useState(true)

    const handlerClick = () => setRegs(!isRegs)

    return (
        <div className='login'>
            {
                isRegs
                    ? <>
                        <Form>
                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-Mail"  size={'large'} />
                            </Form.Item>

                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"  size={'large'} />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" size={'large'} />
                            </Form.Item>

                            <Form.Item  >
                                <Button onClick={handlerClick} sizeW={'full'} type={"primary"} className={''} content={'ЗАРЕГИСТРИРОВАТЬСЯ'} sizeH={"large"}/>
                            </Form.Item>
                        </Form>
                        <div className='login__link'>
                            <NavLink to={'/login'}>
                                Войти в аккаунт
                            </NavLink>
                        </div>
                    </>
                    : <div className='login__alert'>
                        <InfoCircleTwoTone style={{ fontSize: '56px'}} />
                        <Typography className='login__title'>
                            Подтвердите свой аккаунт
                        </Typography>
                        <Typography className='login__text'>
                            На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
                        </Typography>
                    </div>
            }
        </div>
    )
})
