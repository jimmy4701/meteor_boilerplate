import React from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function MyProducts(props){
    return(
        <Container>
            <h1>Mes produits</h1>
            <Link to="/new_product">
                <Button color="green" icon="plus" content="Ajouter produit" />
            </Link>
        </Container>
    )
}

export default MyProducts