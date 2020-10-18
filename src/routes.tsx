// Core
import React from 'react'
import {Route, Switch,} from 'react-router-dom'
// Pages
import { MainPage } from './pages/main/MainPage'


export const Routes = () => {
    return (
        <Switch>
            <Route path='/' render={() => <MainPage />} exact />
            <Route path='*' render={() => (<div>404</div>)} />
        </Switch>
    )
}
