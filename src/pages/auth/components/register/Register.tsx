// Core
import React, {FC, memo} from 'react'
import {NavLink} from 'react-router-dom'
import * as Yup from "yup"
// Style
import './Register.scss'
// Ant
import { Form, Input } from 'formik-antd'
import {Typography} from "antd"
import {LockOutlined, UserOutlined, MailOutlined, InfoCircleTwoTone} from "@ant-design/icons"
// Elements
import {Button} from 'elements/Button/Button'
import {Formik} from "formik"
import { ErrorsFormAuth } from '../ErrorsFormAuth'
// Hooks
import { useRegisterEf } from './useRegisterEf'


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
})

export const Register: FC<PropsType> = memo(() => {
    const {isRegs, handlerSubmit} = useRegisterEf()

    return (
        <div className='login'>
            {
                isRegs
                    ? <>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                password: ''
                            }}
                            onSubmit={handlerSubmit}
                            validationSchema={SignupSchema}
                        >
                            <Form>
                                <Form.Item name='name'>
                                    <Input
                                        prefix={<UserOutlined className="site-form-item-icon icon-from" />}
                                        size={'large'}
                                        name='name'
                                        placeholder='Name'
                                    />
                                </Form.Item>

                                <Form.Item name='email'>
                                    <Input
                                        prefix={<MailOutlined className="site-form-item-icon icon-from" />}
                                        size={'large'}
                                        name='email'
                                        placeholder='E-mail'
                                    />
                                </Form.Item>

                                <Form.Item name='password'>
                                    <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon icon-from" />}
                                        size={'large'}
                                        name='password'
                                        placeholder='Password'
                                    />
                                </Form.Item>

                                <Form.Item name={'btn'} >
                                    <Button sizeW={'full'} type={"primary"} content={'ЗАРЕГИСТРИРОВАТЬСЯ'} sizeH={"large"} htmlType="submit"/>
                                </Form.Item>

                                <ErrorsFormAuth/>
                            </Form>
                        </Formik>

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
