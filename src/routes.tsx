// Core
import React from 'react'
import {Route, Switch,} from 'react-router-dom'
// Pages
import { AuthPage } from 'pages/auth/AuthPage'
import { MainPage } from 'pages/main/MainPage'


export const Routes = () => {
    return (
        <Switch>
            <Route path='/' render={() => <MainPage />} exact />
            <Route path={['/login', '/register']} render={() => <AuthPage />} exact />
            <Route path='*' render={() => (<div>404</div>)} />
        </Switch>
    )
}
