import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'
import Products from '/imports/api/products/products'
import Product from '/imports/components/Product'

function Catalog(props){
    return(
        <Container>
            <h1>Catalogue de {props.username}</h1>
            {!props.loading && props.products.map(product => {
                return <Product product={product} />
            })}
        </Container>
    )
}

export default withTracker(({match}) => {
    const {user_id} = match.params
    const products_pub = Meteor.subscribe('products.by_user', user_id)
    const loading = !products_pub.ready()
    const products = Products.find({seller: user_id}).fetch()

    return {
        loading,
        products
    }
})(Catalog)