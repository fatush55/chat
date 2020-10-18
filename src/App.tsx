// Core
import React, { FC } from 'react'
import { store } from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './routes'


const AppContainer: FC = () => {

    return (
        <Router>
            App
            <Routes/>
        </Router>
    )
}

export const App: FC = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </React.StrictMode>
    )
}
