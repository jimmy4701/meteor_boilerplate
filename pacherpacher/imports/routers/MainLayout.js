import React    from 'react'
import {
    Switch,
    Route
}                   from 'react-router-dom'

// Standard routes
import Landing      from '/imports/pages/Landing'
import Signup       from '/imports/pages/Signup'
import Signin       from '/imports/pages/Signin'
import MyProducts   from '/imports/pages/MyProducts'
import Catalog      from '/imports/pages/Catalog'
import NewProduct   from '/imports/pages/NewProduct'
import EditProduct  from '/imports/pages/EditProduct'
import NotFound     from '/imports/pages/NotFound'

// Admin routes
import AdminUsers   from '/imports/pages/admin/AdminUsers'


function MainLayout(props){
    return(
        <Switch>
            <Route path="/" exact                   component={Landing} />
            <Route path="/signup"                   component={Signup} />
            <Route path="/signin"                   component={Signin} />
            <Route path="/my_products"              component={MyProducts} />
            <Route path="/catalog/:user_id"         component={Catalog} />
            <Route path="/new_product"              component={NewProduct} />
            <Route path="/edit_product/:product_id" component={EditProduct} />
            <Route path="/admin/users"              component={AdminUsers} />
            <Route path="*"                         component={NotFound} />
        </Switch>
    )
}

export default MainLayout
