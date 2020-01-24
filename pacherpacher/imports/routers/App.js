import React from 'react'
import MainLayout from '/imports/routers/MainLayout'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from '/imports/components/Navbar'

function App(props){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={MainLayout} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
