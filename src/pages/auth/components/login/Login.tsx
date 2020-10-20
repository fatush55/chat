// Core
import React, {FC, memo} from 'react'
import {NavLink} from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// Style
import './Login.scss'
// Elements
import {Button} from '../../../../elements/Button/Button'
import { Form, Input } from 'antd'


type PropsType = {
    children?: never
}

export const Login: FC<PropsType> = memo(() => {

    return (
        <div className='login'>
            <Form>
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

                <Form.Item >
                    <Button sizeW={'full'} type={"primary"} className={''} content={'ВОЙТИ В АККАУНТ'} sizeH={"large"}/>
                </Form.Item>
            </Form>

            <div className='login__link'>
                <NavLink to={'/register'}>
                    Зарегистрироваться
                </NavLink>
            </div>
        </div>
    )
})
