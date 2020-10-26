// Core
import React, {FC, memo} from 'react'
import {NavLink} from 'react-router-dom'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import {Formik} from 'formik'
import * as Yup from 'yup'
// Ant
import { Form, Input } from 'formik-antd'
// Style
import './Login.scss'
// Components
import {ErrorsFormAuth} from "../ErrorsFormAuth"
// Elements
import {Button} from 'elements/button/Button'
// Hooks
import { useLoginEf } from './useLoginEf'
// Type
import {FormLoginType} from 'types/auth-types'


type PropsType = {
    children?: never
}

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(5, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
})

export const Login: FC<PropsType> = memo(() => {
    const {handlerSubmit} = useLoginEf()

    return (
        <div className='login'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={handlerSubmit}
                validationSchema={SignupSchema}
            >
                <Form>
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
                        <Button sizeW={'full'} type={"primary"} content={'ВОЙТИ В АККАУНТ'} sizeH={"large"} htmlType="submit" />
                    </Form.Item>

                    <ErrorsFormAuth/>
                </Form>
            </Formik>

            <div className='login__link'>
                <NavLink to={'/register'}>
                    Зарегистрироваться
                </NavLink>
            </div>
        </div>
    )
})
