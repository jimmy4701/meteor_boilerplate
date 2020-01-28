import React, {useState} from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import ProductForm from '/imports/components/ProductForm'

function NewProduct(props){

    return(
        <Container>
            <h1>Création d'un produit</h1>
            <ProductForm />
        </Container>
    )
}

export default NewProduct