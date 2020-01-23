import React from 'react'
import MainLayout from '/imports/routers/MainLayout'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'

function App(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={MainLayout} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
