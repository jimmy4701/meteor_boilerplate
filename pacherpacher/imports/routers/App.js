import React from 'react'
import MainLayout from '/imports/routers/MainLayout'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import Navbar from '/imports/components/Navbar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App(props){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" component={MainLayout} />
            </Switch>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App
