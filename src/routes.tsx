// Core
import React from 'react'
import {Route, Switch,} from 'react-router-dom'
// Pages
import { AuthPage } from './pages/auth/AuthPage'


export const Routes = () => {
    return (
        <Switch>
            <Route path='/' render={() => <AuthPage />} exact />
            <Route path={['/login', '/register']} render={() => <AuthPage />} exact />
            <Route path='*' render={() => (<div>404</div>)} />
        </Switch>
    )
}
